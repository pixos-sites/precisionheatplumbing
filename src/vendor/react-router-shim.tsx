import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type RouteConfig = {
  path?: string;
  index?: boolean;
  Component?: React.ComponentType;
  children?: RouteConfig[];
};

type RouterConfig = RouteConfig[];

type LocationShape = {
  pathname: string;
};

type RouterContextValue = {
  location: LocationShape;
  navigate: (to: string) => void;
  outlet: ReactNode;
};

const RouterContext = createContext<RouterContextValue | null>(null);

export function createBrowserRouter(routes: RouterConfig) {
  return { routes };
}

function normalizePath(pathname: string) {
  if (!pathname || pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function matchChildRoute(routes: RouteConfig[] | undefined, pathname: string) {
  if (!routes?.length) return undefined;

  const normalized = normalizePath(pathname);
  const childPath = normalized === "/" ? "" : normalized.slice(1);

  return (
    routes.find((route) => route.index && childPath === "") ??
    routes.find((route) => route.path === childPath) ??
    routes.find((route) => route.path === "*")
  );
}

function RouterRenderer({ router }: { router: { routes: RouterConfig } }) {
  const [pathname, setPathname] = useState(() =>
    normalizePath(window.location.pathname)
  );

  useEffect(() => {
    const onPopState = () => setPathname(normalizePath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (to: string) => {
    const target = normalizePath(to);
    if (target === pathname) return;
    window.history.pushState({}, "", target);
    setPathname(target);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const rootRoute =
    router.routes.find((route) => route.path === "/") ?? router.routes[0];
  const RootComponent = rootRoute?.Component;
  const matchedChild = matchChildRoute(rootRoute?.children, pathname);
  const ChildComponent = matchedChild?.Component;

  const outlet = ChildComponent ? <ChildComponent /> : null;

  const contextValue = useMemo<RouterContextValue>(
    () => ({
      location: { pathname },
      navigate,
      outlet,
    }),
    [pathname, outlet]
  );

  if (!RootComponent) return null;

  return (
    <RouterContext.Provider value={contextValue}>
      <RootComponent />
    </RouterContext.Provider>
  );
}

export function RouterProvider({ router }: { router: { routes: RouterConfig } }) {
  return <RouterRenderer router={router} />;
}

export function Link({
  to,
  children,
  onClick,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }) {
  const router = useContext(RouterContext);
  const href = to.startsWith("/") ? to : `/${to}`;

  return (
    <a
      {...rest}
      href={href}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        if (rest.target && rest.target !== "_self") return;
        event.preventDefault();
        router?.navigate(href);
      }}
    >
      {children}
    </a>
  );
}

export function Outlet() {
  const router = useContext(RouterContext);
  return <>{router?.outlet ?? null}</>;
}

export function useLocation(): LocationShape {
  const router = useContext(RouterContext);
  return router?.location ?? { pathname: normalizePath(window.location.pathname) };
}

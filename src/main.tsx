
import { createRoot } from "react-dom/client";
import { figmaProjectsById } from "./config/figmaProjects";
import { getActivePreset } from "./config/getActivePreset";

const figmaAppModules = import.meta.glob("../Figma Builds/*/src/app/App.tsx");
const figmaStyleModules = import.meta.glob("../Figma Builds/*/src/styles/index.css");

function getFigmaModulePath(folder: string, type: "app" | "styles") {
  if (type === "app") {
    return `../Figma Builds/${folder}/src/app/App.tsx`;
  }
  return `../Figma Builds/${folder}/src/styles/index.css`;
}

function setDocumentTitle(title: string) {
  const safeTitle = title.trim();
  document.title = safeTitle.length > 0 ? safeTitle : "Trades Website Template";
}

async function loadApp() {
  const workflowMode = import.meta.env.VITE_WORKFLOW_MODE;
  const figmaProject = import.meta.env.VITE_FIGMA_PROJECT;

  if (workflowMode === "figma-led" && !figmaProject) {
    throw new Error(
      '[figma-led] Missing VITE_FIGMA_PROJECT. Example: VITE_FIGMA_PROJECT=polbuilt npm run dev:figma'
    );
  }

  if (workflowMode === "figma-led" && figmaProject) {
    const projectConfig = figmaProjectsById[figmaProject];
    if (!projectConfig) {
      throw new Error(
        `[figma-led] Unknown project "${figmaProject}". Add it to src/config/figmaProjects.ts`
      );
    }

    const styleImporter =
      figmaStyleModules[getFigmaModulePath(projectConfig.folder, "styles")];
    const appImporter = figmaAppModules[getFigmaModulePath(projectConfig.folder, "app")];

    if (!styleImporter || !appImporter) {
      throw new Error(
        `[figma-led] Missing app or styles entry for "${projectConfig.id}" in Figma Builds/${projectConfig.folder}`
      );
    }

    setDocumentTitle(`${projectConfig.name} | Demo`);
    await styleImporter();
    return (await appImporter()).default;
  }

  if (workflowMode === "catalogue") {
    setDocumentTitle("Design Catalogue");
    await import("./styles/index.css");
    return (await import("./catalogue/CatalogueApp.tsx")).default;
  }

  const preset = getActivePreset();
  setDocumentTitle(`${preset.brand.companyName} | Demo`);
  await import("./styles/index.css");
  return (await import("./app/App.tsx")).default;
}

loadApp().then((App) => {
  createRoot(document.getElementById("root")!).render(<App />);
});

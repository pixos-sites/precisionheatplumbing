export type FigmaProjectConfig = {
  id: string;
  name: string;
  folder: string;
};

// Register figma-led builds here. `id` is the value used in VITE_FIGMA_PROJECT.
export const figmaProjects: FigmaProjectConfig[] = [
  {
    id: "polbuilt",
    name: "PolBuilt",
    folder: "PolBuilt",
  },
];

export const figmaProjectsById = Object.fromEntries(
  figmaProjects.map((project) => [project.id, project])
) as Record<string, FigmaProjectConfig>;

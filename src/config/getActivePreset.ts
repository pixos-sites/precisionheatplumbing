import { defaultPreset, presets } from "./presets";
import type { BusinessPreset } from "./template.types";

export function getActivePreset(): BusinessPreset {
  const requestedPreset = import.meta.env.VITE_PRESET;

  if (!requestedPreset) {
    return defaultPreset;
  }

  const preset = presets[requestedPreset];
  if (preset) {
    return preset;
  }

  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.warn(
      `[preset] Unknown VITE_PRESET=\"${requestedPreset}\". Falling back to \"${defaultPreset.id}\".`
    );
  }

  return defaultPreset;
}

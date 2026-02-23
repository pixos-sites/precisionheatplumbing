import type { BusinessPreset } from "../template.types";
import { annieslandbuildersgroupPreset } from "./annieslandbuildersgroup";
import { electricianPreset } from "./electrician";
import { plumberPreset } from "./plumber";

export const presets: Record<string, BusinessPreset> = {
  annieslandbuildersgroup: annieslandbuildersgroupPreset,
  plumber: plumberPreset,
  electrician: electricianPreset,
};

export const defaultPreset = plumberPreset;

import type { BusinessPreset } from "../template.types";
import { annieslandbuildersgroupPreset } from "./annieslandbuildersgroup";
import { sclbuildersltdPreset } from "./sclbuildersltd";
import { precisionheatplumbingPreset } from "./precisionheatplumbing";

export const presets: Record<string, BusinessPreset> = {
  annieslandbuildersgroup: annieslandbuildersgroupPreset,
  sclbuildersltd: sclbuildersltdPreset,
  precisionheatplumbing: precisionheatplumbingPreset,
};

export const defaultPreset = precisionheatplumbingPreset;

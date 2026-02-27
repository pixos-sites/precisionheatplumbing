import type { BusinessPreset } from "../template.types";
import { annieslandbuildersgroupPreset } from "./annieslandbuildersgroup";
import { electricianPreset } from "./electrician";
import { plumberPreset } from "./plumber";
import { sclbuildersltdPreset } from "./sclbuildersltd";
import { precisionheatplumbingPreset } from "./precisionheatplumbing";

export const presets: Record<string, BusinessPreset> = {
  annieslandbuildersgroup: annieslandbuildersgroupPreset,
  plumber: plumberPreset,
  electrician: electricianPreset,
  sclbuildersltd: sclbuildersltdPreset,
  precisionheatplumbing: precisionheatplumbingPreset,
};

export const defaultPreset = precisionheatplumbingPreset;

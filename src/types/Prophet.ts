import type { LangText } from "./LangText";

export type Prophet = {
  slug: string;
  name: LangText;
  shortDesc: LangText;
  longDesc: LangText;
  order: number;
  ululAzm: boolean;
};
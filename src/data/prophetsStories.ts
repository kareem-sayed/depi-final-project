import type { ProphetStory } from "../types/ProphetStory";
import { adamStory } from "./prophets/adam/adamStory";
import { nuhStory } from "./prophets/nuh/nuhStory";
import { idrissStory } from "./prophets/idriss/idrissStory";
import { ibrahimStory } from "./prophets/ibrahim/ibrahimStory";
import { musaStory } from "./prophets/musa/musaStory";
import { yusufStory } from "./prophets/yusuf/yusufStory";
import { yunusStory } from "./prophets/yunus/yunusStory";
import { dhul_KiflStory } from "./prophets/dhul_kifl/dhul_kiflStory";
import { al_yasaStory } from "./prophets/al_yasa/al_yasaStory";
import { ilyasStory } from "./prophets/ilyas/ilyasStory";
import { ishaqStory } from "./prophets/ishaq/ishaqStory";
import { hudStory } from "./prophets/hud/hudStory";
import { salihStory } from "./prophets/salih/salihStory";

export const prophetStories: Record<string, ProphetStory> = {
  adam: adamStory,
  nuh: nuhStory,
  idriss: idrissStory,
  ibrahim: ibrahimStory,
  musa: musaStory,
  yusuf: yusufStory,
  yunus: yunusStory,
  dhul_kifl: dhul_KiflStory,
  al_yasa: al_yasaStory,
  ilyas: ilyasStory,
  ishaq: ishaqStory,
  hud: hudStory,
  salih: salihStory,
};

Object.values(prophetStories).forEach((ProphStory) => {
  ProphStory.NumOfChapters = ProphStory.chapters.length;
});

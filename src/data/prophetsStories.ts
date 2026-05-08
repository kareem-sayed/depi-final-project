import type { ProphetStory } from "../types/ProphetStory";
import { adamStory } from "./prophets/adam/adamStory";
import { nuhStory } from "./prophets/nuh/nuhStory";
import { idrissStory } from "./prophets/idriss/idrissStory";
import { ibrahimStory } from "./prophets/ibrahim/ibrahimStory";
import { musaStory } from "./prophets/musa/musaStory";
import { yusufStory } from "./prophets/yusuf/yusufStory";
import { yunusStory } from "./prophets/yunus/yunusStory";

export const prophetStories: Record<string, ProphetStory> = {
  adam: adamStory,
  nuh: nuhStory,
  idriss: idrissStory,
  ibrahim: ibrahimStory,
  musa: musaStory,
  yusuf: yusufStory,
  yunus: yunusStory,
};

Object.values(prophetStories).forEach((ProphStory) => {
  ProphStory.NumOfChapters = ProphStory.chapters.length;
});

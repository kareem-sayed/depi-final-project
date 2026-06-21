import type { ProphetStory } from "../types/ProphetStory";
import { adamStory } from "./prophets/adam/adamStory";
import { nuhStory } from "./prophets/nuh/nuhStory";
import { idrissStory } from "./prophets/idriss/idrissStory";
import { ibrahimStory } from "./prophets/ibrahim/ibrahimStory";
import { musaStory } from "./prophets/musa/musaStory";
import { dhulKiflStory } from "./prophets/dhulKifl/dhulKiflStory";
import { al_yasaStory } from "./prophets/al_yasa/al_yasaStory";
import { ilyasStory } from "./prophets/ilyas/ilyasStory";
import { ishaqStory } from "./prophets/ishaq/ishaqStory";
import { hudStory } from "./prophets/hud/hudStory";
import { salihStory } from "./prophets/salih/salihStory";
import { shoaibStory } from "./prophets/shoaib/shoaibStory";
import { yaqubStory } from "./prophets/yaqub/yaqubStory";
import { ismailStory } from "./prophets/ismail/ismailStory";
import { yusufStory } from "./prophets/yusuf/yusufStory";
import { yunusStory } from "./prophets/yunus/yunusStory";
import { lutStory } from "./prophets/lut/lutStory";
import { ayoubStory } from "./prophets/ayoub/ayoubStory";
import { harunStory } from "./prophets/harun/harunStory";
import { dawudStory } from "./prophets/dawud/dawudStory";
import { zakariyaStory } from "./prophets/zakariya/zakariyaStory";
import { yahyaStory } from "./prophets/yahya/yahyaStory";
import { isaStory } from "./prophets/isa/isaStory";
import { sulaymanStory } from "./prophets/sulayman/sulaymanStory";
import { mohamedStory } from "./prophets/mohamed/mohamedStory";

export const prophetStories: Record<string, ProphetStory> = {
  adam: adamStory,
  idriss: idrissStory,
  nuh: nuhStory,
  hud: hudStory,
  salih: salihStory,
  ibrahim: ibrahimStory,
  lut: lutStory,
  ismail: ismailStory,
  ishaq: ishaqStory,
  yaqub: yaqubStory,
  yusuf: yusufStory,
  shoaib: shoaibStory,
  ayoub: ayoubStory,
  dhulKifl: dhulKiflStory,
  musa: musaStory,
  harun: harunStory,
  dawud: dawudStory,
  sulayman: sulaymanStory,
  ilyas: ilyasStory,
  al_yasa: al_yasaStory,
  yunus: yunusStory,
  zakariya: zakariyaStory,
  yahya: yahyaStory,
  isa: isaStory,
  mohamed: mohamedStory,
};

Object.values(prophetStories).forEach((ProphStory) => {
  ProphStory.NumOfChapters = ProphStory.chapters.length;
});

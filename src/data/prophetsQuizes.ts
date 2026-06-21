import type { ProphetQuiz } from "../types/ProphetQuiz";
import { adamQuiz } from "./prophets/adam/adamQuiz";
import { nuhQuiz } from "./prophets/nuh/nuhQuiz";
import { idrissQuiz } from "./prophets/idriss/idrissQuiz";
import { ibrahimQuiz } from "./prophets/ibrahim/ibrahimQuiz";
import { musaQuiz } from "./prophets/musa/musaQuiz";
import { dhulKiflQuiz } from "./prophets/dhulKifl/dhulKiflQuiz";
import { al_yasaQuiz } from "./prophets/al_yasa/al_yasaQuiz";
import { ilyasQuiz } from "./prophets/ilyas/ilyasQuiz";
import { ishaqQuiz } from "./prophets/ishaq/ishaqQuiz";
import { hudQuiz } from "./prophets/hud/hudQuiz";
import { salihQuiz } from "./prophets/salih/salihQuiz";
import { shoaibQuiz } from "./prophets/shoaib/shoaibQuiz";
import { yaqubQuiz } from "./prophets/yaqub/yaqubQuiz";
import { ismailQuiz } from "./prophets/ismail/ismailQuiz";
import { yusufQuiz } from "./prophets/yusuf/yusufQuiz";
import { yunusQuiz } from "./prophets/yunus/yunusQuiz";
import { lutQuiz } from "./prophets/lut/lutQuiz";
import { ayoubQuiz } from "./prophets/ayoub/ayoubQuiz";
import { harunQuiz } from "./prophets/harun/harunQuiz";
import { dawudQuiz } from "./prophets/dawud/dawudQuiz";
import { zakariyaQuiz } from "./prophets/zakariya/zakariyaQuiz";
import { yahyaQuiz } from "./prophets/yahya/yahyaQuiz";
import { isaQuiz } from "./prophets/isa/isaQuiz";
import { sulaymanQuiz } from "./prophets/sulayman/sulaymanQuiz";
import { mohamedQuiz } from "./prophets/mohamed/mohamedQuiz";

export const prophetQuizes: Record<string, ProphetQuiz[]> = {
  adam: adamQuiz,
  idriss: idrissQuiz,
  nuh: nuhQuiz,
  hud: hudQuiz,
  salih: salihQuiz,
  ibrahim: ibrahimQuiz,
  lut: lutQuiz,
  ismail: ismailQuiz,
  ishaq: ishaqQuiz,
  yaqub: yaqubQuiz,
  yusuf: yusufQuiz,
  shoaib: shoaibQuiz,
  ayoub: ayoubQuiz,
  dhulKifl: dhulKiflQuiz,
  musa: musaQuiz,
  harun: harunQuiz,
  dawud: dawudQuiz,
  sulayman: sulaymanQuiz,
  ilyas: ilyasQuiz,
  al_yasa: al_yasaQuiz,
  yunus: yunusQuiz,
  zakariya: zakariyaQuiz,
  yahya: yahyaQuiz,
  isa: isaQuiz,
  mohamed: mohamedQuiz,
};

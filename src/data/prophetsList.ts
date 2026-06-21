import type { Prophet } from "../types/Prophet";

export const prophets: Prophet[] = [
  {
    slug: "adam",
    name: { ar: "سيدنا آدم", en: "Prophet Adam" },
    shortDesc: {
      ar: "أبو البشر وأول الأنبياء",
      en: "Father of humanity and the first prophet",
    },
    longDesc: {
      ar: "أول إنسان وأول نبي خلقه الله، عاش في الجنة ثم نزل إلى الأرض ليبدأ حياة البشر، وعلّم الناس عبادة الله.",
      en: "The first human and the first prophet created by Allah, lived in Paradise then descended to Earth to begin human life, and taught people the worship of Allah.",
    },
    order: 1,
    ululAzm: false,
  },
  {
    slug: "idriss",
    name: { ar: "سيدنا إدريس", en: "Prophet Idris" },
    shortDesc: {
      ar: "نبي الحكمة والعلم",
      en: "Prophet of wisdom and knowledge",
    },
    longDesc: {
      ar: "يُعد من أوائل الأنبياء بعد آدم، اشتهر بالحكمة والعلم ورفع الله مكانته.",
      en: "He is considered one of the first prophets after Adam, famous for his wisdom and knowledge, and Allah raised his status.",
    },
    order: 2,
    ululAzm: false,
  },
  {
    slug: "nuh",
    name: { ar: "سيدنا نوح", en: "Prophet Noah" },
    shortDesc: {
      ar: "نبي الطوفان وأول أولي العزم",
      en: "Prophet of the flood and the first of the steadfast",
    },
    longDesc: {
      ar: "دعا قومه لقرون إلى عبادة الله، فلما كذبوه أهلكهم الله بالطوفان ونجاه ومن آمن معه في السفينة.",
      en: "He called his people to the worship of Allah, but when they disbelieved, Allah destroyed them with the flood and saved him and those who believed with him in the ship.",
    },
    order: 3,
    ululAzm: true,
  },
  {
    slug: "hud",
    name: { ar: "سيدنا هود", en: "Prophet Hud" },
    shortDesc: { ar: "نبي قوم عاد", en: "Prophet of the people of 'Ad" },
    longDesc: {
      ar: "أُرسل إلى قوم عاد يدعوهم للتوحيد، فكذبوه فأهلكهم الله بريح شديدة.",
      en: "He was sent to the people of 'Ad to call them to the worship of Allah, but when they disbelieved, Allah destroyed them with a severe wind.",
    },
    order: 4,
    ululAzm: false,
  },
  {
    slug: "salih",
    name: { ar: "سيدنا صالح", en: "Prophet Saleh" },
    shortDesc: { ar: "نبي ثمود", en: "Prophet of the people of Thamud" },
    longDesc: {
      ar: "أُرسل لقوم ثمود وجاءهم بمعجزة الناقة، لكنهم عقروها فأهلكهم الله.",
      en: "He was sent to the people of Thamud with a miracle in the form of a she-camel, but they killed it and thus were destroyed by Allah.",
    },
    order: 5,
    ululAzm: false,
  },
  {
    slug: "ibrahim",
    name: { ar: "سيدنا إبراهيم", en: "Prophet Abraham" },
    shortDesc: {
      ar: "أبو الأنبياء وخليل الرحمن",
      en: "Father of the prophets and friend of the Most Merciful",
    },
    longDesc: {
      ar: "دعا إلى التوحيد وكسر الأصنام، وابتُلي بابتلاءات عظيمة ونجح فيها.",
      en: "He called to the worship of Allah and broke the idols, and was tested with great trials and succeeded in them.",
    },
    order: 6,
    ululAzm: true,
  },
  {
    slug: "lut",
    name: { ar: "سيدنا لوط", en: "Prophet Lot" },
    shortDesc: { ar: "نبي قوم سدوم", en: "Prophet of the people of Sodom" },
    longDesc: {
      ar: "دعا قومه لترك الفواحش، فأهلكهم الله بعد إصرارهم على الفساد.",
      en: "He called his people to abandon the indecencies, but Allah destroyed them after they persisted in corruption.",
    },
    order: 7,
    ululAzm: false,
  },
  {
    slug: "ismail",
    name: { ar: "سيدنا إسماعيل", en: "Prophet Ishmael" },
    shortDesc: {
      ar: "ذبيح الله وابن إبراهيم",
      en: "Sacrifice of God and son of Abraham",
    },
    longDesc: {
      ar: "ساعد أباه إبراهيم في رفع الكعبة، واشتهر بالصبر والطاعة.",
      en: "He helped his father Abraham in raising the Kaaba, and was famous for his patience and obedience.",
    },
    order: 8,
    ululAzm: false,
  },
  {
    slug: "ishaq",
    name: { ar: "سيدنا إسحاق", en: "Prophet Isaac" },
    shortDesc: { ar: "ابن إبراهيم", en: "Son of Abraham" },
    longDesc: {
      ar: "نبي من ذرية إبراهيم، باركه الله وخرج من نسله أنبياء كثيرون.",
      en: "He was a prophet from the lineage of Abraham, blessed by Allah and from whose descendants many prophets emerged.",
    },
    order: 9,
    ululAzm: false,
  },
  {
    slug: "yaqub",
    name: { ar: "سيدنا يعقوب", en: "Prophet Jacob" },
    shortDesc: { ar: "إسرائيل وأبو يوسف", en: "Israel and father of Joseph" },
    longDesc: {
      ar: "اشتهر بالصبر الشديد خاصة على فقدان ابنه يوسف.",
      en: "He was famous for his extreme patience, especially after losing his son Joseph.",
    },
    order: 10,
    ululAzm: false,
  },
  {
    slug: "yusuf",
    name: { ar: "سيدنا يوسف", en: "Prophet Joseph" },
    shortDesc: {
      ar: "صاحب الرؤيا وعزيز مصر",
      en: "Owner of the dream and noble in Egypt",
    },
    longDesc: {
      ar: "ابتُلي ثم مكنه الله في الأرض وأصبح عزيز مصر بعد صبر طويل.",
      en: "He was tested and then Allah granted him success on earth and became noble in Egypt after his long patience.",
    },
    order: 11,
    ululAzm: false,
  },
  {
    slug: "shoaib",
    name: { ar: "سيدنا شعيب", en: "Prophet Shoaib" },
    shortDesc: { ar: "نبي قوم مدين", en: "Prophet of the people of Madin" },
    longDesc: {
      ar: "دعا قومه للعدل في الكيل والميزان، فكذبوه فأهلكهم الله.",
      en: "He called his people to uphold justice in weights and measures, but they disbelieved and thus were destroyed by Allah.",
    },
    order: 12,
    ululAzm: false,
  },
  {
    slug: "ayoub",
    name: { ar: "سيدنا أيوب", en: "Prophet Job" },
    shortDesc: { ar: "نبي الصبر", en: "Prophet of patience" },
    longDesc: {
      ar: "ابتُلي بمرض شديد وفقدان المال والأهل وصبر حتى شفاه الله.",
      en: "He was tested with a severe illness and loss of wealth and family, but remained patient until Allah healed him.",
    },
    order: 13,
    ululAzm: false,
  },
  {
    slug: "dhulKifl",
    name: { ar: "سيدنا ذو الكفل", en: "Prophet Dhu al-Kifl" },
    shortDesc: {
      ar: "نبي الصبر والالتزام",
      en: "Prophet of patience and commitment",
    },
    longDesc: {
      ar: "نبي صالح عُرف بالعدل والصبر والوفاء بالعهد.",
      en: "He was a prophet known for justice, patience, and keeping promises.",
    },
    order: 14,
    ululAzm: false,
  },
  {
    slug: "musa",
    name: { ar: "سيدنا موسى", en: "Prophet Moses" },
    shortDesc: {
      ar: "كليم الله ومُحاور فرعون",
      en: "Messenger of God and opponent of Pharaoh",
    },
    longDesc: {
      ar: "أُرسل لفرعون وحدثت معه معجزات عظيمة مثل شق البحر.",
      en: "He was sent to Pharaoh and performed great miracles with him, such as parting the sea.",
    },
    order: 15,
    ululAzm: true,
  },
  {
    slug: "harun",
    name: { ar: "سيدنا هارون", en: "Prophet Aaron" },
    shortDesc: {
      ar: "أخ موسى ومساعده",
      en: "Brother of Moses and his assistant",
    },
    longDesc: {
      ar: "ساعد موسى في دعوة فرعون وقومه إلى التوحيد.",
      en: "He helped Moses in calling Pharaoh and his people to monotheism.",
    },
    order: 16,
    ululAzm: false,
  },
  {
    slug: "dawud",
    name: { ar: "سيدنا داود", en: "Prophet David" },
    shortDesc: { ar: "ملك ونبي", en: "King and prophet" },
    longDesc: {
      ar: "آتاه الله الزبور وقوة في الحكم والعدل.",
      en: "Allah granted him the Psalms and strength in governance and justice.",
    },
    order: 17,
    ululAzm: false,
  },
  {
    slug: "sulayman",
    name: { ar: "سيدنا سليمان", en: "Prophet Solomon" },
    shortDesc: { ar: "ملك الأنبياء", en: "King of the prophets" },
    longDesc: {
      ar: "سخر الله له الجن والريح وعلمه لغة الطير.",
      en: "Allah subservient to him the jinn and the wind, and taught him the language of the birds.",
    },
    order: 18,
    ululAzm: false,
  },
  {
    slug: "ilyas",
    name: { ar: "سيدنا إلياس", en: "Prophet Elijah" },
    shortDesc: { ar: "نبي التوحيد", en: "Prophet of monotheism" },
    longDesc: {
      ar: "دعا قومه لعبادة الله وترك عبادة الأصنام.",
      en: "He called his people to worship God and abandon the worship of idols.",
    },
    order: 19,
    ululAzm: false,
  },
  {
    slug: "al_yasa",
    name: { ar: "سيدنا اليسع", en: "Prophet Elisha" },
    shortDesc: {
      ar: "نبي من بني إسرائيل",
      en: "Prophet from the children of Israel",
    },
    longDesc: {
      ar: "تابع رسالة إلياس ودعا إلى التوحيد.",
      en: "He followed the message of Elijah and called to monotheism.",
    },
    order: 20,
    ululAzm: false,
  },
  {
    slug: "yunus",
    name: { ar: "سيدنا يونس", en: "Prophet Jonah" },
    shortDesc: { ar: "صاحب الحوت", en: "The man of the whale" },
    longDesc: {
      ar: "ابتلعه الحوت ثم نجاه الله بعد دعائه.",
      en: "He was swallowed by the whale then saved by Allah after his supplication.",
    },
    order: 21,
    ululAzm: false,
  },
  {
    slug: "zakariya",
    name: { ar: "سيدنا زكريا", en: "Prophet Zechariah" },
    shortDesc: {
      ar: "نبي الدعاء واليقين",
      en: "Prophet of supplication and faith",
    },
    longDesc: {
      ar: "كان مثالًا للصبر والعبادة، دعا الله أن يرزقه ولدًا رغم كبر سنه وعقم زوجته، فاستجاب الله له ورزقه يحيى ليكون نبيًا من بعده.",
      en: "He was a model of patience and devotion. Despite his old age and his wife's barrenness, he prayed sincerely to Allah for a child. Allah answered his prayer and blessed him with John, who became a prophet after him.",
    },
    order: 22,
    ululAzm: false,
  },
  {
    slug: "yahya",
    name: { ar: "سيدنا يحيى", en: "Prophet John" },
    shortDesc: { ar: "نبي الطهر", en: "Prophet of purity" },
    longDesc: {
      ar: "اشتهر بالتقوى والطهارة منذ صغره.",
      en: "He was known for his piety and purity from a young age.",
    },
    order: 23,
    ululAzm: false,
  },
  {
    slug: "isa",
    name: { ar: "سيدنا عيسى", en: "Prophet Jesus" },
    shortDesc: { ar: "كلمة الله وروح منه", en: "Word of God and His spirit" },
    longDesc: {
      ar: "أُرسل لبني إسرائيل وأيده الله بالمعجزات كإحياء الموتى.",
      en: "He was sent to the children of Israel and Allah supported him with miracles such as bringing the dead back to life.",
    },
    order: 24,
    ululAzm: true,
  },
  {
    slug: "mohamed",
    name: { ar: "سيدنا محمد", en: "Prophet mohamed" },
    shortDesc: {
      ar: "خاتم الأنبياء والمرسلين",
      en: "Seal of the Prophets and Messengers",
    },
    longDesc: {
      ar: "أُرسل رحمة للعالمين وختم الله به النبوة، ودعا إلى الإسلام.",
      en: "He was sent as a mercy to all the worlds and Allah sealed prophethood with him, calling people to Islam.",
    },
    order: 25,
    ululAzm: true,
  },
];

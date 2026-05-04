import type { ProphetStory } from "../types/ProphetStory";

export const prophetStories: Record<string, ProphetStory> = {
  adam: {
    name: { ar: "آدم", en: "Adam" },
    title: {
      ar: "أبو البشر وبداية الخلق",
      en: "The Father of Humanity and the Beginning of Creation",
    },
    era: {
      ar: "بداية الخلق",
      en: "The Beginning of Creation",
    },
    location: {
      ar: "الجنة ثم الأرض",
      en: "Paradise then the Earth",
    },
    hero: {
      ar: "أول إنسان خلقه الله بيده، وعلّمه الأسماء كلها، ثم استخلفه في الأرض ليبدأ مسيرة البشرية.",
      en: "The first human created by Allah with His own hands, taught him all names, and appointed him as a steward on Earth to begin the human journey.",
    },
    sections: [
      {
        title: {
          ar: "الخلق",
          en: "The Creation of Adam",
        },
        body: {
          ar: "خلق الله آدم من طين، ثم سوّاه ونفخ فيه من روحه، فصار بشرًا حيًا كامل الخِلقة.",
          en: "Allah created Adam from clay, shaped him, and breathed into him from His spirit, making him a complete living human.",
        },
        ayah: {
          text: "إِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي خَالِقٌ بَشَرًا مِّن طِينٍ",
          ref: {
            ar: "ص: 71",
            en: "Sad: 71",
          },
        },
        ayahAudioUrl: "/audios/adam/The Creation of Adam.mp3",
      },
      {
        title: {
          ar: "تعليم الأسماء",
          en: "Teaching the Names",
        },
        body: {
          ar: "علّم الله آدم الأسماء كلها، وميّزه بالعلم والفهم، ليُظهر فضله على الملائكة.",
          en: "Allah taught Adam all names and distinguished him with knowledge and understanding to show his virtue over the angels.",
        },
        ayah: {
          text: "وَعَلَّمَ آدَمَ الْأَسْمَاءَ كُلَّهَا ثُمَّ عَرَضَهُمْ عَلَى الْمَلَائِكَةِ فَقَالَ أَنبِئُونِي بِأَسْمَاءِ هَٰؤُلَاءِ إِن كُنتُمْ صَادِقِينَ",
          ref: {
            ar: "البقرة: 31",
            en: "Al-Baqarah: 31",
          },
        },
        ayahAudioUrl: "/audios/adam/Teaching the Names.mp3",
      },
      {
        title: {
          ar: "سجود الملائكة",
          en: "The Prostration of the Angels",
        },
        body: {
          ar: "أمر الله الملائكة أن يسجدوا لآدم تكريمًا له، فسجدوا جميعًا إلا إبليس الذي استكبر وعصى.",
          en: "Allah commanded the angels to prostrate to Adam in honor of him. They all obeyed except Iblis, who became arrogant and disobeyed.",
        },
        ayah: {
          text: "وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوا لِآدَمَ فَسَجَدُوا إِلَّا إِبْلِيسَ أَبَىٰ وَاسْتَكْبَرَ وَكَانَ مِنَ الْكَافِرِينَ",
          ref: {
            ar: "البقرة: 34",
            en: "Al-Baqarah: 34",
          },
        },
        ayahAudioUrl: "/audios/adam/The Prostration of the Angels.mp3",
      },
      {
        title: {
          ar: "خلق حواء",
          en: "The Creation of Eve",
        },
        body: {
          ar: "خلق الله حواء من ضلع آدم لتكون له زوجة ورفيقة في الحياة، وأمرهما أن يسكنا الجنة معًا.",
          en: "Allah created Eve from Adam's rib to be his wife and companion in life, and commanded them to dwell in Paradise together.",
        },
        ayah: {
          text: "يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُم مِّن نَّفْسٍ وَاحِدَةٍ وَخَلَقَ مِنْهَا زَوْجَهَا وَبَثَّ مِنْهُمَا رِجَالًا كَثِيرًا وَنِسَاءً ۚ وَاتَّقُوا اللَّهَ الَّذِي تَسَاءَلُونَ بِهِ وَالْأَرْحَامَ ۚ إِنَّ اللَّهَ كَانَ عَلَيْكُمْ رَقِيبًا",
          ref: {
            ar: "النساء: 1",
            en: "An-Nisa: 1",
          },
        },
        ayahAudioUrl: "/audios/adam/The Creation of Eve.mp3",
      },
      {
        title: {
          ar: "السكن في الجنة",
          en: "Living in Paradise",
        },
        body: {
          ar: "أسكن الله آدم وزوجه حواء الجنة، وأباح لهما نعيمها كله إلا شجرة واحدة نهاهما عن الاقتراب منها.",
          en: "Allah settled Adam and his wife Eve in Paradise and allowed them all its blessings except one tree, which they were forbidden to approach.",
        },
      },
      {
        title: {
          ar: "وسوسة إبليس",
          en: "The Temptation of Iblis",
        },
        body: {
          ar: "استغل إبليس الفرصة ووسوس لهما، ووعدهما بالخلود، حتى أكلا من الشجرة المنهي عنها.",
          en: "Iblis took the chance and tempted them, promising immortality until they ate from the forbidden tree.",
        },
        ayah: {
          text: "فَأَزَلَّهُمَا الشَّيْطَانُ عَنْهَا فَأَخْرَجَهُمَا مِمَّا كَانَا فِيهِ ۖ وَقُلْنَا اهْبِطُوا بَعْضُكُمْ لِبَعْضٍ عَدُوٌّ ۖ وَلَكُمْ فِي الْأَرْضِ مُسْتَقَرٌّ وَمَتَاعٌ إِلَىٰ حِينٍ",
          ref: {
            ar: "البقرة: 36",
            en: "Al-Baqarah: 36",
          },
        },
        ayahAudioUrl: "/audios/adam/The Temptation of Iblis.mp3",
      },
      {
        title: {
          ar: "المعصية",
          en: "The Disobedience",
        },
        body: {
          ar: "المعصية كانت أول خطيئة في تاريخ البشر، حيث أكلا من الشجرة المنهي عنها.",
          en: "The disobedience was the first sin in human history, where they ate from the forbidden tree.",
        },
        ayah: {
          text: "فَأَكَلَا مِنْهَا فَبَدَتْ لَهُمَا سَوْآتُهُمَا وَطَفِقَا يَخْصِفَانِ عَلَيْهِمَا مِن وَرَقِ الْجَنَّةِ ۚ وَعَصَىٰ آدَمُ رَبَّهُ فَغَوَىٰ",
          ref: {
            ar: "طه: 120",
            en: "Taha: 120",
          },
        },
        ayahAudioUrl: "/audios/adam/The Disobedience.mp3",
      },
      {
        title: {
          ar: "الهبوط إلى الأرض",
          en: "Descent to Earth",
        },
        body: {
          ar: "بعد المعصية، أمر الله آدم وحواء وإبليس بالهبوط إلى الأرض، لتبدأ حياة البشر واختبارهم فيها.",
          en: "After the disobedience, Allah commanded Adam, Eve, and Iblis to descend to Earth, where human life and its test would begin.",
        },
        ayah: {
          text: "قُلْنَا اهْبِطُوا مِنْهَا جَمِيعًا ۖ فَإِمَّا يَأْتِيَنَّكُم مِّنِّي هُدًى فَمَن تَبِعَ هُدَايَ فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ",
          ref: {
            ar: "البقرة: 38",
            en: "Al-Baqarah: 38",
          },
        },
        ayahAudioUrl: "/audios/adam/Descent to Earth.mp3",
      },
      {
        title: {
          ar: "التوبة والرحمة",
          en: "Repentance and Mercy",
        },
        body: {
          ar: "ندم آدم وتاب إلى الله، فتلقى كلمات من ربه فتاب عليه، ليعلّم البشر باب التوبة والرجوع إلى الله.",
          en: "Adam regretted and repented to Allah. He received words from his Lord, and Allah accepted his repentance, teaching humanity the door of repentance.",
        },
        ayah: {
          text: "فَتَلَقَّىٰ آدَمُ مِن رَّبِّهِ كَلِمَاتٍ فَتَابَ عَلَيْهِ إِنَّهُ هُوَ التَّوَّابُ الرَّحِيمُ",
          ref: {
            ar: "البقرة: 37",
            en: "Al-Baqarah: 37",
          },
        },
        ayahAudioUrl: "/audios/adam/Repentance and Mercy.mp3",
      },
      {
        title: {
          ar: "الحياة في الأرض",
          en: "Life on Earth",
        },
        body: {
          ar: "بدأ آدم وحواء حياتهما في الأرض، وأنجبا أبناءً وبنات، ليبدأوا مسيرة البشرية وتنتشر ذريتهما في كل مكان.",
          en: "Adam and Eve began their life on Earth, having sons and daughters, starting the human journey and spreading their offspring everywhere.",
        },
      },
      {
        title: {
          ar: "وفاة آدم",
          en: "The Death of Adam",
        },
        body: {
          ar: "عاش آدم في الأرض فترة طويلة، وتوفي عن عمر يناهز 930 سنة، تاركًا وراءه إرثًا من الحكمة والعلم والتقوى.",
          en: "Adam lived on Earth for a long time and died at the age of about 930 years, leaving behind a legacy of wisdom, knowledge, and piety.",
        },
      },
      {
        title: {
          ar: "الدروس والعبر",
          en: "Lessons and Morals",
        },
        body: {
          ar: "قصة آدم تعلمنا أهمية الطاعة لله، وضرورة التوبة عند الخطأ، وأن الله رحيم يقبل التوبة ويغفر الذنوب.",
          en: "The story of Adam teaches us the importance of obedience to Allah, the necessity of repentance when making mistakes, and that Allah is Merciful, accepting repentance and forgiving sins.",
        },
      },
    ],
  },
  nuh: {
    name: { ar: "نوح", en: "Noah" },
    title: {
      ar: "نبي الطوفان وأول أولي العزم",
      en: "The Prophet of the Flood and the First of the Messengers of Strong Resolve",
    },
    era: {
      ar: "بعد آدم بقرون طويلة",
      en: "Many generations after Adam",
    },
    location: {
      ar: "أرض قومه ثم السفينة",
      en: "The land of his people, then the Ark",
    },
    hero: {
      ar: "أرسله الله إلى قومٍ عبدوا الأصنام، فدعاهم قرونًا طويلة بالصبر والحكمة، فلما كذبوه نجاه الله ومن آمن معه بالسفينة.",
      en: "Allah sent him to a people who worshipped idols. He called them for many centuries with patience and wisdom. When they denied him, Allah saved him and the believers through the Ark.",
    },
    sections: [
      {
        title: {
          ar: "إرسال نوح إلى قومه",
          en: "The Mission of Noah",
        },
        body: {
          ar: "بعث الله نوحًا إلى قومه بعدما انتشرت عبادة الأصنام بينهم، ليعيدهم إلى التوحيد وعبادة الله وحده.",
          en: "Allah sent Noah to his people after idol worship had spread among them, to bring them back to monotheism and worship of Allah alone.",
        },
        ayah: {
          text: "إِنَّا أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِ",
          ref: {
            ar: "نوح: 1",
            en: "Nuh: 1",
          },
        },
        ayahAudioUrl: "/audios/nuh/The Mission of Noah.mp3",
      },
      {
        title: {
          ar: "دعوة طويلة وصبر عظيم",
          en: "A Long Call and Great Patience",
        },
        body: {
          ar: "ظل نوح يدعو قومه ليلًا ونهارًا، سرًّا وجهارًا، مستخدمًا كل وسائل النصح، لكنه واجه عنادًا شديدًا.",
          en: "Noah continued calling his people night and day, privately and publicly, using every means of advice, yet he faced severe stubbornness.",
        },
        ayah: {
          text: "قَالَ رَبِّ إِنِّي دَعَوْتُ قَوْمِي لَيْلًا وَنَهَارًا",
          ref: {
            ar: "نوح: 5",
            en: "Nuh: 5",
          },
        },
        ayahAudioUrl: "/audios/nuh/A Long Call and Great Patience.mp3",
      },
      {
        title: {
          ar: "سخرية القوم",
          en: "Mockery of the People",
        },
        body: {
          ar: "بدلًا من الاستجابة، سخر قومه منه واتهموه بالضلال، ورفضوا ترك عبادة الأصنام.",
          en: "Instead of responding, his people mocked him, accused him of error, and refused to abandon idol worship.",
        },
        ayah: {
          text: "وَقَالُوا لَا تَذَرُنَّ آلِهَتَكُمْ",
          ref: {
            ar: "نوح: 23",
            en: "Nuh: 23",
          },
        },
        ayahAudioUrl: "/audios/nuh/Mockery of the People.mp3",
      },
      {
        title: {
          ar: "الدعاء على الكافرين",
          en: "Supplication Against the Disbelievers",
        },
        body: {
          ar: "بعد سنوات طويلة من الرفض، دعا نوح ربه أن ينصر المؤمنين ويُنهي فساد المكذبين.",
          en: "After many years of rejection, Noah prayed to his Lord to support the believers and end the corruption of the deniers.",
        },
        ayah: {
          text: "رَبِّ لَا تَذَرْ عَلَى الْأَرْضِ مِنَ الْكَافِرِينَ دَيَّارًا",
          ref: {
            ar: "نوح: 26",
            en: "Nuh: 26",
          },
        },
        ayahAudioUrl: "/audios/nuh/Supplication Against the Disbelievers.mp3",
      },
      {
        title: {
          ar: "بناء السفينة",
          en: "Building the Ark",
        },
        body: {
          ar: "أوحى الله إلى نوح أن يصنع سفينة عظيمة، فبدأ في بنائها بأمر الله، بينما استمر قومه في السخرية منه.",
          en: "Allah revealed to Noah to build a great Ark. He began constructing it by Allah’s command while his people continued mocking him.",
        },
        ayah: {
          text: "وَاصْنَعِ الْفُلْكَ بِأَعْيُنِنَا وَوَحْيِنَا",
          ref: {
            ar: "هود: 37",
            en: "Hud: 37",
          },
        },
        ayahAudioUrl: "/audios/nuh/Building the Ark.mp3",
      },
      {
        title: {
          ar: "بدء الطوفان",
          en: "The Beginning of the Flood",
        },
        body: {
          ar: "حين جاء أمر الله، تفجرت الأرض بالماء ونزل المطر بغزارة، وبدأ الطوفان العظيم.",
          en: "When Allah’s command came, water burst from the earth and rain poured heavily, beginning the great flood.",
        },
        ayah: {
          text: "فَفَتَحْنَا أَبْوَابَ السَّمَاءِ بِمَاءٍ مُّنْهَمِرٍ",
          ref: {
            ar: "القمر: 11",
            en: "Al-Qamar: 11",
          },
        },
        ayahAudioUrl: "/audios/nuh/The Beginning of the Flood.mp3",
      },
      {
        title: {
          ar: "النجاة في السفينة",
          en: "Salvation in the Ark",
        },
        body: {
          ar: "ركب نوح السفينة ومعه المؤمنون ومن كل زوجين اثنين، فنجاهم الله من الغرق.",
          en: "Noah boarded the Ark with the believers and pairs of creatures, and Allah saved them from drowning.",
        },
        ayah: {
          text: "احْمِلْ فِيهَا مِن كُلٍّ زَوْجَيْنِ اثْنَيْنِ",
          ref: {
            ar: "هود: 40",
            en: "Hud: 40",
          },
        },
        ayahAudioUrl: "/audios/nuh/Salvation in the Ark.mp3",
      },
      {
        title: {
          ar: "ابن نوح",
          en: "The Son of Noah",
        },
        body: {
          ar: "دعا نوح ابنه ليركب السفينة وينجو، لكنه رفض وظن أن الجبل سيحميه، فكان من الغارقين.",
          en: "Noah called his son to board the Ark and be saved, but he refused, thinking a mountain would protect him, so he was among the drowned.",
        },
        ayah: {
          text: "قَالَ سَآوِي إِلَىٰ جَبَلٍ يَعْصِمُنِي مِنَ الْمَاءِ",
          ref: {
            ar: "هود: 43",
            en: "Hud: 43",
          },
        },
        ayahAudioUrl: "/audios/nuh/The Son of Noah.mp3",
      },
      {
        title: {
          ar: "انتهاء الطوفان",
          en: "The End of the Flood",
        },
        body: {
          ar: "أمر الله الأرض أن تبتلع ماءها، والسماء أن تمسك المطر، فانتهى الطوفان واستقرت السفينة.",
          en: "Allah commanded the earth to swallow its water and the sky to stop raining. The flood ended and the Ark came to rest.",
        },
        ayah: {
          text: "وَقِيلَ يَا أَرْضُ ابْلَعِي مَاءَكِ",
          ref: {
            ar: "هود: 44",
            en: "Hud: 44",
          },
        },
        ayahAudioUrl: "/audios/nuh/The End of the Flood.mp3",
      },
      {
        title: {
          ar: "بداية جديدة للبشرية",
          en: "A New Beginning for Humanity",
        },
        body: {
          ar: "خرج نوح ومن معه بسلام، وبدأت مرحلة جديدة للبشرية بعد هلاك المكذبين.",
          en: "Noah and those with him disembarked in peace, and a new phase of humanity began after the destruction of the deniers.",
        },
      },
      {
        title: {
          ar: "الدروس والعبر",
          en: "Lessons and Morals",
        },
        body: {
          ar: "قصة نوح تعلمنا الصبر الطويل في الدعوة، والثبات على الحق، وأن النجاة تكون بالإيمان وطاعة الله لا بالنسب ولا بالقوة.",
          en: "The story of Noah teaches long patience in الدعوة, steadfastness upon truth, and that salvation comes through faith and obedience to Allah, not lineage or power.",
        },
      },
    ],
  },
  ibrahim: {
    name: { ar: "إبراهيم", en: "Abraham" },
    title: {
      ar: "أبو الأنبياء وخليل الرحمن",
      en: "The Father of the Prophets and the Close Friend of Allah",
    },
    era: {
      ar: "بعد نوح بقرون",
      en: "Centuries after Noah",
    },
    location: {
      ar: "العراق، الشام، مصر، مكة",
      en: "Iraq, Levant, Egypt, Makkah",
    },
    hero: {
      ar: "من أعظم الأنبياء، دعا إلى التوحيد، وحطم الأصنام، وابتُلي فصبر، وبنى الكعبة مع ابنه إسماعيل.",
      en: "One of the greatest prophets. He called to monotheism, broke the idols, endured great trials, and built the Kaaba with his son Ishmael.",
    },
    sections: [
      {
        title: {
          ar: "البحث عن الحق",
          en: "The Search for Truth",
        },
        body: {
          ar: "تأمل إبراهيم في الكواكب والقمر والشمس، وأدرك أن المعبود الحق لا يغيب ولا يأفل، فاهتدى إلى عبادة الله وحده.",
          en: "Abraham reflected upon the stars, moon, and sun, realizing that the true Lord does not disappear, so he was guided to worship Allah alone.",
        },
        ayah: {
          text: "إِنِّي وَجَّهْتُ وَجْهِيَ لِلَّذِي فَطَرَ السَّمَاوَاتِ وَالْأَرْضَ",
          ref: {
            ar: "الأنعام: 79",
            en: "Al-An'am: 79",
          },
        },
        ayahAudioUrl: "/audios/ibrahim/The Search for Truth.mp3",
      },
      {
        title: {
          ar: "دعوة أبيه وقومه",
          en: "Calling His Father and People",
        },
        body: {
          ar: "بدأ إبراهيم بدعوة أبيه وقومه بالحكمة والرفق، ونهاهم عن عبادة الأصنام التي لا تسمع ولا تنفع.",
          en: "Abraham began by calling his father and people with wisdom and gentleness, warning them against worshipping idols that neither hear nor benefit.",
        },
        ayah: {
          text: "يَا أَبَتِ لِمَ تَعْبُدُ مَا لَا يَسْمَعُ وَلَا يُبْصِرُ",
          ref: {
            ar: "مريم: 42",
            en: "Maryam: 42",
          },
        },
        ayahAudioUrl: "/audios/ibrahim/Calling His Father and People.mp3",
      },
      {
        title: {
          ar: "تحطيم الأصنام",
          en: "Breaking the Idols",
        },
        body: {
          ar: "دخل إبراهيم إلى معبد قومه فكسر الأصنام جميعًا إلا كبيرهم، ليقيم عليهم الحجة ويبين عجز ما يعبدون.",
          en: "Abraham entered the temple of his people and broke all the idols except the largest one, to establish proof against them and show the weakness of what they worshipped.",
        },
        ayah: {
          text: "فَجَعَلَهُمْ جُذَاذًا إِلَّا كَبِيرًا لَّهُمْ",
          ref: {
            ar: "الأنبياء: 58",
            en: "Al-Anbiya: 58",
          },
        },
        ayahAudioUrl: "/audios/ibrahim/Breaking the Idols.mp3",
      },
      {
        title: {
          ar: "الإلقاء في النار",
          en: "Thrown into the Fire",
        },
        body: {
          ar: "غضب قومه وقرروا إحراقه، فألقوه في نار عظيمة، فجعلها الله عليه بردًا وسلامًا.",
          en: "His people became furious and decided to burn him. They threw him into a great fire, but Allah made it cool and peaceful for him.",
        },
        ayah: {
          text: "قُلْنَا يَا نَارُ كُونِي بَرْدًا وَسَلَامًا عَلَىٰ إِبْرَاهِيمَ",
          ref: {
            ar: "الأنبياء: 69",
            en: "Al-Anbiya: 69",
          },
        },
        ayahAudioUrl: "/audios/ibrahim/Thrown into the Fire.mp3",
      },
      {
        title: {
          ar: "الهجرة في سبيل الله",
          en: "Migration for Allah",
        },
        body: {
          ar: "هاجر إبراهيم من أرض قومه فرارًا بدينه، متنقلًا بين البلاد يدعو إلى الله وينشر التوحيد.",
          en: "Abraham migrated from the land of his people for the sake of his faith, traveling between lands calling to Allah and spreading monotheism.",
        },
        ayah: {
          text: "إِنِّي مُهَاجِرٌ إِلَىٰ رَبِّي",
          ref: {
            ar: "العنكبوت: 26",
            en: "Al-Ankabut: 26",
          },
        },
        ayahAudioUrl: "/audios/ibrahim/Migration for Allah.mp3",
      },
      {
        title: {
          ar: "البشارة بالولد",
          en: "Glad Tidings of a Son",
        },
        body: {
          ar: "رزق الله إبراهيم في كبر سنه بولدين كريمين: إسماعيل ثم إسحاق، وكانت نعمة عظيمة بعد انتظار طويل.",
          en: "Allah granted Abraham in old age two noble sons: Ishmael then Isaac, a great blessing after long waiting.",
        },
        ayah: {
          text: "الْحَمْدُ لِلَّهِ الَّذِي وَهَبَ لِي عَلَى الْكِبَرِ إِسْمَاعِيلَ وَإِسْحَاقَ",
          ref: {
            ar: "إبراهيم: 39",
            en: "Ibrahim: 39",
          },
        },
        ayahAudioUrl: "/audios/ibrahim/Glad Tidings of a Son.mp3",
      },
      {
        title: {
          ar: "رؤيا الذبح",
          en: "The Vision of Sacrifice",
        },
        body: {
          ar: "رأى إبراهيم في المنام أنه يذبح ابنه، وكانت رؤيا حق واختبارًا عظيمًا للطاعة، فاستجاب هو وابنه لأمر الله.",
          en: "Abraham saw in a dream that he was sacrificing his son. It was a true vision and a great test of obedience, and both father and son submitted to Allah’s command.",
        },
        ayah: {
          text: "يَا بُنَيَّ إِنِّي أَرَىٰ فِي الْمَنَامِ أَنِّي أَذْبَحُكَ",
          ref: {
            ar: "الصافات: 102",
            en: "As-Saffat: 102",
          },
        },
        ayahAudioUrl: "/audios/ibrahim/The Vision of Sacrifice.mp3",
      },
      {
        title: {
          ar: "الفداء العظيم",
          en: "The Great Ransom",
        },
        body: {
          ar: "لما نجحا في الاختبار، فدى الله الابن بذبح عظيم، وأصبح ذلك شعيرة يتقرب بها المسلمون في الأضحى.",
          en: "When they succeeded in the test, Allah ransomed the son with a great sacrifice, which became a sacred rite commemorated in Eid al-Adha.",
        },
        ayah: {
          text: "وَفَدَيْنَاهُ بِذِبْحٍ عَظِيمٍ",
          ref: {
            ar: "الصافات: 107",
            en: "As-Saffat: 107",
          },
        },
        ayahAudioUrl: "/audios/ibrahim/The Great Ransom.mp3",
      },
      {
        title: {
          ar: "بناء الكعبة",
          en: "Building the Kaaba",
        },
        body: {
          ar: "رفع إبراهيم وإسماعيل قواعد الكعبة في مكة، وجعلاها بيتًا للتوحيد والعبادة.",
          en: "Abraham and Ishmael raised the foundations of the Kaaba in Makkah, making it a house of monotheism and worship.",
        },
        ayah: {
          text: "وَإِذْ يَرْفَعُ إِبْرَاهِيمُ الْقَوَاعِدَ مِنَ الْبَيْتِ وَإِسْمَاعِيلُ",
          ref: {
            ar: "البقرة: 127",
            en: "Al-Baqarah: 127",
          },
        },
        ayahAudioUrl: "/audios/ibrahim/Building the Kaaba.mp3",
      },
      {
        title: {
          ar: "الأذان بالحج",
          en: "The Call to Pilgrimage",
        },
        body: {
          ar: "أمر الله إبراهيم أن يؤذن في الناس بالحج، فصار البيت الحرام مقصد المؤمنين من كل مكان.",
          en: "Allah commanded Abraham to proclaim pilgrimage to the people, and the Sacred House became a destination for believers from every place.",
        },
        ayah: {
          text: "وَأَذِّن فِي النَّاسِ بِالْحَجِّ",
          ref: {
            ar: "الحج: 27",
            en: "Al-Hajj: 27",
          },
        },
        ayahAudioUrl: "/audios/ibrahim/The Call to Pilgrimage.mp3",
      },
      {
        title: {
          ar: "الدروس والعبر",
          en: "Lessons and Morals",
        },
        body: {
          ar: "قصة إبراهيم تعلمنا قوة التوحيد، والشجاعة في قول الحق، والصبر على الابتلاء، والتسليم الكامل لأمر الله.",
          en: "The story of Abraham teaches the power of monotheism, courage in speaking truth, patience through trials, and complete submission to Allah.",
        },
      },
    ],
  },
  musa: {
    name: { ar: "موسى", en: "Moses" },
    title: {
      ar: "كليم الله ومنقذ بني إسرائيل",
      en: "The One Spoken to by Allah and the Deliverer of بني إسرائيل",
    },
    era: {
      ar: "بعد يوسف بقرون",
      en: "Centuries after Joseph",
    },
    location: {
      ar: "مصر، مدين، سيناء",
      en: "Egypt, Madyan, Sinai",
    },
    hero: {
      ar: "من أعظم الأنبياء، أرسله الله إلى فرعون، وأيده بالمعجزات، وشق له البحر، وأنزل عليه التوراة.",
      en: "One of the greatest prophets. Allah sent him to Pharaoh, supported him with miracles, parted the sea for him, and revealed the Torah to him.",
    },
    sections: [
      {
        title: {
          ar: "مولد موسى في زمن فرعون",
          en: "The Birth of Moses in Pharaoh's Time",
        },
        body: {
          ar: "وُلد موسى في زمن كان فرعون يقتل فيه أبناء بني إسرائيل خوفًا على ملكه، فحفظه الله منذ ولادته.",
          en: "Moses was born at a time when Pharaoh was killing the sons of the Children of Israel out of fear for his kingdom, but Allah protected him from birth.",
        },
        ayah: {
          text: "إِنَّ فِرْعَوْنَ عَلَا فِي الْأَرْضِ وَجَعَلَ أَهْلَهَا شِيَعًا",
          ref: {
            ar: "القصص: 4",
            en: "Al-Qasas: 4",
          },
        },
        ayahAudioUrl: "/audios/musa/The Birth of Moses in Pharaoh's Time.mp3",
      },
      {
        title: {
          ar: "الصندوق في النهر",
          en: "The Chest in the River",
        },
        body: {
          ar: "أوحى الله إلى أم موسى أن تضعه في صندوق وتلقيه في النهر، ووعدها أن يرده إليها ويجعله من المرسلين.",
          en: "Allah inspired the mother of Moses to place him in a chest and cast it into the river, promising to return him to her and make him one of the messengers.",
        },
        ayah: {
          text: "وَأَوْحَيْنَا إِلَىٰ أُمِّ مُوسَىٰ أَنْ أَرْضِعِيهِ",
          ref: {
            ar: "القصص: 7",
            en: "Al-Qasas: 7",
          },
        },
        ayahAudioUrl: "/audios/musa/The Chest in the River.mp3",
      },
      {
        title: {
          ar: "التربية في قصر فرعون",
          en: "Raised in Pharaoh's Palace",
        },
        body: {
          ar: "وصل موسى إلى قصر فرعون، فأحبته امرأة فرعون، ونشأ في القصر تحت رعاية الله رغم عداوة فرعون له.",
          en: "Moses arrived at Pharaoh's palace, where Pharaoh's wife loved him. He grew up there under Allah’s care despite Pharaoh’s hostility.",
        },
        ayah: {
          text: "وَقَالَتِ امْرَأَتُ فِرْعَوْنَ قُرَّتُ عَيْنٍ لِّي وَلَكَ",
          ref: {
            ar: "القصص: 9",
            en: "Al-Qasas: 9",
          },
        },
        ayahAudioUrl: "/audios/musa/Raised in Pharaoh's Palace.mp3",
      },
      {
        title: {
          ar: "الخروج إلى مدين",
          en: "Departure to Madyan",
        },
        body: {
          ar: "خرج موسى من مصر بعد حادثة قتل غير مقصودة، متوجهًا إلى مدين، حيث بدأ مرحلة جديدة من حياته.",
          en: "Moses left Egypt after an unintended killing incident and headed to Madyan, where a new chapter of his life began.",
        },
        ayah: {
          text: "فَخَرَجَ مِنْهَا خَائِفًا يَتَرَقَّبُ",
          ref: {
            ar: "القصص: 21",
            en: "Al-Qasas: 21",
          },
        },
        ayahAudioUrl: "/audios/musa/Departure to Madyan.mp3",
      },
      {
        title: {
          ar: "مساعدة الفتاتين",
          en: "Helping the Two Women",
        },
        body: {
          ar: "وصل موسى إلى ماء مدين، فوجد فتاتين تنتظران، فسقى لهما ثم استظل في الظل داعيًا ربه.",
          en: "Moses arrived at the well of Madyan and found two women waiting. He watered their flock for them, then rested in the shade praying to his Lord.",
        },
        ayah: {
          text: "فَسَقَىٰ لَهُمَا ثُمَّ تَوَلَّىٰ إِلَى الظِّلِّ",
          ref: {
            ar: "القصص: 24",
            en: "Al-Qasas: 24",
          },
        },
        ayahAudioUrl: "/audios/musa/Helping the Two Women.mp3",
      },
      {
        title: {
          ar: "النداء عند الطور",
          en: "The Call at Mount Tur",
        },
        body: {
          ar: "في طريق عودته من مدين، رأى نارًا عند جبل الطور، فناداه الله واصطفاه للرسالة.",
          en: "On his way back from Madyan, he saw a fire near Mount Tur, where Allah called him and chose him for prophethood.",
        },
        ayah: {
          text: "إِنِّي أَنَا اللَّهُ رَبُّ الْعَالَمِينَ",
          ref: {
            ar: "القصص: 30",
            en: "Al-Qasas: 30",
          },
        },
        ayahAudioUrl: "/audios/musa/The Call at Mount Tur.mp3",
      },
      {
        title: {
          ar: "المعجزات الكبرى",
          en: "The Great Miracles",
        },
        body: {
          ar: "أيّد الله موسى بمعجزات عظيمة، منها العصا التي تتحول حيّة، واليد التي تخرج بيضاء من غير سوء.",
          en: "Allah supported Moses with great miracles, including the staff turning into a serpent and the hand emerging shining white without harm.",
        },
        ayah: {
          text: "وَأَلْقِ عَصَاكَ",
          ref: {
            ar: "القصص: 31",
            en: "Al-Qasas: 31",
          },
        },
        ayahAudioUrl: "/audios/musa/The Great Miracles.mp3",
      },
      {
        title: {
          ar: "دعوة فرعون",
          en: "Calling Pharaoh",
        },
        body: {
          ar: "ذهب موسى ومعه أخوه هارون إلى فرعون يدعوانه إلى عبادة الله وترك الظلم والطغيان.",
          en: "Moses and his brother Aaron went to Pharaoh calling him to worship Allah and abandon oppression and tyranny.",
        },
        ayah: {
          text: "اذْهَبَا إِلَىٰ فِرْعَوْنَ إِنَّهُ طَغَىٰ",
          ref: {
            ar: "طه: 43",
            en: "Taha: 43",
          },
        },
        ayahAudioUrl: "/audios/musa/Calling Pharaoh.mp3",
      },
      {
        title: {
          ar: "مواجهة السحرة",
          en: "Confronting the Magicians",
        },
        body: {
          ar: "جمع فرعون السحرة ليغلب موسى، فلما ألقى موسى عصاه ابتلعت ما صنعوا، فآمن السحرة بالله.",
          en: "Pharaoh gathered magicians to defeat Moses, but when Moses cast his staff, it swallowed their illusions, so the magicians believed in Allah.",
        },
        ayah: {
          text: "فَأُلْقِيَ السَّحَرَةُ سُجَّدًا",
          ref: {
            ar: "طه: 70",
            en: "Taha: 70",
          },
        },
        ayahAudioUrl: "/audios/musa/Confronting the Magicians.mp3",
      },
      {
        title: {
          ar: "الخروج وشق البحر",
          en: "The Exodus and Parting of the Sea",
        },
        body: {
          ar: "خرج موسى ببني إسرائيل ليلًا، فلحقهم فرعون، فأمر الله موسى أن يضرب البحر بعصاه فانفلق طريقًا يابسًا.",
          en: "Moses led the Children of Israel out by night. Pharaoh pursued them, and Allah commanded Moses to strike the sea with his staff, splitting it into a dry path.",
        },
        ayah: {
          text: "فَاضْرِبْ لَهُمْ طَرِيقًا فِي الْبَحْرِ يَبَسًا",
          ref: {
            ar: "طه: 77",
            en: "Taha: 77",
          },
        },
        ayahAudioUrl: "/audios/musa/The Exodus and Parting of the Sea.mp3",
      },
      {
        title: {
          ar: "هلاك فرعون",
          en: "The Destruction of Pharaoh",
        },
        body: {
          ar: "دخل فرعون وجنوده البحر خلف موسى، فلما اكتملوا فيه أطبق الله عليهم الماء فغرقوا أجمعين.",
          en: "Pharaoh and his soldiers entered the sea after Moses. Once they were inside, Allah caused the waters to close over them and they all drowned.",
        },
        ayah: {
          text: "فَأَغْرَقْنَاهُ وَمَن مَّعَهُ جَمِيعًا",
          ref: {
            ar: "الإسراء: 103",
            en: "Al-Isra: 103",
          },
        },
        ayahAudioUrl: "/audios/musa/The Destruction of Pharaoh.mp3",
      },
      {
        title: {
          ar: "نزول التوراة",
          en: "The Revelation of the Torah",
        },
        body: {
          ar: "واعد الله موسى عند الطور، وأنزل عليه التوراة هدى ونورًا لبني إسرائيل.",
          en: "Allah appointed Moses at Mount Tur and revealed the Torah to him as guidance and light for the Children of Israel.",
        },
        ayah: {
          text: "وَكَتَبْنَا لَهُ فِي الْأَلْوَاحِ مِن كُلِّ شَيْءٍ مَّوْعِظَةً",
          ref: {
            ar: "الأعراف: 145",
            en: "Al-A'raf: 145",
          },
        },
        ayahAudioUrl: "/audios/musa/The Revelation of the Torah.mp3",
      },
      {
        title: {
          ar: "الدروس والعبر",
          en: "Lessons and Morals",
        },
        body: {
          ar: "قصة موسى تعلمنا الثقة بالله، ومواجهة الظلم بالشجاعة، والصبر على الأذى، وأن النصر يأتي بعد الشدة.",
          en: "The story of Moses teaches trust in Allah, courage against oppression, patience through hardship, and that victory comes after difficulty.",
        },
      },
    ],
  },
  yusuf: {
    name: { ar: "يوسف", en: "Joseph" },
    title: {
      ar: "الصديق وصاحب الرؤيا وعزيز مصر",
      en: "The Truthful One, Interpreter of Dreams, and Aziz of Egypt",
    },
    era: {
      ar: "بعد إبراهيم بقرون",
      en: "Centuries after Abraham",
    },
    location: {
      ar: "كنعان، مصر",
      en: "Canaan, Egypt",
    },
    hero: {
      ar: "نبي ابتلاه الله بالمحن منذ طفولته، فصبر على كيد إخوته وفتنة السجن، ثم رفعه الله ليصبح عزيز مصر.",
      en: "A prophet tested with hardships from childhood. He patiently endured his brothers’ betrayal and prison trials, until Allah raised him to become the Aziz of Egypt.",
    },
    sections: [
      {
        title: {
          ar: "الرؤيا الأولى",
          en: "The First Dream",
        },
        body: {
          ar: "رأى يوسف في صغره أحد عشر كوكبًا والشمس والقمر يسجدون له، فكانت بشارة بمستقبل عظيم.",
          en: "In his childhood, Joseph saw eleven stars, the sun, and the moon prostrating to him, a sign of a great future.",
        },
        ayah: {
          text: "إِذْ قَالَ يُوسُفُ لِأَبِيهِ يَا أَبَتِ إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا",
          ref: {
            ar: "يوسف: 4",
            en: "Yusuf: 4",
          },
        },
        ayahAudioUrl: "/audios/yusuf/The First Dream.mp3",
      },
      {
        title: {
          ar: "غيرة الإخوة",
          en: "The Brothers' Jealousy",
        },
        body: {
          ar: "حسد إخوة يوسف مكانته عند أبيه، فبدأوا يفكرون في التخلص منه.",
          en: "Joseph’s brothers became jealous of his position with their father, and began planning to get rid of him.",
        },
        ayah: {
          text: "اقْتُلُوا يُوسُفَ أَوِ اطْرَحُوهُ أَرْضًا",
          ref: {
            ar: "يوسف: 9",
            en: "Yusuf: 9",
          },
        },
        ayahAudioUrl: "/audios/yusuf/The Brothers Jealousy.mp3",
      },
      {
        title: {
          ar: "إلقاؤه في البئر",
          en: "Thrown into the Well",
        },
        body: {
          ar: "اتفق إخوته على إلقائه في بئر عميق، ثم عادوا إلى أبيهم يبكون كذبًا.",
          en: "His brothers agreed to throw him into a deep well, then returned to their father pretending to cry.",
        },
        ayah: {
          text: "فَلَمَّا ذَهَبُوا بِهِ وَأَجْمَعُوا أَن يَجْعَلُوهُ فِي غَيَابَتِ الْجُبِّ",
          ref: {
            ar: "يوسف: 15",
            en: "Yusuf: 15",
          },
        },
        ayahAudioUrl: "/audios/yusuf/Thrown into the Well.mp3",
      },
      {
        title: {
          ar: "بيع يوسف في مصر",
          en: "Sold in Egypt",
        },
        body: {
          ar: "مرت قافلة فأخرجته من البئر، ثم بيع في مصر بثمن قليل، لكنه كان محفوظًا بعناية الله.",
          en: "A caravan passed by and rescued him from the well, then he was sold in Egypt for a small price, but he was under Allah’s protection.",
        },
        ayah: {
          text: "وَشَرَوْهُ بِثَمَنٍ بَخْسٍ دَرَاهِمَ مَعْدُودَةٍ",
          ref: {
            ar: "يوسف: 20",
            en: "Yusuf: 20",
          },
        },
        ayahAudioUrl: "/audios/yusuf/Sold in Egypt.mp3",
      },
      {
        title: {
          ar: "بيت العزيز",
          en: "The House of Aziz",
        },
        body: {
          ar: "نشأ يوسف في بيت عزيز مصر، وأعطاه الله جمالًا وحكمة وعلماً.",
          en: "Joseph grew up in the house of the Aziz of Egypt, and Allah granted him beauty, wisdom, and knowledge.",
        },
        ayah: {
          text: "وَلَمَّا بَلَغَ أَشُدَّهُ آتَيْنَاهُ حُكْمًا وَعِلْمًا",
          ref: {
            ar: "يوسف: 22",
            en: "Yusuf: 22",
          },
        },
        ayahAudioUrl: "/audios/yusuf/The House of Aziz.mp3",
      },
      {
        title: {
          ar: "الفتنة والابتلاء",
          en: "The Trial of Temptation",
        },
        body: {
          ar: "راودته امرأة العزيز عن نفسه، فاختار يوسف العفة وابتعد عنها، فكان من الصادقين.",
          en: "The wife of Aziz attempted to seduce him, but Joseph chose chastity and avoided her, remaining among the truthful.",
        },
        ayah: {
          text: "مَعَاذَ اللَّهِ ۖ إِنَّهُ رَبِّي أَحْسَنَ مَثْوَايَ",
          ref: {
            ar: "يوسف: 23",
            en: "Yusuf: 23",
          },
        },
        ayahAudioUrl: "/audios/yusuf/The Trial of Temptation.mp3",
      },
      {
        title: {
          ar: "السجن",
          en: "The Prison",
        },
        body: {
          ar: "دخل يوسف السجن ظلمًا، لكنه استمر في الدعوة إلى الله وتفسير الرؤى.",
          en: "Joseph was unjustly imprisoned, but he continued calling to Allah and interpreting dreams.",
        },
        ayah: {
          text: "ثُمَّ بَدَا لَهُم مِّن بَعْدِ مَا رَأَوُا الْآيَاتِ لَيَسْجُنُنَّهُ حَتَّىٰ حِينٍ",
          ref: {
            ar: "يوسف: 35",
            en: "Yusuf: 35",
          },
        },
        ayahAudioUrl: "/audios/yusuf/The Prison.mp3",
      },
      {
        title: {
          ar: "تفسير الأحلام",
          en: "Interpreting Dreams",
        },
        body: {
          ar: "اشتهر يوسف في السجن بقدرته على تفسير الرؤى، فآمن به كثيرون.",
          en: "Joseph became known in prison for his ability to interpret dreams, and many people believed in him.",
        },
        ayah: {
          text: "يَا صَاحِبَيِ السِّجْنِ أَمَّا أَحَدُكُمَا فَيَسْقِي رَبَّهُ خَمْرًا",
          ref: {
            ar: "يوسف: 41",
            en: "Yusuf: 41",
          },
        },
        ayahAudioUrl: "/audios/yusuf/Dream Interpretation.mp3",
      },
      {
        title: {
          ar: "رؤيا الملك",
          en: "The King's Dream",
        },
        body: {
          ar: "رأى ملك مصر رؤيا غريبة، ففسرها يوسف بدقة، فكانت سببًا في خروجه من السجن.",
          en: "The king of Egypt saw a strange dream, which Joseph interpreted accurately, leading to his release from prison.",
        },
        ayah: {
          text: "يُوسُفُ أَيُّهَا الصِّدِّيقُ أَفْتِنَا فِي سَبْعِ بَقَرَاتٍ",
          ref: {
            ar: "يوسف: 46",
            en: "Yusuf: 46",
          },
        },
        ayahAudioUrl: "/audios/yusuf/The King's Dream.mp3",
      },
      {
        title: {
          ar: "التمكين في مصر",
          en: "Authority in Egypt",
        },
        body: {
          ar: "خرج يوسف من السجن وولّاه الملك خزائن الأرض، فأصبح عزيز مصر.",
          en: "Joseph was released from prison and appointed by the king over the storehouses of Egypt, becoming Aziz of Egypt.",
        },
        ayah: {
          text: "اجْعَلْنِي عَلَىٰ خَزَائِنِ الْأَرْضِ",
          ref: {
            ar: "يوسف: 55",
            en: "Yusuf: 55",
          },
        },
        ayahAudioUrl: "/audios/yusuf/Authority in Egypt.mp3",
      },
      {
        title: {
          ar: "لقاء الإخوة",
          en: "Reunion with His Brothers",
        },
        body: {
          ar: "جاء إخوته إلى مصر، ولم يعرفوه، فاختبرهم ثم عفا عنهم بعد أن ظهر الحق.",
          en: "His brothers came to Egypt and did not recognize him. He tested them, then forgave them after the truth became clear.",
        },
        ayah: {
          text: "لَا تَثْرِيبَ عَلَيْكُمُ الْيَوْمَ",
          ref: {
            ar: "يوسف: 92",
            en: "Yusuf: 92",
          },
        },
        ayahAudioUrl: "/audios/yusuf/Reunion with His Brothers.mp3",
      },
      {
        title: {
          ar: "لم شمل العائلة",
          en: "Family Reunion",
        },
        body: {
          ar: "اجتمع يوسف بأبيه يعقوب بعد فراق طويل، وارتفعت السجدة التي رآها في صغره.",
          en: "Joseph reunited with his father Jacob after a long separation, and the dream he saw in childhood came true.",
        },
        ayah: {
          text: "وَرَفَعَ أَبَوَيْهِ عَلَى الْعَرْشِ",
          ref: {
            ar: "يوسف: 100",
            en: "Yusuf: 100",
          },
        },
        ayahAudioUrl: "/audios/yusuf/Family Reunion.mp3",
      },
      {
        title: {
          ar: "الدروس والعبر",
          en: "Lessons and Morals",
        },
        body: {
          ar: "قصة يوسف تعلمنا الصبر، والعفة، وأن بعد العسر يسر، وأن تدبير الله دائمًا خير.",
          en: "The story of Joseph teaches patience, chastity, and that after hardship comes ease, and that Allah’s plan is always best.",
        },
      },
    ],
  },
  yunus: {
    name: { ar: "يونس", en: "Jonah" },
    title: {
      ar: "صاحب الحوت ونبي التوبة",
      en: "The Prophet of the Whale and Repentance",
    },
    era: {
      ar: "بعد موسى في فترة متأخرة",
      en: "Later period after Moses",
    },
    location: {
      ar: "نينوى (العراق)",
      en: "Nineveh (Iraq)",
    },
    hero: {
      ar: "نبي أرسله الله إلى قومه، فدعاهم طويلًا، ثم غادرهم غضبًا، فابتلاه الله في بطن الحوت، ثم نجّاه بتوبته ودعائه.",
      en: "A prophet sent to his people who called them for a long time. He left them in anger, so Allah tested him in the belly of the whale, then saved him through his repentance and supplication.",
    },
    sections: [
      {
        title: {
          ar: "دعوة قوم نينوى",
          en: "Calling the People of Nineveh",
        },
        body: {
          ar: "أرسل الله يونس إلى قوم نينوى ليدعوهم إلى التوحيد وترك عبادة الأصنام.",
          en: "Allah sent Jonah to the people of Nineveh to call them to monotheism and abandon idol worship.",
        },
        ayah: {
          text: "وَإِنَّ يُونُسَ لَمِنَ الْمُرْسَلِينَ",
          ref: {
            ar: "الصافات: 139",
            en: "As-Saffat: 139",
          },
        },
        ayahAudioUrl: "/audios/yunus/Calling the People of Nineveh.mp3",
      },
      {
        title: {
          ar: "إصرار القوم",
          en: "The People's Stubbornness",
        },
        body: {
          ar: "رفض قومه دعوته في البداية، واستمروا في الكفر والعناد.",
          en: "His people initially rejected his message and persisted in disbelief and stubbornness.",
        },
        ayah: {
          text: "فَتَوَلَّىٰ عَنْهُمْ وَقَالَ مَكَانَكُمْ",
          ref: {
            ar: "الصافات: 140",
            en: "As-Saffat: 140",
          },
        },
        ayahAudioUrl: "/audios/yunus/The People's Stubbornness.mp3",
      },
      {
        title: {
          ar: "مغادرة يونس لقومه",
          en: "Jonah Leaving His People",
        },
        body: {
          ar: "غادر يونس قومه قبل أن يأذن له الله، ظنًا أن العذاب سيحل بهم.",
          en: "Jonah left his people before Allah’s permission, thinking punishment would befall them.",
        },
        ayah: {
          text: "فَظَنَّ أَن لَّن نَّقْدِرَ عَلَيْهِ",
          ref: {
            ar: "الأنبياء: 87",
            en: "Al-Anbiya: 87",
          },
        },
        ayahAudioUrl: "/audios/yunus/Leaving His People.mp3",
      },
      {
        title: {
          ar: "الركوب في السفينة",
          en: "Boarding the Ship",
        },
        body: {
          ar: "ركب سفينة في البحر، لكن حدثت قرعة فكان من الملقَين في البحر.",
          en: "He boarded a ship at sea, but a drawing of lots led to him being thrown into the sea.",
        },
        ayah: {
          text: "فَسَاهَمَ فَكَانَ مِنَ الْمُدْحَضِينَ",
          ref: {
            ar: "الصافات: 141",
            en: "As-Saffat: 141",
          },
        },
        ayahAudioUrl: "/audios/yunus/Boarding the Ship.mp3",
      },
      {
        title: {
          ar: "ابتلاع الحوت",
          en: "Swallowed by the Whale",
        },
        body: {
          ar: "ابتلعه الحوت في البحر، فكان في ظلمات ثلاث: الليل، البحر، وبطن الحوت.",
          en: "He was swallowed by a whale in the sea, entering three darknesses: night, sea, and the whale’s belly.",
        },
        ayah: {
          text: "فَالْتَقَمَهُ الْحُوتُ وَهُوَ مُلِيمٌ",
          ref: {
            ar: "الصافات: 142",
            en: "As-Saffat: 142",
          },
        },
        ayahAudioUrl: "/audios/yunus/Swallowed by the Whale.mp3",
      },
      {
        title: {
          ar: "دعاء يونس في الظلمات",
          en: "Jonah's Prayer in Darkness",
        },
        body: {
          ar: "في بطن الحوت دعا ربه تائبًا خاشعًا معترفًا بذنبه، فاستجاب الله له.",
          en: "Inside the whale, he called upon his Lord in humility and repentance, acknowledging his mistake, and Allah responded to him.",
        },
        ayah: {
          text: "لَا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
          ref: {
            ar: "الأنبياء: 87",
            en: "Al-Anbiya: 87",
          },
        },
        ayahAudioUrl: "/audios/yunus/Jonahs Prayer.mp3",
      },
      {
        title: {
          ar: "استجابة الله له",
          en: "Allah's Response",
        },
        body: {
          ar: "استجاب الله دعاءه، فنجّاه من الكرب وأخرجه من بطن الحوت حيًا.",
          en: "Allah answered his supplication, saved him from distress, and brought him out of the whale alive.",
        },
        ayah: {
          text: "فَاسْتَجَبْنَا لَهُ وَنَجَّيْنَاهُ مِنَ الْغَمِّ",
          ref: {
            ar: "الأنبياء: 88",
            en: "Al-Anbiya: 88",
          },
        },
        ayahAudioUrl: "/audios/yunus/Allah Response.mp3",
      },
      {
        title: {
          ar: "إيمان القوم بعد التوبة",
          en: "The People's Belief After Repentance",
        },
        body: {
          ar: "بعد رحيل يونس، تاب قومه وآمنوا، فرفع الله عنهم العذاب.",
          en: "After Jonah’s departure, his people repented and believed, so Allah lifted the punishment from them.",
        },
        ayah: {
          text: "فَلَوْلَا كَانَتْ قَرْيَةٌ آمَنَتْ فَنَفَعَهَا إِيمَانُهَا",
          ref: {
            ar: "يونس: 98",
            en: "Yunus: 98",
          },
        },
        ayahAudioUrl: "/audios/yunus/Repentance of His People.mp3",
      },
      {
        title: {
          ar: "خروج يونس بسلام",
          en: "Jonah's Safe Emergence",
        },
        body: {
          ar: "أخرجه الله من بطن الحوت مريضًا ثم شفاه وأنبت عليه شجرة ليظلّه.",
          en: "Allah brought him out of the whale weak and ill, then healed him and caused a plant to grow for shade.",
        },
        ayah: {
          text: "فَنَبَذْنَاهُ بِالْعَرَاءِ وَهُوَ سَقِيمٌ",
          ref: {
            ar: "الصافات: 145",
            en: "As-Saffat: 145",
          },
        },
        ayahAudioUrl: "/audios/yunus/Emergence Safely.mp3",
      },
      {
        title: {
          ar: "الدروس والعبر",
          en: "Lessons and Morals",
        },
        body: {
          ar: "قصة يونس تعلمنا أن الدعاء في الشدة ينقذ الإنسان، وأن التوبة باب مفتوح دائمًا، وأن الصبر على الدعوة مهم.",
          en: "The story of Jonah teaches that supplication in hardship saves a person, repentance is always open, and patience in calling to truth is essential.",
        },
      },
    ],
  },
};
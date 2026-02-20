export interface Episode {
  id: number;
  slug: string;
  titleKey: string;
  showSlug: string;
  showKey: string;
  descKey: string;
  longDescKey: string;
  duration: number;
  date: string;
  category: string;
  categoryStyle: string;
  listens: number;
  guestName?: string;
  guestBioKey?: string;
  timestamps?: { time: string; labelKey: string }[];
  relatedIds?: number[];
  audio?: Record<string, string>;
}

export const EPISODES: Episode[] = [
  {
    id: 7,
    slug: "why-your-app-speaks-like-a-robot",
    titleKey: "Why Your App Speaks Like a Robot",
    showSlug: "code-and-culture",
    showKey: "Code and Culture",
    descKey:
      "From botched plurals to flipped layouts: why most software mangles multilingual content, and how modern i18n tools are finally fixing it.",
    longDescKey:
      "Software internationalization has long been an afterthought, leading to awkward translations, broken layouts, and frustrated users worldwide. In this episode, we explore the most common pitfalls developers face when building multilingual applications: from naive string concatenation that breaks in agglutinative languages, to hardcoded left-to-right assumptions that shatter Arabic and Hebrew interfaces. We examine how modern i18n frameworks like gt-next are rethinking the problem from the ground up, treating translation as a first-class concern in the component tree rather than a bolt-on string replacement layer.",
    duration: 155,
    date: "2026-02-19",
    category: "Technology",
    categoryStyle: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    listens: 1200,
    guestName: "Elena Vasquez",
    guestBioKey:
      "Senior internationalization engineer at a major tech company. Has worked on localizing products into over 40 languages.",
    timestamps: [
      { time: "0:00", labelKey: "Introduction and the state of i18n" },
      { time: "0:25", labelKey: "Common pluralization mistakes" },
      { time: "0:55", labelKey: "Right-to-left layout challenges" },
      { time: "1:30", labelKey: "Modern tools and the future of i18n" },
      { time: "2:15", labelKey: "Closing thoughts" },
    ],
    relatedIds: [2, 5],
    audio: {
      de: "/podcasts/episode-7-de.mp3",
      en: "/podcasts/ep7-why-your-app-speaks-like-a-robot.mp3",
      es: "/podcasts/episode-7-es.mp3",
      fr: "/podcasts/episode-7-fr.mp3",
      ja: "/podcasts/episode-7-ja.mp3",
      zh: "/podcasts/episode-7-zh.mp3",
    },
  },
  {
    id: 1,
    slug: "the-architecture-of-language",
    titleKey: "The Architecture of Language",
    showSlug: "lingua-franca",
    showKey: "Lingua Franca",
    descKey:
      "How the structure of language shapes our understanding of the world, from syntax trees to semantic fields.",
    longDescKey:
      "Languages are not just tools for communication; they are intricate architectures that shape how we perceive reality. This episode dives deep into the structural foundations of human language, exploring how syntax trees mirror the hierarchical nature of thought, how semantic fields organize our conceptual world, and how morphological systems encode meaning in ways that vary dramatically across language families. We discuss the Sapir-Whorf hypothesis and its modern interpretations, examine how computational linguistics borrows from and contributes to our understanding of language structure, and consider what artificial languages reveal about the limits of natural ones.",
    duration: 2820,
    date: "2026-02-15",
    category: "Linguistics",
    categoryStyle: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    listens: 14200,
    guestName: "Dr. Kenji Tanaka",
    guestBioKey:
      "Professor of computational linguistics. His research focuses on cross-linguistic syntax and the intersection of formal grammar with machine learning.",
    timestamps: [
      { time: "0:00", labelKey: "Introduction to language structure" },
      { time: "5:30", labelKey: "Syntax trees and thought hierarchy" },
      { time: "14:20", labelKey: "Semantic fields across cultures" },
      { time: "25:00", labelKey: "The Sapir-Whorf hypothesis revisited" },
      { time: "35:45", labelKey: "Computational approaches to syntax" },
      { time: "44:00", labelKey: "Wrap-up and further reading" },
    ],
    relatedIds: [6, 3],
  },
  {
    id: 2,
    slug: "building-for-a-global-audience",
    titleKey: "Building for a Global Audience",
    showSlug: "code-and-culture",
    showKey: "Code and Culture",
    descKey:
      "A deep dive into internationalization engineering: handling right-to-left scripts, pluralization rules, and locale-aware formatting.",
    longDescKey:
      "Building software for a global audience requires far more than translating strings. In this episode, we explore the full spectrum of internationalization engineering challenges: from bidirectional text rendering and complex script shaping, to ICU message format and CLDR plural rules, to locale-sensitive number, date, and currency formatting. Our guest shares war stories from localizing a product used in 190 countries, including surprising edge cases like calendar systems that don't use the Gregorian year, number systems that read right-to-left within left-to-right text, and the subtle cultural differences that can make or break user trust.",
    duration: 3540,
    date: "2026-02-12",
    category: "Technology",
    categoryStyle: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    listens: 28700,
    guestName: "Amara Osei",
    guestBioKey:
      "Localization architect who has led internationalization efforts for products serving over 500 million users across 190 countries.",
    timestamps: [
      { time: "0:00", labelKey: "Why i18n is more than translation" },
      { time: "8:15", labelKey: "Bidirectional text and script shaping" },
      { time: "18:30", labelKey: "Plural rules and ICU message format" },
      { time: "30:00", labelKey: "Locale-aware formatting pitfalls" },
      { time: "42:20", labelKey: "Cultural sensitivity in UI design" },
      { time: "55:00", labelKey: "Key takeaways for developers" },
    ],
    relatedIds: [7, 5],
  },
  {
    id: 3,
    slug: "lost-in-translation-film-and-subtitles",
    titleKey: "Lost in Translation: Film and Subtitles",
    showSlug: "frame-by-frame",
    showKey: "Frame by Frame",
    descKey:
      "Why translating dialogue for cinema is an art form, and how subtitle choices can change the meaning of a scene.",
    longDescKey:
      "Subtitling and dubbing are invisible arts that can elevate or destroy a film's impact across languages. This episode examines the creative and technical challenges of translating cinema, from the rigid character-per-line constraints of subtitles to the lip-sync demands of dubbing. We explore famous cases where translation choices altered the tone or meaning of iconic scenes, discuss the philosophical question of whether a translated film is still the same work of art, and hear from professionals who navigate the tension between fidelity and fluency every day. Along the way, we consider how streaming platforms are changing the economics and expectations of film translation.",
    duration: 2460,
    date: "2026-02-10",
    category: "Culture",
    categoryStyle: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    listens: 9800,
    guestName: "Marie Dubois",
    guestBioKey:
      "Award-winning subtitle translator who has worked on over 200 films spanning twelve languages.",
    timestamps: [
      { time: "0:00", labelKey: "The invisible art of subtitling" },
      { time: "7:00", labelKey: "Technical constraints of subtitles" },
      { time: "16:30", labelKey: "Famous translation controversies" },
      { time: "28:00", labelKey: "Dubbing versus subtitling cultures" },
      { time: "36:45", labelKey: "Streaming and the future of film translation" },
    ],
    relatedIds: [1, 6],
  },
  {
    id: 4,
    slug: "the-economics-of-multilingual-markets",
    titleKey: "The Economics of Multilingual Markets",
    showSlug: "market-signals",
    showKey: "Market Signals",
    descKey:
      "How businesses that localize early capture disproportionate market share in non-English-speaking regions.",
    longDescKey:
      "The data is clear: companies that invest in localization early see significantly higher conversion rates, lower churn, and faster growth in international markets. This episode examines the economic case for multilingual product strategy, drawing on research showing that 75 percent of consumers prefer to buy products in their native language, and that even basic localization can increase revenue by 30 percent or more in target markets. We discuss the ROI calculations that convince CFOs to invest in translation infrastructure, the hidden costs of delaying localization, and how the rise of AI-powered translation tools is changing the cost-benefit equation for startups and enterprises alike.",
    duration: 1980,
    date: "2026-02-08",
    category: "Business",
    categoryStyle: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    listens: 41300,
    guestName: "Henrik Larsson",
    guestBioKey:
      "Growth strategist specializing in international expansion. Advises startups on localization-driven market entry.",
    timestamps: [
      { time: "0:00", labelKey: "The localization advantage" },
      { time: "6:00", labelKey: "Consumer preference data" },
      { time: "15:00", labelKey: "ROI of early localization" },
      { time: "24:00", labelKey: "AI translation and cost reduction" },
      { time: "30:00", labelKey: "Advice for startups going global" },
    ],
    relatedIds: [2, 5],
  },
  {
    id: 5,
    slug: "teaching-machines-to-understand-context",
    titleKey: "Teaching Machines to Understand Context",
    showSlug: "neural-pathways",
    showKey: "Neural Pathways",
    descKey:
      "From statistical models to transformer architectures: the evolution of machine translation and what comes next.",
    longDescKey:
      "Machine translation has undergone a revolution in the past decade, moving from rule-based systems through statistical approaches to the neural architectures that power today's translation engines. This episode traces that evolution and looks ahead to what comes next. We examine how attention mechanisms and transformer models finally cracked the context problem that plagued earlier systems, why some language pairs remain stubbornly difficult for machines, and how the latest research on multimodal and few-shot learning might enable translation of truly rare languages. Our guest shares insights from the frontlines of machine translation research, including the surprising ways that training data biases can propagate cultural assumptions across languages.",
    duration: 4080,
    date: "2026-02-05",
    category: "Technology",
    categoryStyle: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    listens: 63500,
    guestName: "Dr. Priya Sharma",
    guestBioKey:
      "Machine translation researcher whose work on context-aware neural models has been cited over 3,000 times.",
    timestamps: [
      { time: "0:00", labelKey: "A brief history of machine translation" },
      { time: "10:00", labelKey: "The statistical era" },
      { time: "22:00", labelKey: "Neural networks change everything" },
      { time: "35:00", labelKey: "The context problem and attention" },
      { time: "48:00", labelKey: "Low-resource languages" },
      { time: "58:00", labelKey: "The future: multimodal translation" },
      { time: "66:00", labelKey: "Bias in training data" },
    ],
    relatedIds: [2, 7],
  },
  {
    id: 6,
    slug: "preserving-endangered-languages",
    titleKey: "Preserving Endangered Languages",
    showSlug: "lingua-franca",
    showKey: "Lingua Franca",
    descKey:
      "The race to document and digitize languages spoken by fewer than a thousand people before they disappear.",
    longDescKey:
      "Every two weeks, a language dies. With it vanishes a unique way of understanding the world, an irreplaceable body of oral literature, and centuries of accumulated knowledge encoded in grammar and vocabulary. This episode follows linguists and technologists working against the clock to document, digitize, and revitalize endangered languages. We visit projects using mobile apps to help communities teach their languages to children, learn about efforts to create text-to-speech systems for languages with no written tradition, and discuss the ethical complexities of language preservation: who decides which languages to save, and what does it mean to preserve a language in digital form when its living community has moved on?",
    duration: 3180,
    date: "2026-02-01",
    category: "Linguistics",
    categoryStyle: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    listens: 7200,
    guestName: "Dr. Aisha Bello",
    guestBioKey:
      "Documentary linguist who has recorded and analyzed over 30 endangered languages across West Africa and Southeast Asia.",
    timestamps: [
      { time: "0:00", labelKey: "The scale of language loss" },
      { time: "8:00", labelKey: "Documentation methods and tools" },
      { time: "20:00", labelKey: "Digital revitalization projects" },
      { time: "32:00", labelKey: "Text-to-speech for oral languages" },
      { time: "42:00", labelKey: "Ethics of language preservation" },
      { time: "50:00", labelKey: "What we lose when a language dies" },
    ],
    relatedIds: [1, 3],
  },
];

export interface Show {
  slug: string;
  nameKey: string;
  descKey: string;
  longDescKey: string;
  category: string;
  categoryStyle: string;
  hostName: string;
  hostBioKey: string;
  episodeCount: number;
}

export const SHOWS: Show[] = [
  {
    slug: "code-and-culture",
    nameKey: "Code and Culture",
    descKey:
      "Exploring the intersection of software engineering and the global human experience.",
    longDescKey:
      "Code and Culture is a podcast about the people, practices, and philosophies behind building software for a multilingual world. Each episode brings together engineers, designers, and linguists to discuss the technical challenges and cultural nuances of creating products that work across languages and borders. From internationalization architecture to the cultural assumptions embedded in our code, we explore how technology and human diversity intersect.",
    category: "Technology",
    categoryStyle: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    hostName: "Marcus Chen",
    hostBioKey:
      "Software engineer and writer. Has shipped products in over 20 languages and writes about the human side of technology.",
    episodeCount: 3,
  },
  {
    slug: "lingua-franca",
    nameKey: "Lingua Franca",
    descKey:
      "A deep exploration of how languages work, evolve, and shape our thinking.",
    longDescKey:
      "Lingua Franca takes listeners on a journey through the world's languages, exploring their structures, histories, and the cognitive frameworks they create. Hosted by a linguist with fieldwork experience on four continents, each episode combines rigorous scholarship with accessible storytelling to reveal how language shapes everything from politics to perception. Whether we are tracing the evolution of a grammar rule or visiting a community fighting to keep its language alive, Lingua Franca makes the science of language vivid and human.",
    category: "Linguistics",
    categoryStyle: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    hostName: "Dr. Sofia Andersson",
    hostBioKey:
      "Field linguist and university lecturer. Has conducted research on language families across four continents.",
    episodeCount: 2,
  },
  {
    slug: "frame-by-frame",
    nameKey: "Frame by Frame",
    descKey:
      "How cinema crosses cultural boundaries through the art of translation.",
    longDescKey:
      "Frame by Frame examines the craft of bringing films across language barriers. Each episode focuses on the translators, subtitle artists, and dubbing directors whose invisible work determines how audiences around the world experience cinema. We analyze specific scenes, compare translations across languages, and explore the creative decisions that shape how a story resonates in different cultures. The show is essential listening for film lovers, translation professionals, and anyone curious about how meaning travels between languages.",
    category: "Culture",
    categoryStyle: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    hostName: "Luca Moretti",
    hostBioKey:
      "Film critic and polyglot. Reviews international cinema and writes about the art of audiovisual translation.",
    episodeCount: 1,
  },
  {
    slug: "market-signals",
    nameKey: "Market Signals",
    descKey:
      "Business strategy and growth in the global multilingual economy.",
    longDescKey:
      "Market Signals decodes the business of going global. Each episode examines how companies succeed or fail when entering new linguistic markets, drawing on data, case studies, and interviews with executives who have led international expansion. From localization ROI to cross-cultural marketing pitfalls, Market Signals provides actionable insights for business leaders navigating the multilingual economy.",
    category: "Business",
    categoryStyle: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    hostName: "Fatima Al-Rashid",
    hostBioKey:
      "International business consultant. Advises Fortune 500 companies on multilingual market strategy.",
    episodeCount: 1,
  },
  {
    slug: "neural-pathways",
    nameKey: "Neural Pathways",
    descKey:
      "The science and engineering behind machine translation and language AI.",
    longDescKey:
      "Neural Pathways explores the cutting edge of language technology, from machine translation to large language models. Each episode breaks down complex research into accessible explanations, featuring interviews with the scientists and engineers pushing the boundaries of what machines can do with human language. We cover the latest papers, debate the implications of new breakthroughs, and examine how advances in AI are reshaping the way the world communicates across language barriers.",
    category: "Technology",
    categoryStyle: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    hostName: "James Okafor",
    hostBioKey:
      "AI journalist and former machine learning engineer. Covers the intersection of language and artificial intelligence.",
    episodeCount: 1,
  },
];

export function getEpisodeBySlug(slug: string): Episode | undefined {
  return EPISODES.find((e) => e.slug === slug);
}

export function getShowBySlug(slug: string): Show | undefined {
  return SHOWS.find((s) => s.slug === slug);
}

export function getEpisodesByShow(showSlug: string): Episode[] {
  return EPISODES.filter((e) => e.showSlug === showSlug);
}

export function getRelatedEpisodes(episode: Episode): Episode[] {
  return (episode.relatedIds ?? [])
    .map((id) => EPISODES.find((e) => e.id === id))
    .filter((e): e is Episode => !!e);
}

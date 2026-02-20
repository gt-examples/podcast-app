import { getGT } from "gt-next/server";

export async function getTranslatedEpisodes(locale: string) {
  const gt = await getGT();

  const episodes = [
    {
      id: 7,
      slug: "why-your-app-speaks-like-a-robot",
      title: gt("Why Your App Speaks Like a Robot"),
      show: gt("Code and Culture"),
      showSlug: "code-and-culture",
      desc: gt(
        "From botched plurals to flipped layouts: why most software mangles multilingual content, and how modern i18n tools are finally fixing it."
      ),
      longDesc: gt(
        "Software internationalization has long been an afterthought, leading to awkward translations, broken layouts, and frustrated users worldwide. In this episode, we explore the most common pitfalls developers face when building multilingual applications: from naive string concatenation that breaks in agglutinative languages, to hardcoded left-to-right assumptions that shatter Arabic and Hebrew interfaces. We examine how modern i18n frameworks like gt-next are rethinking the problem from the ground up, treating translation as a first-class concern in the component tree rather than a bolt-on string replacement layer."
      ),
      duration: 155,
      date: "2026-02-19",
      category: gt("Technology"),
      categoryStyle: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      listens: 1200,
      guestName: "Elena Vasquez",
      guestBio: gt(
        "Senior internationalization engineer at a major tech company. Has worked on localizing products into over 40 languages."
      ),
      timestamps: [
        { time: "0:00", label: gt("Introduction and the state of i18n") },
        { time: "0:25", label: gt("Common pluralization mistakes") },
        { time: "0:55", label: gt("Right-to-left layout challenges") },
        { time: "1:30", label: gt("Modern tools and the future of i18n") },
        { time: "2:15", label: gt("Closing thoughts") },
      ],
      relatedIds: [2, 5],
      audio: {
        de: "/podcasts/episode-7-de.mp3",
        en: "/podcasts/ep7-why-your-app-speaks-like-a-robot.mp3",
        es: "/podcasts/episode-7-es.mp3",
        fr: "/podcasts/episode-7-fr.mp3",
        ja: "/podcasts/episode-7-ja.mp3",
        zh: "/podcasts/episode-7-zh.mp3",
      } as Record<string, string>,
    },
    {
      id: 1,
      slug: "the-architecture-of-language",
      title: gt("The Architecture of Language"),
      show: gt("Lingua Franca"),
      showSlug: "lingua-franca",
      desc: gt(
        "How the structure of language shapes our understanding of the world, from syntax trees to semantic fields."
      ),
      longDesc: gt(
        "Languages are not just tools for communication; they are intricate architectures that shape how we perceive reality. This episode dives deep into the structural foundations of human language, exploring how syntax trees mirror the hierarchical nature of thought, how semantic fields organize our conceptual world, and how morphological systems encode meaning in ways that vary dramatically across language families. We discuss the Sapir-Whorf hypothesis and its modern interpretations, examine how computational linguistics borrows from and contributes to our understanding of language structure, and consider what artificial languages reveal about the limits of natural ones."
      ),
      duration: 2820,
      date: "2026-02-15",
      category: gt("Linguistics"),
      categoryStyle: "bg-violet-500/10 text-violet-400 border-violet-500/20",
      listens: 14200,
      guestName: "Dr. Kenji Tanaka",
      guestBio: gt(
        "Professor of computational linguistics. His research focuses on cross-linguistic syntax and the intersection of formal grammar with machine learning."
      ),
      timestamps: [
        { time: "0:00", label: gt("Introduction to language structure") },
        { time: "5:30", label: gt("Syntax trees and thought hierarchy") },
        { time: "14:20", label: gt("Semantic fields across cultures") },
        {
          time: "25:00",
          label: gt("The Sapir-Whorf hypothesis revisited"),
        },
        {
          time: "35:45",
          label: gt("Computational approaches to syntax"),
        },
        { time: "44:00", label: gt("Wrap-up and further reading") },
      ],
      relatedIds: [6, 3],
    },
    {
      id: 2,
      slug: "building-for-a-global-audience",
      title: gt("Building for a Global Audience"),
      show: gt("Code and Culture"),
      showSlug: "code-and-culture",
      desc: gt(
        "A deep dive into internationalization engineering: handling right-to-left scripts, pluralization rules, and locale-aware formatting."
      ),
      longDesc: gt(
        "Building software for a global audience requires far more than translating strings. In this episode, we explore the full spectrum of internationalization engineering challenges: from bidirectional text rendering and complex script shaping, to ICU message format and CLDR plural rules, to locale-sensitive number, date, and currency formatting. Our guest shares war stories from localizing a product used in 190 countries, including surprising edge cases like calendar systems that don't use the Gregorian year, number systems that read right-to-left within left-to-right text, and the subtle cultural differences that can make or break user trust."
      ),
      duration: 3540,
      date: "2026-02-12",
      category: gt("Technology"),
      categoryStyle: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      listens: 28700,
      guestName: "Amara Osei",
      guestBio: gt(
        "Localization architect who has led internationalization efforts for products serving over 500 million users across 190 countries."
      ),
      timestamps: [
        { time: "0:00", label: gt("Why i18n is more than translation") },
        {
          time: "8:15",
          label: gt("Bidirectional text and script shaping"),
        },
        {
          time: "18:30",
          label: gt("Plural rules and ICU message format"),
        },
        { time: "30:00", label: gt("Locale-aware formatting pitfalls") },
        {
          time: "42:20",
          label: gt("Cultural sensitivity in UI design"),
        },
        { time: "55:00", label: gt("Key takeaways for developers") },
      ],
      relatedIds: [7, 5],
    },
    {
      id: 3,
      slug: "lost-in-translation-film-and-subtitles",
      title: gt("Lost in Translation: Film and Subtitles"),
      show: gt("Frame by Frame"),
      showSlug: "frame-by-frame",
      desc: gt(
        "Why translating dialogue for cinema is an art form, and how subtitle choices can change the meaning of a scene."
      ),
      longDesc: gt(
        "Subtitling and dubbing are invisible arts that can elevate or destroy a film's impact across languages. This episode examines the creative and technical challenges of translating cinema, from the rigid character-per-line constraints of subtitles to the lip-sync demands of dubbing. We explore famous cases where translation choices altered the tone or meaning of iconic scenes, discuss the philosophical question of whether a translated film is still the same work of art, and hear from professionals who navigate the tension between fidelity and fluency every day. Along the way, we consider how streaming platforms are changing the economics and expectations of film translation."
      ),
      duration: 2460,
      date: "2026-02-10",
      category: gt("Culture"),
      categoryStyle: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      listens: 9800,
      guestName: "Marie Dubois",
      guestBio: gt(
        "Award-winning subtitle translator who has worked on over 200 films spanning twelve languages."
      ),
      timestamps: [
        { time: "0:00", label: gt("The invisible art of subtitling") },
        { time: "7:00", label: gt("Technical constraints of subtitles") },
        {
          time: "16:30",
          label: gt("Famous translation controversies"),
        },
        {
          time: "28:00",
          label: gt("Dubbing versus subtitling cultures"),
        },
        {
          time: "36:45",
          label: gt("Streaming and the future of film translation"),
        },
      ],
      relatedIds: [1, 6],
    },
    {
      id: 4,
      slug: "the-economics-of-multilingual-markets",
      title: gt("The Economics of Multilingual Markets"),
      show: gt("Market Signals"),
      showSlug: "market-signals",
      desc: gt(
        "How businesses that localize early capture disproportionate market share in non-English-speaking regions."
      ),
      longDesc: gt(
        "The data is clear: companies that invest in localization early see significantly higher conversion rates, lower churn, and faster growth in international markets. This episode examines the economic case for multilingual product strategy, drawing on research showing that 75 percent of consumers prefer to buy products in their native language, and that even basic localization can increase revenue by 30 percent or more in target markets. We discuss the ROI calculations that convince CFOs to invest in translation infrastructure, the hidden costs of delaying localization, and how the rise of AI-powered translation tools is changing the cost-benefit equation for startups and enterprises alike."
      ),
      duration: 1980,
      date: "2026-02-08",
      category: gt("Business"),
      categoryStyle: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      listens: 41300,
      guestName: "Henrik Larsson",
      guestBio: gt(
        "Growth strategist specializing in international expansion. Advises startups on localization-driven market entry."
      ),
      timestamps: [
        { time: "0:00", label: gt("The localization advantage") },
        { time: "6:00", label: gt("Consumer preference data") },
        { time: "15:00", label: gt("ROI of early localization") },
        {
          time: "24:00",
          label: gt("AI translation and cost reduction"),
        },
        {
          time: "30:00",
          label: gt("Advice for startups going global"),
        },
      ],
      relatedIds: [2, 5],
    },
    {
      id: 5,
      slug: "teaching-machines-to-understand-context",
      title: gt("Teaching Machines to Understand Context"),
      show: gt("Neural Pathways"),
      showSlug: "neural-pathways",
      desc: gt(
        "From statistical models to transformer architectures: the evolution of machine translation and what comes next."
      ),
      longDesc: gt(
        "Machine translation has undergone a revolution in the past decade, moving from rule-based systems through statistical approaches to the neural architectures that power today's translation engines. This episode traces that evolution and looks ahead to what comes next. We examine how attention mechanisms and transformer models finally cracked the context problem that plagued earlier systems, why some language pairs remain stubbornly difficult for machines, and how the latest research on multimodal and few-shot learning might enable translation of truly rare languages. Our guest shares insights from the frontlines of machine translation research, including the surprising ways that training data biases can propagate cultural assumptions across languages."
      ),
      duration: 4080,
      date: "2026-02-05",
      category: gt("Technology"),
      categoryStyle: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      listens: 63500,
      guestName: "Dr. Priya Sharma",
      guestBio: gt(
        "Machine translation researcher whose work on context-aware neural models has been cited over 3,000 times."
      ),
      timestamps: [
        {
          time: "0:00",
          label: gt("A brief history of machine translation"),
        },
        { time: "10:00", label: gt("The statistical era") },
        {
          time: "22:00",
          label: gt("Neural networks change everything"),
        },
        {
          time: "35:00",
          label: gt("The context problem and attention"),
        },
        { time: "48:00", label: gt("Low-resource languages") },
        {
          time: "58:00",
          label: gt("The future: multimodal translation"),
        },
        { time: "66:00", label: gt("Bias in training data") },
      ],
      relatedIds: [2, 7],
    },
    {
      id: 6,
      slug: "preserving-endangered-languages",
      title: gt("Preserving Endangered Languages"),
      show: gt("Lingua Franca"),
      showSlug: "lingua-franca",
      desc: gt(
        "The race to document and digitize languages spoken by fewer than a thousand people before they disappear."
      ),
      longDesc: gt(
        "Every two weeks, a language dies. With it vanishes a unique way of understanding the world, an irreplaceable body of oral literature, and centuries of accumulated knowledge encoded in grammar and vocabulary. This episode follows linguists and technologists working against the clock to document, digitize, and revitalize endangered languages. We visit projects using mobile apps to help communities teach their languages to children, learn about efforts to create text-to-speech systems for languages with no written tradition, and discuss the ethical complexities of language preservation: who decides which languages to save, and what does it mean to preserve a language in digital form when its living community has moved on?"
      ),
      duration: 3180,
      date: "2026-02-01",
      category: gt("Linguistics"),
      categoryStyle: "bg-violet-500/10 text-violet-400 border-violet-500/20",
      listens: 7200,
      guestName: "Dr. Aisha Bello",
      guestBio: gt(
        "Documentary linguist who has recorded and analyzed over 30 endangered languages across West Africa and Southeast Asia."
      ),
      timestamps: [
        { time: "0:00", label: gt("The scale of language loss") },
        {
          time: "8:00",
          label: gt("Documentation methods and tools"),
        },
        {
          time: "20:00",
          label: gt("Digital revitalization projects"),
        },
        {
          time: "32:00",
          label: gt("Text-to-speech for oral languages"),
        },
        {
          time: "42:00",
          label: gt("Ethics of language preservation"),
        },
        {
          time: "50:00",
          label: gt("What we lose when a language dies"),
        },
      ],
      relatedIds: [1, 3],
    },
  ];

  return episodes;
}

export type TranslatedEpisode = Awaited<
  ReturnType<typeof getTranslatedEpisodes>
>[number];

export async function getTranslatedShows() {
  const gt = await getGT();

  const shows = [
    {
      slug: "code-and-culture",
      name: gt("Code and Culture"),
      desc: gt(
        "Exploring the intersection of software engineering and the global human experience."
      ),
      longDesc: gt(
        "Code and Culture is a podcast about the people, practices, and philosophies behind building software for a multilingual world. Each episode brings together engineers, designers, and linguists to discuss the technical challenges and cultural nuances of creating products that work across languages and borders. From internationalization architecture to the cultural assumptions embedded in our code, we explore how technology and human diversity intersect."
      ),
      category: gt("Technology"),
      categoryStyle: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      hostName: "Marcus Chen",
      hostBio: gt(
        "Software engineer and writer. Has shipped products in over 20 languages and writes about the human side of technology."
      ),
      episodeCount: 3,
    },
    {
      slug: "lingua-franca",
      name: gt("Lingua Franca"),
      desc: gt(
        "A deep exploration of how languages work, evolve, and shape our thinking."
      ),
      longDesc: gt(
        "Lingua Franca takes listeners on a journey through the world's languages, exploring their structures, histories, and the cognitive frameworks they create. Hosted by a linguist with fieldwork experience on four continents, each episode combines rigorous scholarship with accessible storytelling to reveal how language shapes everything from politics to perception. Whether we are tracing the evolution of a grammar rule or visiting a community fighting to keep its language alive, Lingua Franca makes the science of language vivid and human."
      ),
      category: gt("Linguistics"),
      categoryStyle: "bg-violet-500/10 text-violet-400 border-violet-500/20",
      hostName: "Dr. Sofia Andersson",
      hostBio: gt(
        "Field linguist and university lecturer. Has conducted research on language families across four continents."
      ),
      episodeCount: 2,
    },
    {
      slug: "frame-by-frame",
      name: gt("Frame by Frame"),
      desc: gt(
        "How cinema crosses cultural boundaries through the art of translation."
      ),
      longDesc: gt(
        "Frame by Frame examines the craft of bringing films across language barriers. Each episode focuses on the translators, subtitle artists, and dubbing directors whose invisible work determines how audiences around the world experience cinema. We analyze specific scenes, compare translations across languages, and explore the creative decisions that shape how a story resonates in different cultures. The show is essential listening for film lovers, translation professionals, and anyone curious about how meaning travels between languages."
      ),
      category: gt("Culture"),
      categoryStyle: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      hostName: "Luca Moretti",
      hostBio: gt(
        "Film critic and polyglot. Reviews international cinema and writes about the art of audiovisual translation."
      ),
      episodeCount: 1,
    },
    {
      slug: "market-signals",
      name: gt("Market Signals"),
      desc: gt(
        "Business strategy and growth in the global multilingual economy."
      ),
      longDesc: gt(
        "Market Signals decodes the business of going global. Each episode examines how companies succeed or fail when entering new linguistic markets, drawing on data, case studies, and interviews with executives who have led international expansion. From localization ROI to cross-cultural marketing pitfalls, Market Signals provides actionable insights for business leaders navigating the multilingual economy."
      ),
      category: gt("Business"),
      categoryStyle: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      hostName: "Fatima Al-Rashid",
      hostBio: gt(
        "International business consultant. Advises Fortune 500 companies on multilingual market strategy."
      ),
      episodeCount: 1,
    },
    {
      slug: "neural-pathways",
      name: gt("Neural Pathways"),
      desc: gt(
        "The science and engineering behind machine translation and language AI."
      ),
      longDesc: gt(
        "Neural Pathways explores the cutting edge of language technology, from machine translation to large language models. Each episode breaks down complex research into accessible explanations, featuring interviews with the scientists and engineers pushing the boundaries of what machines can do with human language. We cover the latest papers, debate the implications of new breakthroughs, and examine how advances in AI are reshaping the way the world communicates across language barriers."
      ),
      category: gt("Technology"),
      categoryStyle: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      hostName: "James Okafor",
      hostBio: gt(
        "AI journalist and former machine learning engineer. Covers the intersection of language and artificial intelligence."
      ),
      episodeCount: 1,
    },
  ];

  return shows;
}

export type TranslatedShow = Awaited<
  ReturnType<typeof getTranslatedShows>
>[number];

export type Locale = "ar" | "en";

export interface NumberedItem {
  number: string;
  title: string;
  secondaryTitle: string;
  description: string;
}

export interface StoneMaterialItem {
  id: string;
  name: string;
  secondaryName: string;
  image: string;
  alt: string;
}

export interface PageMetaItem {
  title: string;
  description: string;
}

export interface Dictionary {
  locale: Locale;
  dir: "rtl" | "ltr";
  pagesMeta: {
    home: PageMetaItem;
    about: PageMetaItem;
    factory: PageMetaItem;
    whySrfec: PageMetaItem;
    projects: PageMetaItem;
    clients: PageMetaItem;
    contact: PageMetaItem;
    stones: PageMetaItem;
    notFound: PageMetaItem;
  };
  a11y: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    switchLanguage: string;
    closeModal: string;
    previousImage: string;
    nextImage: string;
    logoAlt: string;
    breadcrumbLabel: string;
    subNavLabel: string;
  };
  nav: {
    home: string;
    about: string;
    factory: string;
    whySrfec: string;
    projects: string;
    clients: string;
    stones: string;
    contact: string;
    contactCta: string;
  };
  aboutSubNav: {
    story: string;
    ceo: string;
    vision: string;
    mission: string;
    values: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    brandIdeaQuote: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
    imageCaption: string;
    stats: {
      experienceValue: string;
      experienceLabel: string;
      projectsValue: string;
      projectsLabel: string;
    };
  };
  homeTeasers: {
    storySummary: string;
    storyCta: string;
    whySrfecCta: string;
    factorySummary: string;
    factoryCta: string;
    projectsSubtitle: string;
    projectsCta: string;
    clientsCta: string;
  };
  ctaBand: {
    heading: string;
    subtext: string;
    buttonLabel: string;
  };
  story: {
    title: string;
    subtitle: string;
    steps: NumberedItem[];
  };
  ceo: {
    title: string;
    messagePlaceholder: string;
    namePlaceholder: string;
    roleTitle: string;
    companyLabel: string;
    portraitAlt: string;
    placeholderNote: string;
  };
  visionMission: {
    sectionTitle: string;
    visionTitle: string;
    visionStatement: string;
    visionPillars: NumberedItem[];
    missionTitle: string;
    missionCards: NumberedItem[];
  };
  values: {
    title: string;
    subtitle: string;
    items: (NumberedItem & { iconKey: "quality" | "precision" | "commitment" | "trust" })[];
  };
  factory: {
    title: string;
    heading: string;
    paragraphs: string[];
    chips: {
      cutting: {
        title: string;
        secondary: string;
        description: string;
      };
      carving: {
        title: string;
        secondary: string;
        description: string;
      };
    };
    gallery: {
      sawingAlt: string;
      sawingCaption: string;
      carvingAlt: string;
      carvingCaption: string;
      slabsAlt: string;
      slabsCaption: string;
    };
  };
  stones: {
    title: string;
    subtitle: string;
    items: StoneMaterialItem[];
  };
  whySrfec: {
    title: string;
    intro: string;
    cards: NumberedItem[];
  };
  stats: {
    experienceNumber: number;
    experiencePrefix: string;
    experienceLabel: string;
    experienceSublabel: string;
    projectsNumber: number;
    projectsPrefix: string;
    projectsLabel: string;
    projectsSublabel: string;
    craftStatement: string;
  };
  projects: {
    title: string;
    heading: string;
    description: string;
    filters: {
      all: string;
      commercial: string;
      architectural: string;
      hospitality: string;
      residential: string;
    };
    viewDetails: string;
    backToProjects: string;
    infoTitle: string;
    locationLabel: string;
    typeLabel: string;
    yearLabel: string;
    stoneTypeLabel: string;
    scopeLabel: string;
    overviewTitle: string;
    galleryTitle: string;
    openLightboxLabel: string;
    previousProject: string;
    nextProject: string;
    placeholderNotice: string;
  };
  clients: {
    title: string;
    subtitle: string;
    placeholderNotice: string;
  };
  contact: {
    title: string;
    subtitle: string;
    infoTitle: string;
    labels: {
      address: string;
      phone: string;
      whatsapp: string;
      email: string;
      website: string;
      workingHours: string;
      mapPlaceholderTitle: string;
      mapPlaceholderSub: string;
    };
    form: {
      title: string;
      nameLabel: string;
      namePlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      subjectLabel: string;
      subjectPlaceholder: string;
      subjectOptions: {
        facade: string;
        carving: string;
        slabs: string;
        custom: string;
      };
      messageLabel: string;
      messagePlaceholder: string;
      submitButton: string;
      submittingButton: string;
      errors: {
        nameRequired: string;
        phoneRequired: string;
        emailInvalid: string;
        subjectRequired: string;
        messageRequired: string;
      };
      successTitle: string;
      successMessage: string;
      sendAnother: string;
    };
  };
  notFound: {
    code: string;
    title: string;
    description: string;
    backHomeCta: string;
  };
  footer: {
    brandLine: string;
    quickLinksTitle: string;
    contactTitle: string;
    followUsTitle: string;
    copyright: string;
    craftTagline: string;
  };
}

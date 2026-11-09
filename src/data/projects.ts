export interface ProjectLocaleContent {
  title: string;
  type: string;
  location: string;
  year: string;
  stoneType: string;
  scope: string;
  description: string[];
  alt: string;
  galleryCaptions: string[];
}

export interface ProjectItem {
  slug: string;
  code: string;
  featured: boolean;
  isPlaceholder: boolean;
  image: string;
  gallery: string[];
  categoryKey: "commercial" | "architectural" | "hospitality" | "residential";
  ar: ProjectLocaleContent;
  en: ProjectLocaleContent;
}

/**
 * Placeholder project items.
 * All titles, locations, years, stone types, and descriptions are clearly marked placeholders
 * to be replaced with official client project records and photography in `/public/images/`.
 */
export const projectsData: ProjectItem[] = [
  {
    slug: "commercial-administrative-complex",
    code: "PRJ-01",
    featured: true,
    isPlaceholder: true,
    image: "/images/projects/placeholder-project-commercial-facade.webp",
    gallery: [
      "/images/projects/placeholder-project-commercial-facade.webp",
      "/images/factory/factory-quality-inspection.webp",
      "/images/stones/stone-granite.webp",
    ],
    categoryKey: "commercial",
    ar: {
      title: "[اسم المشروع 01 — مجمع إداري وتجاري]",
      type: "واجهات حجرية وجرانيت",
      location: "[المدينة — المملكة العربية السعودية]",
      year: "[سنة التنفيذ — يُحدد من قِبل العميل]",
      stoneType: "[نوع الحجر / الجرانيت — يُحدد من قِبل العميل]",
      scope:
        "توريد وتصنيع ألواح الواجهات الخارجية والمداخل الرئيسية بالمقاسات الهندسية المعتمدة.",
      description: [
        "[وصف تفصيلي للمشروع — عنصر نائب يتم تزويده من قِبل العميل]: يتضمن هذا المشروع أعمال قص وتجهيز وتوريد ألواح الحجر الطبيعي والجرانيت للواجهات المعمارية الخارجية والمداخل الرئيسية وفق المخططات الهندسية المعتمدة.",
        "تم تنفيذ مراحل القص والمعالجة والفحص داخل مصنع سيرفك للحجر والجرانيت مع الالتزام التام بالمقاسات والمواصفات الفنية المطلوبة للمشروع.",
      ],
      alt: "TODO: صورة مشروع مجمع إداري وتجاري — واجهات حجرية وجرانيت",
      galleryCaptions: [
        "الواجهة المعمارية الرئيسية — [صورة عنصر نائب]",
        "ألواح الحجر والجرانيت المجهزة للمشروع — [صورة عنصر نائب]",
        "تفاصيل تشطيب السطح والمقاسات — [صورة عنصر نائب]",
      ],
    },
    en: {
      title: "[Project Name 01 — Commercial & Administrative Complex]",
      type: "Stone & Granite Facades",
      location: "[City — Kingdom of Saudi Arabia]",
      year: "[Completion Year — To be provided by client]",
      stoneType: "[Stone / Granite Specification — To be provided by client]",
      scope:
        "Supply and precision fabrication of exterior facade panels and main entrance cladding to approved engineering dimensions.",
      description: [
        "[Detailed project description — placeholder to be provided by client]: This project encompasses the cutting, processing, and supply of natural stone and granite panels for the exterior architectural elevations and main entrance lobbies in accordance with approved engineering drawings.",
        "All sawing, surface preparation, and dimensional inspections were completed at SRFEC Stone Factory in strict adherence to the project's technical specifications.",
      ],
      alt: "TODO: Commercial and administrative complex stone and granite facade photograph",
      galleryCaptions: [
        "Main architectural facade elevation — [Placeholder image]",
        "Calibrated stone and granite slabs prepared for installation — [Placeholder image]",
        "Surface finish and joint tolerance detail — [Placeholder image]",
      ],
    },
  },
  {
    slug: "hospitality-development-cladding",
    code: "PRJ-02",
    featured: true,
    isPlaceholder: true,
    image: "/images/projects/placeholder-project-hospitality-lobby.webp",
    gallery: [
      "/images/projects/placeholder-project-hospitality-lobby.webp",
      "/images/factory/factory-carving-shaping.webp",
      "/images/stones/stone-marble.webp",
    ],
    categoryKey: "hospitality",
    ar: {
      title: "[اسم المشروع 02 — مشروع ضيافة وفندقة]",
      type: "أعمال نحت وتشكيل معماري",
      location: "[المدينة — المملكة العربية السعودية]",
      year: "[سنة التنفيذ — يُحدد من قِبل العميل]",
      stoneType: "[نوع الحجر / الرخام — يُحدد من قِبل العميل]",
      scope:
        "تنفيذ الأعمدة الحجرية المنحوتة والكسوات الداخلية والخارجية وفق المخططات التصميمية.",
      description: [
        "[وصف تفصيلي للمشروع — عنصر نائب يتم تزويده من قِبل العميل]: يشمل نطاق العمل تجهيز وتشكيل العناصر الحجرية المعمارية والأعمدة المنحوتة والتكسيات الخاصة بمناطق الاستقبال والواجهات.",
        "شارك قسم النحت والتشكيل في مصنع سيرفك في تنفيذ التفاصيل المعمارية الدقيقة ومطابقتها مع التصاميم الهندسية للمشروع.",
      ],
      alt: "TODO: صورة مشروع ضيافة وفندقة — أعمال نحت وتشكيل معماري",
      galleryCaptions: [
        "الأروقة والأعمدة الحجرية المشكّلة — [صورة عنصر نائب]",
        "أعمال النحت والتشكيل المعماري — [صورة عنصر نائب]",
        "عينة الخامة الحجرية المعتمدة — [صورة عنصر نائب]",
      ],
    },
    en: {
      title: "[Project Name 02 — Hospitality Development]",
      type: "Architectural Carving & Cladding",
      location: "[City — Kingdom of Saudi Arabia]",
      year: "[Completion Year — To be provided by client]",
      stoneType: "[Stone / Marble Specification — To be provided by client]",
      scope:
        "Fabrication of carved stone colonnades and interior/exterior architectural stone works according to design drawings.",
      description: [
        "[Detailed project description — placeholder to be provided by client]: Scope of work includes the preparation and shaping of architectural stone elements, carved colonnades, and reception cladding panels.",
        "SRFEC's specialized carving and shaping department executed the custom architectural profiles to match the project's design drawings and dimensional requirements.",
      ],
      alt: "TODO: Hospitality project architectural stone carving and cladding photograph",
      galleryCaptions: [
        "Shaped stone colonnades and arches — [Placeholder image]",
        "Architectural stone carving detail — [Placeholder image]",
        "Approved natural stone material sample — [Placeholder image]",
      ],
    },
  },
  {
    slug: "institutional-architectural-landmark",
    code: "PRJ-03",
    featured: true,
    isPlaceholder: true,
    image: "/images/projects/placeholder-project-public-landmark.webp",
    gallery: [
      "/images/projects/placeholder-project-public-landmark.webp",
      "/images/factory/factory-polishing-line.webp",
      "/images/stones/placeholder-stone-limestone.webp",
    ],
    categoryKey: "architectural",
    ar: {
      title: "[اسم المشروع 03 — مرفق عمراني ومؤسسي]",
      type: "تكسيات حجر طبيعي",
      location: "[المدينة — المملكة العربية السعودية]",
      year: "[سنة التنفيذ — يُحدد من قِبل العميل]",
      stoneType: "[نوع الحجر الطبيعي — يُحدد من قِبل العميل]",
      scope:
        "قص وتجهيز الحجر الطبيعي للواجهات المعمارية والساحات الخارجية بدقة عالية.",
      description: [
        "[وصف تفصيلي للمشروع — عنصر نائب يتم تزويده من قِبل العميل]: يتناول المشروع توريد وتصنيع وحدات الحجر الطبيعي للواجهات الخارجية والساحات المحيطة بالمبنى وفق معايير الجودة المعتمدة.",
        "تمت عمليات القص والتجهيز الآلي لضمان تجانس الأبعاد وسلامة الحواف في جميع الدفعات المورّدة للموقع.",
      ],
      alt: "TODO: صورة مرفق عمراني ومؤسسي — تكسيات حجر طبيعي",
      galleryCaptions: [
        "الواجهات الحجرية للمرفق العمراني — [صورة عنصر نائب]",
        "عمليات القص والتجهيز في المصنع — [صورة عنصر نائب]",
        "وحدات الحجر الطبيعي بعد الفحص — [صورة عنصر نائب]",
      ],
    },
    en: {
      title: "[Project Name 03 — Institutional Landmark]",
      type: "Natural Stone Cladding",
      location: "[City — Kingdom of Saudi Arabia]",
      year: "[Completion Year — To be provided by client]",
      stoneType: "[Natural Stone Specification — To be provided by client]",
      scope:
        "Cutting and processing of natural stone for architectural elevations and exterior plazas with calibrated tolerances.",
      description: [
        "[Detailed project description — placeholder to be provided by client]: This project covers the manufacturing and delivery of natural stone cladding units for the exterior elevations and surrounding plazas in accordance with approved quality standards.",
        "Automated sawing and calibration processes ensured consistent thickness and crisp edge tolerances across all delivered stone batches.",
      ],
      alt: "TODO: Institutional landmark natural stone cladding photograph",
      galleryCaptions: [
        "Institutional building stone elevation — [Placeholder image]",
        "Factory sawing and calibration process — [Placeholder image]",
        "Inspected natural stone units — [Placeholder image]",
      ],
    },
  },
  {
    slug: "residential-villa-compound",
    code: "PRJ-04",
    featured: false,
    isPlaceholder: true,
    image: "/images/projects/placeholder-project-residential-villa.webp",
    gallery: [
      "/images/projects/placeholder-project-residential-villa.webp",
      "/images/factory/factory-carving-shaping.webp",
      "/images/stones/stone-travertine.webp",
    ],
    categoryKey: "residential",
    ar: {
      title: "[اسم المشروع 04 — مجمع فلل سكنية]",
      type: "واجهات وتفاصيل حجرية",
      location: "[المدينة — المملكة العربية السعودية]",
      year: "[سنة التنفيذ — يُحدد من قِبل العميل]",
      stoneType: "[نوع الحجر — يُحدد من قِبل العميل]",
      scope:
        "تصنيع وتوريد الحجر الطبيعي للواجهات والكرانيش والإطارات المعمارية المنحوتة.",
      description: [
        "[وصف تفصيلي للمشروع — عنصر نائب يتم تزويده من قِبل العميل]: تنفيذ وتوريد كسوات الحجر الطبيعي والتفاصيل المعمارية للواجهات السكنية بما يواكب متطلبات التصميم المعماري.",
        "شملت الأعمال قص الألواح وتشكيل الإطارات والكرانيش الحجرية وفق المقاسات التفصيلية لكل وحدة.",
      ],
      alt: "TODO: صورة مشروع مجمع فلل سكنية — واجهات وتفاصيل حجرية",
      galleryCaptions: [
        "واجهات الوحدات السكنية بالحجر الطبيعي — [صورة عنصر نائب]",
        "تشكيل الكرانيش والإطارات المعمارية — [صورة عنصر نائب]",
        "خامة الحجر المستخدمة في الواجهات — [صورة عنصر نائب]",
      ],
    },
    en: {
      title: "[Project Name 04 — Residential Villa Compound]",
      type: "Exterior Facades & Carved Detailing",
      location: "[City — Kingdom of Saudi Arabia]",
      year: "[Completion Year — To be provided by client]",
      stoneType: "[Stone Specification — To be provided by client]",
      scope:
        "Manufacturing and supply of natural stone facades, cornices, and custom-shaped window surrounds.",
      description: [
        "[Detailed project description — placeholder to be provided by client]: Fabrication and supply of natural stone facade cladding and shaped architectural trim across a residential villa development.",
        "Work included custom slab cutting alongside shaped stone cornices and window frames tailored to each unit's architectural drawings.",
      ],
      alt: "TODO: Residential villa compound stone facade and carved detailing photograph",
      galleryCaptions: [
        "Residential facade cladding — [Placeholder image]",
        "Shaped architectural cornices and frames — [Placeholder image]",
        "Natural stone texture detail — [Placeholder image]",
      ],
    },
  },
  {
    slug: "cultural-architectural-center",
    code: "PRJ-05",
    featured: false,
    isPlaceholder: true,
    image: "/images/projects/placeholder-project-interior-stonework.webp",
    gallery: [
      "/images/projects/placeholder-project-interior-stonework.webp",
      "/images/factory/factory-carving-shaping.webp",
      "/images/stones/stone-onyx.webp",
    ],
    categoryKey: "architectural",
    ar: {
      title: "[اسم المشروع 05 — مركز ثقافي ومعماري]",
      type: "تشكيل ونحت حجر طبيعي",
      location: "[المدينة — المملكة العربية السعودية]",
      year: "[سنة التنفيذ — يُحدد من قِبل العميل]",
      stoneType: "[نوع الحجر — يُحدد من قِبل العميل]",
      scope:
        "تجهيز العناصر الحجرية المزخرفة والألواح المقصوصة وفق المواصفات الفنية للمشروع.",
      description: [
        "[وصف تفصيلي للمشروع — عنصر نائب يتم تزويده من قِبل العميل]: يجمع هذا المشروع بين الألواح الحجرية المقصوصة بدقة والعناصر المنحوتة التي تعكس الهوية المعمارية للمبنى.",
        "تم فحص ومراجعة جميع القطع المنتجة للتأكد من مطابقتها للمواصفات الفنية والمقاسات المعتمدة قبل التوريد.",
      ],
      alt: "TODO: صورة مركز ثقافي ومعماري — تشكيل ونحت حجر طبيعي",
      galleryCaptions: [
        "العناصر الحجرية المعمارية للمركز — [صورة عنصر نائب]",
        "أعمال النحت والتشكيل الدقيق — [صورة عنصر نائب]",
        "تفاصيل الألواح الحجرية — [صورة عنصر نائب]",
      ],
    },
    en: {
      title: "[Project Name 05 — Cultural & Architectural Center]",
      type: "Custom Stone Shaping & Relief Work",
      location: "[City — Kingdom of Saudi Arabia]",
      year: "[Completion Year — To be provided by client]",
      stoneType: "[Stone Specification — To be provided by client]",
      scope:
        "Preparation of ornamental stone panels and custom-cut architectural units tailored to project specifications.",
      description: [
        "[Detailed project description — placeholder to be provided by client]: This project combines calibrated stone panels with custom-carved architectural relief elements designed for the building's facade and interior halls.",
        "Every fabricated piece underwent quality and dimensional verification prior to site delivery.",
      ],
      alt: "TODO: Cultural center custom stone shaping and relief work photograph",
      galleryCaptions: [
        "Architectural stone facade elements — [Placeholder image]",
        "Precision stone carving and relief work — [Placeholder image]",
        "Finished stone panel detail — [Placeholder image]",
      ],
    },
  },
  {
    slug: "corporate-office-tower",
    code: "PRJ-06",
    featured: false,
    isPlaceholder: true,
    image: "/images/projects/placeholder-project-urban-plaza.webp",
    gallery: [
      "/images/projects/placeholder-project-urban-plaza.webp",
      "/images/factory/factory-quality-inspection.webp",
      "/images/stones/stone-granite.webp",
    ],
    categoryKey: "commercial",
    ar: {
      title: "[اسم المشروع 06 — برج أعمال ومكاتب]",
      type: "أرضيات وواجهات جرانيت",
      location: "[المدينة — المملكة العربية السعودية]",
      year: "[سنة التنفيذ — يُحدد من قِبل العميل]",
      stoneType: "[نوع الجرانيت — يُحدد من قِبل العميل]",
      scope:
        "توريد ألواح الجرانيت المصقولة للبهو الرئيسي والواجهات السفلية وفق معايير الجودة المعتمدة.",
      description: [
        "[وصف تفصيلي للمشروع — عنصر نائب يتم تزويده من قِبل العميل]: تصنيع وتجهيز ألواح الجرانيت ذات المتانة العالية لاستخدامها في الأرضيات والمداخل والواجهات السفلية للمبنى.",
        "روعي في اختيار المواد وعمليات القص والتجهيز تحقيق التكامل المعماري ومطابقة المواصفات الهندسية للمشروع.",
      ],
      alt: "TODO: صورة برج أعمال ومكاتب — أرضيات وواجهات جرانيت",
      galleryCaptions: [
        "واجهات ومداخل الجرانيت للبرج — [صورة عنصر نائب]",
        "تجهيز ألواح الجرانيت في المصنع — [صورة عنصر نائب]",
        "تفاصيل سطح الجرانيت المعالج — [صورة عنصر نائب]",
      ],
    },
    en: {
      title: "[Project Name 06 — Corporate Office Tower]",
      type: "Granite Flooring & Podium Cladding",
      location: "[City — Kingdom of Saudi Arabia]",
      year: "[Completion Year — To be provided by client]",
      stoneType: "[Granite Specification — To be provided by client]",
      scope:
        "Supply of finished granite slabs for the main lobby flooring and podium elevations under strict quality inspection.",
      description: [
        "[Detailed project description — placeholder to be provided by client]: Fabrication and finishing of durable granite slabs for the main reception flooring, entrance steps, and podium cladding.",
        "Material selection, cutting, and surface finishing were executed to meet the structural and architectural requirements of the tower.",
      ],
      alt: "TODO: Corporate office tower granite flooring and podium cladding photograph",
      galleryCaptions: [
        "Tower podium and entrance granite cladding — [Placeholder image]",
        "Granite slab processing at SRFEC Factory — [Placeholder image]",
        "Finished granite surface texture — [Placeholder image]",
      ],
    },
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projectsData.find((p) => p.slug === slug);
}

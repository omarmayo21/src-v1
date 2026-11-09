export interface ClientItem {
  id: string;
  code: string;
  logoPath?: string;
  ar: {
    name: string;
    sector: string;
  };
  en: {
    name: string;
    sector: string;
  };
}

/**
 * Placeholder client list (supports 6–20+ entries gracefully).
 * Replace with official client names and drop SVG/PNG logos in `/public/images/clients/`.
 */
export const clientsData: ClientItem[] = [
  {
    id: "client-01",
    code: "CL-01",
    logoPath: "/images/clients/placeholder-client-1.svg",
    ar: { name: "[شريك النجاح 01]", sector: "قطاع التطوير العقاري" },
    en: { name: "[Client Partner 01]", sector: "Real Estate Development" },
  },
  {
    id: "client-02",
    code: "CL-02",
    logoPath: "/images/clients/placeholder-client-2.svg",
    ar: { name: "[شريك النجاح 02]", sector: "الاستشارات الهندسية" },
    en: { name: "[Client Partner 02]", sector: "Engineering Consultancy" },
  },
  {
    id: "client-03",
    code: "CL-03",
    logoPath: "/images/clients/placeholder-client-3.svg",
    ar: { name: "[شريك النجاح 03]", sector: "المقاولات والإنشاءات" },
    en: { name: "[Client Partner 03]", sector: "Construction & Contracting" },
  },
  {
    id: "client-04",
    code: "CL-04",
    logoPath: "/images/clients/placeholder-client-4.svg",
    ar: { name: "[شريك النجاح 04]", sector: "المشاريع العمرانية" },
    en: { name: "[Client Partner 04]", sector: "Urban Projects" },
  },
  {
    id: "client-05",
    code: "CL-05",
    logoPath: "/images/clients/placeholder-client-5.svg",
    ar: { name: "[شريك النجاح 05]", sector: "قطاع الضيافة" },
    en: { name: "[Client Partner 05]", sector: "Hospitality Sector" },
  },
  {
    id: "client-06",
    code: "CL-06",
    logoPath: "/images/clients/placeholder-client-6.svg",
    ar: { name: "[شريك النجاح 06]", sector: "المباني الإدارية والتجارية" },
    en: { name: "[Client Partner 06]", sector: "Commercial Developments" },
  },
  {
    id: "client-07",
    code: "CL-07",
    ar: { name: "[شريك النجاح 07]", sector: "التصميم المعماري" },
    en: { name: "[Client Partner 07]", sector: "Architectural Design" },
  },
  {
    id: "client-08",
    code: "CL-08",
    ar: { name: "[شريك النجاح 08]", sector: "المشاريع السكنية" },
    en: { name: "[Client Partner 08]", sector: "Residential Projects" },
  },
  {
    id: "client-09",
    code: "CL-09",
    ar: { name: "[شريك النجاح 09]", sector: "البنية التحتية والمرافق" },
    en: { name: "[Client Partner 09]", sector: "Civic & Infrastructure" },
  },
  {
    id: "client-10",
    code: "CL-10",
    ar: { name: "[شريك النجاح 10]", sector: "إدارة المشاريع" },
    en: { name: "[Client Partner 10]", sector: "Project Management" },
  },
  {
    id: "client-11",
    code: "CL-11",
    ar: { name: "[شريك النجاح 11]", sector: "المجمعات التجارية" },
    en: { name: "[Client Partner 11]", sector: "Commercial Complexes" },
  },
  {
    id: "client-12",
    code: "CL-12",
    ar: { name: "[شريك النجاح 12]", sector: "المشاريع المؤسسية" },
    en: { name: "[Client Partner 12]", sector: "Institutional Projects" },
  },
];


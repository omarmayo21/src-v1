import type { Metadata } from "next";
import {
  Playfair_Display,
  Poppins,
  Amiri,
  IBM_Plex_Sans_Arabic,
} from "next/font/google";
import "../globals.css";
import { LanguageProvider } from "../../context/LanguageContext";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SITE_URL } from "../../data/site-config";
import {
  SUPPORTED_LOCALES,
  resolveLocale,
  getDictionary,
} from "../../lib/i18n";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  display: "swap",
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-poppins",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-amiri",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-arabic-sans",
});

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict.pagesMeta.home.title,
      template: "%s",
    },
    description: dict.pagesMeta.home.description,
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/brand/icon.png", sizes: "512x512", type: "image/png" },
        { url: "/brand/srfec-symbol.svg", type: "image/svg+xml" },
      ],
      apple: "/brand/apple-icon.png",
      shortcut: "/favicon.ico",
    },
    openGraph: {
      title: dict.pagesMeta.home.title,
      description: dict.pagesMeta.home.description,
      url: `${SITE_URL}/${locale}`,
      siteName: locale === "ar" ? "سيرفك للحجر والجرانيت" : "SRFEC Stones & Granite",
      images: [
        {
          url: "/brand/og-image.png",
          width: 1200,
          height: 630,
          alt: locale === "ar" ? "سيرفك للحجر والجرانيت" : "SRFEC Stones & Granite",
        },
      ],
      locale: locale === "ar" ? "ar_SA" : "en_US",
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${playfair.variable} ${poppins.variable} ${amiri.variable} ${ibmPlexArabic.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white text-navy antialiased selection:bg-gold selection:text-navy">
        <LanguageProvider initialLocale={locale}>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const SITE_URL = "https://www.redsearoadseg.com";
const SITE_TITLE = "شركة البحر الاحمر للطرق والمقاولات العامة | Red Sea for Roads";
const SITE_DESC =
  "شركة البحر الاحمر للطرق والمقاولات العامة بمحافظة البحر الأحمر. تنفيذ أعمال الطرق والأسفلت، الرصف، التمهيد، التسوية، والتطوير بجودة عالية.";
const OG_IMAGE = `${SITE_URL}/og-image.png`;
const LOGO_URL = `${SITE_URL}/favicon-512x512.png`;

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: "شركة البحر الاحمر للطرق والمقاولات العامة",
    alternateName: [
      "Red Sea for Roads",
      "Red Sea Roads",
      "شركة البحر الاحمر للطرق والمقاولات العامة",
      "شركة البحر الأحمر لرصف الطرق",
      "مقاولات البحر الأحمر",
      "Red Sea Road Construction",
    ],
    url: SITE_URL,
    logo: LOGO_URL,
    image: OG_IMAGE,
    description: SITE_DESC,
    telephone: "+201000597912",
    email: "Info@redsearoadseg.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "10 شارع الوحدة، الدهار",
      addressLocality: "الغردقة",
      addressRegion: "محافظة البحر الأحمر",
      addressCountry: "EG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "27.2579",
      longitude: "33.8116",
    },
    areaServed: [
      { "@type": "City", name: "الغردقة" },
      { "@type": "City", name: "رأس غارب" },
      { "@type": "City", name: "سفاجا" },
      { "@type": "City", name: "القصير" },
      { "@type": "City", name: "مرسى علم" },
      { "@type": "City", name: "الجونة" },
      { "@type": "City", name: "سهل حشيش" },
      { "@type": "AdministrativeArea", name: "محافظة البحر الأحمر" },
    ],
    knowsAbout: [
      "شركة البحر الأحمر للمقاولات",
      "شركة البحر الأحمر لرصف الطرق",
      "مقاولات البحر الأحمر",
      "رصف طرق البحر الأحمر",
      "شركات المقاولات في البحر الأحمر",
      "مقاولات عامة البحر الأحمر",
      "رصف الطرق في البحر الأحمر",
      "أعمال الطرق والأسفلت",
      "مقاولات الغردقة",
      "رصف طرق الغردقة",
      "رصف طرق رأس غارب",
      "رصف طرق سفاجا",
      "رصف طرق القصير",
      "رصف طرق مرسى علم",
      "Red Sea Roads",
      "Red Sea Road Construction",
      "Road Construction in Red Sea",
    ],
    priceRange: "$$$",
    openingHours: "Mo-Th 08:00-17:00, Sa-Su 08:00-17:00",
    sameAs: [
      "https://www.facebook.com/redsea.roads/",
      "https://www.instagram.com",
      "https://www.linkedin.com",
      "https://www.youtube.com",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "خدمات المقاولات العامة ورصف الطرق بالبحر الأحمر",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "أعمال الطرق والأسفلت ورصف الشوارع",
            description: "تمهيد وتسوية ورصف الطرق الرئيسية والداخلية بالخلطة الأسفلتية المعتمدة والتخطيط الحراري.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "أعمال العزل والتجفيف وتنزح المياه",
            description: "عزل مائي وحراري وتجفيف المياه الجوفية والسطحية للمشروعات والبيارات الخرسانية.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "التوريدات العامة ومواد البناء",
            description: "توريد مواد تأسيس الطرق، السن، الرمال الناعمة والخشنة لمشروعات المقاولات.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "التدعيم والترميم الإنشائي",
            description: "أعمال الرش بالخرسانة المقذوفة (Shotcrete) وتدعيم الأعمدة والكتل الخرسانية.",
          },
        },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "شركة البحر الاحمر للطرق والمقاولات العامة",
    alternateName: "Red Sea for Roads",
    url: SITE_URL,
    description: SITE_DESC,
    inLanguage: ["ar", "en"],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "الصفحة الرئيسية",
        item: SITE_URL,
      },
    ],
  },
];

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    title: SITE_TITLE,
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5" },
      { name: "description", content: SITE_DESC },
      {
        name: "keywords",
        content:
          "شركة البحر الاحمر للطرق والمقاولات العامة, شركة البحر الأحمر للمقاولات, شركة البحر الأحمر لرصف الطرق, مقاولات البحر الأحمر, رصف طرق البحر الأحمر, شركات المقاولات في البحر الأحمر, مقاولات عامة البحر الأحمر, رصف الطرق في البحر الأحمر, أعمال الطرق والأسفلت, مقاولات الغردقة, رصف طرق الغردقة, رصف طرق رأس غارب, رصف طرق سفاجا, رصف طرق القصير, رصف طرق مرسى علم, Red Sea Roads, Red Sea Road Construction, Road Construction in Red Sea, شركة البحر الاحمر للطرق, redsearoadseg.com",
      },
      { name: "author", content: "Red Sea for Roads Company" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      {
        name: "googlebot",
        content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      { property: "og:site_name", content: "شركة البحر الاحمر للطرق والمقاولات العامة" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:secure_url", content: OG_IMAGE },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "شركة البحر الاحمر للطرق والمقاولات العامة | Red Sea for Roads" },
      { itemProp: "name", content: SITE_TITLE },
      { itemProp: "description", content: SITE_DESC },
      { itemProp: "image", content: OG_IMAGE },
      { property: "og:locale", content: "ar_EG" },
      { property: "og:locale:alternate", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESC },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "theme-color", content: "#0f2347" },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700;800;900&family=Cairo:wght@400;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "48x48", href: "/favicon-48x48.png" },
      { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon-192x192.png" },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "/favicon-512x512.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased text-slate-800 bg-slate-50 selection:bg-red-600 selection:text-white">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}

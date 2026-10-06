import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Globe, MapPin, Facebook } from "lucide-react";
import logoUrl from "@/assets/contact-card/redsea-logo.png";
import sunsetRoadUrl from "@/assets/contact-card/sunset-road.jpg";

export const Route = createFileRoute("/contact-card")({
  head: () => ({
    title: "Red Sea for Roads & General Contracting | Contact Card",
    meta: [
      { title: "Red Sea for Roads & General Contracting | Contact Card" },
      {
        name: "description",
        content:
          "Red Sea for Roads & General Contracting — Official Contact Card. Quick access to direct calling, WhatsApp, website, location, and social channels.",
      },
      { property: "og:title", content: "Red Sea for Roads & General Contracting | Contact Card" },
      {
        property: "og:description",
        content:
          "We build roads that last. Quick direct access to Red Sea for Roads & General Contracting.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ContactCard,
});

const CONTACTS = [
  {
    label: "Call Us | اتصال مباشر",
    sub: "+20 10 00597912",
    href: "tel:+201000597912",
    icon: Phone,
    variant: "action-btn-primary",
    external: false,
  },
  {
    label: "WhatsApp | واتساب",
    sub: "+20 10 00597912",
    href: "https://wa.me/201000597912",
    icon: MessageCircle,
    variant: "action-btn-whatsapp",
    external: true,
  },
  {
    label: "Official Website | الموقع الرسمي",
    sub: "redsearoadseg.com",
    href: "https://www.redsearoadseg.com/",
    icon: Globe,
    variant: "",
    external: true,
  },
  {
    label: "Find Us on Map | موقعنا على الخريطة",
    sub: "Google Maps (Al-Dahar, Hurghada)",
    href: "https://maps.app.goo.gl/K8nTuKfXuivHPV5m6?g_st=ic",
    icon: MapPin,
    variant: "",
    external: true,
  },
  {
    label: "Facebook | فيسبوك",
    sub: "redsea.roads",
    href: "https://www.facebook.com/redsea.roads",
    icon: Facebook,
    variant: "",
    external: true,
  },
];

const FOOTER_LINKS = [
  { href: "https://www.facebook.com/redsea.roads", icon: Facebook, label: "Facebook" },
  { href: "https://wa.me/201000597912", icon: MessageCircle, label: "WhatsApp" },
  { href: "https://www.redsearoadseg.com/", icon: Globe, label: "Website" },
  { href: "https://maps.app.goo.gl/K8nTuKfXuivHPV5m6?g_st=ic", icon: MapPin, label: "Location" },
];

function ContactCard() {
  return (
    <div className="relative min-h-[100dvh] w-full overflow-x-hidden font-sans bg-[#090e1a] text-white flex flex-col justify-center">
      {/* Sunset road photo background */}
      <img
        src={sunsetRoadUrl}
        alt="Road Background"
        aria-hidden="true"
        className="fixed inset-0 h-full w-full object-cover opacity-65"
        width={1088}
        height={1920}
      />
      {/* Dark overlay for readability */}
      <div
        className="fixed inset-0 bg-gradient-to-b from-[#090e1a]/80 via-[#090e1a]/60 to-[#090e1a]/90"
        aria-hidden="true"
      />

      <main className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-md flex-col items-center justify-center px-5 py-8">
        {/* Hero Header */}
        <div className="flex flex-col items-center text-center">
          <div className="logo-glow">
            <img
              src={logoUrl}
              alt="Red Sea for Roads & General Contracting logo"
              className="h-16 w-auto drop-shadow-[0_10px_24px_rgba(0,0,0,0.8)] sm:h-20 transition-transform duration-300 hover:scale-105"
              width={160}
              height={171}
            />
          </div>

          <h1
            className="animate-fade-up mt-4 text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl"
            style={{ animationDelay: "0.15s" }}
          >
            Red Sea for Roads
            <span className="mt-1 block text-sm font-semibold text-slate-300 sm:text-base">
              شركة البحر الأحمر للطرق والمقاولات العامة
            </span>
          </h1>

          <p
            className="animate-fade-up mt-2 text-xs sm:text-sm text-slate-300/90 font-medium"
            style={{ animationDelay: "0.3s" }}
          >
            We build roads that last • نبني طرقاً تدوم
          </p>
        </div>

        {/* Contact buttons navigation */}
        <nav className="mt-6 flex w-full flex-col gap-2.5" aria-label="Contact Links">
          {CONTACTS.map((c, i) => (
            <a
              key={c.href}
              href={c.href}
              {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`action-btn animate-fade-up ${c.variant}`}
              style={{ animationDelay: `${0.4 + i * 0.08}s` }}
            >
              <span className="action-icon">
                <c.icon className="h-5 w-5 text-white" strokeWidth={1.8} />
              </span>
              <span className="flex min-w-0 flex-col items-start text-start">
                <span className="text-[14px] font-bold leading-tight text-white">{c.label}</span>
                <span className="truncate text-[11px] text-slate-300/80 mt-0.5">{c.sub}</span>
              </span>
            </a>
          ))}
        </nav>

        {/* Social Icons & Copyright Footer */}
        <footer
          className="animate-fade-up mt-6 flex w-full flex-col items-center gap-3 text-center"
          style={{ animationDelay: "0.9s" }}
        >
          <div className="flex items-center gap-2.5">
            {FOOTER_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l.label}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/10 text-slate-200 transition-all hover:scale-110 hover:border-red-400 hover:text-white hover:bg-red-600/30 backdrop-blur-md"
              >
                <l.icon className="h-4 w-4" strokeWidth={1.8} />
              </a>
            ))}
          </div>
          <p className="text-[11px] text-slate-400/80">
            © 2026 Red Sea for Roads &amp; General Contracting.
          </p>
        </footer>
      </main>
    </div>
  );
}

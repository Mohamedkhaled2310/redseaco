import React, { useState } from "react";
import {
  MapPin,
  ExternalLink,
  Navigation,
  Phone,
  Globe,
  CheckCircle2,
  Sparkles,
  Clock,
  Compass,
  Building2,
  Copy,
  Check,
  ShieldCheck,
  Share2,
} from "lucide-react";
import { CONTACT_INFO, CONTENT } from "@/lib/translations";

interface ReviewsAndLocationSectionProps {
  lang: "ar" | "en";
}

export const ReviewsAndLocationSection: React.FC<ReviewsAndLocationSectionProps> = ({ lang }) => {
  const [copied, setCopied] = useState(false);
  const t = CONTENT[lang].reviewsLocation;
  if (!t) return null;

  const handleCopyAddress = () => {
    const address = lang === "ar" ? CONTACT_INFO.locationAr : CONTACT_INFO.locationEn;
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="location-reviews"
      className="relative overflow-hidden bg-slate-950 text-white py-24 sm:py-32 dark:bg-[#050b18] transition-colors duration-300"
    >
      {/* Premium Dynamic Ambient Lights & Geometric Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-1/4 size-[600px] rounded-full bg-red-600/20 blur-[140px]" />
        <div className="absolute -bottom-40 left-1/4 size-[600px] rounded-full bg-amber-500/15 blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] rounded-full bg-blue-600/10 blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        {/* Section Header Banner */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-gradient-to-r from-red-600/20 to-amber-500/10 px-5 py-2 text-xs font-extrabold text-red-300 shadow-glow mb-5 backdrop-blur-xl">
            <Compass className="size-4 text-red-400 animate-spin-slow" />
            <span>{t.kicker}</span>
          </div>

          <h2 className="mx-auto max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            {t.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
            {t.subtitle}
          </p>

          <div className="mt-6 mx-auto flex items-center justify-center gap-2">
            <div className="h-1.5 w-8 bg-red-600 rounded-full" />
            <div className="h-1.5 w-24 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 rounded-full shadow-lg" />
            <div className="h-1.5 w-8 bg-red-600 rounded-full" />
          </div>
        </div>

        {/* MAIN HEADQUARTER LOCATION SHOWCASE CONTAINER */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-slate-900/90 backdrop-blur-2xl shadow-2xl p-6 sm:p-10 lg:p-12 mb-16 transition-all duration-300 hover:border-red-500/40">
          
          {/* Top Card Title & Quick Direct Badge */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="relative flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-700 text-white shadow-xl shadow-red-600/30 ring-4 ring-red-500/20">
                <Building2 className="size-7" />
                <span className="absolute -top-1 -right-1 size-3.5 rounded-full bg-emerald-400 ring-2 ring-slate-900 animate-pulse" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-red-400">
                  {lang === "ar" ? "المقر الرئيسي والإدارة" : "Headquarter & Management"}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                  {t.mapsTitle}
                </h3>
              </div>
            </div>

            {/* Direct Directions Action */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyAddress}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-800 border border-slate-700 px-4 py-2.5 text-xs font-bold text-slate-200 hover:bg-slate-700 hover:text-white transition-all active:scale-95 cursor-pointer"
                title={lang === "ar" ? "نسخ العنوان" : "Copy Address"}
              >
                {copied ? (
                  <>
                    <Check className="size-4 text-emerald-400" />
                    <span className="text-emerald-300">
                      {lang === "ar" ? "تم النسخ!" : "Copied!"}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="size-4 text-slate-400" />
                    <span>{lang === "ar" ? "نسخ العنوان" : "Copy Address"}</span>
                  </>
                )}
              </button>

              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-5 py-2.5 text-xs font-extrabold text-white shadow-lg shadow-red-600/25 hover:from-red-500 hover:to-red-600 hover:scale-[1.03] active:scale-95 transition-all cursor-pointer"
              >
                <Navigation className="size-4 text-red-200" />
                <span>{lang === "ar" ? "فتح في الخرائط" : "Open in Maps"}</span>
              </a>
            </div>
          </div>

          {/* SPLIT GRID: Map Embed (Left) & Headquarters Details (Right) */}
          <div className="mt-8 grid gap-10 lg:grid-cols-12 items-center">
            
            {/* Interactive Live Google Map Container (7 Columns on lg) */}
            <div className="lg:col-span-7 relative group">
              <div className="relative overflow-hidden rounded-3xl border-2 border-slate-700/80 bg-slate-950 shadow-2xl h-[380px] sm:h-[440px] w-full transition-all duration-300 group-hover:border-red-500/60">
                {/* Embedded Map */}
                <iframe
                  title="Red Sea for Roads Headquarter Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.804928192083!2d33.8322!3d27.2578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDE1JzI4LjEiTiAzM8KwNDknNTUuOSJF!5e0!3m2!1sen!2seg!4v1710000000000!5m2!1sen!2seg"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "contrast(1.08) saturate(1.15)" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-3xl"
                />

                {/* Top Left Floating Badge on Map */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-2xl bg-slate-950/90 border border-slate-700/80 px-4 py-2.5 text-xs font-bold text-white shadow-xl backdrop-blur-md">
                  <div className="size-2.5 rounded-full bg-red-500 animate-ping" />
                  <MapPin className="size-4 text-red-500" />
                  <span>{lang === "ar" ? "مقر شركة البحر الاحمر - الدهار" : "Red Sea HQ - El-Dahar"}</span>
                </div>

                {/* Bottom Overlay Live Status Bar */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between gap-4 rounded-2xl bg-slate-950/95 border border-slate-700/90 p-3.5 text-xs text-slate-200 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center gap-2">
                    <Clock className="size-4 text-amber-400 shrink-0" />
                    <span className="font-semibold text-slate-300">
                      {lang === "ar"
                        ? "ساعات العمل: السبت - الخميس (8:00 ص - 5:00 م)"
                        : "Hours: Sat - Thu (8:00 AM - 5:00 PM)"}
                    </span>
                  </div>

                  <a
                    href={CONTACT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 font-extrabold text-red-400 hover:text-red-300 flex items-center gap-1 transition-colors"
                  >
                    <span>{lang === "ar" ? "التجاهات" : "Navigate"}</span>
                    <ExternalLink className="size-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Headquarters Details & Action Cards (5 Columns on lg) */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              
              {/* Card 1: Official Address Card */}
              <div className="rounded-3xl bg-slate-950/90 border border-slate-800 p-6 shadow-lg transition-all hover:border-slate-700">
                <div className="flex items-start gap-4">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-red-600/15 text-red-500 shrink-0 mt-0.5 border border-red-500/20">
                    <MapPin className="size-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-400">
                      {lang === "ar" ? "العنوان الرسمي المعتمد" : "Official Address"}
                    </span>
                    <h4 className="text-base font-bold text-white mt-1 leading-snug">
                      {lang === "ar" ? CONTACT_INFO.locationAr : CONTACT_INFO.locationEn}
                    </h4>
                    <p className="text-xs text-slate-400 mt-2 font-medium">
                      {lang === "ar"
                        ? "حي الدهار - القريب من المحاور الرئيسية بمدينة الغردقة."
                        : "El-Dahar district - Near main arterial roads in Hurghada."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Field Coverage & Operational Scope */}
              <div className="rounded-3xl bg-slate-950/90 border border-slate-800 p-6 shadow-lg transition-all hover:border-slate-700">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="size-5 text-emerald-400" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    {lang === "ar" ? "النطاق التوريدي والتنفيذي" : "Operational Coverage"}
                  </h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {lang === "ar"
                    ? "أطقم هندسية ومعدات أسفلت ودك متكاملة جاهزة للتحرك السريع لكافة مراكز ومدن محافظة البحر الأحمر."
                    : "Fully equipped mobile crews ready for deployment across all Red Sea cities."}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "الغردقة",
                    "رأس غارب",
                    "سفاجا",
                    "القصير",
                    "مرسى علم",
                    "الجونة",
                    "سهل حشيش",
                  ].map((city, idx) => (
                    <span
                      key={idx}
                      className="rounded-xl bg-slate-900 border border-slate-700/80 px-3 py-1.5 text-xs font-bold text-slate-200 shadow-sm transition-all hover:border-red-500/50 hover:text-white"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Action Bar */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-red-600 via-red-600 to-red-700 px-6 py-4 text-sm font-extrabold text-white shadow-xl shadow-red-600/30 transition-all hover:from-red-500 hover:to-red-600 hover:scale-[1.02] active:scale-95 cursor-pointer group"
                >
                  <MapPin className="size-5 text-red-200" />
                  <span>{t.openMapsCta}</span>
                  <ExternalLink className="size-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

/* Google SVG Icon */
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

/* Facebook SVG Icon */
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

/* WhatsApp SVG Icon */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.12-.41-2.14-1.32-.79-.71-1.32-1.58-1.47-1.88-.15-.3-.02-.46.13-.61.15-.15.35-.4.5-.6.15-.2.2-.35.3-.55.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.32 5.07 4.53.71.29 1.26.46 1.69.59.72.22 1.37.19 1.89.12.58-.09 1.79-.73 2.04-1.44.25-.71.25-1.31.17-1.44-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.19-.31a8.16 8.16 0 0 1-1.25-4.36c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.26 8.21Z" />
    </svg>
  );
}

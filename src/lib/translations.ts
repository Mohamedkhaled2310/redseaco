import logo from "@/assets/pdf/logo.png";
import luxuryHighwayHero from "@/assets/pdf/luxury-highway-hero.jpg";
import rollerPaving from "@/assets/pdf/roller-paving.jpg";
import works1 from "@/assets/pdf/works-1.jpg";
import strengthening from "@/assets/pdf/strengthening.jpg";
import teamWorks from "@/assets/pdf/team-works.jpg";
import columnRepair from "@/assets/pdf/column-repair.jpg";
import ceiling1 from "@/assets/pdf/ceiling-1.jpg";
import shotcrete from "@/assets/pdf/shotcrete.jpg";
import desertRoad from "@/assets/pdf/desert-road.jpg";
import asphaltPavingCrew from "@/assets/pdf/asphalt-paving-crew.png";
import waterproofingInsulation from "@/assets/pdf/waterproofing-insulation.png";

import heroLight from "@/assets/pdf/hero-light.png";
import heroDark from "@/assets/pdf/hero-dark.png";

export const IMAGES = {
  logo,
  luxuryHighwayHero,
  heroLight,
  heroDark,
  rollerPaving,
  works1,
  strengthening,
  teamWorks,
  columnRepair,
  ceiling1,
  shotcrete,
  desertRoad,
  asphaltPavingCrew,
  waterproofingInsulation,
};

export const CONTACT_INFO = {
  phoneDisplay: "0100 059 7912",
  phoneRaw: "201000597912",
  whatsappUrl: "https://wa.me/201000597912",
  email: "Info@redsearoadseg.com",
  domain: "www.redsearoadseg.com",
  domainUrl: "https://www.redsearoadseg.com",
  locationAr: "10 شارع الوحدة، المنشية، الغردقة، محافظة البحر الأحمر، مصر",
  locationEn: "10 Al-Wahda Street, Al-Manshya, Hurghada, Red Sea Governorate, Egypt",
};

export const GALLERY_ITEMS_AR = [
  {
    id: 0,
    src: "/roads/road-video-01.mp4",
    type: "video" as const,
    title: "فيديو ميداني: عمليات فرد ودك الأسفلت بالموقع",
    desc: "فيديو حصري من الموقع يوثق مراحل فرد الخلطة الأسفلتية ودكها بالهراسة الإنعكاسية.",
    category: "فيديو ميداني",
  },
  {
    id: 1,
    src: asphaltPavingCrew,
    title: "معدات وطاقم رصف الأسفلت بالساحل",
    desc: "أحدث فرادات ومعدات الرصف أثناء رصف الطرق الكورنيشية بالغردقة.",
    category: "طرق وأسفلت",
  },
  {
    id: 2,
    src: waterproofingInsulation,
    title: "أعمال العزل الأسمنتي والبيتيوميني للخزانات",
    desc: "تطبيق أغشية العزل المائي وتثبيت الطبقات الأسمنتية للخزانات والبيارات.",
    category: "عزل وتجفيف",
  },
  {
    id: 3,
    src: desertRoad,
    title: "رصف الطرق الرئيسية والصحراوية",
    desc: "تنفيذ ورصف الطرق المزدوجة والرئيسية في البيئة الصحراوية والجبلية.",
    category: "طرق وأسفلت",
  },
  {
    id: 4,
    src: rollerPaving,
    title: "دك ورصف طبقات الأسفلت",
    desc: "استخدام أحدث الهراسات ومعدات الرصف لضمان أعلى مستويات الفلاتة والكثافة.",
    category: "طرق وأسفلت",
  },
  {
    id: 5,
    src: strengthening,
    title: "تدعيم إنشائي بالخرسانة المقذوفة",
    desc: "تنفيذ أعمال التدعيم الشاملة باستخدام تكنولوجيا الخرسانة المقذوفة (Shotcrete).",
    category: "تدعيم وترميم",
  },
  {
    id: 6,
    src: teamWorks,
    title: "أعمال القطوع الصخرية بالحفارات",
    desc: "حفارات هيدروليكية حديثة تعمل في القطوع الصخرية وتجهيز مسارات الطرق.",
    category: "طرق وأسفلت",
  },
  {
    id: 7,
    src: columnRepair,
    title: "ترميم وتدعيم الأعمدة الخرسانية",
    desc: "معالجة وإصلاح العناصر الإنشائية والأعمدة وفق أعلى معايير الجودة.",
    category: "تدعيم وترميم",
  },
  {
    id: 8,
    src: ceiling1,
    title: "صيانة وتأهيل الأسقف الخرسانية",
    desc: "أعمال التأهيل والترميم الإنشائي المبني على فحوصات دقيقة للأسقف الخرسانية.",
    category: "تدعيم وترميم",
  },
  {
    id: 9,
    src: shotcrete,
    title: "تبطين وتدعيم بالمدفع الخرساني",
    desc: "رش الخرسانة المقذوفة لتدعيم الجدران والبيارات والمنشآت الهندسية.",
    category: "تدعيم وترميم",
  },
  {
    id: 10,
    src: works1,
    title: "أعمال الحفر وتجهيز تربة الأساس",
    desc: "فرق العمل الميدانية أثناء تنفيذ أعمال التجهيز والفرش بالموقع.",
    category: "طرق وأسفلت",
  },
  {
    id: 11,
    src: "/roads/road-01.jpg",
    title: "فرش ودك الخلطة الأسفلتية بفرادة DYNAPAC",
    desc: "فرد الخلطة الأسفلتية بالموقع بواسطة أحدث فرادات الرصف الهيدروليكية DYNAPAC.",
    category: "طرق وأسفلت",
  },
  {
    id: 12,
    src: "/roads/road-02.jpg",
    title: "دك وتسوية الأسفلت بالهراسة الإنعكاسية",
    desc: "أعمال دك وتسوية الرصف الأسفلتي بالهراسات الإنعكاسية المتقدمة لضمان الجودة.",
    category: "طرق وأسفلت",
  },
  {
    id: 13,
    src: "/roads/road-03.jpg",
    title: "تنفيذ ورصف طرق المشاريع البحرية والساحلية",
    desc: "أعمال التمهيد والفرش للطرق المحاذية للشواطئ والمنتجعات الساحلية.",
    category: "طرق وأسفلت",
  },
  {
    id: 14,
    src: "/roads/road-04.jpg",
    title: "تجهيز وتسوية تربة الأساس والطبقة الرابطة",
    desc: "دمك وتسوية تربة الأساس المساعد بالمستويات والمناسيب المعتمدة.",
    category: "طرق وأسفلت",
  },
  {
    id: 15,
    src: "/roads/road-05.jpg",
    title: "رصف شوارع المجمعات السياحية والقرى",
    desc: "تنفيذ الطرق الداخلية المسفلتة بمنتجعات البحر الأحمر بأعلى معايير الجودة.",
    category: "طرق وأسفلت",
  },
  {
    id: 16,
    src: "/roads/road-06.jpg",
    title: "دك الأسفلت بالمعدات الثقيلة بالموقع",
    desc: "استخدام الهراسات الثقيلة لتحقيق أقصى درجات التضام للكثافة الأسفلتية.",
    category: "طرق وأسفلت",
  },
  {
    id: 17,
    src: "/roads/road-07.jpg",
    title: "أعمال التمهيد النهائي والطبقة السطحية",
    desc: "إنهاء ودك الطبقة الأسفلتية السطحية للمشروع بدقة عالية.",
    category: "طرق وأسفلت",
  },
  {
    id: 18,
    src: "/roads/road-08.jpg",
    title: "تسوية القطوع والميول الميدانية للطرق",
    desc: "تجهيز المسارات والميول الهندسية بالمعدات الميدانية الحديثة.",
    category: "طرق وأسفلت",
  },
  {
    id: 19,
    src: "/roads/road-09.jpg",
    title: "رصف الطرق والساحات الخارجية بالفنادق",
    desc: "تنفيذ أعمال الرصف المتكاملة للمشروعات الفندقية في الغردقة.",
    category: "طرق وأسفلت",
  },
  {
    id: 20,
    src: "/roads/road-10.jpg",
    title: "عمليات دك الأسفلت بالهراسات الإنعكاسية",
    desc: "التأكد من التوزيع الحراري والتضام الكامل لسطح الأسفلت المكسو.",
    category: "طرق وأسفلت",
  },
  {
    id: 21,
    src: "/roads/road-11.jpg",
    title: "رش المستحلب البيتوميني اللاصق (Prime Coat)",
    desc: "رش وتغطية طبقة MCO البيتومينية على تربة الأساس قبل الرصف.",
    category: "طرق وأسفلت",
  },
  {
    id: 22,
    src: "/roads/road-12.jpg",
    title: "تطبيق الطبقة البيتومينية المعتمدة بالموقع",
    desc: "تجهيز الموقع برش الرابط البيتوميني لضمان التماسك بين الطبقات.",
    category: "طرق وأسفلت",
  },
  {
    id: 23,
    src: "/roads/road-13.jpg",
    title: "رصف الطرق والمناطق الحضرية بالغردقة",
    desc: "أعمال التطوير والرصف الشاملة للطرق والمحاور الرئيسية.",
    category: "طرق وأسفلت",
  },
  {
    id: 24,
    src: "/roads/road-14.jpg",
    title: "تجهيز مسارات الطرق المزدوجة",
    desc: "تسوية الحارات المرورية وتجهيز طبقة الأساس بالمشروع.",
    category: "طرق وأسفلت",
  },
  {
    id: 25,
    src: "/roads/road-15.jpg",
    title: "دك وتقوية حواف وطبقات الطريق",
    desc: "المحافظة على ثبات الحواف والاستقامة الهندسية للمسار.",
    category: "طرق وأسفلت",
  },
  {
    id: 26,
    src: "/roads/road-16.jpg",
    title: "تسوية وتجهيز التربة بالمشروعات",
    desc: "أعمال الجريدر والتسوية الهيدروليكية للتربة قبل وضع الأساس.",
    category: "طرق وأسفلت",
  },
  {
    id: 27,
    src: "/roads/road-17.jpg",
    title: "ماكينة تخطيط الطرق الثرموبلاستيك HOFMANN",
    desc: "تطبيق الدهانات الحرارية والتخطيط المساري للمرور بدقة عليا.",
    category: "طرق وأسفلت",
  },
  {
    id: 28,
    src: "/roads/road-18.jpg",
    title: "شوارع منتجع VITA RESORT المسفلتة",
    desc: "شبكة الطرق الداخلية المسفلتة بالكامل مع أعمدة الإنارة المودرن.",
    category: "طرق وأسفلت",
  },
  {
    id: 29,
    src: "/roads/road-19.jpg",
    title: "دك وترميم الطبقات الأسفلتية بالموقع",
    desc: "متابعة عمليات التضام والكثافة بواسطة الهراسات الاهتزازية.",
    category: "طرق وأسفلت",
  },
  {
    id: 30,
    src: "/roads/road-20.jpg",
    title: "تمهيد الطرق الصحراوية والمحاور",
    desc: "فتح وتمهيد المحاور الرئيسية عبر البيئات الجبلية والصحراوية.",
    category: "طرق وأسفلت",
  },
  {
    id: 31,
    src: "/roads/road-21.jpg",
    title: "فرش الأسفلت بالمساحات المفتوحة",
    desc: "تشغيل فرادات الرصف على النطاقات الواسعة لضمان استوائية السطح.",
    category: "طرق وأسفلت",
  },
  {
    id: 32,
    src: "/roads/road-22.jpg",
    title: "دك وتنعيم الطبقة الأسفلتية السطحية",
    desc: "استكمال مراحل الدك النهائية لتحقيق أعلى مستويات الفلاتة.",
    category: "طرق وأسفلت",
  },
  {
    id: 33,
    src: "/roads/road-23.jpg",
    title: "فحص درجة حرارة الأسفلت الميداني",
    desc: "مقياس حراري ألماني الدقة لقراءة حرارة الخلطة (~130°C) للجودة.",
    category: "طرق وأسفلت",
  },
  {
    id: 34,
    src: "/roads/road-24.jpg",
    title: "رصف مداخل ومخارج المشروعات",
    desc: "أعمال الرصف الميداني لمداخل القرى والمراكز السياحية.",
    category: "طرق وأسفلت",
  },
  {
    id: 35,
    src: "/roads/road-25.jpg",
    title: "الفحص الميداني والتسليم الابتدائي للطرق",
    desc: "التأكد من مطابقة جميع المواصفات الفنية قبل الاستلام النهائي.",
    category: "طرق وأسفلت",
  },
];

export const GALLERY_ITEMS_EN = [
  {
    id: 0,
    src: "/roads/road-video-01.mp4",
    type: "video" as const,
    title: "Field Video: Asphalt Spreading & Compaction Operations",
    desc: "Exclusive field video documenting hot-mix asphalt paving and reflective roller compaction on site.",
    category: "Field Video",
  },
  {
    id: 1,
    src: asphaltPavingCrew,
    title: "Coastal Road Asphalt Paving Fleet",
    desc: "Modern asphalt pavers and rollers operating along Hurghada coastal roads.",
    category: "Roads & Asphalt",
  },
  {
    id: 2,
    src: waterproofingInsulation,
    title: "Tank Insulation & Waterproofing Works",
    desc: "Applying bituminous waterproofing membrane and certified cement insulation.",
    category: "Insulation & Drying",
  },
  {
    id: 3,
    src: desertRoad,
    title: "Main & Desert Highway Paving",
    desc: "Construction and asphalt paving of dual carriageways in desert terrains.",
    category: "Roads & Asphalt",
  },
  {
    id: 4,
    src: rollerPaving,
    title: "Compacting Asphalt Layers",
    desc: "Using advanced rollers and paving equipment to achieve optimal density.",
    category: "Roads & Asphalt",
  },
  {
    id: 5,
    src: strengthening,
    title: "Structural Strengthening (Shotcrete)",
    desc: "Executing comprehensive strengthening utilizing shotcrete technology.",
    category: "Strengthening",
  },
  {
    id: 6,
    src: teamWorks,
    title: "Rock Excavation & Road Bed Prep",
    desc: "Heavy hydraulic excavators operating in rocky soil terrain.",
    category: "Roads & Asphalt",
  },
  {
    id: 7,
    src: columnRepair,
    title: "Concrete Column Repair & Reinforcement",
    desc: "Repairing and strengthening structural elements according to standard specs.",
    category: "Strengthening",
  },
  {
    id: 8,
    src: ceiling1,
    title: "Concrete Ceiling Rehabilitation",
    desc: "Structural rehabilitation and restoration based on precise engineering for ceilings.",
    category: "Strengthening",
  },
  {
    id: 9,
    src: shotcrete,
    title: "Shotcrete Application",
    desc: "Pneumatically applied concrete for pit and structure reinforcement.",
    category: "Strengthening",
  },
  {
    id: 10,
    src: works1,
    title: "Subgrade Excavation & Preparation",
    desc: "Field operational teams executing site leveling and base preparation.",
    category: "Roads & Asphalt",
  },
  {
    id: 11,
    src: "/roads/road-01.jpg",
    title: "DYNAPAC Asphalt Paver Operation",
    desc: "Spreading hot asphalt mix using high-spec DYNAPAC hydraulic pavers.",
    category: "Roads & Asphalt",
  },
  {
    id: 12,
    src: "/roads/road-02.jpg",
    title: "Asphalt Compaction Roller Operation",
    desc: "Precision asphalt rolling for optimal surface density and smoothness.",
    category: "Roads & Asphalt",
  },
  {
    id: 13,
    src: "/roads/road-03.jpg",
    title: "Coastal Project Road Paving",
    desc: "Subgrade prep and asphalt laying along beachfront resorts.",
    category: "Roads & Asphalt",
  },
  {
    id: 14,
    src: "/roads/road-04.jpg",
    title: "Subgrade & Base Course Preparation",
    desc: "Compacting and grading aggregate base layers to approved specs.",
    category: "Roads & Asphalt",
  },
  {
    id: 15,
    src: "/roads/road-05.jpg",
    title: "Resort Internal Street Network Paving",
    desc: "Paving internal resort access roads across Red Sea destinations.",
    category: "Roads & Asphalt",
  },
  {
    id: 16,
    src: "/roads/road-06.jpg",
    title: "Heavy Equipment Asphalt Compaction",
    desc: "Using heavy vibratory rollers to achieve maximum structural density.",
    category: "Roads & Asphalt",
  },
  {
    id: 17,
    src: "/roads/road-07.jpg",
    title: "Final Wearing Course Paving",
    desc: "High-precision surface course laying and finishing.",
    category: "Roads & Asphalt",
  },
  {
    id: 18,
    src: "/roads/road-08.jpg",
    title: "Road Slope Grading & Site Prep",
    desc: "Heavy grader operations shaping road embankments.",
    category: "Roads & Asphalt",
  },
  {
    id: 19,
    src: "/roads/road-09.jpg",
    title: "Hotel Grounds Asphalt Paving",
    desc: "Comprehensive paving operations for luxury hotel complexes.",
    category: "Roads & Asphalt",
  },
  {
    id: 20,
    src: "/roads/road-10.jpg",
    title: "Reflective Roller Asphalt Finishing",
    desc: "Monitoring thermal window and compaction density across pavement.",
    category: "Roads & Asphalt",
  },
  {
    id: 21,
    src: "/roads/road-11.jpg",
    title: "Bituminous Prime Coat (MCO) Application",
    desc: "Uniform spraying of prime coat emulsion over aggregate base layer.",
    category: "Roads & Asphalt",
  },
  {
    id: 22,
    src: "/roads/road-12.jpg",
    title: "Bitumen Spraying & Bond Coat Prep",
    desc: "Applying liquid bitumen to guarantee inter-layer adhesion.",
    category: "Roads & Asphalt",
  },
  {
    id: 23,
    src: "/roads/road-13.jpg",
    title: "Hurghada City Road Construction",
    desc: "Urban street paving and infrastructure upgrades in Hurghada.",
    category: "Roads & Asphalt",
  },
  {
    id: 24,
    src: "/roads/road-14.jpg",
    title: "Dual Carriageway Bed Prep",
    desc: "Grading and subgrade compaction for multi-lane roadways.",
    category: "Roads & Asphalt",
  },
  {
    id: 25,
    src: "/roads/road-15.jpg",
    title: "Road Edge & Shoulder Compaction",
    desc: "Ensuring structural integrity and alignment along pavement edges.",
    category: "Roads & Asphalt",
  },
  {
    id: 26,
    src: "/roads/road-16.jpg",
    title: "Hydraulic Soil Grading Operations",
    desc: "Levelling and grading raw soil before base course application.",
    category: "Roads & Asphalt",
  },
  {
    id: 27,
    src: "/roads/road-17.jpg",
    title: "German HOFMANN Thermoplastic Road Marker",
    desc: "Applying high-durability reflective lane striping on hot asphalt.",
    category: "Roads & Asphalt",
  },
  {
    id: 28,
    src: "/roads/road-18.jpg",
    title: "VITA RESORT Paved Street Network",
    desc: "Completed asphalt roads fitted with modern street illumination.",
    category: "Roads & Asphalt",
  },
  {
    id: 29,
    src: "/roads/road-19.jpg",
    title: "On-Site Asphalt Density Compaction",
    desc: "Vibratory roller compaction ensuring zero void ratio.",
    category: "Roads & Asphalt",
  },
  {
    id: 30,
    src: "/roads/road-20.jpg",
    title: "Desert Highway Route Alignment",
    desc: "Opening and grading major routes through desert mountain terrain.",
    category: "Roads & Asphalt",
  },
  {
    id: 31,
    src: "/roads/road-21.jpg",
    title: "Large Scale Asphalt Laying",
    desc: "High-output paving machinery operating on wide road sections.",
    category: "Roads & Asphalt",
  },
  {
    id: 32,
    src: "/roads/road-22.jpg",
    title: "Surface Finish & Smoothness Roller",
    desc: "Final passes with smooth drum rollers for optimum ride quality.",
    category: "Roads & Asphalt",
  },
  {
    id: 33,
    src: "/roads/road-23.jpg",
    title: "Quality Asphalt Thermal Probe Inspection",
    desc: "German precision probe checking hot mix temperature (~130°C).",
    category: "Roads & Asphalt",
  },
  {
    id: 34,
    src: "/roads/road-24.jpg",
    title: "Resort Entrance & Corridor Paving",
    desc: "Field asphalt paving at resort entryways and access lanes.",
    category: "Roads & Asphalt",
  },
  {
    id: 35,
    src: "/roads/road-25.jpg",
    title: "Project Inspection & Pre-Handover Quality Audit",
    desc: "Final quality assurance check before project client handover.",
    category: "Roads & Asphalt",
  },
];

export interface RoadMediaItem {
  id: number;
  src: string;
  type: "image" | "video";
  title: string;
  desc: string;
  category: string;
  categorySlug: "all" | "paving" | "machinery" | "base" | "video";
}

export const ROAD_STATIC_ITEMS_AR: RoadMediaItem[] = [
  // {
  //   id: 101,
  //   src: "/roads/road-video-01.mp4",
  //   type: "video",
  //   title: "فيديو ميداني: عمليات فرد ودك الأسفلت بالموقع",
  //   desc: "تغطية مرئية حية لعمليات فرد الخلطة الأسفلتية والدك بالهراسات الثقيلة في موقع التنفيذ.",
  //   category: "فيديو ميداني",
  //   categorySlug: "video",
  // },
  {
    id: 102,
    src: "/roads/road-01.jpg",
    type: "image",
    title: "أحدث معدات الرصف - فرد الأسفلت بفرادة DYNAPAC",
    desc: "فرش الخلطة الأسفلتية بالموقع بواسطة أحدث فرادات الرصف الهيدروليكية DYNAPAC لضمان أقصى مستويات الجودة.",
    category: "أعمال الأسفلت والرصف",
    categorySlug: "paving",
  },
  {
    id: 104,
    src: "/roads/road-02.jpg",
    type: "image",
    title: "أحدث معدات الرصف والدك الإنعكاسي لضمان الجودة",
    desc: "أعمال دك وتسوية الرصف الأسفلتي بالهراسات الإنعكاسية المتقدمة لتحقيق أعلى مستويات التضام والجودة الهندسي.",
    category: "الأسطول والمعدات",
    categorySlug: "machinery",
  },
  {
    id: 112,
    src: "/roads/road-11.jpg",
    type: "image",
    title: "رش وتجهيز طبقة MCO البيتومينية اللاصقة",
    desc: "تطبيق مستحلب البيتومين السائل (MCO / Prime Coat) على تربة الأساس قبل البدء في فرش الأسفلت.",
    category: "التجهيز والدك",
    categorySlug: "base",
  },
  {
    id: 118,
    src: "/roads/road-17.jpg",
    type: "image",
    title: "ماكينة تخطيط الطرق المتخصصة HOFMANN الألمانية",
    desc: "معدة التخطيط الحراري (Thermoplastic) المتخصصة لرسم خطوط المرور المسارية بدقة متناهية.",
    category: "الأسطول والمعدات",
    categorySlug: "machinery",
  },
  {
    id: 124,
    src: "/roads/road-23.jpg",
    type: "image",
    title: "ترمومتر الفحص الحراري الميداني للأسفلت الساخن (Made in Germany)",
    desc: "مقياس حرارة ثنائي المعدن عالي الدقة يقرأ درجة حرارة الخلطة الأسفلتية (~130°C) لضمان كفاءة الدك والالتصاق.",
    category: "أعمال الأسفلت والرصف",
    categorySlug: "paving",
  },
  {
    id: 119,
    src: "/roads/road-18.jpg",
    type: "image",
    title: "إنارة وتجهيز شوارع منتجع VITA RESORT",
    desc: "شبكة الطرق الداخلية المسفلتة بالكامل مع تركيب أعمدة الإنارة الديكورية الحديثة واللاندسكيب.",
    category: "أعمال الأسفلت والرصف",
    categorySlug: "paving",
  },
];

export const ROAD_STATIC_ITEMS_EN: RoadMediaItem[] = [
  {
    id: 102,
    src: "/roads/road-01.jpg",
    type: "image",
    title: "Latest Paving Equipment - DYNAPAC Asphalt Paver Operation",
    desc: "Spreading hot asphalt mix on site using high-spec DYNAPAC hydraulic pavers for peak quality.",
    category: "Asphalt & Paving",
    categorySlug: "paving",
  },
  {
    id: 104,
    src: "/roads/road-02.jpg",
    type: "image",
    title: "State-of-the-Art Paving & Reflective Compaction Equipment for Quality Assurance",
    desc: "High-precision asphalt compaction roller ensuring maximum surface density, smoothness, and quality assurance.",
    category: "Heavy Machinery",
    categorySlug: "machinery",
  },
  {
    id: 112,
    src: "/roads/road-11.jpg",
    type: "image",
    title: "Bituminous Prime Coat (MCO) Emulsion Application",
    desc: "Uniform spraying of liquid bitumen prime coat over aggregate base course prior to asphalt laying.",
    category: "Base Prep & Compaction",
    categorySlug: "base",
  },
  {
    id: 118,
    src: "/roads/road-17.jpg",
    type: "image",
    title: "German HOFMANN Thermoplastic Road Striping Truck",
    desc: "Specialized HOFMANN road marking equipment for applying high-durability thermoplastic line striping.",
    category: "Heavy Machinery",
    categorySlug: "machinery",
  },
  {
    id: 124,
    src: "/roads/road-23.jpg",
    type: "image",
    title: "Quality Assurance Field Asphalt Temperature Check (Made in Germany)",
    desc: "German precision bimetallic probe thermometer inspecting hot mix thermal window (~130°C) for optimal compaction.",
    category: "Asphalt & Paving",
    categorySlug: "paving",
  },
  {
    id: 119,
    src: "/roads/road-18.jpg",
    type: "image",
    title: "VITA RESORT Street Paving & Decorative Lighting",
    desc: "Fully paved resort streets finished with modern decorative light poles and green landscaping.",
    category: "Asphalt & Paving",
    categorySlug: "paving",
  },
];

export const CONTENT = {
  ar: {
    nav: [
      { label: "عن الشركة", href: "#profile" },
      { label: "الخدمات", href: "#classification" },
      { label: "المشروعات", href: "#projects" },
      { label: "معرض الطرق", href: "#road-static-gallery" },
      { label: "معرض الصور المتحرك", href: "#gallery" },
      { label: "اتصل بنا", href: "#contact" },
    ],
    roadStatic: {
      kicker: "المعرض الميداني الثابت",
      title: "معرض مشروعات وأعمال الطرق الميدانية",
      subtitle: "استعراض حصري وشامل لأحدث أعمال الرصف والأسفلت، وتجهيز الطرق ومعداتنا بالمواقع الميدانية بمحافظة البحر الأحمر",
      filterAll: "الكل",
      filterPaving: "أعمال الأسفلت والرصف",
      filterMachinery: "الأسطول والمعدات",
      filterBase: "التجهيز والدك",
      filterVideo: "فيديوهات الموقع",
    },
    hero: {
      tag: "شركة البحر الأحمر للمقاولات العامة ورصف الطرق",
      title: "الريادة والتميز في إنشاء وتطوير شبكات الطرق والبنية التحتية",
      subtitle:
        "خبرة هندسية تمتد لأكثر من 20 عاماً في تنفيذ أعمال الأسفلت، العزل، التجفيف، التوريدات، والتنفيذ الإنشائي عبر كافة مدن محافظة البحر الأحمر.",
      ctaPrimary: "تواصل واتساب مباشر",
      ctaSecondary: "استكشف مشروعاتنا",
      stats: [
        { label: "سنة التأسيس", value: "2022" },
        { label: "خبرة القيادات", value: "+20 عام" },
        { label: "المهندسين والمختصين", value: "+50" },
        { label: "المشروعات المنفذة", value: "+14 مشروع" },
      ],
    },
    profile: {
      kicker: "الملف التعريفي",
      title: "بيانات شركة البحر الأحمر للطرق",
      showcaseTag: "مواقع التنفيذ الميداني",
      showcaseTitle: "أحدث معدات الرصف والدك الإنعكاسي لضمان الجودة",
      items: [
        { label: "سنة التأسيس", value: "2022م" },
        { label: "المقر الرئيسي", value: "10 شارع الوحدة، المنشية، الغردقة، محافظة البحر الأحمر" },
        {
          label: "النطاق الجغرافي للأعمال",
          value:
            "محافظة البحر الأحمر (رأس غارب – الغردقة – سهل حشيش – سفاجا – سوما باي – القصير – مرسى علم)",
        },
        {
          label: "سنوات الخبرة",
          value: "أكثر من 20 عاماً من الخبرة المتراكمة للقيادات الهندسية والفنية",
        },
      ],
    },
    vision: {
      kicker: "التوجه الاستراتيجي",
      title: "رؤية ورسالة الشركة",
      visionTitle: "رؤية الشركة",
      visionBody:
        "أن نكون الشركة الرائدة في تقديم حلول هندسية مبتكرة ومستدامة لشبكات الطرق عبر دمج التكنولوجيا الحديثة مع الحفاظ على البيئة، مع ترك بصمة تميز في بناء المدن الذكية والطرق الآمنة التي تدعم الاقتصاد الوطني وتلبي تطلعات الأجيال القادمة.",
      missionTitle: "رسالة الشركة",
      missionBody:
        "تقديم خدمات هندسية وإنشائية رفيعة المستوى في قطاع الطرق والمقاولات، بالاعتماد على كفاءة كادرنا الفني وأحدث التقنيات العالمية، مع الالتزام التام بأعلى درجات الدقة والجداول الزمنية وضمان أعلى مستويات السلامة لمرتادي الطرق.",
    },
    values: {
      kicker: "ثوابت العمل",
      title: "القيم الجوهرية للشركة",
      items: [
        {
          no: "01",
          title: "النزاهة والشفافية",
          body: "نعمل بصدق وشفافية مطلقة لبناء جسور الثقة المستدامة مع عملائنا وشركائنا.",
        },
        {
          no: "02",
          title: "جودة التنفيذ",
          body: "الالتزام بالتميز في جوهر أعمالنا عبر تطبيق أعلى معايير الجودة العالمية في كل مشروع.",
        },
        {
          no: "03",
          title: "الابتكار والتطوير",
          body: "نعتمد أحدث التقنيات والمنهجيات الهندسية للتحسين المستمر ورفع الكفاءة التشغيلية.",
        },
        {
          no: "04",
          title: "الاستدامة البيئية",
          body: "نُعطي الأولوية للممارسات البيئية الصديقة لتقليل الأثر البيئي وتعزيز التنمية المستدامة.",
        },
        {
          no: "05",
          title: "التعاون البناء",
          body: "بناء علاقات استراتيجية متينة مع عملائنا والمجتمعات التي نخدمها أساس نجاحنا.",
        },
        {
          no: "06",
          title: "السلامة والصحة المهنية",
          body: "نطبق أعلى معايير الأمان لحماية الكوادر البشرية والمجتمع في مواقع العمل.",
        },
      ],
    },
    classification: {
      kicker: "تصنيف الشركة والخدمات",
      title: "شركة مقاولات متوسطة الفئة ومتخصصة",
      scopeLabel: "نطاق العمل: محافظة البحر الأحمر",
      scopeCities: "الغردقة – رأس غارب – سفاجا – مرسى علم – الجونة – سهل حشيش",
      servicesTitle: "الخدمات الرئيسية والمجالات",
      services: [
        {
          no: "01",
          name: "أعمال الطرق والأسفلت",
          desc: "تمهيد، تسوية، ورصف الطرق الداخلية والرئيسية بأعلى درجات الفلاتة والدك.",
        },
        {
          no: "02",
          name: "أعمال العزل المائي والحراري",
          desc: "عزل الخزانات والمنشآت بمواد الأوسموزيل والعزل الأسمنتي المعتمد.",
        },
        {
          no: "03",
          name: "أعمال التجفيف وسحب المياه",
          desc: "نزح المياه الجوفية والتجفيف الهيكلي لبيارات الصرف والمباني.",
        },
        {
          no: "04",
          name: "أعمال التوريدات العمومية",
          desc: "توريد السن والرمال الناعمة والخشنة ومواد تأسيس الطرق والخرسانات.",
        },
        {
          no: "05",
          name: "أعمال التدعيم والترميم الإنشائي",
          desc: "تدعيم بالخرسانة المقذوفة (Shotcrete) والكتل الكربونية لتقوية المنشآت.",
        },
      ],
    },
    projects: {
      kicker: "سجل الإنجازات",
      title: "سابقة المشروعات والخبرات الميدانية",
      filterAll: "جميع المشروعات",
      filterRoads: "طرق وأسفلت",
      filterInsulation: "عزل وتجفيف",
      filterStrengthening: "تدعيم وترميم",
      filterSupply: "توريدات",
      items: [
        {
          name: "منتجع بورتو فينو (Porto Fino Resort)",
          loc: "مرسى علم",
          category: "طرق وأسفلت",
          items: [
            "أعمال الطرق الداخلية والخارجية والأسفلت",
            "أعمال الحفر في التربة الصخرية واللافتات المرورية",
          ],
        },
        {
          name: "قرية دانا بيتش (Dana Beach)",
          loc: "الغردقة",
          category: "طرق وأسفلت",
          items: ["أعمال تمهيد ورصف الطرق"],
        },
        {
          name: "مدينة الجونة (El Gouna)",
          loc: "الغردقة / الجونة",
          category: "طرق وأسفلت",
          items: ["أعمال الطرق الداخلية والرصف"],
        },
        {
          name: "مشروع نيفارلاند (Neverland)",
          loc: "الغردقة",
          category: "طرق وأسفلت",
          items: ["أعمال شبكات الطرق والطبقات الأساسية"],
        },
        {
          name: "المدرسة الفندقية الإيطالية",
          loc: "الغردقة",
          category: "طرق وأسفلت",
          items: ["أعمال الطرق والمساحات المحيطة"],
        },
        {
          name: "فندق الباتروس بالاس (Albatros Palace)",
          loc: "الغردقة",
          category: "عزل وتجفيف",
          items: ["أعمال الخزانات + العزل بمواد الأوسموزيل والعزل الأسمنتي"],
        },
        {
          name: "جانجل أكوا بارك 3 (Jungle Aqua Park 3)",
          loc: "الغردقة",
          category: "عزل وتجفيف",
          items: ["أعمال العزل الأسمنتي المعتمد للخزانات"],
        },
        {
          name: "تيتانيك بيرل (Titanic Pearl)",
          loc: "الغردقة",
          category: "تدعيم وترميم",
          items: ["أعمال التدعيم بألياف الكربون (Carbon Fiber)"],
        },
        {
          name: "مشروع ريدكون (Redcon)",
          loc: "سوما باي",
          category: "توريدات",
          items: ["توريد رمال خشنة وناعمة ومواد التأسيس"],
        },
        {
          name: "مشروع ريمفارا (Remvara)",
          loc: "الغردقة",
          category: "تدعيم وترميم",
          items: [
            "ترميم وتدعيم بالخرسانة المقذوفة (Shotcrete)",
            "عزل مائي داخلي وخارجي لبيارة الصرف",
            "نزح مياه وحفر واستبدال تربة للنادي الصحي",
            "اصلاحات الخرسانة والتأهيل",
          ],
        },
        {
          name: "فندق أكوا فيستا (Aqua Vista Hotel)",
          loc: "الغردقة",
          category: "طرق وأسفلت",
          items: ["أعمال الطرق والمداخل"],
        },
        {
          name: "فندق بلدي (Balady Hotel)",
          loc: "مرسى علم",
          category: "طرق وأسفلت",
          items: ["أعمال الحفر والردم والتمهيد"],
        },
        {
          name: "مرايا مول (Maraya Mall)",
          loc: "الجونة",
          category: "طرق وأسفلت",
          items: ["تسوية الطرق، اللاندسكيب، إنترلوك والبردورات"],
        },
      ],
    },
    gallery: {
      kicker: "المعرض الميداني",
      title: "صور المشروعات ومعدات التنفيذ",
      subtitle: "اضغط على أي صورة لاستعراضها بالحجم الكامل والتعرف على تفاصيل العمل",
      viewFull: "تثبيت وتكبير الصورة",
    },
    quality: {
      kicker: "سياسة الجودة",
      title: "التزامنا الراسخ بالجودة والمعايير القياسية",
      intro:
        "تلتزم شركة البحر الأحمر للمقاولات ورصف الطرق بتطبيق أرفع معايير الجودة في كافة مشروعات البنية التحتية، إيماناً بأن الجودة هي الركيزة الأساسية لاستدامة الطرق وسلامة المجتمع.",
      principles: [
        {
          title: "الالتزام بالمواصفات الفنية",
          body: "التطابق التام مع المخططات الهندسية واختبار المواد (أسفلت، خرسانة، تربة) معملياً.",
        },
        {
          title: "التطوير المستمر (ISO 9001)",
          body: "تحديث أنظمة العمل والمعدات وفق نظام إدارة الجودة العالمي.",
        },
        {
          title: "كفاءة الكوادر البشرية",
          body: "الاستثمار الدائم في تدريب المهندسين والفنيين لضمان أعلى مستويات الاحترافية.",
        },
        {
          title: "رضا العملاء والشركاء",
          body: "الالتزام التام بالمواعيد والحلول الفعالة ذات الكفاءة الاقتصادية والعالية.",
        },
        {
          title: "السلامة والبيئة",
          body: "دمج معايير السلامة المهنية والمرورية لحماية العمال ومرتادي الطرق.",
        },
        {
          title: "الرقابة والمراجعة الميدانية",
          body: "إشراف ميداني صارم من بدء التنفيذ حتى التسليم النهائي للمشروع.",
        },
      ],
    },
    objectives: {
      kicker: "الأهداف المرحلية",
      title: "مؤشرات قياس الأداء والأهداف المحددة",
      intro:
        "وضعت الشركة أهدافاً مرحلية كمية لضمان التطبيق الفعلي لسياسة الجودة وتحقيق التميز التشغيلي:",
      items: [
        {
          no: "1",
          title: "التميز الفني والتشغيلي",
          points: [
            "صفر أخطاء فنية: خفض معدلات إعادة العمل لأقل من 2%",
            "مطابقة المواد: مطابقة 100% للمواد الموردة للمواصفات القياسية",
          ],
        },
        {
          no: "2",
          title: "الالتزام بالجدول الزمني",
          points: [
            "كفاءة التسليم: تسليم 95% من المشروعات في موعدها المحدد أو قبله",
            "استجابة سريعة: معالجة الملاحظات الفنية خلال 48-72 ساعة",
          ],
        },
        {
          no: "3",
          title: "السلامة والاستدامة",
          points: [
            "سجل خال من الحوادث: تطبيـق صارم لبروتوكولات الأمان والسلامة",
            "عمر افتراضي ممتد: تنفيذ الرصف بما يضمن الكفاءة طوال العمر التصميمي",
          ],
        },
        {
          no: "4",
          title: "التطوير والتدريب",
          points: [
            "رفع الكفاءة: تدريب 80%+ من الكادر على أحدث تقنيات الرصف",
            "تحديث المعدات: صيانة دورية 100% لأسطول المعدات الثقيلة",
          ],
        },
        {
          no: "5",
          title: "رضا العملاء",
          points: ["مؤشر التقييم: تحقيق تقييم ممتاز في 90%+ من المشروعات المسلمة"],
        },
      ],
    },
    team: {
      kicker: "الهيكل التنظيمي",
      title: "القيادة والكوادر البشرية",
      members: [
        { role: "رئيس مجلس الإدارة", name: "م. ممدوح السيد", email: "mamdouh-elsayed@redsearoadseg.com" },
        { role: "الرئيس التنفيذي | CEO", name: "م. إيهاب المحمدي", email: "ehab-elmohamdy@redsearoadseg.com" },
        { role: "المدير المالي | CFO", name: "أ. أحمد سنوسي", email: "ahmed-senosy@redsearoadseg.com" },
        { role: "مدير المكتب الفني", name: "م. منال الرشيدى", email: "manal-elrashedy@redsearoadseg.com" },
      ],
      stats: [
        { label: "عدد المهندسين المتخصصين", value: "+50 مهندس" },
        { label: "الفنيون والعمالة الماهرة", value: "أطقم فنية متكاملة" },
      ],
    },
    contact: {
      title: "تواصل مع شركة البحر الأحمر للطرق",
      sub: "مستعدون لبدء تنفيذ المشروعات وتوفير كافة التوريدات والاستشارات الفنية بسرعة واحترافية.",
      callUs: "اتصال هاتفي مباشر",
      whatsapp: "محادثات واتساب فورية",
      email: "البريد الإلكتروني",
      address: "العنوان الرئيسي",
      copyright: "جميع الحقوق محفوظة © شركة البحر الأحمر للمقاولات ورصف الطرق",
    },
  },
  en: {
    nav: [
      { label: "About Us", href: "#profile" },
      { label: "Services", href: "#classification" },
      { label: "Projects", href: "#projects" },
      { label: "Road Operations", href: "#road-static-gallery" },
      { label: "Slider Gallery", href: "#gallery" },
      { label: "Contact Us", href: "#contact" },
    ],
    roadStatic: {
      kicker: "Static Field Gallery",
      title: "Field Road Operations Showcase",
      subtitle: "Exclusive static exhibition of hot asphalt paving, roadbed preparation, and heavy machinery active in the field",
      filterAll: "All",
      filterPaving: "Asphalt & Paving",
      filterMachinery: "Heavy Machinery",
      filterBase: "Base Prep & Compaction",
      filterVideo: "Field Videos",
    },
    hero: {
      tag: "Red Sea for Roads & General Contracting Company",
      title: "Excellence & Leadership in Road Construction & Infrastructure",
      subtitle:
        "Over 20 years of technical expertise delivering asphalt paving, waterproofing, dewatering, material supply, and structural repair across the Red Sea Governorate.",
      ctaPrimary: "Direct WhatsApp",
      ctaSecondary: "Explore Projects",
      stats: [
        { label: "Established", value: "2022" },
        { label: "Leadership Exp.", value: "20+ Yrs" },
        { label: "Engineers & Staff", value: "50+" },
        { label: "Key Projects", value: "14+" },
      ],
    },
    profile: {
      kicker: "Company Profile",
      title: "Company Corporate Data",
      showcaseTag: "Field Operational Sites",
      showcaseTitle: "State-of-the-Art Paving & Reflective Compaction Equipment for Quality Assurance",
      items: [
        { label: "Year of Establishment", value: "2022" },
        {
          label: "Head Office",
          value: "10 Al-Wahda Street, Al-Manshya, Hurghada, Red Sea Governorate, Egypt",
        },
        {
          label: "Geographical Scope",
          value:
            "Red Sea Governorate (Ras Ghareb – Hurghada – Sahl Hasheesh – Safaga – Soma Bay – El Quseir – Marsa Alam)",
        },
        {
          label: "Years of Experience",
          value: "More than 20 years of accumulated leadership & engineering expertise",
        },
      ],
    },
    vision: {
      kicker: "Strategic Direction",
      title: "Company Vision & Mission",
      visionTitle: "Company Vision",
      visionBody:
        "To lead in developing innovative and sustainable engineering solutions for road networks by integrating modern technology with environmental preservation, shaping safe infrastructure that connects communities efficiently.",
      missionTitle: "Company Mission",
      missionBody:
        "To deliver outstanding engineering and construction services in the roads sector, relying on our highly qualified team and global technologies, ensuring strict schedules, precision, and road safety.",
    },
    values: {
      kicker: "Work Ethics",
      title: "Core Values",
      items: [
        {
          no: "01",
          title: "Integrity",
          body: "We operate with utmost honesty and transparency to build enduring trust with clients and partners.",
        },
        {
          no: "02",
          title: "Quality Excellence",
          body: "Commitment to technical excellence is at the heart of every infrastructure project we execute.",
        },
        {
          no: "03",
          title: "Innovation",
          body: "Embracing advanced engineering methodologies and modern machinery to continuously optimize delivery.",
        },
        {
          no: "04",
          title: "Sustainability",
          body: "Prioritizing eco-friendly construction techniques to reduce environmental impact.",
        },
        {
          no: "05",
          title: "Collaboration",
          body: "Building strong partnerships with clients, supervising consultants, and local communities.",
        },
        {
          no: "06",
          title: "Safety & Health",
          body: "Enforcing strict occupational safety standards to protect workers and road users at all times.",
        },
      ],
    },
    classification: {
      kicker: "Classification & Services",
      title: "Medium-Sized Specialized Contracting Company",
      scopeLabel: "Operational Scope: Red Sea Governorate",
      scopeCities: "Hurghada – Ras Ghareb – Safaga – Marsa Alam – El Gouna – Sahl Hasheesh",
      servicesTitle: "Core Services & Capabilities",
      services: [
        {
          no: "01",
          name: "Road & Asphalt Construction",
          desc: "Subgrade preparation, base compaction, asphalt laying, and precision road paving.",
        },
        {
          no: "02",
          name: "Waterproofing & Insulation",
          desc: "Tank and structure insulation using Osmoseal and certified cementitious materials.",
        },
        {
          no: "03",
          name: "Dewatering & Structural Drying",
          desc: "Groundwater dewatering, excavation drying, and pump management for sewage pits.",
        },
        {
          no: "04",
          name: "General Material Supply",
          desc: "Supplying crushed aggregates, coarse & fine sand, and base course road materials.",
        },
        {
          no: "05",
          name: "Structural Strengthening & Shotcrete",
          desc: "Restoration using shotcrete, carbon fiber reinforcement, and concrete column repair.",
        },
      ],
    },
    projects: {
      kicker: "Track Record",
      title: "Executed Portfolio & Experience",
      filterAll: "All Projects",
      filterRoads: "Roads & Asphalt",
      filterInsulation: "Insulation & Drying",
      filterStrengthening: "Strengthening",
      filterSupply: "Supplies",
      items: [
        {
          name: "Porto Fino Resort",
          loc: "Marsa Alam",
          category: "Roads & Asphalt",
          items: ["Internal and external road works", "Rocky soil excavation & traffic signage"],
        },
        {
          name: "Dana Beach Village",
          loc: "Hurghada",
          category: "Roads & Asphalt",
          items: ["Road leveling and asphalt paving works"],
        },
        {
          name: "El Gouna City",
          loc: "Hurghada / El Gouna",
          category: "Roads & Asphalt",
          items: ["Internal road network construction"],
        },
        {
          name: "Neverland Project",
          loc: "Hurghada",
          category: "Roads & Asphalt",
          items: ["Road base preparation and asphalt laying"],
        },
        {
          name: "Italian Hotel School",
          loc: "Hurghada",
          category: "Roads & Asphalt",
          items: ["Perimeter road paving and landscape preparation"],
        },
        {
          name: "Albatros Palace Hotel",
          loc: "Hurghada",
          category: "Insulation & Drying",
          items: ["Water storage tanks + Osmoseal cementitious insulation"],
        },
        {
          name: "Jungle Aqua Park 3",
          loc: "Hurghada",
          category: "Insulation & Drying",
          items: ["Waterproofing & cement insulation for water reservoirs"],
        },
        {
          name: "Titanic Pearl",
          loc: "Hurghada",
          category: "Strengthening",
          items: ["Structural strengthening with carbon fiber polymer wraps"],
        },
        {
          name: "Redcon Project",
          loc: "Soma Bay",
          category: "Supplies",
          items: ["Supply of high-grade coarse and fine sand for construction"],
        },
        {
          name: "Remvara Project",
          loc: "Hurghada",
          category: "Strengthening",
          items: [
            "Shotcrete structural restoration",
            "Sewage pit waterproofing",
            "Health Club dewatering & soil replacement",
            "Concrete repair",
          ],
        },
        {
          name: "Aqua Vista Hotel",
          loc: "Hurghada",
          category: "Roads & Asphalt",
          items: ["Entrance and internal asphalt road construction"],
        },
        {
          name: "Balady Hotel",
          loc: "Marsa Alam",
          category: "Roads & Asphalt",
          items: ["Excavation, backfilling, and subgrade compaction"],
        },
        {
          name: "Maraya Mall",
          loc: "El Gouna",
          category: "Roads & Asphalt",
          items: ["Grading, landscaping, interlock tiles, and curb stones"],
        },
      ],
    },
    gallery: {
      kicker: "Field Gallery",
      title: "Project Photos & Heavy Equipment",
      subtitle: "Click on any photo to inspect full resolution view and project highlights",
      viewFull: "Inspect Photo",
    },
    quality: {
      kicker: "Quality Policy",
      title: "Uncompromising Commitment to Engineering Quality",
      intro:
        "Red Sea for Roads Company adheres to international quality standards in road construction, believing that quality is the true foundation of sustainable infrastructure.",
      principles: [
        {
          title: "Compliance with Specifications",
          body: "Strict compliance with approved engineering specs and laboratory testing of asphalt and concrete.",
        },
        {
          title: "Continuous Improvement (ISO 9001)",
          body: "Updating operational equipment according to ISO 9001 quality management systems.",
        },
        {
          title: "Competent Workforce",
          body: "Investing in engineer and technician training to deliver maximum precision.",
        },
        {
          title: "Client & Partner Satisfaction",
          body: "Adhering to timelines while delivering cost-effective, premium-grade infrastructure.",
        },
        {
          title: "Safety & Environmental Care",
          body: "Integrating traffic and site safety standards to protect workers and road users.",
        },
        {
          title: "Field Monitoring & Auditing",
          body: "Rigorous internal and site supervision from kickoff to final handover.",
        },
      ],
    },
    objectives: {
      kicker: "Phased Objectives",
      title: "Key Performance Metrics & Operational Targets",
      intro: "Quantifiable objectives set to guarantee quality execution in road construction:",
      items: [
        {
          no: "1",
          title: "Technical Excellence",
          points: [
            "Zero Technical Errors: Reducing rework rates under 2%",
            "Material Specs: 100% laboratory compliance for bitumen & aggregates",
          ],
        },
        {
          no: "2",
          title: "Schedule Adherence",
          points: [
            "On-time Delivery: Completing 95%+ projects on or before deadlines",
            "Rapid Response: Resolving consultant notes within 48-72 hours",
          ],
        },
        {
          no: "3",
          title: "Safety & Durability",
          points: [
            "Accident-Free Record: Strict enforcement of site safety protocols",
            "Longer Service Life: Executing asphalt paving for maximum pavement durability",
          ],
        },
        {
          no: "4",
          title: "Development & Fleet",
          points: [
            "Competency Boost: Training 80%+ engineering staff on modern methods",
            "Fleet Upgrades: 100% periodic maintenance for heavy machinery",
          ],
        },
        {
          no: "5",
          title: "Client Ratings",
          points: ["Satisfaction Score: Achieving 'Excellent' ratings in 90%+ executed projects"],
        },
      ],
    },
    team: {
      kicker: "Organizational Structure",
      title: "Executive Management & Engineering Staff",
      members: [
        { role: "Chairman of the Board", name: "Eng. Mamdouh El-Sayed", email: "mamdouh-elsayed@redsearoadseg.com" },
        { role: "Chief Executive Officer | CEO", name: "Eng. Ehab El-Mohamady", email: "ehab-elmohamdy@redsearoadseg.com" },
        { role: "Chief Financial Officer | CFO", name: "Mr. Ahmed Sanousi", email: "ahmed-senosy@redsearoadseg.com" },
        { role: "Technical Office Manager", name: "Eng. Manal Elrashedy", email: "manal-elrashedy@redsearoadseg.com" },
      ],
      stats: [
        { label: "Specialized Engineers", value: "50+ Engineers" },
        { label: "Technicians & Skilled Workers", value: "Full Field Teams" },
      ],
    },
    contact: {
      title: "Connect with Red Sea for Roads",
      sub: "We are ready to execute your road and infrastructure projects with utmost speed, quality, and professionalism.",
      callUs: "Direct Phone Call",
      whatsapp: "Instant WhatsApp Chat",
      email: "Official Email",
      address: "Headquarter Address",
      copyright: "All Rights Reserved © Red Sea for Roads & General Contracting Company",
    },
  },
};

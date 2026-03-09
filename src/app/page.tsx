"use client";

import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";

/* ─────────────────────── HEADER ─────────────────────── */
function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-8 py-5">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <svg width="36" height="32" viewBox="0 0 36 32" fill="none">
              <circle cx="12" cy="12" r="10" fill="#5BEBB5" />
              <circle cx="24" cy="12" r="10" fill="#3359EC" opacity="0.5" />
              <path d="M18 12 L18 28 Q18 32 14 28 L8 22" stroke="#3359EC" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          <span className="font-heading text-xl font-bold tracking-tight text-dark">
            TMSH Paris
          </span>
        </div>

        {/* Nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          <a href="#solution" className="font-heading text-xs font-semibold uppercase tracking-wide text-dark hover:text-primary">
            Solution
          </a>
          <a href="#clients" className="font-heading text-xs font-semibold uppercase tracking-wide text-dark underline decoration-dark underline-offset-4 hover:text-primary">
            Clients
          </a>
          <a href="#pricing" className="font-heading text-xs font-semibold uppercase tracking-wide text-dark hover:text-primary">
            Pricing
          </a>
          <a href="#ressources" className="font-heading text-xs font-semibold uppercase tracking-wide text-dark hover:text-primary">
            Ressources
          </a>
          <a href="#academy" className="font-heading text-xs font-semibold uppercase tracking-wide text-dark hover:text-primary">
            Academy
          </a>
        </nav>

        {/* Right side */}
        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-2 text-xs font-semibold">
            <span className="text-primary">FR</span>
            <span className="text-gray-400">EN</span>
          </div>
          <a
            href="#contact"
            className="rounded-sm border border-primary px-5 py-2 font-heading text-xs font-semibold text-primary transition hover:bg-primary hover:text-white"
          >
            Prendre rendez-vous
          </a>
          <a
            href="#"
            className="rounded-sm border border-dark px-5 py-2 font-heading text-xs font-semibold text-dark transition hover:bg-dark hover:text-white"
          >
            Se connecter
          </a>
        </div>
      </div>
    </header>
  );
}

/* ─────────────────────── HERO ─────────────────────── */
function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-white pb-8 pt-16">
      {/* Blobs */}
      <div className="absolute -left-48 bottom-0 h-[500px] w-[500px] rounded-full bg-gold/50" />
      <div className="absolute -right-40 top-10 h-[550px] w-[550px] rounded-full bg-teal/40" />

      <div className="relative mx-auto flex max-w-[1280px] items-center gap-8 px-8">
        {/* Left content */}
        <div className="flex-1 space-y-8 py-12">
          <h1 className="font-heading text-[3.2rem] font-semibold italic leading-[1.15] text-dark">
            Vous ne devriez plus rougir de vos contenus
          </h1>
          <p className="max-w-md font-body text-base leading-relaxed text-gray-600">
            TMSH Paris vous aide &agrave; concevoir et produire tous vos{" "}
            <strong className="font-bold text-dark">contenus digitaux</strong>{" "}
            pour atteindre vos objectifs strat&eacute;giques.
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="#contact"
              className="inline-flex w-fit items-center gap-8 border border-primary px-6 py-3 font-heading text-sm font-semibold text-dark transition hover:bg-primary hover:text-white"
            >
              Prendre rendez-vous
              <ArrowRight size={18} className="text-primary" />
            </a>
            <a
              href="#solution"
              className="inline-flex w-fit items-center gap-8 border border-primary px-6 py-3 font-heading text-sm font-semibold text-dark transition hover:bg-primary hover:text-white"
            >
              D&eacute;couvrir nos offres
              <ArrowRight size={18} className="text-primary" />
            </a>
          </div>
        </div>

        {/* Right illustration */}
        <div className="hidden flex-1 lg:block">
          <svg viewBox="0 0 520 420" className="w-full max-w-lg">
            <rect x="100" y="100" width="300" height="200" rx="8" fill="#EEF0FF" stroke="#3359EC" strokeWidth="2.5" />
            <rect x="118" y="118" width="264" height="155" rx="4" fill="white" stroke="#3359EC" strokeWidth="1.2" />
            <rect x="135" y="135" width="90" height="8" rx="2" fill="#3359EC" opacity="0.25" />
            <rect x="135" y="150" width="65" height="6" rx="2" fill="#3359EC" opacity="0.15" />
            <rect x="135" y="168" width="100" height="65" rx="4" fill="#5BEBB5" opacity="0.25" />
            <rect x="255" y="135" width="110" height="90" rx="4" fill="#F5C542" opacity="0.25" />
            <rect x="270" y="155" width="8" height="35" rx="2" fill="#5BEBB5" opacity="0.5" />
            <rect x="284" y="145" width="8" height="45" rx="2" fill="#3359EC" opacity="0.3" />
            <rect x="298" y="160" width="8" height="30" rx="2" fill="#F5C542" opacity="0.5" />
            <circle cx="360" cy="160" r="16" fill="#3359EC" opacity="0.12" />
            <polygon points="355,152 370,160 355,168" fill="#3359EC" opacity="0.35" />
            <path d="M75 300 L120 280 L380 280 L425 300 Z" fill="#EEF0FF" stroke="#3359EC" strokeWidth="1.2" />
            <rect x="390" y="190" width="75" height="130" rx="10" fill="white" stroke="#3359EC" strokeWidth="2.5" />
            <rect x="402" y="208" width="51" height="85" rx="3" fill="#EEF0FF" />
            <circle cx="427" cy="308" r="5" fill="#3359EC" opacity="0.25" />
            <circle cx="407" cy="230" r="8" fill="#5BEBB5" opacity="0.3" />
            <rect x="15" y="70" width="108" height="155" rx="8" fill="white" stroke="#3359EC" strokeWidth="2.5" />
            <rect x="28" y="88" width="82" height="110" rx="3" fill="#EEF0FF" />
            <rect x="38" y="100" width="62" height="6" rx="2" fill="#3359EC" opacity="0.2" />
            <rect x="38" y="112" width="45" height="6" rx="2" fill="#3359EC" opacity="0.15" />
            <rect x="38" y="130" width="62" height="40" rx="3" fill="#5BEBB5" opacity="0.15" />
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── CLIENT LOGOS ─────────────────────── */
function ClientLogos() {
  const logos = ["aircall", "orange", "LVMH", "PSG", "Giphar", "MACIF"];
  return (
    <section className="bg-white py-6">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="border-y border-primary/30 py-6">
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {logos.map((name) => (
              <span
                key={name}
                className="font-heading text-lg font-bold tracking-wide text-primary/60"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── TESTIMONIALS ─────────────────────── */
function Testimonials() {
  const items = [
    {
      quote: "Vous êtes vraiment toujours au rendez-vous en matière d'accompagnement, de planning et de performance.",
      company: "PRIMAGAZ",
      name: "Laetitia Aymard,",
      role: "Directrice Marketing",
      color: "bg-teal",
    },
    {
      quote: "Notre communauté éditoriale est en place et notre stratégie SEO porte ses fruits.",
      company: "MACIF",
      name: "Antoine Wintrebert,",
      role: "Responsable Marketing Digital",
      color: "bg-teal",
    },
    {
      quote: "On est très contents car on a gagné des places en SEO dans Google grâce à nos différents contenus.",
      company: "Giphar",
      name: "Caroline Sautereau du Part,",
      role: "Responsable Marketing Digital",
      color: "bg-teal",
    },
  ];

  return (
    <section className="bg-gray-bg py-24">
      <div className="mx-auto max-w-[1280px] px-8">
        <h2 className="mb-16 text-center font-heading text-[2.8rem] font-bold italic leading-tight text-dark">
          Comme vous, ils manquaient de temps,
          <br />
          de ressources, d&apos;inspiration et de r&eacute;sultats
          <br />
          concrets
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {items.map((t, i) => (
            <div key={i} className="space-y-5">
              {/* Video thumbnail */}
              <div className={`relative flex h-52 items-center justify-center rounded-md ${t.color}`}>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-sm">
                  <Play size={18} className="ml-0.5 text-primary" fill="#3359EC" />
                </div>
              </div>
              {/* Quote */}
              <div className="flex gap-2">
                <span className="font-heading text-2xl leading-none text-primary">&ldquo;&ldquo;</span>
                <p className="font-body text-sm leading-relaxed text-gray-600">{t.quote}</p>
              </div>
              {/* Divider */}
              <hr className="border-primary/20" />
              {/* Company */}
              <p className="font-heading text-lg font-bold text-dark">{t.company}</p>
              {/* Person */}
              <div>
                <p className="font-heading text-sm font-bold text-dark">{t.name}</p>
                <p className="font-heading text-sm font-bold text-dark">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-6 border border-primary px-7 py-3.5 font-heading text-sm font-semibold text-dark transition hover:bg-primary hover:text-white"
          >
            Voir toutes nos Love Stories
            <ArrowRight size={18} className="text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── CONTENT MARKETING ─────────────────────── */
function ContentMarketing() {
  const services = [
    { title: "Stratégie", items: ["Analyse & Audit", "Audience & Personas", "Stratégie éditoriale"] },
    { title: "Production", items: ["Définition des sujets", "Workflow de production", "Création de contenus"] },
    { title: "Activation", items: ["Social Media", "Paid ads", "Emailing"] },
    { title: "Optimisation", items: ["SEO", "Comités Éditoriaux", "Analyse, ajustements"] },
  ];
  const barColors = ["bg-[#2B3FD4]", "bg-teal", "bg-gold", "bg-pink"];

  return (
    <section id="solution" className="bg-white py-24">
      <div className="mx-auto max-w-[1280px] px-8">
        <h2 className="mb-16 text-center font-heading text-[2.8rem] font-semibold italic leading-tight text-dark">
          Atteignez vos objectifs strat&eacute;giques
          <br />
          avec notre <span className="not-italic text-primary underline decoration-primary underline-offset-4">solution</span> compl&egrave;te
          <br />
          de <span className="not-italic text-primary underline decoration-primary underline-offset-4">Content Marketing</span>
        </h2>

        <div className="rounded-2xl bg-gray-bg px-10 py-14">
          <h3 className="mb-12 text-center font-heading text-2xl font-bold italic text-dark">
            Nous couvrons tous vos besoins
          </h3>
          <div className="mb-12 grid gap-8 text-center md:grid-cols-4">
            {services.map((s) => (
              <div key={s.title}>
                <h4 className="mb-4 font-heading text-lg font-bold italic text-dark">{s.title}</h4>
                {s.items.map((item) => (
                  <p key={item} className="font-body text-sm text-gray-500">{item}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative mx-auto max-w-3xl">
            <div className="flex items-center">
              {barColors.map((c, i) => (
                <div key={i} className="relative flex-1">
                  {/* Number badge */}
                  <div className="absolute -top-10 left-0 z-10 flex h-7 w-7 items-center justify-center rounded border-2 border-primary bg-white font-heading text-xs font-bold text-primary">
                    {i + 1}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 flex h-5 overflow-hidden rounded-full border-2 border-primary/25">
              {barColors.map((c, i) => (
                <div key={i} className={`flex-1 ${c}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── TEAM ─────────────────────── */
function TeamSection() {
  const stats = [
    {
      number: "20",
      highlight: "Content Strategists",
      rest: "dédiés à vos projets",
      desc: "Un interlocuteur dédié à votre société pour vous accompagner tout au long de votre projet.",
      color: "bg-gold",
    },
    {
      number: "5 000",
      highlight: "Talents",
      rest: "internationaux éditoriaux et créatifs",
      desc: "Une sélection de talents et experts parmi lesquels nous trouverons vos pépites créatives.",
      color: "bg-[#3359EC]",
    },
    {
      number: "1",
      highlight: "Plateforme",
      rest: "de gestion éditoriale",
      desc: "Un outil pour piloter vos équipes et suivre la production de vos contenus éditoriaux et créatifs.",
      color: "bg-teal",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1280px] px-8">
        <h2 className="mb-16 text-center font-heading text-[2.4rem] font-bold italic leading-tight text-dark">
          Plus qu&apos;une agence, nous sommes
          <br />
          l&apos;extension de vos &eacute;quipes
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.number} className="space-y-5">
              <div className={`relative flex h-56 items-center justify-center rounded-md ${s.color}`}>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-sm">
                  <Play size={18} className="ml-0.5 text-gray-700" fill="#555" />
                </div>
              </div>
              <p className="number-outline text-6xl font-extrabold">{s.number}</p>
              <h3 className="font-heading text-lg font-bold leading-snug text-dark">
                <span className="text-primary underline decoration-primary underline-offset-4">{s.highlight}</span>{" "}
                {s.rest}
              </h3>
              <p className="font-body text-sm leading-relaxed text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-6 border border-primary px-7 py-3.5 font-heading text-sm font-semibold text-dark transition hover:bg-primary hover:text-white"
          >
            Voir la solution compl&egrave;te
            <ArrowRight size={18} className="text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── CONTENT TYPES ─────────────────────── */
function ContentTypes() {
  const types = ["Emailing", "Illustration", "Infographie", "Interview", "Motion design", "Photo"];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          {/* Illustration */}
          <div className="relative flex-1">
            <svg viewBox="0 0 420 370" className="mx-auto w-full max-w-md">
              <circle cx="220" cy="190" r="140" fill="#5BEBB5" opacity="0.18" />
              <circle cx="140" cy="240" r="90" fill="#F5C542" opacity="0.18" />
              <rect x="130" y="90" width="190" height="155" rx="10" fill="white" stroke="#3359EC" strokeWidth="2.5" />
              <path d="M130 90 L225 45 L320 90" fill="none" stroke="#3359EC" strokeWidth="2.5" />
              <path d="M130 90 L175 65" fill="none" stroke="#3359EC" strokeWidth="2.5" />
              <path d="M320 90 L275 65" fill="none" stroke="#3359EC" strokeWidth="2.5" />
              <rect x="158" y="115" width="45" height="55" rx="4" fill="#3359EC" opacity="0.18" />
              <rect x="212" y="105" width="40" height="65" rx="4" fill="#5BEBB5" opacity="0.25" />
              <rect x="260" y="120" width="35" height="50" rx="4" fill="#F5C542" opacity="0.25" />
              <rect x="55" y="210" width="60" height="50" rx="6" fill="white" stroke="#3359EC" strokeWidth="2" />
              <rect x="325" y="235" width="55" height="45" rx="22" fill="white" stroke="#3359EC" strokeWidth="2" />
            </svg>
          </div>
          {/* Text */}
          <div className="flex-1 space-y-5">
            <h2 className="font-heading text-[2.8rem] font-extrabold leading-tight text-dark">
              Nous aimons
              <br />
              tous les contenus
            </h2>
            <p className="font-body text-base leading-relaxed text-gray-600">
              Nous vous aidons &agrave; produire{" "}
              <span className="underline decoration-dark underline-offset-4">tous vos contenus digitaux</span>,
              quel que soit le format (&eacute;dito, audio et vid&eacute;o).
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16 border-y border-primary/25 py-5">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {types.map((t, i) => (
              <div key={i} className="flex items-center gap-2 border-r border-primary/20 pr-6 last:border-0">
                <span className="font-heading text-sm font-semibold text-primary">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── PRIORITIES ─────────────────────── */
function Priorities() {
  const items = [
    {
      title: "Fiabilité",
      points: ["Sélection des meilleurs experts", "Renouvellement sous 48h", "Réponse sous 24h"],
    },
    {
      title: "Amélioration",
      points: ["Partage de notre veille", "Formation de vos équipes", "Mesure de votre satisfaction"],
    },
    {
      title: "Confidentialité",
      points: ["Confidentialité des échanges", "Contenus libres de droit", "Maîtrise des contraintes légales"],
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1280px] px-8">
        <h2 className="mb-16 text-center font-heading text-[2.4rem] font-bold italic leading-tight text-dark">
          Votre succ&egrave;s
          <br />
          est notre priorit&eacute;
        </h2>
        <div className="grid gap-12 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="space-y-5">
              {/* Icon placeholder */}
              <div className="h-16 w-16">
                <svg viewBox="0 0 64 64" className="h-full w-full">
                  <circle cx="32" cy="32" r="28" fill="#F5C542" opacity="0.2" />
                  <circle cx="32" cy="32" r="20" fill="white" stroke="#3359EC" strokeWidth="2" />
                  <circle cx="32" cy="32" r="8" fill="#3359EC" opacity="0.15" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold italic text-dark">{item.title}</h3>
              <ul className="space-y-2.5">
                {item.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 font-body text-sm text-gray-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-dark" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── CASE STUDY ─────────────────────── */
function CaseStudy() {
  return (
    <section id="clients" className="bg-white py-24">
      <div className="mx-auto max-w-[1280px] px-8">
        <h2 className="mb-16 text-center font-heading text-[2.4rem] font-bold italic leading-tight text-dark">
          Nous sommes fiers
          <br />
          de leurs contenus
        </h2>

        <div className="relative mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-lg border-2 border-primary">
            <div className="flex flex-col md:flex-row">
              {/* Left + Center */}
              <div className="flex flex-1 flex-col gap-6 p-8 md:flex-row md:p-10">
                {/* Stats */}
                <div className="space-y-3">
                  <div className="font-heading text-sm font-bold text-primary/60">Giphar</div>
                  <p className="number-outline text-5xl font-extrabold">#1</p>
                  <p className="font-heading text-sm font-semibold leading-snug text-primary">
                    position sur
                    <br />
                    Google
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 font-heading text-xs font-semibold text-primary">
                    Lire la story <ArrowRight size={14} />
                  </a>
                </div>
                {/* Quote */}
                <div className="flex-1 space-y-4">
                  <div className="flex gap-2">
                    <span className="font-heading text-2xl leading-none text-primary">&ldquo;&ldquo;</span>
                    <p className="font-body text-sm leading-relaxed text-gray-600">
                      Je cherchais un partenaire qui puisse m&apos;aider &agrave;
                      produire diff&eacute;rents contenus avec une forte
                      sensibilit&eacute; SEO
                    </p>
                  </div>
                  <div>
                    <p className="font-heading text-sm font-bold text-dark">
                      Caroline Sautereau du Part,
                    </p>
                    <p className="font-heading text-sm font-bold text-dark">
                      Responsable Marketing Digital et E-sant&eacute;, Giphar
                    </p>
                  </div>
                </div>
              </div>
              {/* Photo */}
              <div className="hidden w-72 bg-teal md:block" />
            </div>
          </div>

          {/* Arrows */}
          <button className="absolute -left-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary">
            <ChevronLeft size={32} />
          </button>
          <button className="absolute -right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary">
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className={`h-2 w-2 rounded-full ${i === 0 ? "bg-primary" : "border border-gray-300"}`} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-6 border border-primary px-7 py-3.5 font-heading text-sm font-semibold text-dark transition hover:bg-primary hover:text-white"
          >
            Voir tous nos clients
            <ArrowRight size={18} className="text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── ACADEMY ─────────────────────── */
function Academy() {
  const cards = [
    { title: "Lire nos articles de blog" },
    { title: "Découvrir nos guides" },
    { title: "Passer la certification" },
    { title: "Choisir votre programme" },
  ];

  return (
    <section id="academy" className="bg-white py-24">
      <div className="mx-auto max-w-[1280px] px-8">
        <h2 className="mb-6 text-center font-heading text-[2.4rem] font-bold italic leading-tight text-dark">
          Formez-vous gratuitement et faites monter
          <br />
          vos &eacute;quipes en comp&eacute;tence
        </h2>
        <p className="mb-14 text-center font-body text-base text-gray-600">
          Devenez vous aussi expert du{" "}
          <span className="underline decoration-dark underline-offset-4">Marketing de Contenu</span>{" "}
          gr&acirc;ce &agrave; notre Academy.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col justify-between rounded-lg border-2 border-primary/30 p-6 transition hover:border-primary"
            >
              {/* Icon placeholder */}
              <div className="mb-6">
                <div className="h-16 w-16">
                  <svg viewBox="0 0 64 64" className="h-full w-full">
                    <rect x="8" y="16" width="48" height="36" rx="6" fill="#EEF0FF" stroke="#3359EC" strokeWidth="1.5" />
                    <rect x="16" y="24" width="32" height="4" rx="2" fill="#5BEBB5" opacity="0.4" />
                    <rect x="16" y="32" width="24" height="4" rx="2" fill="#3359EC" opacity="0.2" />
                    <rect x="16" y="40" width="28" height="4" rx="2" fill="#F5C542" opacity="0.3" />
                  </svg>
                </div>
              </div>
              <hr className="mb-4 border-primary/20" />
              <h3 className="mb-6 font-heading text-base font-bold text-dark">{card.title}</h3>
              <ArrowRight size={18} className="text-primary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── CONTACT ─────────────────────── */
function ContactForm() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-lg border-2 border-primary">
          <div className="flex flex-col md:flex-row">
            {/* Left - title */}
            <div className="flex flex-col justify-center p-8 md:w-64 md:p-10">
              <h2 className="font-heading text-2xl font-bold italic text-primary">
                Un projet ?
              </h2>
              <h2 className="font-heading text-2xl font-bold text-dark">
                On vous
                <br />
                rappelle !
              </h2>
            </div>
            {/* Center - form */}
            <div className="flex-1 p-8 md:py-10">
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Email professionnel*"
                  className="w-full border-b border-gray-300 bg-transparent px-1 py-2.5 font-body text-sm outline-none placeholder:text-gray-400 focus:border-primary"
                />
                <input
                  type="tel"
                  placeholder="Numéro de téléphone*"
                  className="w-full border-b border-gray-300 bg-transparent px-1 py-2.5 font-body text-sm outline-none placeholder:text-gray-400 focus:border-primary"
                />
                <select className="w-full border-b border-gray-300 bg-transparent px-1 py-2.5 font-body text-sm text-gray-400 outline-none focus:border-primary">
                  <option>Budget annuel en production de contenus*</option>
                </select>
                <select className="w-full border-b border-gray-300 bg-transparent px-1 py-2.5 font-body text-sm text-gray-400 outline-none focus:border-primary">
                  <option>Votre demande*</option>
                </select>
                <textarea
                  placeholder="Description rapide de votre projet*"
                  rows={3}
                  className="w-full resize-y border-b border-gray-300 bg-transparent px-1 py-2.5 font-body text-sm outline-none placeholder:text-gray-400 focus:border-primary"
                />
                <button
                  type="submit"
                  className="mt-2 border-b-2 border-primary px-6 py-2.5 font-heading text-sm font-bold text-dark transition hover:text-primary"
                >
                  Envoyer
                </button>
              </form>
            </div>
            {/* Right - photo placeholder */}
            <div className="hidden w-72 bg-teal md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── FOOTER ─────────────────────── */
function Footer() {
  const col1 = ["Solution", "Clients", "Pricing", "Blog", "Content Marketing", "Brand Content", "We Love You !", "Formation"];
  const col2 = ["Presse", "À Propos", "Partenaires", "Charte de confidentialité", "CGU freelances", "Mentions Légales", "Politique de Confidentialité", "Politique de Cookies"];

  return (
    <footer className="bg-white py-20">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-8 md:grid-cols-4">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <svg width="28" height="24" viewBox="0 0 36 32" fill="none">
              <circle cx="12" cy="12" r="10" fill="#5BEBB5" />
              <circle cx="24" cy="12" r="10" fill="#3359EC" opacity="0.5" />
              <path d="M18 12 L18 28 Q18 32 14 28 L8 22" stroke="#3359EC" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
            <span className="font-heading text-base font-bold text-dark">TMSH Paris</span>
          </div>
          <p className="font-body text-sm leading-relaxed text-gray-500">
            TMSH Paris, agence leader du Content Marketing.
          </p>
          <p className="font-body text-xs text-gray-400">
            &copy; TMSH Paris, 2024
            <br />
            All Rights Reserved
          </p>
          <div className="flex gap-4 text-sm text-gray-400">
            <span className="cursor-pointer hover:text-primary">𝕏</span>
            <span className="cursor-pointer hover:text-primary">f</span>
            <span className="cursor-pointer hover:text-primary">◎</span>
            <span className="cursor-pointer hover:text-primary">in</span>
          </div>
        </div>

        {/* Col 1 */}
        <nav className="space-y-2.5">
          {col1.map((link) => (
            <a key={link} href="#" className="block font-body text-sm text-gray-600 hover:text-primary">
              {link}
            </a>
          ))}
        </nav>

        {/* Col 2 */}
        <nav className="space-y-2.5">
          {col2.map((link) => (
            <a key={link} href="#" className="block font-body text-sm text-gray-600 hover:text-primary">
              {link}
            </a>
          ))}
        </nav>

        {/* Newsletter */}
        <div className="space-y-4">
          <h4 className="font-heading text-sm font-bold leading-snug text-dark">
            Recevez
            <br />
            notre newsletter
          </h4>
          <input
            type="email"
            placeholder="Email professionnel*"
            className="w-full border-b border-gray-300 bg-transparent px-1 py-2 font-body text-sm outline-none placeholder:text-gray-400 focus:border-primary"
          />
          <button className="border-b-2 border-primary px-4 py-2 font-heading text-sm font-bold text-dark transition hover:text-primary">
            S&apos;inscrire
          </button>
          <div className="mt-4 space-y-1">
            <p className="font-heading text-sm font-bold text-primary">Qualiopi</p>
            <p className="font-body text-xs text-gray-500">processus certifi&eacute;</p>
            <p className="font-body text-[10px] text-gray-400">
              🇫🇷 R&Eacute;PUBLIQUE FRAN&Ccedil;AISE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────── PAGE ─────────────────────── */
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ClientLogos />
      <Testimonials />
      <ContentMarketing />
      <TeamSection />
      <ContentTypes />
      <Priorities />
      <CaseStudy />
      <Academy />
      <ContactForm />
      <Footer />
    </>
  );
}

"use client";

import { useState } from "react";
import {
  ArrowRight,
  Play,
  ChevronLeft,
  ChevronRight,
  Monitor,
  Smartphone,
  Film,
  FileText,
  BookOpen,
  Book,
  Mail,
  CheckCircle,
} from "lucide-react";

/* ─── HEADER ─── */
function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold tracking-tight">
          TMSH
          <span className="block text-[10px] font-normal tracking-[0.3em] text-gray-500">
            PARIS
          </span>
        </div>
        <nav className="hidden gap-8 text-sm font-medium text-gray-700 md:flex">
          <a href="#accueil" className="hover:text-primary">Accueil</a>
          <a href="#realisations" className="hover:text-primary">Réalisation</a>
          <a href="#clients" className="hover:text-primary">Clients</a>
          <a href="#pricing" className="hover:text-primary">Pricing</a>
        </nav>
        <a
          href="#contact"
          className="hidden rounded-md border border-primary px-5 py-2 text-sm font-medium text-primary transition hover:bg-primary hover:text-white md:inline-block"
        >
          Prendre rendez-vous
        </a>
      </div>
    </header>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-white py-20">
      {/* Decorative blobs */}
      <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-gold/60" />
      <div className="absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full bg-teal/50" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            L&apos;Agence de Communication
            <br />
            avec 21 ann&eacute;es d&apos;exp&eacute;rience
          </h1>
          <p className="max-w-md text-lg text-gray-600">
            Nous vous aidons &agrave; concevoir et produire tous vos{" "}
            <strong className="text-gray-900">contenus digitaux</strong> pour
            atteindre vos objectifs strat&eacute;giques.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-primary px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary hover:text-white"
            >
              Prendre rendez-vous <ArrowRight size={16} />
            </a>
            <a
              href="#solution"
              className="inline-flex items-center gap-2 rounded-md border border-primary px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary hover:text-white"
            >
              D&eacute;couvrir nos offres <ArrowRight size={16} />
            </a>
          </div>
        </div>
        <div className="relative flex-1">
          {/* Isometric illustration placeholder */}
          <div className="relative mx-auto w-full max-w-lg">
            <svg viewBox="0 0 500 400" className="w-full">
              {/* Laptop */}
              <rect x="100" y="120" width="280" height="180" rx="8" fill="#EEF0FF" stroke="#3B4CCA" strokeWidth="2" />
              <rect x="115" y="135" width="250" height="140" rx="4" fill="white" stroke="#3B4CCA" strokeWidth="1" />
              {/* Screen content */}
              <rect x="130" y="150" width="80" height="8" rx="2" fill="#3B4CCA" opacity="0.3" />
              <rect x="130" y="165" width="60" height="6" rx="2" fill="#3B4CCA" opacity="0.2" />
              <rect x="130" y="178" width="100" height="60" rx="4" fill="#5BEBB5" opacity="0.3" />
              <rect x="250" y="150" width="100" height="80" rx="4" fill="#F5C542" opacity="0.3" />
              {/* Keyboard base */}
              <path d="M80 300 L120 280 L380 280 L420 300 Z" fill="#EEF0FF" stroke="#3B4CCA" strokeWidth="1" />
              {/* Floating phone */}
              <rect x="380" y="200" width="70" height="120" rx="8" fill="white" stroke="#3B4CCA" strokeWidth="2" />
              <rect x="390" y="215" width="50" height="80" rx="2" fill="#EEF0FF" />
              <circle cx="415" cy="310" r="5" fill="#3B4CCA" opacity="0.3" />
              {/* Floating tablet */}
              <rect x="20" y="80" width="100" height="140" rx="6" fill="white" stroke="#3B4CCA" strokeWidth="2" />
              <rect x="30" y="95" width="80" height="100" rx="2" fill="#EEF0FF" />
              {/* Play button icon */}
              <circle cx="350" cy="170" r="15" fill="#3B4CCA" opacity="0.15" />
              <polygon points="345,162 360,170 345,178" fill="#3B4CCA" opacity="0.4" />
              {/* Chart icon */}
              <rect x="270" y="170" width="8" height="30" rx="2" fill="#5BEBB5" opacity="0.5" />
              <rect x="282" y="160" width="8" height="40" rx="2" fill="#3B4CCA" opacity="0.3" />
              <rect x="294" y="175" width="8" height="25" rx="2" fill="#F5C542" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CLIENT LOGOS ─── */
function ClientLogos() {
  const logos = ["VINCI", "Apple", "aircall", "orange", "LVMH", "PSG"];
  return (
    <section className="border-y border-gray-200 bg-white py-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-6 md:gap-12">
        {logos.map((name) => (
          <div
            key={name}
            className="flex items-center justify-center text-xl font-bold text-primary/70"
          >
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS VIDEO ─── */
function TestimonialsVideo() {
  const testimonials = [
    { brand: "Dior", quote: "Vous êtes vraiment toujours au rendez-vous en matière d'accompagnement, de planning et de performance." },
    { brand: "Melanie Dram", quote: "Vous êtes vraiment toujours au rendez-vous en matière d'accompagnement, de planning et de performance." },
    { brand: "LACOSTE", quote: "Vous êtes vraiment toujours au rendez-vous en matière d'accompagnement, de planning et de performance." },
  ];
  return (
    <section id="realisations" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-14 text-center text-3xl font-extrabold text-gray-900 md:text-4xl">
          Comme vous, ils manquaient de temps,
          <br />
          de ressources, d&apos;inspiration et de
          <br />
          r&eacute;sultats concrets
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="space-y-4">
              <div className="relative flex h-48 items-center justify-center rounded-lg bg-teal">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80">
                  <Play size={18} className="text-primary" />
                </div>
              </div>
              <div className="space-y-3">
                <p className="flex gap-2 text-sm text-gray-600">
                  <span className="text-xl leading-none text-primary">&ldquo;&ldquo;</span>
                  {t.quote}
                </p>
                <hr className="border-gray-300" />
                <p className="text-lg font-bold italic text-gray-800">
                  {t.brand}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md border border-primary px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary hover:text-white"
          >
            Voir toutes nos Love Stories <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── CONTENT MARKETING / SERVICES ─── */
function ContentMarketing() {
  const services = [
    {
      title: "Stratégie",
      items: ["Analyse & Audit", "Audience & Personas", "Stratégie éditoriale"],
    },
    {
      title: "Production",
      items: ["Définition des sujets", "Workflow de production", "Création de contenus"],
    },
    {
      title: "Activation",
      items: ["Social Media", "Paid ads", "Emailing"],
    },
    {
      title: "Optimisation",
      items: ["SEO", "Comités Éditoriaux", "Analyse, ajustements"],
    },
  ];
  const colors = ["bg-blue-deep", "bg-teal", "bg-gold", "bg-pink"];

  return (
    <section id="solution" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-16 text-center text-3xl font-extrabold text-gray-900 md:text-4xl">
          Atteignez vos objectifs strat&eacute;giques
          <br />
          avec notre{" "}
          <span className="text-primary">solution</span> compl&egrave;te
          <br />
          de <span className="text-primary">Content Marketing</span>
        </h2>

        <div className="rounded-2xl bg-gray-50 px-8 py-12">
          <h3 className="mb-10 text-center text-2xl font-bold text-gray-900">
            Nous couvrons tous vos besoins
          </h3>

          <div className="mb-10 grid gap-8 text-center md:grid-cols-4">
            {services.map((s) => (
              <div key={s.title}>
                <h4 className="mb-3 text-lg font-bold text-gray-900">
                  {s.title}
                </h4>
                {s.items.map((item) => (
                  <p key={item} className="text-sm text-gray-500">
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Timeline bar */}
          <div className="relative mx-auto flex h-6 max-w-3xl items-center overflow-hidden rounded-full border-2 border-primary/30">
            {colors.map((c, i) => (
              <div key={i} className={`relative flex-1 ${c} h-full`}>
                <span className="absolute -top-8 left-0 flex h-7 w-7 items-center justify-center rounded-md border-2 border-primary bg-white text-xs font-bold text-primary">
                  {i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── TEAM / EXTENSION ─── */
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
      color: "bg-blue-deep",
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
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-14 text-center text-2xl font-extrabold text-gray-900 md:text-3xl">
          Plus qu&apos;une agence, nous sommes
          <br />
          l&apos;extension de vos &eacute;quipes
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.number} className="space-y-4">
              <div
                className={`relative flex h-48 items-center justify-center rounded-lg ${s.color}`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80">
                  <Play size={18} className="text-gray-700" />
                </div>
              </div>
              <p className="text-5xl font-extrabold text-primary/20">
                {s.number}
              </p>
              <h3 className="text-lg font-bold text-gray-900">
                <span className="text-primary underline">{s.highlight}</span>{" "}
                {s.rest}
              </h3>
              <p className="text-sm text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md border border-primary px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary hover:text-white"
          >
            Voir la solution compl&egrave;te <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── CONTENT TYPES ─── */
function ContentTypes() {
  const types = [
    { icon: <Monitor size={20} />, label: "Présentation" },
    { icon: <Smartphone size={20} />, label: "Social content" },
    { icon: <Film size={20} />, label: "Vidéo" },
    { icon: <FileText size={20} />, label: "Article SEO" },
    { icon: <BookOpen size={20} />, label: "Brochure" },
    { icon: <Book size={20} />, label: "Ebook" },
    { icon: <Mail size={20} />, label: "" },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Illustration placeholder */}
          <div className="relative flex-1">
            <div className="relative mx-auto w-full max-w-md">
              <svg viewBox="0 0 400 350" className="w-full">
                {/* Background blobs */}
                <circle cx="200" cy="180" r="130" fill="#5BEBB5" opacity="0.2" />
                <circle cx="140" cy="220" r="80" fill="#F5C542" opacity="0.2" />
                {/* Open box */}
                <rect x="120" y="100" width="180" height="140" rx="8" fill="white" stroke="#3B4CCA" strokeWidth="2" />
                {/* Box flaps */}
                <path d="M120 100 L210 60 L300 100" fill="none" stroke="#3B4CCA" strokeWidth="2" />
                <path d="M120 100 L160 75" fill="none" stroke="#3B4CCA" strokeWidth="2" />
                <path d="M300 100 L260 75" fill="none" stroke="#3B4CCA" strokeWidth="2" />
                {/* Items inside box */}
                <rect x="150" y="120" width="40" height="50" rx="4" fill="#3B4CCA" opacity="0.2" />
                <rect x="200" y="110" width="35" height="60" rx="4" fill="#5BEBB5" opacity="0.3" />
                <rect x="245" y="125" width="30" height="45" rx="4" fill="#F5C542" opacity="0.3" />
                {/* Small floating items */}
                <rect x="60" y="200" width="50" height="40" rx="4" fill="white" stroke="#3B4CCA" strokeWidth="1.5" />
                <rect x="310" y="220" width="45" height="35" rx="20" fill="white" stroke="#3B4CCA" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
              Nous aimons
              <br />
              tous les contenus
            </h2>
            <p className="text-gray-600">
              Nous vous aidons &agrave; produire tous vos contenus digitaux,
              quel que soit le format (&eacute;dito, audio et vid&eacute;o).
            </p>
          </div>
        </div>

        {/* Content type tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 border-y border-gray-200 py-6">
          {types.map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-2 border-r border-gray-200 pr-4 text-sm text-primary last:border-0"
            >
              {t.icon}
              {t.label && <span>{t.label}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PRIORITIES ─── */
function Priorities() {
  const items = [
    {
      title: "Fiabilité",
      points: ["Sélection des meilleurs experts", "Renouvellement sous 48h", "Réponse sous 24h"],
      emoji: "⏱",
    },
    {
      title: "Amélioration",
      points: ["Partage de notre veille", "Formation de vos équipes", "Mesure de votre satisfaction"],
      emoji: "📦",
    },
    {
      title: "Confidentialité",
      points: ["Confidentialité des échanges", "Contenus libres de droit", "Maîtrise des contraintes légales"],
      emoji: "🔒",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-14 text-center text-2xl font-extrabold text-gray-900 md:text-3xl">
          Votre succ&egrave;s
          <br />
          est notre priorit&eacute;
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="space-y-4">
              <div className="text-4xl">{item.emoji}</div>
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              <ul className="space-y-2">
                {item.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="mt-0.5 shrink-0 text-primary" />
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

/* ─── CASE STUDY CAROUSEL ─── */
function CaseStudy() {
  return (
    <section id="clients" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-14 text-center text-2xl font-extrabold text-gray-900 md:text-3xl">
          Nous sommes fiers
          <br />
          de leurs contenus
        </h2>
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl border border-primary p-8">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            {/* Left */}
            <div className="flex-1 space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-xs font-bold text-primary">
                MACIF
              </div>
              <p className="text-5xl font-extrabold text-primary/20">100</p>
              <p className="text-sm font-semibold text-primary">
                contenus produits par an
              </p>
            </div>
            {/* Center */}
            <div className="flex-1 space-y-4">
              <p className="text-sm text-gray-600">
                <span className="mr-1 text-lg text-primary">&ldquo;&ldquo;</span>
                Je cherchais un partenaire qui puisse m&apos;aider &agrave;
                produire diff&eacute;rents contenus avec une forte
                sensibilit&eacute; SEO
              </p>
              <p className="text-sm font-bold text-gray-900">
                Antoine Wintrebert,
                <br />
                Responsable Marketing Digital, MACIF
              </p>
            </div>
            {/* Right - photo placeholder */}
            <div className="flex h-56 w-44 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-400">
              Photo
            </div>
          </div>

          {/* Navigation arrows */}
          <button className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary">
            <ChevronLeft size={28} />
          </button>
          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary">
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-2.5 w-2.5 rounded-full ${i === 0 ? "bg-primary" : "border border-gray-300"}`}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md border border-primary px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary hover:text-white"
          >
            Voir tous nos avis clients <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT FORM ─── */
function ContactForm() {
  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-xl border border-primary">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-1 flex-col justify-center gap-6 p-8 md:p-12">
              <div>
                <h2 className="text-2xl font-bold text-primary">
                  Un projet ?
                </h2>
                <h2 className="text-2xl font-bold text-gray-900">
                  On vous rappelle !
                </h2>
              </div>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Email professionnel*"
                  className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-primary"
                />
                <input
                  type="tel"
                  placeholder="Numéro de téléphone*"
                  className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-primary"
                />
                <input
                  type="text"
                  placeholder="Budget annuel*"
                  className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-primary"
                />
                <input
                  type="text"
                  placeholder="Votre demande*"
                  className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-primary"
                />
                <textarea
                  placeholder="Description rapide de votre projet*"
                  rows={4}
                  className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="rounded border border-gray-900 px-8 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white"
                >
                  Envoyer
                </button>
              </form>
            </div>
            {/* Image placeholder */}
            <div className="hidden w-72 bg-teal md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  const col1 = ["Pourquoi TMSH", "Solution", "Clients", "Pricing", "Blog", "Content Marketing", "Brand Content", "We Love You !"];
  const col2 = ["Hollywords", "À Propos", "Partenaires", "Charte de confidentialité", "CGU freelances", "Mentions Légales", "Politique de Confidentialité", "Politique de Cookies"];

  return (
    <footer className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">
        {/* Brand */}
        <div className="space-y-4">
          <div className="text-2xl font-bold tracking-tight">
            TMSH
            <span className="block text-[10px] font-normal tracking-[0.3em] text-gray-500">
              PARIS
            </span>
          </div>
          <p className="text-sm text-gray-500">
            TMSH Paris, l&apos;Agence de Communication avec 21
            ann&eacute;es d&apos;exp&eacute;rience.
          </p>
          <p className="text-xs text-gray-400">
            &copy; TMSH Paris, 2024
            <br />
            All Rights Reserved
          </p>
          <div className="flex gap-3 text-gray-400">
            <span className="cursor-pointer hover:text-primary">𝕏</span>
            <span className="cursor-pointer hover:text-primary">f</span>
            <span className="cursor-pointer hover:text-primary">◎</span>
            <span className="cursor-pointer hover:text-primary">in</span>
          </div>
        </div>

        {/* Links col 1 */}
        <nav className="space-y-2">
          {col1.map((link) => (
            <a
              key={link}
              href="#"
              className="block text-sm text-gray-600 hover:text-primary"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Links col 2 */}
        <nav className="space-y-2">
          {col2.map((link) => (
            <a
              key={link}
              href="#"
              className="block text-sm text-gray-600 hover:text-primary"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Newsletter */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-gray-900">
            Recevez
            <br />
            notre newsletter
          </h4>
          <input
            type="email"
            placeholder="Email professionnel*"
            className="w-full rounded border border-gray-300 px-4 py-2 text-sm outline-none focus:border-primary"
          />
          <button className="rounded border border-gray-900 px-6 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white">
            S&apos;inscrire
          </button>
          <div className="mt-2 text-xs text-gray-400">
            <p className="font-bold text-primary">Qualiopi</p>
            <p>processus certifié</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ClientLogos />
      <TestimonialsVideo />
      <ContentMarketing />
      <TeamSection />
      <ContentTypes />
      <Priorities />
      <CaseStudy />
      <ContactForm />
      <Footer />
    </>
  );
}

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  ShieldCheck,
  Target,
  Lightbulb,
  CheckCircle2,
  MapPin,
  Quote,
  Gauge,
  Radio,
  Cable,
  Activity,
} from 'lucide-react'

import {
  company,
  stats,
  reasons,
  locations,
  reviews,
} from '../data/data'

import PageHero from '../components/PageHero'

/* =========================================================
   ANIMATION
   One deliberate reveal per section — not a fade-up on
   every child element.
========================================================= */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
}

/* =========================================================
   DATA HELPERS
========================================================= */

function getStat(stat) {
  if (typeof stat === 'object' && !Array.isArray(stat)) {
    return { value: stat.value, suffix: stat.suffix || '', label: stat.label }
  }
  return { value: stat[0], suffix: '', label: stat[1] }
}

function getReason(reason) {
  if (typeof reason === 'object' && !Array.isArray(reason)) {
    return { title: reason.title, description: reason.description }
  }
  return { title: reason[0], description: reason[1] }
}

function getReview(review) {
  if (typeof review === 'object' && !Array.isArray(review)) {
    return {
      name: review.name || review.author || review.client || 'Client',
      role: review.role || review.designation || '',
      company: review.company || '',
      text: review.text || review.review || review.quote || '',
    }
  }
  if (Array.isArray(review)) {
    return {
      name: review[0] || 'Client',
      role: review[1] || '',
      company: review[2] || '',
      text: review[3] || '',
    }
  }
  return { name: 'Client', role: '', company: '', text: String(review) }
}

/* =========================================================
   CONTENT
   Grounded in the real company profile: founded 2005,
   power system protection provider, Mumbai HQ, equipment
   list, 200+ industrial clients, single founder — Mukund.
========================================================= */

const milestones = [
  {
    year: '2005',
    title: 'Founded in Mumbai',
    description: 'Electro Mech Engineers is established to provide power system protection services to industrial plants and utilities.',
  },
  {
    year: '2010',
    title: 'Fleet of testing equipment expands',
    description: 'Investment in fully automatic relay test kits, primary injection kits and calibration equipment to serve larger substations.',
  },
  {
    year: '2015',
    title: 'Reach extends across India',
    description: 'Engineering teams begin regular deployment to sites nationwide, beyond the Mumbai base.',
  },
  {
    year: 'Today',
    title: '200+ industrial clients served',
    description: 'Serving power, sugar, process, oil & gas, cement, government and fertilizer sectors with testing, commissioning and consultancy.',
  },
]

const equipment = [
  {
    icon: Gauge,
    title: 'Fully automatic relay test kits',
    description: 'Computerised universal test sets for electromechanical, static and numerical protection relays.',
  },
  {
    icon: Cable,
    title: 'Primary injection kits',
    description: 'Rated up to 2000A for testing circuit breakers, CTs and switchgear under real load conditions.',
  },
  {
    icon: Radio,
    title: 'Breaker & timing instruments',
    description: 'Breaker time interval kits and contact resistance meters for circuit breaker health checks.',
  },
  {
    icon: Activity,
    title: 'Calibration & measurement tools',
    description: 'Earth meggers, Hi-Pot kits, winding resistance meters and energy meter calibrators, all field-calibrated.',
  },
]

const galleryImages = [
  { src: '/assets/service-testing.jpg', alt: 'Relay testing on a control panel' },
  { src: '/assets/service-substation.jpg', alt: 'Substation switchyard equipment' },
  { src: '/assets/service-relay.jpg', alt: 'Protection relay panel close-up' },
  { src: '/assets/service-maintenance.jpg', alt: 'Field engineer performing maintenance' },
]

/* =========================================================
   ABOUT
========================================================= */

function About() {
  const [reviewIndex, setReviewIndex] = useState(0)

  const reviewItems = Array.isArray(reviews) ? reviews.map(getReview) : []

  const currentReview = reviewItems[reviewIndex] || {
    name: 'Client',
    role: '',
    company: '',
    text: '',
  }

  const previousReview = () => {
    setReviewIndex((current) => (current === 0 ? reviewItems.length - 1 : current - 1))
  }

  const nextReview = () => {
    setReviewIndex((current) => (current === reviewItems.length - 1 ? 0 : current + 1))
  }

  return (
    <>
      <Helmet>
        <title>About Electro Mech Engineers | Electrical Engineering</title>
        <meta
          name="description"
          content="Electro Mech Engineers, founded in 2005, is a Mumbai-based power system protection service provider offering testing, commissioning, retrofitting and consultancy to over 200 industrial clients across India."
        />
        <meta
          name="keywords"
          content="about Electro Mech Engineers, electrical consulting engineers, power system protection, relay testing, Mumbai, Mulund"
        />
        <meta property="og:title" content="About Electro Mech Engineers" />
        <meta property="og:description" content={company.tagline} />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="overflow-hidden bg-white">

        {/* =========================================================
            HERO
        ========================================================== */}

        <PageHero
          eyebrow="About us"
          title="Power system protection, since 2005."
          copy="A Mumbai-based electrical consulting firm providing testing, commissioning, protection and engineering services to industrial plants and utilities across India."
          image="/assets/about.png"
        />

        {/* =========================================================
            OPENING STATEMENT + PHOTO MOSAIC
        ========================================================== */}

        <section className="bg-[#061735] py-24 text-white md:py-32">
          <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8 xl:px-4">

            <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-[#c8a45c]" />
                  <span className="font-body text-xs font-medium text-[#29b6f6]">Who we are</span>
                </div>

                <h2 className="mt-8 max-w-xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-[3.9rem]">
                  Ensuring a constant power supply is our job.
                </h2>

                <p className="mt-8 max-w-lg text-base leading-7 text-white/55 md:text-lg md:leading-8">
                  Founded in 2005, we set out to provide value-added power
                  system protection services to industrial plants and
                  utilities. That still means the same thing today: engineers
                  in the field, testing and commissioning the systems that
                  keep critical infrastructure running.
                </p>

                <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6">
                  <div>
                    <p className="font-display text-3xl font-semibold text-white">2005</p>
                    <p className="mt-1 font-body text-xs text-white/40">Founded</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-semibold text-white">200+</p>
                    <p className="mt-1 font-body text-xs text-white/40">Industrial clients</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-semibold text-white">132kV</p>
                    <p className="mt-1 font-body text-xs text-white/40">Substations engineered up to</p>
                  </div>
                </div>
              </motion.div>

              {/* PHOTO MOSAIC — real field imagery, not stock icon cards */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
                className="grid grid-cols-2 gap-3"
              >
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={image.src}
                    variants={fadeUp}
                    className={`overflow-hidden rounded-sm bg-[#0a2146] ${
                      index === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </motion.div>
                ))}
              </motion.div>

            </div>
          </div>
        </section>

        {/* =========================================================
            HOW WE WORK
        ========================================================== */}

        <section className="bg-white py-24 lg:py-32">
          <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8 xl:px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="grid gap-px overflow-hidden rounded-sm border border-[#061735]/10 bg-[#061735]/10 md:grid-cols-3"
            >
              {[
                [Target, 'Test', 'Relay testing, coordination and setting calculations across LV, MV and HV systems up to 132kV.'],
                [Lightbulb, 'Design', 'Electrical system design, substation layouts and cable scheduling for power and industrial plants.'],
                [ShieldCheck, 'Protect', 'Commissioning, retrofitting and third-party inspection that keep protection systems dependable.'],
              ].map(([Icon, title, text]) => (
                <motion.article
                  key={title}
                  variants={fadeUp}
                  className="bg-white p-8 transition-colors duration-500 hover:bg-[#f8f9fb] md:min-h-[240px] md:p-10"
                >
                  <Icon size={26} strokeWidth={1.4} className="text-[#c8a45c]" />
                  <h3 className="mt-9 text-xl font-semibold text-[#061735]">{title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-[#061735]/50">{text}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            COMPANY TIMELINE
            This content genuinely is a sequence, so a timeline
            is the right structural device here.
        ========================================================== */}

        <section className="bg-[#f5f4f0] py-24 lg:py-32">
          <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8 xl:px-4">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#c8a45c]" />
                <span className="font-body text-xs font-medium text-[#168fd0]">Our journey</span>
              </div>
              <h2 className="mt-7 text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#061735] sm:text-5xl lg:text-[3.8rem]">
                Two decades in the field.
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="relative mt-16 grid gap-10 border-t border-[#061735]/10 pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
            >
              {milestones.map((milestone) => (
                <motion.div key={milestone.year} variants={fadeUp} className="relative pl-6">
                  <span className="absolute left-0 top-1 h-2.5 w-2.5 rounded-full bg-[#c8a45c]" />
                  <span className="absolute -left-px top-4 h-full w-px bg-[#061735]/10" />
                  <p className="font-display text-2xl font-semibold text-[#061735]">{milestone.year}</p>
                  <p className="mt-3 text-base font-semibold text-[#061735]">{milestone.title}</p>
                  <p className="mt-2 text-sm leading-6 text-[#061735]/50">{milestone.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            EQUIPMENT — real capability, not decoration
        ========================================================== */}

        <section className="bg-white py-24 lg:py-32">
          <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8 xl:px-4">
            <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-[#c8a45c]" />
                  <span className="font-body text-xs font-medium text-[#168fd0]">Highly equipped</span>
                </div>
                <h2 className="mt-7 max-w-md text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#061735] sm:text-5xl">
                  Testing instruments that match the job.
                </h2>
                <p className="mt-6 max-w-md text-base leading-7 text-[#061735]/50">
                  Our engineers carry calibrated, purpose-built instruments to
                  site — not generic multimeters. That's what makes protection
                  testing at 132kV substations reliable and repeatable.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={stagger}
                className="grid gap-px overflow-hidden rounded-sm border border-[#061735]/10 bg-[#061735]/10 sm:grid-cols-2"
              >
                {equipment.map((item) => {
                  const Icon = item.icon
                  return (
                    <motion.div key={item.title} variants={fadeUp} className="bg-white p-7 md:p-8">
                      <Icon size={24} strokeWidth={1.4} className="text-[#168fd0]" />
                      <h3 className="mt-6 text-base font-semibold text-[#061735]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#061735]/50">{item.description}</p>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FOUNDER — larger, portrait-led, premium treatment
        ========================================================== */}

        <section className="bg-[#061735] py-24 lg:py-32">
          <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8 xl:px-4">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              className="mb-14 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#c8a45c]" />
              <span className="font-body text-xs font-medium text-[#29b6f6]">Leadership</span>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="grid overflow-hidden rounded-sm bg-[#050f23] lg:grid-cols-[0.9fr_1.1fr]"
            >

              <motion.div variants={fadeUp} className="relative min-h-[460px] overflow-hidden">
                <img
                  src="/assets/owners.png"
                  alt="Mukund, Founder of Electro Mech Engineers"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050f23] via-transparent to-transparent" />
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col justify-between p-9 md:p-14">
                <div>
                  <Quote size={30} strokeWidth={1.2} className="text-[#c8a45c]" />
                  <blockquote className="mt-8 text-2xl font-medium leading-[1.3] tracking-[-0.02em] text-white md:text-3xl">
                    "Ensuring a constant power supply to industrial plants is a
                    responsibility we take seriously. Every relay test and every
                    report reflects that."
                  </blockquote>
                  <p className="mt-8 max-w-lg text-sm leading-6 text-white/45">
                    Since founding Electro Mech Engineers in 2005, Mukund has
                    built the company into a trusted power system protection
                    partner — overseeing testing and commissioning, protection
                    engineering and client relationships across more than 200
                    industrial projects nationwide.
                  </p>
                </div>

                <div className="mt-12 border-t border-white/10 pt-6">
                  <p className="text-lg font-semibold text-white">Mukund</p>
                  <p className="mt-1 font-body text-xs text-white/40">Founder, Electro Mech Engineers</p>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* =========================================================
            NUMBERS
        ========================================================== */}

        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8 xl:px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="grid divide-y divide-black/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4"
            >
              {stats.map((stat) => {
                const { value, suffix, label } = getStat(stat)
                return (
                  <motion.div
                    key={label}
                    variants={fadeUp}
                    className="px-5 py-10 transition-colors duration-300 hover:bg-[#f8f9fb] sm:px-7 lg:px-9"
                  >
                    <strong className="flex items-baseline text-4xl font-semibold tracking-tight text-[#061735] lg:text-5xl">
                      {value}
                      <em className="not-italic text-[#168fd0]">{suffix}</em>
                    </strong>
                    <span className="mt-2 block font-body text-xs text-black/45">{label}</span>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            WHY WE WORK DIFFERENTLY
        ========================================================== */}

        <section className="bg-[#f8f9fb] py-24 lg:py-32">
          <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8 xl:px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>

              <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-end lg:gap-20">
                <motion.div variants={fadeUp}>
                  <div className="flex items-center gap-3">
                    <span className="h-px w-10 bg-[#c8a45c]" />
                    <span className="font-body text-xs font-medium text-[#168fd0]">Why Electro Mech</span>
                  </div>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <h2 className="max-w-5xl text-4xl font-semibold leading-[1] tracking-[-0.04em] text-[#061735] sm:text-5xl lg:text-[4.2rem]">
                    Technical capability is
                    <span className="text-[#168fd0]"> only half the job.</span>
                  </h2>
                </motion.div>
              </div>

              <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-[#061735]/10 bg-[#061735]/10 md:grid-cols-2">
                {reasons.map((reasonItem) => {
                  const { title, description } = getReason(reasonItem)
                  return (
                    <motion.article
                      key={title}
                      variants={fadeUp}
                      className="group bg-white p-8 transition-colors duration-500 hover:bg-[#061735] md:min-h-[220px] md:p-9"
                    >
                      <CheckCircle2
                        size={20}
                        strokeWidth={1.3}
                        className="text-[#168fd0] transition-colors group-hover:text-[#c8a45c]"
                      />
                      <h3 className="mt-8 text-xl font-semibold text-[#061735] transition-colors group-hover:text-white">
                        {title}
                      </h3>
                      <p className="mt-3 max-w-lg text-sm leading-6 text-black/45 transition-colors group-hover:text-white/50">
                        {description}
                      </p>
                    </motion.article>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            CLIENT REVIEW SLIDER
        ========================================================== */}

        {reviewItems.length > 0 && (
          <section className="relative overflow-hidden bg-[#050f23] py-24 text-white md:py-32 lg:py-40">
            <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8 xl:px-4">
              <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">

                <div>
                  <div className="flex items-center gap-3">
                    <span className="h-px w-10 bg-[#c8a45c]" />
                    <span className="font-body text-xs font-medium text-[#29b6f6]">Client perspective</span>
                  </div>

                  <h2 className="mt-7 max-w-lg text-4xl font-semibold leading-[1] tracking-[-0.04em] sm:text-5xl lg:text-[3.8rem]">
                    The work matters
                    <span className="block text-white/30">because it works.</span>
                  </h2>

                  <p className="mt-6 max-w-md text-base leading-7 text-white/40">
                    A few words from the clients whose projects and requirements
                    shape the way we engineer.
                  </p>

                  <div className="mt-10 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={previousReview}
                      aria-label="Previous client review"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/65 transition-all duration-300 hover:border-[#c8a45c] hover:bg-[#c8a45c] hover:text-[#061735]"
                    >
                      <ArrowLeft size={17} strokeWidth={1.4} />
                    </button>
                    <button
                      type="button"
                      onClick={nextReview}
                      aria-label="Next client review"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/65 transition-all duration-300 hover:border-[#c8a45c] hover:bg-[#c8a45c] hover:text-[#061735]"
                    >
                      <ArrowRight size={17} strokeWidth={1.4} />
                    </button>
                    <span className="ml-2 font-body text-xs text-white/30">
                      {String(reviewIndex + 1).padStart(2, '0')} / {String(reviewItems.length).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <div className="relative min-h-[390px] border-t border-white/10 pt-10 lg:min-h-[430px] lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={reviewIndex}
                      initial={{ opacity: 0, x: 35 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -35 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Quote size={42} strokeWidth={1} className="text-[#c8a45c]" />
                      <blockquote className="mt-8 max-w-4xl text-2xl font-medium leading-[1.25] tracking-[-0.025em] text-white sm:text-3xl lg:text-[2.7rem]">
                        "{currentReview.text}"
                      </blockquote>
                      <div className="mt-12 flex items-end justify-between gap-6 border-t border-white/10 pt-6">
                        <div>
                          <p className="text-base font-semibold text-white">{currentReview.name}</p>
                          {(currentReview.role || currentReview.company) && (
                            <p className="mt-1 font-body text-xs text-white/40">
                              {[currentReview.role, currentReview.company].filter(Boolean).join(' · ')}
                            </p>
                          )}
                        </div>
                        <span className="hidden font-body text-xs text-white/25 sm:block">Client review</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>
            </div>
          </section>
        )}

        {/* =========================================================
            PAN INDIA PRESENCE
        ========================================================== */}

        <section className="bg-white py-24 lg:py-32">
          <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8 xl:px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>

              <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
                <motion.div variants={fadeUp}>
                  <div className="flex items-center gap-3">
                    <span className="h-px w-10 bg-[#c8a45c]" />
                    <span className="font-body text-xs font-medium text-[#168fd0]">Our footprint</span>
                  </div>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.04em] text-[#061735] sm:text-5xl lg:text-[4rem]">
                    Mumbai-based.
                    <span className="text-[#168fd0]"> Engineering across India.</span>
                  </h2>
                  <p className="mt-6 max-w-3xl text-base leading-7 text-[#061735]/50 md:text-lg md:leading-8">
                    Headquartered in Mumbai, our engineering teams travel to
                    client sites nationwide — supporting power plants, sugar
                    mills, process industries, oil and gas, cement and
                    government projects wherever the work is.
                  </p>
                </motion.div>
              </div>

              <div className="mt-10 grid gap-4 lg:grid-cols-[1.45fr_0.55fr]">
                <motion.div
                  variants={fadeUp}
                  className="relative min-h-[370px] overflow-hidden rounded-sm bg-[#061735] p-7 md:p-10"
                >
                  <img
                    src="/assets/service-locations-map.png"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover object-right"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-[#061735]/35 via-[#061735]/10 to-transparent" />

                  <div className="relative z-10">
                    <span className="font-body text-xs font-medium text-[#29b6f6]">
                      Service locations
                    </span>

                    <motion.div
                      variants={stagger}
                      className="mt-6 w-fit max-w-full"
                    >
                      <div className="grid grid-cols-[repeat(3,max-content)] justify-start gap-x-3 gap-y-2.5">
                        {locations.map((location, index) => (
                          <motion.span
                            key={location}
                            variants={fadeUp}
                            custom={index}
                            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#061735]/60 px-3.5 py-2 text-sm font-medium text-white/80 backdrop-blur-sm transition-colors duration-300 hover:border-[#c8a45c]/50 hover:bg-[#061735]/75"
                            style={{
                              transformOrigin: 'left center',
                            }}
                          >
                            <MapPin size={13} className="shrink-0 text-[#c8a45c]" />
                            <span className="whitespace-nowrap">{location}</span>
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="grid divide-y divide-[#061735]/10 overflow-hidden rounded-sm border border-[#061735]/10 bg-white sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-1 lg:divide-x-0 lg:divide-y"
                >
                  {stats.map((stat) => {
                    const { value, suffix, label } = getStat(stat)
                    return (
                      <div key={label} className="px-7 py-6">
                        <strong className="flex items-baseline text-3xl font-semibold text-[#061735]">
                          {value}
                          <em className="not-italic text-[#168fd0]">{suffix}</em>
                        </strong>
                        <span className="mt-1 block font-body text-xs font-medium text-black/40">{label}</span>
                      </div>
                    )
                  })}
                </motion.div>
              </div>

            </motion.div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}

        <section className="bg-[#061735] py-20 lg:py-24">
          <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8 xl:px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative overflow-hidden rounded-sm border border-white/10 bg-[#050f23] px-7 py-12 md:px-10 lg:flex lg:items-center lg:justify-between lg:px-14 lg:py-14"
            >
              <div className="relative z-10">
                <span className="font-body text-xs font-medium text-[#29b6f6]">Work with Electro Mech</span>
                <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.03em] text-white md:text-4xl lg:text-[3.4rem]">
                  Engineering dependable electrical systems starts with the right partner.
                </h2>
              </div>

              <Link
                to="/contact"
                className="group relative z-10 mt-8 inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#c8a45c] px-6 py-4 text-sm font-semibold text-[#061735] no-underline transition-all duration-300 hover:bg-white lg:ml-12 lg:mt-0"
              >
                Start a conversation
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  )
}

export default About
import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ClipboardCheck,
  Factory,
  MapPin,
  ShieldCheck,
  UsersRound,
  Wrench,
  Zap,
} from 'lucide-react'
import {
  company,
  stats,

  clients,
  reasons,
} from '../data/data'

import SectionIntro from '../components/SectionIntro'


/* =========================================================
   ANIMATIONS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 32,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 40,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const stagger = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
}

/* =========================================================
   DATA HELPERS
========================================================= */

const getStat = (stat) => {
  if (Array.isArray(stat)) {
    return {
      value: stat[0],
      label: stat[1],
    }
  }

  return {
    value: stat?.value,
    label: stat?.label,
  }
}

const getClientName = (client) => {
  if (Array.isArray(client)) {
    return client[0]
  }

  if (typeof client === 'object' && client !== null) {
    return client.name || client.title || client.label
  }

  return client
}

const getReason = (reason) => {
  if (Array.isArray(reason)) {
    return {
      title: reason[0],
      description: reason[1],
    }
  }

  return {
    title: reason?.title,
    description: reason?.description,
  }
}

/* =========================================================
   HOME
========================================================= */

function Home() {
  return (
    <>
      {/* =====================================================
          SEO
      ====================================================== */}

      <Helmet>
        <title>
          {company.name} | Electrical Consulting Engineers
        </title>

        <meta
          name="description"
          content={`${company.name} — ${company.tagline}. Electrical consulting, testing, protection and engineering services.`}
        />

        <meta
          name="keywords"
          content="electrical consulting engineers, electrical testing, protection relay testing, transformer testing, power systems, India"
        />

        <meta
          property="og:title"
          content={`${company.name} | Electrical Consulting Engineers`}
        />

        <meta
          property="og:description"
          content={company.tagline}
        />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      <main className="overflow-hidden">

        {/* =====================================================
    HERO — CINEMATIC CORPORATE
====================================================== */}

<section className="relative h-[100svh] min-h-[680px] overflow-hidden bg-[#061735]">

  {/* =====================================================
      HERO IMAGE
  ====================================================== */}

  <motion.div
    initial={{ scale: 1.06 }}
    animate={{ scale: 1 }}
    transition={{
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="absolute inset-0"
  >
    <img
      src="/assets/hero.jpg"
      alt="Electrical engineering and industrial infrastructure"
      className="
        h-full
        w-full
        object-cover
        object-center
      "
    />
  </motion.div>


  {/* =====================================================
      CINEMATIC OVERLAYS
  ====================================================== */}

  {/* Overall image control */}

  <div
    aria-hidden="true"
    className="
      absolute
      inset-0
      bg-black/15
    "
  />

  {/* Left / bottom cinematic gradient */}

  <div
    aria-hidden="true"
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-[#020b1d]/90
      via-[#061735]/45
      to-transparent
    "
  />

  <div
    aria-hidden="true"
    className="
      absolute
      inset-0
      bg-gradient-to-t
      from-[#020b1d]
      via-[#061735]/15
      to-transparent
    "
  />

  {/* Subtle top protection behind header */}

  <div
    aria-hidden="true"
    className="
      absolute
      inset-x-0
      top-0
      h-40
      bg-gradient-to-b
      from-black/30
      to-transparent
    "
  />


  {/* =====================================================
      ENGINEERING GRID
  ====================================================== */}

  <div
    aria-hidden="true"
    className="
      absolute
      inset-0
      opacity-[0.035]
      bg-[linear-gradient(rgba(255,255,255,0.65)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.65)_1px,transparent_1px)]
      bg-[size:80px_80px]
    "
  />


  {/* =====================================================
      HERO CONTENT
  ====================================================== */}

  <div className="relative z-10 flex h-full items-end">

    <div className="site-container w-full pb-24 pt-32 lg:pb-28">

      <div className="max-w-[920px]">

        {/* =================================================
            EYEBROW
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-6
            flex
            items-center
            gap-3
          "
        >
          <span className="h-px w-10 bg-[#c8a45c]" />

          <span
            className="
              font-mono
              text-[0.61rem]
              font-medium
              uppercase
              tracking-[0.25em]
              text-white/70
            "
          >
            {company.descriptor}
          </span>
        </motion.div>


        {/* =================================================
            MAIN HEADLINE
        ================================================== */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 45,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            max-w-[900px]
            font-display
            text-[3.2rem]
            font-semibold
            leading-[0.94]
            tracking-[-0.055em]
            text-white
            sm:text-6xl
            md:text-7xl
            lg:text-[5.9rem]
            xl:text-[6.7rem]
          "
        >
          Engineering the

          <span className="text-[#29b6f6]">
            {' '}power
          </span>

          <span className="block">
            behind industry.
          </span>
        </motion.h1>


        {/* =================================================
            SUPPORTING COPY + CTA
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-7
            flex
            flex-col
            gap-7
            md:flex-row
            md:items-end
            md:gap-12
          "
        >

          <p
            className="
              max-w-xl
              font-body
              text-[0.95rem]
              leading-7
              text-white/60
              md:text-base
            "
          >
            {company.tagline}
          </p>


          <Link
            to="/services"
            className="
              group
              inline-flex
              w-fit
              shrink-0
              items-center
              gap-3
              border-b
              border-white/35
              pb-2
              font-body
              text-sm
              font-medium
              tracking-wide
              text-white
              no-underline
              transition-all
              duration-300
              hover:border-[#c8a45c]
              hover:text-[#c8a45c]
            "
          >
            Explore our services

            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </Link>

        </motion.div>

      </div>

    </div>

  </div>


  {/* =====================================================
      HERO FOOTER / METADATA
  ====================================================== */}

  <div
    className="
      absolute
      bottom-0
      left-0
      right-0
      z-10
      border-t
      border-white/10
      bg-black/10
    "
  >
    <div
      className="
        site-container
        flex
        h-[58px]
        items-center
        justify-between
      "
    >

      {/* Left */}

      <div className="flex items-center gap-4">

        <span
          className="
            font-mono
            text-[0.55rem]
            uppercase
            tracking-[0.2em]
            text-white/40
          "
        >
          Engineering & Reliability
        </span>

        <span className="hidden h-px w-10 bg-white/15 sm:block" />

        <span
          className="
            hidden
            font-mono
            text-[0.55rem]
            uppercase
            tracking-[0.2em]
            text-white/25
            sm:block
          "
        >
          India
        </span>

      </div>


      {/* Right */}

      <div className="flex items-center gap-5">

        <span
          className="
            hidden
            font-mono
            text-[0.55rem]
            tracking-[0.2em]
            text-white/30
            sm:block
          "
        >
          01 / 07
        </span>

        <span
          className="
            flex
            items-center
            gap-3
            font-mono
            text-[0.55rem]
            uppercase
            tracking-[0.2em]
            text-white/35
          "
        >
          Scroll

          <span className="h-px w-8 bg-white/25" />
        </span>

      </div>

    </div>
  </div>

</section>

        {/* =====================================================
            STATS
        ====================================================== */}

        <section className="border-b border-black/10 bg-white">

          <div className="site-container">

            <div
              className="
                grid
                grid-cols-2
                md:grid-cols-4
              "
            >
              {stats.map((stat, index) => {
                const { value, label } = getStat(stat)

                return (
                  <motion.div
                    key={`${label}-${index}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    variants={fadeUp}
                    className="
                      border-b
                      border-r
                      border-black/10
                      px-5
                      py-8
                      last:border-r-0
                      md:border-b-0
                      md:px-7
                      md:py-10
                      lg:px-8
                    "
                  >
                    <div
                      className="
                        font-display
                        text-3xl
                        font-bold
                        tracking-[-0.035em]
                        text-[#061735]
                        md:text-4xl
                      "
                    >
                      {value}
                    </div>

                    <div
                      className="
                        mt-2
                        font-mono
                        text-[0.55rem]
                        font-medium
                        uppercase
                        tracking-[0.18em]
                        text-black/40
                      "
                    >
                      {label}
                    </div>
                  </motion.div>
                )
              })}
            </div>

          </div>

        </section>

       {/* ABOUT / INTRODUCTION */}
<section className="bg-white py-24 lg:py-32">
  <div className="site-container">
    <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        {/* Technical number */}
        <div className="absolute -top-8 left-0 z-10 flex items-center gap-3">
          <span className="font-mono text-[0.58rem] tracking-[0.22em] text-[#061735]/45">
            01
          </span>
          <span className="h-px w-8 bg-[#c8a45c]" />
          <span className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-[#061735]/45">
            Our expertise
          </span>
        </div>

        <div className="relative aspect-[4/4.6] overflow-hidden bg-[#061735]">
          <img
  src="/assets/about.png"
  alt="Electrical engineers inspecting high-voltage substation equipment"
  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
/>

          {/* Image treatment */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#061735]/55 via-transparent to-transparent"
          />

          {/* Engineering grid */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:60px_60px]"
          />

          {/* Image caption */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between border-t border-white/15 px-5 py-4">
            <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-white/55">
              Electrical infrastructure
            </span>

            <span className="font-mono text-[0.55rem] tracking-[0.15em] text-white/40">
              EME / 01
            </span>
          </div>
        </div>
      </motion.div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="lg:pl-2"
      >
        {/* Eyebrow */}
        <div className="mb-7 flex items-center gap-3">
          <span className="h-px w-10 bg-[#c8a45c]" />

          <span className="font-mono text-[0.61rem] font-medium uppercase tracking-[0.25em] text-[#168fd0]">
            About Electro Mech
          </span>
        </div>

        {/* Heading */}
        <h2 className="max-w-[760px] font-display text-[2.6rem] font-semibold leading-[1] tracking-[-0.045em] text-[#061735] sm:text-5xl lg:text-[4.1rem]">
          Engineering expertise built around{' '}
          <span className="text-[#168fd0]">
            reliability, protection
          </span>{' '}
          and performance.
        </h2>

        {/* Description */}
        <p className="mt-8 max-w-[650px] font-body text-[0.98rem] leading-7 text-slate-500 lg:text-[1.02rem]">
          Electro Mech Engineers provides electrical consulting and
          engineering services with a focus on practical field
          requirements and dependable technical execution.
        </p>

        {/* Divider */}
        <div className="my-9 h-px w-full max-w-[650px] bg-slate-200" />

        {/* Bottom information */}
        <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          
          <div>
            <p className="font-mono text-[0.56rem] uppercase tracking-[0.2em] text-slate-400">
              Engineering focus
            </p>

            <p className="mt-2 max-w-[280px] font-body text-sm leading-6 text-[#061735]">
              Precision. Protection. Performance.
            </p>
          </div>

          <Link
            to="/about"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#061735]/30 pb-2 font-body text-sm font-semibold tracking-wide text-[#061735] no-underline transition-all duration-300 hover:border-[#c8a45c] hover:text-[#168fd0]"
          >
            Discover our approach

            <ArrowUpRight
              size={17}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </motion.div>

    </div>
  </div>
</section>

       {/* SERVICES */}
<section className="overflow-hidden bg-[#f8f9fb] py-24 lg:py-32">
  <div className="site-container">

    {/* SECTION INTRO */}
    <div className="mb-14 flex flex-col gap-10 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">

      <div className="max-w-[780px]">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-[#168fd0]" />

          <span className="font-mono text-[0.61rem] font-medium uppercase tracking-[0.25em] text-[#168fd0]">
            What we do
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.045em] text-[#061735] sm:text-5xl lg:text-[4.25rem]">
          Engineering services for critical{' '}
          <span className="block">
            electrical systems.
          </span>
        </h2>

        {/* Description */}
        <p className="mt-7 max-w-[700px] font-body text-base leading-7 text-slate-500 lg:text-[1.02rem]">
          From consulting and testing to protection and commissioning
          support, our services are structured around dependable
          electrical infrastructure.
        </p>
      </div>

      {/* CAROUSEL CONTROLS */}
      <div className="flex shrink-0 items-center gap-3">
        <button
          type="button"
          aria-label="Previous services"
          onClick={() => {
            document
              .getElementById('services-carousel')
              ?.scrollBy({
                left: -420,
                behavior: 'smooth',
              })
          }}
          className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-[#061735] transition-all duration-300 hover:border-[#168fd0] hover:bg-[#168fd0] hover:text-white"
        >
          <ArrowLeft
            size={18}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:-translate-x-0.5"
          />
        </button>

        <button
          type="button"
          aria-label="Next services"
          onClick={() => {
            document
              .getElementById('services-carousel')
              ?.scrollBy({
                left: 420,
                behavior: 'smooth',
              })
          }}
          className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#168fd0] bg-white text-[#168fd0] transition-all duration-300 hover:bg-[#168fd0] hover:text-white"
        >
          <ArrowRight
            size={18}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </button>
      </div>
    </div>


    {/* SERVICE CAROUSEL */}
    <div
      id="services-carousel"
      className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-none lg:gap-5"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >

      {/* SERVICE 01 */}
      <article className="group relative min-w-[82vw] snap-start overflow-hidden rounded-[4px] bg-[#061735] sm:min-w-[360px] lg:min-w-[calc((100%-60px)/4)] lg:flex-none">
        <div className="relative h-[540px]">

          <img
            src="/assets/service-testing.jpg"
            alt="Electrical testing and commissioning"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#03132f] via-[#061735]/75 to-[#061735]/5" />

          {/* Top image fade */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/25 to-transparent" />

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7">

            <div className="mb-7 flex items-center justify-between">
              <span className="font-mono text-[0.6rem] tracking-[0.2em] text-white/55">
                01
              </span>

              <div className="flex h-11 w-11 items-center justify-center border border-[#c8a45c]/70 bg-[#061735]/30 text-white backdrop-blur-sm">
                <Zap size={20} strokeWidth={1.4} />
              </div>
            </div>

            <h3 className="max-w-[280px] font-display text-2xl font-semibold leading-[1.05] tracking-[-0.025em] text-white">
              Testing &amp;
              <span className="block">Commissioning</span>
            </h3>

            <p className="mt-5 max-w-[330px] font-body text-sm leading-6 text-white/65">
              Protection systems, control &amp; relay panels,
              switchgear, transformers and associated equipment.
            </p>

            <Link
              to="/services/testing-commissioning"
              className="group/link mt-7 inline-flex items-center gap-3 border-b border-[#c8a45c] pb-2 font-body text-sm font-medium text-white no-underline"
            >
              Learn more

              <ArrowRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover/link:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </article>


      {/* SERVICE 02 */}
      <article className="group relative min-w-[82vw] snap-start overflow-hidden rounded-[4px] bg-[#061735] sm:min-w-[360px] lg:min-w-[calc((100%-60px)/4)] lg:flex-none">
        <div className="relative h-[540px]">

          <img
            src="/assets/service-relay.jpg"
            alt="Relay protection engineering"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#03132f] via-[#061735]/75 to-[#061735]/5" />

          <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7">

            <div className="mb-7 flex items-center justify-between">
              <span className="font-mono text-[0.6rem] tracking-[0.2em] text-white/55">
                02
              </span>

              <div className="flex h-11 w-11 items-center justify-center border border-[#c8a45c]/70 bg-[#061735]/30 text-white backdrop-blur-sm">
                <ShieldCheck size={20} strokeWidth={1.4} />
              </div>
            </div>

            <h3 className="max-w-[280px] font-display text-2xl font-semibold leading-[1.05] tracking-[-0.025em] text-white">
              Relay Protection
            </h3>

            <p className="mt-5 max-w-[330px] font-body text-sm leading-6 text-white/65">
              Testing and commissioning of electromechanical,
              static and numerical protection relays with a focus
              on dependable protection.
            </p>

            <Link
              to="/services/relay-protection"
              className="group/link mt-7 inline-flex items-center gap-3 border-b border-[#c8a45c] pb-2 font-body text-sm font-medium text-white no-underline"
            >
              Learn more

              <ArrowRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover/link:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </article>


      {/* SERVICE 03 */}
      <article className="group relative min-w-[82vw] snap-start overflow-hidden rounded-[4px] bg-[#061735] sm:min-w-[360px] lg:min-w-[calc((100%-60px)/4)] lg:flex-none">
        <div className="relative h-[540px]">

          <img
            src="/assets/service-substation.jpg"
            alt="Substation engineering"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#03132f] via-[#061735]/75 to-[#061735]/5" />

          <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7">

            <div className="mb-7 flex items-center justify-between">
              <span className="font-mono text-[0.6rem] tracking-[0.2em] text-white/55">
                03
              </span>

              <div className="flex h-11 w-11 items-center justify-center border border-[#c8a45c]/70 bg-[#061735]/30 text-white backdrop-blur-sm">
                <Zap size={20} strokeWidth={1.4} />
              </div>
            </div>

            <h3 className="max-w-[280px] font-display text-2xl font-semibold leading-[1.05] tracking-[-0.025em] text-white">
              Substation
              <span className="block">Engineering</span>
            </h3>

            <p className="mt-5 max-w-[330px] font-body text-sm leading-6 text-white/65">
              End-to-end secondary system design, layout,
              engineering, cable scheduling and BOQ preparation.
            </p>

            <Link
              to="/services/substation-engineering"
              className="group/link mt-7 inline-flex items-center gap-3 border-b border-[#c8a45c] pb-2 font-body text-sm font-medium text-white no-underline"
            >
              Learn more

              <ArrowRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover/link:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </article>


      {/* SERVICE 04 */}
      <article className="group relative min-w-[82vw] snap-start overflow-hidden rounded-[4px] bg-[#061735] sm:min-w-[360px] lg:min-w-[calc((100%-60px)/4)] lg:flex-none">
        <div className="relative h-[540px]">

          <img
            src="/assets/service-consulting.jpg"
            alt="Electrical consulting"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#03132f] via-[#061735]/75 to-[#061735]/5" />

          <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7">

            <div className="mb-7 flex items-center justify-between">
              <span className="font-mono text-[0.6rem] tracking-[0.2em] text-white/55">
                04
              </span>

              <div className="flex h-11 w-11 items-center justify-center border border-[#c8a45c]/70 bg-[#061735]/30 text-white backdrop-blur-sm">
                <UsersRound size={20} strokeWidth={1.4} />
              </div>
            </div>

            <h3 className="max-w-[280px] font-display text-2xl font-semibold leading-[1.05] tracking-[-0.025em] text-white">
              Electrical
              <span className="block">Consulting</span>
            </h3>

            <p className="mt-5 max-w-[330px] font-body text-sm leading-6 text-white/65">
              Technical consultancy for system studies,
              capacity planning and electrical engineering
              assessments.
            </p>

            <Link
              to="/services/electrical-consulting"
              className="group/link mt-7 inline-flex items-center gap-3 border-b border-[#c8a45c] pb-2 font-body text-sm font-medium text-white no-underline"
            >
              Learn more

              <ArrowRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover/link:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </article>


      {/* SERVICE 05 */}
      <article className="group relative min-w-[82vw] snap-start overflow-hidden rounded-[4px] bg-[#061735] sm:min-w-[360px] lg:min-w-[calc((100%-60px)/4)] lg:flex-none">
        <div className="relative h-[540px]">

          <img
            src="/assets/service-maintenance.jpg"
            alt="Electrical support and maintenance"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#03132f] via-[#061735]/75 to-[#061735]/5" />

          <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7">

            <div className="mb-7 flex items-center justify-between">
              <span className="font-mono text-[0.6rem] tracking-[0.2em] text-white/55">
                05
              </span>

              <div className="flex h-11 w-11 items-center justify-center border border-[#c8a45c]/70 bg-[#061735]/30 text-white backdrop-blur-sm">
                <Wrench size={20} strokeWidth={1.4} />
              </div>
            </div>

            <h3 className="max-w-[280px] font-display text-2xl font-semibold leading-[1.05] tracking-[-0.025em] text-white">
              Support &amp;
              <span className="block">Maintenance</span>
            </h3>

            <p className="mt-5 max-w-[330px] font-body text-sm leading-6 text-white/65">
              Maintenance support, inspections and performance
              evaluation to maximize electrical system
              availability.
            </p>

            <Link
              to="/services/support-maintenance"
              className="group/link mt-7 inline-flex items-center gap-3 border-b border-[#c8a45c] pb-2 font-body text-sm font-medium text-white no-underline"
            >
              Learn more

              <ArrowRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover/link:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </article>

    </div>


    {/* BOTTOM NAVIGATION */}
    <div className="mt-8 flex items-center justify-between">

      <div className="flex items-center gap-3">
        <span className="h-1.5 w-8 rounded-full bg-[#168fd0]" />
        <span className="h-1.5 w-8 rounded-full bg-slate-300" />
        <span className="h-1.5 w-8 rounded-full bg-slate-300" />
        <span className="h-1.5 w-8 rounded-full bg-slate-300" />
        <span className="h-1.5 w-8 rounded-full bg-slate-300" />
      </div>

      <Link
        to="/services"
        className="group inline-flex items-center gap-2 font-mono text-[0.58rem] uppercase tracking-[0.18em] text-[#061735] no-underline transition-colors hover:text-[#168fd0]"
      >
        View all services

        <ArrowUpRight
          size={15}
          strokeWidth={1.5}
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </Link>

    </div>

  </div>
</section>

        {/* =====================================================
            CAPABILITIES
        ====================================================== */}

        <section className="bg-[#061735] py-24 md:py-32">

          <div className="site-container">

            <div
              className="
                grid
                gap-16
                lg:grid-cols-[0.85fr_1.15fr]
                lg:gap-24
              "
            >

              {/* Copy */}

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                variants={stagger}
              >
                <motion.span
                  variants={fadeUp}
                  className="
                    font-mono
                    text-[0.62rem]
                    font-medium
                    uppercase
                    tracking-[0.22em]
                    text-[#29b6f6]
                  "
                >
                  Built for the field
                </motion.span>

                <motion.h2
                  variants={fadeUp}
                  className="
                    mt-6
                    max-w-xl
                    font-display
                    text-3xl
                    font-bold
                    leading-[1.06]
                    tracking-[-0.04em]
                    text-white
                    md:text-5xl
                  "
                >
                  Engineering decisions
                  grounded in real-world
                  electrical systems.
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  className="
                    mt-7
                    max-w-lg
                    font-body
                    text-base
                    leading-8
                    text-white/45
                  "
                >
                  Technical capability matters most
                  when it translates into practical,
                  measurable outcomes in the field.
                </motion.p>
              </motion.div>

              {/* Capability cards */}

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                variants={stagger}
                className="
                  grid
                  gap-px
                  border
                  border-white/10
                  bg-white/10
                  sm:grid-cols-2
                "
              >

                {/* Protection */}

                <motion.div
                  variants={fadeUp}
                  className="
                    group
                    bg-[#061735]
                    p-7
                    transition-colors
                    duration-300
                    hover:bg-[#0a2145]
                    md:p-9
                  "
                >
                  <ShieldCheck
                    size={27}
                    strokeWidth={1.35}
                    className="
                      text-[#c8a45c]
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  />

                  <h3
                    className="
                      mt-6
                      font-display
                      text-lg
                      font-semibold
                      text-white
                    "
                  >
                    Protection
                  </h3>

                  <p
                    className="
                      mt-3
                      font-body
                      text-sm
                      leading-6
                      text-white/40
                    "
                  >
                    Supporting dependable protection
                    and electrical system performance.
                  </p>
                </motion.div>

                {/* Testing */}

                <motion.div
                  variants={fadeUp}
                  className="
                    group
                    bg-[#061735]
                    p-7
                    transition-colors
                    duration-300
                    hover:bg-[#0a2145]
                    md:p-9
                  "
                >
                  <Zap
                    size={27}
                    strokeWidth={1.35}
                    className="
                      text-[#c8a45c]
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  />

                  <h3
                    className="
                      mt-6
                      font-display
                      text-lg
                      font-semibold
                      text-white
                    "
                  >
                    Testing
                  </h3>

                  <p
                    className="
                      mt-3
                      font-body
                      text-sm
                      leading-6
                      text-white/40
                    "
                  >
                    Structured testing and diagnostics
                    for electrical equipment and systems.
                  </p>
                </motion.div>

                {/* Industrial */}

                <motion.div
                  variants={fadeUp}
                  className="
                    group
                    bg-[#061735]
                    p-7
                    transition-colors
                    duration-300
                    hover:bg-[#0a2145]
                    md:p-9
                  "
                >
                  <Factory
                    size={27}
                    strokeWidth={1.35}
                    className="
                      text-[#c8a45c]
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  />

                  <h3
                    className="
                      mt-6
                      font-display
                      text-lg
                      font-semibold
                      text-white
                    "
                  >
                    Industrial Focus
                  </h3>

                  <p
                    className="
                      mt-3
                      font-body
                      text-sm
                      leading-6
                      text-white/40
                    "
                  >
                    Engineering support aligned with
                    demanding industrial environments.
                  </p>
                </motion.div>

                {/* Reach */}

                <motion.div
                  variants={fadeUp}
                  className="
                    group
                    bg-[#061735]
                    p-7
                    transition-colors
                    duration-300
                    hover:bg-[#0a2145]
                    md:p-9
                  "
                >
                  <MapPin
                    size={27}
                    strokeWidth={1.35}
                    className="
                      text-[#c8a45c]
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  />

                  <h3
                    className="
                      mt-6
                      font-display
                      text-lg
                      font-semibold
                      text-white
                    "
                  >
                    Pan-India Reach
                  </h3>

                  <p
                    className="
                      mt-3
                      font-body
                      text-sm
                      leading-6
                      text-white/40
                    "
                  >
                    Engineering activities delivered
                    across locations throughout India.
                  </p>
                </motion.div>

              </motion.div>

            </div>

          </div>

        </section>

        {/* =====================================================
            CLIENTS
        ====================================================== */}

        <section className="overflow-hidden bg-white py-24 lg:py-28">
          <div className="site-container">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={stagger}
            >
              <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">

                <div className="max-w-[820px]">
                  <motion.div
                    variants={fadeUp}
                    className="mb-6 flex items-center gap-3"
                  >
                    <span className="h-px w-10 bg-[#168fd0]" />

                    <span className="font-mono text-[0.61rem] font-medium uppercase tracking-[0.25em] text-[#168fd0]">
                      Selected clients
                    </span>
                  </motion.div>

                  <motion.h2
                    variants={fadeUp}
                    className="font-display text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.045em] text-[#061735] sm:text-5xl lg:text-[4.2rem]"
                  >
                    Trusted across industrial sectors.
                  </motion.h2>

                  <motion.p
                    variants={fadeUp}
                    className="mt-7 max-w-[720px] font-body text-base leading-7 text-slate-500 lg:text-[1.02rem]"
                  >
                    Our client relationships reflect experience working across
                    electrical and industrial requirements.
                  </motion.p>
                </div>

                <motion.div
                  variants={fadeUp}
                  className="flex items-center gap-3 lg:pb-1"
                >
                  <span className="font-mono text-[0.56rem] uppercase tracking-[0.2em] text-black/35">
                    Client network
                  </span>

                  <span className="h-px w-8 bg-[#c8a45c]" />
                </motion.div>

              </div>
            </motion.div>

          </div>

          {/* CLIENT LOGO MARQUEE */}

          <div className="mt-16 overflow-hidden border-y border-black/10 py-8">
            <div className="client-marquee flex w-max items-center">
              {[...clients, ...clients].map((client, index) => {
                const name = getClientName(client)

                return (
                  <div
                    key={`${name}-${index}`}
                    className="
                      mx-8
                      flex
                      h-16
                      min-w-[170px]
                      items-center
                      justify-center
                      whitespace-nowrap
                      md:mx-10
                      md:min-w-[190px]
                    "
                  >
                    <img
                      src="/assets/L&T.webp"
                      alt={name}
                      loading="lazy"
                      className="
                        max-h-12
                        max-w-[175px]
                        w-auto
                        object-contain
                        opacity-80
                        transition-opacity
                        duration-300
                        hover:opacity-100
                      "
                    />

                    <span
                      aria-hidden="true"
                      className="ml-8 h-1 w-1 shrink-0 rounded-full bg-[#c8a45c]"
                    />
                  </div>
                )
              })}
            </div>
          </div>

          <div className="site-container">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="pt-8"
            >
              <Link
                to="/clients"
                className="group inline-flex items-center gap-3 border-b border-[#061735]/25 pb-2 font-body text-sm font-semibold tracking-wide text-[#061735] no-underline transition-all duration-300 hover:border-[#c8a45c] hover:text-[#168fd0]"
              >
                Explore our client portfolio

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
          </div>
        </section>

       {/* =====================================================
    WHY US
====================================================== */}

<section className="relative overflow-hidden bg-[#061735] py-16 md:py-20">

  {/* Subtle technical grid */}
  <div
    aria-hidden="true"
    className="
      pointer-events-none
      absolute
      inset-0
      opacity-[0.035]
      bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
      bg-[size:72px_72px]
    "
  />

  <div className="site-container relative z-10">

    {/* Header */}

    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl"
    >

      <div className="mb-5 flex items-center gap-3">

        <span className="h-px w-8 bg-[#c8a45c]" />

        <span
          className="
            font-mono
            text-[0.58rem]
            font-medium
            uppercase
            tracking-[0.24em]
            text-[#29b6f6]
          "
        >
          Why Electro Mech
        </span>

      </div>

      <h2
        className="
          max-w-3xl
          font-display
          text-[2.35rem]
          font-semibold
          leading-[1]
          tracking-[-0.04em]
          text-white
          sm:text-4xl
          lg:text-[3.6rem]
        "
      >
        Engineering that
        <span className="text-[#29b6f6]"> works in the real world.</span>
      </h2>

      <p
        className="
          mt-5
          max-w-2xl
          font-body
          text-sm
          leading-6
          text-white/50
          md:text-[0.95rem]
        "
      >
        Our approach combines technical discipline with practical
        execution to deliver dependable electrical engineering outcomes.
      </p>

    </motion.div>


    {/* Reasons */}

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      variants={stagger}
      className="mt-10 border-t border-white/15"
    >

      {reasons.map((reason, index) => {

        const { title, description } = getReason(reason)

        return (
          <motion.div
            key={`${title}-${index}`}
            variants={fadeUp}
            className="
              group
              grid
              gap-3
              border-b
              border-white/10
              py-4
              transition-colors
              duration-300
              hover:bg-white/[0.025]
              sm:grid-cols-[70px_1fr_32px]
              sm:items-center
              sm:gap-6
              md:py-[1.1rem]
            "
          >

            {/* Number */}

            <span
              className="
                font-mono
                text-[0.58rem]
                font-medium
                tracking-[0.15em]
                text-[#c8a45c]
              "
            >
              {String(index + 1).padStart(2, '0')}
            </span>


            {/* Content */}

            <div>

              <h3
                className="
                  font-display
                  text-base
                  font-semibold
                  tracking-[-0.015em]
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-[#29b6f6]
                  md:text-lg
                "
              >
                {title}
              </h3>

              <p
                className="
                  mt-1
                  max-w-3xl
                  font-body
                  text-xs
                  leading-5
                  text-white/40
                  transition-colors
                  duration-300
                  group-hover:text-white/55
                  md:text-sm
                "
              >
                {description}
              </p>

            </div>


            {/* Arrow */}

            <div
              className="
                hidden
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                text-white/25
                transition-all
                duration-300
                group-hover:border-[#29b6f6]/50
                group-hover:bg-[#29b6f6]
                group-hover:text-[#061735]
                sm:flex
              "
            >
              <ArrowUpRight
                size={13}
                strokeWidth={1.6}
              />
            </div>

          </motion.div>
        )
      })}

    </motion.div>

  </div>

</section>

         {/* =====================================================
            CTA
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#c8a45c]">

          {/* CTA BACKGROUND IMAGE */}

          <img
            src="/assets/cta-background.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* Warm brand overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#c8a45c]/75 mix-blend-multiply"
          />

          {/* Readability gradient */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#c8a45c]/95 via-[#c8a45c]/72 to-[#c8a45c]/30"
          />

          {/* Engineering pattern */}
          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              opacity-[0.08]
              bg-[linear-gradient(90deg,#000_1px,transparent_1px)]
              bg-[size:90px_90px]
            "
          />

          <div className="site-container relative z-10 py-16 lg:py-20">

            <div
              className="
                flex
                flex-col
                gap-10
                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >

              <div className="max-w-3xl">

                <span
                  className="
                    font-mono
                    text-[0.62rem]
                    font-medium
                    uppercase
                    tracking-[0.22em]
                    text-black/50
                  "
                >
                  Start a conversation
                </span>

                <h2
                  className="
                    mt-5
                    font-display
                    text-3xl
                    font-bold
                    leading-[1.05]
                    tracking-[-0.04em]
                    text-black
                    md:text-5xl
                  "
                >
                  Have an electrical engineering requirement?
                </h2>

                <p
                  className="
                    mt-5
                    max-w-2xl
                    font-body
                    text-base
                    leading-7
                    text-black/55
                  "
                >
                  Tell us about your project, testing
                  requirement or engineering challenge.
                </p>

              </div>

              <Link
                to="/contact"
                className="
                  inline-flex
                  shrink-0
                  items-center
                  justify-center
                  gap-2
                  rounded-sm
                  bg-black
                  px-7
                  py-4
                  font-body
                  text-sm
                  font-semibold
                  tracking-wide
                  text-white
                  no-underline
                  transition-all
                  duration-300
                  hover:bg-[#061735]
                "
              >
                Contact Electro Mech

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.7}
                />
              </Link>

            </div>

          </div>

        </section>

      </main>
    </>
  )
}

export default Home
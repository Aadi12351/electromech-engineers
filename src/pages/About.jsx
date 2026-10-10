import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  FileCheck2,
  Gauge,
  MapPinned,
  Quote,
  ShieldCheck,
  UsersRound,
  Zap,
} from 'lucide-react'

import PageHero from '../components/PageHero'
import SEO from '../components/SEO'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
}

const stats = [
  {
    value: '2005',
    label: 'Established',
    icon: CalendarDays,
  },
  {
    value: '132 kV',
    label: 'Substation Experience',
    icon: Zap,
  },
  {
    value: '200+',
    label: 'Industrial Clients',
    icon: UsersRound,
  },
  {
    value: 'Pan-India',
    label: 'Project Exposure',
    icon: MapPinned,
  },
]

const expertise = [
  'Testing and commissioning of electromechanical and numerical relays',
  'Primary electrical equipment testing',
  'Relay coordination and relay setting calculations',
  'Protection audits and power-system studies',
  'Substation engineering experience up to 132 kV',
  'Testing of CTs, PTs, transformers, circuit breakers and isolators',
  'Motor, switchgear and control-panel testing',
  'Maintenance, retrofitting, system modification and consultancy',
]

const sectors = [
  'Power Plants',
  'Process Industries',
  'Oil & Gas',
  'Cement',
  'Sugar',
  'Fertilizers',
  'Utilities',
  'Government Organisations',
]

const approach = [
  {
    icon: Gauge,
    title: 'Accuracy',
    text: 'Testing and engineering work is carried out with focus on precise measurements, settings and dependable technical results.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe Execution',
    text: 'Every assignment is approached with disciplined field practices and a strong emphasis on safe electrical execution.',
  },
  {
    icon: Zap,
    title: 'Protection Coordination',
    text: 'Our work supports proper protection coordination so electrical systems can operate safely and reliably.',
  },
  {
    icon: FileCheck2,
    title: 'Clear Documentation',
    text: 'Technical findings and engineering recommendations are supported by clear, practical documentation for the client.',
  },
]

function SectionLabel({ children, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`h-px w-10 ${
          light ? 'bg-[#29b6f6]' : 'bg-[#168fd0]'
        }`}
      />
      <span
        className={`font-body text-xs font-semibold uppercase tracking-[0.16em] ${
          light ? 'text-[#29b6f6]' : 'text-[#168fd0]'
        }`}
      >
        {children}
      </span>
    </div>
  )
}

function FounderPortrait() {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-[#0a2146]">
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/5 font-display text-xl font-bold text-white">
            MR
          </div>
          <p className="mt-4 font-body text-xs text-white/40">
            Add founder image
          </p>
        </div>
      </div>
    )
  }

  return (
    <img
      src="/assets/founder-rathi.jpg"
      alt="Mr. M. R. Rathi, Founder and Principal Engineer of Electro Mech Engineers"
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover object-center"
    />
  )
}

function About() {
  return (
    <>
      <SEO
        title="About Electro Mech Engineers | Electrical Consulting Engineers Mumbai"
        description="Electro Mech Engineers is a Mumbai-based electrical engineering company established in 2005, providing power system protection, testing, commissioning, design and engineering services for industrial plants, utilities and substations."
        path="/about"
        image="/assets/about.png"
        keywords={[
          'electrical consulting engineers Mumbai',
          'power system protection engineers India',
          'electrical testing company Mumbai',
          'substation commissioning 132 kV',
          'relay coordination engineers India',
        ]}
      />

      <main className="overflow-hidden bg-white">
        {/* =========================================================
            HERO
        ========================================================== */}
        <PageHero
          eyebrow="About us"
          title="Engineering reliability into every power system."
          copy="Electro Mech Engineers is a Mumbai-based electrical engineering company established in 2005, providing specialised services in power system protection, testing, commissioning, design and engineering for industrial plants, utilities and substations."
          image="/assets/about.png"
          imageAlt="High-voltage substation and electrical power infrastructure"
        />

        {/* =========================================================
            INTRO / COMPANY OVERVIEW
        ========================================================== */}
        <section className="bg-[#061735] py-20 text-white lg:py-28">
          <div className="site-container">
            <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
              >
                <motion.div variants={fadeUp}>
                  <SectionLabel light>Electro Mech Engineers</SectionLabel>
                </motion.div>

                <motion.h2
                  variants={fadeUp}
                  className="mt-7 max-w-3xl font-display text-[2.6rem] font-semibold leading-[1] tracking-[-0.045em] text-white sm:text-5xl lg:text-[4.1rem]"
                >
                  Protecting and strengthening critical electrical systems for
                  over two decades.
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  className="mt-8 max-w-2xl font-body text-base leading-8 text-white/55 md:text-lg"
                >
                  Our work focuses on power system protection, testing and
                  commissioning. Our expertise covers protection relays, control
                  and relay panels, switchgear, transformers, motors, CTs, PTs,
                  circuit breakers, isolators and associated substation
                  equipment.
                </motion.p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
                className="grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10"
              >
                {stats.map((stat) => {
                  const Icon = stat.icon

                  return (
                    <motion.div
                      key={stat.label}
                      variants={fadeUp}
                      className="bg-[#061735] p-6 md:p-8"
                    >
                      <Icon
                        size={22}
                        strokeWidth={1.5}
                        className="text-[#29b6f6]"
                      />

                      <p className="mt-6 font-display text-3xl font-bold tracking-[-0.035em] text-white md:text-4xl">
                        {stat.value}
                      </p>

                      <p className="mt-2 font-body text-xs leading-5 text-white/45">
                        {stat.label}
                      </p>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================
            WHO WE ARE
        ========================================================== */}
        <section className="bg-white py-20 lg:py-28">
          <div className="site-container">
            <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <SectionLabel>Who we are</SectionLabel>

                <h2 className="mt-7 max-w-xl font-display text-[2.6rem] font-semibold leading-[1] tracking-[-0.045em] text-[#061735] sm:text-5xl">
                  Practical field experience backed by specialised engineering.
                </h2>

                <p className="mt-7 max-w-xl font-body text-base leading-7 text-slate-500">
                  We are a team of electrical testing and protection
                  professionals with extensive field experience across
                  industrial plants and substations.
                </p>

                <p className="mt-5 max-w-xl font-body text-base leading-7 text-slate-500">
                  We support projects from pre-commissioning and testing through
                  maintenance, retrofitting, system modification and technical
                  consultancy.
                </p>

                <Link
                  to="/services"
                  className="group mt-9 inline-flex items-center gap-3 border-b border-[#061735]/25 pb-2 font-body text-sm font-semibold text-[#061735] no-underline transition-colors hover:border-[#168fd0] hover:text-[#168fd0]"
                >
                  Explore our services
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={stagger}
                className="grid gap-px overflow-hidden border border-[#061735]/10 bg-[#061735]/10 sm:grid-cols-2"
              >
                {expertise.map((item) => (
                  <motion.div
                    key={item}
                    variants={fadeUp}
                    className="flex gap-4 bg-[#f8fafc] p-6 transition-colors duration-300 hover:bg-white md:p-7"
                  >
                    <CheckCircle2
                      size={19}
                      strokeWidth={1.5}
                      className="mt-0.5 shrink-0 text-[#168fd0]"
                    />

                    <p className="font-body text-sm leading-6 text-[#061735]/65">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================
            OUR JOURNEY
        ========================================================== */}
        <section className="bg-[#f5f7fa] py-20 lg:py-28">
          <div className="site-container">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <SectionLabel>Our journey</SectionLabel>

                <div className="mt-8 border-l-2 border-[#168fd0] pl-6">
                  <p className="font-display text-5xl font-bold tracking-[-0.05em] text-[#061735]">
                    2005
                  </p>
                  <p className="mt-2 font-body text-sm font-semibold text-[#168fd0]">
                    Established in Mumbai
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={stagger}
              >
                <motion.h2
                  variants={fadeUp}
                  className="max-w-4xl font-display text-[2.6rem] font-semibold leading-[1] tracking-[-0.045em] text-[#061735] sm:text-5xl lg:text-[4rem]"
                >
                  From specialised electrical testing to comprehensive
                  power-system engineering support.
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  className="mt-7 max-w-3xl font-body text-base leading-8 text-slate-500"
                >
                  Since our establishment in 2005, Electro Mech Engineers has
                  grown from a specialised electrical testing service provider
                  into a comprehensive power-system protection and engineering
                  partner.
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  className="mt-5 max-w-3xl font-body text-base leading-8 text-slate-500"
                >
                  Over the years, we have worked across power plants, process
                  industries, oil & gas, cement, sugar, fertilizers, utilities,
                  government organisations and other industrial sectors. Our
                  company profile records more than 200 major industrial
                  clients and project exposure throughout India.
                </motion.p>

                <motion.div
                  variants={stagger}
                  className="mt-10 flex flex-wrap gap-2.5"
                >
                  {sectors.map((sector) => (
                    <motion.span
                      key={sector}
                      variants={fadeUp}
                      className="rounded-full border border-[#061735]/10 bg-white px-4 py-2 font-body text-xs font-medium text-[#061735]/60"
                    >
                      {sector}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================
            OUR APPROACH
        ========================================================== */}
        <section className="bg-white py-20 lg:py-28">
          <div className="site-container">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-3xl"
            >
              <SectionLabel>Our approach</SectionLabel>

              <h2 className="mt-7 font-display text-[2.6rem] font-semibold leading-[1] tracking-[-0.045em] text-[#061735] sm:text-5xl lg:text-[4rem]">
                Engineering focused on long-term reliability, safety and
                performance.
              </h2>

              <p className="mt-7 max-w-2xl font-body text-base leading-7 text-slate-500">
                We combine practical field experience with specialised
                engineering knowledge, modern testing instruments and
                established procedures.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="mt-12 grid gap-px overflow-hidden border border-[#061735]/10 bg-[#061735]/10 sm:grid-cols-2 lg:grid-cols-4"
            >
              {approach.map((item) => {
                const Icon = item.icon

                return (
                  <motion.article
                    key={item.title}
                    variants={fadeUp}
                    className="group bg-white p-7 transition-colors duration-300 hover:bg-[#061735] md:p-8"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-[#eaf6ff] text-[#168fd0] transition-colors duration-300 group-hover:bg-white/10 group-hover:text-[#29b6f6]">
                      <Icon size={21} strokeWidth={1.5} />
                    </div>

                    <h3 className="mt-7 font-display text-lg font-semibold text-[#061735] transition-colors duration-300 group-hover:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 font-body text-sm leading-6 text-[#061735]/50 transition-colors duration-300 group-hover:text-white/50">
                      {item.text}
                    </p>
                  </motion.article>
                )
              })}
            </motion.div>

            <p className="mx-auto mt-10 max-w-3xl text-center font-body text-base leading-7 text-[#061735]/55">
              Our objective is not only to complete a test or commissioning
              activity, but to help improve the long-term reliability, safety
              and performance of the client&apos;s electrical system.
            </p>
          </div>
        </section>

        {/* =========================================================
            FOUNDER
        ========================================================== */}
        <section className="bg-[#061735] py-20 lg:py-28">
          <div className="site-container">
            <div className="mb-10">
              <SectionLabel light>From the founder</SectionLabel>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden border border-white/10 bg-[#050f23] lg:grid lg:grid-cols-[0.72fr_1.28fr]"
            >
              <div className="relative min-h-[420px] overflow-hidden lg:min-h-[650px]">
                <FounderPortrait />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#050f23]/85 via-transparent to-transparent"
                />

                <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                  <p className="font-display text-2xl font-bold text-white">
                    Mr. M. R. Rathi
                  </p>

                  <p className="mt-2 font-body text-sm font-semibold text-[#29b6f6]">
                    Founder & Principal Engineer
                  </p>

                  <p className="mt-2 max-w-sm font-body text-xs leading-5 text-white/45">
                    Electro Mech Engineers
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-between p-8 md:p-12 lg:p-14">
                <div>
                  <Quote
                    size={40}
                    strokeWidth={1.2}
                    className="text-[#c8a45c]"
                  />

                  <blockquote className="mt-8 max-w-4xl font-display text-2xl font-medium leading-[1.3] tracking-[-0.025em] text-white md:text-3xl">
                    When Electro Mech Engineers was established, our objective
                    was straightforward: to provide industries with dependable
                    electrical testing and protection engineering backed by
                    sound technical knowledge and responsible field practices.
                  </blockquote>

                  <div className="mt-9 space-y-6">
                    <p className="font-body text-sm leading-7 text-white/50 md:text-base">
                      Over the years, electrical systems have become more
                      advanced, but the fundamentals of our work remain
                      unchanged: accuracy, safety, reliability and
                      accountability. Every relay tested, every protection
                      setting reviewed and every system commissioned has a
                      direct impact on the reliability of our client&apos;s
                      operations.
                    </p>

                    <p className="font-body text-sm leading-7 text-white/50 md:text-base">
                      Our growth has been built on long-term relationships,
                      practical engineering experience and the trust placed in
                      us by our clients. As we move forward, our commitment is
                      to continue strengthening our technical capabilities while
                      delivering engineering solutions that industries can
                      depend on.
                    </p>
                  </div>
                </div>

                <div className="mt-12 border-t border-white/10 pt-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="font-display text-lg font-semibold text-white">
                        Mr. M. R. Rathi
                      </p>

                      <p className="mt-1 font-body text-xs text-white/40">
                        Founder & Principal Engineer
                      </p>
                    </div>

                    <p className="font-body text-xs text-white/30">
                      Testing · Commissioning · Protection Engineering
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            STATS STRIP
        ========================================================== */}
        <section className="border-y border-[#061735]/10 bg-white">
          <div className="site-container">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon

                return (
                  <motion.div
                    key={stat.label}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    className={`p-6 md:p-8 ${
                      index < 2 ? 'border-b md:border-b-0' : ''
                    } ${
                      index !== stats.length - 1
                        ? 'border-r border-[#061735]/10'
                        : ''
                    }`}
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className="text-[#168fd0]"
                    />

                    <strong className="mt-5 block font-display text-3xl font-bold tracking-[-0.035em] text-[#061735] md:text-4xl">
                      {stat.value}
                    </strong>

                    <span className="mt-2 block font-body text-xs text-[#061735]/45">
                      {stat.label}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}
        <section className="bg-[#f5f7fa] py-20 lg:py-24">
          <div className="site-container">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative overflow-hidden bg-[#168fd0] px-7 py-12 md:px-10 lg:flex lg:items-center lg:justify-between lg:px-14 lg:py-14"
            >
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
              />

              <div className="relative z-10 max-w-3xl">
                <span className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
                  Work with Electro Mech
                </span>

                <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-white md:text-5xl">
                  Need support for your next electrical engineering project?
                </h2>

                <p className="mt-5 max-w-2xl font-body text-base leading-7 text-white/70">
                  Talk to our team about testing, commissioning, protection,
                  power-system studies, retrofitting or technical consultancy.
                </p>
              </div>

              <Link
                to="/contact"
                className="group relative z-10 mt-8 inline-flex w-fit shrink-0 items-center gap-3 rounded-sm bg-white px-7 py-4 font-body text-sm font-semibold text-[#061735] no-underline transition-all duration-300 hover:bg-[#061735] hover:text-white lg:ml-12 lg:mt-0"
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

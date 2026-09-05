import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Award,
  Users,
  Target,
  Lightbulb,
  CheckCircle2,
  MapPin,
} from 'lucide-react'

import { company, stats, reasons, locations } from '../data/data'

import PageHero from '../components/PageHero'
import SectionIntro from '../components/SectionIntro'

/* --------------------------------
   ANIMATIONS
--------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

/* --------------------------------
   HELPERS
--------------------------------- */

function getStat(stat) {
  if (typeof stat === 'object') {
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

/* --------------------------------
   ABOUT PAGE
--------------------------------- */

function About() {
  return (
    <>
      <Helmet>
        <title>About Electro Mech Engineers | Electrical Engineering</title>
        <meta
          name="description"
          content="Learn about Electro Mech Engineers, an electrical consulting engineering company focused on testing, commissioning, protection, performance, safety and continuity."
        />
        <meta
          name="keywords"
          content="about Electro Mech Engineers, electrical consulting engineers, electrical engineering company, testing commissioning, electrical protection, Navi Mumbai"
        />
        <meta property="og:title" content="About Electro Mech Engineers" />
        <meta property="og:description" content={company.tagline} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.electromechengineers.com/about" />
      </Helmet>

      <main className="overflow-hidden">

        {/* =================================
            HERO
        ================================== */}

        <PageHero
          eyebrow="About us"
          title="Powering industries with precision."
          copy="An engineering-led electrical consulting partner focused on protection, performance, safety and continuity."
          image="/assets/about.png"
        />

        {/* =================================
            COMPANY POSITIONING
        ================================== */}

        <section className="bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-12 xl:px-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20"
            >

              {/* CONTENT */}
              <motion.div variants={fadeUp}>
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-[#168fd0]">
                  The Electro Mech approach
                </span>

                <h2 className="mt-7 max-w-[760px] text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-[#061735] sm:text-5xl lg:text-[3.6rem]">
                  Engineering depth.
                  <span className="block text-[#168fd0]">Field discipline.</span>
                  Customer focus.
                </h2>

                <p className="mt-8 max-w-[600px] text-base leading-7 text-black/55 lg:text-lg">
                  The company profile positions Electro Mech Engineers as an
                  electrical consulting engineering firm delivering testing,
                  commissioning, engineering, studies and maintenance
                  solutions for critical electrical assets.
                </p>

                <p className="mt-5 max-w-[600px] text-base leading-7 text-black/55 lg:text-lg">
                  Our approach brings engineering knowledge and practical
                  field execution together to help clients operate
                  electrical systems with greater confidence.
                </p>

                <Link
                  to="/services"
                  className="group mt-9 inline-flex w-fit items-center gap-3 border-b border-[#061735]/20 pb-2 text-sm font-semibold tracking-wide text-[#061735] no-underline transition-colors duration-300 hover:border-[#c8a45c] hover:text-[#168fd0]"
                >
                  Explore capabilities
                  <ArrowRight
                    size={17}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>

              {/* VISUAL */}
              <motion.div variants={fadeUp} className="relative">
                <div className="relative aspect-[4/4.6] overflow-hidden bg-[#061735]">
                  <img
                    src="/assets/about.png"
                    alt="Electrical engineers inspecting high-voltage substation equipment"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#061735]/75 via-transparent to-transparent"
                  />

                  <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between text-white">
                    <div>
                      <span className="text-[0.62rem] uppercase tracking-[0.2em] text-white/50">
                        Engineering discipline
                      </span>
                      <p className="mt-2 text-xl font-semibold">Precision in the field.</p>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20 bg-white/5 backdrop-blur-sm">
                      <ShieldCheck size={18} strokeWidth={1.4} />
                    </div>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* =================================
            COMPANY NUMBERS
        ================================== */}

        <section className="border-y border-white/10 bg-[#061735]">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-12 xl:px-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={stagger}
              className="grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4"
            >
              {stats.map((stat) => {
                const { value, suffix, label } = getStat(stat)
                return (
                  <motion.div
                    key={label}
                    variants={fadeUp}
                    className="group px-6 py-9 transition-colors duration-300 hover:bg-white/[0.03] sm:px-8 lg:px-10 lg:py-11"
                  >
                    <strong className="flex items-baseline text-4xl font-semibold tracking-tight text-white lg:text-5xl">
                      {value}
                      <em className="not-italic text-[#c8a45c]">{suffix}</em>
                    </strong>
                    <span className="mt-2 block text-[0.68rem] font-medium uppercase tracking-[0.18em] text-white/45">
                      {label}
                    </span>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* =================================
            ENGINEERING PHILOSOPHY
        ================================== */}

        <section className="bg-[#f5f7f9] py-24 lg:py-32">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-12 xl:px-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
            >
              <SectionIntro
                eyebrow="Engineering philosophy"
                title="Built around the realities of electrical systems."
                copy="Good engineering is more than a calculation or a test result. It is about understanding the asset, identifying risk and turning technical information into dependable action."
              />

              <div className="mt-14 grid gap-px overflow-hidden border border-[#061735]/10 bg-[#061735]/10 md:grid-cols-3">
                {[
                  [Target, '01', 'Purpose-driven engineering', 'Every engineering activity begins with the operating requirement and the outcome the electrical system needs to deliver.'],
                  [Lightbulb, '02', 'Practical technical decisions', 'Testing and analysis should lead to information that engineers and operators can actually use.'],
                  [ShieldCheck, '03', 'Safety-led execution', 'Electrical work demands discipline, controlled execution and attention to safety throughout the project lifecycle.'],
                ].map(([Icon, num, title, desc]) => (
                  <motion.article
                    key={num}
                    variants={fadeUp}
                    className="group relative bg-white p-7 transition-all duration-500 hover:bg-[#061735] md:min-h-[330px] md:p-9"
                  >
                    <div className="flex h-11 w-11 items-center justify-center border border-[#061735]/10 text-[#168fd0] transition-colors duration-300 group-hover:border-white/15 group-hover:bg-white/5 group-hover:text-[#c8a45c]">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>

                    <span className="mt-8 block text-[0.68rem] font-semibold tracking-[0.18em] text-[#061735]/30 transition-colors duration-300 group-hover:text-white/25">
                      {num}
                    </span>

                    <h3 className="mt-3 text-xl font-semibold text-[#061735] transition-colors duration-300 group-hover:text-white">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-black/50 transition-colors duration-300 group-hover:text-white/55">
                      {desc}
                    </p>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* =================================
            OUR STRENGTHS
        ================================== */}

        <section className="bg-[#050f23] py-24 text-white lg:py-32">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-12 xl:px-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
            >
              <SectionIntro
                light
                eyebrow="Our strengths"
                title="Experience backed by execution."
                copy="The company profile highlights experienced professionals, advanced technology, safety-first execution, timely delivery, quality assurance and long-term customer relationships."
              />

              <div className="mt-16 grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

                {/* LEFT */}
                <motion.div variants={fadeUp} className="border-b border-white/10 pb-8 lg:border-b-0">
                  <div className="flex items-start text-[6rem] font-semibold leading-none tracking-[-0.04em] text-white md:text-[8rem]">
                    20
                    <span className="mt-2 text-3xl text-[#c8a45c] md:text-5xl">+</span>
                  </div>

                  <h3 className="mt-6 text-xl font-medium text-white">
                    Years of engineering perspective.
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/50">
                    Combining technical expertise with field experience to
                    support critical electrical infrastructure.
                  </p>
                </motion.div>

                {/* RIGHT */}
                <div className="border-t border-white/10">
                  {reasons.map((reasonItem, index) => {
                    const { title, description } = getReason(reasonItem)
                    return (
                      <motion.div
                        variants={fadeUp}
                        className="group grid gap-3 border-b border-white/10 py-7 transition-colors duration-300 hover:bg-white/[0.03] md:grid-cols-[56px_1fr_24px] md:items-start md:gap-5"
                        key={title}
                      >
                        <span className="text-[0.65rem] tracking-[0.18em] text-white/25">
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <div>
                          <h3 className="text-lg font-medium text-white">{title}</h3>
                          <p className="mt-2 max-w-xl text-sm leading-6 text-white/50">
                            {description}
                          </p>
                        </div>

                        <CheckCircle2
                          size={20}
                          className="mt-1 shrink-0 text-white/20 transition-colors duration-300 group-hover:text-[#c8a45c]"
                        />
                      </motion.div>
                    )
                  })}
                </div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* =================================
            PAN INDIA PRESENCE
        ================================== */}

        <section className="bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-12 xl:px-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
            >
              <SectionIntro
                eyebrow="Our footprint"
                title="Pan India service network."
                copy="Electro Mech Engineers serves projects across India, supporting clients with electrical engineering and field services."
              />

              <div className="mt-14 grid gap-6 lg:grid-cols-[1.45fr_0.55fr]">

                {/* LOCATIONS VISUAL */}
                <motion.div
                  variants={fadeUp}
                  className="relative min-h-[420px] overflow-hidden border border-[#061735]/10 bg-[#061735] p-8 md:p-12"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:56px_56px]"
                  />

                  <span className="relative text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#29b6f6]">
                    Service locations
                  </span>

                  <div className="relative mt-8 flex flex-wrap gap-3">
                    {locations.map((location) => (
                      <span
                        key={location}
                        className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/85 backdrop-blur-sm transition-colors duration-300 hover:border-[#c8a45c]/50 hover:bg-white/10"
                      >
                        <MapPin size={14} className="text-[#c8a45c]" />
                        {location}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* STATS */}
                <motion.div
                  variants={fadeUp}
                  className="grid divide-y divide-[#061735]/10 border border-[#061735]/10 bg-[#f5f7f9] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-1 lg:divide-x-0 lg:divide-y"
                >
                  {stats.map((stat) => {
                    const { value, suffix, label } = getStat(stat)
                    return (
                      <div key={label} className="px-7 py-6">
                        <strong className="flex items-baseline text-2xl font-semibold text-[#061735]">
                          {value}
                          <em className="not-italic text-[#168fd0]">{suffix}</em>
                        </strong>
                        <span className="mt-1 block text-[0.65rem] font-medium uppercase tracking-[0.16em] text-black/40">
                          {label}
                        </span>
                      </div>
                    )
                  })}
                </motion.div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* =================================
            WHY CLIENTS CHOOSE US
        ================================== */}

        <section className="bg-[#f5f7f9] py-24 lg:py-32">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-12 xl:px-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
            >
              <SectionIntro
                eyebrow="Why clients choose us"
                title="A relationship built beyond the project."
                copy="Technical capability matters. So do responsiveness, communication, quality and accountability."
              />

              <div className="mt-14 grid gap-px border border-[#061735]/10 bg-[#061735]/10 md:grid-cols-3">
                {[
                  [Users, 'Customer focused', 'Building long-term relationships through clear communication and dependable support.'],
                  [Award, 'Quality driven', 'Maintaining engineering discipline and attention to quality throughout project execution.'],
                  [ShieldCheck, 'Safety conscious', 'Treating safety as an essential part of responsible electrical engineering execution.'],
                ].map(([Icon, title, desc]) => (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    className="group relative bg-white p-8 transition-all duration-500 hover:bg-[#061735] lg:p-10"
                  >
                    <Icon
                      size={25}
                      strokeWidth={1.5}
                      className="text-[#168fd0] transition-colors duration-300 group-hover:text-[#c8a45c]"
                    />
                    <h3 className="mt-6 text-lg font-medium text-[#061735] transition-colors duration-300 group-hover:text-white">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-black/50 transition-colors duration-300 group-hover:text-white/55">
                      {desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* =================================
            CTA
        ================================== */}

        <section className="bg-[#061735] py-20 lg:py-24">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-12 xl:px-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative overflow-hidden border border-white/10 px-7 py-10 md:px-10 lg:flex lg:items-center lg:justify-between lg:px-14 lg:py-12"
            >
              <div>
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-[#168fd0]">
                  Work with Electro Mech
                </span>

                <h2 className="mt-4 max-w-lg text-2xl font-semibold leading-tight tracking-tight text-white md:text-3xl">
                  Engineering dependable electrical systems starts with the
                  right partner.
                </h2>
              </div>

              <Link
                to="/contact"
                className="group relative z-10 mt-8 inline-flex w-fit shrink-0 items-center gap-3 border border-white/20 bg-white px-6 py-4 text-sm font-semibold text-[#061735] no-underline transition-all duration-300 hover:border-[#c8a45c] hover:bg-[#c8a45c] lg:ml-12 lg:mt-0"
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
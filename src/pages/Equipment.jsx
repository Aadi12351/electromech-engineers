import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  Gauge,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Wrench,
} from 'lucide-react'

import {
  company,
  equipment,
} from '../data/data'

import PageHero from '../components/PageHero'
import SectionIntro from '../components/SectionIntro'
import EquipmentCard from '../components/EquipmentCard'

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const capabilityItems = [
  {
    number: '01',
    icon: Gauge,
    title: 'Measurement',
    copy: 'Electrical parameters are measured using equipment suited to the specific asset and test requirement.',
  },
  {
    number: '02',
    icon: Activity,
    title: 'Diagnostics',
    copy: 'Diagnostic tools help engineers identify abnormal conditions and understand equipment performance.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Verification',
    copy: 'Testing supports verification of protection, insulation, electrical integrity and operating readiness.',
  },
]

const checks = [
  'Appropriate test methodology',
  'Accurate measurement',
  'Disciplined field execution',
  'Clear technical reporting',
]

function Equipment() {
  const [query, setQuery] = useState('')

  const filteredEquipment = useMemo(() => {
    const searchTerm = query.trim().toLowerCase()

    if (!searchTerm) return equipment

    return equipment.filter(([name, description]) => (
      name.toLowerCase().includes(searchTerm) ||
      description.toLowerCase().includes(searchTerm)
    ))
  }, [query])

  return (
    <>
      <Helmet>
        <title>
          Testing Equipment | Electro Mech Engineers
        </title>

        <meta
          name="description"
          content="Explore electrical testing and diagnostic equipment used by Electro Mech Engineers for transformer testing, protection systems, power quality, insulation testing and electrical diagnostics."
        />

        <meta
          name="keywords"
          content="electrical testing equipment, relay test kit, micro ohmmeter, transformer turns ratio tester, SFRA analyzer, power quality analyzer, tan delta testing, insulation resistance tester"
        />

        <meta
          property="og:title"
          content="Testing Equipment | Electro Mech Engineers"
        />

        <meta
          property="og:description"
          content={company.tagline}
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://www.electromechengineers.com/equipment"
        />
      </Helmet>

      <main className="overflow-hidden">
        {/* =========================================================
            HERO
        ========================================================== */}

        <PageHero
          eyebrow="Equipment"
          title="Advanced tools. Accurate decisions."
          copy="A practical toolkit for testing, diagnostics, commissioning and engineering verification."
          image="/assets/Equipmensts_hero.png"
        />

        {/* =========================================================
            EQUIPMENT CATALOGUE
        ========================================================== */}

        <section className="bg-[#f5f7f9] py-24 lg:py-32">
          <div className="site-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
            >
              <div className="flex flex-col gap-10 border-b border-[#061735]/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
                <motion.div variants={fadeUp} className="max-w-3xl">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="h-px w-10 bg-[#c8a45c]" />
                    <span className="font-mono text-[0.6rem] font-medium uppercase tracking-[0.24em] text-[#168fd0]">
                      Equipment catalogue
                    </span>
                  </div>

                  <h2 className="font-display text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.045em] text-[#061735] sm:text-5xl lg:text-[4.25rem]">
                    Search our
                    <span className="block text-[#168fd0]">
                      testing toolkit.
                    </span>
                  </h2>

                  <p className="mt-6 max-w-2xl font-body text-[0.98rem] leading-7 text-slate-500">
                    Explore equipment used across electrical testing,
                    diagnostics, commissioning and engineering activities.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="w-full lg:max-w-[360px]"
                >
                  <label
                    htmlFor="equipment-search"
                    className="mb-3 block font-mono text-[0.55rem] uppercase tracking-[0.2em] text-[#061735]/35"
                  >
                    Find equipment
                  </label>

                  <div className="flex items-center border-b border-[#061735]/25 transition-colors duration-300 focus-within:border-[#168fd0]">
                    <Search
                      size={18}
                      strokeWidth={1.5}
                      className="shrink-0 text-[#061735]/35"
                    />

                    <input
                      id="equipment-search"
                      type="search"
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="Search equipment..."
                      aria-label="Search testing equipment"
                      className="h-12 w-full bg-transparent px-3 font-body text-sm text-[#061735] placeholder:text-[#061735]/30 focus:outline-none"
                    />

                    {query && (
                      <button
                        type="button"
                        onClick={() => setQuery('')}
                        className="font-mono text-[0.55rem] uppercase tracking-[0.14em] text-[#061735]/35 transition-colors hover:text-[#168fd0]"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </motion.div>
              </div>

              <motion.div
                variants={fadeUp}
                className="flex items-center justify-between border-b border-[#061735]/10 py-5"
              >
                <span className="font-mono text-[0.56rem] uppercase tracking-[0.18em] text-[#061735]/35">
                  Showing{' '}
                  <strong className="text-[#061735]">
                    {filteredEquipment.length}
                  </strong>{' '}
                  {filteredEquipment.length === 1 ? 'item' : 'items'}
                </span>

                <span className="hidden font-mono text-[0.53rem] uppercase tracking-[0.18em] text-[#061735]/25 sm:block">
                  Technical equipment directory
                </span>
              </motion.div>

              {filteredEquipment.length > 0 ? (
                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredEquipment.map(([name, description]) => {
                    const originalIndex = equipment.findIndex(
                      ([equipmentName]) => equipmentName === name
                    )

                    return (
                      <EquipmentCard
                        key={name}
                        name={name}
                        description={description}
                        index={originalIndex}
                      />
                    )
                  })}
                </div>
              ) : (
                <motion.div
                  variants={fadeUp}
                  className="mt-10 flex min-h-[320px] flex-col items-center justify-center border border-[#061735]/10 bg-white px-6 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center border border-[#061735]/10">
                    <Search
                      size={23}
                      strokeWidth={1.4}
                      className="text-[#168fd0]"
                    />
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.03em] text-[#061735]">
                    No equipment found
                  </h3>

                  <p className="mt-2 max-w-md font-body text-sm leading-6 text-slate-500">
                    We couldn't find equipment matching "{query}".
                  </p>

                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    className="group mt-7 inline-flex items-center gap-3 border-b border-[#061735]/20 pb-2 font-body text-sm font-semibold text-[#061735] transition-colors hover:border-[#c8a45c] hover:text-[#168fd0]"
                  >
                    View all equipment
                    <ArrowRight
                      size={16}
                      strokeWidth={1.5}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            TESTING CAPABILITY
        ========================================================== */}

        <section className="bg-[#050f23] py-24 text-white lg:py-32">
          <div className="site-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
            >
              <SectionIntro
                light
                eyebrow="Testing capability"
                title="The right instrument for the right measurement."
                copy="Reliable engineering decisions depend on appropriate test methods, suitable instruments and disciplined field execution."
              />

              <div className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
                {capabilityItems.map(({ number, icon: Icon, title, copy }) => (
                  <motion.article
                    key={number}
                    variants={fadeUp}
                    className="group relative min-h-[330px] bg-[#061735] p-8 transition-colors duration-500 hover:bg-[#0a2148] lg:p-10"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center border border-white/10 transition-colors duration-300 group-hover:border-[#c8a45c]/50">
                        <Icon
                          size={24}
                          strokeWidth={1.4}
                          className="text-[#29b6f6] transition-colors group-hover:text-[#c8a45c]"
                        />
                      </div>

                      <span className="font-mono text-[0.57rem] tracking-[0.2em] text-white/25">
                        {number}
                      </span>
                    </div>

                    <div className="absolute bottom-8 left-8 right-8 lg:bottom-10 lg:left-10 lg:right-10">
                      <span className="mb-5 block h-px w-8 bg-[#c8a45c] transition-all duration-500 group-hover:w-14" />

                      <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-white">
                        {title}
                      </h3>

                      <p className="mt-4 max-w-sm font-body text-sm leading-6 text-white/45">
                        {copy}
                      </p>
                    </div>

                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c8a45c] transition-all duration-500 group-hover:w-full" />
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            EQUIPMENT IMAGE / ENGINEERING
        ========================================================== */}

        <section className="bg-white py-24 lg:py-32">
          <div className="site-container">
            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="relative min-h-[500px] overflow-hidden bg-[#061735]">
                  <img
                    src="/assets/equipment.jpg"
                    alt="Electrical testing and diagnostic equipment"
                    loading="lazy"
                    className="h-full min-h-[500px] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061735]/85 via-[#061735]/10 to-transparent" />

                  <div className="absolute left-7 top-7 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#c8a45c]" />
                    <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-white/45">
                      Testing & diagnostics
                    </span>
                  </div>

                  <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">
                    <div>
                      <span className="font-mono text-[0.52rem] uppercase tracking-[0.18em] text-white/40">
                        Instrumentation
                      </span>
                      <p className="mt-2 font-display text-2xl font-semibold tracking-[-0.03em] text-white">
                        Data becomes insight.
                      </p>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center border border-white/15 bg-white/5 backdrop-blur-sm">
                      <Wrench
                        size={19}
                        strokeWidth={1.4}
                        className="text-[#c8a45c]"
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 hidden h-24 w-24 border-b border-l border-[#c8a45c]/50 lg:block" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
              >
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#c8a45c]" />
                  <span className="font-mono text-[0.6rem] font-medium uppercase tracking-[0.24em] text-[#168fd0]">
                    Engineering confidence
                  </span>
                </div>

                <h2 className="max-w-2xl font-display text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.045em] text-[#061735] sm:text-5xl lg:text-[4.05rem]">
                  Equipment is only part of the
                  <span className="block text-[#168fd0]">
                    engineering process.
                  </span>
                </h2>

                <p className="mt-8 max-w-xl font-body text-[1rem] leading-7 text-slate-500">
                  Test instruments generate data. Engineering experience turns
                  that data into meaningful information about an electrical
                  asset or system.
                </p>

                <div className="mt-8 border-t border-[#061735]/10">
                  {checks.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 border-b border-[#061735]/10 py-4"
                    >
                      <span className="font-mono text-[0.53rem] tracking-[0.18em] text-[#061735]/25">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <CheckCircle2
                        size={18}
                        strokeWidth={1.4}
                        className="shrink-0 text-[#168fd0]"
                      />

                      <span className="font-body text-sm font-medium text-[#061735]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/services"
                  className="group mt-9 inline-flex items-center gap-3 border-b border-[#061735]/20 pb-2 font-body text-sm font-semibold text-[#061735] no-underline transition-colors duration-300 hover:border-[#c8a45c] hover:text-[#168fd0]"
                >
                  Explore our services
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CTA
        ========================================================== */}

        <section className="bg-[#061735] py-20 lg:py-24">
          <div className="site-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative overflow-hidden border border-white/10 px-7 py-10 md:px-10 lg:flex lg:items-center lg:justify-between lg:px-14 lg:py-12"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.055] bg-[linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] bg-[size:42px_42px]"
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-[#c8a45c]" />
                  <span className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-[#29b6f6]">
                    Need testing support?
                  </span>
                </div>

                <h2 className="mt-5 max-w-3xl font-display text-[2.3rem] font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-4xl lg:text-[3.5rem]">
                  Tell us about your equipment
                  <span className="block text-[#29b6f6]">
                    and testing requirement.
                  </span>
                </h2>
              </div>

              <Link
                to="/contact"
                className="group relative z-10 mt-8 inline-flex w-fit shrink-0 items-center gap-3 border border-white/20 bg-white px-6 py-4 font-body text-sm font-semibold text-[#061735] no-underline transition-all duration-300 hover:border-[#c8a45c] hover:bg-[#c8a45c] lg:ml-12 lg:mt-0"
              >
                Discuss your requirement
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

export default Equipment

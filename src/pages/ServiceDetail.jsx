import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  FileCheck2,
  Wrench,
  Zap,
} from 'lucide-react'

import {
  company,
  services,
} from '../data/data'

import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import SectionIntro from '../components/SectionIntro'

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

const process = [
  {
    number: '01',
    icon: FileCheck2,
    title: 'Defined methodology',
    copy: 'Establish the appropriate technical procedure and scope before execution.',
  },
  {
    number: '02',
    icon: Wrench,
    title: 'Technical execution',
    copy: 'Apply appropriate instruments, engineering practices and field discipline.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Safety-led delivery',
    copy: 'Maintain controlled execution with safety and quality as essential priorities.',
  },
  {
    number: '04',
    icon: CheckCircle2,
    title: 'Clear technical results',
    copy: 'Deliver understandable results and practical recommendations for the next engineering decision.',
  },
]

const benefits = [
  {
    number: '01',
    title: 'Accurate decisions',
    copy: 'Technical testing and engineering work structured to support informed decisions.',
  },
  {
    number: '02',
    title: 'Traceable results',
    copy: 'Clear documentation and technical reporting help maintain visibility across the project.',
  },
  {
    number: '03',
    title: 'Practical recommendations',
    copy: 'Findings are translated into actions that can support maintenance, commissioning or improvement.',
  },
  {
    number: '04',
    title: 'Lifecycle support',
    copy: 'Engineering support can extend from planning through testing, execution and commissioning.',
  },
]

function ServiceDetail() {
  const { slug } = useParams()

  const service =
    services.find((item) => item.id === slug) || services[0]

  if (!service) return null

  const relatedServices = services
    .filter((item) => item.id !== service.id)
    .slice(0, 3)

  return (
    <>
      <SEO
        title={`${service.title} | Electro Mech Engineers | Mumbai`}
        description={`${service.short} Electro Mech Engineers provides industrial electrical testing, protection engineering and commissioning support from Mumbai across India.`}
        path={`/services/${service.id}`}
        image={service.image}
        keywords={[
          service.title,
          `${service.title} Mumbai`,
          'industrial electrical testing',
          'numerical relay coordination',
          'substation commissioning up to 132kV',
          'relay setting calculations',
        ]}
        service={service}
      />

      <main className="overflow-hidden">
        {/* =========================================================
            HERO
        ========================================================== */}

        <PageHero
          eyebrow="Service detail"
          title={service.title}
          copy={service.short}
          image={service.image}
          imageAlt={`${service.title} — electrical engineering service by Electro Mech Engineers`}
        />

        {/* =========================================================
            MAIN SERVICE CONTENT
        ========================================================== */}

        <section className="bg-white py-24 lg:py-32">
          <div className="site-container">
            <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#c8a45c]" />
                  <span className="font-mono text-[0.6rem] font-medium uppercase tracking-[0.24em] text-[#168fd0]">
                    How we help
                  </span>
                </div>

                <h2 className="max-w-2xl font-display text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.045em] text-[#061735] sm:text-5xl lg:text-[4.15rem]">
                  Engineering that is practical
                  <span className="block text-[#168fd0]">
                    in the field.
                  </span>
                </h2>

                <p className="mt-8 max-w-2xl font-body text-[1rem] leading-7 text-slate-500 lg:text-[1.05rem]">
                  Our team combines engineering design, testing discipline and
                  execution experience to support the complete lifecycle of
                  electrical assets.
                </p>

                <p className="mt-5 max-w-2xl font-body text-[0.98rem] leading-7 text-slate-500">
                  {service.short}
                </p>

                <p className="mt-5 max-w-2xl font-body text-[0.98rem] leading-7 text-slate-500">
                  The focus is on accurate technical work, disciplined
                  execution and clear results that can support dependable
                  electrical operation.
                </p>

                <Link
                  to="/contact"
                  className="group mt-9 inline-flex items-center gap-3 border-b border-[#061735]/20 pb-2 font-body text-sm font-semibold text-[#061735] no-underline transition-colors duration-300 hover:border-[#c8a45c] hover:text-[#168fd0]"
                >
                  Discuss this capability
                  <ArrowRight
                    size={17}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="relative"
              >
                <div className="relative min-h-[500px] overflow-hidden bg-[#061735]">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full min-h-[500px] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061735] via-[#061735]/15 to-transparent" />

                  <div className="absolute left-7 top-7 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#c8a45c]" />
                    <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-white/45">
                      Technical capability
                    </span>
                  </div>

                  <div className="absolute bottom-7 left-7 right-7">
                    <div className="flex h-12 w-12 items-center justify-center border border-white/15 bg-white/5 backdrop-blur-sm">
                      <Zap
                        size={20}
                        strokeWidth={1.4}
                        className="text-[#c8a45c]"
                      />
                    </div>

                    <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.03em] text-white">
                      Reliable by design.
                    </h3>

                    <p className="mt-2 font-body text-sm leading-6 text-white/50">
                      Built around precision, protection and performance.
                    </p>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 border-b border-r border-[#c8a45c]/50 lg:block" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================
            ENGINEERING PROCESS
        ========================================================== */}

        <section className="bg-[#050f23] py-24 text-white lg:py-32">
          <div className="site-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
            >
              <SectionIntro
                light
                eyebrow="Our methodology"
                title="A disciplined approach to technical work."
                copy="Every engagement is structured around clear methodology, accurate results, safe execution and actionable technical information."
              />

              <div className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
                {process.map(({ number, icon: Icon, title, copy }) => (
                  <motion.article
                    key={number}
                    variants={fadeUp}
                    className="group relative min-h-[320px] bg-[#061735] p-7 transition-colors duration-500 hover:bg-[#0a2148] lg:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center border border-white/10 transition-colors duration-300 group-hover:border-[#c8a45c]/50">
                        <Icon
                          size={21}
                          strokeWidth={1.4}
                          className="text-[#29b6f6] transition-colors group-hover:text-[#c8a45c]"
                        />
                      </div>

                      <span className="font-mono text-[0.57rem] tracking-[0.2em] text-white/25">
                        {number}
                      </span>
                    </div>

                    <div className="absolute bottom-7 left-7 right-7 lg:bottom-8 lg:left-8 lg:right-8">
                      <span className="mb-5 block h-px w-8 bg-[#c8a45c] transition-all duration-500 group-hover:w-14" />

                      <h3 className="font-display text-xl font-semibold tracking-[-0.025em] text-white">
                        {title}
                      </h3>

                      <p className="mt-3 font-body text-sm leading-6 text-white/45">
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
            SERVICE BENEFITS
        ========================================================== */}

        <section className="bg-[#f5f7f9] py-24 lg:py-32">
          <div className="site-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
            >
              <SectionIntro
                eyebrow="What you can expect"
                title="Engineering focused on useful outcomes."
                copy="The objective is not simply to complete a technical activity. It is to produce information and execution that helps the electrical system perform more reliably."
              />

              <div className="mt-14 grid gap-px border border-[#061735]/10 bg-[#061735]/10 sm:grid-cols-2 lg:grid-cols-4">
                {benefits.map(({ number, title, copy }) => (
                  <motion.article
                    key={number}
                    variants={fadeUp}
                    className="group relative min-h-[270px] bg-white p-7 transition-all duration-500 hover:bg-[#061735] lg:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[0.57rem] tracking-[0.2em] text-[#061735]/25 group-hover:text-white/30">
                        {number}
                      </span>

                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.4}
                        className="text-[#061735]/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#c8a45c]"
                      />
                    </div>

                    <div className="absolute bottom-7 left-7 right-7 lg:bottom-8 lg:left-8 lg:right-8">
                      <span className="mb-4 block h-px w-8 bg-[#c8a45c] transition-all duration-500 group-hover:w-14" />

                      <h3 className="font-display text-xl font-semibold tracking-[-0.025em] text-[#061735] group-hover:text-white">
                        {title}
                      </h3>

                      <p className="mt-3 font-body text-sm leading-6 text-slate-500 group-hover:text-white/45">
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
            RELATED SERVICES
        ========================================================== */}

        <section className="bg-white py-24 lg:py-32">
          <div className="site-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
            >
              <SectionIntro
                eyebrow="Explore further"
                title="Related engineering capabilities."
                copy="Explore other areas where Electro Mech Engineers can support electrical systems."
              />

              <div className="mt-14 border-t border-[#061735]/10">
                {relatedServices.map((related, index) => (
                  <motion.div
                    key={related.id}
                    variants={fadeUp}
                    className="group grid gap-5 border-b border-[#061735]/10 py-7 transition-colors duration-300 hover:bg-[#f5f7f9] md:grid-cols-[70px_1fr_170px_48px] md:items-center md:px-5"
                  >
                    <span className="font-mono text-[0.57rem] tracking-[0.2em] text-[#061735]/30">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div>
                      <h3 className="font-display text-xl font-semibold tracking-[-0.025em] text-[#061735] transition-colors group-hover:text-[#168fd0]">
                        {related.title}
                      </h3>

                      <p className="mt-2 max-w-2xl font-body text-sm leading-6 text-slate-500">
                        {related.short}
                      </p>
                    </div>

                    <Link
                      to={`/services/${related.id}`}
                      className="group/link hidden w-fit items-center gap-2 font-mono text-[0.55rem] font-medium uppercase tracking-[0.16em] text-[#061735]/45 no-underline transition-colors hover:text-[#168fd0] md:inline-flex"
                    >
                      Explore service
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.4}
                        className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </Link>

                    <Link
                      to={`/services/${related.id}`}
                      aria-label={`Explore ${related.title}`}
                      className="flex h-11 w-11 items-center justify-center border border-[#061735]/10 text-[#061735]/35 no-underline transition-all duration-300 hover:border-[#c8a45c] hover:bg-[#061735] hover:text-white"
                    >
                      <ArrowRight size={17} strokeWidth={1.4} />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            PROJECT CTA
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
                    Need this capability?
                  </span>
                </div>

                <h2 className="mt-5 max-w-3xl font-display text-[2.3rem] font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-4xl lg:text-[3.5rem]">
                  Discuss your {service.title.toLowerCase()} requirement
                  <span className="block text-[#29b6f6]">
                    with our team.
                  </span>
                </h2>
              </div>

              <Link
                to="/contact"
                className="group relative z-10 mt-8 inline-flex w-fit shrink-0 items-center gap-3 border border-white/20 bg-white px-6 py-4 font-body text-sm font-semibold text-[#061735] no-underline transition-all duration-300 hover:border-[#c8a45c] hover:bg-[#c8a45c] lg:ml-12 lg:mt-0"
              >
                Start a project
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

export default ServiceDetail

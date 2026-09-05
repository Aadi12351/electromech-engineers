import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Handshake,
  Building2,
  ShieldCheck,
  Star,
} from 'lucide-react'

import {
  company,
  clients,
  reviews,
} from '../data/data'

import PageHero from '../components/PageHero'
import SectionIntro from '../components/SectionIntro'
import ClientCard from '../components/ClientCard'
import ReviewCard from '../components/ReviewCard'

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

const partnershipFeatures = [
  {
    number: '01',
    icon: Handshake,
    title: 'Long-term relationships',
    copy: 'Focused on creating dependable technical partnerships.',
  },
  {
    number: '02',
    icon: Building2,
    title: 'Critical industries',
    copy: 'Supporting applications where electrical reliability matters.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Engineering accountability',
    copy: 'Technical work backed by disciplined execution.',
  },
]

function Clients() {
  const marqueeClients = [...clients, ...clients]

  return (
    <>
      <Helmet>
        <title>
          Clients & Reviews | Electro Mech Engineers
        </title>

        <meta
          name="description"
          content="Explore the client network and company-provided reviews featured by Electro Mech Engineers across power, infrastructure, manufacturing and technology."
        />

        <meta
          name="keywords"
          content="Electro Mech Engineers clients, electrical engineering clients, electrical testing clients, engineering partnerships, electrical commissioning India"
        />

        <meta
          property="og:title"
          content="Clients & Reviews | Electro Mech Engineers"
        />

        <meta
          property="og:description"
          content={company.tagline}
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://www.electromechengineers.com/clients"
        />
      </Helmet>

      <main className="overflow-hidden">
        {/* =========================================================
            HERO
        ========================================================== */}

        <PageHero
          eyebrow="Trusted by industry"
          title="Strong relationships. Trusted partnerships."
          copy="The company profile showcases clients across power, infrastructure, manufacturing and technology."
          image="/assets/substation.png"
        />

        {/* =========================================================
            CLIENT NETWORK
        ========================================================== */}

        <section className="bg-white py-24 lg:py-32">
          <div className="site-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
            >
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                <motion.div variants={fadeUp}>
                  <SectionIntro
                    eyebrow="Client network"
                    title="Industry names. Engineering accountability."
                    copy="Our client relationships reflect the need for dependable electrical engineering, testing, commissioning and technical support across critical applications."
                  />
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="flex items-center gap-4 border-l border-[#061735]/10 pl-5 lg:mb-2"
                >
                  <span className="font-display text-4xl font-semibold tracking-[-0.05em] text-[#061735]">
                    {clients.length}
                    <span className="text-[#168fd0]">+</span>
                  </span>

                  <span className="max-w-[120px] font-mono text-[0.55rem] uppercase leading-5 tracking-[0.16em] text-[#061735]/40">
                    Client relationships
                  </span>
                </motion.div>
              </div>

              <motion.div
                variants={stagger}
                className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              >
                {clients.map((client, index) => (
                  <ClientCard
                    key={client}
                    name={client}
                    index={index}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            PARTNERSHIP STATEMENT
        ========================================================== */}

        <section className="bg-[#050f23] py-24 text-white lg:py-32">
          <div className="site-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24"
            >
              <motion.div
                variants={fadeUp}
                className="lg:pr-8"
              >
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#c8a45c]" />
                  <span className="font-mono text-[0.6rem] font-medium uppercase tracking-[0.24em] text-[#29b6f6]">
                    Beyond a vendor relationship
                  </span>
                </div>

                <h2 className="max-w-2xl font-display text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-5xl lg:text-[4.15rem]">
                  Engineering partnerships
                  <span className="block text-[#29b6f6]">
                    built around reliability.
                  </span>
                </h2>

                <p className="mt-8 max-w-xl font-body text-[0.98rem] leading-7 text-white/45 lg:text-[1.02rem]">
                  Electrical systems demand more than one-time intervention.
                  Strong technical relationships are built through
                  communication, accurate engineering, disciplined execution
                  and dependable support.
                </p>

                <Link
                  to="/services"
                  className="group mt-9 inline-flex items-center gap-3 border-b border-white/20 pb-2 font-body text-sm font-semibold text-white no-underline transition-colors duration-300 hover:border-[#c8a45c] hover:text-[#c8a45c]"
                >
                  Explore our capabilities
                  <ArrowRight
                    size={17}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>

              <motion.div
                variants={stagger}
                className="border-t border-white/10"
              >
                {partnershipFeatures.map(({ number, icon: Icon, title, copy }) => (
                  <motion.article
                    key={number}
                    variants={fadeUp}
                    className="group grid gap-6 border-b border-white/10 py-8 md:grid-cols-[56px_52px_1fr] md:items-start"
                  >
                    <span className="font-mono text-[0.58rem] tracking-[0.2em] text-white/25">
                      {number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center border border-white/10 transition-colors duration-300 group-hover:border-[#c8a45c]/50">
                      <Icon
                        size={21}
                        strokeWidth={1.4}
                        className="text-[#29b6f6] transition-colors group-hover:text-[#c8a45c]"
                      />
                    </div>

                    <div>
                      <h3 className="font-display text-xl font-semibold tracking-[-0.025em] text-white">
                        {title}
                      </h3>

                      <p className="mt-2 max-w-xl font-body text-sm leading-6 text-white/40">
                        {copy}
                      </p>
                    </div>

                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c8a45c]" />
                  </motion.article>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            REVIEWS
        ========================================================== */}

        <section className="bg-[#f5f7f9] py-24 lg:py-32">
          <div className="site-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
            >
              <SectionIntro
                eyebrow="Client reviews"
                title="Proven in performance."
                copy="The testimonials below are company-provided review content from the supplied Electro Mech Engineers profile."
              />

              <motion.div
                variants={fadeUp}
                className="mt-12 flex flex-col gap-5 border-y border-[#061735]/10 py-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center bg-[#061735]">
                    <Star
                      size={21}
                      strokeWidth={1.4}
                      className="text-[#c8a45c]"
                    />
                  </div>

                  <div>
                    <strong className="block font-display text-lg font-semibold tracking-[-0.02em] text-[#061735]">
                      Client experience
                    </strong>

                    <span className="font-mono text-[0.54rem] uppercase tracking-[0.16em] text-[#061735]/35">
                      Feedback from the supplied company profile
                    </span>
                  </div>
                </div>

                <span className="font-mono text-[0.56rem] uppercase tracking-[0.18em] text-[#061735]/30">
                  {reviews.length} testimonials
                </span>
              </motion.div>

              <motion.div
                variants={stagger}
                className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
              >
                {reviews.map((review, index) => (
                  <motion.div
                    key={`${review.company}-${index}`}
                    variants={fadeUp}
                  >
                    <ReviewCard review={review} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            CLIENT MARQUEE
        ========================================================== */}

        <section className="overflow-hidden bg-white py-24 lg:py-28">
          <div className="site-container">
            <SectionIntro
              eyebrow="Our network"
              title="Relationships that keep moving forward."
              copy="A continuously moving client wall adds a premium editorial layer to the client experience."
            />
          </div>

          <div className="mt-14 overflow-hidden border-y border-[#061735]/10 py-7">
            <div className="client-marquee flex w-max">
              {marqueeClients.map((client, index) => (
                <div
                  key={`${client}-${index}`}
                  className="flex items-center"
                >
                  <span className="whitespace-nowrap px-8 font-display text-lg font-semibold tracking-[-0.02em] text-[#061735]/45 transition-colors hover:text-[#061735] md:px-12 md:text-xl"
                  >
                    {client}
                  </span>

                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c8a45c]"
                  />
                </div>
              ))}
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
                    Let's work together
                  </span>
                </div>

                <h2 className="mt-5 max-w-3xl font-display text-[2.3rem] font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-4xl lg:text-[3.5rem]">
                  Have an electrical engineering requirement?
                </h2>
              </div>

              <Link
                to="/contact"
                className="group relative z-10 mt-8 inline-flex w-fit shrink-0 items-center gap-3 border border-white/20 bg-white px-6 py-4 font-body text-sm font-semibold text-[#061735] no-underline transition-all duration-300 hover:border-[#c8a45c] hover:bg-[#c8a45c] lg:ml-12 lg:mt-0"
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

export default Clients
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  ArrowDown,
  ShieldCheck,
  Award,
  Users,
  Target,
  Lightbulb,
  CheckCircle2,
  MapPin,
  Quote,
} from 'lucide-react'

import {
  company,
  stats,
  reasons,
  locations,
  reviews,
} from '../data/data'

import PageHero from '../components/PageHero'


const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
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
      delayChildren: 0.04,
    },
  },
}


function getStat(stat) {
  if (typeof stat === 'object') {
    return {
      value: stat.value,
      suffix: stat.suffix || '',
      label: stat.label,
    }
  }

  return {
    value: stat[0],
    suffix: '',
    label: stat[1],
  }
}


function getReason(reason) {
  if (typeof reason === 'object' && !Array.isArray(reason)) {
    return {
      title: reason.title,
      description: reason.description,
    }
  }

  return {
    title: reason[0],
    description: reason[1],
  }
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

  return {
    name: 'Client',
    role: '',
    company: '',
    text: String(review),
  }
}


function About() {
  const [reviewIndex, setReviewIndex] = useState(0)

  const reviewItems = Array.isArray(reviews)
    ? reviews.map(getReview)
    : []

  const currentReview =
    reviewItems[reviewIndex] || {
      name: 'Client',
      role: '',
      company: '',
      text: '',
    }


  const previousReview = () => {
    setReviewIndex((current) =>
      current === 0
        ? reviewItems.length - 1
        : current - 1
    )
  }


  const nextReview = () => {
    setReviewIndex((current) =>
      current === reviewItems.length - 1
        ? 0
        : current + 1
    )
  }


  return (
    <>
      <Helmet>
        <title>
          About Electro Mech Engineers | Electrical Engineering
        </title>

        <meta
          name="description"
          content="Learn about Electro Mech Engineers, an electrical consulting engineering company focused on testing, commissioning, protection, performance, safety and continuity."
        />

        <meta
          name="keywords"
          content="about Electro Mech Engineers, electrical consulting engineers, electrical engineering company, testing commissioning, electrical protection, Navi Mumbai"
        />

        <meta
          property="og:title"
          content="About Electro Mech Engineers"
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

        {/* =========================================================
            HERO
        ========================================================== */}

        <PageHero
          eyebrow="About us"
          title="Powering industries with precision."
          copy="An engineering-led electrical consulting partner focused on protection, performance, safety and continuity."
          image="/assets/about.png"
        />


        {/* =========================================================
            OPENING STATEMENT
        ========================================================== */}

        <section className="bg-[#061735] py-24 text-white md:py-32 lg:py-40">

          <div className="site-container">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="max-w-6xl"
            >

              <div className="flex items-center gap-3">

                <span className="h-px w-10 bg-[#c8a45c]" />

                <span
                  className="
                    font-mono
                    text-[0.62rem]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#29b6f6]
                  "
                >
                  Who we are
                </span>

              </div>


              <h2
                className="
                  mt-8
                  text-4xl
                  font-semibold
                  leading-[1]
                  tracking-[-0.045em]
                  sm:text-5xl
                  md:text-6xl
                  lg:text-[5.2rem]
                "
              >
                Electrical engineering is not
                <span className="text-white/35">
                  {' '}just about equipment.
                </span>
              </h2>


              <p
                className="
                  mt-9
                  max-w-3xl
                  text-base
                  leading-7
                  text-white/50
                  md:text-lg
                  md:leading-8
                "
              >
                It is about understanding how an entire system
                behaves, where risk can appear, and what needs
                to happen in the field to keep critical
                infrastructure dependable.
              </p>

            </motion.div>


            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="
                mt-16
                grid
                gap-px
                overflow-hidden
                border
                border-white/10
                bg-white/10
                md:grid-cols-3
              "
            >

              {[
                [
                  Target,
                  'Understand',
                  'Start with the operating requirement, the asset and the actual engineering problem.',
                ],
                [
                  Lightbulb,
                  'Solve',
                  'Turn testing, analysis and engineering knowledge into practical technical decisions.',
                ],
                [
                  ShieldCheck,
                  'Deliver',
                  'Execute with discipline, safety and attention to the reliability of the finished system.',
                ],
              ].map(([Icon, title, text]) => (

                <motion.article
                  key={title}
                  variants={fadeUp}
                  className="
                    bg-[#061735]
                    p-7
                    transition-colors
                    duration-500
                    hover:bg-white/[0.04]
                    md:min-h-[250px]
                    md:p-9
                  "
                >

                  <Icon
                    size={25}
                    strokeWidth={1.4}
                    className="text-[#c8a45c]"
                  />

                  <h3
                    className="
                      mt-10
                      text-xl
                      font-semibold
                    "
                  >
                    {title}
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-sm
                      text-sm
                      leading-6
                      text-white/45
                    "
                  >
                    {text}
                  </p>

                </motion.article>

              ))}

            </motion.div>

          </div>

        </section>


        {/* =========================================================
            COMPANY POSITIONING — EDITORIAL SPLIT
        ========================================================== */}

        <section className="bg-[#f5f4f0] py-24 lg:py-32">

          <div className="site-container">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="
                grid
                items-center
                gap-14
                lg:grid-cols-[1fr_1fr]
                lg:gap-20
                xl:gap-28
              "
            >

              {/* IMAGE */}

              <motion.div
                variants={fadeUp}
                className="relative order-2 lg:order-1"
              >

                <div
                  className="
                    group
                    relative
                    aspect-[0.94]
                    overflow-hidden
                    rounded-[10px]
                    bg-[#061735]
                  "
                >

                  <img
                    src="/assets/about.png"
                    alt="Electrical engineers inspecting high-voltage substation equipment"
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-1000
                      group-hover:scale-[1.04]
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#061735]/85
                      via-transparent
                      to-transparent
                    "
                  />


                  <div
                    className="
                      absolute
                      bottom-7
                      left-7
                      right-7
                      flex
                      items-end
                      justify-between
                      text-white
                    "
                  >

                    <div>

                      <span
                        className="
                          font-mono
                          text-[0.58rem]
                          uppercase
                          tracking-[0.2em]
                          text-white/45
                        "
                      >
                        Engineering discipline
                      </span>

                      <p className="mt-2 text-xl font-semibold">
                        Precision in the field.
                      </p>

                    </div>


                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        bg-white/5
                        backdrop-blur-sm
                      "
                    >
                      <ShieldCheck
                        size={18}
                        strokeWidth={1.4}
                      />
                    </div>

                  </div>

                </div>

              </motion.div>


              {/* CONTENT */}

              <motion.div
                variants={fadeUp}
                className="order-1 lg:order-2"
              >

                <div className="flex items-center gap-3">

                  <span className="h-px w-10 bg-[#c8a45c]" />

                  <span
                    className="
                      font-mono
                      text-[0.62rem]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-[#168fd0]
                    "
                  >
                    The Electro Mech approach
                  </span>

                </div>


                <h2
                  className="
                    mt-7
                    max-w-3xl
                    text-4xl
                    font-semibold
                    leading-[1.02]
                    tracking-[-0.04em]
                    text-[#061735]
                    sm:text-5xl
                    lg:text-[4rem]
                  "
                >
                  Engineering depth.
                  <span className="block text-[#168fd0]">
                    Field discipline.
                  </span>
                  <span className="block text-[#061735]/25">
                    Customer focus.
                  </span>
                </h2>


                <p
                  className="
                    mt-8
                    max-w-xl
                    text-base
                    leading-7
                    text-[#061735]/55
                    lg:text-lg
                    lg:leading-8
                  "
                >
                  The company profile positions Electro Mech
                  Engineers as an electrical consulting
                  engineering firm delivering testing,
                  commissioning, engineering, studies and
                  maintenance solutions for critical
                  electrical assets.
                </p>


                <p
                  className="
                    mt-5
                    max-w-xl
                    text-base
                    leading-7
                    text-[#061735]/55
                    lg:text-lg
                    lg:leading-8
                  "
                >
                  Our approach brings engineering knowledge
                  and practical field execution together to
                  help clients operate electrical systems with
                  greater confidence.
                </p>


                <Link
                  to="/services"
                  className="
                    group
                    mt-9
                    inline-flex
                    items-center
                    gap-3
                    border-b
                    border-[#061735]/20
                    pb-2
                    text-sm
                    font-semibold
                    tracking-wide
                    text-[#061735]
                    no-underline
                    transition-colors
                    duration-300
                    hover:border-[#c8a45c]
                    hover:text-[#168fd0]
                  "
                >
                  Explore capabilities

                  <ArrowRight
                    size={17}
                    strokeWidth={1.5}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                </Link>

              </motion.div>

            </motion.div>

          </div>

        </section>


        {/* =========================================================
            NUMBERS
        ========================================================== */}

        <section className="border-y border-white/10 bg-[#061735]">

          <div className="site-container">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="
                grid
                divide-y
                divide-white/10
                sm:grid-cols-2
                sm:divide-x
                sm:divide-y-0
                lg:grid-cols-4
              "
            >

              {stats.map((stat) => {

                const {
                  value,
                  suffix,
                  label,
                } = getStat(stat)

                return (
                  <motion.div
                    key={label}
                    variants={fadeUp}
                    className="
                      px-5
                      py-9
                      transition-colors
                      duration-300
                      hover:bg-white/[0.03]
                      sm:px-7
                      lg:px-9
                      lg:py-11
                    "
                  >

                    <strong
                      className="
                        flex
                        items-baseline
                        text-4xl
                        font-semibold
                        tracking-tight
                        text-white
                        lg:text-5xl
                      "
                    >
                      {value}

                      <em
                        className="
                          not-italic
                          text-[#c8a45c]
                        "
                      >
                        {suffix}
                      </em>
                    </strong>


                    <span
                      className="
                        mt-2
                        block
                        font-mono
                        text-[0.6rem]
                        uppercase
                        tracking-[0.18em]
                        text-white/40
                      "
                    >
                      {label}
                    </span>

                  </motion.div>
                )
              })}

            </motion.div>

          </div>

        </section>


        {/* =========================================================
            WHY WE WORK DIFFERENTLY
        ========================================================== */}

        <section className="bg-white py-24 lg:py-32">

          <div className="site-container">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
            >

              <div
                className="
                  grid
                  gap-8
                  lg:grid-cols-[0.65fr_1.35fr]
                  lg:items-end
                  lg:gap-20
                "
              >

                <motion.div variants={fadeUp}>

                  <div className="flex items-center gap-3">

                    <span className="h-px w-10 bg-[#c8a45c]" />

                    <span
                      className="
                        font-mono
                        text-[0.62rem]
                        font-semibold
                        uppercase
                        tracking-[0.22em]
                        text-[#168fd0]
                      "
                    >
                      Why Electro Mech
                    </span>

                  </div>

                </motion.div>


                <motion.div variants={fadeUp}>

                  <h2
                    className="
                      max-w-5xl
                      text-4xl
                      font-semibold
                      leading-[1]
                      tracking-[-0.04em]
                      text-[#061735]
                      sm:text-5xl
                      lg:text-[4.4rem]
                    "
                  >
                    Technical capability is
                    <span className="text-[#168fd0]">
                      {' '}only half the job.
                    </span>
                  </h2>

                </motion.div>

              </div>


              <div
                className="
                  mt-16
                  grid
                  gap-px
                  overflow-hidden
                  border
                  border-[#061735]/10
                  bg-[#061735]/10
                  md:grid-cols-2
                "
              >

                {reasons.map((reasonItem, index) => {

                  const {
                    title,
                    description,
                  } = getReason(reasonItem)

                  return (
                    <motion.article
                      key={title}
                      variants={fadeUp}
                      className="
                        group
                        bg-white
                        p-7
                        transition-colors
                        duration-500
                        hover:bg-[#061735]
                        md:min-h-[220px]
                        md:p-9
                      "
                    >

                      <div
                        className="
                          flex
                          items-start
                          justify-between
                        "
                      >

                        <span
                          className="
                            font-mono
                            text-[0.62rem]
                            tracking-[0.18em]
                            text-[#061735]/25
                            transition-colors
                            group-hover:text-white/25
                          "
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>


                        <CheckCircle2
                          size={20}
                          strokeWidth={1.3}
                          className="
                            text-[#168fd0]
                            transition-colors
                            group-hover:text-[#c8a45c]
                          "
                        />

                      </div>


                      <h3
                        className="
                          mt-9
                          text-xl
                          font-semibold
                          text-[#061735]
                          transition-colors
                          group-hover:text-white
                        "
                      >
                        {title}
                      </h3>


                      <p
                        className="
                          mt-3
                          max-w-lg
                          text-sm
                          leading-6
                          text-black/45
                          transition-colors
                          group-hover:text-white/50
                        "
                      >
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

          <section
            className="
              relative
              overflow-hidden
              bg-[#050f23]
              py-24
              text-white
              md:py-32
              lg:py-40
            "
          >

            <div
              aria-hidden="true"
              className="
                absolute
                inset-0
                opacity-[0.055]
                bg-[linear-gradient(rgba(255,255,255,0.65)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.65)_1px,transparent_1px)]
                bg-[size:56px_56px]
              "
            />


            <div className="site-container relative z-10">

              <div
                className="
                  grid
                  gap-12
                  lg:grid-cols-[0.55fr_1.45fr]
                  lg:gap-20
                "
              >

                {/* LEFT */}

                <div>

                  <div className="flex items-center gap-3">

                    <span className="h-px w-10 bg-[#c8a45c]" />

                    <span
                      className="
                        font-mono
                        text-[0.62rem]
                        font-semibold
                        uppercase
                        tracking-[0.22em]
                        text-[#29b6f6]
                      "
                    >
                      Client perspective
                    </span>

                  </div>


                  <h2
                    className="
                      mt-7
                      max-w-lg
                      text-4xl
                      font-semibold
                      leading-[1]
                      tracking-[-0.04em]
                      sm:text-5xl
                      lg:text-[4rem]
                    "
                  >
                    The work matters
                    <span className="block text-white/30">
                      because it works.
                    </span>
                  </h2>


                  <p
                    className="
                      mt-6
                      max-w-md
                      text-base
                      leading-7
                      text-white/40
                    "
                  >
                    A few words from the clients whose
                    projects and requirements shape the way
                    we engineer.
                  </p>


                  <div className="mt-10 flex items-center gap-3">

                    <button
                      type="button"
                      onClick={previousReview}
                      aria-label="Previous client review"
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/15
                        bg-white/[0.03]
                        text-white/65
                        transition-all
                        duration-300
                        hover:border-[#c8a45c]
                        hover:bg-[#c8a45c]
                        hover:text-[#061735]
                      "
                    >
                      <ArrowLeft
                        size={17}
                        strokeWidth={1.4}
                      />
                    </button>


                    <button
                      type="button"
                      onClick={nextReview}
                      aria-label="Next client review"
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/15
                        bg-white/[0.03]
                        text-white/65
                        transition-all
                        duration-300
                        hover:border-[#c8a45c]
                        hover:bg-[#c8a45c]
                        hover:text-[#061735]
                      "
                    >
                      <ArrowRight
                        size={17}
                        strokeWidth={1.4}
                      />
                    </button>


                    <span
                      className="
                        ml-2
                        font-mono
                        text-[0.58rem]
                        tracking-[0.18em]
                        text-white/25
                      "
                    >
                      {String(reviewIndex + 1).padStart(2, '0')}
                      {' / '}
                      {String(reviewItems.length).padStart(2, '0')}
                    </span>

                  </div>

                </div>


                {/* RIGHT REVIEW */}

                <div
                  className="
                    relative
                    min-h-[390px]
                    border-t
                    border-white/10
                    pt-10
                    lg:min-h-[430px]
                    lg:border-l
                    lg:border-t-0
                    lg:pl-16
                    lg:pt-0
                  "
                >

                  <AnimatePresence mode="wait">

                    <motion.div
                      key={reviewIndex}
                      initial={{
                        opacity: 0,
                        x: 35,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        x: -35,
                      }}
                      transition={{
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >

                      <Quote
                        size={42}
                        strokeWidth={1}
                        className="text-[#c8a45c]"
                      />


                      <blockquote
                        className="
                          mt-8
                          max-w-4xl
                          text-2xl
                          font-medium
                          leading-[1.25]
                          tracking-[-0.025em]
                          text-white
                          sm:text-3xl
                          lg:text-[2.7rem]
                        "
                      >
                        “{currentReview.text}”
                      </blockquote>


                      <div
                        className="
                          mt-12
                          flex
                          items-end
                          justify-between
                          gap-6
                          border-t
                          border-white/10
                          pt-6
                        "
                      >

                        <div>

                          <p
                            className="
                              text-base
                              font-semibold
                              text-white
                            "
                          >
                            {currentReview.name}
                          </p>


                          {(currentReview.role ||
                            currentReview.company) && (

                            <p
                              className="
                                mt-1
                                font-mono
                                text-[0.58rem]
                                uppercase
                                tracking-[0.17em]
                                text-white/35
                              "
                            >
                              {[
                                currentReview.role,
                                currentReview.company,
                              ]
                                .filter(Boolean)
                                .join(' · ')}
                            </p>

                          )}

                        </div>


                        <span
                          className="
                            hidden
                            font-mono
                            text-[0.58rem]
                            uppercase
                            tracking-[0.18em]
                            text-white/20
                            sm:block
                          "
                        >
                          Client review
                        </span>

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

        <section className="bg-[#f5f4f0] py-24 lg:py-32">

          <div className="site-container">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
            >

              <div
                className="
                  grid
                  gap-8
                  lg:grid-cols-[0.55fr_1.45fr]
                  lg:gap-20
                "
              >

                <motion.div variants={fadeUp}>

                  <div className="flex items-center gap-3">

                    <span className="h-px w-10 bg-[#c8a45c]" />

                    <span
                      className="
                        font-mono
                        text-[0.62rem]
                        font-semibold
                        uppercase
                        tracking-[0.22em]
                        text-[#168fd0]
                      "
                    >
                      Our footprint
                    </span>

                  </div>

                </motion.div>


                <motion.div variants={fadeUp}>

                  <h2
                    className="
                      text-4xl
                      font-semibold
                      leading-[1]
                      tracking-[-0.04em]
                      text-[#061735]
                      sm:text-5xl
                      lg:text-[4.3rem]
                    "
                  >
                    Engineering support
                    <span className="text-[#168fd0]">
                      {' '}across India.
                    </span>
                  </h2>


                  <p
                    className="
                      mt-6
                      max-w-3xl
                      text-base
                      leading-7
                      text-[#061735]/50
                      md:text-lg
                      md:leading-8
                    "
                  >
                    Electro Mech Engineers serves projects
                    across India, supporting clients with
                    electrical engineering and field services.
                  </p>

                </motion.div>

              </div>


              <div
                className="
                  mt-14
                  grid
                  gap-5
                  lg:grid-cols-[1.45fr_0.55fr]
                "
              >

                <motion.div
                  variants={fadeUp}
                  className="
                    relative
                    min-h-[400px]
                    overflow-hidden
                    rounded-[10px]
                    bg-[#061735]
                    p-8
                    md:p-12
                  "
                >

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      opacity-[0.05]
                      bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
                      bg-[size:56px_56px]
                    "
                  />


                  <span
                    className="
                      relative
                      font-mono
                      text-[0.62rem]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-[#29b6f6]
                    "
                  >
                    Service locations
                  </span>


                  <div
                    className="
                      relative
                      mt-9
                      flex
                      flex-wrap
                      gap-3
                    "
                  >

                    {locations.map((location) => (

                      <span
                        key={location}
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-white/15
                          bg-white/5
                          px-4
                          py-2.5
                          text-sm
                          font-medium
                          text-white/80
                          backdrop-blur-sm
                          transition-colors
                          duration-300
                          hover:border-[#c8a45c]/50
                          hover:bg-white/10
                        "
                      >

                        <MapPin
                          size={14}
                          className="text-[#c8a45c]"
                        />

                        {location}

                      </span>

                    ))}

                  </div>

                </motion.div>


                <motion.div
                  variants={fadeUp}
                  className="
                    grid
                    divide-y
                    divide-[#061735]/10
                    overflow-hidden
                    rounded-[10px]
                    border
                    border-[#061735]/10
                    bg-white
                    sm:grid-cols-2
                    sm:divide-x
                    sm:divide-y-0
                    lg:grid-cols-1
                    lg:divide-x-0
                    lg:divide-y
                  "
                >

                  {stats.map((stat) => {

                    const {
                      value,
                      suffix,
                      label,
                    } = getStat(stat)

                    return (
                      <div
                        key={label}
                        className="px-7 py-6"
                      >

                        <strong
                          className="
                            flex
                            items-baseline
                            text-3xl
                            font-semibold
                            text-[#061735]
                          "
                        >
                          {value}

                          <em
                            className="
                              not-italic
                              text-[#168fd0]
                            "
                          >
                            {suffix}
                          </em>
                        </strong>


                        <span
                          className="
                            mt-1
                            block
                            font-mono
                            text-[0.58rem]
                            font-medium
                            uppercase
                            tracking-[0.16em]
                            text-black/35
                          "
                        >
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


        {/* =========================================================
            FINAL CTA
        ========================================================== */}

        <section className="bg-[#061735] py-20 lg:py-24">

          <div className="site-container">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="
                relative
                overflow-hidden
                rounded-[10px]
                border
                border-white/10
                bg-[#050f23]
                px-7
                py-12
                md:px-10
                lg:flex
                lg:items-center
                lg:justify-between
                lg:px-14
                lg:py-14
              "
            >

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  opacity-[0.05]
                  bg-[linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)]
                  bg-[size:48px_48px]
                "
              />


              <div className="relative z-10">

                <span
                  className="
                    font-mono
                    text-[0.62rem]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#29b6f6]
                  "
                >
                  Work with Electro Mech
                </span>


                <h2
                  className="
                    mt-4
                    max-w-3xl
                    text-3xl
                    font-semibold
                    leading-[1.05]
                    tracking-[-0.03em]
                    text-white
                    md:text-4xl
                    lg:text-[3.4rem]
                  "
                >
                  Engineering dependable electrical
                  systems starts with the right partner.
                </h2>

              </div>


              <Link
                to="/contact"
                className="
                  group
                  relative
                  z-10
                  mt-8
                  inline-flex
                  w-fit
                  shrink-0
                  items-center
                  gap-3
                  rounded-full
                  bg-[#c8a45c]
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  text-[#061735]
                  no-underline
                  transition-all
                  duration-300
                  hover:bg-white
                  lg:ml-12
                  lg:mt-0
                "
              >

                Start a conversation

                <ArrowUpRight
                  size={18}
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

        </section>

      </main>
    </>
  )
}

export default About

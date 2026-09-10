import React, { useRef, useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Factory,
  MapPin,
  Quote,
  ShieldCheck,
  Star,
  UsersRound,
  Wrench,
  Zap,
} from 'lucide-react'
import {
  company,
  stats,
  reasons,
  services,
  reviews,
} from '../data/data'

/* =========================================================
   ANIMATIONS
   One orchestrated reveal per section, not per element.
========================================================= */

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
  visible: { transition: { staggerChildren: 0.09 } },
}

/* =========================================================
   DATA HELPERS
   Keep backward compatibility with whatever shape data.js
   currently exports (array pairs or objects).
========================================================= */

const getStat = (stat) => {
  if (Array.isArray(stat)) return { value: stat[0], suffix: '', label: stat[1] }
  return { value: stat?.value, suffix: stat?.suffix || '', label: stat?.label }
}

/* =========================================================
   CLIENT REFERENCES
   ---------------------------------------------------------
   These are the company references used on the Home page.
   Replace the logo URLs later with your approved local
   high-resolution logo assets if required.
========================================================= */

const clientReferences = [
  {
    name: 'Hindustan Unilever Limited',
    logo: 'https://www.google.com/s2/favicons?domain=hul.co.in&sz=128',
  },
  {
    name: 'Aditya Birla Group',
    logo: 'https://www.google.com/s2/favicons?domain=adityabirla.com&sz=128',
  },
  {
    name: 'Essar',
    logo: 'https://www.google.com/s2/favicons?domain=essar.com&sz=128',
  },
  {
    name: 'Reliance',
    logo: 'https://www.google.com/s2/favicons?domain=reliance.com&sz=128',
  },
  {
    name: 'Dabur',
    logo: 'https://www.google.com/s2/favicons?domain=dabur.com&sz=128',
  },
  {
    name: 'Bhilosa Industries',
    logo: 'https://www.google.com/s2/favicons?domain=bhilosa.com&sz=128',
  },
  {
    name: 'BARC',
    logo: 'https://www.google.com/s2/favicons?domain=barc.gov.in&sz=128',
  },
  {
    name: 'Barco',
    logo: 'https://www.google.com/s2/favicons?domain=barco.com&sz=128',
  },
  {
    name: 'Four Seasons Hotel',
    logo: 'https://www.google.com/s2/favicons?domain=fourseasons.com&sz=128',
  },
  {
    name: 'Union Bank',
    logo: 'https://www.google.com/s2/favicons?domain=unionbankofindia.bank.in&sz=128',
  },
  {
    name: 'Larsen & Toubro',
    logo: 'https://www.google.com/s2/favicons?domain=larsentoubro.com&sz=128',
  },
  {
    name: 'Thermax Limited',
    logo: 'https://www.google.com/s2/favicons?domain=thermaxglobal.com&sz=128',
  },
  {
    name: 'Sona Alloys Private Limited',
    logo: 'https://placehold.co/128x128/f8f9fb/061735?text=SA',
  },
  {
    name: 'IFFCO',
    logo: 'https://www.google.com/s2/favicons?domain=iffco.in&sz=128',
  },
  {
    name: 'Maharashtra Industrial Development Corporation',
    logo: 'https://www.google.com/s2/favicons?domain=midcindia.org&sz=128',
  },
  {
    name: 'Jubilant Life Sciences',
    logo: 'https://www.google.com/s2/favicons?domain=jubilant.com&sz=128',
  },
  {
    name: 'NPCIL',
    logo: 'https://www.google.com/s2/favicons?domain=npcil.nic.in&sz=128',
  },
  {
    name: 'Naval Dockyard Mumbai',
    logo: 'https://www.google.com/s2/favicons?domain=indiannavy.nic.in&sz=128',
  },
  {
    name: 'Sahakarmaharshi Bhausaheb Thorat Sahakari Sakhar Karkhana Ltd.',
    logo: 'https://placehold.co/128x128/f8f9fb/061735?text=BT',
  },
  {
    name: 'Shri Dnyaneshwar Sahakari Sakhar Karkhana Ltd.',
    logo: 'https://placehold.co/128x128/f8f9fb/061735?text=SD',
  },
  {
    name: 'Hinduja Global Solutions',
    logo: 'https://www.google.com/s2/favicons?domain=hgs.cx&sz=128',
  },
  {
    name: 'Vinati Organics Limited',
    logo: 'https://www.google.com/s2/favicons?domain=vinatiorganics.com&sz=128',
  },
  {
    name: 'IndianOil',
    logo: 'https://www.google.com/s2/favicons?domain=iocl.com&sz=128',
  },
  {
    name: 'Mahanagar Gas',
    logo: 'https://www.google.com/s2/favicons?domain=mahanagargas.com&sz=128',
  },
  {
    name: 'Bharat Petroleum',
    logo: 'https://www.google.com/s2/favicons?domain=bpcl.in&sz=128',
  },
  {
    name: 'Galaxy',
    logo: 'https://www.google.com/s2/favicons?domain=galaxysurfactants.com&sz=128',
  },
  {
    name: 'Hindustan Petroleum',
    logo: 'https://www.google.com/s2/favicons?domain=hindustanpetroleum.com&sz=128',
  },
  {
    name: 'Schindler',
    logo: 'https://www.google.com/s2/favicons?domain=schindler.com&sz=128',
  },
]

/* =========================================================
   SERVICE ICONS
   data.js stores icon names so the same service data can be
   reused across the Home and Services pages.
========================================================= */

const serviceIcons = {
  ClipboardCheck: Zap,
  ShieldCheck,
  TowerControl: Zap,
  Activity: Zap,
  DraftingCompass: Wrench,
  Wrench,
}

/* =========================================================
   SMOOTH SERVICE CAROUSEL
   Tracks real scroll position so the dots and arrows stay
   accurate instead of firing on a fixed pixel guess.
========================================================= */

function ServiceCarousel() {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToIndex = useCallback((index) => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[index]
    if (!card) return
    track.scrollTo({ left: card.offsetLeft - 4, behavior: 'smooth' })
  }, [])

  const handleScroll = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const cards = Array.from(track.children)
    const center = track.scrollLeft + track.clientWidth / 2
    let closest = 0
    let closestDistance = Infinity
    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2
      const distance = Math.abs(cardCenter - center)
      if (distance < closestDistance) {
        closestDistance = distance
        closest = index
      }
    })
    setActiveIndex(closest)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    track.addEventListener('scroll', handleScroll, { passive: true })
    return () => track.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <div>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 scrollbar-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {services.map((service, index) => {
          const Icon = serviceIcons[service.icon] || Zap
          return (
            <article
              key={service.id}
              className="group relative min-w-[82vw] shrink-0 snap-start overflow-hidden rounded-sm bg-[#061735] sm:min-w-[360px] lg:min-w-[calc((100%-60px)/4)]"
            >
              <div className="relative h-[520px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#03132f] via-[#061735]/70 to-[#061735]/5" />

                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-sm border border-[#c8a45c]/70 bg-[#061735]/40 text-white backdrop-blur-sm">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  <h3 className="max-w-[280px] font-display text-2xl font-semibold leading-[1.08] tracking-[-0.02em] text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-[320px] font-body text-sm leading-6 text-white/65">
                    {service.short}
                  </p>

                  <Link
                    to={`/services/${service.id}`}
                    className="group/link mt-6 inline-flex items-center gap-2.5 border-b border-[#c8a45c] pb-1.5 font-body text-sm font-medium text-white no-underline"
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
          )
        })}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          {services.map((service, index) => (
            <button
              key={service.id}
              type="button"
              aria-label={`Go to ${service.title}`}
              onClick={() => scrollToIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-8 bg-[#168fd0]' : 'w-4 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous service"
            onClick={() => scrollToIndex(Math.max(activeIndex - 1, 0))}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-[#061735] transition-all duration-300 hover:border-[#168fd0] hover:bg-[#168fd0] hover:text-white"
          >
            <ArrowLeft size={17} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            aria-label="Next service"
            onClick={() => scrollToIndex(Math.min(activeIndex + 1, services.length - 1))}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#168fd0] bg-white text-[#168fd0] transition-all duration-300 hover:bg-[#168fd0] hover:text-white"
          >
            <ArrowRight size={17} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  )
}

/* =========================================================
   TESTIMONIAL SLIDER
   Auto-advances, pauses on interaction, one card at a time
   so quotes stay readable instead of competing for space.
========================================================= */

function TestimonialSlider() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % reviews.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [paused])

  const go = (nextIndex) => {
    setPaused(true)
    setIndex((nextIndex + reviews.length) % reviews.length)
  }

  const active = reviews[index]

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Quote
        size={64}
        strokeWidth={1}
        className="absolute -left-2 -top-6 text-[#c8a45c]/25 md:-left-4 md:-top-8"
      />

      <div className="relative min-h-[220px] pl-8 md:min-h-[180px] md:pl-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-5 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star
                  key={starIndex}
                  size={15}
                  strokeWidth={0}
                  className="fill-[#c8a45c] text-[#c8a45c]"
                />
              ))}
            </div>

            <p className="max-w-2xl font-display text-xl font-medium leading-[1.45] tracking-[-0.01em] text-[#061735] md:text-2xl">
              {active.quote}
            </p>

            <div className="mt-6">
              <p className="font-body text-sm font-semibold text-[#061735]">{active.person}</p>
              <p className="mt-0.5 font-body text-sm text-slate-500">{active.role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-9 flex items-center gap-6">
        <div className="flex items-center gap-2">
          {reviews.map((testimonial, dotIndex) => (
            <button
              key={`${testimonial.company}-${dotIndex}`}
              type="button"
              aria-label={`Show testimonial ${dotIndex + 1}`}
              onClick={() => go(dotIndex)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                dotIndex === index ? 'w-7 bg-[#168fd0]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => go(index - 1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-[#061735] transition-colors duration-300 hover:border-[#168fd0] hover:text-[#168fd0]"
          >
            <ArrowLeft size={15} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => go(index + 1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-[#061735] transition-colors duration-300 hover:border-[#168fd0] hover:text-[#168fd0]"
          >
            <ArrowRight size={15} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  )
}

/* =========================================================
   HOME
========================================================= */

function Home() {
  return (
    <>
<SEO
        title="Electro Mech Engineers | Industrial Electrical Testing & Commissioning Mumbai"
        description="Electro Mech Engineers is a Mumbai-based electrical engineering consultancy specialising in industrial electrical testing, protection relay testing, numerical relay coordination, power system studies and substation commissioning up to 132kV across India."
        path="/"
        image="/assets/hero.jpg"
        keywords={[
          'industrial electrical testing Mumbai',
          'electrical testing company Mumbai',
          'substation commissioning 132kV',
          'numerical relay coordination India',
          'electrical protection engineering',
        ]}
      />

      <main className="overflow-hidden">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative h-[100svh] min-h-[640px] overflow-hidden bg-[#061735]">
          <motion.div
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <img
              src="/assets/hero.jpg"
              alt="Electrical engineering and industrial infrastructure"
              className="h-full w-full object-cover object-center"
            />
          </motion.div>

          <div aria-hidden="true" className="absolute inset-0 bg-black/15" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#020b1d]/90 via-[#061735]/45 to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#020b1d] via-[#061735]/15 to-transparent"
          />

          <div className="relative z-10 flex h-full items-end">
            <div className="site-container w-full pb-24 pt-32 lg:pb-28">
              <div className="max-w-[920px]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-6 flex items-center gap-3"
                >
                  <span className="h-px w-10 bg-[#c8a45c]" />
                  <span className="font-body text-xs font-medium text-white/70">
                    {company.descriptor}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 45 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-[900px] font-display text-[3.2rem] font-semibold leading-[0.94] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[5.9rem] xl:text-[6.7rem]"
                >
                  Engineering the power behind industry.
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-8 flex flex-col gap-7 md:flex-row md:items-end md:gap-12"
                >
                  <p className="max-w-xl font-body text-[0.95rem] leading-7 text-white/60 md:text-base">
                    {company.tagline} Industrial electrical testing, numerical relay coordination and substation commissioning up to 132kV are delivered from our Mumbai base across India.
                  </p>

                  <div className="flex shrink-0 items-center gap-6">
                    <Link
                      to="/services"
                      className="group inline-flex w-fit items-center gap-3 border-b border-white/35 pb-2 font-body text-sm font-medium tracking-wide text-white no-underline transition-all duration-300 hover:border-[#c8a45c] hover:text-[#c8a45c]"
                    >
                      Explore our services
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>

                    <Link
                      to="/contact"
                      className="inline-flex w-fit shrink-0 items-center justify-center rounded-sm bg-[#c8a45c] px-6 py-3 font-body text-sm font-semibold tracking-wide text-[#061735] no-underline transition-colors duration-300 hover:bg-white"
                    >
                      Get in touch
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            STATS
        ====================================================== */}

        <section className="border-b border-black/10 bg-white">
          <div className="site-container">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {stats.map((stat, index) => {
                const { value, suffix, label } = getStat(stat)
                return (
                  <motion.div
                    key={`${label}-${index}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    className="border-b border-r border-black/10 px-5 py-8 last:border-r-0 md:border-b-0 md:px-7 md:py-10 lg:px-8"
                  >
                    <div className="font-display text-3xl font-bold tracking-[-0.035em] text-[#061735] md:text-4xl">
                      {value}{suffix}
                    </div>
                    <div className="mt-2 font-body text-[0.8rem] font-medium text-black/45">
                      {label}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            ABOUT
        ====================================================== */}

        <section className="bg-white py-16 lg:py-20">
          <div className="site-container">
            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="relative aspect-[4/4.6] overflow-hidden rounded-sm bg-[#061735]">
                  <img
                    src="/assets/about.png"
                    alt="Electrical engineers inspecting high-voltage substation equipment"
                    className="h-full w-full object-cover object-center"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#061735]/55 via-transparent to-transparent"
                  />
                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between border-t border-white/15 px-5 py-4">
                    <span className="font-body text-xs text-white/60">
                      Established in 2005
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="lg:pl-2"
              >
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#c8a45c]" />
                  <span className="font-body text-xs font-medium text-[#168fd0]">
                    About Electro Mech
                  </span>
                </div>

                <h2 className="max-w-[760px] font-display text-[2.6rem] font-semibold leading-[1] tracking-[-0.045em] text-[#061735] sm:text-5xl lg:text-[4.1rem]">
                  Reliability, protection and performance —
                  built into every project.
                </h2>

                <p className="mt-8 max-w-[650px] font-body text-[0.98rem] leading-7 text-slate-500 lg:text-[1.02rem]">
                  Electro Mech Engineers provides electrical consulting and
                  engineering services with a focus on practical field
                  requirements and dependable technical execution.
                </p>

                <div className="my-9 h-px w-full max-w-[650px] bg-slate-200" />

                <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="font-body text-xs font-medium text-slate-400">
                      Engineering focus
                    </p>
                    <p className="mt-2 max-w-[280px] font-body text-sm leading-6 text-[#061735]">
                      Testing. Protection. Engineering.
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

        {/* =====================================================
            SERVICES
        ====================================================== */}

        <section className="overflow-hidden bg-[#f8f9fb] py-16 lg:py-20">
          <div className="site-container">
            <div className="mb-10 max-w-[780px] lg:mb-12">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#168fd0]" />
                <span className="font-body text-xs font-medium text-[#168fd0]">
                  What we do
                </span>
              </div>

              <h2 className="font-display text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.045em] text-[#061735] sm:text-5xl lg:text-[4.25rem]">
                Engineering services for critical electrical systems.
              </h2>

              <p className="mt-7 max-w-[700px] font-body text-base leading-7 text-slate-500 lg:text-[1.02rem]">
                Our work covers testing and commissioning, relay protection, maintenance,
                retrofitting, electrical design and power-system studies for
                industrial plants, utilities and substations.
              </p>
            </div>

            <ServiceCarousel />
          </div>
        </section>

        {/* =====================================================
            CAPABILITIES
        ====================================================== */}

        <section className="bg-[#061735] py-16 md:py-20">
          <div className="site-container">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
              >
                <motion.span variants={fadeUp} className="font-body text-xs font-medium text-[#29b6f6]">
                  Built for the field
                </motion.span>

                <motion.h2
                  variants={fadeUp}
                  className="mt-6 max-w-xl font-display text-3xl font-bold leading-[1.06] tracking-[-0.04em] text-white md:text-5xl"
                >
                  Practical electrical engineering, from testing to protection.
                </motion.h2>

                <motion.p variants={fadeUp} className="mt-7 max-w-lg font-body text-base leading-8 text-white/45">
                  Our work is grounded in practical field testing, protection,
                  maintenance, retrofitting and engineering studies for electrical systems.
                </motion.p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
                className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2"
              >
                {reasons.slice(0, 4).map((reason) => {
                  const item = {
                    icon: Zap,
                    title: Array.isArray(reason) ? reason[0] : reason.title,
                    description: Array.isArray(reason) ? reason[1] : reason.description,
                  }
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.title}
                      variants={fadeUp}
                      className="group bg-[#061735] p-7 transition-colors duration-300 hover:bg-[#0a2145] md:p-9"
                    >
                      <Icon
                        size={27}
                        strokeWidth={1.35}
                        className="text-[#c8a45c] transition-transform duration-300 group-hover:scale-105"
                      />
                      <h3 className="mt-6 font-display text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 font-body text-sm leading-6 text-white/40">
                        {item.description}
                      </p>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CLIENT REVIEWS
        ====================================================== */}

        <section className="bg-white py-16 lg:py-20">
          <div className="site-container">
            <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#c8a45c]" />
                  <span className="font-body text-xs font-medium text-[#168fd0]">
                    Client feedback
                  </span>
                </div>

                <h2 className="font-display text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.04em] text-[#061735] sm:text-5xl">
                  Client feedback, with verified testimonials to follow.
                </h2>

                <p className="mt-6 max-w-md font-body text-[0.98rem] leading-7 text-slate-500">
                  Client testimonials are being collected and will be updated here
                  as approved feedback is received.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-sm border border-slate-200 bg-[#fbfaf8] px-7 py-8 md:px-10 md:py-10"
              >
                <TestimonialSlider />
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CLIENT REFERENCES
        ====================================================== */}

        <section
          className="overflow-hidden bg-[#f8f9fb] py-16 lg:py-20"
          aria-labelledby="client-references-heading"
        >
          <div className="site-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
            >
              <div>
                <span className="font-body text-xs font-medium text-[#168fd0]">
                  Selected company references
                </span>

                <h2
                  id="client-references-heading"
                  className="mt-3 font-display text-2xl font-semibold tracking-[-0.02em] text-[#061735] md:text-3xl"
                >
                  Organizations we have supported
                </h2>

                <p className="mt-3 max-w-2xl font-body text-sm leading-6 text-slate-500">
                  Selected organizations across industrial, infrastructure,
                  manufacturing, energy and critical electrical applications.
                </p>
              </div>

              <Link
                to="/clients"
                className="group inline-flex items-center gap-2 font-body text-sm font-medium text-[#061735] no-underline transition-colors hover:text-[#168fd0]"
              >
                View all company references
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
          </div>

          <div className="mt-12 overflow-hidden border-y border-black/10 bg-white py-8">
            <div className="client-marquee flex w-max items-center">
              {[...clientReferences, ...clientReferences].map(
                (client, index) => (
                  <div
                    key={`${client.name}-${index}`}
                    className="mx-7 flex h-20 min-w-[220px] items-center gap-4 md:mx-9 md:min-w-[250px]"
                  >
                    <div
                      className="
                        flex
                        h-12
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        border
                        border-[#061735]/[0.08]
                        bg-[#fbfcfd]
                        p-2
                      "
                    >
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        className="max-h-9 max-w-10 object-contain"
                        onError={(event) => {
                          event.currentTarget.style.display = 'none'

                          const fallback =
                            event.currentTarget.nextElementSibling

                          if (fallback) {
                            fallback.classList.remove('hidden')
                          }
                        }}
                      />

                      <span
                        className="
                          hidden
                          text-center
                          font-mono
                          text-[0.55rem]
                          font-semibold
                          tracking-[0.08em]
                          text-[#061735]/45
                        "
                      >
                        {client.name
                          .split(' ')
                          .map((word) => word[0])
                          .slice(0, 3)
                          .join('')}
                      </span>
                    </div>

                    <span
                      className="
                        max-w-[180px]
                        font-display
                        text-sm
                        font-semibold
                        leading-tight
                        tracking-[-0.01em]
                        text-[#061735]/65
                        transition-colors
                        duration-300
                        hover:text-[#168fd0]
                        md:max-w-[210px]
                        md:text-base
                      "
                    >
                      {client.name}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* =====================================================
            WHY ELECTRO MECH
            Reworked from a numbered checklist into a proof-led
            feature grid — each claim is paired with what it
            actually means for the client, not just a label.
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#061735] py-16 md:py-20">
          <div className="site-container relative z-10">

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-2xl text-center"
            >
              <span className="font-body text-xs font-medium text-[#29b6f6]">
                Why Electro Mech
              </span>

              <h2 className="mt-5 font-display text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl">
                Built around testing, protection and dependable field service.
              </h2>

              <p className="mt-5 font-body text-base leading-7 text-white/50">
                Our approach is grounded in practical testing, protection engineering,
                maintenance and technical support for electrical systems.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="mx-auto mt-10 grid max-w-5xl gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3"
            >
              {(reasons && reasons.length > 0
                ? reasons.slice(0, 6)
                : [
                    {
                      title: 'Field-first engineering',
                      description:
                        'Every recommendation is tested against real site conditions before it reaches a report.',
                    },
                    {
                      title: 'Audit-ready documentation',
                      description:
                        'Reports built to the standard your inspectors and insurers expect, every time.',
                    },
                    {
                      title: 'Zero-surprise scheduling',
                      description:
                        'We plan around your shutdown windows, not the other way around.',
                    },
                    {
                      title: 'Calibrated equipment',
                      description:
                        'Testing instruments maintained and calibrated to national standards.',
                    },
                    {
                      title: 'Experienced engineers',
                      description:
                        'Teams who have worked inside live plants, not just classrooms.',
                    },
                    {
                      title: 'Pan-India response',
                      description:
                        'Crews mobilised to site locations across the country within days.',
                    },
                  ]
              ).map((reason, index) => {
                const title = Array.isArray(reason) ? reason[0] : reason.title
                const description = Array.isArray(reason) ? reason[1] : reason.description
                return (
                  <motion.div
                    key={`${title}-${index}`}
                    variants={fadeUp}
                    className="group flex flex-col justify-between bg-[#061735] p-8 transition-colors duration-300 hover:bg-[#0a2145] md:p-9"
                  >
                    <div>
                      <h3 className="font-display text-lg font-semibold tracking-[-0.01em] text-white transition-colors duration-300 group-hover:text-[#29b6f6]">
                        {title}
                      </h3>
                      <p className="mt-3 font-body text-sm leading-6 text-white/45">
                        {description}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.5}
                      className="mt-6 text-white/20 transition-colors duration-300 group-hover:text-[#29b6f6]"
                    />
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
          <img
            src="/assets/cta-background.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-[#c8a45c]/75 mix-blend-multiply" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#c8a45c]/95 via-[#c8a45c]/72 to-[#c8a45c]/30"
          />

          <div className="site-container relative z-10 py-16 lg:py-20">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <span className="font-body text-xs font-medium text-black/50">
                  Start a conversation
                </span>

                <h2 className="mt-5 font-display text-3xl font-bold leading-[1.05] tracking-[-0.04em] text-black md:text-5xl">
                  Have an electrical engineering requirement?
                </h2>

                <p className="mt-5 max-w-2xl font-body text-base leading-7 text-black/55">
                  Tell us about your project, testing requirement or
                  engineering challenge.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-black px-7 py-4 font-body text-sm font-semibold tracking-wide text-white no-underline transition-all duration-300 hover:bg-[#061735]"
              >
                Contact Electro Mech
                <ArrowUpRight size={18} strokeWidth={1.7} />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default Home
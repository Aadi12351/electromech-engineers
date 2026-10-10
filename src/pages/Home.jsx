import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ClipboardCheck,
  DraftingCompass,
  Factory,
  MapPin,
  Quote,
  ShieldCheck,
  Star,
  UsersRound,
  Wrench,
  Zap,
} from 'lucide-react'

import SEO from '../components/SEO'
import { company, services, reviews } from '../data/data'

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
    },
  },
}

const HOME_STATS = [
  { value: '2005', label: 'Established' },
  { value: '132 kV', label: 'Substation Experience' },
  { value: '200+', label: 'Industrial Clients' },
  { value: 'Pan India', label: 'Project Exposure' },
]

const WHY_ITEMS = [
  {
    title: 'Experienced Professionals',
    description:
      'Hands-on engineering experience across industrial plants, substations and critical electrical systems.',
    icon: UsersRound,
  },
  {
    title: 'Safety First',
    description:
      'Safe execution and disciplined field practices remain central to every assignment.',
    icon: ShieldCheck,
  },
  {
    title: 'Quality Assurance',
    description:
      'Calibrated instruments and structured procedures support accurate, dependable results.',
    icon: ClipboardCheck,
  },
  {
    title: 'Advanced Technology',
    description:
      'Modern testing equipment and engineering tools support precise and efficient execution.',
    icon: DraftingCompass,
  },
  {
    title: 'Timely Delivery',
    description:
      'Projects are planned around client schedules, shutdown windows and operational priorities.',
    icon: Wrench,
  },
  {
    title: 'Customer Focused',
    description:
      'We work closely with clients to deliver practical solutions for real site requirements.',
    icon: Factory,
  },
]

const EQUIPMENT = [
  {
    title: 'Automatic Relay Test Kit',
    meta: 'Wuhan Doya · DYJB-PC3',
    image: '/assets/equipment/automatic-relay-test-kit.png',
  },
  {
    title: 'Breaker Time Test Kit',
    meta: 'SCOPE · SCOT M3K',
    image: '/assets/equipment/breaker-time-test-kit.png',
  },
  {
    title: 'Energy Meter Calibrator',
    meta: 'KoCoS · KI-5',
    image: '/assets/equipment/energy-meter-calibrator.png',
  },
  {
    title: 'Transformer Testing Board',
    meta: 'Electro Mech Engineers · 3P-200',
    image: '/assets/equipment/transformer-testing-board.png',
  },
  {
    title: 'Earth Megger',
    meta: 'MEXTECH · Field Testing',
    image: '/assets/equipment/earth-megger.png',
  },
]

const PROFILE_CLIENTS = [
  {
    name: 'Aditya Birla Science & Tech Co. Pvt. Ltd.',
    logo: '/assets/clients/aditya-birla.png',
  },
  {
    name: 'BEST Undertaking',
    logo: '/assets/clients/best.png',
  },
  {
    name: 'Bhabha Atomic Research Centre',
    logo: '/assets/clients/barc.png',
  },
  {
    name: 'CEAT',
    logo: '/assets/clients/ceat.png',
  },
  {
    name: 'Ferring Therapeutics Pvt. Ltd.',
    logo: '/assets/clients/ferring.png',
  },
  {
    name: 'Mumbai Metro One Pvt. Ltd.',
    logo: '/assets/clients/mumbai-metro-one.png',
  },
  {
    name: 'Bharat Serums and Vaccines Limited',
    logo: '/assets/clients/bharat-serums.png',
  },
  {
    name: 'Grindwell Norton Limited',
    logo: '/assets/clients/grindwell-norton.png',
  },
  {
    name: 'Dabur India Limited',
    logo: '/assets/clients/dabur.png',
  },
  {
    name: 'Gateway Terminals India Private Limited',
    logo: '/assets/clients/gateway-terminals.png',
  },
  {
    name: 'Kerala State Electronics Development Corp. Ltd.',
    logo: '/assets/clients/keltron.png',
  },
  {
    name: 'Hindustan Unilever Ltd.',
    logo: '/assets/clients/hindustan-unilever.png',
  },
  {
    name: 'Innovassynth Technologies (India) Limited',
    logo: '/assets/clients/innovassynth.png',
  },
  {
    name: 'Hinduja Global Solutions Limited',
    logo: '/assets/clients/hgs.png',
  },
  {
    name: 'Indian Oil Corporation Limited',
    logo: '/assets/clients/indian-oil.png',
  },
]

const serviceIcons = {
  ClipboardCheck: Zap,
  ShieldCheck,
  TowerControl: Zap,
  Activity: Zap,
  DraftingCompass: Wrench,
  Wrench,
}

function SectionEyebrow({ children, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`h-px w-10 ${light ? 'bg-[#29b6f6]' : 'bg-[#168fd0]'}`}
      />
      <span
        className={`font-body text-xs font-medium ${
          light ? 'text-[#29b6f6]' : 'text-[#168fd0]'
        }`}
      >
        {children}
      </span>
    </div>
  )
}

function initialsFromName(name = '') {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

function SafeImage({
  src,
  alt,
  className = '',
  fallbackClassName = '',
  fallbackText = '',
}) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-[#f4f7fb] text-center font-display text-xs font-semibold tracking-[0.08em] text-[#061735]/40 ${className} ${fallbackClassName}`}
        aria-label={alt}
      >
        {fallbackText || initialsFromName(alt)}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  )
}

function ServiceCarousel() {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToIndex = useCallback((index) => {
    const track = trackRef.current
    if (!track) return

    const cards = Array.from(track.children)
    const safeIndex = Math.max(0, Math.min(index, cards.length - 1))
    const card = cards[safeIndex]

    if (!card) return

    track.scrollTo({
      left: card.offsetLeft - 4,
      behavior: 'smooth',
    })
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
    if (!track) return undefined

    track.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      track.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  if (!services?.length) return null

  return (
    <div>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {services.map((service) => {
          const Icon = serviceIcons[service.icon] || Zap

          return (
            <article
              key={service.id}
              className="group relative min-w-[82vw] shrink-0 snap-start overflow-hidden rounded-sm bg-[#061735] sm:min-w-[360px] lg:min-w-[calc(33.333%_-_14px)] xl:min-w-[calc(25%_-_15px)]"
            >
              <div className="relative h-[500px]">
                <SafeImage
                  src={service.image}
                  alt={service.title}
                  fallbackText={service.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#03132f] via-[#061735]/70 to-[#061735]/10" />

                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-sm border border-[#c8a45c]/60 bg-[#061735]/45 text-white backdrop-blur-sm">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  <h3 className="max-w-[290px] font-display text-2xl font-semibold leading-[1.08] tracking-[-0.02em] text-white">
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
                index === activeIndex
                  ? 'w-8 bg-[#168fd0]'
                  : 'w-4 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous service"
            onClick={() => scrollToIndex(activeIndex - 1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-[#061735] transition-all duration-300 hover:border-[#168fd0] hover:bg-[#168fd0] hover:text-white"
          >
            <ArrowLeft size={17} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            aria-label="Next service"
            onClick={() => scrollToIndex(activeIndex + 1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#168fd0] bg-white text-[#168fd0] transition-all duration-300 hover:bg-[#168fd0] hover:text-white"
          >
            <ArrowRight size={17} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  )
}

function EquipmentPreview() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="site-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <motion.div variants={fadeUp}>
              <SectionEyebrow>Testing & diagnostic equipment</SectionEyebrow>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-6 font-display text-[2.6rem] font-semibold leading-[1] tracking-[-0.045em] text-[#061735] sm:text-5xl lg:text-[4rem]"
            >
              Advanced tools for accurate field results.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl font-body text-base leading-7 text-slate-500"
            >
              Professional testing instruments support relay testing,
              commissioning, diagnostics and dependable electrical system
              verification.
            </motion.p>
          </div>

          <motion.div variants={fadeUp}>
            <Link
              to="/equipment"
              className="group inline-flex items-center gap-2 border-b border-[#061735]/25 pb-2 font-body text-sm font-semibold text-[#061735] no-underline transition-colors hover:border-[#168fd0] hover:text-[#168fd0]"
            >
              View all equipment
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {EQUIPMENT.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group overflow-hidden border border-[#061735]/10 bg-[#fbfcfe]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#f1f5f9] p-5">
                <SafeImage
                  src={item.image}
                  alt={item.title}
                  fallbackText="Equipment"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="border-t border-[#061735]/10 p-5">
                <p className="font-display text-base font-semibold leading-tight text-[#061735]">
                  {item.title}
                </p>

                <p className="mt-2 font-body text-xs leading-5 text-slate-500">
                  {item.meta}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function getReviewLogo(companyName = '') {
  const target = companyName.toLowerCase()

  const match = PROFILE_CLIENTS.find((client) => {
    const source = client.name.toLowerCase()

    return (
      source === target ||
      source.includes(target) ||
      target.includes(source) ||
      (target.includes('aditya birla') && source.includes('aditya birla')) ||
      (target.includes('best') && source.includes('best')) ||
      (target.includes('bhabha') && source.includes('bhabha')) ||
      (target.includes('indian oil') && source.includes('indian oil')) ||
      (target.includes('dabur') && source.includes('dabur')) ||
      (target.includes('ceat') && source.includes('ceat'))
    )
  })

  return match?.logo || null
}

function ReviewCard({ review }) {
  if (!review) return null

  const logo = getReviewLogo(review.company)
  const rating = Math.max(1, Math.min(5, Number(review.rating) || 5))

  return (
    <article className="relative flex min-h-[275px] flex-col overflow-hidden rounded-[18px] border border-[#061735]/20 bg-white p-5 shadow-[0_12px_30px_rgba(6,23,53,0.06)] sm:p-6">
      <Quote
        size={42}
        strokeWidth={1.25}
        className="absolute right-5 top-4 text-[#cfeeff]"
      />

      <div className="grid grid-cols-[92px_1fr] gap-5 sm:grid-cols-[105px_1fr]">
        <div className="flex h-[92px] w-[92px] items-center justify-center overflow-hidden rounded-[14px] bg-white p-2 shadow-[0_12px_24px_rgba(6,23,53,0.14)] sm:h-[105px] sm:w-[105px]">
          <SafeImage
            src={logo}
            alt={`${review.company} logo`}
            fallbackText={initialsFromName(review.company)}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="min-w-0 pr-8">
          <h3 className="max-w-[290px] font-display text-[0.98rem] font-bold uppercase leading-[1.15] tracking-[0.01em] text-[#101010] sm:text-[1.05rem]">
            {review.company}
          </h3>

          <div
            className="mt-2 flex items-center gap-0.5"
            aria-label={`${rating} out of 5 stars`}
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={15}
                strokeWidth={1.5}
                fill={index < rating ? 'currentColor' : 'none'}
                className={
                  index < rating ? 'text-[#f7bd34]' : 'text-slate-300'
                }
              />
            ))}
          </div>

          <blockquote className="mt-3 font-body text-[0.88rem] leading-[1.35rem] text-[#111827] sm:text-[0.92rem]">
            {review.quote}
          </blockquote>

          <div className="mt-4 border-t border-[#061735]/35 pt-3">
            <p className="font-display text-[0.92rem] font-bold leading-tight text-[#111111]">
              {review.person}
            </p>

            <p className="mt-1 font-body text-[0.8rem] leading-5 text-[#1f2937]">
              {review.role}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

function ClientReviews() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const reviewCount = reviews?.length || 0

  useEffect(() => {
    if (paused || reviewCount <= 1) return undefined

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviewCount)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [paused, reviewCount])

  if (!reviewCount) return null

  const firstReview = reviews[activeIndex]
  const secondReview = reviews[(activeIndex + 1) % reviewCount]

  const goTo = (index) => {
    const safeIndex = (index + reviewCount) % reviewCount
    setActiveIndex(safeIndex)
  }

  return (
    <section className="overflow-hidden bg-[#f7f9fc] py-16 lg:py-20">
      <div className="site-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <SectionEyebrow>Client Reviews</SectionEyebrow>

            <h2 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1] tracking-[-0.045em] text-[#061735] sm:text-5xl lg:text-[4rem]">
              Trusted by industry leaders. Proven by performance.
            </h2>

            <p className="mt-6 max-w-2xl font-body text-base leading-7 text-slate-500">
              Our clients&apos; satisfaction reflects our commitment to quality,
              reliability and dependable project execution.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Previous client review"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#061735]/15 bg-white text-[#061735] transition-all duration-300 hover:border-[#168fd0] hover:bg-[#168fd0] hover:text-white"
            >
              <ArrowLeft size={17} strokeWidth={1.6} />
            </button>

            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Next client review"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#061735]/15 bg-white text-[#061735] transition-all duration-300 hover:border-[#168fd0] hover:bg-[#168fd0] hover:text-white"
            >
              <ArrowRight size={17} strokeWidth={1.6} />
            </button>

            <span className="ml-2 font-body text-xs tracking-[0.16em] text-[#061735]/40">
              {String(activeIndex + 1).padStart(2, '0')} /{' '}
              {String(reviewCount).padStart(2, '0')}
            </span>
          </div>
        </div>

        <div
          className="mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 34 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -34 }}
              transition={{
                duration: 0.42,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid gap-5 lg:grid-cols-2"
            >
              <ReviewCard review={firstReview} />

              <div className="hidden lg:block">
                <ReviewCard review={secondReview} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-7 flex justify-center gap-2">
          {reviews.map((review, index) => (
            <button
              key={`${review.company}-${index}`}
              type="button"
              aria-label={`Show review ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? 'w-9 bg-[#168fd0]'
                  : 'w-4 bg-[#061735]/15 hover:bg-[#061735]/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ClientMarquee() {
  const marqueeClients = useMemo(
    () => [...PROFILE_CLIENTS, ...PROFILE_CLIENTS],
    [],
  )

  return (
    <section
      className="overflow-hidden border-y border-[#061735]/10 bg-white py-16 lg:py-20"
      aria-labelledby="client-marquee-heading"
    >
      <div className="site-container">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionEyebrow>Major Clients</SectionEyebrow>

            <h2
              id="client-marquee-heading"
              className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] text-[#061735] md:text-4xl"
            >
              Trusted across industries.
            </h2>

            <p className="mt-3 max-w-2xl font-body text-sm leading-6 text-slate-500">
              Selected organisations across industrial, infrastructure,
              manufacturing, energy and critical electrical applications.
            </p>
          </div>

          <Link
            to="/clients"
            className="group inline-flex items-center gap-2 font-body text-sm font-semibold text-[#061735] no-underline transition-colors hover:text-[#168fd0]"
          >
            View all clients
            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>

      <div className="relative mt-10 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent md:w-32"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent md:w-32"
        />

        <motion.div
          className="flex w-max items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 42,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {marqueeClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              title={client.name}
              className="mx-3 flex h-[108px] w-[190px] shrink-0 items-center justify-center rounded-xl border border-[#061735]/10 bg-white px-6 py-5 transition-all duration-300 hover:border-[#168fd0]/30 hover:shadow-[0_10px_30px_rgba(6,23,53,0.08)] md:h-[116px] md:w-[205px]"
            >
              <SafeImage
                src={client.logo}
                alt={`${client.name} logo`}
                fallbackText={initialsFromName(client.name)}
                className="max-h-[66px] max-w-[145px] object-contain md:max-h-[72px] md:max-w-[155px]"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


function WhyElectroMech() {
  return (
    <section className="relative overflow-hidden bg-[#061735] py-16 md:py-20">
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#168fd0]/10 blur-3xl"
      />

      <div className="site-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <SectionEyebrow light>Why Electro Mech</SectionEyebrow>

          <h2 className="mt-6 font-display text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl">
            Experience. Expertise. Commitment to excellence.
          </h2>

          <p className="mt-6 font-body text-base leading-7 text-white/50">
            Safe, reliable and efficient electrical engineering solutions
            supported by practical field experience, calibrated tools and a
            client-first approach.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mx-auto mt-12 grid max-w-6xl gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {WHY_ITEMS.map((item) => {
            const Icon = item.icon

            return (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className="group bg-[#061735] p-7 transition-colors duration-300 hover:bg-[#0a2145] md:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-[#c8a45c]/30 bg-[#c8a45c]/[0.06] text-[#c8a45c] transition-all duration-300 group-hover:border-[#c8a45c] group-hover:bg-[#c8a45c] group-hover:text-[#061735]">
                  <Icon size={23} strokeWidth={1.5} />
                </div>

                <h3 className="mt-6 font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 font-body text-sm leading-6 text-white/45">
                  {item.description}
                </p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

function PanIndiaPresence() {
  return (
    <section className="relative overflow-hidden bg-[#0a2d5c] py-16 lg:py-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(41,182,246,0.18),transparent_42%)]"
      />

      <div className="site-container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionEyebrow light>Our presence</SectionEyebrow>

            <h2 className="mt-6 max-w-xl font-display text-[2.7rem] font-semibold leading-[1] tracking-[-0.045em] text-white sm:text-5xl lg:text-[4rem]">
              Supporting electrical projects across India.
            </h2>

            <p className="mt-6 max-w-xl font-body text-base leading-7 text-white/55">
              Our project exposure spans industrial plants, utilities and
              substations across multiple sectors, enabling dependable
              engineering support wherever the requirement arises.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {HOME_STATS.map((stat) => (
                <div key={stat.label} className="bg-[#0a2d5c] p-5">
                  <div className="font-display text-2xl font-bold tracking-[-0.03em] text-white">
                    {stat.value}
                  </div>
                  <div className="mt-2 font-body text-xs leading-5 text-white/45">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 font-display text-lg font-semibold text-[#8bd6ff]">
              One Team. One Commitment. Pan India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[650px]"
          >
            <div className="absolute inset-12 rounded-full bg-[#168fd0]/20 blur-3xl" />

            <div className="relative aspect-square p-4 md:p-8">
              <SafeImage
                src="/assets/india-map.png"
                alt="Pan India project exposure map"
                fallbackText="PAN INDIA"
                className="h-full w-full object-contain drop-shadow-[0_0_35px_rgba(41,182,246,0.22)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

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
        {/* HERO — kept in the same direction as your current website */}
        <section className="relative h-[100svh] min-h-[640px] overflow-hidden bg-[#061735]">
          <motion.div
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/assets/hero.jpg"
              className="h-full w-full object-cover object-center"
            >
              <source src="/assets/ElectromechHero.mp4" type="video/mp4" />
              <source src="/assets/ElectromechHero.mov" type="video/quicktime" />
            </video>
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
                  transition={{
                    duration: 0.7,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
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
                  transition={{
                    duration: 0.9,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="max-w-[900px] font-display text-[3.2rem] font-semibold leading-[0.94] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[5.9rem] xl:text-[6.7rem]"
                >
                  Engineering the power behind industry.
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-8 flex flex-col gap-7 md:flex-row md:items-end md:gap-12"
                >
                  <p className="max-w-xl font-body text-[0.95rem] leading-7 text-white/60 md:text-base">
                    {company.tagline} Industrial electrical testing, numerical
                    relay coordination and substation commissioning up to 132
                    kV are delivered from our Mumbai base across India.
                  </p>

                  <div className="flex shrink-0 flex-wrap items-center gap-6">
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

        {/* STATS */}
        <section className="border-b border-black/10 bg-white">
          <div className="site-container">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {HOME_STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeUp}
                  className={`px-5 py-8 md:px-7 md:py-10 lg:px-8 ${
                    index < 2 ? 'border-b md:border-b-0' : ''
                  } ${
                    index !== HOME_STATS.length - 1
                      ? 'border-r border-black/10'
                      : ''
                  }`}
                >
                  <div className="font-display text-3xl font-bold tracking-[-0.035em] text-[#061735] md:text-4xl">
                    {stat.value}
                  </div>

                  <div className="mt-2 font-body text-[0.8rem] font-medium text-black/45">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="bg-white py-16 lg:py-20">
          <div className="site-container">
            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                <div className="relative aspect-[4/4.6] overflow-hidden rounded-sm bg-[#061735]">
                  <SafeImage
                    src="/assets/about.png"
                    alt="Electrical engineers inspecting high-voltage substation equipment"
                    fallbackText="Electro Mech Engineers"
                    className="h-full w-full object-cover object-center"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#061735]/60 via-transparent to-transparent"
                  />

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between border-t border-white/15 px-5 py-4">
                    <span className="font-body text-xs text-white/65">
                      Established in 2005
                    </span>
                    <span className="font-body text-xs text-white/65">
                      Mumbai · Pan India
                    </span>
                  </div>
                </div>
              </motion.div>

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
                <SectionEyebrow>About Electro Mech</SectionEyebrow>

                <h2 className="mt-7 max-w-[760px] font-display text-[2.6rem] font-semibold leading-[1] tracking-[-0.045em] text-[#061735] sm:text-5xl lg:text-[4.1rem]">
                  Engineering reliability into every power system.
                </h2>

                <p className="mt-8 max-w-[680px] font-body text-[0.98rem] leading-7 text-slate-500 lg:text-[1.02rem]">
                  Electro Mech Engineers is a Mumbai-based electrical
                  engineering company specialising in power system protection,
                  testing, commissioning, design and engineering for industrial
                  plants, utilities and substations.
                </p>

                <p className="mt-5 max-w-[680px] font-body text-[0.98rem] leading-7 text-slate-500 lg:text-[1.02rem]">
                  Our experience covers protection relays, control and relay
                  panels, switchgear, transformers, motors, CTs, PTs, circuit
                  breakers and associated substation equipment.
                </p>

                <div className="my-9 h-px w-full max-w-[680px] bg-slate-200" />

                <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="font-body text-xs font-medium text-slate-400">
                      Core engineering focus
                    </p>
                    <p className="mt-2 max-w-[360px] font-body text-sm leading-6 text-[#061735]">
                      Protection. Testing. Commissioning. Power System Studies.
                    </p>
                  </div>

                  <Link
                    to="/about"
                    className="group inline-flex w-fit items-center gap-3 border-b border-[#061735]/30 pb-2 font-body text-sm font-semibold tracking-wide text-[#061735] no-underline transition-all duration-300 hover:border-[#168fd0] hover:text-[#168fd0]"
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
        <section className="overflow-hidden bg-[#f8f9fb] py-16 lg:py-20">
          <div className="site-container">
            <div className="mb-10 max-w-[820px] lg:mb-12">
              <SectionEyebrow>What we do</SectionEyebrow>

              <h2 className="mt-6 font-display text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.045em] text-[#061735] sm:text-5xl lg:text-[4.25rem]">
                End-to-end electrical engineering solutions.
              </h2>

              <p className="mt-7 max-w-[720px] font-body text-base leading-7 text-slate-500 lg:text-[1.02rem]">
                From testing and commissioning to protection engineering,
                maintenance, retrofitting, electrical design and power system
                studies, our services support safe and dependable electrical
                operations.
              </p>
            </div>

            <ServiceCarousel />
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <WhyElectroMech />

        {/* EQUIPMENT */}
        <EquipmentPreview />

        {/* CLIENT REVIEWS */}
        <ClientReviews />

        {/* CONTINUOUS CLIENT LOGOS */}
        <ClientMarquee />

        {/* PAN INDIA */}
        <PanIndiaPresence />

        {/* CTA */}
        <section className="relative overflow-hidden bg-[#c8a45c]">
          <SafeImage
            src="/assets/cta-background.png"
            alt=""
            fallbackText=""
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#c8a45c]/75 mix-blend-multiply"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#c8a45c]/95 via-[#c8a45c]/72 to-[#c8a45c]/30"
          />

          <div className="site-container relative z-10 py-16 lg:py-20">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <span className="font-body text-xs font-medium text-black/50">
                  Let’s work together
                </span>

                <h2 className="mt-5 font-display text-3xl font-bold leading-[1.05] tracking-[-0.04em] text-black md:text-5xl">
                  Have an electrical engineering requirement?
                </h2>

                <p className="mt-5 max-w-2xl font-body text-base leading-7 text-black/55">
                  Tell us about your project, testing requirement, protection
                  study, retrofitting need or engineering challenge.
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

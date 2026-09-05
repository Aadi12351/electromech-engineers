import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock3,
  Send,
  CheckCircle2,
  Building2,
} from 'lucide-react'

import {
  company,
  services,
} from '../data/data'

import PageHero from '../components/PageHero'

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

function Contact() {
  const [sent, setSent] = useState(false)

  const submit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const name = formData.get('name')
    const companyName = formData.get('company')
    const phone = formData.get('phone')
    const service = formData.get('service')
    const message = formData.get('message')

    const body = `
Name: ${name}
Company: ${companyName}
Phone: ${phone}
Service: ${service}

Project details:
${message}
    `.trim()

    const subject = `Project enquiry from ${name}`

    const mailto =
      `mailto:${company.email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`

    window.location.href = mailto
    setSent(true)
  }

  return (
    <>
      <Helmet>
        <title>
          Contact Electro Mech Engineers | Electrical Engineering
        </title>

        <meta
          name="description"
          content="Contact Electro Mech Engineers for electrical testing, commissioning, relay protection, substation engineering, power system studies, automation and maintenance requirements."
        />

        <meta
          name="keywords"
          content="contact Electro Mech Engineers, electrical engineering consultancy, electrical testing Navi Mumbai, commissioning services, electrical engineers India"
        />

        <meta
          property="og:title"
          content="Contact Electro Mech Engineers"
        />

        <meta
          property="og:description"
          content={company.tagline}
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://www.electromechengineers.com/contact"
        />
      </Helmet>

      <main className="overflow-hidden">
        {/* =========================================================
            HERO
        ========================================================== */}

        <PageHero
          eyebrow="Start a conversation"
          title="Let's engineer what comes next."
          copy="Share your requirement and the team can take it from there."
          image="/assets/contact.jpg"
        />

        {/* =========================================================
            CONTACT INFORMATION + FORM
        ========================================================== */}

        <section className="bg-[#f5f7f9] py-24 lg:py-32">
          <div className="site-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20"
            >
              {/* CONTACT INFORMATION */}

              <motion.div
                variants={fadeUp}
                className="lg:pr-8"
              >
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#c8a45c]" />
                  <span className="font-mono text-[0.6rem] font-medium uppercase tracking-[0.24em] text-[#168fd0]">
                    Get in touch
                  </span>
                </div>

                <h2 className="max-w-xl font-display text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.045em] text-[#061735] sm:text-5xl lg:text-[4rem]">
                  Tell us what needs to
                  <span className="block text-[#168fd0]">
                    work better.
                  </span>
                </h2>

                <p className="mt-8 max-w-xl font-body text-[0.98rem] leading-7 text-slate-500">
                  For project discussions, testing requirements, commissioning
                  support and engineering consultancy, get in touch with the
                  Electro Mech Engineers team.
                </p>

                <div className="mt-10 border-t border-[#061735]/10">
                  <a
                    href={`tel:${company.phones[0].replace(/\s/g, '')}`}
                    className="group flex gap-5 border-b border-[#061735]/10 py-5 no-underline"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#061735]/10 text-[#168fd0] transition-all duration-300 group-hover:border-[#c8a45c] group-hover:bg-[#061735]">
                      <Phone
                        size={19}
                        strokeWidth={1.4}
                        className="transition-colors group-hover:text-[#c8a45c]"
                      />
                    </div>

                    <span className="min-w-0">
                      <small className="block font-mono text-[0.52rem] uppercase tracking-[0.18em] text-[#061735]/35">
                        Phone
                      </small>

                      <span className="mt-1 block font-body text-sm font-medium leading-6 text-[#061735]">
                        {company.phones.map((phone, index) => (
                          <React.Fragment key={phone}>
                            {index > 0 && ' · '}
                            {phone}
                          </React.Fragment>
                        ))}
                      </span>
                    </span>

                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.4}
                      className="ml-auto mt-1 shrink-0 text-[#061735]/20 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#c8a45c]"
                    />
                  </a>

                  <a
                    href={`mailto:${company.email}`}
                    className="group flex gap-5 border-b border-[#061735]/10 py-5 no-underline"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#061735]/10 text-[#168fd0] transition-all duration-300 group-hover:border-[#c8a45c] group-hover:bg-[#061735]">
                      <Mail
                        size={19}
                        strokeWidth={1.4}
                        className="transition-colors group-hover:text-[#c8a45c]"
                      />
                    </div>

                    <span className="min-w-0">
                      <small className="block font-mono text-[0.52rem] uppercase tracking-[0.18em] text-[#061735]/35">
                        Email
                      </small>

                      <span className="mt-1 block break-all font-body text-sm font-medium leading-6 text-[#061735]">
                        {company.email}
                      </span>
                    </span>

                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.4}
                      className="ml-auto mt-1 shrink-0 text-[#061735]/20 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#c8a45c]"
                    />
                  </a>

                  <div className="flex gap-5 border-b border-[#061735]/10 py-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#061735]/10 text-[#168fd0]">
                      <MapPin size={19} strokeWidth={1.4} />
                    </div>

                    <span>
                      <small className="block font-mono text-[0.52rem] uppercase tracking-[0.18em] text-[#061735]/35">
                        Office
                      </small>

                      <span className="mt-1 block font-body text-sm leading-6 text-[#061735]">
                        {company.address}
                      </span>
                    </span>
                  </div>

                  <div className="flex gap-5 py-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#061735]/10 text-[#168fd0]">
                      <Clock3 size={19} strokeWidth={1.4} />
                    </div>

                    <span>
                      <small className="block font-mono text-[0.52rem] uppercase tracking-[0.18em] text-[#061735]/35">
                        Working hours
                      </small>

                      <span className="mt-1 block font-body text-sm leading-6 text-[#061735]">
                        {company.hours}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-4 border border-[#061735]/10 bg-white p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#061735]">
                    <Building2
                      size={21}
                      strokeWidth={1.4}
                      className="text-[#c8a45c]"
                    />
                  </div>

                  <div>
                    <strong className="block font-display text-base font-semibold tracking-[-0.02em] text-[#061735]">
                      Electro Mech Engineers
                    </strong>

                    <span className="font-mono text-[0.53rem] uppercase tracking-[0.16em] text-[#061735]/35">
                      Electrical Consulting Engineers
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* ENQUIRY FORM */}

              <motion.div
                variants={fadeUp}
                className="relative overflow-hidden border border-[#061735]/10 bg-white p-7 shadow-[0_20px_60px_rgba(6,23,53,0.06)] md:p-10 lg:p-12"
              >
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-32 w-32 border-l border-b border-[#c8a45c]/30"
                />

                <div className="relative z-10 border-b border-[#061735]/10 pb-7">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#c8a45c]" />
                    <span className="font-mono text-[0.58rem] font-medium uppercase tracking-[0.22em] text-[#168fd0]">
                      Project enquiry
                    </span>
                  </div>

                  <h2 className="font-display text-3xl font-semibold tracking-[-0.035em] text-[#061735] sm:text-4xl">
                    Start with the details.
                  </h2>

                  <p className="mt-4 max-w-xl font-body text-sm leading-6 text-slate-500">
                    Tell us about your requirement and we'll help you identify
                    the right engineering capability.
                  </p>
                </div>

                <form
                  onSubmit={submit}
                  className="relative z-10 mt-8"
                >
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block font-mono text-[0.54rem] font-medium uppercase tracking-[0.16em] text-[#061735]/45"
                      >
                        Name *
                      </label>

                      <input
                        id="contact-name"
                        name="name"
                        required
                        placeholder="Your name"
                        className="h-12 w-full border-b border-[#061735]/20 bg-transparent px-0 font-body text-sm text-[#061735] placeholder:text-[#061735]/30 transition-colors focus:border-[#168fd0] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-company"
                        className="mb-2 block font-mono text-[0.54rem] font-medium uppercase tracking-[0.16em] text-[#061735]/45"
                      >
                        Company
                      </label>

                      <input
                        id="contact-company"
                        name="company"
                        placeholder="Company name"
                        className="h-12 w-full border-b border-[#061735]/20 bg-transparent px-0 font-body text-sm text-[#061735] placeholder:text-[#061735]/30 transition-colors focus:border-[#168fd0] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="mb-2 block font-mono text-[0.54rem] font-medium uppercase tracking-[0.16em] text-[#061735]/45"
                      >
                        Phone *
                      </label>

                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91..."
                        className="h-12 w-full border-b border-[#061735]/20 bg-transparent px-0 font-body text-sm text-[#061735] placeholder:text-[#061735]/30 transition-colors focus:border-[#168fd0] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-service"
                        className="mb-2 block font-mono text-[0.54rem] font-medium uppercase tracking-[0.16em] text-[#061735]/45"
                      >
                        Service
                      </label>

                      <select
                        id="contact-service"
                        name="service"
                        defaultValue={services[0]?.title}
                        className="h-12 w-full border-b border-[#061735]/20 bg-transparent px-0 font-body text-sm text-[#061735] transition-colors focus:border-[#168fd0] focus:outline-none"
                      >
                        {services.map((service) => (
                          <option
                            key={service.id}
                            value={service.title}
                          >
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-7">
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block font-mono text-[0.54rem] font-medium uppercase tracking-[0.16em] text-[#061735]/45"
                    >
                      Project details *
                    </label>

                    <textarea
                      id="contact-message"
                      rows={6}
                      name="message"
                      required
                      placeholder="Tell us about the equipment, voltage level, location and timeline..."
                      className="w-full resize-y border-b border-[#061735]/20 bg-transparent px-0 py-3 font-body text-sm leading-6 text-[#061735] placeholder:text-[#061735]/30 transition-colors focus:border-[#168fd0] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group mt-8 inline-flex w-full items-center justify-center gap-3 bg-[#061735] px-6 py-4 font-body text-sm font-semibold text-white transition-all duration-300 hover:bg-[#168fd0]"
                  >
                    Send enquiry
                    <Send
                      size={17}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>

                  {sent && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      className="mt-5 flex items-center gap-3 border border-[#168fd0]/15 bg-[#168fd0]/5 px-4 py-3"
                    >
                      <CheckCircle2
                        size={17}
                        strokeWidth={1.4}
                        className="shrink-0 text-[#168fd0]"
                      />

                      <span className="font-body text-xs leading-5 text-[#061735]/65">
                        Your email client should open with the enquiry
                        pre-filled.
                      </span>
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            SERVICES QUICK LINKS
        ========================================================== */}

        <section className="bg-white py-24 lg:py-32">
          <div className="site-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
            >
              <div className="flex flex-col gap-7 border-b border-[#061735]/10 pb-8 md:flex-row md:items-end md:justify-between">
                <motion.div variants={fadeUp}>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-10 bg-[#c8a45c]" />
                    <span className="font-mono text-[0.58rem] font-medium uppercase tracking-[0.22em] text-[#168fd0]">
                      What can we help with?
                    </span>
                  </div>

                  <h2 className="font-display text-[2.5rem] font-semibold leading-[1] tracking-[-0.04em] text-[#061735] sm:text-4xl lg:text-5xl">
                    Choose a capability.
                  </h2>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <Link
                    to="/services"
                    className="group inline-flex items-center gap-3 border-b border-[#061735]/20 pb-2 font-body text-sm font-semibold text-[#061735] no-underline transition-colors hover:border-[#c8a45c] hover:text-[#168fd0]"
                  >
                    View all services
                    <ArrowRight
                      size={17}
                      strokeWidth={1.5}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </motion.div>
              </div>

              <motion.div
                variants={stagger}
                className="mt-10 grid gap-px border border-[#061735]/10 bg-[#061735]/10 md:grid-cols-2 lg:grid-cols-3"
              >
                {services.slice(0, 6).map((service, index) => (
                  <motion.div
                    key={service.id}
                    variants={fadeUp}
                  >
                    <Link
                      to={`/services/${service.id}`}
                      className="group relative flex min-h-[190px] flex-col justify-between overflow-hidden bg-white p-7 no-underline transition-colors duration-500 hover:bg-[#061735]"
                    >
                      <div className="flex items-start justify-between">
                        <span className="font-mono text-[0.56rem] tracking-[0.2em] text-[#061735]/25 transition-colors group-hover:text-white/25">
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <ArrowUpRight
                          size={18}
                          strokeWidth={1.4}
                          className="text-[#061735]/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#c8a45c]"
                        />
                      </div>

                      <div className="mt-10">
                        <span className="mb-4 block h-px w-8 bg-[#c8a45c] transition-all duration-500 group-hover:w-14" />

                        <h3 className="font-display text-lg font-semibold tracking-[-0.025em] text-[#061735] transition-colors group-hover:text-white">
                          {service.title}
                        </h3>

                        <p className="mt-2 line-clamp-2 font-body text-xs leading-5 text-slate-500 transition-colors group-hover:text-white/40">
                          {service.short}
                        </p>
                      </div>

                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c8a45c] transition-all duration-500 group-hover:w-full" />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            MAP
        ========================================================== */}

        <section className="bg-[#f5f7f9] py-6 lg:py-8">
          <div className="site-container">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
              }}
              className="relative overflow-hidden border border-[#061735]/10 bg-[#061735]"
            >
              <iframe
                title="Electro Mech Engineers location"
                src="https://www.google.com/maps?q=Electro%20Mech%20Engineers%20Nerul%20Navi%20Mumbai&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full border-0 grayscale-[0.35] md:h-[500px]"
              />

              <div className="absolute bottom-5 left-5 max-w-xs border border-white/10 bg-[#061735]/90 px-5 py-4 backdrop-blur-md md:bottom-7 md:left-7">
                <div className="mb-2 flex items-center gap-3">
                  <span className="h-px w-7 bg-[#c8a45c]" />
                  <span className="font-mono text-[0.53rem] uppercase tracking-[0.2em] text-[#29b6f6]">
                    Our location
                  </span>
                </div>

                <b className="block font-display text-lg font-semibold tracking-[-0.02em] text-white">
                  Nerul, Navi Mumbai
                </b>

                <small className="mt-1 block font-body text-xs text-white/45">
                  Maharashtra, India
                </small>
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
                    Electro Mech Engineers
                  </span>
                </div>

                <h2 className="mt-5 max-w-3xl font-display text-[2.3rem] font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-4xl lg:text-[3.5rem]">
                  Let's make your electrical system
                  <span className="block text-[#29b6f6]">
                    more dependable.
                  </span>
                </h2>
              </div>

              <a
                href={`mailto:${company.email}`}
                className="group relative z-10 mt-8 inline-flex w-fit shrink-0 items-center gap-3 border border-white/20 bg-white px-6 py-4 font-body text-sm font-semibold text-[#061735] no-underline transition-all duration-300 hover:border-[#c8a45c] hover:bg-[#c8a45c] lg:ml-12 lg:mt-0"
              >
                Email our team
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Contact

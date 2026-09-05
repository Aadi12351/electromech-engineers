import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight, ArrowDown } from 'lucide-react'

import { company, services, clients } from '../data/data'

const serviceImages = [
  '/assets/service-testing.jpg',
  '/assets/service-relay.jpg',
  '/assets/service-substation.jpg',
  '/assets/service-consulting.jpg',
  '/assets/service-maintenance.jpg',
  '/assets/service-testing.jpg',
  '/assets/service-relay.jpg',
]

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
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

function serviceHref(service) {
  return `/services/${service.slug ?? service.id}`
}

function ServiceFeature({
  service,
  index,
}) {
  const image =
    serviceImages[index % serviceImages.length]

  const imageLeft = index % 2 === 0

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.18,
      }}
      variants={fadeUp}
      className="
        grid
        items-center
        gap-10
        lg:grid-cols-2
        lg:gap-16
        xl:gap-24
      "
    >

      {/* =========================================================
          IMAGE
      ========================================================== */}

      <div
        className={`
          relative
          order-1
          ${
            imageLeft
              ? 'lg:order-1'
              : 'lg:order-2'
          }
        `}
      >

        <div
          className="
            group
            relative
            aspect-[1.18]
            overflow-hidden
            rounded-[10px]
            border
            border-white/10
            bg-[#10091e]
          "
        >

          {/* IMAGE */}

          <img
            src={image}
            alt={service.title}
            loading="lazy"
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-1000
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:scale-[1.04]
            "
          />


          {/* IMAGE OVERLAY */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#05020b]/75
              via-transparent
              to-transparent
            "
          />


          {/* IMAGE NUMBER */}

          <div
            className="
              absolute
              left-6
              top-6
              flex
              h-11
              min-w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-black/20
              px-3
              font-mono
              text-[0.62rem]
              tracking-[0.18em]
              text-white/75
              backdrop-blur-md
            "
          >
            {String(index + 1).padStart(2, '0')}
          </div>


          {/* IMAGE BOTTOM LABEL */}

          <div
            className="
              absolute
              bottom-6
              left-6
              right-6
              flex
              items-end
              justify-between
            "
          >

            <span
              className="
                font-mono
                text-[0.58rem]
                uppercase
                tracking-[0.2em]
                text-white/55
              "
            >
              Electro Mech Engineers
            </span>


            <span
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-black/20
                text-white/70
                backdrop-blur-md
              "
            >
              <ArrowUpRight
                size={15}
                strokeWidth={1.4}
              />
            </span>

          </div>

        </div>

      </div>


      {/* =========================================================
          TEXT
      ========================================================== */}

      <div
        className={`
          order-2
          ${
            imageLeft
              ? 'lg:order-2'
              : 'lg:order-1'
          }
        `}
      >

        {/* EYEBROW */}

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          <span
            className="
              h-px
              w-10
              bg-[#c8a45c]
            "
          />

          <span
            className="
              font-mono
              text-[0.62rem]
              font-medium
              uppercase
              tracking-[0.22em]
              text-[#29b6f6]
            "
          >
            Service {String(index + 1).padStart(2, '0')}
          </span>

        </div>


        {/* TITLE */}

        <h2
          className="
            mt-7
            max-w-2xl
            text-4xl
            font-semibold
            leading-[1]
            tracking-[-0.04em]
            text-white
            sm:text-5xl
            lg:text-[4rem]
            xl:text-[4.4rem]
          "
        >
          {service.title}
        </h2>


        {/* DESCRIPTION */}

        <p
          className="
            mt-7
            max-w-xl
            text-base
            leading-7
            text-white/50
            md:text-lg
            md:leading-8
          "
        >
          {service.short}
        </p>


        {/* DIVIDER */}

        <div
          className="
            my-8
            h-px
            w-full
            max-w-xl
            bg-white/10
          "
        />


        {/* SERVICE INFORMATION */}

        <div
          className="
            grid
            max-w-xl
            gap-5
            sm:grid-cols-2
          "
        >

          <div>

            <p
              className="
                font-mono
                text-[0.56rem]
                uppercase
                tracking-[0.18em]
                text-white/30
              "
            >
              Capability
            </p>


            <p
              className="
                mt-2
                text-sm
                leading-6
                text-white/65
              "
            >
              Electrical engineering
              and technical support
            </p>

          </div>


          <div>

            <p
              className="
                font-mono
                text-[0.56rem]
                uppercase
                tracking-[0.18em]
                text-white/30
              "
            >
              Focus
            </p>


            <p
              className="
                mt-2
                text-sm
                leading-6
                text-white/65
              "
            >
              Reliable systems,
              protection and performance
            </p>

          </div>

        </div>


        {/* CTA */}

        <Link
          to={serviceHref(service)}
          className="
            group
            mt-9
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-white/15
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            no-underline
            transition-all
            duration-300
            hover:border-[#c8a45c]
            hover:bg-[#c8a45c]
            hover:text-[#061735]
          "
        >

          Explore this service

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

      </div>

    </motion.article>
  )
}


function Services() {
  return (
    <>
      <Helmet>

        <title>
          Electrical Engineering Services | Electro Mech Engineers
        </title>

        <meta
          name="description"
          content="Explore the electrical engineering services offered by Electro Mech Engineers, including testing, protection, substation engineering, studies, design, maintenance and automation."
        />

        <meta
          property="og:title"
          content="Electrical Engineering Services | Electro Mech Engineers"
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


      <main className="bg-[#030208] text-white">

        {/* =========================================================
            HERO
        ========================================================== */}

        <section
          className="
            relative
            min-h-[680px]
            overflow-hidden
            bg-[#061735]
          "
        >

          <img
            src="/assets/about.png"
            alt=""
            aria-hidden="true"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          />


          <div
            className="
              absolute
              inset-0
              bg-[#020815]/80
            "
          />


          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#020815]
              via-[#061735]/75
              to-transparent
            "
          />


          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              opacity-[0.08]
              bg-[linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)]
              bg-[size:64px_64px]
            "
          />


          <div
            className="
              site-container
              relative
              z-10
              flex
              min-h-[680px]
              items-end
              pb-16
              pt-32
              lg:pb-20
            "
          >

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="max-w-6xl"
            >

              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                <span
                  className="
                    h-px
                    w-10
                    bg-[#c8a45c]
                  "
                />

                <span
                  className="
                    font-mono
                    text-[0.64rem]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-[#29b6f6]
                  "
                >
                  Capabilities
                </span>

              </div>


              <h1
                className="
                  mt-7
                  max-w-6xl
                  text-5xl
                  font-semibold
                  uppercase
                  leading-[0.92]
                  tracking-[-0.045em]
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[6.5rem]
                "
              >
                Electrical
                <span className="block">
                  engineering.
                </span>

                <span className="block text-white/35">
                  End to end.
                </span>
              </h1>


              <div
                className="
                  mt-9
                  flex
                  flex-col
                  gap-6
                  border-t
                  border-white/15
                  pt-7
                  md:flex-row
                  md:items-start
                  md:justify-between
                "
              >

                <p
                  className="
                    max-w-2xl
                    text-base
                    leading-7
                    text-white/60
                    md:text-lg
                  "
                >
                  Engineering services designed around the
                  complete electrical lifecycle — from testing
                  and protection to studies, design,
                  commissioning and maintenance.
                </p>


                <div
                  className="
                    shrink-0
                    font-mono
                    text-[0.62rem]
                    uppercase
                    tracking-[0.2em]
                    text-white/35
                  "
                >
                  {String(services.length).padStart(2, '0')}
                  {' '}core services
                </div>

              </div>

            </motion.div>

          </div>

        </section>


        {/* =========================================================
            SERVICES INTRO
        ========================================================== */}

        <section className="bg-[#030208] py-24 md:py-28 lg:py-32">

          <div className="site-container">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              variants={fadeUp}
              className="
                max-w-5xl
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                <span
                  className="
                    h-px
                    w-10
                    bg-[#c8a45c]
                  "
                />

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
                  Our services
                </span>

              </div>


              <h2
                className="
                  mt-7
                  text-4xl
                  font-semibold
                  leading-[1.02]
                  tracking-[-0.04em]
                  text-white
                  sm:text-5xl
                  lg:text-[4.6rem]
                "
              >
                One engineering partner.
                <span className="block text-white/35">
                  Multiple critical capabilities.
                </span>
              </h2>


              <p
                className="
                  mt-7
                  max-w-3xl
                  text-base
                  leading-7
                  text-white/45
                  md:text-lg
                  md:leading-8
                "
              >
                Each service is built to solve a specific
                electrical engineering requirement while
                contributing to safer, more reliable and
                better-performing systems.
              </p>

            </motion.div>


            {/* =====================================================
                ALTERNATING SERVICE SECTIONS
            ====================================================== */}

            <div className="mt-24 space-y-28 md:mt-32 md:space-y-36">

              {services.map((service, index) => (

                <ServiceFeature
                  key={service.id}
                  service={service}
                  index={index}
                />

              ))}

            </div>

          </div>

        </section>


        {/* =========================================================
            WHERE WE WIN — STICKY EDITORIAL CLIENT SECTION
        ========================================================== */}

        <section className="bg-[#f5f4f1] py-24 text-[#241337] md:py-32 lg:py-40">

          <div className="site-container">

            <div className="grid gap-16 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 xl:grid-cols-[0.72fr_1.28fr] xl:gap-28">

              {/* =====================================================
                  STICKY LEFT COLUMN
              ====================================================== */}

              <aside className="self-start lg:sticky lg:top-28">

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
                    Where we win
                  </span>

                </div>


                <h2
                  className="
                    mt-7
                    max-w-xl
                    text-4xl
                    font-semibold
                    leading-[1.02]
                    tracking-[-0.045em]
                    sm:text-5xl
                    lg:text-[4.2rem]
                  "
                >
                  When our clients
                  <span className="block text-[#168fd0]">
                    win, we win.
                  </span>
                </h2>


                <p
                  className="
                    mt-7
                    max-w-lg
                    text-base
                    leading-7
                    text-[#241337]/60
                    md:text-lg
                    md:leading-8
                  "
                >
                  Our work is ultimately measured by what it
                  enables for the people and organisations we
                  support. Explore the clients and industries
                  that form our working footprint.
                </p>


                <div
                  className="
                    mt-10
                    border-t
                    border-[#241337]/12
                    pt-6
                  "
                >

                  <div className="flex items-end justify-between">

                    <div>

                      <span
                        className="
                          block
                          font-mono
                          text-6xl
                          font-medium
                          leading-none
                          tracking-[-0.06em]
                          text-[#241337]/10
                        "
                      >
                        {String(clients.length).padStart(2, '0')}
                      </span>

                      <span
                        className="
                          mt-2
                          block
                          font-mono
                          text-[0.56rem]
                          uppercase
                          tracking-[0.18em]
                          text-[#241337]/40
                        "
                      >
                        client relationships
                      </span>

                    </div>


                    <ArrowDown
                      className="hidden text-[#241337]/25 sm:block"
                      size={22}
                      strokeWidth={1.2}
                    />

                  </div>

                </div>

              </aside>


              {/* =====================================================
                  RIGHT SCROLLING COLUMN
              ====================================================== */}

              <div className="space-y-16">

                {clients.map((client, index) => {

                  const image =
                    serviceImages[index % serviceImages.length]

                  return (
                    <motion.article
                      key={`${client}-${index}`}
                      initial={{
                        opacity: 0,
                        y: 35,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.12,
                      }}
                      transition={{
                        duration: 0.65,
                        delay: Math.min(index * 0.035, 0.2),
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group"
                    >

                      <Link
                        to="/clients"
                        className="
                          block
                          no-underline
                        "
                      >

                        {/* IMAGE */}

                        <div
                          className="
                            relative
                            aspect-[1.62]
                            overflow-hidden
                            rounded-[10px]
                            bg-[#e6e2db]
                          "
                        >

                          <img
                            src={image}
                            alt=""
                            aria-hidden="true"
                            loading="lazy"
                            className="
                              h-full
                              w-full
                              object-cover
                              grayscale-[10%]
                              transition-transform
                              duration-1000
                              ease-[cubic-bezier(0.22,1,0.36,1)]
                              group-hover:scale-[1.035]
                            "
                          />


                          <div
                            className="
                              absolute
                              inset-0
                              bg-gradient-to-t
                              from-black/35
                              via-transparent
                              to-transparent
                            "
                          />


                          <div
                            className="
                              absolute
                              left-5
                              top-5
                              flex
                              h-10
                              min-w-10
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-white/30
                              bg-black/15
                              px-3
                              font-mono
                              text-[0.58rem]
                              tracking-[0.18em]
                              text-white
                              backdrop-blur-md
                            "
                          >
                            {String(index + 1).padStart(2, '0')}
                          </div>


                          <div
                            className="
                              absolute
                              bottom-5
                              left-5
                              right-5
                              flex
                              items-center
                              justify-between
                            "
                          >

                            <span
                              className="
                                font-mono
                                text-[0.55rem]
                                uppercase
                                tracking-[0.18em]
                                text-white/65
                              "
                            >
                              Electro Mech Engineers
                            </span>


                            <span
                              className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-white/30
                                bg-black/15
                                text-white
                                backdrop-blur-md
                                transition-all
                                duration-300
                                group-hover:border-[#c8a45c]
                                group-hover:bg-[#c8a45c]
                                group-hover:text-[#061735]
                              "
                            >
                              <ArrowUpRight
                                size={16}
                                strokeWidth={1.4}
                              />
                            </span>

                          </div>

                        </div>


                        {/* CLIENT NAME */}

                        <div
                          className="
                            mt-5
                            flex
                            items-center
                            justify-between
                            border-b
                            border-[#241337]/12
                            pb-5
                          "
                        >

                          <h3
                            className="
                              text-2xl
                              font-semibold
                              tracking-[-0.025em]
                              text-[#241337]
                              transition-colors
                              duration-300
                              group-hover:text-[#168fd0]
                              sm:text-3xl
                            "
                          >
                            {client}
                          </h3>


                          <span
                            className="
                              hidden
                              font-mono
                              text-[0.55rem]
                              uppercase
                              tracking-[0.18em]
                              text-[#241337]/35
                              sm:block
                            "
                          >
                            Client
                          </span>

                        </div>

                      </Link>

                    </motion.article>
                  )
                })}

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            SERVICE SUMMARY
        ========================================================== */}

        <section
          className="
            border-y
            border-white/10
            bg-[#061735]
            py-20
            md:py-24
          "
        >

          <div className="site-container">

            <div
              className="
                flex
                flex-col
                gap-8
                md:flex-row
                md:items-end
                md:justify-between
              "
            >

              <div>

                <div className="flex items-center gap-3">

                  <span
                    className="
                      h-px
                      w-10
                      bg-[#c8a45c]
                    "
                  />

                  <span
                    className="
                      font-mono
                      text-[0.62rem]
                      uppercase
                      tracking-[0.2em]
                      text-[#29b6f6]
                    "
                  >
                    Complete capability
                  </span>

                </div>


                <h2
                  className="
                    mt-5
                    max-w-4xl
                    text-4xl
                    font-semibold
                    leading-[1.02]
                    tracking-[-0.035em]
                    text-white
                    sm:text-5xl
                    lg:text-[4rem]
                  "
                >
                  From technical problem
                  <span className="text-white/35">
                    {' '}to practical solution.
                  </span>
                </h2>

              </div>


              <Link
                to="/contact"
                className="
                  group
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
                "
              >

                Discuss your project

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.5}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />

              </Link>

            </div>

          </div>

        </section>

      </main>
    </>
  )
}

export default Services

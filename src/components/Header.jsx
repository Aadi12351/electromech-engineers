import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  ArrowUpRight,
  ChevronDown,
  Globe2,
  Mail,
  Menu,
  Search,
  X,
} from 'lucide-react'

import { services } from '../data/data'
import { motion, AnimatePresence } from 'framer-motion'

function Header() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 35)
    }

    onScroll()

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  const closeMenu = () => {
    setOpen(false)
    setServicesOpen(false)
  }

  const getServiceName = (service) => {
    if (Array.isArray(service)) return service[1] || service[0]

    return service?.title || service?.name || service?.label || ''
  }

  const getServiceSlug = (service) => {
    if (Array.isArray(service)) {
      return service[0]
    }

    return service?.slug || service?.id || ''
  }

  const primaryLinks = [
    ['/', 'Home'],
    ['/about', 'About'],
  ]

  const secondaryLinks = [
    ['/equipment', 'Equipment'],
    ['/clients', 'Clients'],
    ['/contact', 'Contact'],
  ]

  const servicesActive = location.pathname.startsWith('/services')

  return (
    <>
      {/* =========================================================
          HEADER
      ========================================================== */}

      <header
        className={`
          fixed inset-x-0 top-0 z-50
          border-b
          transition-all duration-500 ease-out
          ${
            scrolled || open
              ? `
                h-[72px]
                border-white/[0.10]
                bg-[#050b16]/95
                shadow-[0_12px_40px_rgba(0,0,0,0.25)]
                backdrop-blur-xl
              `
              : `
                h-[82px]
                border-transparent
                bg-transparent
              `
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            h-full
            w-full
            max-w-[1280px]
            items-center
            px-6
            lg:px-8
            xl:px-4
          "
        >
          {/* =====================================================
              LOGO
          ====================================================== */}

          <Link
            to="/"
            onClick={closeMenu}
            className="
              group
              flex
              shrink-0
              items-center
              gap-3
              no-underline
            "
          >
            <img
              src="/assets/logo-mark.png"
              alt="Electro Mech Engineers"
              className={`
                w-auto
                object-contain
                transition-all
                duration-500
                ${scrolled || open ? 'h-[31px]' : 'h-[36px]'}
              `}
            />

            <span className="hidden flex-col leading-none sm:flex">
              <span
                className="
                  font-display
                  text-[1rem]
                  font-bold
                  tracking-[-0.02em]
                  text-white
                "
              >
                Electro Mech
              </span>

              <span
                className="
                  mt-1
                  font-mono
                  text-[0.57rem]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-white/55
                "
              >
                Engineers
              </span>
            </span>
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}

          <nav
            className="
              ml-auto
              hidden
              h-full
              items-center
              lg:flex
            "
          >
            {/* PRIMARY LINKS */}

            {primaryLinks.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) => `
                  group
                  relative
                  flex
                  h-full
                  items-center
                  px-5
                  font-body
                  text-[0.9rem]
                  font-normal
                  tracking-[-0.01em]
                  no-underline
                  transition-colors
                  duration-300
                  ${
                    isActive
                      ? 'text-white'
                      : 'text-white/75 hover:text-white'
                  }
                `}
              >
                {label}

                <span
                  className="
                    absolute
                    bottom-[17px]
                    left-5
                    right-5
                    h-px
                    origin-left
                    scale-x-0
                    bg-[#c8a45c]
                    transition-transform
                    duration-300
                    group-[.active]:scale-x-100
                  "
                />
              </NavLink>
            ))}

            {/* =================================================
                SERVICES DROPDOWN
            ================================================== */}

           <div
  className="relative h-full"
  onMouseEnter={() => setServicesOpen(true)}
  onMouseLeave={() => setServicesOpen(false)}
>
  <div className="flex h-full items-center">

    {/* SERVICES LINK */}

    <Link
      to="/services"
      onClick={closeMenu}
      className={`
        group
        relative
        flex
        h-full
        items-center
        px-5
        font-body
        text-[0.9rem]
        font-normal
        tracking-[-0.01em]
        no-underline
        transition-colors
        duration-300
        ${
          servicesActive
            ? 'text-white'
            : 'text-white/75 hover:text-white'
        }
      `}
    >
      Services

      <span
        className={`
          absolute
          bottom-[17px]
          left-5
          right-5
          h-px
          origin-left
          bg-[#c8a45c]
          transition-transform
          duration-300
          ${
            servicesActive
              ? 'scale-x-100'
              : 'scale-x-0 group-hover:scale-x-100'
          }
        `}
      />
    </Link>


    {/* DROPDOWN TOGGLE */}

    <button
      type="button"
      onClick={(event) => {
        event.stopPropagation()
        setServicesOpen((value) => !value)
      }}
      aria-label="Open services menu"
      aria-expanded={servicesOpen}
      className="
        -ml-3
        flex
        h-full
        items-center
        border-0
        bg-transparent
        px-2
        text-white/55
        outline-none
        transition-colors
        duration-300
        hover:text-[#c8a45c]
      "
    >
      <ChevronDown
        size={14}
        strokeWidth={1.5}
        className={`
          transition-transform
          duration-300
          ${
            servicesOpen
              ? 'rotate-180 text-[#c8a45c]'
              : ''
          }
        `}
      />
    </button>

  </div>


  {/* =================================================
      TATA-STYLE SERVICES OVERLAY
  ================================================== */}

  <AnimatePresence>
    {servicesOpen && (
      <motion.div
        key="services-overlay"
        initial={{
          opacity: 0,
          clipPath: 'inset(0 0 100% 0)',
        }}
        animate={{
          opacity: 1,
          clipPath: 'inset(0 0 0% 0)',
        }}
        exit={{
          opacity: 0,
          clipPath: 'inset(0 0 100% 0)',
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          fixed
          inset-x-0
          z-40
          min-h-[500px]
          overflow-hidden
          border-b
          border-white/10
          bg-[#03070d]/95
          shadow-[0_30px_80px_rgba(0,0,0,0.45)]
          backdrop-blur-xl
          ${
            scrolled
              ? 'top-[72px]'
              : 'top-[82px]'
          }
        `}
        onMouseEnter={() => setServicesOpen(true)}
        onMouseLeave={() => setServicesOpen(false)}
      >
                    {/* Soft black film over the page */}
                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-black/20
                      "
                    />

                    <div className="site-container relative">

                      {/* TOP ROW */}

                      <div
                        className="
                          flex
                          items-end
                          justify-between
                          border-b
                          border-white/10
                          py-7
                          md:py-8
                        "
                      >
                        <div>

                          <div
                            className="
                              mb-3
                              flex
                              items-center
                              gap-3
                              font-mono
                              text-[0.58rem]
                              font-medium
                              uppercase
                              tracking-[0.24em]
                              text-[#29b6f6]
                            "
                          >
                            <span className="h-px w-8 bg-[#29b6f6]" />
                            Engineering Services
                          </div>

                          <h3
                            className="
                              font-display
                              text-2xl
                              font-semibold
                              tracking-[-0.035em]
                              text-white
                              md:text-3xl
                            "
                          >
                            Electrical engineering expertise
                          </h3>

                        </div>

                        <Link
                          to="/services"
                          onClick={closeMenu}
                          className="
                            hidden
                            items-center
                            gap-2
                            font-mono
                            text-[0.6rem]
                            uppercase
                            tracking-[0.18em]
                            text-white/50
                            no-underline
                            transition-colors
                            duration-300
                            hover:text-[#c8a45c]
                            sm:inline-flex
                          "
                        >
                          View all services
                          <ArrowUpRight size={15} strokeWidth={1.5} />
                        </Link>

                      </div>


                      {/* SERVICES */}

                      <div
                        className="
                          grid
                          grid-cols-1
                          gap-x-14
                          sm:grid-cols-2
                          lg:grid-cols-3
                        "
                      >

                        {services.map((service, index) => {

                          const name = getServiceName(service)
                          const slug = getServiceSlug(service)

                          return (
                            <Link
                              key={slug || index}
                              to={`/services/${slug}`}
                              onClick={closeMenu}
                              className="
                                group
                                relative
                                flex
                                items-center
                                gap-5
                                border-b
                                border-white/10
                                py-5
                                no-underline
                                transition-colors
                                duration-300
                                hover:bg-white/[0.025]
                              "
                            >

                              <span
                                className="
                                  w-7
                                  shrink-0
                                  font-mono
                                  text-[0.55rem]
                                  tracking-[0.15em]
                                  text-white/25
                                  transition-colors
                                  duration-300
                                  group-hover:text-[#c8a45c]
                                "
                              >
                                {String(index + 1).padStart(2, '0')}
                              </span>

                              <span
                                className="
                                  flex-1
                                  font-display
                                  text-[0.92rem]
                                  font-medium
                                  tracking-[-0.015em]
                                  text-white/75
                                  transition-colors
                                  duration-300
                                  group-hover:text-white
                                "
                              >
                                {name}
                              </span>

                              <ArrowUpRight
                                size={14}
                                strokeWidth={1.4}
                                className="
                                  shrink-0
                                  text-white/20
                                  transition-all
                                  duration-300
                                  group-hover:-translate-y-0.5
                                  group-hover:translate-x-0.5
                                  group-hover:text-[#c8a45c]
                                "
                              />

                            </Link>
                          )
                        })}

                      </div>


                      {/* BOTTOM STRIP */}

                      <div
                        className="
                          flex
                          items-center
                          justify-between
                          py-4
                        "
                      >

                        <span
                          className="
                            font-mono
                            text-[0.55rem]
                            uppercase
                            tracking-[0.18em]
                            text-white/25
                          "
                        >
                          Protection · Testing · Power Systems · Automation
                        </span>

                        <span
                          className="
                            font-mono
                            text-[0.55rem]
                            uppercase
                            tracking-[0.18em]
                            text-[#c8a45c]
                          "
                        >
                          EM / 01
                        </span>

                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* SECONDARY LINKS */}

            {secondaryLinks.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => `
                  group
                  relative
                  flex
                  h-full
                  items-center
                  px-5
                  font-body
                  text-[0.9rem]
                  font-normal
                  tracking-[-0.01em]
                  no-underline
                  transition-colors
                  duration-300
                  ${
                    isActive
                      ? 'text-white'
                      : 'text-white/75 hover:text-white'
                  }
                `}
              >
                {label}

                <span
                  className="
                    absolute
                    bottom-[17px]
                    left-5
                    right-5
                    h-px
                    origin-left
                    scale-x-0
                    bg-[#c8a45c]
                    transition-transform
                    duration-300
                    group-[.active]:scale-x-100
                  "
                />
              </NavLink>
            ))}

            {/* =================================================
                UTILITY ICONS
            ================================================== */}

            <div
              className="
                ml-5
                flex
                items-center
                gap-1
                border-l
                border-white/10
                pl-5
              "
            >
              <button
                type="button"
                aria-label="Language"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  border-0
                  bg-transparent
                  p-0
                  text-white/65
                  transition-colors
                  hover:text-white
                "
              >
                <Globe2
                  size={19}
                  strokeWidth={1.35}
                />
              </button>

              <Link
                to="/contact"
                aria-label="Email"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  text-white/65
                  no-underline
                  transition-colors
                  hover:text-white
                "
              >
                <Mail
                  size={19}
                  strokeWidth={1.35}
                />
              </Link>

              <button
                type="button"
                aria-label="Search"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  border-0
                  bg-transparent
                  p-0
                  text-white/65
                  transition-colors
                  hover:text-white
                "
              >
                <Search
                  size={19}
                  strokeWidth={1.35}
                />
              </button>
            </div>

            {/* =================================================
                CTA
            ================================================== */}

            <Link
              to="/contact"
              className="
                ml-4
                inline-flex
                items-center
                gap-2
                border
                border-[#c8a45c]
                bg-[#c8a45c]
                px-5
                py-2.5
                font-body
                text-[0.78rem]
                font-medium
                tracking-wide
                text-black
                no-underline
                transition-all
                duration-300
                hover:bg-transparent
                hover:text-[#c8a45c]
              "
            >
              Start a Project

              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
              />
            </Link>
          </nav>

          {/* =====================================================
              MOBILE BUTTON
          ====================================================== */}

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={
              open
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={open}
            className="
              relative
              z-[70]
              ml-auto
              flex
              h-10
              w-10
              items-center
              justify-center
              border
              border-white/20
              bg-transparent
              p-0
              text-white
              outline-none
              transition-all
              duration-300
              hover:border-[#c8a45c]
              hover:text-[#c8a45c]
              lg:hidden
            "
          >
            {open ? (
              <X
                size={21}
                strokeWidth={1.5}
                color="currentColor"
              />
            ) : (
              <Menu
                size={21}
                strokeWidth={1.5}
                color="currentColor"
              />
            )}
          </button>
        </div>
      </header>

      {/* =========================================================
          MOBILE MENU
      ========================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-40
          bg-[#050b16]
          transition-all
          duration-500
          lg:hidden
          ${
            open
              ? 'pointer-events-auto visible opacity-100'
              : 'pointer-events-none invisible opacity-0'
          }
        `}
      >
        <div className="mx-auto flex h-full w-full max-w-[1280px] flex-col px-6 pb-8 pt-[105px]">

          {/* MOBILE HEADER LABEL */}

          <div
            className="
              mb-8
              flex
              items-center
              justify-between
              border-b
              border-white/10
              pb-5
            "
          >
            <div
              className="
                font-mono
                text-[0.62rem]
                uppercase
                tracking-[0.22em]
                text-[#29b6f6]
              "
            >
              Navigation
            </div>

            <div
              className="
                font-mono
                text-[0.58rem]
                uppercase
                tracking-[0.18em]
                text-white/30
              "
            >
              EM / 01
            </div>
          </div>

          {/* MOBILE NAV */}

          <nav className="flex flex-col">
            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={({ isActive }) => `
                flex
                items-center
                border-b
                border-white/10
                py-4
                font-display
                text-2xl
                font-semibold
                tracking-[-0.03em]
                no-underline
                transition-colors
                ${
                  isActive
                    ? 'text-[#c8a45c]'
                    : 'text-white hover:text-[#c8a45c]'
                }
              `}
            >
              <span className="mr-5 font-mono text-[0.6rem] text-white/25">
                01
              </span>
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) => `
                flex
                items-center
                border-b
                border-white/10
                py-4
                font-display
                text-2xl
                font-semibold
                tracking-[-0.03em]
                no-underline
                transition-colors
                ${
                  isActive
                    ? 'text-[#c8a45c]'
                    : 'text-white hover:text-[#c8a45c]'
                }
              `}
            >
              <span className="mr-5 font-mono text-[0.6rem] text-white/25">
                02
              </span>
              About
            </NavLink>

            {/* MOBILE SERVICES */}

            <div className="border-b border-white/10">
              <button
                type="button"
                onClick={() => setServicesOpen((value) => !value)}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  border-0
                  bg-transparent
                  py-4
                  text-left
                  font-display
                  text-2xl
                  font-semibold
                  tracking-[-0.03em]
                  text-white
                "
              >
                <span>
                  <span className="mr-5 font-mono text-[0.6rem] text-white/25">
                    03
                  </span>
                  Services
                </span>

                <ChevronDown
                  size={21}
                  strokeWidth={1.4}
                  className={`
                    transition-transform
                    duration-300
                    ${
                      servicesOpen
                        ? 'rotate-180 text-[#c8a45c]'
                        : 'text-white/50'
                    }
                  `}
                />
              </button>

              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-300
                  ${
                    servicesOpen
                      ? 'max-h-[500px] pb-4 opacity-100'
                      : 'max-h-0 opacity-0'
                  }
                `}
              >
                {services.map((service, index) => {
                  const name = getServiceName(service)
                  const slug = getServiceSlug(service)

                  return (
                    <Link
                      key={slug || index}
                      to={`/services/${slug}`}
                      onClick={closeMenu}
                      className="
                        flex
                        items-center
                        justify-between
                        py-2.5
                        pl-11
                        font-body
                        text-sm
                        text-white/55
                        no-underline
                        transition-colors
                        hover:text-[#c8a45c]
                      "
                    >
                      <span>{name}</span>

                      <ArrowUpRight
                        size={14}
                        className="mr-1 text-white/25"
                      />
                    </Link>
                  )
                })}
              </div>
            </div>

            {[
              ['/equipment', 'Equipment', '04'],
              ['/clients', 'Clients', '05'],
              ['/contact', 'Contact', '06'],
            ].map(([to, label, number]) => (
              <NavLink
                key={to}
                to={to}
                onClick={closeMenu}
                className={({ isActive }) => `
                  flex
                  items-center
                  border-b
                  border-white/10
                  py-4
                  font-display
                  text-2xl
                  font-semibold
                  tracking-[-0.03em]
                  no-underline
                  transition-colors
                  ${
                    isActive
                      ? 'text-[#c8a45c]'
                      : 'text-white hover:text-[#c8a45c]'
                  }
                `}
              >
                <span className="mr-5 font-mono text-[0.6rem] text-white/25">
                  {number}
                </span>

                {label}
              </NavLink>
            ))}
          </nav>

          {/* MOBILE BOTTOM */}

          <div className="mt-auto pt-8">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                border
                border-[#c8a45c]
                bg-[#c8a45c]
                px-6
                py-3.5
                font-body
                text-sm
                font-medium
                tracking-wide
                text-black
                no-underline
                transition-all
                duration-300
                hover:bg-transparent
                hover:text-[#c8a45c]
              "
            >
              Start a Project
              <ArrowUpRight size={17} />
            </Link>

            <div className="mt-5 flex items-center justify-center gap-5">
              <Globe2
                size={18}
                strokeWidth={1.3}
                className="text-white/35"
              />

              <Mail
                size={18}
                strokeWidth={1.3}
                className="text-white/35"
              />

              <Search
                size={18}
                strokeWidth={1.3}
                className="text-white/35"
              />
            </div>

            <p
              className="
                mt-4
                text-center
                font-mono
                text-[0.58rem]
                uppercase
                tracking-[0.18em]
                text-white/25
              "
            >
              Electrical Consulting Engineers
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
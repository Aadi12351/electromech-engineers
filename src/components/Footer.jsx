import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'

import { company } from '../data/data'

function Footer() {
  const currentYear = new Date().getFullYear()

  const navigation = [
    ['/', 'Home'],
    ['/about', 'About'],
    ['/services', 'Services'],
    ['/equipment', 'Equipment'],
    ['/clients', 'Clients'],
    ['/contact', 'Contact'],
  ]

  return (
    <footer className="bg-[#050f23] text-white">

      {/* =========================================
          MAIN FOOTER
      ========================================== */}

      <div className="site-container">

        <div className="grid gap-14 border-b border-white/10 py-20 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1fr] lg:gap-20 lg:py-24">

          {/* =====================================
              BRAND
          ====================================== */}

          <div className="max-w-xl">

            <Link
              to="/"
              className="group inline-flex items-center gap-4 no-underline"
            >

              <div className="flex h-14 w-14 items-center justify-center overflow-hidden">
                <img
                  src="/assets/logo-mark.png"
                  alt="Electro Mech Engineers logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex flex-col leading-none">

                <span className="font-display text-xl font-bold tracking-[-0.025em] text-white">
                  Electro Mech
                </span>

                <span className="mt-1.5 font-mono text-[0.62rem] font-medium uppercase tracking-[0.25em] text-white/45">
                  Engineers
                </span>

              </div>

            </Link>

            <p className="mt-8 max-w-md font-body text-sm leading-7 text-white/45">
              {company.tagline}
            </p>

            <div className="mt-8 flex items-center gap-3">

              <span className="h-px w-8 bg-[#c8a45c]" />

              <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-white/35">
                Electrical Consulting Engineers
              </span>

            </div>

          </div>

          {/* =====================================
              NAVIGATION
          ====================================== */}

          <div>

            <span className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.22em] text-[#c8a45c]">
              Explore
            </span>

            <nav className="mt-6 flex flex-col">

              {navigation.map(([to, label], index) => (
                <Link
                  key={to}
                  to={to}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    border-b
                    border-white/8
                    py-3
                    font-body
                    text-sm
                    text-white/55
                    no-underline
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >

                  <span className="font-mono text-[0.58rem] text-white/20 transition-colors duration-300 group-hover:text-[#c8a45c]">
                    0{index + 1}
                  </span>

                  <span>
                    {label}
                  </span>

                </Link>
              ))}

            </nav>

          </div>

          {/* =====================================
              CONTACT
          ====================================== */}

          <div>

            <span className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.22em] text-[#c8a45c]">
              Contact
            </span>

            <div className="mt-6 flex flex-col gap-5">

              {/* Email */}

              <a
                href={`mailto:${company.email}`}
                className="
                  group
                  flex
                  items-start
                  gap-4
                  font-body
                  text-sm
                  leading-6
                  text-white/55
                  no-underline
                  transition-colors
                  hover:text-white
                "
              >

                <Mail
                  size={17}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0 text-[#c8a45c]"
                />

                <span>
                  {company.email}
                </span>

              </a>

              {/* Phone */}

              <a
                href={`tel:${company.phones[1].replace(/\s/g, '')}`}
                className="
                  flex
                  items-start
                  gap-4
                  font-body
                  text-sm
                  leading-6
                  text-white/55
                  no-underline
                  transition-colors
                  hover:text-white
                "
              >

                <Phone
                  size={17}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0 text-[#c8a45c]"
                />

                <span>
                  {company.phones[1]}
                </span>

              </a>

              {/* Address */}

              <div className="flex items-start gap-4">

                <MapPin
                  size={17}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0 text-[#c8a45c]"
                />

                <span className="font-body text-sm leading-6 text-white/45">
                  {company.address}
                </span>

              </div>

            </div>

            {/* Contact CTA */}

            <Link
              to="/contact"
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                border-b
                border-[#c8a45c]/50
                pb-2
                font-body
                text-sm
                font-medium
                text-white
                no-underline
                transition-all
                duration-300
                hover:border-[#c8a45c]
                hover:text-[#c8a45c]
              "
            >
              Start a conversation

              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
              />

            </Link>

          </div>

        </div>

        {/* =========================================
            FOOTER BOTTOM
        ========================================== */}

        <div className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">

          <span className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-white/30">
            © {currentYear} Electro Mech Engineers.
            All rights reserved.
          </span>

          <div className="flex items-center gap-3">

            <span className="h-px w-6 bg-white/15" />

            <span className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-white/30">
              Electrical Consulting Engineers
            </span>

            <span className="text-white/20">
              ·
            </span>

            <span className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-white/30">
              India
            </span>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer
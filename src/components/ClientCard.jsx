import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

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

function ClientCard({
  name,
  logo,
  index = 0,
  total = 28,
}) {
  return (
    <motion.article
      variants={fadeUp}
      className="
        group
        relative
        flex
        min-h-[340px]
        flex-col
        overflow-hidden
        border
        border-[#061735]/10
        bg-white
        p-7
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#c8a45c]/50
        hover:shadow-[0_20px_50px_rgba(6,23,53,0.08)]
        md:min-h-[360px]
        md:p-8
      "
    >
      {/* =========================================================
          SUBTLE TECHNICAL GRID
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-[linear-gradient(rgba(6,23,53,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(6,23,53,0.035)_1px,transparent_1px)]
          bg-[size:32px_32px]
        "
      />

      {/* =========================================================
          TOP TECHNICAL HEADER
      ========================================================== */}

      <div className="relative z-10 flex shrink-0 items-start justify-between">

        <div className="flex items-center gap-3">

          <span
            className="
              font-mono
              text-[0.58rem]
              font-medium
              tracking-[0.2em]
              text-[#061735]/35
            "
          >
            CLIENT
          </span>

          <span className="h-px w-7 bg-[#c8a45c]" />

          <span
            className="
              font-mono
              text-[0.58rem]
              font-medium
              tracking-[0.16em]
              text-[#061735]/25
            "
          >
            {String(index + 1).padStart(2, '0')}
          </span>

        </div>

        <div
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            border
            border-[#061735]/10
            transition-all
            duration-500
            group-hover:border-[#c8a45c]/60
            group-hover:bg-[#061735]
          "
        >
          <ArrowUpRight
            size={16}
            strokeWidth={1.4}
            className="
              text-[#061735]/35
              transition-all
              duration-500
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
              group-hover:text-white
            "
          />
        </div>

      </div>

      {/* =========================================================
          CLIENT LOGO
      ========================================================== */}

      <div
        className="
          relative
          z-10
          mt-8
          flex
          h-24
          shrink-0
          w-full
          items-center
          justify-center
          border-y
          border-[#061735]/[0.07]
          bg-[#fbfcfd]
          px-6
          py-3
        "
      >

        {logo ? (
          <img
            src={logo}
            alt={`${name} logo`}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className="
              max-h-[72px]
              max-w-[85%]
              object-contain
            "
            onError={(event) => {
              event.currentTarget.style.display = 'none'

              const fallback =
                event.currentTarget.nextElementSibling

              if (fallback) {
                fallback.classList.remove('hidden')
              }
            }}
          />
        ) : null}

        {/* Logo fallback */}

        <span
          className={`
            ${logo ? 'hidden' : ''}
            text-center
            font-display
            text-base
            font-semibold
            leading-tight
            tracking-[-0.025em]
            text-[#061735]/70
          `}
        >
          {name}
        </span>

      </div>

      {/* =========================================================
          CLIENT IDENTITY
          ---------------------------------------------------------
          flex-1 allows this section to consume available space
          without overlapping the metadata below.
      ========================================================== */}

      <div className="relative z-10 mt-7 flex-1">

        <span
          className="
            mb-4
            block
            h-[2px]
            w-8
            bg-[#c8a45c]
            transition-all
            duration-500
            group-hover:w-16
          "
        />

        <h3
          className="
            max-w-full
            font-display
            text-[1.25rem]
            font-semibold
            leading-[1.08]
            tracking-[-0.035em]
            text-[#061735]
            transition-colors
            duration-300
            group-hover:text-[#168fd0]
            md:text-[1.4rem]
          "
        >
          {name}
        </h3>

      </div>

      {/* =========================================================
          BOTTOM METADATA
          ---------------------------------------------------------
          IMPORTANT:
          This is now normal document flow instead of absolute.
          This prevents long company names from overlapping.
      ========================================================== */}

      <div
        className="
          relative
          z-10
          mt-7
          flex
          shrink-0
          items-end
          justify-between
          gap-4
        "
      >

        <div className="flex min-w-0 flex-col gap-1">

          <span
            className="
              font-mono
              text-[0.52rem]
              font-medium
              uppercase
              tracking-[0.18em]
              text-[#061735]/25
            "
          >
            Partnership
          </span>

          <span
            className="
              font-mono
              text-[0.52rem]
              uppercase
              tracking-[0.14em]
              text-[#061735]/45
            "
          >
            Electrical Engineering
          </span>

        </div>

        <span
          className="
            shrink-0
            font-mono
            text-[0.55rem]
            tracking-[0.18em]
            text-[#061735]/20
            transition-colors
            duration-300
            group-hover:text-[#c8a45c]
          "
        >
          {String(index + 1).padStart(2, '0')} / {total}
        </span>

      </div>

      {/* =========================================================
          BOTTOM GOLD PROGRESS LINE
      ========================================================== */}

      <span
        aria-hidden="true"
        className="
          absolute
          bottom-0
          left-0
          h-[3px]
          w-0
          bg-[#c8a45c]
          transition-all
          duration-500
          group-hover:w-full
        "
      />

      {/* =========================================================
          CORNER ACCENT
      ========================================================== */}

      <span
        aria-hidden="true"
        className="
          absolute
          right-0
          top-0
          h-12
          w-12
          border-l
          border-b
          border-[#c8a45c]/0
          transition-all
          duration-500
          group-hover:border-[#c8a45c]/30
        "
      />

    </motion.article>
  )
}

export default ClientCard
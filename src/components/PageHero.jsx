import React from 'react'
import { motion } from 'framer-motion'

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

function PageHero({
  eyebrow,
  title,
  copy,
  image,
}) {
  return (
    <section
      className="
        relative
        flex
        min-h-[520px]
        items-end
        overflow-hidden
        bg-[#061735]
        pt-[88px]
        md:min-h-[580px]
      "
    >

      {/* =========================================
          BACKGROUND IMAGE
      ========================================== */}

      <div className="absolute inset-0">

        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* Main dark gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#030f2a]/95
            via-[#030f2a]/70
            to-[#030f2a]/20
          "
        />

        {/* Bottom fade */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#030f2a]/85
            via-transparent
            to-[#030f2a]/20
          "
        />

        {/* Subtle blue overlay */}
        <div className="absolute inset-0 bg-[#061735]/10" />

      </div>


      {/* =========================================
          ENGINEERING GRID
      ========================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          opacity-[0.055]
          bg-[linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)]
          bg-[size:72px_72px]
        "
      />


      {/* =========================================
          CONTENT
          SAME CONTAINER AS HEADER
      ========================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1280px]
          px-6
          pb-20
          lg:px-8
          lg:pb-24
          xl:px-4
        "
      >

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-4xl"
        >

          {/* =====================================
              EYEBROW
          ====================================== */}

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3"
          >

            <span className="h-px w-8 bg-[#29b6f6]" />

            <span
              className="
                font-mono
                text-[0.65rem]
                font-medium
                uppercase
                tracking-[0.22em]
                text-[#29b6f6]
              "
            >
              {eyebrow}
            </span>

          </motion.div>


          {/* =====================================
              TITLE
          ====================================== */}

          <motion.h1
            variants={fadeUp}
            className="
              mt-6
              max-w-4xl
              font-display
              text-4xl
              font-extrabold
              uppercase
              leading-[0.95]
              tracking-[-0.045em]
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-[3.5rem]
            "
          >
            {title}
          </motion.h1>


          {/* =====================================
              COPY
          ====================================== */}

          <motion.p
            variants={fadeUp}
            className="
              mt-7
              max-w-2xl
              font-body
              text-base
              leading-7
              text-white/60
              md:text-lg
              md:leading-8
            "
          >
            {copy}
          </motion.p>

        </motion.div>

      </div>


      {/* =========================================
          BOTTOM META
          SAME 1280px HEADER CONTAINER
      ========================================== */}

      <div
        className="
          absolute
          bottom-7
          left-0
          right-0
          z-10
        "
      >

        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1280px]
            items-center
            justify-between
            px-6
            lg:px-8
            xl:px-4
          "
        >

          {/* LEFT BOTTOM LINE */}

          <div className="hidden items-center gap-3 lg:flex">

            <span className="h-px w-10 bg-white/20" />

            <span
              className="
                font-mono
                text-[0.58rem]
                uppercase
                tracking-[0.2em]
                text-white/30
              "
            >
              Engineering & Reliability
            </span>

          </div>


          {/* PAGE CODE */}

          <span
            className="
              ml-auto
              font-mono
              text-[0.6rem]
              font-medium
              uppercase
              tracking-[0.2em]
              text-white/35
            "
          >
            ELECTRO MECH / 01
          </span>

        </div>

      </div>

    </section>
  )
}

export default PageHero
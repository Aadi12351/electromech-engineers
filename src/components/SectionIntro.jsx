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

function SectionIntro({
  eyebrow,
  title,
  copy,
  light = false,
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={fadeUp}
      className="max-w-3xl"
    >

      {/* Eyebrow */}

      <div className="flex items-center gap-3">

        <span
          className={`
            h-px
            w-8
            shrink-0
            ${light ? 'bg-[#29b6f6]' : 'bg-[#168fd0]'}
          `}
        />

        <span
          className={`
            font-mono
            text-[0.65rem]
            font-medium
            uppercase
            tracking-[0.22em]
            ${
              light
                ? 'text-[#29b6f6]'
                : 'text-[#168fd0]'
            }
          `}
        >
          {eyebrow}
        </span>

      </div>

      {/* Heading */}

      <h2
        className={`
          mt-6
          max-w-3xl
          font-display
          text-3xl
          font-bold
          leading-[1.05]
          tracking-[-0.035em]
          md:text-4xl
          lg:text-5xl
          ${
            light
              ? 'text-white'
              : 'text-[#061735]'
          }
        `}
      >
        {title}
      </h2>

      {/* Description */}

      {copy && (
        <p
          className={`
            mt-6
            max-w-2xl
            font-body
            text-base
            leading-7
            md:text-[1.05rem]
            md:leading-8
            ${
              light
                ? 'text-white/50'
                : 'text-black/50'
            }
          `}
        >
          {copy}
        </p>
      )}

    </motion.div>
  )
}

export default SectionIntro
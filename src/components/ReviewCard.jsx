import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

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

function ReviewCard({ review }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={fadeUp}
      className="
        group
        relative
        overflow-hidden
        border
        border-black/10
        bg-white
        p-7
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#c8a45c]/50
        hover:shadow-xl
        hover:shadow-black/5
        md:p-8
      "
    >

      {/* Top accent */}

      <div
        className="
          absolute
          left-0
          top-0
          h-0.5
          w-0
          bg-[#c8a45c]
          transition-all
          duration-500
          group-hover:w-full
        "
      />

      {/* Quote icon */}

      <div className="flex items-start justify-between">

        <Quote
          size={34}
          strokeWidth={1.2}
          className="text-[#c8a45c]"
        />

        <span className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-black/20">
          TESTIMONIAL
        </span>

      </div>

      {/* Rating */}

      <div className="mt-7 flex items-center gap-1">

        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={13}
            fill="currentColor"
            strokeWidth={1}
            className="text-[#c8a45c]"
          />
        ))}

      </div>

      {/* Company */}

      <h3 className="
        mt-6
        font-display
        text-lg
        font-bold
        tracking-[-0.02em]
        text-[#061735]
      ">
        {review.company}
      </h3>

      {/* Review */}

      <p className="
        mt-4
        font-body
        text-sm
        leading-7
        text-black/55
      ">
        “{review.quote}”
      </p>

      {/* Person */}

      <div className="mt-7 border-t border-black/10 pt-5">

        <span className="
          block
          font-body
          text-sm
          font-semibold
          text-[#061735]
        ">
          {review.person}
        </span>

        <small className="
          mt-1
          block
          font-mono
          text-[0.58rem]
          uppercase
          tracking-[0.14em]
          text-black/35
        ">
          {review.role}
        </small>

      </div>

      {/* Corner number */}

      <span className="
        absolute
        bottom-5
        right-6
        font-mono
        text-[0.55rem]
        tracking-[0.15em]
        text-black/10
        transition-colors
        duration-300
        group-hover:text-[#c8a45c]/40
      ">
        01
      </span>

    </motion.article>
  )
}

export default ReviewCard
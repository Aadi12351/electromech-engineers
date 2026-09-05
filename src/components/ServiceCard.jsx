import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
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

function ServiceCard({
  service,
  index = 0,
}) {
  const Icon =
    Icons[service.icon] || Icons.Circle

  const serviceSlug =
    service.slug || service.id

  return (
    <motion.article
      variants={fadeUp}
      className="
        group
        relative
        overflow-hidden
        border
        border-black/10
        bg-white
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#c8a45c]/60
        hover:shadow-2xl
        hover:shadow-black/5
      "
    >

      {/* =====================================
          IMAGE
      ====================================== */}

      <div className="relative aspect-[16/10] overflow-hidden bg-[#061735]">

        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
        />

        {/* Image overlay */}

        <div className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#061735]/80
          via-transparent
          to-transparent
          opacity-80
        " />

        {/* Number */}

        <span className="
          absolute
          right-5
          top-5
          font-mono
          text-[0.62rem]
          font-medium
          tracking-[0.16em]
          text-white/60
        ">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Image label */}

        <span className="
          absolute
          bottom-5
          left-5
          font-mono
          text-[0.58rem]
          uppercase
          tracking-[0.18em]
          text-white/60
        ">
          ELECTRO MECH
        </span>

      </div>

      {/* =====================================
          CONTENT
      ====================================== */}

      <div className="relative p-6 md:p-7">

        {/* Icon */}

        <div className="
          flex
          h-11
          w-11
          items-center
          justify-center
          border
          border-[#c8a45c]/40
          bg-[#c8a45c]/5
          text-[#168fd0]
          transition-all
          duration-300
          group-hover:border-[#c8a45c]
          group-hover:bg-[#c8a45c]
          group-hover:text-black
        ">
          <Icon
            size={20}
            strokeWidth={1.6}
          />
        </div>

        {/* Title */}

        <h3 className="
          mt-6
          font-display
          text-xl
          font-bold
          leading-tight
          tracking-[-0.025em]
          text-[#061735]
        ">
          {service.title}
        </h3>

        {/* Description */}

        <p className="
          mt-3
          min-h-[72px]
          font-body
          text-sm
          leading-6
          text-black/50
        ">
          {service.short}
        </p>

        {/* Explore */}

        <Link
          to={`/services/${serviceSlug}`}
          className="
            mt-6
            inline-flex
            items-center
            gap-2
            border-b
            border-black/15
            pb-2
            font-mono
            text-[0.65rem]
            font-medium
            uppercase
            tracking-[0.12em]
            text-[#061735]
            no-underline
            transition-all
            duration-300
            group-hover:border-[#c8a45c]
            group-hover:text-[#168fd0]
          "
        >
          Explore

          <ArrowUpRight
            size={16}
            strokeWidth={1.7}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          />
        </Link>

        {/* Bottom accent */}

        <div className="
          absolute
          bottom-0
          left-0
          h-0.5
          w-0
          bg-[#c8a45c]
          transition-all
          duration-500
          group-hover:w-full
        " />

      </div>

    </motion.article>
  )
}

export default ServiceCard
import React from 'react'
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


const equipmentImages = [
  'https://images.unsplash.com/photo-1758101755915-462eddc23f57?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1755407454675-454d6ed4c1bc?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1775519519950-9c48495b5488?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1780396140802-52309c205050?auto=format&fit=crop&w=1200&q=85',
]

const equipmentIcons = [
  'Gauge',
  'Activity',
  'Zap',
  'Radar',
  'Thermometer',
  'BarChart3',
  'ShieldCheck',
  'Waves',
  'BatteryCharging',
  'Laptop',
]

function EquipmentCard({
  name,
  description,
  index = 0,
}) {
  const iconName =
    equipmentIcons[index % equipmentIcons.length]

  const Icon =
    Icons[iconName] || Icons.Gauge

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
        hover:border-[#c8a45c]/60
        hover:shadow-xl
        hover:shadow-black/5
        md:p-8
      "
    >

      <div className="relative -mx-7 -mt-7 mb-7 h-44 overflow-hidden md:-mx-8 md:-mt-8">
        <img
          src={equipmentImages[index % equipmentImages.length]}
          alt={`${name} — electrical testing equipment visual reference`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#061735]/75 via-transparent to-transparent" />
      </div>

      {/* =====================================
          TOP NUMBER
      ====================================== */}

      <div className="flex items-start justify-between">

        <span className="
          font-mono
          text-[0.62rem]
          font-medium
          tracking-[0.18em]
          text-black/25
        ">
          {String(index + 1).padStart(2, '0')}
        </span>

        <ArrowUpRight
          size={17}
          strokeWidth={1.4}
          className="
            text-black/15
            transition-all
            duration-300
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
            group-hover:text-[#c8a45c]
          "
        />

      </div>

      {/* =====================================
          ICON
      ====================================== */}

      <div className="
        mt-8
        flex
        h-12
        w-12
        items-center
        justify-center
        border
        border-[#168fd0]/20
        bg-[#168fd0]/5
        text-[#168fd0]
        transition-all
        duration-300
        group-hover:border-[#c8a45c]
        group-hover:bg-[#c8a45c]
        group-hover:text-black
      ">

        <Icon
          size={22}
          strokeWidth={1.6}
        />

      </div>

      {/* =====================================
          CONTENT
      ====================================== */}

      <div className="mt-7">

        <h3 className="
          font-display
          text-xl
          font-bold
          leading-tight
          tracking-[-0.025em]
          text-[#061735]
        ">
          {name}
        </h3>

        <p className="
          mt-3
          font-body
          text-sm
          leading-6
          text-black/50
        ">
          {description}
        </p>

      </div>

      {/* =====================================
          TECHNICAL LABEL
      ====================================== */}

      <div className="
        mt-7
        flex
        items-center
        gap-3
      ">

        <span className="h-px w-7 bg-[#c8a45c]/60" />

        <span className="
          font-mono
          text-[0.56rem]
          font-medium
          uppercase
          tracking-[0.16em]
          text-black/30
        ">
          Testing Equipment
        </span>

      </div>

      {/* =====================================
          BOTTOM ACCENT
      ====================================== */}

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

    </motion.article>
  )
}

export default EquipmentCard
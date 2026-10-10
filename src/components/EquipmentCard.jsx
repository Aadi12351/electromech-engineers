import React from 'react'
import { motion } from 'framer-motion'
import { Gauge, Image as ImageIcon } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

function EquipmentCard({ item, index = 0 }) {
  const { name, make, model, range, quantity = 1, category, image } = item

  return (
    <motion.article variants={fadeUp} className="group relative flex h-full flex-col overflow-hidden border border-[#061735]/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#c8a45c]/60 hover:shadow-xl hover:shadow-black/5">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#e9eef3]">
        {image ? (
          <img src={image} alt={`${name}${make ? ` by ${make}` : ''}`} loading="lazy" decoding="async" className="h-full w-full object-contain p-3 transition-transform duration-700 group-hover:scale-[1.03]" />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 bg-[linear-gradient(rgba(6,23,53,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(6,23,53,.045)_1px,transparent_1px)] bg-[size:28px_28px] text-[#061735]/30">
            <Gauge size={34} strokeWidth={1.2} />
            <span className="font-body text-sm">Technical equipment</span>
          </div>
        )}
        <span className="absolute left-4 top-4 bg-[#061735] px-3 py-1.5 font-body text-xs font-medium text-white">{category}</span>
        {image && <ImageIcon aria-label="Client-supplied equipment photo" className="absolute bottom-4 right-4 text-[#168fd0]" size={18} />}
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <span className="font-body text-sm text-[#061735]/35">{String(index + 1).padStart(2, '0')}</span>
          {quantity > 1 && <span className="bg-[#c8a45c]/15 px-2.5 py-1 font-body text-xs font-semibold text-[#70531c]">{quantity} units</span>}
        </div>
        <h3 className="mt-5 font-display text-xl font-bold leading-tight tracking-[-0.025em] text-[#061735]">{name}</h3>
        <dl className="mt-6 space-y-3 border-t border-[#061735]/10 pt-5 font-body text-sm">
          {make && <div className="grid grid-cols-[70px_1fr] gap-3"><dt className="text-[#061735]/40">Make</dt><dd className="font-medium text-[#061735]">{make}</dd></div>}
          {model && <div className="grid grid-cols-[70px_1fr] gap-3"><dt className="text-[#061735]/40">Model</dt><dd className="font-medium text-[#061735]">{model}</dd></div>}
          {range && <div className="grid grid-cols-[70px_1fr] gap-3"><dt className="text-[#061735]/40">Range</dt><dd className="font-medium leading-6 text-[#061735]">{range}</dd></div>}
        </dl>
      </div>
      <div className="h-0.5 w-0 bg-[#c8a45c] transition-all duration-500 group-hover:w-full" />
    </motion.article>
  )
}

export default EquipmentCard

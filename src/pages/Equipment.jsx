import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Activity, ArrowRight, ArrowUpRight, CheckCircle2, Gauge, Search, ShieldCheck, Wrench } from 'lucide-react'
import { equipment } from '../data/data'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import EquipmentCard from '../components/EquipmentCard'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.045 } } }

const capabilities = [
  { icon: Gauge, title: 'Measurement', copy: 'Calibrated instruments selected for the asset, test standard and required electrical parameter.' },
  { icon: Activity, title: 'Diagnostics', copy: 'Field measurements help engineers identify abnormal conditions and assess equipment performance.' },
  { icon: ShieldCheck, title: 'Verification', copy: 'Testing verifies protection, insulation integrity, operation and readiness before energisation.' },
]

const checks = ['Appropriate test methodology', 'Accurate measurement', 'Disciplined field execution', 'Clear technical reporting']

function Equipment() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All equipment')
  const categories = useMemo(() => ['All equipment', ...new Set(equipment.map((item) => item.category))], [])

  const filteredEquipment = useMemo(() => {
    const term = query.trim().toLowerCase()
    return equipment.filter((item) => {
      const categoryMatch = activeCategory === 'All equipment' || item.category === activeCategory
      const textMatch = !term || [item.name, item.make, item.model, item.range, item.category]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(term))
      return categoryMatch && textMatch
    })
  }, [query, activeCategory])

  const featuredImages = equipment.filter((item) => item.image).slice(0, 3)

  return (
    <>
      <SEO
        title="Electrical Testing Equipment | Electro Mech Engineers"
        description="Explore relay test kits, primary injection equipment, breaker testers, insulation testers, calibrators and diagnostic instruments used by Electro Mech Engineers."
        path="/equipment"
        image="/assets/Equipmensts_hero.png"
        keywords={['relay testing equipment', 'breaker testing kit', 'electrical testing instruments India', 'primary injection kit']}
      />

      <main className="overflow-hidden">
        <PageHero
          eyebrow="Equipment"
          title="Advanced tools. Accurate decisions."
          copy="A field-ready instrument fleet for testing, diagnostics, commissioning and engineering verification."
          image="/assets/Equipmensts_hero.png"
          imageAlt="Electrical testing and diagnostic equipment"
        />

        <section className="relative overflow-hidden bg-[#eaf0f5] py-20 lg:py-28">
          <div aria-hidden="true" className="absolute inset-0 opacity-50 bg-[linear-gradient(rgba(6,23,53,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(6,23,53,.045)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div aria-hidden="true" className="absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-[#168fd0]/10 blur-3xl" />

          <div className="site-container relative z-10">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="grid overflow-hidden bg-[#061735] text-white lg:grid-cols-[1.08fr_.92fr]">
              <div className="p-7 sm:p-10 lg:p-14">
                <div className="flex items-center gap-3"><span className="h-px w-9 bg-[#c8a45c]" /><span className="font-body text-sm font-medium text-[#29b6f6]">Instrument catalogue</span></div>
                <h2 className="mt-7 max-w-2xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">Built for accurate field decisions.</h2>
                <p className="mt-6 max-w-xl font-body text-base leading-7 text-white/55">Explore {equipment.length} equipment models representing the company’s complete 46-unit testing inventory.</p>
                <div className="mt-9 grid grid-cols-3 gap-px border border-white/10 bg-white/10">
                  <div className="bg-[#061735] p-4"><strong className="block font-display text-2xl text-[#c8a45c]">46</strong><span className="font-body text-xs text-white/40">Total units</span></div>
                  <div className="bg-[#061735] p-4"><strong className="block font-display text-2xl text-[#c8a45c]">{categories.length - 1}</strong><span className="font-body text-xs text-white/40">Categories</span></div>
                  <div className="bg-[#061735] p-4"><strong className="block font-display text-2xl text-[#c8a45c]">80 kV</strong><span className="font-body text-xs text-white/40">VLF capacity</span></div>
                </div>
              </div>

              <div className="grid min-h-[360px] grid-cols-2 gap-px bg-white/10">
                {featuredImages.map((item, index) => (
                  <div key={item.image} className={`group relative overflow-hidden bg-white ${index === 0 ? 'row-span-2' : ''}`}>
                    <img src={item.image} alt={item.name} className="h-full w-full object-contain p-3 transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#061735] to-transparent px-4 pb-4 pt-14"><span className="font-body text-xs font-semibold text-white">{item.name}</span></div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_350px] lg:items-end">
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-[-0.035em] text-[#061735] sm:text-4xl">Find the right instrument</h2>
                <div className="mt-6 flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button key={category} type="button" onClick={() => setActiveCategory(category)} className={`border px-4 py-2.5 font-body text-sm transition-colors ${activeCategory === category ? 'border-[#061735] bg-[#061735] text-white' : 'border-[#061735]/15 bg-white text-[#061735]/65 hover:border-[#168fd0] hover:text-[#168fd0]'}`}>{category}</button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="equipment-search" className="mb-3 block font-body text-sm font-medium text-[#061735]/55">Search by equipment, make or model</label>
                <div className="flex items-center border-b border-[#061735]/30 bg-white px-4 focus-within:border-[#168fd0]">
                  <Search size={18} className="text-[#061735]/35" />
                  <input id="equipment-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Example: relay, Kyoritsu..." className="h-14 w-full bg-transparent px-3 font-body text-base text-[#061735] placeholder:text-[#061735]/30 focus:outline-none" />
                  {query && <button type="button" onClick={() => setQuery('')} className="font-body text-sm text-[#168fd0]">Clear</button>}
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between border-y border-[#061735]/10 py-4 font-body text-sm text-[#061735]/45"><span>Showing <strong className="text-[#061735]">{filteredEquipment.length}</strong> models</span><span className="hidden sm:block">Serial numbers retained as internal records</span></div>

            {filteredEquipment.length ? (
              <motion.div key={`${activeCategory}-${query}`} initial="hidden" animate="visible" variants={stagger} className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filteredEquipment.map((item) => <EquipmentCard key={`${item.name}-${item.make || ''}-${item.model || ''}`} item={item} index={equipment.indexOf(item)} />)}
              </motion.div>
            ) : (
              <div className="mt-8 flex min-h-72 flex-col items-center justify-center border border-[#061735]/10 bg-white p-8 text-center"><Search size={28} className="text-[#168fd0]" /><h3 className="mt-5 font-display text-2xl font-semibold text-[#061735]">No matching equipment</h3><p className="mt-2 font-body text-base text-slate-500">Try another search or reset the selected category.</p><button type="button" onClick={() => { setQuery(''); setActiveCategory('All equipment') }} className="mt-6 inline-flex items-center gap-2 border-b border-[#061735]/25 pb-2 font-body text-sm font-semibold text-[#061735]">View all equipment <ArrowRight size={16} /></button></div>
            )}
          </div>
        </section>

        <section className="bg-[#050f23] py-20 text-white lg:py-28">
          <div className="site-container">
            <div className="max-w-3xl"><div className="flex items-center gap-3"><span className="h-px w-9 bg-[#c8a45c]" /><span className="font-body text-sm font-medium text-[#29b6f6]">Testing capability</span></div><h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">The right instrument for the right measurement.</h2></div>
            <div className="mt-12 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
              {capabilities.map(({ icon: Icon, title, copy }, index) => <article key={title} className="group bg-[#061735] p-8 transition-colors hover:bg-[#0a2148] lg:p-10"><div className="flex items-start justify-between"><Icon size={26} className="text-[#29b6f6]" /><span className="font-body text-xs text-white/25">0{index + 1}</span></div><h3 className="mt-20 font-display text-2xl font-semibold">{title}</h3><p className="mt-4 font-body text-base leading-7 text-white/45">{copy}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="site-container grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
            <div className="relative overflow-hidden bg-[#061735]"><img src="/assets/equipment/automatic-relay-test-kit.webp" alt="Automatic relay test kit used by Electro Mech Engineers" className="min-h-[430px] w-full object-contain p-6" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#061735] to-transparent p-7 pt-24"><p className="font-display text-2xl font-semibold text-white">Automatic relay testing capability</p></div></div>
            <div><div className="flex items-center gap-3"><span className="h-px w-9 bg-[#c8a45c]" /><span className="font-body text-sm font-medium text-[#168fd0]">Engineering confidence</span></div><h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#061735] sm:text-5xl">Equipment supports the engineering process.</h2><p className="mt-6 font-body text-base leading-7 text-slate-500">Test instruments generate measurements. Field experience turns those measurements into clear conclusions about an electrical asset or protection system.</p><div className="mt-8 border-t border-[#061735]/10">{checks.map((item) => <div key={item} className="flex items-center gap-4 border-b border-[#061735]/10 py-4"><CheckCircle2 size={18} className="text-[#168fd0]" /><span className="font-body text-base font-medium text-[#061735]">{item}</span></div>)}</div><Link to="/services" className="mt-9 inline-flex items-center gap-3 border-b border-[#061735]/25 pb-2 font-body text-sm font-semibold text-[#061735] no-underline hover:text-[#168fd0]">Explore our services <ArrowUpRight size={17} /></Link></div>
          </div>
        </section>

        <section className="bg-[#061735] py-20 text-white"><div className="site-container flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"><div><div className="flex items-center gap-3"><Wrench size={18} className="text-[#c8a45c]" /><span className="font-body text-sm text-[#29b6f6]">Need testing support?</span></div><h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Tell us about your equipment and testing requirement.</h2></div><Link to="/contact" className="inline-flex w-fit items-center gap-3 bg-[#c8a45c] px-6 py-4 font-body text-sm font-semibold text-[#061735] no-underline transition-colors hover:bg-white">Discuss your requirement <ArrowRight size={18} /></Link></div></section>
      </main>
    </>
  )
}

export default Equipment

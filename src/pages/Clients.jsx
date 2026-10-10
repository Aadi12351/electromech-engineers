import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Building2, Search, ShieldCheck, Handshake } from 'lucide-react'
import { clients } from '../data/data'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import ClientCard from '../components/ClientCard'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }

const strengths = [
  { icon: Handshake, title: 'Long-term relationships', copy: 'Dependable technical support for operating facilities and project teams.' },
  { icon: Building2, title: 'Critical industries', copy: 'Experience across infrastructure, manufacturing, energy, healthcare and process plants.' },
  { icon: ShieldCheck, title: 'Engineering accountability', copy: 'Disciplined testing, commissioning and reporting for critical electrical systems.' },
]

function Clients() {
  const [query, setQuery] = useState('')
  const filteredClients = useMemo(() => {
    const term = query.trim().toLowerCase()
    return term ? clients.filter((name) => name.toLowerCase().includes(term)) : clients
  }, [query])

  return (
    <>
      <SEO
        title="Our Clients | Electro Mech Engineers"
        description="Organizations served by Electro Mech Engineers across industrial, infrastructure, energy, manufacturing, healthcare and public-sector applications."
        path="/clients"
        image="/assets/substation.jpg"
        keywords={['Electro Mech Engineers clients', 'industrial electrical testing India', 'electrical commissioning Mumbai']}
      />

      <main className="overflow-hidden">
        <PageHero
          eyebrow="Our clients"
          title="Trusted across critical industries."
          copy="Electrical engineering, testing and commissioning support for organizations across India."
          image="/assets/substation.jpg"
          imageAlt="Industrial substation infrastructure"
        />

        <section className="bg-white py-24 lg:py-32">
          <div className="site-container">
            <div className="grid gap-10 border-b border-[#061735]/10 pb-10 lg:grid-cols-[1fr_360px] lg:items-end">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <div className="mb-5 flex items-center gap-3"><span className="h-px w-10 bg-[#c8a45c]" /><span className="font-body text-sm font-medium text-[#168fd0]">Client directory</span></div>
                <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#061735] sm:text-5xl lg:text-6xl">Organizations we have served.</h2>
                <p className="mt-6 max-w-2xl font-body text-base leading-7 text-slate-500">The following client names are drawn from the company’s supplied project records.</p>
              </motion.div>

              <div>
                <label htmlFor="client-search" className="mb-3 block font-body text-sm font-medium text-[#061735]/55">Search clients</label>
                <div className="flex items-center border-b border-[#061735]/25 focus-within:border-[#168fd0]">
                  <Search size={18} className="text-[#061735]/35" />
                  <input id="client-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Enter an organization name" className="h-12 w-full bg-transparent px-3 font-body text-base text-[#061735] placeholder:text-[#061735]/30 focus:outline-none" />
                  {query && <button type="button" onClick={() => setQuery('')} className="font-body text-sm text-[#168fd0]">Clear</button>}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between py-6 font-body text-sm text-[#061735]/45"><span><strong className="text-[#061735]">{filteredClients.length}</strong> organizations</span><span className="hidden sm:block">Verified client list</span></div>

            {filteredClients.length ? (
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={stagger} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredClients.map((name) => <ClientCard key={name} name={name} index={clients.indexOf(name)} total={clients.length} />)}
              </motion.div>
            ) : (
              <div className="flex min-h-64 items-center justify-center border border-[#061735]/10 bg-[#f5f7f9] p-8 text-center font-body text-base text-slate-500">No client matches “{query}”.</div>
            )}
          </div>
        </section>

        <section className="bg-[#f5f7f9] py-20 lg:py-24">
          <div className="site-container grid gap-5 md:grid-cols-3">
            {strengths.map(({ icon: Icon, title, copy }) => <div key={title} className="border border-[#061735]/10 bg-white p-7"><Icon size={24} strokeWidth={1.4} className="text-[#168fd0]" /><h3 className="mt-6 font-display text-xl font-semibold text-[#061735]">{title}</h3><p className="mt-3 font-body text-sm leading-6 text-slate-500">{copy}</p></div>)}
          </div>
        </section>

        <section className="bg-[#061735] py-20 text-white">
          <div className="site-container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div><p className="font-body text-sm font-medium text-[#29b6f6]">Discuss your requirement</p><h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Bring dependable testing and engineering support to your next project.</h2></div>
            <Link to="/contact" className="inline-flex shrink-0 items-center gap-3 bg-[#c8a45c] px-6 py-4 font-body text-sm font-semibold text-[#061735] no-underline transition-colors hover:bg-white">Contact our team <ArrowRight size={18} /></Link>
          </div>
        </section>
      </main>
    </>
  )
}

export default Clients

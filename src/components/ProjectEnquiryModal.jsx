import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Check, CheckCircle2, X } from 'lucide-react'
import { company, services } from '../data/data'

const initialForm = {
  name: '', companyName: '', email: '', phone: '', service: '', siteLocation: '', voltageLevel: '', timeline: '', projectDetails: '', consent: false,
}

const fieldsByStep = {
  1: ['name', 'email', 'phone'],
  2: ['service', 'siteLocation'],
  3: ['projectDetails', 'consent'],
}

function ProjectEnquiryModal({ open, onClose }) {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const panelRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKeyDown)
    setTimeout(() => panelRef.current?.focus(), 0)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  const update = (event) => {
    const { name, value, type, checked } = event.target
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  const validate = () => {
    const nextErrors = {}
    fieldsByStep[step]?.forEach((name) => {
      if (!form[name]) nextErrors[name] = 'This field is required.'
    })
    if (step === 1 && form.email && !/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Enter a valid email address.'
    if (step === 1 && form.phone && form.phone.replace(/\D/g, '').length < 10) nextErrors.phone = 'Enter a valid phone number.'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const next = () => {
    if (validate()) setStep((current) => Math.min(current + 1, 3))
  }

  const submit = (event) => {
    event.preventDefault()
    if (!validate()) return
    const subject = `New project enquiry from ${form.name}`
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.companyName || 'Not provided'}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Site location: ${form.siteLocation}`,
      `Voltage level: ${form.voltageLevel || 'Not provided'}`,
      `Preferred timeline: ${form.timeline || 'Not provided'}`,
      '',
      'Project details:',
      form.projectDetails,
    ].join('\n')
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setStep(4)
  }

  const close = () => {
    onClose()
    setTimeout(() => { setStep(1); setForm(initialForm); setErrors({}) }, 250)
  }

  const inputClass = (name) => `mt-2 h-12 w-full border bg-white px-4 font-body text-base text-[#061735] outline-none transition-colors placeholder:text-[#061735]/30 focus:border-[#168fd0] ${errors[name] ? 'border-red-500' : 'border-[#061735]/15'}`

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[120] flex items-end justify-center bg-[#020814]/80 p-0 backdrop-blur-sm sm:items-center sm:p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.target === event.currentTarget && close()}>
          <motion.div ref={panelRef} role="dialog" aria-modal="true" aria-labelledby="project-modal-title" tabIndex={-1} className="relative max-h-[94vh] w-full overflow-y-auto bg-[#f5f7f9] shadow-2xl outline-none sm:max-w-3xl" initial={{ opacity: 0, y: 40, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 24, scale: 0.98 }} transition={{ duration: 0.28 }}>
            <header className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#061735] px-6 py-5 text-white sm:px-8">
              <div><span className="font-body text-sm text-[#29b6f6]">Project enquiry</span><h2 id="project-modal-title" className="mt-1 font-display text-xl font-semibold">Tell us what you need</h2></div>
              <button type="button" onClick={close} aria-label="Close project form" className="flex h-10 w-10 items-center justify-center border border-white/15 text-white transition-colors hover:border-[#c8a45c] hover:text-[#c8a45c]"><X size={19} /></button>
            </header>

            {step < 4 && <div className="border-b border-[#061735]/10 bg-white px-6 py-5 sm:px-8"><div className="flex items-center gap-3">{[1, 2, 3].map((number) => <React.Fragment key={number}><div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-body text-sm font-semibold ${step >= number ? 'bg-[#168fd0] text-white' : 'bg-[#e7ebef] text-[#061735]/40'}`}>{step > number ? <Check size={15} /> : number}</div>{number < 3 && <div className={`h-px flex-1 ${step > number ? 'bg-[#168fd0]' : 'bg-[#061735]/10'}`} />}</React.Fragment>)}</div><div className="mt-3 flex justify-between font-body text-xs text-[#061735]/45"><span>Contact</span><span>Requirement</span><span>Project</span></div></div>}

            <form onSubmit={submit} className="p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {step === 1 && <motion.section key="contact" variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }} initial="hidden" animate="visible" exit="hidden"><h3 className="font-display text-3xl font-semibold tracking-[-0.035em] text-[#061735]">First, your contact details.</h3><p className="mt-2 font-body text-sm leading-6 text-slate-500">We’ll use these details only to respond to your project enquiry.</p><div className="mt-7 grid gap-5 sm:grid-cols-2"><Field label="Full name *" name="name" value={form.name} onChange={update} error={errors.name} className={inputClass('name')} placeholder="Your name" autoFocus /><Field label="Company name" name="companyName" value={form.companyName} onChange={update} className={inputClass('companyName')} placeholder="Organization" /><Field label="Email address *" name="email" type="email" value={form.email} onChange={update} error={errors.email} className={inputClass('email')} placeholder="name@company.com" /><Field label="Phone number *" name="phone" type="tel" value={form.phone} onChange={update} error={errors.phone} className={inputClass('phone')} placeholder="+91" /></div></motion.section>}

                {step === 2 && <motion.section key="requirement" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}><h3 className="font-display text-3xl font-semibold tracking-[-0.035em] text-[#061735]">What support do you need?</h3><p className="mt-2 font-body text-sm leading-6 text-slate-500">Select the closest service. The team can refine the scope with you.</p><div className="mt-7 grid gap-5 sm:grid-cols-2"><label className="font-body text-sm font-medium text-[#061735]">Service required *<select name="service" value={form.service} onChange={update} className={inputClass('service')}><option value="">Select a service</option>{services.map((service) => <option key={service.id} value={service.title}>{service.title}</option>)}</select>{errors.service && <ErrorText text={errors.service} />}</label><Field label="Project or site location *" name="siteLocation" value={form.siteLocation} onChange={update} error={errors.siteLocation} className={inputClass('siteLocation')} placeholder="City, state" /><Field label="System voltage level" name="voltageLevel" value={form.voltageLevel} onChange={update} className={inputClass('voltageLevel')} placeholder="Example: 11 kV / 33 kV" /><label className="font-body text-sm font-medium text-[#061735]">Preferred timeline<select name="timeline" value={form.timeline} onChange={update} className={inputClass('timeline')}><option value="">Select timeline</option><option>Urgent / Breakdown support</option><option>Within 1–2 weeks</option><option>Within one month</option><option>Planning stage</option></select></label></div></motion.section>}

                {step === 3 && <motion.section key="project" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}><h3 className="font-display text-3xl font-semibold tracking-[-0.035em] text-[#061735]">Describe the project.</h3><p className="mt-2 font-body text-sm leading-6 text-slate-500">Include the equipment, issue, site condition or expected testing scope.</p><label className="mt-7 block font-body text-sm font-medium text-[#061735]">Project details *<textarea name="projectDetails" value={form.projectDetails} onChange={update} rows="6" placeholder="Tell us about your requirement..." className={`mt-2 w-full resize-y border bg-white p-4 font-body text-base leading-7 text-[#061735] outline-none focus:border-[#168fd0] ${errors.projectDetails ? 'border-red-500' : 'border-[#061735]/15'}`} />{errors.projectDetails && <ErrorText text={errors.projectDetails} />}</label><label className="mt-5 flex cursor-pointer items-start gap-3 border border-[#061735]/10 bg-white p-4"><input type="checkbox" name="consent" checked={form.consent} onChange={update} className="mt-1 h-4 w-4 accent-[#168fd0]" /><span className="font-body text-sm leading-6 text-[#061735]/65">I agree that Electro Mech Engineers may contact me regarding this enquiry.</span></label>{errors.consent && <ErrorText text={errors.consent} />}</motion.section>}

                {step === 4 && <motion.section key="success" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="py-8 text-center sm:py-12"><div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#168fd0]/10"><CheckCircle2 size={42} className="text-[#168fd0]" /></div><h3 className="mt-7 font-display text-4xl font-semibold tracking-[-0.04em] text-[#061735]">Thank you for contacting us.</h3><p className="mx-auto mt-4 max-w-lg font-body text-base leading-7 text-slate-500">Your enquiry has been prepared for our team. Please send the opened email, and our team will contact you within the next 48 hours.</p><button type="button" onClick={close} className="mt-8 bg-[#061735] px-7 py-3.5 font-body text-sm font-semibold text-white transition-colors hover:bg-[#168fd0]">Close</button></motion.section>}
              </AnimatePresence>

              {step < 4 && <footer className="mt-9 flex items-center justify-between border-t border-[#061735]/10 pt-6"><button type="button" onClick={() => step === 1 ? close() : setStep((current) => current - 1)} className="inline-flex items-center gap-2 font-body text-sm font-semibold text-[#061735]/60 hover:text-[#061735]">{step > 1 && <ArrowLeft size={16} />}{step === 1 ? 'Cancel' : 'Back'}</button>{step < 3 ? <button type="button" onClick={next} className="inline-flex items-center gap-2 bg-[#c8a45c] px-6 py-3.5 font-body text-sm font-semibold text-[#061735] transition-colors hover:bg-[#061735] hover:text-white">Continue <ArrowRight size={16} /></button> : <button type="submit" className="inline-flex items-center gap-2 bg-[#c8a45c] px-6 py-3.5 font-body text-sm font-semibold text-[#061735] transition-colors hover:bg-[#061735] hover:text-white">Send enquiry <ArrowRight size={16} /></button>}</footer>}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Field({ label, error, ...props }) {
  return <label className="font-body text-sm font-medium text-[#061735]">{label}<input {...props} />{error && <ErrorText text={error} />}</label>
}

function ErrorText({ text }) {
  return <span className="mt-1.5 block font-body text-xs text-red-600">{text}</span>
}

export default ProjectEnquiryModal

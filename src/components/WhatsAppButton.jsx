import { useState } from 'react'
import { MessageCircle, X, ArrowUpRight } from 'lucide-react'

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const phoneNumber = '918433508549'

  const message = encodeURIComponent(
    'Hello Electro Mech Engineers, I would like to know more about your services.'
  )

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <div className="fixed bottom-5 right-5 z-[100] sm:bottom-6 sm:right-6">
      {/* Expanded Card */}
      <div
        className={`
          absolute bottom-[72px] right-0
          w-[310px] overflow-hidden
          rounded-2xl
          border border-slate-200
          bg-white
          shadow-[0_18px_50px_rgba(0,0,0,0.16)]
          transition-all duration-300 ease-out
          ${
            isOpen
              ? 'translate-y-0 scale-100 opacity-100'
              : 'pointer-events-none translate-y-3 scale-95 opacity-0'
          }
        `}
      >
        {/* Header */}
        <div className="bg-[#061735] px-5 py-4 text-white">
          <div className="flex items-center gap-3">
            {/* WhatsApp Logo */}
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366]">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-white"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.88 11.88 0 0 0 12.05 0C5.5 0 .17 5.32.17 11.88c0 2.09.55 4.13 1.6 5.93L.06 24l6.34-1.66a11.86 11.86 0 0 0 5.65 1.43h.01c6.55 0 11.88-5.32 11.88-11.88 0-3.17-1.23-6.15-3.42-8.41ZM12.06 21.75h-.01a9.85 9.85 0 0 1-5.02-1.37l-.36-.21-3.76.99 1-3.67-.23-.38a9.83 9.83 0 0 1-1.51-5.23c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.03 6.96 2.89a9.82 9.82 0 0 1 2.89 6.96c0 5.43-4.42 9.85-9.82 9.87Zm5.4-7.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
              </svg>
            </div>

            <div>
              <p className="text-sm font-medium text-white/70">
                WhatsApp
              </p>
              <p className="text-base font-semibold">
                Electro Mech Engineers
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-5 py-5">
          <p className="text-sm font-medium text-slate-900">
            Need technical assistance?
          </p>

          <p className="mt-1.5 text-sm leading-6 text-slate-500">
            Connect directly with our team for enquiries, engineering services
            and technical support.
          </p>

          <div className="mt-4 rounded-xl bg-slate-50 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.12em] text-slate-400">
              WhatsApp
            </p>

            <p className="mt-1 text-sm font-semibold text-slate-900">
              +91 84335 08549
            </p>
          </div>

          {/* WhatsApp CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-4 flex w-full items-center justify-center gap-2
              rounded-xl
              bg-[#25D366]
              px-4 py-3
              text-sm font-semibold text-white
              transition-all duration-200
              hover:bg-[#20bd5a]
              hover:shadow-lg
              active:scale-[0.98]
            "
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-current"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.88 11.88 0 0 0 12.05 0C5.5 0 .17 5.32.17 11.88c0 2.09.55 4.13 1.6 5.93L.06 24l6.34-1.66a11.86 11.86 0 0 0 5.65 1.43h.01c6.55 0 11.88-5.32 11.88-11.88 0-3.17-1.23-6.15-3.42-8.41ZM12.06 21.75h-.01a9.85 9.85 0 0 1-5.02-1.37l-.36-.21-3.76.99 1-3.67-.23-.38a9.83 9.83 0 0 1-1.51-5.23c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.03 6.96 2.89a9.82 9.82 0 0 1 2.89 6.96c0 5.43-4.42 9.85-9.82 9.87Zm5.4-7.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
            </svg>

            Message on WhatsApp

            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Floating Button */}
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        aria-label={isOpen ? 'Close WhatsApp contact' : 'Open WhatsApp contact'}
        aria-expanded={isOpen}
        className="
          group relative
          flex h-14 w-14
          items-center justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-[0_8px_25px_rgba(37,211,102,0.35)]
          transition-all duration-300
          hover:scale-105
          hover:shadow-[0_10px_30px_rgba(37,211,102,0.45)]
          focus:outline-none
          focus:ring-4
          focus:ring-[#25D366]/30
        "
      >
        {/* Pulse */}
        {!isOpen && (
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/30" />
        )}

        {isOpen ? (
          <X className="h-6 w-6" strokeWidth={2.2} />
        ) : (
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7 fill-current"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.88 11.88 0 0 0 12.05 0C5.5 0 .17 5.32.17 11.88c0 2.09.55 4.13 1.6 5.93L.06 24l6.34-1.66a11.86 11.86 0 0 0 5.65 1.43h.01c6.55 0 11.88-5.32 11.88-11.88 0-3.17-1.23-6.15-3.42-8.41ZM12.06 21.75h-.01a9.85 9.85 0 0 1-5.02-1.37l-.36-.21-3.76.99 1-3.67-.23-.38a9.83 9.83 0 0 1-1.51-5.23c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.03 6.96 2.89a9.82 9.82 0 0 1 2.89 6.96c0 5.43-4.42 9.85-9.82 9.87Zm5.4-7.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
          </svg>
        )}
      </button>
    </div>
  )
}

export default WhatsAppButton
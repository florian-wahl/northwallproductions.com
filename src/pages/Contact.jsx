import { useState } from 'react';
import SnowCanvas from '../components/SnowCanvas';
import MountainSilhouette from '../components/MountainSilhouette';

/**
 * Contact form powered by Formspree.
 * Replace FORMSPREE_ENDPOINT with your form URL from formspree.io
 */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const subjects = [
  'General Inquiry',
  'Project Collaboration',
  'Distribution / Licensing',
  'Press & Media',
  'Other',
];

function ContactMethod({ icon, label, value, href }) {
  const inner = (
    <div className="flex items-center gap-4 p-4 bg-white border border-edge rounded-xl hover:bg-glacier-wash hover:border-edge-strong transition-all duration-200 group shadow-sm shadow-edge/30">
      <div className="w-10 h-10 bg-glacier-wash border border-glacier-pale rounded-lg flex items-center justify-center flex-shrink-0 text-glacier text-lg">
        {icon}
      </div>
      <div>
        <div className="text-[0.65rem] font-bold tracking-widest uppercase text-ink-dim mb-0.5">{label}</div>
        <div className="text-[0.9rem] text-ink font-medium group-hover:text-glacier transition-colors">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method:  'POST',
        body:    new FormData(e.target),
        headers: { Accept: 'application/json' },
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) e.target.reset();
    } catch {
      setStatus('error');
    }
  };

  const inputCls = `w-full bg-bg-elevated border border-edge rounded-xl px-4 py-3 text-ink text-sm
                    placeholder:text-ink-ghost font-medium
                    focus:outline-none focus:border-glacier focus:ring-2 focus:ring-glacier/10 transition-all`;

  return (
    <div className="bg-bg-base min-h-screen">

      {/* ── PAGE HERO ──────────────────────────────────────── */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: [
              'radial-gradient(ellipse 100% 60% at 50% -10%, rgba(100,210,200,0.09) 0%, transparent 65%)',
              '#f4f8f9',
            ].join(', '),
          }}
        />
        <SnowCanvas count={35} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 pt-36 pb-28">
          <p className="text-[0.7rem] font-bold tracking-[0.28em] uppercase text-glacier mb-4 flex items-center gap-3">
            <span className="block w-6 h-px bg-glacier/50" />
            Get in Touch
          </p>
          <h1
            className="font-heading font-black text-ink tracking-tight leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
          >
            Contact Us
          </h1>
          <p className="text-ink-muted leading-8 mt-4 max-w-[48ch]">
            Whether you're a filmmaker, distributor, journalist, or a fan — we'd love to hear from you.
          </p>
        </div>
        <MountainSilhouette />
      </div>

      <div className="h-px bg-edge" />

      {/* ── CONTENT ────────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <h2 className="font-heading font-extrabold text-3xl text-ink tracking-tight mb-6">Let's Connect</h2>
            <p className="text-ink-muted leading-8 mb-3">
              NorthWall Productions is based in Canada and open to collaborations with partners worldwide.
              We welcome inquiries from directors, writers, distributors, broadcasters, and press.
            </p>
            <p className="text-ink-muted leading-8 mb-10">
              Response time is typically within two business days.
            </p>
            <div className="flex flex-col gap-3">
              <ContactMethod icon="✉" label="Email" value="hello@northwallproductions.com" href="mailto:hello@northwallproductions.com" />
              <ContactMethod icon="◎" label="Based in" value="Canada" />
              <ContactMethod icon="◷" label="Response Time" value="Within 2 business days" />
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white border border-edge rounded-2xl p-8 md:p-10 shadow-sm shadow-edge/40">
            <h2 className="font-heading font-extrabold text-2xl text-ink tracking-tight mb-7">Send a Message</h2>

            {status === 'success' ? (
              <div className="bg-status-completed/8 border border-status-completed/25 text-status-completed rounded-xl p-5 text-sm leading-6">
                <strong className="block mb-1">Message sent!</strong>
                Thank you for reaching out. We'll reply within two business days.
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[0.7rem] font-bold tracking-widest uppercase text-ink-muted mb-2">
                      Name <span className="text-glacier">*</span>
                    </label>
                    <input type="text" name="name" required placeholder="Your name" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-[0.7rem] font-bold tracking-widest uppercase text-ink-muted mb-2">
                      Email <span className="text-glacier">*</span>
                    </label>
                    <input type="email" name="email" required placeholder="your@email.com" className={inputCls} />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-[0.7rem] font-bold tracking-widest uppercase text-ink-muted mb-2">Subject</label>
                  <select name="subject" className={inputCls + ' cursor-pointer'} style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%237aa0aa' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', paddingRight: '2.5rem' }}>
                    {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-[0.7rem] font-bold tracking-widest uppercase text-ink-muted mb-2">
                    Message <span className="text-glacier">*</span>
                  </label>
                  <textarea name="message" required rows={5} placeholder="Tell us about your project or inquiry…" className={inputCls + ' resize-y min-h-[120px] leading-6'} />
                </div>

                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 text-sm mb-5">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-glacier text-white font-bold text-sm py-3.5 rounded-xl
                             hover:bg-glacier-mid hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(11,110,125,0.25)]
                             disabled:opacity-60 disabled:cursor-not-allowed
                             transition-all duration-200"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>

                <p className="text-[0.7rem] text-ink-dim text-center mt-4">
                  Or email us at{' '}
                  <a href="mailto:hello@northwallproductions.com" className="text-glacier hover:underline font-semibold">
                    hello@northwallproductions.com
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

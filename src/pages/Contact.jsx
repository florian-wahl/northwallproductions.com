import { useState } from 'react';
import SnowCanvas from '../components/SnowCanvas';
import MountainSilhouette from '../components/MountainSilhouette';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const subjects = ['General Inquiry', 'Project Collaboration', 'Distribution / Licensing', 'Press & Media', 'Other'];

function ContactMethod({ icon, label, value, href }) {
  const inner = (
    <div className="flex items-center gap-4 p-4 bg-white border border-edge hover:border-edge-strong hover:bg-bg-elevated transition-all duration-200 group">
      <div className="w-10 h-10 border border-edge flex items-center justify-center flex-shrink-0 text-ink-dim text-base">
        {icon}
      </div>
      <div>
        <div className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-ink-dim mb-0.5">{label}</div>
        <div className="text-[0.875rem] text-ink font-medium group-hover:text-ink-muted transition-colors">{value}</div>
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
        method: 'POST', body: new FormData(e.target), headers: { Accept: 'application/json' },
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) e.target.reset();
    } catch { setStatus('error'); }
  };

  const inputCls = `w-full bg-bg-elevated border border-edge px-4 py-3 text-ink text-sm font-medium
                    placeholder:text-ink-ghost focus:outline-none focus:border-ink-dim focus:ring-1 focus:ring-ink/10 transition-all`;

  return (
    <div className="bg-bg-base min-h-screen">

      <div className="relative overflow-hidden bg-[#f8f8f8]">
        <SnowCanvas count={35} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 pt-40 pb-36">
          <p className="text-[0.62rem] font-bold tracking-[0.32em] uppercase text-ink-dim mb-5 flex items-center gap-3">
            <span className="block w-8 h-px bg-edge-strong" />
            Get in Touch
          </p>
          <h1
            className="font-heading font-black text-ink uppercase tracking-tight leading-none mb-6"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
          >
            Contact
          </h1>
          <p className="text-ink leading-8 max-w-[46ch]">
            Whether you're a filmmaker, distributor, journalist, or a fan — we'd love to hear from you.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-80 pointer-events-none" style={{ zIndex: 5, background: 'linear-gradient(to bottom, rgba(248,248,248,0) 0%, rgba(248,248,248,0.95) 100%)' }} />
        <MountainSilhouette />
      </div>

      <div className="h-px bg-edge" />

      <div className="max-w-[1200px] mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div>
            <h2 className="font-heading font-black text-2xl text-ink uppercase tracking-tight mb-6">Let's Connect</h2>
            <p className="text-ink-muted leading-8 mb-3 font-light">
              NorthWall Productions is based in Canada and open to collaborations worldwide.
              We welcome inquiries from directors, writers, distributors, broadcasters, and press.
            </p>
            <p className="text-ink-muted leading-8 mb-10 font-light">
              Response time is typically within two business days.
            </p>
            <div className="flex flex-col gap-3">
              <ContactMethod icon="✉" label="Email" value="hello@northwallproductions.com" href="mailto:hello@northwallproductions.com" />
              <ContactMethod icon="◎" label="Based in" value="Canada" />
              <ContactMethod icon="◷" label="Response Time" value="Within 2 business days" />
            </div>
          </div>

          <div className="bg-white border border-edge p-8 md:p-10">
            <h2 className="font-heading font-black text-xl text-ink uppercase tracking-tight mb-7">Send a Message</h2>

            {status === 'success' ? (
              <div className="border border-edge-strong bg-bg-elevated p-5 text-sm leading-7 text-ink-muted font-light">
                <strong className="block mb-1 text-ink font-bold">Message sent.</strong>
                Thank you for reaching out. We'll reply within two business days.
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[0.62rem] font-bold tracking-[0.2em] uppercase text-ink-dim mb-2">
                      Name <span className="text-ink">*</span>
                    </label>
                    <input type="text" name="name" required placeholder="Your name" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-[0.62rem] font-bold tracking-[0.2em] uppercase text-ink-dim mb-2">
                      Email <span className="text-ink">*</span>
                    </label>
                    <input type="email" name="email" required placeholder="your@email.com" className={inputCls} />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-[0.62rem] font-bold tracking-[0.2em] uppercase text-ink-dim mb-2">Subject</label>
                  <select name="subject" className={inputCls + ' cursor-pointer'} style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23999' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', paddingRight: '2.5rem' }}>
                    {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-[0.62rem] font-bold tracking-[0.2em] uppercase text-ink-dim mb-2">
                    Message <span className="text-ink">*</span>
                  </label>
                  <textarea name="message" required rows={5} placeholder="Tell us about your project or inquiry…" className={inputCls + ' resize-y min-h-[120px] leading-7'} />
                </div>

                {status === 'error' && (
                  <div className="border border-edge-strong bg-bg-elevated text-ink-muted p-4 text-sm mb-5 font-light">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-ink text-white font-bold text-[0.75rem] tracking-[0.18em] uppercase py-4
                             hover:bg-ink-muted hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)]
                             disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>

                <p className="text-[0.65rem] text-ink-dim text-center mt-4 font-light tracking-wide">
                  Or email{' '}
                  <a href="mailto:hello@northwallproductions.com" className="underline hover:text-ink transition-colors font-medium">
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

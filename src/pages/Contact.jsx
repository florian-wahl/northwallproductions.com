import { useState } from 'react';
import SnowCanvas from '../components/SnowCanvas';

/**
 * Contact form powered by Formspree.
 *
 * To activate:
 *  1. Create a free account at https://formspree.io
 *  2. Create a new form and copy the endpoint URL
 *  3. Replace the FORMSPREE_ENDPOINT constant below
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
  const content = (
    <div className="flex items-center gap-4 p-4 bg-bg-card border border-surface-border rounded-xl hover:bg-bg-card-hover hover:border-surface-border-light transition-all duration-200 group">
      <div className="w-10 h-10 bg-ice/10 border border-ice/20 rounded-lg flex items-center justify-center flex-shrink-0 text-ice text-lg">
        {icon}
      </div>
      <div>
        <div className="text-[0.65rem] font-semibold tracking-widest uppercase text-frost-dim mb-0.5">
          {label}
        </div>
        <div className="text-[0.9rem] text-frost group-hover:text-ice transition-colors">
          {value}
        </div>
      </div>
    </div>
  );

  return href ? <a href={href}>{content}</a> : content;
}

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method:  'POST',
        body:    new FormData(e.target),
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="bg-bg-base min-h-screen">

      {/* ── PAGE HERO ──────────────────────────────────────── */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 80% at 50% -10%, rgba(92,184,232,0.06) 0%, transparent 70%), #07090f',
          }}
        />
        <SnowCanvas count={40} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 pt-36 pb-16">
          <p className="text-[0.7rem] font-semibold tracking-[0.28em] uppercase text-ice mb-4 flex items-center gap-3">
            <span className="block w-6 h-px bg-ice" />
            Get in Touch
          </p>
          <h1
            className="font-heading font-extrabold uppercase text-frost leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
          >
            Contact Us
          </h1>
          <p className="text-frost-muted text-base leading-7 mt-4 max-w-[50ch]">
            Whether you're a filmmaker, distributor, journalist, or just a fan — we'd love to hear
            from you.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div
        className="h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #1a2535, transparent)' }}
      />

      {/* ── CONTENT ────────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — info */}
          <div>
            <h2 className="font-heading font-bold text-3xl uppercase tracking-wide text-frost mb-6">
              Let's Connect
            </h2>
            <p className="text-frost-muted leading-7 text-[0.975rem] mb-2">
              NorthWall Productions is based in Canada and open to collaborations with partners
              worldwide. We welcome inquiries from directors, writers, distributors, broadcasters,
              and press.
            </p>
            <p className="text-frost-muted leading-7 text-[0.975rem] mb-10">
              Response time is typically within two business days.
            </p>

            <div className="flex flex-col gap-3">
              <ContactMethod
                icon="✉"
                label="Email"
                value="hello@northwallproductions.com"
                href="mailto:hello@northwallproductions.com"
              />
              <ContactMethod
                icon="◎"
                label="Based in"
                value="Canada"
              />
              <ContactMethod
                icon="◷"
                label="Response Time"
                value="Within 2 business days"
              />
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-bg-card border border-surface-border rounded-2xl p-8 md:p-10">
            <h2 className="font-heading font-bold text-2xl uppercase tracking-wide text-frost mb-7">
              Send a Message
            </h2>

            {status === 'success' ? (
              <div className="bg-status-completed/10 border border-status-completed/30 text-status-completed rounded-xl p-5 text-sm leading-6">
                <strong className="block mb-1">Message sent!</strong>
                Thank you for reaching out. We'll get back to you within two business days.
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[0.7rem] font-semibold tracking-widest uppercase text-frost-muted mb-2">
                      Name <span className="text-ice">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full bg-bg-elevated border border-surface-border rounded-lg px-4 py-3 text-frost text-sm placeholder:text-frost-dim
                                 focus:outline-none focus:border-ice-dim focus:ring-2 focus:ring-ice/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[0.7rem] font-semibold tracking-widest uppercase text-frost-muted mb-2">
                      Email <span className="text-ice">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full bg-bg-elevated border border-surface-border rounded-lg px-4 py-3 text-frost text-sm placeholder:text-frost-dim
                                 focus:outline-none focus:border-ice-dim focus:ring-2 focus:ring-ice/10 transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="mb-4">
                  <label className="block text-[0.7rem] font-semibold tracking-widest uppercase text-frost-muted mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    className="w-full bg-bg-elevated border border-surface-border rounded-lg px-4 py-3 text-frost text-sm
                               focus:outline-none focus:border-ice-dim focus:ring-2 focus:ring-ice/10 transition-all appearance-none cursor-pointer"
                  >
                    {subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-[0.7rem] font-semibold tracking-widest uppercase text-frost-muted mb-2">
                    Message <span className="text-ice">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project or inquiry…"
                    className="w-full bg-bg-elevated border border-surface-border rounded-lg px-4 py-3 text-frost text-sm placeholder:text-frost-dim
                               focus:outline-none focus:border-ice-dim focus:ring-2 focus:ring-ice/10 transition-all resize-y min-h-[120px] leading-6"
                  />
                </div>

                {/* Error */}
                {status === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg p-4 text-sm mb-5">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-ice text-bg-base font-semibold text-sm py-3.5 rounded-lg
                             hover:bg-ice-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(92,184,232,0.25)]
                             disabled:opacity-60 disabled:cursor-not-allowed
                             transition-all duration-200"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>

                <p className="text-[0.7rem] text-frost-dim text-center mt-4">
                  Or email us directly at{' '}
                  <a href="mailto:hello@northwallproductions.com" className="text-ice hover:underline">
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

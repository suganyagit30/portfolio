import { useState } from "react";
import Icon from "./Icon.jsx";
import { profile } from "../data.js";

// Set VITE_FORM_ENDPOINT (e.g. a Formspree URL) in .env to enable real submissions.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

// ====== REPLACE WITH YOUR WHATSAPP NUMBER ======
// Digits only: country code + number, no "+", spaces, dashes or leading zeros.
// Example: India (+91) number 98765 43210 -> '919876543210'
const WHATSAPP_NUMBER = "918610613203";
// Shown on the page; edit freely (formatting only).
const WHATSAPP_DISPLAY = "+91 86106 13203 ";
const WHATSAPP_MESSAGE =
  "Hello Suganya, I came across your portfolio and would like to discuss a job opportunity.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
// ================================================

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      style={{ flex: "none" }}
    >
      <path d="M12.04 2A9.93 9.93 0 0 0 3.5 17.02L2 22l5.1-1.45A9.94 9.94 0 1 0 12.04 2zm0 18.2a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.02.86.9-2.94-.2-.31a8.2 8.2 0 1 1 6.81 3.72zm4.5-6.13c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06a6.7 6.7 0 0 1-3.3-2.9c-.25-.43.25-.4.72-1.34.08-.16.04-.3-.02-.42-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.47c-.16 0-.43.06-.65.3-.23.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.16 1.74 2.65 4.2 3.72 1.56.67 2.17.73 2.95.61.48-.07 1.46-.6 1.67-1.17.2-.58.2-1.07.14-1.18-.06-.1-.23-.16-.48-.28z" />
    </svg>
  );
}

const empty = { name: "", email: "", subject: "", message: "" };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
    e.email = "Please enter a valid email address.";
  if (v.subject.trim().length < 3) e.subject = "Please enter a subject.";
  if (v.message.trim().length < 10)
    e.message = "Message should be at least 10 characters.";
  return e;
}

export default function Contact() {
  const [v, setV] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  const set = (k) => (ev) => setV({ ...v, [k]: ev.target.value });

  async function onSubmit(ev) {
    ev.preventDefault();
    const errs = validate(v);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    if (!ENDPOINT) {
      setStatus({
        state: "error",
        msg: "The contact form is not connected to a service yet, so nothing was sent. Please email me directly instead.",
      });
      return;
    }
    setStatus({ state: "sending", msg: "" });
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(v),
      });
      if (!res.ok) throw new Error();
      setStatus({
        state: "success",
        msg: "Thanks! Your message has been sent.",
      });
      setV(empty);
    } catch {
      setStatus({
        state: "error",
        msg: "Something went wrong and your message was not sent. Please try again or email me directly.",
      });
    }
  }

  const field = (k, label, type = "text") => (
    <div className="field">
      <label htmlFor={k}>{label}</label>
      {k === "message" ? (
        <textarea
          id={k}
          rows="5"
          value={v[k]}
          onChange={set(k)}
          aria-invalid={!!errors[k]}
          aria-describedby={errors[k] ? `${k}-e` : undefined}
        />
      ) : (
        <input
          id={k}
          type={type}
          value={v[k]}
          onChange={set(k)}
          aria-invalid={!!errors[k]}
          aria-describedby={errors[k] ? `${k}-e` : undefined}
          autoComplete={k === "name" ? "name" : k === "email" ? "email" : "off"}
        />
      )}
      {errors[k] && (
        <span className="err" id={`${k}-e`} role="alert">
          {errors[k]}
        </span>
      )}
    </div>
  );

  return (
    <section id="contact" className="section" aria-labelledby="contact-h">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-left">
            <span className="eyebrow">
              <b>06</b> / Contact
            </span>
            <h2 id="contact-h">
              Let's <em>Connect</em>
            </h2>
            <p>
              I'm always interested in connecting with people, exploring
              opportunities, and discussing software development projects.
            </p>
            <ul className="contact-list">
              <li>
                <Icon name="mail" size={18} />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <Icon name="pin" size={18} />
                <span>{profile.location}</span>
              </li>
              <li>
                <Icon name="linkedin" size={18} />
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Icon name="github" size={18} />
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <span
                  style={{
                    display: "inline-flex",
                    flex: "none",
                    color: "var(--sq2)",
                  }}
                >
                  <WhatsAppIcon size={18} />
                </span>
                <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
              </li>
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Suganya on WhatsApp (opens in a new tab)"
              className="btn"
              style={{
                marginTop: 24,
                background: "#25D366",
                color: "#0B2E1A",
                justifyContent: "center",
                width: "100%",
                maxWidth: 340,
                boxSizing: "border-box",
                fontWeight: 600,
                whiteSpace: "normal",
                textAlign: "center",
              }}
            >
              <WhatsAppIcon size={20} /> Contact Me on WhatsApp
            </a>
          </div>
          <form className="form" onSubmit={onSubmit} noValidate>
            <div className="two">
              {field("name", "Name")}
              {field("email", "Email", "email")}
            </div>
            {field("subject", "Subject")}
            {field("message", "Message")}
            <button
              className="btn btn-primary"
              type="submit"
              disabled={status.state === "sending"}
            >
              <Icon name="send" size={16} />{" "}
              {status.state === "sending" ? "Sending…" : "Send Message"}
            </button>
            <p
              className={`status ${status.state}`}
              role="status"
              aria-live="polite"
            >
              {status.msg}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

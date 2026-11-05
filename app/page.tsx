"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown, Droplets, House, Mail, MapPin, Menu, Phone, Send, ShieldCheck, Sparkles, Sun, Waves, X } from "lucide-react";

const phone = "+353896549557";
const whatsapp = "https://wa.me/353896549557";
const services = [
  { title: "Residential cleaning", detail: "Standard, regular and deep cleaning", icon: House },
  { title: "End of tenancy", detail: "A thorough turnkey clean for your move", icon: Sparkles },
  { title: "Post renovation", detail: "Ready to enjoy after building work", icon: ShieldCheck },
  { title: "Window cleaning", detail: "Inside and out, all sizes", icon: Sun },
  { title: "Pressure washing", detail: "Driveways, façades, roofs and solar panels", icon: Droplets },
  { title: "Drain & sewer clearing", detail: "Indoor and outdoor drains", icon: Waves },
];
const prices = [
  { title: "Residential cleaning", detail: "Standard · regular · deep", amount: "€20–25", unit: "/ hour", note: "Minimum 6 hours" },
  { title: "Window cleaning", detail: "Regular · post renovation", amount: "€15–45", unit: "/ window", note: "Depending on size and access" },
  { title: "Pressure washing", detail: "Driveway · façade · roof", amount: "From €150", unit: "", note: "Final price by quote" },
  { title: "End of tenancy", detail: "Turnkey clean · 1–2 days", amount: "From €25", unit: "/ hour", note: "Final price by quote" },
  { title: "Post renovation", detail: "Turnkey clean · 2–4 days", amount: "From €30", unit: "/ hour", note: "Final price by quote" },
  { title: "Drain clearing", detail: "Indoor / outdoor", amount: "From €80", unit: "", note: "Outdoor work from €150" },
];
const faqs = [
  { q: "How do I get a quote?", a: "Tell us what needs cleaning, the size of the area and your preferred timing. Message us on WhatsApp or use the enquiry form below and we’ll discuss a quote with you." },
  { q: "Can I book a one-off clean?", a: "Yes. We offer one-off work such as deep cleaning, end of tenancy and post renovation cleaning, along with regular residential cleaning." },
  { q: "Are the listed prices final?", a: "These are starting prices and ranges from the Pro Home Service price list. Your final quote depends on the job, size and access requirements." },
  { q: "Where are you based?", a: "Pro Home Service is based at Unit 5, Deerpark, Oranmore, Ireland, H91 AR2N. Get in touch to discuss availability at your property." },
];

function Brand({ light = false }: { light?: boolean }) {
  return <a className={`brand ${light ? "brand-light" : ""}`} href="#top" aria-label="Pro Home Service, back to top"><span className="brand-mark"><svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M6 23.5 24 8l18 15.5M10 20v19h28V20M19 39V27h10v12M34 12V8h5v9" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="brand-type"><strong>pro home</strong><span>service</span></span></a>;
}
function WhatsAppIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2a9.9 9.9 0 0 0-8.51 15l-1.3 4.75 4.86-1.28A9.96 9.96 0 1 0 12.04 2Zm0 18.1a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-2.88.76.77-2.8-.2-.31a8.13 8.13 0 1 1 6.74 3.66Zm4.46-6.08c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.46-.39-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.33.98 2.5c.12.16 1.69 2.58 4.09 3.61.57.25 1.01.4 1.36.51.57.18 1.09.15 1.5.09.46-.07 1.43-.59 1.63-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z"/></svg>;
}
function Eyebrow({ children }: { children: React.ReactNode }) { return <div className="eyebrow"><span/>{children}</div>; }

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("in-view"); observer.unobserve(entry.target); } }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = `Hello Pro Home Service, I'd like to request a quote.\n\nName: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\nDetails: ${form.message}`;
    window.open(`${whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }
  return <main id="top">
    <div className="topbar"><div className="shell topbar-inner"><span><i/>Based in Oranmore, Ireland</span><div><a href={`tel:${phone}`}><Phone size={13}/> +353 89 654 9557</a><a href="mailto:i.box.phs@icloud.com"><Mail size={14}/> i.box.phs@icloud.com</a></div></div></div>
    <header className="site-header"><div className="shell header-inner"><Brand/><nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">{[["Services","#services"],["About","#about"],["Pricing","#pricing"],["How it works","#how-it-works"],["Contact","#contact"]].map(([label,href]) => <a href={href} key={label} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav><a className="header-cta" href={`${whatsapp}?text=${encodeURIComponent("Hello, I'd like a cleaning quote.")}`} target="_blank" rel="noreferrer"><WhatsAppIcon/> Get a quote <ArrowUpRight size={16}/></a><button className="menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24}/> : <Menu size={24}/>}</button></div></header>

    <section className="hero"><div className="hero-photo"/><div className="hero-wash"/><div className="shell hero-inner"><div className="hero-copy"><Eyebrow>PROFESSIONAL CLEANING SERVICES</Eyebrow><h1>A cleaner home.<br/><em>A clearer head.</em></h1><p>Thoughtful cleaning for the spaces that matter most. From everyday upkeep to the big reset, we’ll help your home feel beautifully cared for.</p><div className="hero-actions"><a className="button button-dark" href="#contact">Request a quote <ArrowUpRight size={18}/></a><a className="text-link" href="#services">Explore services <ArrowDownRight size={18}/></a></div></div><div className="hero-stamp"><span>✦</span><strong>Clean spaces.<br/>Good days.</strong><small>PRO HOME SERVICE</small></div></div><div className="shell hero-bottom"><span>01 / 06 &nbsp; — &nbsp; THE HOME YOU LOVE</span><a href="#services">SCROLL TO EXPLORE <ArrowDownRight size={16}/></a></div></section>
    <div className="intro-strip"><div className="shell strip-grid">{["One-off & regular cleaning","Homes, windows & exteriors","Clear starting prices","Easy WhatsApp booking"].map(item => <div key={item}><Check size={18}/>{item}</div>)}</div></div>

    <section className="section services-section" id="services"><div className="shell"><div className="section-head reveal"><div><Eyebrow>WHAT WE DO</Eyebrow><h2>Every space deserves<br/><em>a fresh start.</em></h2></div><p>From the little details indoors to the first impression outside, find the right clean for your property.</p></div><div className="feature-grid">{[
      { n:"01 / HOME CARE", title:<>Residential<br/>cleaning</>, detail:"Regular, standard & deep cleaning", image:"residential-image" },
      { n:"02 / SPARKLE", title:<>Window<br/>cleaning</>, detail:"Inside & out, all sizes", image:"windows-image" },
      { n:"03 / OUTDOORS", title:<>Pressure<br/>washing</>, detail:"Driveways, façades, roofs & more", image:"pressure-image" },
    ].map(item => <article className="feature-card reveal" key={item.n}><div className={`feature-image ${item.image}`}/><div className="feature-shade"/><div className="feature-content"><span>{item.n}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div><a href="#contact" aria-label="Enquire about this service"><ArrowUpRight size={23}/></a></div></article>)}</div><div className="service-list reveal">{services.filter(item => !["Residential cleaning","Window cleaning","Pressure washing"].includes(item.title)).map((item,i) => <a href="#contact" className="service-row" key={item.title}><span>0{i+4}</span><item.icon size={22} strokeWidth={1.5}/><strong>{item.title}</strong><p>{item.detail}</p><ArrowUpRight size={18}/></a>)}</div></div></section>

    <section className="about-section" id="about"><div className="shell about-grid"><div className="about-visual reveal"><div className="about-photo"/><div className="about-card"><span>✦</span><strong>Professional care.<br/>A home that feels good.</strong></div></div><div className="about-copy reveal"><Eyebrow>ABOUT PRO HOME SERVICE</Eyebrow><h2>Good cleaning is<br/><em>care you can feel.</em></h2><p className="large-copy">We’re here to make it easier to enjoy your home, even when life gets busy.</p><p>Based in Oranmore, Pro Home Service offers a wide range of cleaning services, from budget-conscious everyday cleans to more detailed work, with a focus on professional quality and practical help for local homes.</p><div className="about-note"><MapPin size={22}/><div><strong>Rooted in Oranmore</strong><span>Unit 5, Deerpark, Oranmore, Ireland</span></div></div><a className="text-link" href="#contact">Let’s talk about your space <ArrowUpRight size={19}/></a></div></div></section>

    <section className="section process-section" id="how-it-works"><div className="shell"><div className="section-head reveal"><div><Eyebrow>HOW IT WORKS</Eyebrow><h2>Simple from<br/><em>hello to spotless.</em></h2></div><p>Tell us what you need, agree on the details, then leave the cleaning to us.</p></div><div className="steps">{[
      { n:"01", icon:Send, title:"Start a conversation", body:"Message us on WhatsApp, call, or send an enquiry with the service you need." },
      { n:"02", icon:Check, title:"Confirm your quote", body:"We’ll discuss your property, the work involved, and a suitable date and time." },
      { n:"03", icon:Sparkles, title:"Enjoy the result", body:"Our team completes the agreed work, and you get back to a cleaner space." },
    ].map(step => <div className="step reveal" key={step.n}><span>{step.n}</span><div className="step-icon"><step.icon size={29} strokeWidth={1.4}/></div><h3>{step.title}</h3><p>{step.body}</p></div>)}</div></div></section>

    <section className="pricing-section" id="pricing"><div className="shell"><div className="section-head reveal"><div><Eyebrow>PRICE GUIDE</Eyebrow><h2>Clear prices.<br/><em>No guesswork.</em></h2></div><p>These are guide prices from Pro Home Service. We’ll confirm the final cost for your specific job.</p></div><div className="price-grid">{prices.map((item,i) => <article className="price-card reveal" key={item.title}><div className="price-top"><span>{String(i+1).padStart(2,"0")}</span><ArrowUpRight size={19}/></div><h3>{item.title}</h3><p>{item.detail}</p><div className="price-value"><strong>{item.amount}</strong><span>{item.unit}</span></div><div className="price-note">{item.note}</div></article>)}</div><div className="pricing-foot reveal"><span>Also available: solar panel cleaning from €40 and other specialist work by quote.</span><a href="#contact">Ask for your quote <ArrowUpRight size={17}/></a></div></div></section>

    <section className="quote-banner"><div className="shell quote-banner-inner reveal"><div><span>READY FOR A RESET?</span><h2>Let’s make your space<br/><em>feel like new.</em></h2></div><a className="button button-light" href={`${whatsapp}?text=${encodeURIComponent("Hello Pro Home Service, I'd like to request a cleaning quote.")}`} target="_blank" rel="noreferrer"><WhatsAppIcon/> Chat on WhatsApp <ArrowUpRight size={18}/></a><div className="banner-orbit one"/><div className="banner-orbit two"/></div></section>

    <section className="section faq-section"><div className="shell faq-grid"><div className="reveal"><Eyebrow>GOOD TO KNOW</Eyebrow><h2>Your questions,<br/><em>answered.</em></h2><p>Need something else? We’re only a message away.</p><a className="text-link" href="mailto:i.box.phs@icloud.com">Email us directly <ArrowUpRight size={18}/></a></div><div className="faq-list reveal">{faqs.map((item,i) => <div className={`faq-item ${faqOpen===i ? "active":""}`} key={item.q}><button aria-expanded={faqOpen===i} onClick={() => setFaqOpen(faqOpen===i ? null : i)}><span>{item.q}</span><ChevronDown size={21}/></button><div className="faq-answer"><p>{item.a}</p></div></div>)}</div></div></section>

    <section className="contact-section" id="contact"><div className="shell contact-grid"><div className="contact-copy reveal"><Eyebrow>GET IN TOUCH</Eyebrow><h2>Tell us what<br/><em>needs cleaning.</em></h2><p>Share a little about the job and we’ll help you work out the next step. Your enquiry will open as a draft in WhatsApp.</p><div className="contact-methods"><a href={`tel:${phone}`}><span><Phone size={20}/></span><div><small>CALL US</small><strong>+353 89 654 9557</strong></div><ArrowUpRight size={18}/></a><a href="mailto:i.box.phs@icloud.com"><span><Mail size={20}/></span><div><small>EMAIL US</small><strong>i.box.phs@icloud.com</strong></div><ArrowUpRight size={18}/></a><div><span><MapPin size={20}/></span><div><small>FIND US</small><strong>Unit 5, Deerpark, Oranmore<br/>Ireland · H91 AR2N</strong></div></div></div></div><form className="contact-form reveal" onSubmit={submit}><div className="form-heading"><span>ENQUIRY FORM</span><Sparkles size={22}/></div><div className="field-row"><label>Your name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your full name"/></label><label>Email address<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com"/></label></div><label>Service you need<select required value={form.service} onChange={e=>setForm({...form,service:e.target.value})}><option value="">Select a service</option>{services.map(item=><option key={item.title}>{item.title}</option>)}<option>Other / not sure yet</option></select></label><label>Tell us a little more<textarea required rows={5} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="What would you like cleaned? Any preferred dates or details?"/></label><button type="submit" className="button button-dark form-submit">Continue in WhatsApp <ArrowUpRight size={18}/></button><p className="form-hint">This opens a WhatsApp draft. You can review it before sending.</p></form></div></section>

    <footer className="footer"><div className="shell footer-main"><div><Brand light/><p>Professional cleaning for the places you call home.</p></div><div><small>EXPLORE</small><a href="#services">Services</a><a href="#about">About</a><a href="#pricing">Pricing</a><a href="#how-it-works">How it works</a></div><div><small>CONTACT</small><a href={`tel:${phone}`}>+353 89 654 9557</a><a href="mailto:i.box.phs@icloud.com">i.box.phs@icloud.com</a><span>Oranmore, Ireland</span></div><a className="footer-up" href="#top" aria-label="Back to top"><ArrowUpRight size={24}/></a></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Pro Home Service. All rights reserved.</span><span>Made for cleaner, calmer spaces.</span></div></footer>
  </main>;
}

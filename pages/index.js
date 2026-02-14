import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Readme", href: "#readme" },
  { label: "Career", href: "#career" },
  { label: "Contact", href: "#contact" },
];

const CAREER = [
  {
    period: "Aug 2022 — Present",
    company: "Upbound",
    role: "Director of Engineering",
    logo: "/upbound-logo.webp",
    description:
      "Leading engineering teams building the universal cloud platform powered by Crossplane. Driving technical strategy, team growth, and delivery excellence.",
  },
  {
    period: "Nov 2020 — Jun 2022",
    company: "Sourcegraph",
    role: "Director of Engineering",
    logo: "/sourcegraph-logo.svg",
    description:
      "Directed multiple engineering teams building universal code search. Scaled the organization, improved engineering processes, and delivered key product milestones.",
  },
  {
    period: "Jul 2019 — Oct 2020",
    company: "GitLab",
    role: "Engineering Manager",
    logo: "/gitlab-logo.svg",
    description:
      "Managed engineering teams in an all-remote environment, contributing to GitLab's DevOps platform. Championed transparent processes and async collaboration.",
  },
  {
    period: "Feb 2017 — Jun 2019",
    company: "Samewave",
    role: "Senior Engineering",
    logo: "/samewave-logo.webp",
    description:
      "Senior engineering role at a social performance management startup. Built features that connected goals, accountability, and team performance.",
  },
  {
    period: "Mar 2006 — Jan 2017",
    company: "Mirum Agency",
    role: "CTO",
    logo: "/mirum-logo.webp",
    description:
      "Over a decade leading technology at a global digital agency. Grew the engineering team, established technical standards, and delivered solutions for major brands.",
  },
];

function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("editorial-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const el = ref.current;
    if (el) {
      const targets = el.querySelectorAll(".editorial-reveal");
      targets.forEach((t) => observer.observe(t));
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

function useActiveSection() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return activeSection;
}

export default function Home() {
  const mainRef = useScrollReveal();
  const activeSection = useActiveSection();

  return (
    <>
      <Head>
        <title>Jean du Plessis | Engineering Leader</title>
        <meta
          name="description"
          content="Jean du Plessis — Engineering Leader, Director of Engineering. Personal portfolio and management README."
        />
      </Head>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Karla:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&display=swap');

        :root {
          --ed-bg: #1C1917;
          --ed-text: #F5F0E8;
          --ed-accent: #4ECDC4;
          --ed-secondary: #9C8F80;
          --ed-rule: #33302B;
          --ed-cream-light: #22201C;
        }

        .editorial-page {
          font-family: 'Karla', sans-serif;
          background-color: var(--ed-bg);
          color: var(--ed-text);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .editorial-page * {
          box-sizing: border-box;
        }

        .font-display {
          font-family: 'Lora', Georgia, 'Times New Roman', serif;
        }

        .font-body {
          font-family: 'Karla', system-ui, sans-serif;
        }

        /* ---- Navigation ---- */
        .ed-nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(28, 25, 23, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--ed-rule);
          transition: box-shadow 0.3s ease;
        }

        .ed-nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 60px;
        }

        .ed-nav-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .ed-nav-avatar {
          border-radius: 50%;
          filter: sepia(20%) saturate(85%) brightness(85%);
          transition: filter 0.4s ease;
        }

        .ed-nav-logo:hover .ed-nav-avatar {
          filter: sepia(0%) saturate(100%) brightness(100%);
        }

        .ed-nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .ed-nav-link {
          font-family: 'Karla', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ed-secondary);
          text-decoration: none;
          position: relative;
          transition: color 0.3s ease;
        }

        .ed-nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--ed-accent);
          transition: width 0.35s cubic-bezier(0.25, 0.1, 0.25, 1);
        }

        .ed-nav-link:hover {
          color: var(--ed-text);
        }

        .ed-nav-link:hover::after {
          width: 100%;
        }

        .ed-nav-link-active {
          color: var(--ed-text);
        }

        .ed-nav-link-active::after {
          width: 100%;
        }

        /* ---- Hero ---- */
        .ed-hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 6rem 2rem 4rem;
          position: relative;
          overflow: hidden;
        }

        .ed-hero-portrait {
          margin-bottom: 2rem;
          opacity: 0;
          animation: heroFadeUp 0.8s ease 0.1s forwards;
        }

        .ed-hero-portrait img {
          border-radius: 50%;
        }

        .ed-hero-name {
          font-family: 'Lora', serif;
          font-weight: 800;
          font-size: clamp(3rem, 9vw, 10rem);
          line-height: 0.92;
          letter-spacing: -0.025em;
          color: var(--ed-text);
          margin: 0;
          opacity: 0;
          animation: heroNameIn 1.2s cubic-bezier(0.25, 0.1, 0.25, 1) 0.2s forwards;
        }

        .ed-hero-surname {
          color: color-mix(in srgb, var(--ed-accent) 50%, var(--ed-text));
        }

        .ed-hero-subtitle {
          font-family: 'Karla', sans-serif;
          font-size: clamp(0.9rem, 1.5vw, 1.25rem);
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ed-secondary);
          margin-top: 1.5rem;
          opacity: 0;
          animation: heroFadeUp 0.8s ease 0.8s forwards;
        }

        .ed-hero-addendum {
          text-transform: none;
          letter-spacing: normal;
          font-style: italic;
          font-family: 'Lora', serif;
          color: var(--ed-accent);
        }

        .ed-hero-rule {
          width: 60px;
          height: 1px;
          background: var(--ed-accent);
          border: none;
          margin: 2rem auto 0;
          opacity: 0;
          animation: heroFadeUp 0.8s ease 1.1s forwards;
        }

        .ed-hero-scroll {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          opacity: 0;
          animation: heroFadeUp 0.8s ease 1.6s forwards;
        }

        .ed-hero-scroll span {
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ed-secondary);
        }

        .ed-scroll-line {
          width: 1px;
          height: 40px;
          background: var(--ed-rule);
          position: relative;
          overflow: hidden;
        }

        .ed-scroll-line::after {
          content: '';
          position: absolute;
          top: -100%;
          left: 0;
          width: 1px;
          height: 100%;
          background: var(--ed-accent);
          animation: scrollPulse 2s ease infinite;
        }

        /* ---- Sections ---- */
        .ed-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 6rem 2rem;
        }

        .ed-section-divider {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .ed-section-divider hr {
          border: none;
          height: 1px;
          background: var(--ed-rule);
          margin: 0;
        }

        .ed-section-header {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 3.5rem;
        }

        .ed-section-number {
          font-family: 'Lora', serif;
          font-size: clamp(3rem, 5vw, 5rem);
          font-weight: 300;
          color: var(--ed-accent);
          opacity: 0.25;
          line-height: 1;
          flex-shrink: 0;
        }

        .ed-section-title {
          font-family: 'Lora', serif;
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          font-weight: 700;
          line-height: 1.15;
          margin: 0;
          margin-top: 0.075em;
          letter-spacing: -0.015em;
        }

        /* ---- Two Column Grid ---- */
        .ed-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        @media (min-width: 768px) {
          .ed-grid {
            grid-template-columns: 5fr 7fr;
            gap: 4rem;
          }
        }

        .ed-grid-wide {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        @media (min-width: 768px) {
          .ed-grid-wide {
            grid-template-columns: 7fr 5fr;
            gap: 4rem;
          }
        }

        /* ---- About ---- */
        .ed-about-text {
          font-size: 1.05rem;
          line-height: 1.85;
          color: var(--ed-text);
        }

        .ed-about-text p:first-of-type::first-letter {
          font-family: 'Lora', serif;
          font-size: 3.6em;
          float: left;
          line-height: 0.8;
          margin-right: 0.08em;
          margin-top: 0.05em;
          color: var(--ed-accent);
          font-weight: 700;
        }

        .ed-about-text p {
          margin: 0 0 1.4rem;
        }

        .ed-family-img {
          border-radius: 4px;
          margin-top: 1.5rem;
        }

        .ed-img-caption {
          font-size: 0.78rem;
          color: var(--ed-secondary);
          margin-top: 0.6rem;
          font-style: italic;
          letter-spacing: 0.01em;
        }

        /* ---- Pull Quote ---- */
        .ed-pull-quote {
          padding: 3rem 0;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .ed-pull-quote blockquote {
          font-family: 'Lora', serif;
          font-size: clamp(1.5rem, 2.8vw, 2.4rem);
          font-weight: 500;
          font-style: italic;
          line-height: 1.4;
          color: var(--ed-text);
          margin: 0;
          padding: 0 2rem;
          position: relative;
        }

        .ed-pull-quote blockquote::before {
          content: '\\201C';
          font-family: 'Lora', serif;
          font-size: 5rem;
          color: var(--ed-accent);
          opacity: 0.35;
          position: absolute;
          top: -1.8rem;
          left: 0;
          line-height: 1;
        }

        /* ---- README ---- */
        .ed-readme-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .ed-readme-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem 3rem;
          }
        }

        .ed-readme-card {
          padding: 1.8rem 0;
          border-top: 1px solid var(--ed-rule);
        }

        .ed-readme-card h4 {
          font-family: 'Lora', serif;
          font-size: 1.15rem;
          font-weight: 600;
          margin: 0 0 0.7rem;
          color: var(--ed-text);
        }

        .ed-readme-card p {
          font-size: 0.95rem;
          line-height: 1.75;
          color: var(--ed-secondary);
          margin: 0;
        }

        /* ---- Career Timeline ---- */
        .ed-timeline {
          position: relative;
          padding: 2rem 0;
        }

        .ed-timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 1px;
          background: var(--ed-rule);
          transform: translateX(-50%);
          display: none;
        }

        @media (min-width: 768px) {
          .ed-timeline::before {
            display: block;
          }
        }

        .ed-timeline-item {
          display: flex;
          flex-direction: column;
          margin-bottom: 3rem;
          position: relative;
        }

        @media (min-width: 768px) {
          .ed-timeline-item {
            flex-direction: row;
            align-items: flex-start;
            margin-bottom: 0;
            padding: 2rem 0;
          }

          .ed-timeline-item:nth-child(odd) {
            flex-direction: row;
          }

          .ed-timeline-item:nth-child(even) {
            flex-direction: row-reverse;
          }

          .ed-timeline-item:nth-child(odd) .ed-timeline-content {
            text-align: right;
            padding-right: 3.5rem;
            padding-left: 0;
          }

          .ed-timeline-item:nth-child(even) .ed-timeline-content {
            text-align: left;
            padding-left: 3.5rem;
            padding-right: 0;
          }
        }

        .ed-timeline-content {
          flex: 1;
        }

        .ed-timeline-dot {
          display: none;
        }

        @media (min-width: 768px) {
          .ed-timeline-dot {
            display: block;
            position: absolute;
            left: 50%;
            top: 2.5rem;
            width: 11px;
            height: 11px;
            background: var(--ed-bg);
            border: 2px solid var(--ed-accent);
            border-radius: 50%;
            transform: translateX(-50%);
            z-index: 2;
          }
        }

        .ed-timeline-period {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ed-accent);
          margin-bottom: 0.4rem;
        }

        .ed-timeline-company {
          font-family: 'Lora', serif;
          font-size: 1.35rem;
          font-weight: 700;
          margin: 0 0 0.15rem;
          color: var(--ed-text);
        }

        .ed-timeline-role {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--ed-secondary);
          margin-bottom: 0.6rem;
        }

        .ed-timeline-desc {
          font-size: 0.9rem;
          line-height: 1.7;
          color: var(--ed-secondary);
          max-width: 400px;
        }

        @media (min-width: 768px) {
          .ed-timeline-item:nth-child(odd) .ed-timeline-desc {
            margin-left: auto;
          }

          .ed-timeline-item:nth-child(even) .ed-timeline-desc {
            margin-right: auto;
          }
        }

        .ed-timeline-logo {
          border-radius: 3px;
          margin-bottom: 0.8rem;
          opacity: 0.85;
        }

        @media (min-width: 768px) {
          .ed-timeline-item:nth-child(odd) .ed-timeline-logo-wrap {
            display: flex;
            justify-content: flex-end;
          }
        }

        .ed-mobile-rule {
          border: none;
          height: 1px;
          background: var(--ed-rule);
          margin: 0 0 2rem;
        }

        @media (min-width: 768px) {
          .ed-mobile-rule {
            display: none;
          }
        }

        /* ---- Contact ---- */
        .ed-contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        @media (min-width: 768px) {
          .ed-contact-grid {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
          }
        }

        .ed-contact-text {
          font-size: 1.05rem;
          line-height: 1.85;
          color: var(--ed-text);
        }

        .ed-contact-text p {
          margin: 0 0 1.2rem;
        }

        .ed-contact-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .ed-contact-links li {
          padding: 1rem 0;
          border-bottom: 1px solid var(--ed-rule);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .ed-contact-links li:first-child {
          border-top: 1px solid var(--ed-rule);
        }

        .ed-contact-label {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ed-secondary);
        }

        .ed-contact-value {
          font-family: 'Karla', sans-serif;
          font-size: 0.95rem;
          color: var(--ed-text);
          text-decoration: none;
          position: relative;
          transition: color 0.3s ease;
        }

        .ed-contact-value::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--ed-accent);
          transition: width 0.35s cubic-bezier(0.25, 0.1, 0.25, 1);
        }

        .ed-contact-value:hover {
          color: var(--ed-accent);
        }

        .ed-contact-value:hover::after {
          width: 100%;
        }

        /* ---- Footer ---- */
        .ed-footer {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 2rem 4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          text-align: center;
        }

        @media (min-width: 768px) {
          .ed-footer {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
        }

        .ed-footer-text {
          font-size: 0.8rem;
          color: var(--ed-secondary);
          letter-spacing: 0.03em;
        }

        .ed-footer-links {
          display: flex;
          gap: 1.5rem;
        }

        .ed-footer-link {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ed-secondary);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .ed-footer-link:hover {
          color: var(--ed-accent);
        }

        /* ---- Animations ---- */
        @keyframes heroNameIn {
          0% {
            opacity: 0;
            letter-spacing: 0.12em;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            letter-spacing: -0.025em;
            transform: translateY(0);
          }
        }

        @keyframes heroFadeUp {
          0% {
            opacity: 0;
            transform: translateY(16px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scrollPulse {
          0% { top: -100%; }
          50% { top: 100%; }
          100% { top: 100%; }
        }

        .editorial-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s cubic-bezier(0.25, 0.1, 0.25, 1),
                      transform 0.7s cubic-bezier(0.25, 0.1, 0.25, 1);
        }

        .editorial-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .editorial-reveal.ed-delay-1 { transition-delay: 0.1s; }
        .editorial-reveal.ed-delay-2 { transition-delay: 0.2s; }
        .editorial-reveal.ed-delay-3 { transition-delay: 0.3s; }
        .editorial-reveal.ed-delay-4 { transition-delay: 0.4s; }
        .editorial-reveal.ed-delay-5 { transition-delay: 0.5s; }
        .editorial-reveal.ed-delay-6 { transition-delay: 0.6s; }

        /* Mobile nav */
        @media (max-width: 640px) {
          .ed-nav-links {
            gap: 1.2rem;
          }
          .ed-nav-link {
            font-size: 0.65rem;
            letter-spacing: 0.1em;
          }
          .ed-hero {
            padding: 5rem 1.5rem 4rem;
          }
          .ed-section {
            padding: 4rem 1.5rem;
          }
          .ed-section-divider {
            padding: 0 1.5rem;
          }
          .ed-pull-quote blockquote {
            padding: 0 1rem;
          }
        }

        /* Smooth scroll */
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <div className="editorial-page" ref={mainRef}>
        {/* Navigation */}
        <nav className="ed-nav">
          <div className="ed-nav-inner">
            <a href="#" className="ed-nav-logo">
              <Image
                src="/jean-du-plessis-profile-large@2x.webp"
                alt="Jean du Plessis"
                width={34}
                height={34}
                className="ed-nav-avatar"
                style={{
                  width: "34px",
                  height: "34px",
                  objectFit: "cover",
                }}
              />
            </a>
            <ul className="ed-nav-links">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`ed-nav-link${activeSection === item.href.replace("#", "") ? " ed-nav-link-active" : ""}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Hero */}
        <section className="ed-hero">
          <div className="ed-hero-portrait">
            <Image
              src="/jean-du-plessis-profile-large@2x.webp"
              alt="Jean du Plessis"
              width={160}
              height={160}
              quality={95}
              priority
              style={{
                width: "160px",
                height: "160px",
                objectFit: "cover",
              }}
            />
          </div>
          <h1 className="ed-hero-name">
            Jean
            <br />
            <span className="ed-hero-surname">du Plessis</span>
          </h1>
          <p className="ed-hero-subtitle">Leader, mentor, and coach of Software Engineering teams <span className="ed-hero-addendum">and now also agents</span></p>
          <hr className="ed-hero-rule" />
          <div className="ed-hero-scroll">
            <span>Scroll</span>
            <div className="ed-scroll-line" />
          </div>
        </section>

        {/* About */}
        <div className="ed-section-divider">
          <hr />
        </div>
        <section id="about" className="ed-section">
          <div className="ed-section-header editorial-reveal">
            <span className="ed-section-number">01</span>
            <h2 className="ed-section-title">About</h2>
          </div>
          <div className="ed-grid">
            <div className="editorial-reveal ed-delay-1">
              <div>
                <Image
                  src="/family@2x.webp"
                  alt="The du Plessis family"
                  width={400}
                  height={267}
                  className="ed-family-img"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "auto",
                  }}
                />
                <p className="ed-img-caption">
                  From left: Hannah, Jane, Tracy, Grace and Isabella.
                </p>
              </div>
            </div>
            <div className="ed-about-text editorial-reveal ed-delay-2">
              <p>
                Nestled in the coastal town of Kleinmond, just a short scenic drive
                from Cape Town, I live with my wife Tracy and our quadruplet
                daughters: Grace, Isabella, Hannah, and Jane. Our household is
                made complete by three dogs: Maddy, Max, and Milo. Life with
                quadruplets is exactly as wonderfully chaotic as you might
                imagine.
              </p>
              <p>
                I am a Christian, and my faith is a grounding force in
                everything I do, from how I lead and treat people to how I
                approach each day. It shapes my values of integrity, humility,
                and servant leadership.
              </p>
              <p>
                By nature, I am an introvert. You will not find me on social
                media; it is simply not my thing. Instead, I find my energy
                outdoors: hiking the trails around the Kogelberg Biosphere,
                walking on the beach, or simply being present in the remarkable
                natural beauty that surrounds Kleinmond.
              </p>
            </div>
          </div>
        </section>

        {/* Pull Quote */}
        <div className="ed-section-divider">
          <hr />
        </div>
        <div className="ed-pull-quote editorial-reveal" style={{ padding: "4rem 2rem" }}>
          <blockquote>
            Trust is the single most important component in my management
            approach. I give trust from day one. It is not something you need
            to earn.
          </blockquote>
        </div>

        {/* README */}
        <div className="ed-section-divider">
          <hr />
        </div>
        <section id="readme" className="ed-section">
          <div className="ed-section-header editorial-reveal">
            <span className="ed-section-number">02</span>
            <h2 className="ed-section-title">
              Manager
              <br />
              README
            </h2>
          </div>
          <div className="ed-readme-grid">
            <div className="ed-readme-card editorial-reveal ed-delay-1">
              <h4>My Philosophy</h4>
              <p>
                I hire smart people, set clear expectations, offer collaboration
                when needed, and hold people accountable for outcomes. I am a
                hands-off manager by default, but I am always available. You will
                never have to wonder whether I have time for you. I do.
              </p>
            </div>
            <div className="ed-readme-card editorial-reveal ed-delay-2">
              <h4>Trust First</h4>
              <p>
                Trust is the foundation of everything I do. I extend trust from
                day one, and it is yours to keep. I believe people do their best
                work when they feel trusted and psychologically safe. This is
                non-negotiable in my teams.
              </p>
            </div>
            <div className="ed-readme-card editorial-reveal ed-delay-3">
              <h4>Growth &amp; Development</h4>
              <p>
                I am deeply invested in career development and personal growth. I
                use growth logs for my reports to track progress and aspirations.
                I use the CliftonStrengths assessment to understand and leverage
                each person&apos;s unique talents.
              </p>
            </div>
            <div className="ed-readme-card editorial-reveal ed-delay-4">
              <h4>Cadence &amp; Communication</h4>
              <p>
                Weekly one-on-ones are sacred. They are your time, not mine.
                Monthly skip-level meetings ensure I stay connected across the
                organization. I value feedback deeply, both giving and receiving,
                and I work hard to create environments where candor thrives.
              </p>
            </div>
          </div>
        </section>

        {/* Career */}
        <div className="ed-section-divider">
          <hr />
        </div>
        <section id="career" className="ed-section">
          <div className="ed-section-header editorial-reveal">
            <span className="ed-section-number">03</span>
            <h2 className="ed-section-title">Career</h2>
          </div>
          <div className="ed-timeline">
            {CAREER.map((item, i) => (
              <div
                key={item.company}
                className="ed-timeline-item editorial-reveal"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="ed-timeline-dot" />
                {i > 0 && <hr className="ed-mobile-rule" />}
                <div className="ed-timeline-content">
                  <div className="ed-timeline-logo-wrap">
                    <Image
                      src={item.logo}
                      alt={`${item.company} logo`}
                      width={36}
                      height={36}
                      className="ed-timeline-logo"
                      style={{
                        width: "36px",
                        height: "36px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <p className="ed-timeline-period">{item.period}</p>
                  <h3 className="ed-timeline-company">{item.company}</h3>
                  <p className="ed-timeline-role">{item.role}</p>
                  <p className="ed-timeline-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <div className="ed-section-divider">
          <hr />
        </div>
        <section id="contact" className="ed-section">
          <div className="ed-section-header editorial-reveal">
            <span className="ed-section-number">04</span>
            <h2 className="ed-section-title">Contact</h2>
          </div>
          <div className="ed-contact-grid">
            <div className="ed-contact-text editorial-reveal ed-delay-1">
              <p>
                I am always open to thoughtful conversations about engineering
                leadership, team building, or the challenges of scaling
                organizations. If something here resonated with you, I would be
                glad to connect.
              </p>
              <p>
                While I am not on social media, you can find me on LinkedIn and
                GitHub.
              </p>
            </div>
            <div className="editorial-reveal ed-delay-2">
              <ul className="ed-contact-links">
                <li>
                  <span className="ed-contact-label">LinkedIn</span>
                  <a
                    href="https://linkedin.com/in/jeandp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ed-contact-value"
                  >
                    linkedin.com/in/jeandp
                  </a>
                </li>
                <li>
                  <span className="ed-contact-label">GitHub</span>
                  <a
                    href="https://github.com/jeanduplessis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ed-contact-value"
                  >
                    github.com/jeanduplessis
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="ed-section-divider">
          <hr />
        </div>
        <footer className="ed-footer">
          <span className="ed-footer-text">
            Jean du Plessis &middot; Cape Town, South Africa
          </span>
          <div className="ed-footer-links">
            <a
              href="https://linkedin.com/in/jeandp"
              target="_blank"
              rel="noopener noreferrer"
              className="ed-footer-link"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/jeanduplessis"
              target="_blank"
              rel="noopener noreferrer"
              className="ed-footer-link"
            >
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

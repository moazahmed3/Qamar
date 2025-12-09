import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Benefit.css";

import certImg1 from "../../assets/Qimg/Quality1.jpeg";
import certImg2 from "../../assets/Qimg/Quality2.jpeg";

const benefitsData = [
  { id: 0, title: "", short: "", details: "" },
  { id: 1, title: "", short: "", details: "" },
  {
    id: 2,
    title: "Good Quality",

    details: "",
  },
];

export default function Benefit() {
  const { id } = useParams();
  const numericId = Number(id);
  const item = benefitsData.find((b) => b.id === numericId) || null;

  const [openCert, setOpenCert] = useState(null);

  const certificates = [
    { id: 1, thumb: certImg1, full: certImg1, title: "ISO 9001:2015 Certificate" },
    { id: 2, thumb: certImg2, full: certImg2, title: "Membership Certificate" },
  ];

  if (!item) {
  return (
    <div className="container benefit-page">
      <h2 className="notfound">Not Found</h2>
      <p>Benefit with id "{id}" not found.</p>
    </div>
  );
}

if (item.id === 1) {
  return (
    <div className="container benefit-empty">
      <h1 className="benefit-title">Coming Soon</h1>
      <p className="benefit-short">This section will be added later.</p>
    </div>
  );
}

if (item.id === 0) {
  return (
    <div className="container benefit-empty">
      <h1 className="benefit-title">Coming Soon</h1>
      <p className="benefit-short">This section will be added later.</p>
    </div>
  );
}


  return (
    <div className="benefit-2-page">
      {/* HERO */}
      <section className="b2-hero">
        <div className="b2-hero-inner">
          <h1 className="b2-title">{item.title}</h1>
          <div className="b2-stars">★ ★ ★</div>
          <p className="b2-desc">{item.short}</p>

          <div className="b2-quick-cards">
            <div className="quick-card">
              <div className="qc-number">2+</div>
              <div className="qc-text">Accredited Certificates</div>
            </div>
            <div className="quick-card">
              <div className="qc-number">100%</div>
              <div className="qc-text">Guaranteed Quality</div>
            </div>
            <div className="quick-card">
              <div className="qc-number">ISO</div>
              <div className="qc-text">International Standards</div>
            </div>
            <div className="quick-card">
              <div className="qc-number">2025</div>
              <div className="qc-text">Up to Date</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="b2-features">
        <div className="container">
          <h2 className="features-title">Quality &amp; Excellence</h2>
          <p className="features-sub">
            Our commitment to the highest quality standards is reflected in every certificate we hold.
          </p>

          <div className="cards-row">
            <div className="feature-card">
              <div className="icon-sq">🔰</div>
              <h3>International Standards</h3>
              <p>Globally accredited quality.</p>
            </div>

            <div className="feature-card">
              <div className="icon-sq">✅</div>
              <h3>Official Approval</h3>
              <p>Verified and recognized certificates.</p>
            </div>

            <div className="feature-card">
              <div className="icon-sq">🏅</div>
              <h3>Premium Craft</h3>
              <p>High professional levels and workmanship.</p>
            </div>

            <div className="feature-card">
              <div className="icon-sq">✨</div>
              <h3>Quality Commitment</h3>
              <p>Strict measures for continuous excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Certificates inside a brown card with centered beige title */}
      <section className="b2-gallery container">
        <div className="certs-big-card">
          <h3 className="certs-big-title">Certificates Gallery</h3>

          <div className="certs-row">
            {certificates.map((c) => (
              <article key={c.id} className="small-cert-card card-hover">
                <div className="small-thumb-wrap">
                  <img src={c.thumb} alt={c.title} className="small-thumb" />
                  <div className="small-overlay">
                    <button className="overlay-btn" onClick={() => setOpenCert(c)}>
                      View certificate
                    </button>
                  </div>
                </div>

                <div className="small-meta">
                  <h4 className="small-title">{c.title}</h4>
                  <p className="small-sub">Click to view the full certificate</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BROWN HIGHLIGHT (kept) */}
      <section className="b2-highlight">
        <div className="b2-highlight-inner">
          <div className="icon-circle" aria-hidden>
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M12 2L4 5v6c0 5 3.5 9 8 9s8-4 8-9V5l-8-3z" stroke="#ffd9b0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 8.2v3" stroke="#ffd9b0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <h2 className="highlight-title">Our Commitment to Quality &amp; Excellence</h2>

          <p className="highlight-desc">
            Every certificate we carry reflects our deep commitment to the highest levels of quality &amp;
            professionalism. We continuously improve our processes to meet worldwide standards and deliver exceptional service.
          </p>

          <div className="highlight-badges">
            <div className="hb-badge" aria-hidden>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img">
                <path d="M6.5 12.5L10.2 16L17.5 8.5" stroke="#2f9e44" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>

            <div className="hb-badge" aria-hidden>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img">
                <circle cx="12" cy="8" r="4.4" fill="none" stroke="#2b9bdc" strokeWidth="1.6"/>
                <path d="M12 12v5" stroke="#2b9bdc" strokeWidth="1.6" strokeLinecap="round"/>
                <path d="M12 17l-2.2 3h4.4L12 17z" fill="#2b9bdc"/>
              </svg>
            </div>

            <div className="hb-badge" aria-hidden>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img">
                <path d="M12 3L5 6v6c0 5 3.5 9 7 9s7-4 7-9V6l-7-3z" fill="#e07a3b" stroke="#d76b2f" strokeWidth="0.8"/>
              </svg>
            </div>
          </div>

          <p className="highlight-note">Trusted by thousands worldwide</p>
        </div>
      </section>

      {/* MODAL */}
      {openCert && (
        <div className="cert-modal" onClick={() => setOpenCert(null)}>
          <div className="cert-modal-inner" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOpenCert(null)}>✕</button>
            <img src={openCert.full} alt={openCert.title} />
            <p className="modal-caption">{openCert.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}
import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [countdown, setCountdown] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });
  const [subtitle, setSubtitle] = useState('');
  const [formStatus, setFormStatus] = useState({ loading: false, message: '', type: '' });

  const fullSubtitle = "Build. Code. Present. Win."; // Sparkathon Motto
  const registrationLink = "https://docs.google.com/forms/d/e/1FAIpQLSdCP3jvVTYBAOdhY7uLmjrtUGXQomfQSu4ckT2szO33jJCAFQ/viewform?usp=dialog";
  const observerRef = useRef(null);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      const eventDate = new Date('2026-02-12T00:00:00').getTime();
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setCountdown({
        days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'),
        minutes: String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'),
        seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0')
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Typing effect
  // Typing effect
  useEffect(() => {
    let i = 0;
    setSubtitle(''); // Reset on mount
    const typing = setInterval(() => {
      if (i < fullSubtitle.length) {
        setSubtitle((prev) => fullSubtitle.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);
    return () => {
      clearInterval(typing);
      setSubtitle(''); // Optional: clear on unmount
    };
  }, []);

  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleRegister = () => {
    window.open(registrationLink, '_blank');
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <span className="sparkle">✨</span>
              <span className="logo-text">Sparkathon'26</span>
            </div>
            <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
              <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#eligibility" onClick={() => setMenuOpen(false)}>Eligibility</a></li>
              <li><a href="#rules" onClick={() => setMenuOpen(false)}>Rules</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
            <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-bg">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">IFET COLLEGE OF ENGINEERING <br></br> CSI - Computer Society of India</div>
            <h1 className="hero-title">
              <span>Sparkathon'26</span>
              <div className="hero-sprint-subtitle">A 2hr Sprint hackathon</div>
            </h1>
            <p className="hero-subtitle">{subtitle}</p>
            <div className="hero-details">
              <div className="detail-item"><span className="icon">📅</span><span className="text">12th Feb 2026</span></div>
              <div className="detail-item"><span className="icon">⏱️</span><span className="text">10AM to 4PM (2hrs to Build)</span></div>
              <div className="detail-item"><span className="icon">👥</span><span className="text">2-3 Members</span></div>
            </div>

            <div className="countdown">
              {Object.entries(countdown).map(([label, value]) => (
                <div className="countdown-item" key={label}>
                  <span className="countdown-value">{value}</span>
                  <span className="countdown-label">{label}</span>
                </div>
              ))}
            </div>

            <div className="hero-buttons">
              <a href={registrationLink} target="_blank" rel="noreferrer" className="btn btn-primary"><span>Register Now</span><span className="btn-icon">→</span></a>
              <a href="#rules" className="btn btn-secondary"><span>View Rules</span></a>
            </div>
          </div>
        </div>
        <div className="scroll-indicator"><div className="mouse"></div></div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Sparkathon'26</h2>
            <p className="section-subtitle">An intense 2-hour coding challenge</p>
          </div>
          <div className="about-grid">
            {[
              { icon: "⚡", title: "On-Spot Hackathon", text: "Fast-paced 2-hour on-spot hackathon with real-time problem statements." },
              { icon: "🎓", title: "Exclusive for Tech", text: "Open to CSE, IT, AIML, AIDS, and Cyber Security students." },
              { icon: "🏆", title: "CSI Members Only", text: "Only registered CSI members are eligible to participate." },
              { icon: "💡", title: "Build & Present", text: "Create innovative solutions and present to expert judges." },
              { icon: "🚀", title: "Problem on Spot", text: "Problem statement revealed at the event to test quick thinking." },
              { icon: "⏰", title: "Time-Bound", text: "Exactly 2 hours to design, develop, and prepare." }
            ].map((item, idx) => (
              <div className="about-card scroll-animate" key={idx}>
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="eligibility" id="eligibility">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Eligibility Criteria</h2>
          </div>
          <div className="eligibility-card scroll-animate">
            <div className="eligibility-content">
              <div className="check-icon">✅</div>
              <h3>CSI Members Only</h3>
              <p>Only registered CSI members are eligible to participate.</p>
              <div className="departments">
                <h4>Departments Allowed:</h4>
                <div className="dept-tags">
                  {["CSE", "IT", "AIML", "AIDS", "Cyber Security"].map(dept => (
                    <span className="dept-tag" key={dept}>{dept}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="rules" id="rules">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Rules & Guidelines</h2>
          </div>
          <div className="rules-grid">
            {[
              { num: "01", title: "Time Limit", text: "Strict 2-hour duration for all teams." },
              { num: "02", title: "Problem Statement", text: "Provided on the spot at event start." },
              { num: "03", title: "No Plagiarism", text: "Original work only. Prohibited code reuse." },
              { num: "04", title: "Presentation", text: "Teams must present final output to judges." },
              { num: "05", title: "Judges Decision", text: "Final and binding decision by the panel." },
              { num: "06", title: "Limited Slots", text: "Registration closes once slots are full." }
            ].map((rule, idx) => (
              <div className="rule-card scroll-animate" key={idx}>
                <div className="rule-number">{rule.num}</div>
                <h3>{rule.title}</h3>
                <p>{rule.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Contact Us</h2>
          </div>
          <div className="contact-grid">
            {[
              { name: "Mrs. Vanitha", role: "Staff Incharge", dept: "AP/CSE", phone: "9952531421", img: "vanitha.jpg" },
              { name: "Mr. Riknesh", role: "Student Representative", dept: "3rd Year/CSE", phone: "9488936779", img: "riknesh.jpg" },
              { name: "Mr. Pushparaj", role: "Student Representative", dept: "3rd Year/CSE", phone: "7695965434", img: "pushparaj.jpg" }
            ].map((person, idx) => (
              <div className="contact-card scroll-animate" key={idx}>
                <div className="contact-image">
                  <img src={`/images/${person.img}`} alt={person.name} onError={(e) => e.target.src = 'https://ui-avatars.com/api/?name=' + person.name} />
                </div>
                <div className="contact-info">
                  <h3>{person.name}</h3>
                  <p className="role">{person.role}</p>
                  <p className="dept">{person.dept}</p>
                  <a href={`tel:${person.phone}`} className="contact-phone">
                    <span className="phone-icon">📞</span>
                    <span>{person.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="register-section scroll-animate">
            <h3>Ready to participate?</h3>
            <button onClick={handleRegister} className="btn btn-primary btn-large">
              <span>Register Now via Google Form</span>
              <span className="btn-icon">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo"><span className="sparkle">✨</span><span>Sparkathon'26</span></div>
            <p className="footer-text">IFET COLLEGE OF ENGINEERING - CSI Computer Society of India</p>
            <p className="copyright">&copy; 2026 Sparkathon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

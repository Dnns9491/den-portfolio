function Contact() {
  return (
    <section id="contact" className="section narrow">
      <h2>Let's Work Together</h2>
      <p className="section-intro">
        Open to backend Java roles, full-stack projects and software engineering opportunities.
      </p>

      <div className="contact-layout">
        <div className="contact-info">
          <div className="contact-info-item">
            <span className="contact-icon">✉</span>
            <div>
              <strong>Email</strong>
              <p>dennis_1994@hotmail.co.uk</p>
            </div>
          </div>
          <div className="contact-info-item">
            <span className="contact-icon">in</span>
            <div>
              <strong>LinkedIn</strong>
              <p>linkedin.com/in/dennissasi</p>
            </div>
          </div>
          <div className="contact-info-item">
            <span className="contact-icon">⌥</span>
            <div>
              <strong>GitHub</strong>
              <p>github.com/Dnns9491</p>
            </div>
          </div>
          <div className="contact-info-item">
            <span className="contact-icon">◎</span>
            <div>
              <strong>Location</strong>
              <p>London, United Kingdom</p>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <p className="contact-form-title">Send a Message</p>
          <form className="contact-form">
            <div className="contact-form-row">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows={5} />
            <button type="submit" className="contact-submit">
              &#9658; Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

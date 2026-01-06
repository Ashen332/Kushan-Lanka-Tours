export default function Contact() {
  return (
    <section className="container my-5">

      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold">Get in Touch</h1>
        <p className="text-secondary mt-3">
          Have questions or ready to plan your next adventure?  
          We’d love to hear from you.
        </p>
      </div>

      <div className="row g-5 align-items-start">

        {/* Contact Form */}
        <div className="col-lg-7">
          <div className="p-4 p-md-5 bg-light rounded-4 shadow-sm">
            <h4 className="fw-bold mb-4">Send us a message</h4>

            <form>
              <div className="mb-3">
                <label className="form-label fw-semibold">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-control form-control-lg"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="form-control form-control-lg"
                />
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Message</label>
                <textarea
                  placeholder="Tell us about your trip or question..."
                  className="form-control"
                  rows={6}
                />
              </div>

              <button type="submit" className="btn btn-success btn-lg px-4">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="col-lg-5">
          <div className="p-4 p-md-5 rounded-4 shadow-sm border h-100">
            <h4 className="fw-bold mb-4">Contact Information</h4>

            <div className="mb-3">
              <p className="mb-1 fw-semibold">📍 Location</p>
              <p className="text-secondary">Sri Lanka</p>
            </div>

            <div className="mb-3">
              <p className="mb-1 fw-semibold">📞 Phone</p>
              <p className="text-secondary">+94 7X XXX XXXX</p>
            </div>

            <div className="mb-4">
              <p className="mb-1 fw-semibold">✉️ Email</p>
              <p className="text-secondary">info@kushanlankatours.com</p>
            </div>

            <div className="border-top pt-3">
              <p className="small text-muted mb-0">
                Our team usually responds within 24 hours.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

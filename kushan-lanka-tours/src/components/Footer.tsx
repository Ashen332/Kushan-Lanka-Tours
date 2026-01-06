import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-custom text-light mt-5">
      <div className="container py-5">
        <div className="row g-4">
          {/* Brand / About */}
          <div className="col-md-4">
            <h5 className="fw-bold text-white mb-3">
              🌴 Kushan Lanka Tours
            </h5>
            <p className="small text-light opacity-75">
              Explore Sri Lanka with trusted local guides, curated tour packages,
              and unforgettable travel experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h6 className="fw-semibold text-white mb-3">Quick Links</h6>
            <ul className="list-unstyled footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/tours">Tours</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4">
            <h6 className="fw-semibold text-white mb-3">Contact</h6>
            <p className="small mb-2">📍 Sri Lanka</p>
            <p className="small mb-2">📞 +94 7X XXX XXXX</p>
            <p className="small mb-0">✉️ info@kushanlankatours.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom text-center small">
        © {new Date().getFullYear()} Kushan Lanka Tours. All rights reserved.
      </div>
    </footer>
  );
}

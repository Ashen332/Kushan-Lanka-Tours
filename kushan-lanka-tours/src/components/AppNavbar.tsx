import { Link, NavLink } from "react-router-dom";

export default function AppNavbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm fixed-top navbar-custom">
      <div className="container">
        {/* Brand */}
        <Link to="/" className="navbar-brand fw-bold text-success d-flex align-items-center gap-2">
          🌴 <span>Ceylon Escape Travels</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-md-center gap-md-2">
            {[
              { path: "/", label: "Home" },
              { path: "/tours", label: "Tours" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" },
            ].map((item) => (
              <li className="nav-item" key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link px-3 navbar-link ${
                      isActive ? "active-link" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

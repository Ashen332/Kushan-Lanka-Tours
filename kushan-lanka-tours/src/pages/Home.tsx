import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { tours as allTours } from "../data/tours";
import TourCard from "../components/TourCard";
import type { Tour } from "../data/tours";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

// 👉 Import wallpaper image
import wallpaper from "../assets/wallpaper1.jpg";

export default function Home() {
  const [locationFilter, setLocationFilter] = useState("");

  const filteredTours = allTours
    .filter(
      (tour) =>
        !locationFilter ||
        tour.location.toLowerCase().includes(locationFilter.toLowerCase())
    )
    .slice(0, 3);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-vh-100">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${wallpaper})` }}
      >
        {/* Overlay */}
        <div className="hero-overlay"></div>

        {/* Hero Content */}
        <h1
          className="display-4 fw-bold mb-3"
          data-aos="fade-down"
        >
          Explore Sri Lanka with Kushan Lanka Tours
        </h1>

        <p
          className="lead mb-4 mx-auto"
          style={{ maxWidth: "600px" }}
          data-aos="fade-up"
        >
          Authentic experiences. Local guides. Unforgettable journeys. Discover the beauty,
          culture, and adventure Sri Lanka has to offer.
        </p>

        <Link
          to="/tours"
          className="btn btn-light text-success fw-semibold px-4 py-2 hero-btn"
          data-aos="zoom-in"
        >
          Explore Tours
        </Link>
      </section>

      {/* Featured Tours */}
      <section className="container py-5">
        <h2 className="text-center mb-5" data-aos="fade-up">
          Featured Tours
        </h2>

        {/* Location Filter */}
        <div className="d-flex justify-content-center mb-4" data-aos="fade-up">
          <input
            type="text"
            placeholder="Filter by location"
            className="form-control w-50"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          />
        </div>

        <div className="row g-4">
          {filteredTours.length ? (
            filteredTours.map((tour: Tour, index) => (
              <div
                className="col-sm-6 col-lg-4"
                key={tour.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <TourCard tour={tour} />
              </div>
            ))
          ) : (
            <p className="text-center text-muted col-12">
              No tours found.
            </p>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-5" data-aos="zoom-in">
          <Link to="/tours" className="btn btn-success btn-lg px-4 py-2 cta-btn">
            View All Tours
          </Link>
        </div>
      </section>
    </div>
  );
}

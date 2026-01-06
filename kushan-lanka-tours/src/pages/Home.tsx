import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { tours as allTours } from "../data/tours";
import TourCard from "../components/TourCard";
import type { Tour } from "../data/tours";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

// Reviews
import { reviews } from "../data/reviews";
import ReviewCard from "../components/ReviewCard";

// Wallpaper
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
                <div className="hero-overlay"></div>

                <h1 className="display-4 fw-bold mb-3" data-aos="fade-down">
                    Explore Sri Lanka with Ceylon Escape Travels
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
                <h2 className="text-center mb-2">Our Popular Experiences</h2>
                <p className="text-center text-muted mb-5">
                    Hand-picked journeys designed for comfort, adventure, and authenticity
                </p>


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

                <div className="text-center mt-5" data-aos="zoom-in">
                    <Link
                        to="/tours"
                        className="btn btn-success btn-lg px-4 py-2 cta-btn"
                    >
                        View All Tours
                    </Link>
                </div>
            </section>

            

            <section className="bg-light py-5">
                <div className="container">
                    <h2 className="text-center mb-5">Why Choose Ceylon Escape Travels?</h2>

                    <div className="row g-4 text-center">
                        <div className="col-md-4">
                            <h5>🚐 Comfortable Travel</h5>
                            <p className="text-muted">
                                Clean, air-conditioned vehicles with experienced local drivers.
                            </p>
                        </div>

                        <div className="col-md-4">
                            <h5>🌍 Local Expertise</h5>
                            <p className="text-muted">
                                Authentic experiences guided by locals who know Sri Lanka best.
                            </p>
                        </div>

                        <div className="col-md-4">
                            <h5>🕒 Reliable & On-Time</h5>
                            <p className="text-muted">
                                Punctual service with flexible itineraries.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Customer Reviews */}
            <section className="container py-5">
                <h2 className="text-center mb-2">Trusted by Travelers Worldwide</h2>
                <p className="text-center text-muted mb-5">
                    Real experiences from our happy customers
                </p>


                <div className="row g-4">
                    {reviews.slice(0, 6).map((review, index) => (
                        <div
                            key={review.id}
                            className="col-md-4"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <ReviewCard review={review} />
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}

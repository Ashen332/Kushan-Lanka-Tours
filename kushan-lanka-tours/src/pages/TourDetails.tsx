import { useState } from "react";
import { useParams } from "react-router-dom";
import { tours } from "../data/tours";
import BookingModal from "../components/BookingModel";
import InstagramCarousel from "../components/InstagramCarousel";

export default function TourDetails() {
    const { id } = useParams();
    const tour = tours.find((t) => t.id === id);
    const [showModal, setShowModal] = useState(false);

    if (!tour) {
        return <p className="text-center mt-5 text-secondary">Tour not found</p>;
    }

    return (
        <section className="container my-5">

            {/* Hero Section */}
            <div
                className="position-relative rounded overflow-hidden mb-5 shadow"
                style={{ height: "420px" }}
            >
                <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-100 h-100 object-fit-cover"
                />

                {/* Gradient Overlay */}
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.6))",
                    }}
                />

                {/* Title */}
                <div className="position-absolute bottom-0 start-0 p-4 text-white">
                    <h1 className="display-6 fw-bold mb-1">{tour.title}</h1>
                    <p className="mb-0 opacity-75">📍 {tour.location}</p>
                </div>
            </div>

            {/* Photo Gallery */}
            {tour.gallery && tour.gallery.length > 0 && (
                <div className="mt-5">
                    <h3 className="fw-bold mb-4">
                        Moments from {tour.location}
                    </h3>

                    <InstagramCarousel images={tour.gallery} />
                </div>
            )}


            {/* Main Content */}
            <div className="row g-5">

                {/* Left Content */}
                <div className="col-lg-8">
                    <h2 className="fw-bold mb-3">Tour Overview</h2>
                    <p className="text-secondary fs-6">{tour.description}</p>

                    {/* Itinerary */}
                    {tour.itinerary && (
                        <div className="mt-5">
                            <h3 className="fw-bold mb-4">Itinerary</h3>
                            <div className="d-flex flex-column gap-3">
                                {tour.itinerary.map((day, index) => (
                                    <div
                                        key={index}
                                        className="p-4 rounded bg-light border-start border-4 border-success shadow-sm"
                                    >
                                        <strong>Day {index + 1}</strong>
                                        <p className="mb-0 mt-1 text-secondary">{day}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Sidebar */}
                <div className="col-lg-4">
                    <div
                        className="card border-0 shadow sticky-top"
                        style={{ top: "2rem" }}
                    >
                        <div className="card-body">
                            <p className="fs-2 fw-bold text-success mb-1">
                                ${tour.price}
                            </p>
                            <p className="text-muted mb-3">{tour.duration}</p>

                            <button
                                onClick={() => setShowModal(true)}
                                className="btn btn-success w-100 py-2 fw-semibold"
                            >
                                Book Now
                            </button>

                            <hr />

                            {/* Map */}
                            {tour.mapUrl && (
                                <div className="rounded overflow-hidden">
                                    <iframe
                                        src={tour.mapUrl}
                                        className="w-100 border-0"
                                        style={{ height: "230px" }}
                                        loading="lazy"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Booking Modal */}
            <BookingModal
                show={showModal}
                onClose={() => setShowModal(false)}
                tourTitle={tour.title}
            />
        </section>
    );
}

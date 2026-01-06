import { Link } from "react-router-dom";
import type { Tour } from "../data/tours";

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <div className="card h-100 border-0 shadow-sm tour-card">

      {/* Image */}
      <div className="position-relative overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="card-img-top"
          style={{ height: "15rem", objectFit: "cover" }}
        />

        {/* Price Badge */}
        <span className="badge bg-success position-absolute top-0 end-0 m-3 fs-6">
          ${tour.price}
        </span>
      </div>

      {/* Card Body */}
      <div className="card-body d-flex flex-column">

        <p className="text-success fw-medium small mb-1">
          📍 {tour.location}
        </p>

        <h5 className="card-title fw-bold">{tour.title}</h5>

        <p className="text-muted small mb-4">{tour.duration}</p>

        <div className="mt-auto">
          <Link
            to={`/tours/${tour.id}`}
            className="btn btn-outline-success w-100"
          >
            View Tour
          </Link>
        </div>
      </div>
    </div>
  );
}

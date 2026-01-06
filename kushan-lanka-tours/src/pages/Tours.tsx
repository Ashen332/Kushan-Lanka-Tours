import { useState } from "react";
import TourCard from "../components/TourCard";
import type { Tour } from "../data/tours";
import { tours as allTours } from "../data/tours";

export default function Tours() {
  const [locationFilter, setLocationFilter] = useState("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");

  const filteredTours = allTours.filter((tour) => {
    return (
      (!locationFilter ||
        tour.location.toLowerCase().includes(locationFilter.toLowerCase())) &&
      (!maxPrice || tour.price <= maxPrice)
    );
  });

  return (
    <section className="container my-5">

      {/* Header */}
      <div
        className="text-center mb-5 p-5 rounded-4 shadow-sm"
        style={{
          background: "linear-gradient(135deg, #198754, #20c997)",
          color: "white",
        }}
      >
        <h1 className="display-5 fw-bold mb-3">Our Tour Packages</h1>
        <p className="lead opacity-75">
          Handpicked experiences across Sri Lanka
        </p>
      </div>

      {/* Filters Card */}
      <div className="card border-0 shadow-sm mb-5">
        <div className="card-body">
          <div className="row justify-content-center g-3">
            <div className="col-sm-5 col-md-4">
              <input
                type="text"
                placeholder="📍 Filter by location"
                className="form-control form-control-lg"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              />
            </div>

            <div className="col-sm-4 col-md-3">
              <input
                type="number"
                placeholder="💲 Max price"
                className="form-control form-control-lg"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value) || "")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tours Grid */}
      <div className="row g-4">
        {filteredTours.length ? (
          filteredTours.map((tour: Tour) => (
            <div
              className="col-sm-6 col-lg-4"
              key={tour.id}
              style={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <div
                className="h-100"
                style={{
                  transformOrigin: "center",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget.style.transform = "translateY(-6px)"),
                  (e.currentTarget.style.boxShadow =
                    "0 12px 30px rgba(0,0,0,0.15)"))
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget.style.transform = "translateY(0)"),
                  (e.currentTarget.style.boxShadow = "none"))
                }
              >
                <TourCard tour={tour} />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-secondary fs-5 col-12">
            No tours found 😔
          </p>
        )}
      </div>
    </section>
  );
}

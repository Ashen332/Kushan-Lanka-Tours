import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type BookingModalProps = {
  show: boolean;
  onClose: () => void;
  tourTitle: string;
};

export default function BookingModal({
  show,
  onClose,
  tourTitle,
}: BookingModalProps) {
  const [step, setStep] = useState(1);

  const [date, setDate] = useState<Date | null>(null);
  const [guests, setGuests] = useState(1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  if (!show) return null;

  return (
    <div
      className="modal show d-block"
      tabIndex={-1}
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content border-0 shadow-lg">
          {/* HEADER */}
          <div className="modal-header">
            <h5 className="modal-title fw-bold">
              {step < 4 ? "Book Your Tour" : "Booking Confirmed"}
            </h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          {/* BODY */}
          <div className="modal-body">

            {/* STEP INDICATOR */}
            {step < 4 && (
              <div className="mb-4 small text-muted">
                Step {step} of 3
              </div>
            )}

            {/* STEP 1 — DATE & GUESTS */}
            {step === 1 && (
              <>
                <h6 className="fw-bold mb-3">Select Date & Guests</h6>

                <div className="mb-3">
                  <label className="form-label">Tour Date</label>
                  <DatePicker
                    selected={date}
                    onChange={(d) => setDate(d)}
                    className="form-control"
                    minDate={new Date()}
                    placeholderText="Select a date"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Number of Guests</label>
                  <select
                    className="form-select"
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  className="btn btn-success w-100"
                  disabled={!date}
                  onClick={() => setStep(2)}
                >
                  Continue
                </button>
              </>
            )}

            {/* STEP 2 — USER INFO */}
            {step === 2 && (
              <>
                <h6 className="fw-bold mb-3">Traveler Information</h6>

                <input
                  className="form-control mb-3"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <textarea
                  className="form-control mb-3"
                  rows={3}
                  placeholder="Special requests (optional)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />

                <div className="d-flex gap-2">
                  <button
                    className="btn btn-outline-secondary w-50"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </button>
                  <button
                    className="btn btn-success w-50"
                    disabled={!name || !email}
                    onClick={() => setStep(3)}
                  >
                    Continue
                  </button>
                </div>
              </>
            )}

            {/* STEP 3 — REVIEW */}
            {step === 3 && (
              <>
                <h6 className="fw-bold mb-3">Review Your Booking</h6>

                <ul className="list-group mb-3">
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Tour</span>
                    <strong>{tourTitle}</strong>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Date</span>
                    <strong>{date?.toDateString()}</strong>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Guests</span>
                    <strong>{guests}</strong>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Name</span>
                    <strong>{name}</strong>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Email</span>
                    <strong>{email}</strong>
                  </li>
                </ul>

                <div className="alert alert-success small">
                  ✔ No payment required now<br />
                  ✔ Free cancellation up to 24 hours before tour<br />
                  ✔ Local expert guides
                </div>

                <div className="d-flex gap-2">
                  <button
                    className="btn btn-outline-secondary w-50"
                    onClick={() => setStep(2)}
                  >
                    Back
                  </button>
                  <button
                    className="btn btn-success w-50"
                    onClick={() => setStep(4)}
                  >
                    Confirm Booking
                  </button>
                </div>
              </>
            )}

            {/* STEP 4 — SUCCESS */}
            {step === 4 && (
              <div className="text-center py-4">
                <h4 className="fw-bold text-success">
                  🎉 Booking Request Sent!
                </h4>
                <p className="text-muted mt-2">
                  Thank you for booking with us.<br />
                  Our team will contact you shortly via email.
                </p>

                <button
                  className="btn btn-success mt-3 px-4"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

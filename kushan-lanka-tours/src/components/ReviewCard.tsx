
import type { Review } from "../data/reviews"; // 👈 use 'import type'

type Props = {
  review: Review;
};

export default function ReviewCard({ review }: Props) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="review-card p-4 bg-light rounded shadow-sm h-100">
      {/* Reviewer Info */}
      <div className="d-flex align-items-center mb-3">
        <div className="avatar rounded-circle bg-success text-white d-flex justify-content-center align-items-center me-3">
          {review.name.charAt(0)}
        </div>
        <div>
          <h6 className="mb-0 fw-bold">{review.name}</h6>
          {review.country && <small className="text-muted">{review.country}</small>}
        </div>
      </div>

      {/* Star Rating */}
      <div className="mb-2">
        {stars.map((s) => (
          <span
            key={s}
            className={`me-1 ${s <= review.rating ? "text-warning" : "text-muted"}`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Comment */}
      <p className="text-secondary">{review.comment}</p>
    </div>
  );
}

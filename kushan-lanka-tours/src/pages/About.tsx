export default function About() {
  return (
    <section className="container my-5">

      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold">About Kushan Lanka Tours</h1>
        <p className="text-secondary mt-3">
          Discover Sri Lanka through authentic journeys and unforgettable experiences.
        </p>
      </div>

      {/* Main Content */}
      <div className="row justify-content-center">
        <div className="col-lg-10">

          <div className="bg-light rounded-4 p-4 p-md-5 shadow-sm mb-4">
            <p className="text-secondary fs-5 mb-3">
              At <strong>Kushan Lanka Tours</strong>, we specialize in delivering authentic,
              immersive travel experiences across Sri Lanka. Our knowledgeable local guides
              ensure that every journey is safe, comfortable, and truly unforgettable.
            </p>

            <p className="text-secondary fs-5 mb-0">
              From misty hill-country adventures in Kandy to golden beach escapes in Mirissa,
              our carefully curated tour packages are designed for adventure seekers,
              leisure travelers, couples, and families alike.
            </p>
          </div>

          {/* Highlights */}
          <div className="row g-4 mt-2">
            <div className="col-md-4">
              <div className="p-4 border rounded-4 h-100 text-center">
                <div className="fs-1 mb-2">🌍</div>
                <h5 className="fw-bold">Authentic Experiences</h5>
                <p className="text-secondary small">
                  Travel like a local with unique destinations and cultural immersion.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 border rounded-4 h-100 text-center">
                <div className="fs-1 mb-2">🧭</div>
                <h5 className="fw-bold">Expert Guides</h5>
                <p className="text-secondary small">
                  Friendly, knowledgeable guides who know Sri Lanka inside out.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 border rounded-4 h-100 text-center">
                <div className="fs-1 mb-2">⭐</div>
                <h5 className="fw-bold">Premium Service</h5>
                <p className="text-secondary small">
                  Comfort, safety, and unforgettable memories are our top priorities.
                </p>
              </div>
            </div>
          </div>

          {/* Closing */}
          <div className="text-center mt-5">
            <p className="fs-5 fw-semibold">
              Join us and explore Sri Lanka like never before!
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}

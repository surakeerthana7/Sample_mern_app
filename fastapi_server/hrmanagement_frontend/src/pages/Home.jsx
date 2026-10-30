import animal1 from "../assets/animal1.webp";
import animal2 from "../assets/animal2.webp";
import animal3 from "../assets/animal3.jpg";

function Home() {
  return (
    <div className="container-fluid px-2 px-md-4 py-4">

      {/* Heading */}
      <div className="container mb-4">
        <div className="text-center">
          <h1 className="fw-bold display-5">
            Explore the <span className="text-primary">Animal World</span>
          </h1>

          <p className="text-secondary fs-6">
            Discover the beauty and diversity of amazing animals
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div
        id="carouselStacked"
        className="carousel slide carousel-fade shadow-lg rounded-4 overflow-hidden mx-auto"
        data-bs-ride="carousel"
        style={{ maxWidth: "1200px" }}
      >

        {/* Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselStacked"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselStacked"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselStacked"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Images */}
        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active">
            <img
              src={animal1}
              className="d-block w-100"
              alt="Animal 1"
              style={{
                height: "clamp(300px, 55vw, 600px)",
                objectFit: "cover",
              }}
            />

            <div className="carousel-caption d-block">
              <div className="bg-dark bg-opacity-50 rounded-4 p-3 p-md-4">
                <h2 className="fw-bold">Wild Beauty</h2>
                <p className="mb-0">
                  Experience the beauty of wildlife.
                </p>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img
              src={animal2}
              className="d-block w-100"
              alt="Animal 2"
              style={{
                height: "clamp(300px, 55vw, 600px)",
                objectFit: "cover",
              }}
            />

            <div className="carousel-caption d-block">
              <div className="bg-dark bg-opacity-50 rounded-4 p-3 p-md-4">
                <h2 className="fw-bold">Amazing Creatures</h2>
                <p className="mb-0">
                  Learn more about incredible animals.
                </p>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img
              src={animal3}
              className="d-block w-100"
              alt="Animal 3"
              style={{
                height: "clamp(300px, 55vw, 600px)",
                objectFit: "cover",
              }}
            />

            <div className="carousel-caption d-block">
              <div className="bg-dark bg-opacity-50 rounded-4 p-3 p-md-4">
                <h2 className="fw-bold">Nature & Life</h2>
                <p className="mb-0">
                  Explore the wonderful world of nature.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Previous Button */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselStacked"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-dark rounded-circle p-4"
            aria-hidden="true"
          ></span>

          <span className="visually-hidden">
            Previous
          </span>
        </button>

        {/* Next Button */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselStacked"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-dark rounded-circle p-4"
            aria-hidden="true"
          ></span>

          <span className="visually-hidden">
            Next
          </span>
        </button>

      </div>

      {/* Bottom Cards */}
      <div className="container mt-5">
        <div className="row g-4">

          <div className="col-12 col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-4">
              <div className="fs-1">🦁</div>
              <h5 className="fw-bold mt-2">Wild Animals</h5>
              <p className="text-secondary mb-0">
                Discover animals living in the wild.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-4">
              <div className="fs-1">🌿</div>
              <h5 className="fw-bold mt-2">Nature</h5>
              <p className="text-secondary mb-0">
                Explore the beauty of the natural world.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-4">
              <div className="fs-1">🐾</div>
              <h5 className="fw-bold mt-2">Animal Life</h5>
              <p className="text-secondary mb-0">
                Learn interesting facts about animals.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Home;
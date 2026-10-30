import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container-fluid px-4">

        {/* Logo */}
        <Link to="/" className="navbar-brand fw-bold fs-4">
          HR Management
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarMenu">
          <div className="navbar-nav ms-auto gap-lg-2">

            <Link to="/" className="nav-link px-3">
              Home
            </Link>

            <Link to="/about" className="nav-link px-3">
              About Us
            </Link>

            <Link to="/contact" className="nav-link px-3">
              Contact Us
            </Link>

            <Link to="/login" className="nav-link px-3">
              Login
            </Link>

            <Link
              to="/register"
              className="btn btn-primary px-4 ms-lg-2 mt-2 mt-lg-0"
            >
              Register
            </Link>

          </div>
        </div>

      </div>
    </nav>
  );
}

export default Header;
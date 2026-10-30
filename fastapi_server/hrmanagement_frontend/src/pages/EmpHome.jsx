function EmpHome() {
  return (
    <div className="container-fluid bg-light min-vh-100 py-4">

      <div className="container">

        {/* Welcome Section */}
        <div className="bg-primary text-white rounded-4 shadow-lg p-4 p-md-5 mb-4">
          <div className="row align-items-center">

            <div className="col-md-8">
              <h1 className="fw-bold display-5">
                Welcome, Employee 👋
              </h1>

              <p className="lead mb-0">
                Manage your work, leave, profile and daily activities.
              </p>
            </div>

            <div className="col-md-4 text-center mt-4 mt-md-0">
              <div
                className="bg-white text-primary rounded-circle d-inline-flex
                align-items-center justify-content-center shadow"
                style={{
                  width: "110px",
                  height: "110px",
                  fontSize: "50px",
                }}
              >
                👨‍💻
              </div>
            </div>

          </div>
        </div>


        {/* Dashboard Cards */}
        <div className="row g-4">

          {/* Profile */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body text-center p-4">

                <div className="fs-1 mb-3">👤</div>

                <h5 className="fw-bold">
                  My Profile
                </h5>

                <p className="text-secondary">
                  View and manage your personal information.
                </p>

                <button className="btn btn-primary rounded-pill px-4">
                  View Profile
                </button>

              </div>
            </div>
          </div>


          {/* Leave */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body text-center p-4">

                <div className="fs-1 mb-3">📅</div>

                <h5 className="fw-bold">
                  Leave
                </h5>

                <p className="text-secondary">
                  Apply for leave and check your leave status.
                </p>

                <button className="btn btn-success rounded-pill px-4">
                  Manage Leave
                </button>

              </div>
            </div>
          </div>


          {/* Attendance */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body text-center p-4">

                <div className="fs-1 mb-3">⏰</div>

                <h5 className="fw-bold">
                  Attendance
                </h5>

                <p className="text-secondary">
                  Check your attendance and working hours.
                </p>

                <button className="btn btn-warning rounded-pill px-4">
                  View Attendance
                </button>

              </div>
            </div>
          </div>


          {/* Salary */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body text-center p-4">

                <div className="fs-1 mb-3">💰</div>

                <h5 className="fw-bold">
                  Salary
                </h5>

                <p className="text-secondary">
                  View salary details and payment information.
                </p>

                <button className="btn btn-dark rounded-pill px-4">
                  View Salary
                </button>

              </div>
            </div>
          </div>

        </div>


        {/* Quick Actions */}
        <div className="card border-0 shadow-sm rounded-4 mt-5">

          <div className="card-body p-4">

            <h3 className="fw-bold mb-4">
              Quick Actions
            </h3>

            <div className="d-flex flex-column flex-md-row gap-3">

              <button className="btn btn-outline-primary rounded-pill px-4">
                Apply Leave
              </button>

              <button className="btn btn-outline-success rounded-pill px-4">
                Check Attendance
              </button>

              <button className="btn btn-outline-warning rounded-pill px-4">
                Update Profile
              </button>

              <button className="btn btn-outline-dark rounded-pill px-4">
                View Salary
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EmpHome;

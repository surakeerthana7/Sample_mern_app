function HrHome() {
  return (
    <div className="container-fluid bg-light min-vh-100 py-4">

      {/* Header */}
      <div className="container">

        <div className="bg-primary text-white rounded-4 shadow-lg p-4 p-md-5 mb-4">
          <div className="row align-items-center">

            <div className="col-md-8">
              <h1 className="fw-bold display-5">
                Welcome, HR 👋
              </h1>

              <p className="lead mb-0">
                Manage employees, recruitment and HR activities easily.
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
                👨‍💼
              </div>
            </div>

          </div>
        </div>


        {/* Dashboard Cards */}
        <div className="row g-4">

          {/* Employees */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4 text-center">

                <div className="fs-1 mb-3">
                  👥
                </div>

                <h5 className="fw-bold">
                  Employees
                </h5>

                <p className="text-secondary">
                  Manage employee information and records.
                </p>

                <button className="btn btn-primary rounded-pill px-4">
                  View Employees
                </button>

              </div>
            </div>
          </div>


          {/* Recruitment */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4 text-center">

                <div className="fs-1 mb-3">
                  📋
                </div>

                <h5 className="fw-bold">
                  Recruitment
                </h5>

                <p className="text-secondary">
                  Manage job applications and recruitment.
                </p>

                <button className="btn btn-success rounded-pill px-4">
                  View Applications
                </button>

              </div>
            </div>
          </div>


          {/* Leave */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4 text-center">

                <div className="fs-1 mb-3">
                  📅
                </div>

                <h5 className="fw-bold">
                  Leave Requests
                </h5>

                <p className="text-secondary">
                  Review and manage employee leave requests.
                </p>

                <button className="btn btn-warning rounded-pill px-4">
                  View Requests
                </button>

              </div>
            </div>
          </div>


          {/* Reports */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4 text-center">

                <div className="fs-1 mb-3">
                  📊
                </div>

                <h5 className="fw-bold">
                  Reports
                </h5>

                <p className="text-secondary">
                  View HR reports and employee statistics.
                </p>

                <button className="btn btn-dark rounded-pill px-4">
                  View Reports
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
                + Add Employee
              </button>

              <button className="btn btn-outline-success rounded-pill px-4">
                + Add Job
              </button>

              <button className="btn btn-outline-warning rounded-pill px-4">
                Review Leave
              </button>

              <button className="btn btn-outline-dark rounded-pill px-4">
                Generate Report
              </button>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default HrHome;
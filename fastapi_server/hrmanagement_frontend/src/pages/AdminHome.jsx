 function AdminHome() {
  return (
    <div className="container-fluid bg-light min-vh-100 py-4">

      <div className="container">

        {/* Welcome Section */}
        <div className="bg-dark text-white rounded-4 shadow-lg p-4 p-md-5 mb-4">
          <div className="row align-items-center">

            <div className="col-md-8">
              <h1 className="fw-bold display-5">
                Welcome, Admin 👋
              </h1>

              <p className="lead mb-0">
                Manage users, employees, HR operations and system settings.
              </p>
            </div>

            <div className="col-md-4 text-center mt-4 mt-md-0">
              <div
                className="bg-white text-dark rounded-circle d-inline-flex
                align-items-center justify-content-center shadow"
                style={{
                  width: "110px",
                  height: "110px",
                  fontSize: "50px",
                }}
              >
                🛡️
              </div>
            </div>

          </div>
        </div>


        {/* Admin Dashboard Cards */}
        <div className="row g-4">

          {/* User Management */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body text-center p-4">

                <div className="fs-1 mb-3">👥</div>

                <h5 className="fw-bold">
                  Users
                </h5>

                <p className="text-secondary">
                  Create, update and manage system users.
                </p>

                <button className="btn btn-dark rounded-pill px-4">
                  Manage Users
                </button>

              </div>
            </div>
          </div>


          {/* Employees */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body text-center p-4">

                <div className="fs-1 mb-3">👨‍💼</div>

                <h5 className="fw-bold">
                  Employees
                </h5>

                <p className="text-secondary">
                  Manage employee records and information.
                </p>

                <button className="btn btn-primary rounded-pill px-4">
                  Manage Employees
                </button>

              </div>
            </div>
          </div>


          {/* HR Management */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body text-center p-4">

                <div className="fs-1 mb-3">📋</div>

                <h5 className="fw-bold">
                  HR Management
                </h5>

                <p className="text-secondary">
                  Manage HR accounts and HR activities.
                </p>

                <button className="btn btn-success rounded-pill px-4">
                  Manage HR
                </button>

              </div>
            </div>
          </div>


          {/* Reports */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body text-center p-4">

                <div className="fs-1 mb-3">📊</div>

                <h5 className="fw-bold">
                  Reports
                </h5>

                <p className="text-secondary">
                  View system and employee reports.
                </p>

                <button className="btn btn-warning rounded-pill px-4">
                  View Reports
                </button>

              </div>
            </div>
          </div>

        </div>


        {/* System Management */}
        <div className="card border-0 shadow-sm rounded-4 mt-5">

          <div className="card-body p-4">

            <h3 className="fw-bold mb-4">
              System Management
            </h3>

            <div className="d-flex flex-column flex-md-row gap-3">

              <button className="btn btn-outline-dark rounded-pill px-4">
                ⚙️ System Settings
              </button>

              <button className="btn btn-outline-primary rounded-pill px-4">
                🔐 Manage Roles
              </button>

              <button className="btn btn-outline-success rounded-pill px-4">
                🗄️ Database
              </button>

              <button className="btn btn-outline-danger rounded-pill px-4">
                📝 Activity Logs
              </button>

            </div>

          </div>

        </div>


        {/* Statistics */}
        <div className="row g-4 mt-3">

          <div className="col-12 col-md-4">
            <div className="card border-0 shadow-sm rounded-4 text-center p-4">
              <h6 className="text-secondary">
                Total Users
              </h6>

              <h2 className="fw-bold">
                120
              </h2>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card border-0 shadow-sm rounded-4 text-center p-4">
              <h6 className="text-secondary">
                Total Employees
              </h6>

              <h2 className="fw-bold">
                85
              </h2>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card border-0 shadow-sm rounded-4 text-center p-4">
              <h6 className="text-secondary">
                HR Managers
              </h6>

              <h2 className="fw-bold">
                12
              </h2>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminHome;
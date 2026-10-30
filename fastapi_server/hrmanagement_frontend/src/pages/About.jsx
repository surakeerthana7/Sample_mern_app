function About() {
  return (
    <div className="container-fluid bg-light min-vh-100 py-5">

      <div className="container">

        {/* Hero Section */}
        <div className="bg-primary text-white rounded-4 shadow-lg p-4 p-md-5 text-center mb-5">

          <div className="fs-1 mb-3">
            🏢
          </div>

          <h1 className="display-5 fw-bold">
            About Our HR Management System
          </h1>

          <p className="lead mb-0 mt-3">
            A simple and efficient platform for managing employees,
            HR activities and organizational tasks.
          </p>

        </div>


        {/* About Content */}
        <div className="row g-4 align-items-stretch">

          {/* About System */}
          <div className="col-12 col-md-6">
            <div className="card border-0 shadow-sm rounded-4 h-100">

              <div className="card-body p-4 p-md-5">

                <div className="fs-1 mb-3">
                  💼
                </div>

                <h3 className="fw-bold mb-3">
                  What We Do
                </h3>

                <p className="text-secondary">
                  Our HR Management System helps organizations manage
                  employee information, attendance, leave requests,
                  recruitment and other HR-related activities in one
                  convenient platform.
                </p>

                <p className="text-secondary mb-0">
                  The system provides different dashboards for
                  Administrators, HR Managers and Employees.
                </p>

              </div>

            </div>
          </div>


          {/* Our Goal */}
          <div className="col-12 col-md-6">
            <div className="card border-0 shadow-sm rounded-4 h-100">

              <div className="card-body p-4 p-md-5">

                <div className="fs-1 mb-3">
                  🎯
                </div>

                <h3 className="fw-bold mb-3">
                  Our Goal
                </h3>

                <p className="text-secondary">
                  Our goal is to make HR management easier, faster
                  and more organized by providing a user-friendly
                  digital platform.
                </p>

                <p className="text-secondary mb-0">
                  We aim to reduce manual work and provide easy access
                  to important employee and HR information.
                </p>

              </div>

            </div>
          </div>

        </div>


        {/* Features */}
        <div className="card border-0 shadow-sm rounded-4 mt-5">

          <div className="card-body p-4 p-md-5">

            <div className="text-center mb-4">

              <h2 className="fw-bold">
                Key Features
              </h2>

              <p className="text-secondary">
                Everything you need for simple HR management
              </p>

            </div>

            <div className="row g-4">

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="text-center p-3">
                  <div className="fs-1">👥</div>

                  <h5 className="fw-bold mt-2">
                    Employee Management
                  </h5>

                  <p className="text-secondary small">
                    Manage employee information and records.
                  </p>
                </div>
              </div>


              <div className="col-12 col-sm-6 col-lg-3">
                <div className="text-center p-3">
                  <div className="fs-1">📅</div>

                  <h5 className="fw-bold mt-2">
                    Leave Management
                  </h5>

                  <p className="text-secondary small">
                    Apply, review and manage employee leaves.
                  </p>
                </div>
              </div>


              <div className="col-12 col-sm-6 col-lg-3">
                <div className="text-center p-3">
                  <div className="fs-1">⏰</div>

                  <h5 className="fw-bold mt-2">
                    Attendance
                  </h5>

                  <p className="text-secondary small">
                    Track employee attendance and working hours.
                  </p>
                </div>
              </div>


              <div className="col-12 col-sm-6 col-lg-3">
                <div className="text-center p-3">
                  <div className="fs-1">📊</div>

                  <h5 className="fw-bold mt-2">
                    Reports
                  </h5>

                  <p className="text-secondary small">
                    Access useful HR and employee reports.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>


        {/* Bottom Message */}
        <div className="text-center mt-5">

          <h4 className="fw-bold">
            Making HR Management Simple 🚀
          </h4>

          <p className="text-secondary">
            Designed to provide a simple, secure and efficient
            experience for every user.
          </p>

        </div>

      </div>

    </div>
  );
}

export default About;
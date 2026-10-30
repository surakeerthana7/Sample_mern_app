function Contact() {
  return (
    <div className="container-fluid bg-light min-vh-100 py-5">

      <div className="container">

        {/* Header */}
        <div className="text-center mb-5">

          <div className="fs-1 mb-2">
            📞
          </div>

          <h1 className="display-5 fw-bold">
            Contact Us
          </h1>

          <p className="text-secondary lead">
            Have a question? We'd love to hear from you.
          </p>

        </div>


        <div className="row g-4">

          {/* Contact Information */}
          <div className="col-12 col-lg-5">

            <div className="bg-primary text-white rounded-4 shadow-lg p-4 p-md-5 h-100">

              <h2 className="fw-bold mb-4">
                Get In Touch
              </h2>

              <p className="mb-4">
                If you have any questions, suggestions or need help,
                feel free to contact our team.
              </p>


              {/* Email */}
              <div className="d-flex align-items-start mb-4">

                <div className="fs-3 me-3">
                  📧
                </div>

                <div>
                  <h6 className="fw-bold mb-1">
                    Email
                  </h6>

                  <p className="mb-0">
                    support@hrmanagement.com
                  </p>
                </div>

              </div>


              {/* Phone */}
              <div className="d-flex align-items-start mb-4">

                <div className="fs-3 me-3">
                  📱
                </div>

                <div>
                  <h6 className="fw-bold mb-1">
                    Phone
                  </h6>

                  <p className="mb-0">
                    +91 98765 43210
                  </p>
                </div>

              </div>


              {/* Address */}
              <div className="d-flex align-items-start">

                <div className="fs-3 me-3">
                  📍
                </div>

                <div>
                  <h6 className="fw-bold mb-1">
                    Address
                  </h6>

                  <p className="mb-0">
                    Hyderabad, Telangana, India
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* Contact Form */}
          <div className="col-12 col-lg-7">

            <div className="card border-0 shadow-lg rounded-4 h-100">

              <div className="card-body p-4 p-md-5">

                <h2 className="fw-bold mb-4">
                  Send Us a Message
                </h2>

                <form>

                  {/* Name */}
                  <div className="mb-3">

                    <label className="form-label fw-semibold">
                      Full Name
                    </label>

                    <input
                      type="text"
                      className="form-control form-control-lg rounded-3"
                      placeholder="Enter your name"
                    />

                  </div>


                  {/* Email */}
                  <div className="mb-3">

                    <label className="form-label fw-semibold">
                      Email Address
                    </label>

                    <input
                      type="email"
                      className="form-control form-control-lg rounded-3"
                      placeholder="Enter your email"
                    />

                  </div>


                  {/* Subject */}
                  <div className="mb-3">

                    <label className="form-label fw-semibold">
                      Subject
                    </label>

                    <input
                      type="text"
                      className="form-control form-control-lg rounded-3"
                      placeholder="Enter subject"
                    />

                  </div>


                  {/* Message */}
                  <div className="mb-4">

                    <label className="form-label fw-semibold">
                      Message
                    </label>

                    <textarea
                      className="form-control rounded-3"
                      rows="5"
                      placeholder="Write your message here..."
                    ></textarea>

                  </div>


                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg rounded-pill px-5"
                  >
                    Send Message ✈️
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>


        {/* Bottom Section */}
        <div className="text-center mt-5">

          <h4 className="fw-bold">
            We're Here to Help 🤝
          </h4>

          <p className="text-secondary mb-0">
            Our team will get back to you as soon as possible.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Contact;
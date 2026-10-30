import { useState } from "react";

function Register() {

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [role, setRole] = useState("");
  let [message, setMessage] = useState("");

  let handleRegister = async (event) => {

    event.preventDefault();

    setMessage("Registering...");

    try {

      let res = await fetch(
        "http://localhost:3000/api/emp/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            name: name,
            emailid: email,
            password: password,
            role: role
          })
        }
      );

      let data = await res.json();

      if (res.ok) {

        console.log("Data inserted successfully");
        console.log(data);

        setMessage(
          data.message || "Registration successful!"
        );

        setName("");
        setEmail("");
        setPassword("");
        setRole("");

      } else {

        setMessage(
          data.message || "Registration failed!"
        );

        console.log(data);
      }

    } catch (error) {

      console.log("Error:", error);

      setMessage(
        "Cannot connect to server. Check your backend."
      );
    }
  };


  return (

    <div className="container-fluid min-vh-100 bg-light d-flex align-items-center justify-content-center py-5">

      <div className="row w-100 justify-content-center">

        <div className="col-12 col-sm-10 col-md-7 col-lg-5 col-xl-4">

          <div className="card border-0 shadow-lg rounded-4 overflow-hidden">

            {/* Header */}
            <div className="bg-primary text-white text-center p-4">

              <div
                className="bg-white text-primary rounded-circle
                d-inline-flex align-items-center justify-content-center
                shadow mb-3"
                style={{
                  width: "75px",
                  height: "75px",
                  fontSize: "32px"
                }}
              >
                👤
              </div>

              <h2 className="fw-bold mb-1">
                Create Account
              </h2>

              <p className="mb-0">
                Register for the HR Management System
              </p>

            </div>


            {/* Form */}
            <div className="card-body p-4 p-md-5">

              <form onSubmit={handleRegister}>

                {/* Name */}
                <div className="mb-3">

                  <label className="form-label fw-semibold">
                    Full Name
                  </label>

                  <input
                    type="text"
                    className="form-control form-control-lg rounded-3"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(event) =>
                      setName(event.target.value)
                    }
                    required
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
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    required
                  />

                </div>


                {/* Password */}
                <div className="mb-3">

                  <label className="form-label fw-semibold">
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control form-control-lg rounded-3"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    required
                  />

                </div>


                {/* Role */}
                <div className="mb-4">

                  <label className="form-label fw-semibold">
                    Select Role
                  </label>

                  <select
                    className="form-select form-select-lg rounded-3"
                    value={role}
                    onChange={(event) =>
                      setRole(event.target.value)
                    }
                    required
                  >

                    <option value="" disabled>
                      Choose your role
                    </option>

                    <option value="HR">
                      HR
                    </option>

                    <option value="EMPLOYEE">
                      Employee
                    </option>

                  </select>

                </div>


                {/* Register Button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100 rounded-pill fw-semibold"
                >
                  Create Account 🚀
                </button>

              </form>


              {/* Message */}
              {message && (

                <div
                  className={`alert ${
                    message.toLowerCase().includes("success")
                      ? "alert-success"
                      : message === "Registering..."
                      ? "alert-info"
                      : "alert-danger"
                  } mt-4 text-center rounded-3`}
                >
                  {message}
                </div>

              )}

            </div>


            {/* Footer */}
            <div className="text-center bg-light p-3">

              <small className="text-secondary">
                HR Management System
              </small>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;
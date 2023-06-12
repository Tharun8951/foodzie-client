import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
  let navigate = useNavigate()
  const [Credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    Geolocation: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('https://foodzie-server.vercel.app/api/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: Credentials.name,
        email: Credentials.email,
        password: Credentials.password,
        location: Credentials.Geolocation,
      }),
    })
    const json = await response.json()
    console.log(json)
    if(!json.success){
      alert('Enter proper credentials')
    } else {
      navigate('/')
    }
  }

  const onchangeHandler = (e) => {
    setCredentials({ ...Credentials, [e.target.name]: e.target.value })
  }

  return (
    <>
      <section className="vh-130" style={{ 'background-color': '#198754' }}>
        <div className="container h-100 text-white">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div
                className="card text-black"
                style={{ 'border-radius': '25px' }}
              >
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center text-white h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form className="mx-1 mx-md-4 text-white">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              text-white
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              name="name"
                              value={Credentials.name}
                              onChange={onchangeHandler}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Your Name
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              name="email"
                              value={Credentials.email}
                              onChange={onchangeHandler}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              name="password"
                              value={Credentials.password}
                              onChange={onchangeHandler}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="location"
                              id="form3Example5c"
                              className="form-control"
                              name="Geolocation"
                              value={Credentials.Geolocation}
                              onChange={onchangeHandler}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Location
                            </label>
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            I agree all statements in{' '}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            onClick={handleSubmit}
                            className="m-2 btn btn-primary btn-success"
                          >
                            Submit
                          </button>
                          <Link
                            to="/login"
                            className="m-2 btn btn-primary btn-danger"
                          >
                            Already a user
                          </Link>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

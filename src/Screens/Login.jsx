import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  let navigate = useNavigate()
  const [Credentials, setCredentials] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('https://foodzie-server.vercel.app/api/loginuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: Credentials.email,
        password: Credentials.password
      }),
    })
    const json = await response.json()
    if(!json.success){
      alert('Enter proper credentials')
    } else {
      localStorage.setItem('authToken',json.authToken)
      navigate('/')
    }
  }

  const onchangeHandler = (e) => {
    setCredentials({ ...Credentials, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <section
        className="vh-150 gradient-custom "
        style={{ backgroundColor: '#198754' }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ 'border-radius': '1rem' }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your email and password!
                    </p>

                    <div className="form-outline form-white mb-4">
                      <input
                        name="email"
                        value={Credentials.email}
                        onChange={onchangeHandler}
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="typeEmailX">
                        Email
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        name="password"
                        value={Credentials.password}
                        onChange={onchangeHandler}
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="typePasswordX">
                        Password
                      </label>
                    </div>

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Login
                    </button>

                    <div className="d-flex justify-content-center text-center mt-1 pt-1">
                      <a href="#!" className="text-white">
                        <i className="fab fa-facebook-f fa-lg"></i>
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-google fa-lg"></i>
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="mb-0">
                      Don't have an account?
                      <Link to="/createuser">
                        <a href="#!" className="text-white-50 fw-bold">
                          Sign Up
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

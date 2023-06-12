import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import badge from 'react-bootstrap/Badge'
import Badge from 'react-bootstrap/Badge'

const Navbar = () => {
  let navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem('authToken')
    navigate('/login')

  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-2 fst-italic" to="/">
            Foodzie
          </Link>
          <div className="d-flex justify-content-between">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <div className="nav-item d-flex">
                  {localStorage.getItem('authToken') ? (
                    <Link className="nav-link active mb-2 me-3" to="/">
                      My Orders
                    </Link>
                  ) : null}
                </div>

                <div className="d-flex">
                  {!localStorage.getItem('authToken') ? (
                    <>
                      <Link
                        className="btn bg-white text-success me-3 mb-2"
                        to="/login"
                      >
                        Login
                      </Link>
                      <Link
                        className="btn bg-white text-success mb-2"
                        to="/createuser"
                      >
                        Signup
                      </Link>
                    </>
                  ) : (
                    <div>
                      <div className="btn bg-white text-success mb-2 me-2" >
                        My Cart  <Badge pill bg='danger' > 2 </Badge>
                      </div>
                      <div className="btn text-white mb-2 bg-danger" onClick={handleLogout}>
                        Logout
                      </div>
                    </div>
                  )}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

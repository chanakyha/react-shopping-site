import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div classNameNameName="navbar">
      <nav className="navbar navbar-dark bg-dark text-light navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            FireMart
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end bg-dark"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
                <img
                  src="https://www.w3schools.com/w3images/avatar5.png"
                  className="rounded-circle avatar-header"
                />
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="offcanvasNavbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <img
                    src="https://www.w3schools.com/w3images/avatar5.png"
                    className="rounded-circle avatar"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="jumbotron bg-secondary">
        <div className="container">
          <h1 className="display-4">Welcome to FireMart</h1>
          <p className="lead">
            The Place where you get your stuffs much more quicker than others
          </p>
          <hr className="my-4" />
          <p className="lead">
            <div className="search-input">
              <i className="bi bi-search"></i>
              <input type="text" />
              <div className="btn btn-success">Search</div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

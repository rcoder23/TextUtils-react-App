import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(pros){
    return (
        <div>
              <nav className={`navbar navbar-expand-lg navbar-${pros.mode} bg-${pros.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{pros.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{pros.aboutText}</Link>
        </li>
       
       
      </ul>
        <div className="form-check form-switch">
        <input className="form-check-input" onClick={pros.toggleMode} type="checkbox"  id="flexSwitchCheckDefault"/>{pros.mode}
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Set To dark Mode </label>
      </div>
    </div>
  </div>
</nav>
        </div>
    )
}

import react,{useState} from 'react'
import PropTypes from 'prop-types'
import "./Navbar.css";
import "./About.js";




export default function Navbar(props) {

    
  return (
    <nav className= "navbar border-bottom border-body" style={props.mode}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/" style={props.mode}>{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
    aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/" style={props.mode}>Home</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit" style={props.mode}>Search</button>
      </form>
      <div className="dropdown">
  <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Colored Background
  </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" onClick={props.changegreen} href="#">Green</a></li>
                    <li><a className="dropdown-item" onClick={props.changered} href="#">Red</a></li>
                    <li><a className="dropdown-item" onClick={props.changeyellow} href="#">Yellow</a></li>
                </ul>
                </div>

                <div className="form-check form-switch" style={props.mode}>
                    <input className="form-check-input " onClick={props.toggleStyle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label " htmlFor="flexSwitchCheckDefault">{props.buttonText}</label>
            </div>
    </div>
  </div>
</nav>
  )
}


Navbar.propTypes = {
                    title: PropTypes.string.isRequired
}
                    
Navbar.defaultProps = {
                    title: 'Set your title here'
};

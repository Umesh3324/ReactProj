import React, { Component } from 'react'
import { Link ,Switch, Route ,BrowserRouter as Router} from 'react-router-dom'
import MarksheetList from './MarksheetList'

export default class ResponsiveAppBar extends Component {


  
  render() {
    return (
      <div>
      <Router>
      <nav className="navbar navbar-expand-lg bgaqua">
    <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li> <Link to="/marksheetlist" className="dropdown-item"> Marksheet List </Link></li>
            
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>

<Switch>

<Route path="/marksheetlist" component={MarksheetList} />
</Switch>


      
      

      </Router>
      </div>
    )
  }
}

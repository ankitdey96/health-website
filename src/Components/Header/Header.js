import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" >E Health</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Doctors</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" href="#">LogIn</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;
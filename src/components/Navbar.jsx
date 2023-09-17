import React from 'react';
import "./Navbar.css";
import logo from "./images/logo.jpg";


const Navbar = () => {
  return (
    <div>
      <nav >
        <div>
          <img class="logo" src={logo} alt="logo" />
        </div>
        <div class="social-icon">
            <a class="linkedin" href="https://www.linkedin.com/company/gdsc-dmce/"><i class="fa-brands fa-linkedin " id="linkedin"></i></a>
            <a class="linkedin"href="https://github.com/Google-Developer-Students-Club-DMCE"><i class="fa-brands fa-github " id="linkedin1"></i></a>
            <a class="linkedin"href="https://www.instagram.com/gdsc.dmce"><i class="fa-brands fa-instagram " id="linkedin2"></i></a>
            <a class="linkedin"href="https://www.youtube.com/@gdsc_dmce"><i class="fa-brands fa-youtube"></i></a>
        </div>
      </nav>
      
    </div>
  );
}

export default Navbar;

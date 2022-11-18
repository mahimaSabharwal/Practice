import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link href="/about" class="nav-link active">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/courses" class="nav-link active">
                Courses
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/facilities" class="nav-link active">
                Facilities
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/contact" class="nav-link active">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

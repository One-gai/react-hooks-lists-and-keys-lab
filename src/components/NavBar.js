import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
  <nav>
    <a id={links[1]} href="#home">home</a>
    <a id={links[2]} href="#about">about</a>
    <a id={links[3]} href="#projects">projects</a>
  </nav>
)}

export default NavBar;

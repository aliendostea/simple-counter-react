import React from "react";

// stateles functional component sfc
const NavBar = ({ totalCounters }) => {
  console.log("Navbar - rendered - se llama de 2 despues del render padre");
  return (
    <nav>
      <div className="heading--big margin-bottom-1rem">
        Count <span className="heading heading--medium">{totalCounters}</span>
      </div>
    </nav>
  );
};

export default NavBar;

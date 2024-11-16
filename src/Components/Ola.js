import React from "react";
import { Link, Outlet } from "react-router-dom";

function Ola() {
  return (
    <div>
      <h1 style={{ backgroundColor: "yellowgreen" }}>MY FAMILY</h1>
      <ul>
        <li>
          <Link to="mona">Monica</Link>
        </li>
        <li>
          <Link to="lolo">ola</Link>
        </li>
        <li>
          <Link to="ali">lisa</Link>
        </li>
        <li>
          <Link to="/">logout</Link>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Ola;

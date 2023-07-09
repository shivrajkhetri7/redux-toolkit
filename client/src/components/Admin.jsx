import React from "react";
import Header from "./Header";
import UserDetails from "./UserDetails";
import ClearAll from "./ClearAll";

function Admin() {
  return (
    <div className="container">
      <div className="inner-container">
        <Header></Header>
        <UserDetails />
        <hr />
        <ClearAll />
      </div>
    </div>
  );
}

export default Admin;

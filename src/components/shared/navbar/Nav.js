import React, { useState } from "react";

//Redux Setup
import { connect } from "react-redux";

//Vendor
import {
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Icon,
} from "@blueprintjs/core";

//Custom CSS
import "./styles_nav.css";

function Nav({}) {
  return (
    <div className="navContainer">
      <div>LOGO</div>
      <div>
      <Icon icon="notifications" size={20} color={"grey"} />
      <Icon icon="user" size={20} color={"grey"} />
      </div>
    </div>
  );
}
function mapStateToProps(state, parentProps) {
  return {};
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

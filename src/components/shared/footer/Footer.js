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
import "./styles_footer.css";

function Nav({}) {
  return (
    <div className="footerContainer">
      <div>CleverlyDone. All rights reserved.</div>
    </div>
  );
}
function mapStateToProps(state, parentProps) {
  return {};
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

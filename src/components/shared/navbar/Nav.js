import React, { useEffect, useState } from "react";

//Redux Setup
import { connect } from "react-redux";

//Custom CSS
import "./styles_nav.css";

function Nav() {
  const [subject, setSubject] = useState("Home");
  const subjects = ["Home", "Productivity", "Interview Prep", "Coding"];

  useEffect(() => {
    var p2 = window.location.pathname.charAt(1).toUpperCase();
    subjects.map((a) => {
      if (a.indexOf(p2) > -1) {
        setSubject(a);
      }
    });
  }, [window.location.pathname]);

  const selectSubject = () => {
    console.log("Create logic for going to a differet page")
  }

  return (
    <div className="navContainer">
      <div className="navLogo">cleverlydone</div>
      <div className="navLocation" onClick={()=> selectSubject()}>{subject}</div>
      <div className="iconContainer">Placeholder</div>
    </div>
  );
}
function mapStateToProps(state, parentProps) {
  return {};
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

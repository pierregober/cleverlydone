import React, { useState } from "react";

//Auth
import { useAuth0 } from "@auth0/auth0-react";

//Custom CSS
import "./styles_landing.css";

function Landing() {
  const [disappear, setDisappear] = useState(false);
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  function showLoginIn() {
    setDisappear(true);
    // var a = document.getElementById("test");
    // a.remove();
    //move in the signIn button
  }

  function signIn() {
    console.log("hey replace this with fetch to auth0 endpoint");
    loginWithRedirect();
  }

  return (
    <>
      <div className="landingBase">
        <h2 className="introHeading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </h2>
        <p className="introSubHeading">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
        </p>
        <div
          className={disappear ? "introButton introButtonAnim" : "introButton"}
          id="test"
          onClick={() => showLoginIn()}
        >
          <span>Let's get started</span>
        </div>
        {disappear && (
          <div className="loginButton" onClick={() => signIn()}>
            <span>Login</span>
          </div>
        )}
      </div>
    </>
  );
}
export default Landing;

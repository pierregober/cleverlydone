import React, { Suspense, lazy } from "react";

//Vendor
import { Helmet } from "react-helmet";

//Custom CSS

//Custom Components
//---add a loading screen

function Home() {
  return (
    <div className="home">
      <Helmet>
        <title>Home</title>
        {/* <link rel="canonical" href={`${process.env.REACT_APP_URL}/`} /> */}
      </Helmet>
    </div>
  );
}

export default Home;

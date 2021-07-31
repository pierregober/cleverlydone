import React, { Suspense, lazy, useEffect } from "react";

//Custom Components
import InterviewCard from "../cards/InterviewCard";
import InvestingCard from "../cards/InvestingCard";
import ProductivityCard from "../cards/ProductivityCard";
import CodingCard from "../cards/CodingCard";

//Custom CSS
import "../cards/styles_cards.css";

//Custom Components
//---add a loading screen

function Home() {
  return (
    <div className="flex flex-row flex-wrap h-100">
      <InterviewCard />
      <InvestingCard />
      <CodingCard />
      <ProductivityCard />
    </div>
  );
}

export default Home;

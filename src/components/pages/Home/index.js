import React from "react";
import { Link } from "react-router-dom";

import FeaturedBusiness from "./components/FeaturedBusiness";
import BusinessCategories from "./components/BusinessCategories";
import BusinessMarket from "./components/BusinessMarket";
import BusinessLocations from "./components/BusinessLocations";
import FeaturedFranchies from "./components/FeaturedFranchies";
import BusinessSell from "./components/BusinessSell";
import BusinessAdvice from "./components/BusinessAdvice";
import { Block1, Block2 } from "./components/DummyBlocks";

class Home extends React.Component {
  state = {
    countries: [
      {
        name: "India",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        name: "America",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        name: "Rusiia",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
    ],
    states: [
      {
        name: "Uthrakhand",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        name: "Chandigarh",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        name: "Mumbai",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
    ],
    stateNames: [
      {
        name: "bangalore",
        imgName: "Bangalore",
      },
      {
        name: "mumbai",
        imgName: "mumbai",
      },
      {
        name: "tamil nadu",
        imgName: "tamil-nadu",
      },
      {
        name: "chennai",
        imgName: "chennai",
      },
    ],
    brokerNames: [
      {
        name: "Timing the Sale",
        imgName: "time-the-Sales",
      },
      {
        name: "Using a broker",
        imgName: "using-a-broker",
      },
      {
        name: "Using a broker",
        imgName: "using-a-broker1",
      },
    ],
    businessImagesName: ["hotel", "manufacturing", "restaurants", "website"],
    franchiesImages: ["logo", "logo2"],
  };

  render() {
    return (
      <div className='home-block'>
        <FeaturedBusiness countries={this.state.countries} />
        <BusinessCategories
          businessImagesName={this.state.businessImagesName}
        />
        <BusinessMarket states={this.state.states} />
        <BusinessLocations stateNames={this.state.stateNames} />
        <Block1 />
        <FeaturedFranchies franchiesImages={this.state.franchiesImages} />
        <BusinessSell brokerNames={this.state.brokerNames} />
        <BusinessAdvice />
        <Block2 />
      </div>
    );
  }
}

export default Home;

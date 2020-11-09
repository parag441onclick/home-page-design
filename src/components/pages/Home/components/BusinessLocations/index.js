import React from "react";

const BusinessLocations = ({ stateNames }) => {
  const renderStateCards = (stateNames) => {
    return stateNames.map((card) => {
      return (
        <div
          className='location-image'
          style={{
            background: `url('assets/${card.imgName}.png')`,
            textAlign: "center",
            height: "25vh",
            marginLeft: "2px",
            borderRadius: "25px",
          }}>
          <div className='state-heading'>
            <h4>{card.name.toUpperCase()}</h4>
          </div>
        </div>
      );
    });
  };

  return (
    <div className='market-categories'>
      <h2 className='business-locations-heading'>Popular Business Locations</h2>
      <div className='d-flex flex-wrap justify-content-around city-cards'>
        {renderStateCards(stateNames)}
      </div>
      <div className='d-flex flex-wrap justify-content-around city-cards'>
        {renderStateCards(stateNames)}
      </div>
    </div>
  );
};

export default BusinessLocations;

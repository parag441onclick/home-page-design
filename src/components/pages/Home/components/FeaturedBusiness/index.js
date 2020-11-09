import React from "react";
import { Link } from "react-router-dom";

const FeaturedBusiness = ({ countries }) => {
  const renderCards = (states, type) => {
    return states.map((state) => {
      return (
        <div class='card border featured-business-card'>
          <div class='card-body'>
            <p class='card-text'>
              <div className='featured-business-body'>{state.description}</div>
            </p>
          </div>
          {type === "mid-market" ? (
            <div class='card-body'>
              <Link to='/' class='card-link'>
                <img className='map-maker' src='/assets/map-maker.png' />
                {state.name}
              </Link>
              <Link to='/' class='card-link'>
                View All
              </Link>
            </div>
          ) : (
            <div class='featured-card-body text-center'>
              <div>
                <Link to='/' class='card-link'>
                  {state.name}
                </Link>
              </div>
              <div>
                <div style={{ color: "grey" }}>On Request</div>
              </div>
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className='market-categories'>
      <h2 className='featured-business-heading'>FEATURED BUSINESS</h2>
      <div className='d-flex justify-content-around featured-city-cards'>
        {renderCards(countries)}
      </div>
    </div>
  );
};

export default FeaturedBusiness;

import React from "react";
import { Link } from "react-router-dom";

const BusinessMarket = ({ states }) => {
  const renderCards = (states, type) => {
    return states.map((state) => {
      return (
        <div class='card border border-primary mid-market-card'>
          <div class='card-body'>
            <p class='card-text'>
              <div className='mid-market-header'>{state.description}</div>
            </p>
          </div>
          {type === "mid-market" ? (
            <div class='card-body mid-market-body'>
              <Link to='/' class='card-link'>
                <div className='mid-market-footer'>
                  <img className='map-maker' src='/assets/map-maker.png' />
                  <div className='mid-market-name'>{state.name}</div>
                </div>
              </Link>
              <Link to='/' class='card-link view-all'>
                View All
              </Link>
            </div>
          ) : (
            <div class='card-body text-center'>
              <div>
                <Link to='/' class='card-link'>
                  {state.name}
                </Link>
              </div>
              <div>
                <span style={{ color: "grey" }}>On Request</span>
              </div>
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className='market-categories'>
      <h2 className='mid-market-heading'>Mid Market Business</h2>
      <div className='d-flex justify-content-around mid-market-business-cards'>
        {renderCards(states, "mid-market")}
      </div>
    </div>
  );
};

export default BusinessMarket;

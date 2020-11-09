import React from "react";

const BusinessSell = ({ brokerNames }) => {
  const renderBusinessCards = (brokerCards) => {
    return brokerCards.map((card) => {
      return (
        <div
          className='sell-card'
          style={{
            background: `url('assets/${card.imgName}.png')`,
            backgroundSize: "100% 100% !important",
          }}>
          <div className='state-heading'>
            <h4 style={{ fontWeight: "600" }}>{card.name}</h4>
          </div>
        </div>
      );
    });
  };

  return (
    <div className='market-categories'>
      <h2 className='selling-heading'>How do I sell my business?</h2>
      <div className='d-flex flex-wrap justify-content-between business-sell-card city-cards'>
        {renderBusinessCards(brokerNames)}
      </div>
    </div>
  );
};

export default BusinessSell;

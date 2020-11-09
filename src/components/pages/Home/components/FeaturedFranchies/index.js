import React from "react";

const FeaturedFranchies = ({ franchiesImages }) => {
  const renderFranchiesCards = (cards) => {
    return cards.map((cardName) => {
      return (
        <div
          className='franchise-images'
          style={{
            background: `url('assets/${cardName}.png')`,
            backgroundSize: "cover",
            textAlign: "center",
            width: "30%",
            height: "25vh",
            marginLeft: "2px",
          }}></div>
      );
    });
  };

  return (
    <div className='market-categories'>
      <h2 className='franchise-heading'>Featured Franchies</h2>
      <div className='d-flex flex-wrap justify-content-between featured-franchise'>
        <div
          style={{
            background: `url('assets/parag.jpg')`,
            boxShadow: "-5px 8px 6px -6px black",
            backgroundSize: "cover",
            backgroundColor: "#2e7bff",
            alignContent: "center",
            width: "30%",
            height: "25vh",
            marginLeft: "2px",
            display: "flex",
            flexWrap: "wrap",
            fontWeight: "600",
            fontSize: "medium",
            color: "white",
            paddingRight: "1%",
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
        {renderFranchiesCards(franchiesImages)}
      </div>
    </div>
  );
};

export default FeaturedFranchies;

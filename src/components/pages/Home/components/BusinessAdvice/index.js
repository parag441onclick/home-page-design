import React from "react";

const BusinessAdvice = () => {
  const renderBusinessAdviceCards = () => {
    return (
      <div className='advice-cards d-flex'>
        <div className='u-business-advice-card'>
          <div class='card' style={{ paddingBottom: "4%" }}>
            <img
              class='card-img-top'
              src='assets/advice-features1.png'
              alt='Card image cap'
            />
            <div class='card-body'>
              <h5 class='card-title card-para'></h5>
              <p class='card-text main-card-para'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <a className='font-italic' href='#'>
                For Sellers
              </a>
              <p class='card-text lower-card-para'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
        </div>
        <div className='l-business-advice-card'>
          <div class='card' style={{ width: "18rem", marginTop: "4%" }}>
            <img
              class='card-img-top'
              src='assets/advice-features2.jpg'
              alt='Card image cap'
            />
            <div class='card-body'>
              <p class='card-para'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a className='card-footer-heading' href='#'>
                For Sellers
              </a>
            </div>
          </div>
          <div class='card' style={{ width: "18rem", marginTop: "4%" }}>
            <img
              class='card-img-top'
              src='assets/advice-features2.jpg'
              alt='Card image cap'
            />
            <div class='card-body'>
              <p class='card-text card-para'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a className='card-footer-heading' href='#'>
                For Sellers
              </a>
            </div>
          </div>
          <div class='card' style={{ width: "18rem", marginTop: "4%" }}>
            <img
              class='card-img-top'
              src='assets/advice-features3.jpg'
              alt='Card image cap'
            />
            <div class='card-body'>
              <p class='card-text card-para'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a className='card-footer-heading' href='#'>
                For Sellers
              </a>
            </div>
          </div>
          <div class='card' style={{ width: "18rem", marginTop: "4%" }}>
            <img
              class='card-img-top'
              src='assets/advice-features3.jpg'
              alt='Card image cap'
            />
            <div class='card-body'>
              <p class='card-text card-para'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a className='card-footer-heading' href='#'>
                For Sellers
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='market-categories'>
      <h2 className='b-advice-heading'>Business Advice and Features</h2>
      {renderBusinessAdviceCards()}
    </div>
  );
};

export default BusinessAdvice;

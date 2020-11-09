import React from "react";
import { Link } from "react-router-dom";

const BusinessCategories = ({ businessImagesName }) => {
  const renderBusinessImages = (images) => {
    return images.map((imageName) => {
      return (
        <div>
          <img
            className='popular-images'
            src={"/assets/" + `${imageName}.png`}
          />
          <div className='image-categories-heading'>
            {imageName.toUpperCase()}
          </div>
        </div>
      );
    });
  };

  return (
    <div
      style={{
        background: "url('assets/Business-Categories-bg.jpg')",
        backgroundSize: "cover",
        marginLeft: "-10%",
        width: "120%",
      }}>
      <div className='business-categories'>
        <h2 className='featured-business-categories'>
          Popular Business Categories
        </h2>
        <div className='state-images d-flex justify-content-around'>
          {renderBusinessImages(businessImagesName)}
        </div>
        <Link className='btn btn-primary btn-bs-img' to='/'>
          View All
        </Link>
      </div>
    </div>
  );
};

export default BusinessCategories;

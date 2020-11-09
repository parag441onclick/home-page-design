import React from "react";
import { Link } from "react-router-dom";

const Block2 = () => {
  return (
    <div className='description block2-body text-center'>
      <h2 className='block2-heading'>SEARCH FOR PROFESSIONAL ADVISOR</h2>
      <div
        style={{
          marginTop: "2%",
          color: "#3885bf",
          fontWeight: "600",
          fontStyle: "italic",
        }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </div>
      <Link className='btn btn-primary btn-bs-img-blcok2' to='/'>
        Visit the Services Directory
      </Link>
    </div>
  );
};

export default Block2;

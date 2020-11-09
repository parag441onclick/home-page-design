import React from "react";
import { Link } from "react-router-dom";

const Block1 = () => {
  return (
    <div className='description bg-primary text-center'>
      <div style={{ color: "white", fontWeight: "600" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </div>
      <Link className='btn btn-light btn-bs-img2' to='/'>
        Subscribe
      </Link>
    </div>
  );
};

export default Block1;

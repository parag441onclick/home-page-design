import React, { useState } from "react";
import { Link } from "react-router-dom";
import { countries } from "countries-list";
import "../../styles.css";

const Header = () => {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const setFlagImage = (e) => {
    const data = e.target.value.split(",");
    localStorage.setItem("flag-emoji", data[0]);
    localStorage.setItem("country-code", data[1]);
  };

  const showEmoji = () => {
    let emoji = localStorage.getItem("flag-emoji")
      ? localStorage.getItem("flag-emoji")
      : "";
    let countryCode = localStorage.getItem("flag-emoji")
      ? localStorage.getItem("country-code")
      : "";

    return (
      <select onChange={setFlagImage}>
        <option
          value={`${emoji},${countryCode}`}>{`${emoji}  ${countryCode}`}</option>
        {Object.values(countries).map((country) => (
          <option value={`${country.emoji},${country.continent}`}>
            {`${country.emoji}  ${country.continent}`}
          </option>
        ))}
      </select>
    );
  };

  const hanldeQuery = (e) => {
    setQuery(e.target.value);
    setSubmitted(false);
  };

  const handleQueryOnEnterKey = (e) => {
    if (e.key === "Enter") {
      setSubmitted(true);
    }
  };

  return (
    <header
      className='header'
      style={{
        background: "url('assets/slider-img.jpg')",
        backgroundSize: "cover",
        backgroundSize: "100% 70% !important",
        backgroundRepeat: "no-repeat",
      }}>
      <div className='upper-header'>
        <Link to='/'>
          <img src='/assets/logo2.png' alt='site-logo' />
        </Link>
        <div className='upper-header-left'>
          <Link className='sell-button' to='/selling'>
            Sell Your Business
          </Link>
          {showEmoji()}
        </div>
      </div>
      <div className='divider'></div>
      <div className='nav'>
        <div className='nav-left'>
          <Link className='nav-header' to='/'>
            Home
          </Link>
          <Link className='nav-header' to='/business'>
            Business
          </Link>
          <Link className='nav-header' to='/franchies'>
            Franchies
          </Link>
          <Link className='nav-header' to='/selling'>
            Selling
          </Link>
          <Link className='nav-header' to='/brokers'>
            Brokers
          </Link>
          <Link className='nav-header' to='/franchisors'>
            Franchisors
          </Link>
        </div>
        <div className='nav-right'>
          <Link className='nav-header' to='/login'>
            Login
          </Link>
        </div>
      </div>
      <div className='heading'>
        <div className='home-heading'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
        <div class='ui action left icon input query-block mt-5'>
          <input
            className='search-query'
            onKeyPress={handleQueryOnEnterKey}
            onChange={hanldeQuery}
            type='text'
            placeholder='e.g.    Lorem ipsum'
          />
          <i aria-hidden='true' class='search icon'></i>
          <button
            className='query-button'
            onClick={(e) => setSubmitted(true)}
            role='button'>
            Search
          </button>
        </div>
        <div>{submitted ? query : ""}</div>
      </div>
    </header>
  );
};

export default Header;

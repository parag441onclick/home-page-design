import React from "react";
import { Route } from "react-router-dom";

import Home from "../components/pages/Home";
import Business from "../components/pages/Business";
import Franchies from "../components/pages/Franchies";
import Selling from "../components/pages/Selling";
import Brokers from "../components/pages/Brokers";
import Franchisors from "../components/pages/Franchisors";
import Login from "../components/pages/Login";

/**
 * Parent Routes
 */
class Routes extends React.Component {
  render() {
    return (
      <div className='main-page'>
        <Route path='/' exact component={Home} />
        <Route path='/business' exact component={Business} />
        <Route path='/franchies' exact component={Franchies} />
        <Route path='/selling' exact component={Selling} />
        <Route path='/brokers' exact component={Brokers} />
        <Route path='/franchisors' exact component={Franchisors} />
        <Route path='/login' exact component={Login} />
      </div>
    );
  }
}

export default Routes;

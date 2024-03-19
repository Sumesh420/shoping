import React from "react";
import "./Style.css";

const TopHeader = () => {
  return (
    <div>
      <header className="width-100 top-header">
        <div className="container">
          <div className="width-50">
            <p className="head1p1 headquote">
              Dezven: India's Fastest Online Shopping Destination
            </p>
          </div>
          <div className="width-50">
            <ul className="head1ul cashback-sect">
              <li>
                <i className="fa fa-users" aria-hidden="true"></i>
                <a className="head1mr" href="#">
                  Refer Your Friend And Earn Rs. 500 Cashback
                </a>
              </li>
              <li>
                <i className="fa fa-mobile" aria-hidden="true"></i>
                <a href="#">Download App</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default TopHeader;

import React from 'react';
import "./Style.css";
import sumesh from '../../assests/images/Untitled design (23).png';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch,faHeart,faUserCircle,faShoppingCart} from '@fortawesome/free-solid-svg-icons';
const Searchpanel = ({ cartItemCount, isDashboardPage }) => {
  const iconStyle = { color: "white" };
  return (
    <div className="width-100 search-panel">
      <div className="container">
        <div className="width-20">
          <Link to="/">
          <img src={sumesh} className="logo" alt="Logo" />
          </Link>
        </div>
        <div className="width-50">
          <input className="search-textbox" type="text" placeholder="Search for products, brand and more" />
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch}/>
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
        <div className="width-30">
          <ul className="cart-sect">
            <li>
                <FontAwesomeIcon icon={faHeart}/>
              <i className="fa fa-heart-o" aria-hidden="true"></i>
           
              <a className="head1mr" href="/wishlist">Wishlist</a>

            </li>
            {!isDashboardPage && (
              <>
                <li>
                <FontAwesomeIcon icon={faUserCircle} />
                  <Link to="/login">Login</Link>
                </li>
                <li>
                <FontAwesomeIcon icon={faUserCircle} />
                  <Link to="/signup">Signup</Link>
                </li>
              </>
            )}
            <li>
            <FontAwesomeIcon icon={faShoppingCart} />
              <Link to="/cart">Cart ({cartItemCount})</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Searchpanel;
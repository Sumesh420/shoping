// src/components/pages/Wishlist.js
import React from 'react';
import BreadCrumb from './BreadCrumb';
import ProductList from '../product/ProductList';

const Wishlist = () => {
  return (
    <div>
      <BreadCrumb />
      <h1>Wishlist</h1>
      <ProductList />
    </div>
  );
};

export default Wishlist;

import React from 'react'
import "../layout/header/Style.css";
import TopHeader from '../layout/header/TopHeader';
import SearchPanel from '../layout/header/SearchPanel';
import MainMenu from '../layout/header/MainMenu';
import ProductList from '../product/ProductList';
import Footer from '../layout/Footer';
import "../../../src/App.css";
const Home = () => {
  return (
    <div>
      <TopHeader/>
      <SearchPanel/>
      <MainMenu/>
      <ProductList/>
      <Footer/>
    </div>
  )
}

export default Home

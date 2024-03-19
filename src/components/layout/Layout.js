import React from 'react'
import TopHeader from './header/TopHeader'
import Footer from './Footer';
import SearchPanel from './header/SearchPanel';

const layout = ({children}) => {
  return (
    <div>
      <TopHeader/>
      <SearchPanel/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default layout;

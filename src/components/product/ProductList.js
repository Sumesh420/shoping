/*import React from 'react';
import product from '../assests/images/product-1.png';
import "../layout/header/Style.css";
function Product(props) {
  return (
    <div className="product-section">
      <div className="product-border">
        <div className="product-img-center">
          <a href="#">
            <img className="product-img" src={product} alt={props.name} />
          </a>
        </div>
        <div>
          <p className="product-name">
            <a href="#">{props.name}</a>
          </p>
          <p className="product-rating">
            {[...Array(props.rating)].map((_, index) => (
              <i key={index} className="fa fa-star" aria-hidden="true"></i>
            ))}
            <span>({props.rating})</span>
          </p>
          <p className="product-price">
            <span className="product-discounted-price">{props.discountedPrice}</span>
            <span className="product-original-price">{props.originalPrice}</span>
            <span className="product-discount">{props.discount}</span>
          </p>
        </div>
      </div>
    </div>
   
  );
}

function ProductList() {
  const products = [
    {
      id: 1,
      name: 'New iphone 11 Max Pro 64 GB',
      rating: 5,
      discountedPrice: 'Rs.549.00',
      originalPrice: 'Rs.554',
      discount: '90%OFF',
      image: 'images/product-1.png'
    },
    {
        id: 2,
        name: 'Samsung Galaxy S21 Ultra',
        rating: 4,
        discountedPrice: 'Rs.899.00',
        originalPrice: 'Rs.999',
        discount: '10%OFF',
        image: 'images/product-2.png'
      },
      {
        id: 3,
        name: 'Google Pixel 5',
        rating: 4,
        discountedPrice: 'Rs.799.00',
        originalPrice: 'Rs.849',
        discount: '5%OFF',
        image: 'images/product-3.png'
      },
      {
        id: 4,
        name:'Google Pixel 8',
        rating: 5,
        discountedPrice:'Rs.999.00',
        originalPrice:'Rs.949.09',
        discount:'2%OFF',
        image:'imagr/product-4.png'

    
      } ,
      {
        id: 4,
      name:'Google Pixel 8',
      rating: 5,
      discountedPrice:'Rs.999.00',
      originalPrice:'Rs.949.09',
      discount:'2%OFF',
      image:'imagr/product-4.png'

  
    }
    // Add more product objects here
  ];
  const rows = [];
  for (let i = 0; i < products.length; i += 4) {
    rows.push(products.slice(i, i + 4));
  }
  return (
    <div className="width-100 margin-top-50">
      <div className="container">
        {products.map(product => (
          <div key={product.id} className="width-30">
            <Product {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}


export default ProductList;*/
import React from 'react';
import './Product.css';
import product1 from '../assests/images/product-1.png';

const Productlist = () => {
    const handleLoadMore = () => {
        
      };
  return (
    <div className="width-100 margin-top-50">
      <div className="container">
       
        <div className="width-25">
          <div className="product-section">
            <div className="product-border">
              <div className="product-img-center">
                <a href="#">
                  <img className="product-img" src={product1} alt="Product 1" />
                </a>
              </div>
              <div>
                <p className="product-name">
                  <a href="#">New iphone 11 Max Pro 64 GB</a>
                </p>
                <p className="product-rating">
                    {[...Array(5).map((_,index)=>(
                        <i
                        key={index}
                        className='fa fa-star'
                        aria-hidden="true"></i>
                    ))]}
                  <span>(5)</span>
                </p>
                <p className="product-price">
                  <span className="product-discounted-price">Rs.549.00</span>
                  <span className="product-original-price">Rs.554</span>
                  <span className="product-discount">90%OFF</span>
                </p>
              </div>
            </div>
          </div>
        </div>
       
        <div className="width-25">
          <div className="product-section">
            <div className="product-border">
              <div className="product-img-center">
                <a href="#">
                  <img className="product-img" src={product1} alt="Product 1" />
                </a>
              </div>
              <div>
                <p className="product-name">
                  <a href="#">New iphone 11 Max Pro 64 GB</a>
                </p>
                <p className="product-rating">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <span>(5)</span>
                </p>
                <p className="product-price">
                  <span className="product-discounted-price">Rs.549.00</span>
                  <span className="product-original-price">Rs.554</span>
                  <span className="product-discount">90%OFF</span>
                </p>
              </div>
            </div>
          </div>
        </div>  <div className="width-25">
          <div className="product-section">
            <div className="product-border">
              <div className="product-img-center">
                <a href="#">
                  <img className="product-img" src={product1} alt="Product 1" />
                </a>
              </div>
              <div>
                <p className="product-name">
                  <a href="#">New iphone 11 Max Pro 64 GB</a>
                </p>
                <p className="product-rating">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <span>(5)</span>
                </p>
                <p className="product-price">
                  <span className="product-discounted-price">Rs.549.00</span>
                  <span className="product-original-price">Rs.554</span>
                  <span className="product-discount">90%OFF</span>
                </p>
              </div>
            </div>
          </div>
        </div>  <div className="width-25">
          <div className="product-section">
            <div className="product-border">
              <div className="product-img-center">
                <a href="#">
                  <img className="product-img" src={product1} alt="Product 1" />
                </a>
              </div>
              <div>
                <p className="product-name">
                  <a href="#">New iphone 11 Max Pro 64 GB</a>
                </p>
                <p className="product-rating">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <span>(5)</span>
                </p>
                <p className="product-price">
                  <span className="product-discounted-price">Rs.549.00</span>
                  <span className="product-original-price">Rs.554</span>
                  <span className="product-discount">90%OFF</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
       
        <div className="width-25">
          <div className="product-section">
            <div className="product-border">
              <div className="product-img-center">
                <a href="#">
                  <img className="product-img" src={product1} alt="Product 1" />
                </a>
              </div>
              <div>
                <p className="product-name">
                  <a href="#">New iphone 11 Max Pro 64 GB</a>
                </p>
                <p className="product-rating">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <span>(5)</span>
                </p>
                <p className="product-price">
                  <span className="product-discounted-price">Rs.549.00</span>
                  <span className="product-original-price">Rs.554</span>
                  <span className="product-discount">90%OFF</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      
        <div className="width-25">
          <div className="product-section">
            <div className="product-border">
              <div className="product-img-center">
                <a href="#">
                  <img className="product-img" src={product1} alt="Product 1" />
                </a>
              </div>
              <div>
                <p className="product-name">
                  <a href="#">New iphone 11 Max Pro 64 GB</a>
                </p>
                <p className="product-rating">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <span>(5)</span>
                </p>
                <p className="product-price">
                  <span className="product-discounted-price">Rs.549.00</span>
                  <span className="product-original-price">Rs.554</span>
                  <span className="product-discount">90%OFF</span>
                </p>
              </div>
            </div>
          </div>
        </div>  <div className="width-25">
          <div className="product-section">
            <div className="product-border">
              <div className="product-img-center">
                <a href="#">
                  <img className="product-img" src={product1} alt="Product 1" />
                </a>
              </div>
              <div>
                <p className="product-name">
                  <a href="#">New iphone 11 Max Pro 64 GB</a>
                </p>
                <p className="product-rating">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <span>(5)</span>
                </p>
                <p className="product-price">
                  <span className="product-discounted-price">Rs.549.00</span>
                  <span className="product-original-price">Rs.554</span>
                  <span className="product-discount">90%OFF</span>
                </p>
              </div>
            </div>
          </div>
        </div>  <div className="width-25">
          <div className="product-section">
            <div className="product-border">
              <div className="product-img-center">
                <a href="#">
                  <img className="product-img" src={product1} alt="Product 1" />
                </a>
              </div>
              <div>
                <p className="product-name">
                  <a href="#">New iphone 11 Max Pro 64 GB</a>
                </p>
                <p className="product-rating">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <span>(5)</span>
                </p>
                <p className="product-price">
                  <span className="product-discounted-price">Rs.549.00</span>
                  <span className="product-original-price">Rs.554</span>
                  <span className="product-discount">90%OFF</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="load-more-container">
          <button onClick={handleLoadMore} className="load-more-button">
            Load More
          </button>
        </div>
    </div>
    
    
  );
};

export default Productlist;

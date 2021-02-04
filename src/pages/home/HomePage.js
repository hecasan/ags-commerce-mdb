import React from 'react';
import {

  MDBEdgeHeader,
  MDBContainer,
  MDBCol,
  MDBRow

} from 'mdbreact';
import './HomePage.css';
import data from './../../Data';
import Product from './../produtos/Product';

class HomePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
        <MDBEdgeHeader color='indigo darken-3' className='sectionPage' />
        <div className='mt-3 mb-5'>

          <MDBContainer>
            <MDBRow>
              <MDBCol md='12' className='mt-4'>

                <hr className='my-15' />

                <MDBRow id='categories'>
                  {
                    data.products.map(product => (
                      <Product key={product._id} product={product} />
                    ))
                  }

                </MDBRow>

              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </>
    );
  }
}

export default HomePage;

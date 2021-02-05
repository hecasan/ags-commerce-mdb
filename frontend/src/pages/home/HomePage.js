import React, { useState, useEffect } from 'react';
import {

  MDBEdgeHeader,
  MDBContainer,
  MDBCol,
  MDBRow

} from 'mdbreact';
import './HomePage.css';
import axios from 'axios'
import Product from './../produtos/Product';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fecthData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('/api/products');
        setLoading(false);
        setProducts(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fecthData();
  }, []);

  return (
    <>
      <MDBEdgeHeader color='indigo darken-3' className='sectionPage' />
      <div className='mt-3 mb-5'>

        <MDBContainer>
          <MDBRow>
            <MDBCol md='12' className='mt-4'>

              <hr className='my-15' />
              {loading
                ? <LoadingBox></LoadingBox>
                : error
                  ? <MessageBox variant="danger">{error}</MessageBox>
                  : <MDBRow id='categories'>
                    {
                      products.map(product => (
                        <Product key={product._id} product={product} />
                      ))
                    }
                  </MDBRow>
              }

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );

}
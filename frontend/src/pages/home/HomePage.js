import React, { useEffect } from 'react';
import {

  MDBEdgeHeader,
  MDBContainer,
  MDBCol,
  MDBRow

} from 'mdbreact';
import './HomePage.css';
import Product from './../produtos/Product';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';

import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/productActions'

export default function HomePage() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

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
import React, { Fragment, useEffect } from 'react'

import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBCardImage,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBAnimation,
  MDBNavLink,
  MDBBtn,
  MDBIcon
} from "mdbreact";


import Rating from './../../components/Rating';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import LoadingBox from './../../components/LoadingBox';
import MessageBox from './../../components/MessageBox';
import { detailsProduct } from '../../actions/productActions';

export default function ProductDetail(props) {
  const dispatch = useDispatch();

  const productId = props.match.params.id;

  const productDetails = useSelector((state) => state.productDetails);

  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  return (
    <>
      <div className='mt-3 mb-5'>

        <MDBContainer fluid>
          <MDBRow>
            <MDBCol md='12' className='mt-4'>

              <hr className='my-15' />
              {loading
                ? <LoadingBox></LoadingBox>
                : error
                  ? <MessageBox variant="danger">{error}</MessageBox>
                  : <div>
                    <MDBContainer fluid>
                      <MDBRow>
                        <MDBCol md="4">
                          <MDBCardImage
                            cascade
                            className='img-fluid'
                            src={product.image}
                            alt={product.name}
                          />
                        </MDBCol>
                        <MDBCol md="4" className="colunaTextoAlinhamento">
                          <MDBCardTitle>
                            <strong>{product.name}</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            <span><b>Descrição: </b></span>{product.shortDescription}
                          </MDBCardText>
                          <MDBCardTitle>
                            <p><b>Preço: </b><span className="preco">R$ {product.price}</span></p>
                          </MDBCardTitle>

                          <div className="ratingDetailsPage">
                            <Rating rating={product.rating} />
                          Avaliado por {product.numReviews} clientes
                        </div>
                          <hr />

                          <MDBCardTitle>
                            <strong>Detalhes do Produto</strong>
                          </MDBCardTitle>

                          <MDBCardText className="alinhamentoTexto">
                            {product.descriptionFull}
                          </MDBCardText>

                        </MDBCol>

                        <MDBCol md="4">
                          <div className="cart-page-product">


                            <MDBCardTitle>
                              <p><b>Preço: </b><span className="preco">R$ {product.price}</span></p>
                            </MDBCardTitle>


                            <MDBCardText>
                              {product.countInStock > 0 ? (
                                <>
                                  <span className="ComEstoque">Total no estoque: {product.countInStock}</span>
                                  <div>
                                    <MDBBtn color="dark-green" size="lg" className="btnAddToCart">Colocar no Carrinho <MDBIcon icon="cart-plus" /></MDBBtn>
                                  </div>
                                </>
                              ) : (
                                  <span className="SemEstoque">Produto Indisponível</span>
                                )
                              }
                            </MDBCardText>
                          </div>



                        </MDBCol>

                      </MDBRow>
                    </MDBContainer>
                  </div >

              }

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>

  )

}
import React, { Fragment } from 'react'

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

export default function ProductDetail(props) {

  const product = products.find((x) => x._id === props.match.params.id);
  if (!product) {
    return
    <div>
      <h1>Produto Não Encontrado</h1>
    </div>
  }
  return <div>
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol md="4">
          {/* Imagem do produto na página de detalhe */}
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
  </div >;

}
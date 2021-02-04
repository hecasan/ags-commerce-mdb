import React from 'react'
import {
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBCardImage,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBAnimation,
  MDBNavLink
} from 'mdbreact';
import './Product.css'
import Rating from './../../components/Rating';

export default function Product(props) {
  const { product } = props;

  return (
    <MDBCol md='4' key={product._id}>
      <MDBAnimation reveal type='fadeInUp'>
        <MDBCard cascade className='my-3 grey lighten-4'>
          <div>
            <MDBCardImage
              cascade
              className='img-fluid img-produto'
              src={product.image}
              alt={product.name}
            />
            <div class="card-body">
              <MDBCardTitle>
                <strong>{product.name}</strong>
              </MDBCardTitle>
              <MDBCardText>
                {product.shortDescription}
              </MDBCardText>
              <MDBCardTitle className="preco">
                R$ {product.price}
              </MDBCardTitle>

              <div>
                <Rating rating={product.rating} />
                Avaliado por {product.numReviews} clientes
              </div>


              <MDBCardText small className="categoria">
                <p>Categoria: {product.category} <br />Ainda tem <b>{product.countInStock}</b> no estoque</p>
                <a href={`/product/${product._id}`} class="btn btn-danger">Comprar</a>
              </MDBCardText>
            </div>
          </div>

        </MDBCard>
      </MDBAnimation>
    </MDBCol >
  )
}

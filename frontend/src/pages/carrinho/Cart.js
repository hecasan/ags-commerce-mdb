import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from './../../actions/cartActions';

export default function Cart(props) {
  const productId = props.match.params.id;
  const qtde = props.location.search ? Number(props.location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qtde));
    }
  }, [dispatch, productId, qtde]);
  return (
    <div>
      <h1>Carrinho de Compras</h1>
      <p>
        Adicionar ao Carrinho : ProductID : {productId} Qtde : {qtde}
      </p>
    </div>
  )
}

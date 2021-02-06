import React from 'react'

export default function Cart(props) {
  const productId = props.match.params.id;
  const qtde = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
  return (
    <div>
      <h1>Carrinho de Compras</h1>
      <p>
        Adicionar ao Carrinho : ProductID : {productId} Qtde : {qtde}
      </p>
    </div>
  )
}

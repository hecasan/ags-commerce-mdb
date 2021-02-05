import React from 'react'

export default function MessageBox(props) {
  return (
    <div className={`alert alert-${props.variant || 'info'}`}>
      {/* {props.children} */}
      <p>Falha ao carregar produtos do servidor - Erro 500</p>
    </div>
  );
}
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Empresa from './pages/Empresa';
import HomePage from './pages/home/HomePage';
import ProductDetail from './pages/produtos/ProductDetail';


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/empresa' component={Empresa} />
        <Route path='/product/:id' component={ProductDetail} />

        <Route
          render={function () {
            return <h1>Página Não Encontrada</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;

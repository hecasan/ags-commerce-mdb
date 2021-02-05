import React, { Component } from 'react';
import { MDBFooter } from 'mdbreact';

export default class Rodape extends Component {
  render() {
    return (
      <div>
        <MDBFooter color='deep-purple'>
          <p className='footer-copyright mb-0 py-3 text-center'>
            &copy; {new Date().getFullYear()} - Copyright:
              <a href='https://www.aslab.com.br' target='_blank'> AS Lab - Aplicativos e Sites </a>
          </p>
        </MDBFooter>
      </div>
    )
  }
}

import React, { Component } from 'react';

export default class Client extends Component {
  render() {
    return (
      <div className='col-md-3 col-sm-6 my-3'>
        <a href='#!'>
          <img
            className='img-fluid d-block mx-auto'
            src={`assets/img/logos/${this.props.image}`}
            alt={this.props.alt}
          />
        </a>
      </div>
    );
  }
}

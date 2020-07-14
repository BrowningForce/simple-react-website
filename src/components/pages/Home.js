import React, { Component } from 'react';
import Header from '../common/Header';
import image from '../assets/img/header-bg.jpg';
import Client from '../common/Client';

export default class Home extends Component {
  render() {
    const clients = [
      { image: 'envato.jpg', alt: 'Envato' },
      { image: 'designmodo.jpg', alt: 'DesignModo' },
      { image: 'themeforest.jpg', alt: 'Theme Forest' },
      { image: 'creative-market.jpg', alt: 'Creative Market' },
    ];

    return (
      <div>
        <Header
          title='Welcome to our Studio!'
          subtitle={"IT'S NICE TO MEET YOU"}
          buttonText='Tell me more'
          link='/services'
          showButton={true}
          image={image}
        />

        <div className='py-5'>
          <div className='container'>
            <div className='row'>
              {clients.map((client, index) => {
                return <Client key={index} {...client} />;
              })}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

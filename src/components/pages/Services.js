import React, { Component } from 'react';
import Header from '../common/Header';
import SingleService from '../common/SingleService';
import image from '../assets/img/services.jpg';

export default class Services extends Component {
  render() {
    const services = [
      {
        title: 'E-Commerce',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
        icon: 'fa-shopping-cart',
      },
      {
        title: 'Responsive Design',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
        icon: 'fa-laptop',
      },
      {
        title: 'Web Security',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
        icon: 'fa-lock',
      },
    ];
    return (
      <div>
        <Header
          title='What we can offer'
          subtitle='Learn about our fields of expertise'
          buttonText='Learn more about our team'
          link='/team'
          showButton={true}
          image={image}
        />

        <section className='page-section' id='services'>
          <div className='container'>
            <div className='text-center'>
              <h2 className='section-heading text-uppercase'>Services</h2>
              <h3 className='section-subheading text-muted'>
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            <div className='row text-center'>
              {services.map((service, index) => {
                return (
                  <SingleService
                    {...service}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

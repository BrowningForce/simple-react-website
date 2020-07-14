import React, { Component } from 'react';
import image from '../assets/img/portfolio.jpg';
import Header from '../common/Header';
import SingleProject from '../common/SingleProject';

export default class Portfolio extends Component {
  render() {

    const projects = [
        {heading: 'Threads', subheading: 'Illustration', thumbnail: '01-thumbnail.jpg'},
        {heading: 'Explore', subheading: 'Graphics Design', thumbnail: '02-thumbnail.jpg'},
        {heading: 'Finish', subheading: 'Identity', thumbnail: '03-thumbnail.jpg'},
        {heading: 'Lines', subheading: 'Branding', thumbnail: '04-thumbnail.jpg'},
        {heading: 'Southwest', subheading: 'Website Design', thumbnail: '05-thumbnail.jpg'},
        {heading: 'Window', subheading: 'Photography', thumbnail: '06-thumbnail.jpg'},
    ]
    return (
      <div>
        <Header
          title='Browse our projects'
          subtitle='Lorem ipsum dolor sit amet consectetur.'
          showButton={false}
          image={image}
        />
        <section className='page-section bg-light' id='portfolio'>
          <div className='container'>
            <div className='text-center'>
              <h2 className='section-heading text-uppercase'>Portfolio</h2>
              <h3 className='section-subheading text-muted'>
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            <div className='row'>
                {projects.map( (project, index) => {
                    return <SingleProject key={index} {...project} />
                })}
            </div>
                
          </div>
        </section>
      </div>
    );
  }
}

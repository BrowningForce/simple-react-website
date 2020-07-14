import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SingleProject extends Component {
  render() {
    return (
      <div className='col-lg-4 col-sm-6 mb-4'>
        <div className='portfolio-item'>
          <Link
            className='portfolio-link'
            data-toggle='modal'
            to='#portfolioModal1'
          >
            <div className='portfolio-hover'>
              <div className='portfolio-hover-content'>
                <i className='fas fa-plus fa-3x'></i>
              </div>
            </div>
            <img
              className='img-fluid'
              src={`assets/img/portfolio/${this.props.thumbnail}`}
              alt=''
            />
          </Link>
          <div className='portfolio-caption'>
            <div className='portfolio-caption-heading'>{this.props.heading}</div>
            <div className='portfolio-caption-subheading text-muted'>
              {this.props.subheading}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

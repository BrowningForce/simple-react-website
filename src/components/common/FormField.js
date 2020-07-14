import React, { Component } from 'react';

export default class FormField extends Component {
  render() {
    return (
      <div
        className={`form-group ${
          this.props.elementName === 'textarea'
            ? 'form-group-textarea mb-md-0'
            : ''
        }`}
      >
        {this.props.elementName === 'input' ? (
          <input
            className='form-control'
            id='name'
            type='text'
            placeholder={this.props.placeholder}
            required
            name={this.props.name}
            onChange={this.props.onChange}
            onBlur={this.props.onBlur}
          />
        ) : (
          <textarea
            className='form-control'
            id='message'
            placeholder={this.props.placeholder}
            required
            name={this.props.name}
            onChange={this.props.onChange}
            onBlur={this.props.onBlur}
          />
        )}
        <div className='help-block text-danger'>
          {(this.props.touched && this.props.errors) &&
            <span>{this.props.errors}</span>
          }
        </div>
      </div>
    );
  }
}

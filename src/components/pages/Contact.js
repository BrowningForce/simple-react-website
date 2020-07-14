import React, { Component } from 'react';
import FormField from '../common/FormField';
import { withFormik } from 'formik';
import * as Yup from 'yup';

const inputFields = {
  sections: [
    [
      {
        name: 'name',
        type: 'text',
        elementName: 'input',
        placeholder: 'Your Name *',
      },
      {
        name: 'email',
        type: 'email',
        elementName: 'input',
        placeholder: 'Your Email *',
      },
      {
        name: 'phone',
        type: 'text',
        elementName: 'input',
        placeholder: 'Your Phone Number *',
      },
    ],
    [
      {
        name: 'message',
        type: 'text',
        elementName: 'textarea',
        placeholder: 'Enter Your Message *',
      },
    ],
  ],
};

class Contact extends Component {

  submitForm = (e) => {
    e.preventDefault();
    console.log('Thank you! The form has been submitted!');
  }
  render() {
    return (
      <div>
        <section className='page-section' id='contact'>
          <div className='container'>
            <div className='text-center'>
              <h2 className='section-heading text-uppercase'>Contact Us</h2>
              <h3 className='section-subheading text-muted'>
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            <form onSubmit={(e) => this.submitForm(e)} name='sentMessage' noValidate>
              <div className='row align-items-stretch mb-5'>
                {inputFields.sections.map((section, sectionId) => {
                  return (
                    <div className='col-md-6' key={sectionId}>
                      {section.map((field, fieldId) => {
                        return (
                          <FormField
                            key={fieldId}
                            {...field}
                            value={this.props.values[field.name]}
                            onChange={this.props.handleChange}
                            onBlur={this.props.handleBlur}
                            touched={this.props.touched[field.name]}
                            errors={this.props.errors[field.name]}
                          />
                        );
                      })}
                    </div>
                  );
                })}
              </div>
              <div className='text-center'>
                <div id='success'></div>
                <button
                  className='btn btn-primary btn-xl text-uppercase'
                  id='sendMessageButton'
                  type='submit'
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    phone: '',
    message: '',
  }),

  validationSchema: Yup.object().shape({
    name: Yup.string().min(3, 'The name is too short!').required('Please specify your name.'),
    email: Yup.string().email('That is not a valid email!').required('Please specify your email.'),
    phone: Yup.string().min(10, 'Phone number is too short!').max(15, 'Phone number is too long!').required('Please specify your phone number'),
    message: Yup.string().min(250, 'Please provide as much details as possible').required(),
  }),

  handleSubmit: (values, { setSubmitting }) => {
    console.log('Form submitted!');
  },
})(Contact);

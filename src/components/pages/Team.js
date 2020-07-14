import React, { Component } from 'react';
import TeamMember from '../common/TeamMember';
import Header from '../common/Header';
import image from '../assets/img/team.jpg';

export default class Team extends Component {
  render() {
    const teamMembers = [
      { name: 'Kay Garland', jobTitle: 'Lead Designer', photo: '1.jpg' },
      { name: 'Larry Parker', jobTitle: 'Lead Marketer', photo: '2.jpg' },
      { name: 'Diana Petersen', jobTitle: 'Lead Developer', photo: '3.jpg' },
    ];
    return (
      <div>
        <Header image={image} />
        
        <section class='page-section bg-light' id='team'>
          <div class='container'>
            <div class='text-center'>
              <h2 class='section-heading text-uppercase'>Our Amazing Team</h2>
              <h3 class='section-subheading text-muted'>
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            <div class='row'>
              {teamMembers.map((member, index) => {
                return <TeamMember {...member} key={index} />;
              })}
            </div>
            <div class='row'>
              <div class='col-lg-8 mx-auto text-center'>
                <p class='large text-muted'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                  totam corporis ea, alias ut unde.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

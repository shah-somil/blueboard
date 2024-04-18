import React from 'react';
import ServiceBox from './ServicesBox';
import { ReactComponent as CheckIcon } from 'bootstrap-icons/icons/check.svg'; 
import { ReactComponent as Calendar } from 'bootstrap-icons/icons/calendar-event-fill.svg'; 
import { ReactComponent as Person } from 'bootstrap-icons/icons/person-check-fill.svg';
import { ReactComponent as Clip } from 'bootstrap-icons/icons/clipboard2-data-fill.svg';



const Services = () => {
  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
          <p>Check out the great services we offer</p>
        </div>
        <div className="row">
          <ServiceBox
            aosType="zoom-in"
            aosDelay="100"
            icon={<CheckIcon/>}
            title="Scrum Board"
            description="Visualize your workflow with a customizable Scrum board that offers a clear view of all tasks across different stages from backlog to completion, enhancing team agility and task transparency."
          />
          <ServiceBox
            aosType="zoom-in"
            aosDelay="200"
            icon={<Calendar/>}
            title="Integrated Calendar"
            description="Stay on top of your deadlines with an integrated calendar that tracks all task details, milestones, and sprints, ensuring every team member is aligned and informed."
          />
          <ServiceBox
            aosType="zoom-in"
            aosDelay="300"
            icon={<Person/>}
            title="Cross-Departmental Interaction"
            description="Facilitate seamless communication between departments with a dedicated interaction UI, where QA teams, developers, architects, and others can collaborate efficiently on tickets and tasks."
          />
          <ServiceBox
            aosType="zoom-in"
            aosDelay="400"
            icon={<Clip/>}
            title="Automated Reporting"
            description="Generate real-time performance reports and analytics, providing insights into project progress, team productivity, and deadline adherence, enabling data-driven decision-making."
            />
        </div>
      </div>
    </section>
  );
};

export default Services;

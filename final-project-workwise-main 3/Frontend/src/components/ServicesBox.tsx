import React from 'react';
import { ReactComponent as CheckIcon } from 'bootstrap-icons/icons/check.svg'; // Adjust icon name as necessary

interface ServiceBoxProps {
  aosType: string;
  aosDelay: string;
  icon: JSX.Element; 
  title: string;
  description: string;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({ aosType, aosDelay, icon, title, description }) => {
  return (
    <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos={aosType} data-aos-delay={aosDelay}>
      <div className="icon-box">
        <div className="icon">{icon}</div>
        <h4 className="title"><a href="#">{title}</a></h4>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default ServiceBox;

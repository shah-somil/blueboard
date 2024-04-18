import React, { useState } from 'react';
import scrumBoardImage from '../assets/img/solutions/scrum-board.jpeg';
import detailedTaskViewImage from '../assets/img/solutions/detailed-task-view.jpeg';
import myScheduleImage from '../assets/img/solutions/my-schedule.jpeg';
import teamMessagesImage from '../assets/img/solutions/team-messages.jpeg';
import scrumBoardIcon from '../assets/img/solutions/list-check-solid.svg';
import detailedTaskIcon from '../assets/img/solutions/clipboard-solid.svg';
import scheduleIcon from '../assets/img/solutions/calendar-days-solid.svg';
import discussionsIcon from '../assets/img/solutions/comments-solid.svg';

interface CarouselItem {
    src: string;
    icon: string;
    label: string;
    description: string;
  }
  
  const SolutionsCarousel: React.FC = () => {
    const [index, setIndex] = useState<number>(0);
  
    const handleSelect = (selectedIndex: number) => {
      setIndex(selectedIndex);
    };
  
    const carouselItems: CarouselItem[] = [
      {
        src: scrumBoardImage,
        icon: scrumBoardIcon,
        label: "Interactive Scrumboard",
        description: "Scrum board"
      },
      {
        src: detailedTaskViewImage,
        icon: detailedTaskIcon,
        label: "Detailed Task View",
        description: "Task View"
      },
      {
        src: myScheduleImage,
        icon: scheduleIcon,
        label: "Integrated Schedule",
        description: "Schedule"
      },
      {
        src: teamMessagesImage,
        icon: discussionsIcon,
        label: "Team Discussions",
        description: "Discussions"
      }
    ];
  
    return (
      <section id="solutions" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div id="custCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators list-inline">
                  {carouselItems.map((item, idx) => (
                    <li key={idx} className={`list-inline-item ${idx === index ? 'active' : ''}`}>
                      <a onClick={() => handleSelect(idx)} className="selected">
                        <img src={item.icon} className="img-fluid" alt={item.label} />
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ol>
                <div className="carousel-inner">
                  {carouselItems.map((item, idx) => (
                    <div key={idx} className={`carousel-item ${idx === index ? 'active' : ''}`}>
                      <img src={item.src} className="d-block w-100 img-fluid" alt={item.description} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default SolutionsCarousel;
  
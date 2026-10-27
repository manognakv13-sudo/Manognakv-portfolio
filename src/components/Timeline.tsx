import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faBriefcase, faGraduationCap, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience, Education &amp; Achievements</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="February 2026 – August 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Java Full Stack Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Cloud Institution · Bengaluru, Karnataka</h4>
            <p>
              Implemented Java backend features, built React interfaces, designed MySQL tables, and tested APIs. Contributed to a Learning Management System with Student and Admin portals.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="May 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">B.E. in Artificial Intelligence &amp; Machine Learning</h3>
            <h4 className="vertical-timeline-element-subtitle">Government Engineering College, Challakere</h4>
            <p>
              Graduated with a CGPA of 8.4.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="May 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Pre-University Course (PCMB)</h3>
            <h4 className="vertical-timeline-element-subtitle">Shanthi S.S.K PU College, Pavagada</h4>
            <p>Graduated with 62%.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="May 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">SSLC</h3>
            <h4 className="vertical-timeline-element-subtitle">Government Adarsha Vidyalaya, Pavagada</h4>
            <p>Graduated with 86%.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--certificate"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faAward} />}
          >
            <h3 className="vertical-timeline-element-title">Java (Basic) Certificate</h3>
            <h4 className="vertical-timeline-element-subtitle">HackerRank</h4>
            <p>
              <a
                href="https://www.hackerrank.com/certificates/1abf5b08d342"
                target="_blank"
                rel="noreferrer"
                aria-label="Verify Java Basic certificate on HackerRank"
              >
                View certificate
              </a>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--achievement"
            date="College HACKOVATION · HackYugma 2K25"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faTrophy} />}
          >
            <h3 className="vertical-timeline-element-title">Hackathon Finalist &amp; Participant</h3>
            <p>
              Placed among the top three teams from more than 15 participants. Also participated in HackYugma 2K25, organized by the IEEE Computer Society at JNNCE Shivamogga.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
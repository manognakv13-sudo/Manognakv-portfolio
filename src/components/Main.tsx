import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import profilePhoto from '../assets/images/manogna-profile.jpg';
import '../assets/styles/Main.scss';

function Main() {
  const socialLinks = (
    <>
      <a href="https://github.com/manognakv13-sudo" target="_blank" rel="noreferrer" aria-label="GitHub">
        <GitHubIcon />
      </a>
      <a href="https://linkedin.com/in/manogna-k-v-769817408" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <LinkedInIcon />
      </a>
      <a href="mailto:manumanogna60@gmail.com" aria-label="Email">
        <EmailIcon />
      </a>
    </>
  );

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilePhoto} alt="Manogna K V" />
        </div>
        <div className="content">
          <div className="social_icons">{socialLinks}</div>
          <h1>Manogna K V</h1>
          <p className="role">Java Full Stack Developer</p>
          <p className="intro">
            Software engineer with a B.E. in Artificial Intelligence and Machine Learning,
            hands-on Java experience, and a focus on building reliable backend and full-stack applications.
          </p>
          <div className="mobile_social_icons">{socialLinks}</div>
        </div>
      </div>
    </div>
  );
}

export default Main;
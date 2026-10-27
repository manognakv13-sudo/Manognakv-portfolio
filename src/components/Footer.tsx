import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/manognakv13-sudo" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
        <a href="https://linkedin.com/in/manogna-k-v-769817408" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
      </div>
      <p>Portfolio of Manogna K V</p>
    </footer>
  );
}

export default Footer;
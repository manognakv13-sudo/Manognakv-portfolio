import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
// import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setNameError(name.trim() === '');
    const invalidEmail = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setEmailError(invalidEmail);
    setMessageError(message.trim() === '');

    if (name.trim() && !invalidEmail && message.trim()) {
      const subject = encodeURIComponent(`Portfolio inquiry from ${name.trim()}`);
      const body = encodeURIComponent(`From: ${name.trim()} (${email.trim()})\n\n${message.trim()}`);
      window.location.href = `mailto:manumanogna60@gmail.com?subject=${subject}&body=${body}`;
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Get in Touch</h1>
          <p>
            I’m open to opportunities and collaborations. Email me at{" "}
            <a href="mailto:manumanogna60@gmail.com">manumanogna60@gmail.com</a>.
          </p>
          <Box
            component="form"
            onSubmit={sendEmail}
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="contact-name"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="contact-email"
                label="Your Email"
                placeholder="you@example.com"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter a valid email address" : ""}
              />
            </div>
            <TextField
              required
              id="contact-message"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Email Me
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
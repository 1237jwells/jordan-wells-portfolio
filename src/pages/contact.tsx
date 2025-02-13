import React, { useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import axios from 'axios';
import { Snackbar, Alert } from '@mui/material';
import { motion } from 'framer-motion';

const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isVerified, setIsVerified] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleVerify = () => {
    setIsVerified(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isVerified) {
      setSnackbarMessage('Please complete the captcha verification');
      setSnackbarOpen(true);
      return;
    }

    try {
      const response = await axios.post('/api/send-email', {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      console.log('Email sent successfully:', response.data);
      setFormData({ name: '', email: '', message: '' });
      setIsVerified(false);
      setSnackbarMessage('Email sent successfully!');
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error sending email:', error);
      setSnackbarMessage('There was an error sending your message. Please try again later.');
      setSnackbarOpen(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  // Check if all fields are filled and HCaptcha is verified
  const isFormValid = isVerified && formData.name && formData.email && formData.message;

  return (
    <motion.div 
      className="contact-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Get in Touch</h1>
      <p className="contact-intro">
        Have a question or want to work together? Feel free to reach out!
      </p>

      <div className="contact-content">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
            />
          </div>

          <div className="captcha-container">
          <HCaptcha
            sitekey={import.meta.env.VITE_HCAPTCHA_SITE_KEY} // Ensure this is correct
            onVerify={handleVerify}
          />
          </div>

          <button type="submit" className="submit-button" disabled={!isFormValid}>
            Send Message
          </button>
        </form>
      </div>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="info" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </motion.div>
  );
};

export default Contact;
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;
    
    // Debug log
    console.log('Received request:', { name, email, message });

    // Validate inputs
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.VITE_GMAIL_USER,
        pass: process.env.VITE_GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.VITE_GMAIL_USER,
      to: process.env.VITE_GMAIL_USER,
      subject: `Portfolio Contact: Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message:
        ${message}
        `,
        replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ 
      message: 'Error sending email', 
      error: error.message 
    });
  }
} 
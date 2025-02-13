import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { name, email, message } = req.body;
        
        // Debug log
        console.log('Received request:', { name, email, message });
        console.log('Environment variables:', {
            GMAIL_USER: process.env.GMAIL_USER ? 'Set' : 'Not set',
            GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD ? 'Set' : 'Not set'
        });

        // Validate inputs
        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Validate environment variables
        if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
            throw new Error('Missing email configuration');
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER, // You'll receive emails at this address
            subject: `Portfolio Contact: Message from ${name}`,
            text: `
            Name: ${name}
            Email: ${email}
            Message:
            ${message}
                `,
            replyTo: email,
        };

        // Debug log
        console.log('Attempting to send email...');

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Detailed error:', {
            message: error.message,
            stack: error.stack,
            code: error.code
        });
        return res.status(500).json({ 
            message: 'Error sending email', 
            error: error.message,
            details: error.code 
        });
    }
} 







// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   try {
//     const { name, email, message } = req.body;
    
//     // Debug log
//     console.log('Received request:', { name, email, message });

//     // Validate inputs
//     if (!name || !email || !message) {
//       return res.status(400).json({ message: 'Missing required fields' });
//     }

//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.VITE_GMAIL_USER,
//         pass: process.env.VITE_GMAIL_APP_PASSWORD,
//       },
//     });

//     const mailOptions = {
//       from: process.env.VITE_GMAIL_USER,
//       to: process.env.VITE_GMAIL_USER,
//       subject: `Portfolio Contact: Message from ${name}`,
//       text: `
//         Name: ${name}
//         Email: ${email}
//         Message:
//         ${message}
//         `,
//         replyTo: email,
//     };

//     await transporter.sendMail(mailOptions);
//     return res.status(200).json({ message: 'Email sent successfully' });
//   } catch (error) {
//     console.error('Email error:', error);
//     return res.status(500).json({ 
//       message: 'Error sending email', 
//       error: error.message 
//     });
//   }
// } 
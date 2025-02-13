# Jordan Wells Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite. This portfolio showcases my professional experience, projects, and provides a way to get in touch.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Theme switching capability for better user experience
- **Project Showcase**: Interactive display of professional projects with detailed information
- **Contact Form**: Integrated contact form with hCaptcha protection
- **Modern Stack**: Built with React 18, TypeScript, and Vite for optimal performance

## 🛠️ Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- Material UI
- React Router DOM
- Framer Motion (for animations)
- Emotion (for styled components)

### Backend
- Node.js
- Express
- Nodemailer (for email functionality)

### Security & Integration
- hCaptcha (form protection)
- CORS
- Environment Variables

## 🏗️ Project Structure

```
jordan-wells-portfolio/
├── src/
│   ├── components/      # Reusable components
│   ├── pages/          # Page components
│   ├── context/        # Context providers
│   ├── assets/         # Static assets
│   ├── api/            # API integration
│   ├── styles/         # Global styles
│   └── types/          # TypeScript type definitions
├── public/             # Public assets
└── dist/              # Production build
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/1237jwells/jordan-wells-portfolio.git
```

2. Navigate to the project directory:
```bash
cd jordan-wells-portfolio
```

3. Install dependencies:
```bash
npm install
```

4. Create a `.env` file in the root directory and add necessary environment variables:
```env
VITE_HCAPTCHA_SITE_KEY=your_hcaptcha_site_key
GMAIL_USER=your_gmail
GMAIL_APP_PASSWORD=your_app_password
```

### Development

Start the development server:
```bash
npm run dev
```

### Building for Production

Build the project:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🚀 Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the master branch. The deployment process includes:

1. Building the project
2. Publishing to the gh-pages branch
3. Serving the site from [jordanwellsportfolio.com](https://jordanwellsportfolio.com)

## 📝 Contact

Feel free to reach out through:
- The contact form on the website
- [LinkedIn](https://www.linkedin.com/in/jordan-wells-software-engineer/)
- [GitHub](https://github.com/1237jwells)

## 🔒 Security

This project implements several security measures:
- hCaptcha for form protection
- CORS policies
- Secure email handling
- Environment variable protection

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React Team for the amazing framework
- Vite Team for the build tool
- Material-UI Team for the component library
- All open-source contributors whose libraries made this project possible

---

Made with ❤️ by Jordan Wells
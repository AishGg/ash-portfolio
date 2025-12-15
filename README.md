# Portfolio Website

A modern, responsive portfolio website built with Next.js 15, React 19, and TypeScript. Features a beautiful UI with dark mode support, animated components, and a contact form.

## 🚀 Features

- **Modern Design**: Clean, responsive UI with dark mode support
- **Animated Components**: Interactive 3D cards and spotlight effects
- **Contact Form**: Integrated contact form with email functionality via Resend
- **Project Showcase**: Display your projects with beautiful cards
- **Fast Performance**: Built with Next.js 15 and optimized for production
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.4
- **UI Library**: React 19.1.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Icons**: Tabler Icons React
- **Animations**: Motion (Framer Motion)
- **Email Service**: Resend
- **Code Quality**: ESLint, Prettier

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 20.x or higher
- **npm** or **yarn** package manager

## 🔧 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=your_email@example.com
```

4. Get your Resend API key:
   - Sign up at [Resend](https://resend.com)
   - Create an API key in your dashboard
   - Add it to your `.env.local` file

## 🏃 Running the Development Server

Start the development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🏗️ Building for Production

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                 # Next.js app router pages
│   │   ├── api/             # API routes
│   │   │   └── contact/     # Contact form API
│   │   ├── contact/         # Contact page
│   │   ├── projects/        # Projects page
│   │   └── page.tsx         # Home page
│   ├── components/          # React components
│   │   ├── ui/              # UI components (3D cards, navbar, etc.)
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   └── Projects.jsx
│   └── lib/                 # Utility functions
│       └── utils.ts
├── public/                   # Static assets
│   └── images/              # Project images
├── tests/                    # Test files
└── package.json
```

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 🎨 Customization

### Update Your Information

1. **Personal Info**: Edit `src/components/Home.jsx` to update your name, bio, and social links
2. **Projects**: Modify `src/components/Projects.jsx` to add/update your projects
3. **Contact Email**: Update `CONTACT_EMAIL` in `.env.local` to receive contact form submissions

### Styling

The project uses Tailwind CSS. Customize colors, fonts, and styles in:
- `src/app/globals.css` - Global styles
- Component files - Component-specific styles

## 📧 Contact Form Setup

The contact form uses Resend for sending emails. To set it up:

1. Sign up for a free account at [Resend](https://resend.com)
2. Create an API key
3. Add it to your `.env.local` file as `RESEND_API_KEY`
4. Update `CONTACT_EMAIL` with the email address where you want to receive messages

## 🔒 Environment Variables

Create a `.env.local` file with the following variables:

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=your_email@example.com
```

**Note**: Never commit `.env.local` to version control. It's already included in `.gitignore`.

## 📄 License

This project is private and proprietary.

## 👤 Author

**Ashish Garg**

- GitHub: [@AishGg](https://github.com/AishGg)
- LinkedIn: [ash-garg](https://www.linkedin.com/in/ash-garg/)

---

Built with ❤️ using Next.js and React

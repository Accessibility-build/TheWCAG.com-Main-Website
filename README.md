# TheWCAG.com - Complete WCAG 2.2 Accessibility Guidelines

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![WCAG 2.2](https://img.shields.io/badge/WCAG-2.2-green?style=for-the-badge)](https://www.w3.org/WAI/WCAG22/quickref/)

> **TheWCAG.com** is a comprehensive, interactive reference guide for Web Content Accessibility Guidelines (WCAG) 2.2. Built for developers, designers, and content creators who want to make the web accessible to everyone.

## 🌐 Live Site

**https://thewcag.com**

## 📖 Overview

TheWCAG.com provides a complete, user-friendly guide to WCAG 2.2 accessibility standards. The site features:

- **87+ Success Criteria Pages** - Detailed explanations of every WCAG 2.2 success criterion
- **Interactive Examples** - Real-world code examples and implementations
- **Practical Tools** - Accessibility testing tools and checkers
- **Learning Resources** - Guides, checklists, and educational content
- **SEO-Optimized Pages** - FAQ, Glossary, Getting Started, WCAG Comparison, and Myths pages
- **Comprehensive Comparisons** - Tool comparisons, compliance law guides, and WCAG version comparisons
- **Search Functionality** - Quick access to any criterion or topic
- **Fully Accessible** - Built following WCAG guidelines itself
- **Legal Pages** - Privacy Policy, Terms of Service, Accessibility Statement, and Contact page

## ✨ Features

### 📚 Comprehensive Content
- All WCAG 2.2 success criteria (Level A, AA, and AAA)
- Detailed explanations with plain language summaries
- Code examples in HTML, CSS, JavaScript, React, and Vue
- Testing guides (manual and automated)
- Real-world examples and use cases

### 🎨 User Experience
- Clean, modern, and accessible design
- Dark mode support
- Responsive design (mobile, tablet, desktop)
- Fast page loads with optimized performance
- Intuitive navigation and search

### 🔍 SEO Optimized
- Complete metadata for all pages
- Structured data (JSON-LD) for rich snippets (FAQPage, WebSite, Organization, Article)
- Dynamic sitemap generation with all pages
- Open Graph and Twitter Card support
- Canonical URLs throughout
- SEO-focused pages targeting long-tail keywords
- Internal linking structure for better crawlability
- Comprehensive FAQ with structured data
- Glossary page for accessibility terminology
- Comparison pages for tools and WCAG versions

### 🔒 Production Ready
- Security headers (CSP, HSTS, XSS protection)
- Error handling (404, 500 pages)
- Loading states
- Performance optimizations
- TypeScript for type safety
- Production build verified

### ♿ Accessibility First
- WCAG 2.2 AA compliant
- Keyboard navigation
- Screen reader support
- Skip links
- Proper ARIA labels
- Semantic HTML

### 📄 Legal & Compliance
- Privacy Policy page
- Terms of Service page
- Accessibility Statement
- Contact Us page with form

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Accessibility-build/TheWCAG.com-Main-Website.git
cd TheWCAG
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file (optional):
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
TheWCAG/
├── app/                    # Next.js app directory
│   ├── criteria/           # Individual success criterion pages
│   │   └── [id]/          # Dynamic route for criteria
│   ├── principles/         # WCAG principles pages
│   ├── tools/             # Accessibility tools
│   ├── examples/          # Code examples
│   ├── learn/             # Learning resources
│   ├── checklist/          # WCAG checklist
│   ├── overview/           # WCAG overview
│   ├── about/              # About page
│   ├── resources/          # Additional resources
│   ├── privacy/           # Privacy Policy
│   ├── terms/              # Terms of Service
│   ├── accessibility/      # Accessibility Statement
│   ├── contact/            # Contact Us page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots.txt
├── components/             # React components
│   ├── ui/                # UI components (shadcn/ui)
│   ├── header.tsx         # Site header
│   ├── footer.tsx         # Site footer
│   └── ...
├── lib/                    # Utilities and data
│   ├── wcag-data.tsx      # WCAG criteria data
│   └── utils.ts           # Utility functions
├── public/                 # Static assets
├── middleware.ts           # Security headers middleware
└── next.config.mjs         # Next.js configuration
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run build:check` - Build and verify success

## 🏗️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Deployment**: [Vercel](https://vercel.com/)

## 📄 Pages & Routes

### Main Pages
- `/` - Homepage with search and quick access
- `/overview` - WCAG overview and introduction
- `/principles` - The four POUR principles
- `/checklist` - Interactive WCAG compliance checklist
- `/learn` - Learning paths and resources
- `/tools` - Accessibility tools
- `/examples` - Code examples and patterns
- `/resources` - Additional resources and downloads
- `/about` - About TheWCAG.com
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service
- `/accessibility` - Accessibility Statement
- `/contact` - Contact Us page

### SEO & Educational Pages
- `/faq` - Frequently Asked Questions about WCAG and accessibility (15+ questions with structured data)
- `/glossary` - Comprehensive accessibility glossary with 30+ terms and definitions
- `/getting-started` - Step-by-step guide for beginners with 6-step process and quick wins
- `/wcag-2-2-vs-2-1` - Detailed comparison of WCAG 2.2 vs 2.1 with migration guide
- `/myths` - Accessibility myths debunked (12 common misconceptions)
- `/compliance` - Comprehensive guide to accessibility laws (ADA, Section 508, EN 301 549, AODA, EAA, CVAA)
- `/compare` - Detailed comparison of accessibility tools, services, screen readers, and testing solutions

### Dynamic Routes
- `/principles/[principle]` - Individual principle pages (perceivable, operable, understandable, robust)
- `/criteria/[id]` - Individual success criterion pages (e.g., `/criteria/1.1.1`)

### Tools
- `/tools/contrast-checker` - Color contrast checker tool

### Comparison & Compliance
- `/compare` - Accessibility tools and services comparison (AI tools, testing tools, services, screen readers, contrast checkers)
- `/compliance` - Accessibility laws and regulations guide (ADA, Section 508, EN 301 549, AODA, EAA, CVAA)

## 🔐 Security

The site implements comprehensive security headers:

- Content Security Policy (CSP)
- Strict Transport Security (HSTS)
- XSS Protection
- Frame Options
- Content Type Options
- Referrer Policy
- Permissions Policy

See `middleware.ts` for security configuration.

## 📊 SEO Features

- Dynamic metadata for all pages
- Structured data (JSON-LD) for rich snippets
- Automatic sitemap generation
- Robots.txt configuration
- Open Graph and Twitter Card metadata
- Canonical URLs

## ♿ Accessibility

This site is built to be accessible:

- WCAG 2.2 AA compliant
- Keyboard navigation throughout
- Screen reader optimized
- Skip links for main content
- Proper heading hierarchy
- Semantic HTML
- ARIA labels where needed
- Focus management
- Color contrast compliance

## 🚀 Deployment

### Recommended: Vercel
1. Connect your GitHub repository
2. Vercel will auto-detect Next.js
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms:
- Ensure Node.js 18+ support
- Build command: `npm run build`
- Start command: `npm start`
- Set environment variables

## ✅ Build Status

The project builds successfully with:
- ✅ TypeScript compilation
- ✅ Next.js optimization
- ✅ No build errors
- ✅ Production-ready

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [W3C Web Accessibility Initiative](https://www.w3.org/WAI/) for WCAG guidelines
- [Next.js](https://nextjs.org/) for the amazing framework
- [shadcn/ui](https://ui.shadcn.com/) for the UI components
- All contributors and the accessibility community

## 📧 Contact

For questions, suggestions, or feedback, please visit our [Contact page](/contact) or open an issue on GitHub.

## 🔗 Links

- **Live Site**: https://thewcag.com
- **WCAG 2.2 Specification**: https://www.w3.org/WAI/WCAG22/quickref/
- **W3C WAI**: https://www.w3.org/WAI/
- **GitHub Repository**: https://github.com/Accessibility-build/TheWCAG.com-Main-Website

---

**Made with ❤️ for a more accessible web**

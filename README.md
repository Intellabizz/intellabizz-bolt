# Intellabizz - Corporate Website

A modern, vibrant corporate website for Intellabizz Solutions Pvt Ltd, built with Angular 21, Tailwind CSS, and Lucide Icons. The website features a beautiful, light-themed design with teal and cyan accents, targeted at Indian businesses.

## Features

- Modern Angular 21 with standalone components
- Tailwind CSS for responsive, vibrant styling
- Lucide Angular icons
- Interactive modals for detailed content
- Smooth scroll navigation
- Indian context and market focus
- Real industry insights from actual sources

## Tech Stack

- **Frontend**: Angular 21
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide Angular
- **Routing**: Angular Router
- **Animations**: Angular Animations

## Prerequisites

- Node.js 18+ installed
- npm 9+ installed
- Angular CLI 21+ (installed globally or use npx)

## Getting Started

### Installation

1. Clone the repository:
```bash
cd /tmp/cc-agent/68319331/project
```

2. Install dependencies:
```bash
npm install
```

### Development Server

Start the development server:

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you change any source files.

### Build

Build the project for production:

```bash
npm run build
# or
ng build
```

The build artifacts will be stored in the `dist/intellabizz` directory.

### Testing

Run the unit tests:

```bash
npm test
# or
ng test
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── footer/
│   │   ├── modal/
│   │   └── sections/
│   │       ├── hero-section/
│   │       ├── about-section/
│   │       ├── services-section/
│   │       ├── case-studies-section/
│   │       ├── blog-section/
│   │       └── contact-section/
│   ├── data/
│   │   ├── content.data.ts
│   │   ├── case-studies.data.ts
│   │   └── blogs.data.ts
│   ├── models/
│   │   └── content.model.ts
│   ├── pages/
│   │   └── home/
│   ├── app.component.ts
│   └── app.routes.ts
├── assets/
├── index.html
├── main.ts
└── styles.scss
```

## Sections

1. **Hero** - Full-screen landing with statistics and CTAs
2. **About** - Company overview with Indian context
3. **Services** - 6 service offerings with interactive modals
4. **Case Studies** - 3 success stories from Indian enterprises
5. **Blog** - 4 industry insights with real sources
6. **Contact** - Form with Indian contact details

## Services Offered

- Recruitment Consultancy
- SaaS Development
- IT Solutions
- Financial Advisory
- Legal Expertise
- Innovation Lab

## Key Features

### Indian Market Focus
- Contact details featuring Bengaluru, Mumbai, and Delhi NCR offices
- Indian phone format (+91)
- .in domain references
- Case studies from Indian enterprises
- INR currency where applicable

### Vibrant Design
- Light, airy color scheme
- Teal and cyan accent colors
- Gradient backgrounds
- Smooth animations and transitions
- Card hover effects

### Blog Content Sources

Blog articles reference actual industry research:

1. **Quantum Computing** - Springer Nature, India National Quantum Mission, McKinsey
2. **Talent Economics** - U.S. Department of Labor, CareerBuilder, SHRM India
3. **Zero Trust Architecture** - NIST SP 800-207, PMC studies, CERT-IN
4. **SaaS Metrics** - SHRM 2025, Uppsala University Study, SaaSCan

## Customization

### Colors
Modify `tailwind.config.js` to adjust the color palette:

```javascript
teal: {
  500: '#14b8a6',
  // ...
}
```

### Content
Update data files in `src/app/data/`:
- `content.data.ts` - Services
- `case-studies.data.ts` - Client case studies
- `blogs.data.ts` - Blog posts

## License

Copyright 2025 Intellabizz Solutions Pvt Ltd. All rights reserved.

## Contact

- Email: hello@intellabizz.in
- Phone: +91 80 4567 8900
- Locations: Bengaluru | Mumbai | Delhi NCR

# Techering | High-End Digital Agency

Techering is a modern, premium, and performance-driven digital agency website. Built for ambitious venture-backed founders and culture-defining brands, the platform bridges the gap between high-fashion editorial craftsmanship and rigorous data-driven Silicon Valley optimization.

## 🚀 Key Features

*   **Modern Premium Aesthetic:** A meticulously crafted dark-mode UI with glassmorphism effects, dynamic gradients, and modern typography.
*   **Multi-Page Architecture:** Fully functional routing with dedicated pages for Home, About, Services, Work (Case Studies), Testimonials, and Pricing.
*   **Direct WhatsApp Integration:** Streamlined user inquiries bypassing traditional backends—all call-to-action buttons route directly to a configured WhatsApp business line.
*   **Dynamic Data Driven:** Services, case studies, pricing, and testimonials are all driven by a centralized data configuration file (`agencyData.ts`).
*   **Mobile-First Responsive:** Flawless experience across desktops, tablets, and mobile devices with a custom off-canvas mobile navigation drawer.
*   **Micro-Animations:** Strategic use of hover states, continuous spinning graphics, pulsing gradients, and layout transitions to create a "wow" factor.

## 🛠 Tech Stack

*   **Frontend Framework:** [React 18](https://react.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Routing:** [React Router v6](https://reactrouter.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)

## 📂 Project Structure

```text
src/
├── components/       # Reusable UI components (Navbar, Footer, CaseStudyModal, etc.)
├── data/             # Centralized application data (agencyData.ts)
├── layouts/          # Page layouts (MainLayout.tsx handling global Outlet context)
├── pages/            # Top-level route components (HomePage, AboutPage, etc.)
├── App.tsx           # Application entry point & route definitions
├── main.tsx          # React DOM rendering
├── types.ts          # TypeScript interfaces and types
└── index.css         # Global styles and Tailwind directives
```

## 💻 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine (v18+ recommended).

### Installation

1. Navigate to the project directory:
   ```bash
   cd techering1
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the application locally in development mode:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`. Hot Module Replacement (HMR) is enabled, meaning changes to the code will instantly reflect in the browser.

### Build for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

The compiled assets will be output to the `dist/` directory, ready to be deployed to Vercel, Netlify, or any static hosting provider.

## 🎨 Customizing the Content

The website is designed to be easily configurable without diving deep into the React components. 

To update the agency's services, portfolio case studies, client testimonials, or pricing packages, simply edit the data structures inside `src/data/agencyData.ts`. All changes will dynamically propagate throughout the application.

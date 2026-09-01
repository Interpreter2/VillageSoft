# VillageSoft

Welcome to the VillageSoft corporate website repository.

## Overview
This is a modern, responsive corporate website built for VillageSoft, a technology, consulting, management, and professional training company. It highlights core services, professional training programs, and the industries served by the company.

## Tech Stack
- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

## Getting Started

Follow these instructions to run the project locally.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18.17 or higher) and npm installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Interpreter2/VillageSoft.git
   cd VillageSoft
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Development Server

Start the local development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

To create an optimized production build:
```bash
npm run build
```

To start the production server after building:
```bash
npm run start
```

## Configuration
The core company data (name, email, phone, location, navigation links) is managed centrally in `src/config/site.ts`. Update this file to modify global site data and placeholders.

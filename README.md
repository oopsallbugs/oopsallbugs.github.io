# Sam Humphries Portfolio

This is a personal portfolio site built with [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), and [Vite](https://vitejs.dev/).  
It features interactive pages, a 3D black hole visualization, and is deployed to GitHub Pages.

## Features

- **Home, Resume, Projects, Contact** pages
- Responsive design with CSS Modules
- Custom navigation and footer components
- 3D Black Hole visualization (Three.js)
- Accessible, fast, and optimized for modern browsers

## Project Structure

```
public/
  cubeMaps/         # CubeMaps dir
    scene/          # Texture selection
      resolution/   # Resolution selection
  backgroundLQ.jpg  # Resume background image

src/
  components/     # Reusable UI components (Navigation, Footer, BlackHole, Icons, etc.)
  pages/          # Page-level components (home, resume, projects, contact)
  utils/          # Device detection and texture caching
  styles.css      # Global CSS variables and styles
  reset.css       # CSS reset
  index.css       # Base styles

vite.config.ts    # Vite configuration
tsconfig.json     # TypeScript configuration
.eslintrc         # ESLint configuration
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) package manager

### Install dependencies

```sh
pnpm install
```

### Development

Start the local dev server:

```sh
pnpm dev
```

### Build

Create a production build:

```sh
pnpm build
```

### Preview Production Build

```sh
pnpm preview
```

### Lint

Check code quality:

```sh
pnpm lint
```

### Deployment

Automatic deployment to GitHub Pages on master branch merge.

To deploy manually:

```sh
pnpm deploy
```

## Code Style

- TypeScript strict mode
- CSS Modules for styling
- ESLint with recommended rules
- 2-space indentation, no semicolons

See [`AGENTS.md`](AGENTS.md) for detailed code style and project guidelines.

---

## Credits

- Space cube map images: NASA/Goddard Space Flight Center Scientific Visualization Studio. Gaia DR2: ESA/Gaia/DPAC. Constellation figures based on those developed for the IAU by Alan MacRobert of Sky and Telescope magazine (Roger Sinnott and Rick Fienberg). [Source](https://svs.gsfc.nasa.gov/4851#29967)
- Resume background image: [Pexels](https://www.pexels.com/photo/blue-and-purple-cosmic-sky-956999/)

# Agent Instructions for gh-pages-site

## Build/Lint/Test Commands

- **Build**: `pnpm build` (runs TypeScript compilation + Vite build)
- **Lint**: `pnpm lint` (runs ESLint on all files)
- **Dev server**: `pnpm dev` (starts Vite dev server)
- **Preview**: `pnpm preview` (previews production build)
- **Deploy**: `pnpm deploy` (builds and deploys to GitHub Pages)
- **Type check**: `pnpm build` (includes TypeScript checking)

## Code Style Guidelines

### TypeScript & React

- Use TypeScript with strict mode enabled
- Prefer arrow function components: `const Component = () => <div />`
- Use JSX (not TSX) for React components
- Enable all strict TypeScript compiler options

### Imports & Structure

- Import CSS first, then components: `import "./App.css";` then component imports
- Use default exports for React components
- Group related files in feature-based directories under `src/`

### Styling

- Use CSS Modules: `import styles from "./Component.module.css"`
- Apply styles with `className={styles.className}`
- Keep component-specific styles in same directory as component

### Naming Conventions

- **Components**: PascalCase (e.g., `HomePage`, `Footer`)
- **Files**: camelCase for components, PascalCase for directories
- **CSS classes**: camelCase in CSS Modules
- **Variables/Functions**: camelCase

### Code Quality

- ESLint with recommended rules + React hooks + React refresh plugins
- No unused locals/parameters (enforced by TypeScript)
- No semicolons (follow existing code style)
- 2-space indentation

### Project Structure

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

Run `pnpm lint` after changes to ensure code quality.

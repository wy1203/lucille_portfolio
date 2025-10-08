# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Development:
- `npm start` - Run dev server at localhost:3000
- `npm test` - Run tests in watch mode
- `npm run build` - Production build to build/ folder

This is a Create React App project with TypeScript, so all standard CRA commands apply.

## Architecture

### Application Type
Portfolio website built with React 19, TypeScript, and Create React App. Features 3D intro animations (Three.js/React Three Fiber), route-based navigation, and custom visual effects.

### Core Routes (src/App.tsx)
- `/` - MainContent: Home page with works showcase
- `/work/:id` - WorkDetail: Individual project case study
- `/about` - About: Personal bio and background
- `/gallery` - Gallery: Interactive visual gallery

### Key Architectural Patterns

**Session-based Intro**: First visit shows 3D circular text intro (CircularText), subsequent visits skip it using sessionStorage.

**MusicProvider Context**: Global audio controls wrap entire app, managing background music state and volume across routes.

**Content Block System**: Work detail pages use a typed content block architecture (src/data/types.ts) supporting 11 block types:
- Layout blocks: text, title, list, spacer
- Media blocks: image, image-pair, image-trio, image-grid, image-full, video
- Each block type has strict TypeScript interfaces with configurable layout properties

**Modular Work Data**: Project data lives in separate files (src/data/works/) and aggregates through worksData.ts. Each work exports a WorkDetail object with sections (overview, challenge, solution, impact, reflection).

### Custom Effect Components (src/react_bits_effects/)
Reusable animated components using GSAP, Framer Motion, and Three.js:
- DomeGallery: 3D dome image projection using React Three Fiber
- ElasticSlider: Volume slider with elastic physics animation
- MetaBalls: WebGL metaball effect using OGL library
- ShuffleText: Character shuffle animation with GSAP
- SplitText: Text reveal animation splitting by characters

### Styling Structure
- Component-specific CSS in src/styles/ (e.g., WorkDetail.css, About.css)
- Global styles in App.css and index.css
- No CSS-in-JS or styled-components; using plain CSS with BEM-like naming

### State Management
No Redux or external state library. Uses:
- React Context for music state (BackgroundMusic.tsx)
- useState/useEffect for component-level state
- sessionStorage for intro display persistence
- React Router for navigation state

### Adding New Projects
1. Create new file in src/data/works/ (e.g., projectname.ts)
2. Export WorkDetail object following types.ts interfaces
3. Import and add to worksData array in src/data/worksData.ts
4. Add project images to public/ directory
5. The work automatically appears on home page and creates /work/:id route

### Key Dependencies
- @react-three/fiber, @react-three/drei - 3D graphics
- framer-motion - Page transitions and animations
- gsap - Advanced text/UI animations
- ogl - Low-level WebGL for custom effects
- react-router-dom v7 - Routing

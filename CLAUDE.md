# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Colour

Blue: #0054f3,
Orange: #ff743a

## Project Overview

This is Lucille's portfolio website - a React TypeScript application showcasing design work with an emphasis on interactive 3D experiences, animations, and rich visual content. The site features a portfolio section, gallery, about page, and detailed work case studies.

## Core Commands

### Development

- `npm start` - Start development server (runs on http://localhost:3000)
- `npm test` - Run tests

### Linting and Type Checking

The project uses Create React App's built-in ESLint configuration. TypeScript compilation happens during `npm start`..

## Architecture and Structure

### Technology Stack

- **React 19** with TypeScript
- **React Router DOM** for routing
- **Framer Motion** for animations and page transitions
- **React Three Fiber** + **Three.js** for 3D graphics (intro animation)
- **React Three Drei** for 3D utilities

### Directory Structure

```
src/
├── components/          # React components
│   ├── BackgroundMusic.tsx    # Global audio context provider
│   ├── MainContent.tsx        # Homepage with work grid
│   ├── WorkDetail.tsx         # Individual work case study pages
│   ├── About.tsx             # About page
│   ├── Gallery.tsx           # Photo gallery
│   ├── GalleryDetail.tsx     # Individual gallery item
│   ├── CircularText.tsx      # 3D intro animation
│   └── Modal components      # ImageModal, VideoModal
├── data/               # Static data and types
│   └── worksData.ts          # Work portfolio data with TypeScript interfaces
├── styles/             # Component-specific CSS files
└── assets/             # Images, sounds, and other media
```

### Key Architectural Patterns

1. **Content Management**: Work portfolio content is managed through `worksData.ts` with a flexible content block system supporting various layouts (text, images, image pairs/trios/grids, etc.)

2. **Routing Structure**:

   - `/` - Main portfolio homepage
   - `/work/:id` - Individual work detail pages
   - `/about` - About page
   - `/gallery` - Photo gallery
   - `/gallery/:id` - Individual gallery items

3. **Animation System**: Heavy use of Framer Motion for:

   - Page transitions and intro animations
   - Scroll-triggered animations using `useInView`
   - Interactive hover effects and state changes

4. **3D Integration**: Three.js integration for intro animation with rotating circular text effect

5. **Global State**: Background music managed via React Context (`MusicProvider`)

### Content Block System

The portfolio uses a flexible content block system in `worksData.ts`:

- `TextBlock` - Rich text content with sizing options
- `ImageBlock` - Single images with aspect ratio control
- `ImagePairBlock` - Side-by-side image layouts
- `ImageTrioBlock` - Complex 3-image layouts (left-right or top-bottom)
- `ImageGridBlock` - Multi-column grids
- `ImageFullBlock` - Full-width hero images
- `SpacerBlock` - Vertical spacing control

### Visual Design Features

- **Interactive Homepage**: Mouse-following clip-path reveal effect on background layers
- **Scroll Animations**: Parallax and fade effects tied to scroll position
- **Responsive Grid**: CSS Grid-based work portfolio with hover animations
- **Rich Media Support**: Images, videos, and audio integration throughout

## Development Guidelines

### Adding New Work Items

1. Add new work data to `worksData.ts` following the `WorkDetail` interface
2. Ensure all image assets are placed in appropriate directories under `public/`
3. Test the content block rendering in `WorkDetail.tsx`

### Styling Approach

- Component-specific CSS files in `src/styles/`
- Global styles in `App.css`
- Heavy use of CSS custom properties for theming
- Responsive design with mobile-first approach

### Asset Organization

- Static assets in `public/` directory
- Work images in `public/work_details/[project-name]/`
- Icons and UI elements in `public/icons/`
- Background music in `public/assets/sound/`

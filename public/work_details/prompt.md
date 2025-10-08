# Instructions for Adding a New Project to Portfolio

## Overview

Create a new project work file following the established architecture pattern, using image filenames to infer layout structure without reading actual image content.

## Step-by-Step Process

### 1. File Structure

- Create new file in `src/data/works/` named `{projectname}.ts`
- Reference `scoby.ts` as the structural template
- Export a `WorkDetail` object following interfaces defined in `src/data/types.ts`

### 2. Project Metadata

Define these required fields:

- `id`: Unique number (check existing works for next available ID)
- `title`: Project name
- `category`: Project type (e.g., "Interactive Installation Design", "Product Design")
- `description`: Short tagline
- `thumbnail`: Path to hero image (e.g., `/work_details/{projectname}/hero.png`)
- `heroImage`: Same as thumbnail
- `client`: Client or project context
- `role`: Your role in the project
- `timeline`: Year or date range
- `skills`: Array of relevant skills

### 3. Section Structure (5 Standard Sections)

Create exactly 5 sections with these keys:

1. **overview** - Project vision and introduction
2. **strategyAndAnalysis** - Research foundation and approach
3. **designSolution** - Implementation details and process
4. **impactAndResults** - Outcomes and metrics
5. **reflection** - Learnings and future considerations

Each section has:

- `title`: Section heading
- `blocks`: Array of content blocks

### 4. Image Organization by Filename Pattern

**DO NOT READ IMAGE FILES** - Use filenames to infer layout:

#### Single Images

- `1.png`, `hero.png` � `type: "image"`
- example: type: "image",
  src: "/work_details/cornell_class/9.png",
  caption: "9",
  size: "full",
- **!!!important!!!**: for size, always use "full" for single images.

#### Image Pairs (2 images)

- `{n}left.png`, `{n}right.png` � `type: "image-pair"`
- Set `layout: "equal"`, `"left-heavy"`, or `"right-heavy"`
- Use `size` property to adjust proportions

#### Image Trios (3 images)

**Left-Right Layout** (1 left, 2 right stacked):

- `{n}left.png`, `{n}topright.png`, `{n}bottomright.png`
- Use `leftImage` and `rightImages` properties
- Set `size` on leftImage (percentage of width)

**Top-Bottom Layout** (1 top, 2 bottom):

- `{n}.png`, `{n}bottomleft.png`, `{n}bottomright.png`
- Set `layout: "top-bottom"`
- Use `topImage` (with `height` and `position`) and `bottomImages`

**Horizontal Layout** (3 in a row):

- `{n}left.png`, `{n}middle.png`, `{n}right.png`
- Set `layout: "horizontal"`
- Use `horizontalImages` array with equal or custom `size` percentages

#### Image Captions

- Always add `caption` property using the image filename (e.g., `"1"`, `"2left"`, `"5topright"`)

### 5. Content Block Types

Use these block types from `types.ts`:

**Text Blocks:**

```typescript
{
  type: "text",
  content: "**Bold text** and regular text",
  size: "large" | "normal" | "small"
}
```

**Title Blocks:**

```typescript
{
  type: "title",
  content: "Section Title",
  size: "large",
  align: "left"
}
```

**List Blocks:**

```typescript
{
  type: "list",
  listType: "unordered" | "ordered",
  items: ["Item 1", "Item 2"],
  size: "large"
}
```

### 6. Dummy Text Guidelines

Create placeholder content for all text blocks:

- Use `**Bold text**` for emphasis (e.g., `**Project Vision:**`, `**Key Outcomes:**`)
- Write 2-3 sentences per text block
- Make it project-relevant but generic enough to replace later
- Include bullet points in impact/results sections

### 7. Update worksData.ts

After creating the work file:

1. Import the new work: `import { projectnameWork } from "./works/projectname";`
2. Add to `worksData` array in appropriate position
3. Ensure images are in `public/work_details/{projectname}/` folder

### 8. Standard Pattern Example

```typescript
overview: {
  title: "Overview",
  blocks: [
    {
      type: "text",
      content: "**Project Vision**: [2-3 sentences describing the project]",
      size: "large",
    },
    {
      type: "image-trio",
      layout: "top-bottom",
      topImage: {
        src: "/work_details/{projectname}/1.png",
        caption: "1",
        height: "70px",
        position: "50% 40%",
      },
      bottomImages: [
        {
          src: "/work_details/{projectname}/2left.png",
          caption: "2left",
          size: 50,
        },
        {
          src: "/work_details/{projectname}/2right.png",
          caption: "2right",
          size: 50,
        },
      ],
      gap: "small",
    },
  ],
}
```

### Key Principles

 **DO**: Use filename patterns to determine layout structure
 **DO**: Add captions matching filenames
 **DO**: Follow the 5-section structure
 **DO**: Reference `scoby.ts` for structure patterns
 **DO**: Use dummy text that can be refined later

L **DON'T**: Read image files to determine content
L **DON'T**: Create files unless absolutely necessary
L **DON'T**: Skip captions on images
L **DON'T**: Deviate from the established section structure

---

**This prompt should be used whenever adding a new project to maintain consistency across the portfolio architecture.**

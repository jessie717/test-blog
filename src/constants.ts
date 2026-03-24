import { BlogPost, Photo, Skill } from './types';

export const SKILLS: Skill[] = [
  { name: 'React / Next.js', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  { name: 'Node.js / Express', level: 85, category: 'Backend' },
  { name: 'PostgreSQL', level: 80, category: 'Backend' },
  { name: 'Docker', level: 75, category: 'Tools' },
  { name: 'Git / GitHub', level: 90, category: 'Tools' },
  { name: 'Figma', level: 70, category: 'Design' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Building a Modern Portfolio with React and Tailwind',
    excerpt: 'How I used modern web technologies to create a fast, responsive, and beautiful personal website.',
    date: '2024-03-15',
    category: 'Development',
    content: `
When it comes to building a personal portfolio, the choices of technology are endless. For this iteration, I decided to stick with a stack that offers both developer velocity and excellent performance: **React** and **Tailwind CSS**.

## Why Tailwind CSS?

Tailwind has fundamentally changed how I write CSS. By providing utility classes directly in the markup, it eliminates the context switching between HTML and CSS files. More importantly, it enforces a consistent design system.

### The Benefits:
1. **No naming conventions to invent**: Goodbye \`BEM\` or \`OOCSS\`.
2. **Smaller CSS bundle**: Tailwind purges unused styles in production.
3. **Responsive design is trivial**: Just prefix with \`md:\` or \`lg:\`.

## Structuring the React App

I kept the architecture simple. A single-page application (SPA) using Vite for lightning-fast HMR (Hot Module Replacement).

\`\`\`tsx
export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Blog />
        <Photography />
      </main>
      <Footer />
    </div>
  );
}
\`\`\`

## Adding Motion

To make the site feel alive, I integrated \`motion/react\` (Framer Motion). It allows for declarative animations that are both performant and easy to write.

> "Animation should serve a purpose. It should guide the user's eye and provide feedback, not just be there for decoration."

By combining these tools, I was able to build a portfolio that not only looks good but is also a joy to maintain.
    `,
  },
  {
    id: '2',
    title: 'The Art of Minimalist Design',
    excerpt: 'Exploring why less is often more when it comes to user interface design.',
    date: '2024-02-28',
    category: 'Design',
    content: `
Minimalism in design isn't just about removing elements until there's nothing left. It's about stripping away the non-essential so that the essential can speak.

## The Core Principles

1. **Negative Space**: Often called "white space," this is the empty area around elements. It gives the design room to breathe and helps focus the user's attention.
2. **Typography as UI**: In a minimalist design, typography often does the heavy lifting. Choosing the right font pairing (like a strong serif for headings and a clean sans-serif for body text) is crucial.
3. **Intentional Color**: Instead of a rainbow of colors, minimalist designs usually rely on a monochromatic palette with one or two accent colors.

![Minimalist Architecture](https://picsum.photos/seed/minimalist/800/400)

## Applying it to Web Design

When designing this portfolio, I intentionally chose a stark black-and-white theme with subtle gray accents. The goal was to let the content—the blog posts and the photography—be the focal point.

*   No unnecessary borders.
*   No heavy drop shadows.
*   Just clean lines and clear typography.

By embracing minimalism, we create digital spaces that are calmer, faster, and more accessible.
    `,
  },
  {
    id: '3',
    title: 'Mastering TypeScript Generics',
    excerpt: 'A deep dive into one of the most powerful features of TypeScript.',
    date: '2024-01-10',
    category: 'TypeScript',
    content: `
TypeScript has become the standard for large-scale JavaScript applications. While its basic typing features are easy to grasp, **Generics** often trip up intermediate developers.

## What are Generics?

Think of generics as variables for types. Just as a function can take arguments to operate on different values, a generic type can take type arguments to operate on different types.

### A Simple Example

Let's say we want a function that returns whatever is passed into it.

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

// Usage:
const num = identity<number>(42);
const str = identity<string>("Hello");
\`\`\`

Here, \`T\` is a type variable. It captures the type the user provides (e.g., \`number\`), so we can use that information later.

## Generic Constraints

Sometimes you want to restrict the types that can be passed to a generic. You can do this using the \`extends\` keyword.

\`\`\`typescript
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}
\`\`\`

Now, \`logLength\` will only accept arguments that have a \`length\` property (like strings or arrays).

Generics are a powerful tool for building reusable, type-safe components and functions. Mastering them is a key step in becoming a TypeScript expert.
    `,
  },
];

export const PHOTOS: Photo[] = [
  {
    id: '1',
    url: 'https://picsum.photos/seed/photography1/800/1200',
    title: 'Urban Solitude',
    location: 'Tokyo, Japan',
  },
  {
    id: '2',
    url: 'https://picsum.photos/seed/photography2/1200/800',
    title: 'Mountain Mist',
    location: 'Swiss Alps',
  },
  {
    id: '3',
    url: 'https://picsum.photos/seed/photography3/800/800',
    title: 'Golden Hour',
    location: 'California, USA',
  },
  {
    id: '4',
    url: 'https://picsum.photos/seed/photography4/800/1000',
    title: 'Neon Nights',
    location: 'Shanghai, China',
  },
];

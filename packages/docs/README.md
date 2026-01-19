# @vtnds/docs

Storybook documentation for the VTNDS design system.

## Quick Start

```bash
# From the root of the monorepo
pnpm storybook

# Or from this directory
pnpm dev
```

Opens Storybook at [http://localhost:6006](http://localhost:6006)

## Structure

```
docs/
├── .storybook/
│   ├── main.ts      # Storybook configuration
│   └── preview.ts   # Global decorators & parameters
├── stories/         # Local documentation stories
├── styles/
│   └── globals.css  # Global CSS (Tailwind, fonts)
└── public/          # Static assets
```

## Writing Stories

Stories live alongside their components in `packages/ui/src/` and `packages/specialized/src/`.

See the [Storybook documentation](https://storybook.js.org/docs/writing-stories) for guides.

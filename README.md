# VTNDS — Vention Design System

> Industrial design system for CAD and automation software.  
> Built for precision, efficiency, and information density.

---

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start Storybook (component playground)
pnpm storybook

# Build all packages
pnpm build
```

---

## 📦 Packages

| Package | Description | Path |
|---------|-------------|------|
| `@vtnds/tokens` | Design tokens (colors, spacing, typography) | `packages/tokens` |
| `@vtnds/ui` | Core UI components (Button, Input, etc.) | `packages/ui` |
| `@vtnds/specialized` | Complex components (TreeView, etc.) | `packages/specialized` |
| `@vtnds/docs` | Storybook documentation | `packages/docs` |

---

## 🛠 Tech Stack

- **Framework:** React 19 + TypeScript (strict mode)
- **Build:** Vite 6
- **Styling:** Tailwind CSS v4 with design tokens
- **Components:** Base UI + React Aria
- **Icons:** Tabler Icons
- **Documentation:** Storybook 8

---

## 🎨 Design Tokens

Tokens are exported from Figma and defined in `packages/tokens/src/theme.css`.

```css
/* Example usage in components */
.button {
  background: var(--color-primary-default);
  padding: var(--spacing-2) var(--spacing-3);
  border-radius: var(--radius-default);
}
```

---

## 📁 Project Structure

```
design-system/
├── packages/
│   ├── tokens/          # Design tokens from Figma
│   ├── ui/              # Core components (Base UI)
│   ├── specialized/     # Complex components (React Aria)
│   └── docs/            # Storybook
├── package.json
├── pnpm-workspace.yaml
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🔗 Resources

- [Figma Design File](https://www.figma.com/design/eQToPdfTQBxg8vbMP7P0Mr/VTNDS)
- [ShadCN UI (Reference)](https://ui.shadcn.com/)
- [Base UI Docs](https://base-ui.com/)
- [React Aria Docs](https://react-spectrum.adobe.com/react-aria/)

---

## 📝 License

MIT © Vention

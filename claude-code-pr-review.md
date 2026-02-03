# Claude Code PR Review Request

## PR Link
https://github.com/pasco-pasco/VTNDS/pull/2

## What I Need You To Do
- Review the PR for code quality, correctness, and design system alignment.
- Focus on **visual specs** (sizes, padding, typography) and **component behavior**.
- Call out any mismatches with the sizing spec below.
- Confirm lint/test/build status and highlight any remaining errors or risks.

---

## Design System Sizing Spec (Source of Truth)

### Size Scale (All Components)
- **sm:** 24px height
- **md:** 28px height (default)
- **lg:** 32px height

### Button Rules
- **Heights:** 24 / 28 / 32 (sm / md / lg)
- **Font size:** sm = 12px, md = 12px, lg = 14px
- **Border radius:** 6px for all sizes
- **Icon-only buttons:**
  - sm = 24×24
  - md = 28×28
  - lg = 32×32

### Input Rules
- **Heights:** 24 / 28 / 32 (sm / md / lg)
- **Font size:** sm = 12px, md = 12px, lg = 14px
- **Border radius:** 6px for all sizes
- **Padding X:**
  - sm = 8px
  - md = 10px
  - lg = 12px

---

## Figma References
- Input default height is **28px** (not 24px)
- Figma file: https://www.figma.com/design/TpwNGRVt4NLv3lvDiMyZnJ/VTNDS---v0.2?node-id=65-533

---

## Local Findings (from Codex local review)
Please verify these in the PR:

1) **InputGroupInput uses old sizing**
   - It appears to be hardcoded to 32px (`h-8`), `px-3`, `text-sm`
   - This conflicts with the default input spec (28px height, 10px padding, 12px font)

2) **Inline addon overlap risk**
   - `InputGroupAddon` uses absolute positioning (`pl-3` / `pr-3`)
   - Input padding is fixed (`px-3`) and not adjusted when addons are present
   - Could cause icon/text overlap inside the input

3) **InputGroupText uses text-sm**
   - Might be inconsistent with default input size (text-xs)

---

## GitHub CI Context
I previously saw lint errors in:
- `packages/ui/src/InputGroup/InputGroup.tsx`
- `packages/ui/src/InputGroup/InputGroup.test.tsx`

Those should be fixed now, but please confirm CI is green.

---

## What I Want Back From You
- A clear list of **issues / risks** (if any), ordered by severity
- Confirmation that the code matches the spec
- Any recommended fixes before merge


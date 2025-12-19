# Atomic Design Structure

This project follows [Atomic Design methodology](https://atomicdesign.bradfrost.com/chapter-2/) by Brad Frost.

## Component Hierarchy

### 🔬 Atoms (`src/components/atoms/`)

Basic building blocks that can't be broken down further without losing functionality.

**Examples:**

- Box, Text (layout primitives)
- Button, Input, PasswordInput
- Logo, LoadingSpinner

**Characteristics:**

- Cannot be decomposed further
- Have basic, intrinsic properties
- Serve as foundational elements

### 🧬 Molecules (`src/components/molecules/`)

Simple groups of atoms functioning together as a unit.

**Examples:**

- ErrorToast (combines Text, Box, Icons)
- Form fields (Label + Input + Error message)
- Search bar (Input + Button)

**Characteristics:**

- Combine 2+ atoms
- Perform a single, focused function
- Reusable across contexts

### 🦠 Organisms (`src/components/organisms/`)

Complex components composed of molecules, atoms, and/or other organisms that form distinct interface sections.

**Examples:**

- ErrorBoundary
- Navigation headers
- Product cards/lists
- Form sections

**Characteristics:**

- Relatively complex
- Form distinct interface sections
- Can contain mixed molecule types

### 📐 Templates (`src/components/templates/`)

Page-level layouts that place components into structure and show content skeleton (not final content).

**Examples:**

- AuthLayout (for login/signup)
- MainLayout (primary app structure)
- DashboardLayout

**Characteristics:**

- Define page-level layout structure
- Show content skeleton, not final content
- Demonstrate component relationships

### 📄 Pages (`src/pages/`)

Specific instances of templates with real content.

**Examples:**

- Home, Login, Splash pages

**Characteristics:**

- Use templates with real data
- Final UI users interact with
- Test design system effectiveness

## Key Principles

1. **Build from simple → complex**: Atoms combine to form molecules, molecules form organisms
2. **Single responsibility**: Each component does one thing well
3. **Reusability**: Components work in multiple contexts
4. **Content structure separation**: Templates show structure, pages show content

## References

- [Atomic Design Book](https://atomicdesign.bradfrost.com/)
- [Chapter 2: Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/)

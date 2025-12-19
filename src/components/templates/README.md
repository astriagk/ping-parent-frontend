# Templates

Templates are page-level objects that place components into a layout and articulate the design's underlying content structure.

## Purpose

According to Atomic Design methodology, templates:

- Place organisms, molecules, and atoms into a layout
- Focus on the page's underlying content structure (not final content)
- Demonstrate how components work together in context
- Define layout patterns that can be reused across multiple pages

## Examples

Common template types:

- `AuthLayout` - Layout for login/signup screens
- `MainLayout` - Primary app layout with navigation
- `DashboardLayout` - Layout for dashboard-style screens
- `FormLayout` - Standardized form layout structure

## Usage

Templates receive components as children or props and arrange them according to a predefined layout structure. The actual content (pages) will use these templates with real data.

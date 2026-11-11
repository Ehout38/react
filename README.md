# React

React course project with a shared header, menu, footer and routed page content.

## Requirements

- Node.js 22.12 or later, or Node.js 24.
- Visual Studio 2022 version 17.11 or later with the Node.js development workload.
- Internet access for the first npm and JavaScript SDK restore.

## Visual Studio

Open `React.sln` and select the React project as the startup project. If dependencies have not been installed yet, open the project terminal and run `npm ci` first. Choose React (Edge) or React (Chrome) from the debug target menu, then press F5 or Ctrl+F5. The development server starts through the project StartupCommand and opens at `http://localhost:5173`. Browser launch settings are in `.vscode/launch.json`.

## Terminal

```sh
npm ci
npm run dev
```

Create a production build with `npm run build`. Run `npm run preview` to inspect it.

## Pages and features

- Home, About, Cart and Contacts use a shared Layout and React Router Outlet.
- Categories lead to a product list and then to the selected product details.
- ThemeProvider owns the light/dark theme. ThemeToggle and ThemePreview read the same context.
- Shop owns cart state. ProductCatalog, CartSummary and ClearCartButton receive data and callbacks. The cart remains available when changing pages.
- Game registration has three routed steps and a summary: player name and age, avatar, then preferences. Values remain available when moving back and forward. Incomplete steps redirect to the required earlier step. The summary supports confirmation and starting over.
- TaskManager owns tasks, the active filter and sort order. TaskFilter, TaskSorter and TaskList communicate through callbacks. Tasks can be added, completed and deleted.
- Unknown routes and missing products show a page-not-found message.

All application state is kept in memory and resets when the browser page reloads. No backend or account registration service is used.

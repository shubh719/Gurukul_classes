# GURUKUL CLASSES – STATIC WEBPAGE

## Overview

This is a **static website** project for **Gurukul Classes**, built to showcase information about the coaching/tuition center using a modern, responsive layout.

## Tech Stack / Languages Used

- **HTML** – structure of the pages
- **CSS** – styling for layout and design
- **Tailwind CSS** – utility-first CSS framework (built from `src/input.css` to `src/output.css`)
- **JavaScript (Vanilla JS)** – basic interactivity (`src/index.js`)
- **Node.js + npm** – used to install and run Tailwind CSS tooling

## Project Structure (Main Files)

- `index.html` – main entry HTML file
- `src/index.html` – core page layout (if you use this as primary)
- `src/input.css` – Tailwind source file
- `src/output.css` – generated CSS file
- `src/index.js` – JavaScript for the page

## How to Use This Project on Your PC

### 1. Prerequisites

Make sure you have:

- **Git** installed
- **Node.js** (which includes **npm**) installed

You can check:

```bash
git --version
node -v
npm -v
```

### 2. Clone the Repository

Open your terminal (or Command Prompt / PowerShell) and run:

```bash
git clone https://github.com/shubh719/Gurukul_classes.git
cd Gurukul_classes
```

> If the folder name is slightly different on GitHub, adjust the `cd` command accordingly.

### 3. Install Dependencies

Install the Tailwind CSS-related dependencies:

```bash
npm install
```

This reads `package.json` and installs:

- `tailwindcss`
- `@tailwindcss/cli`

### 4. Build CSS with Tailwind

From the project root, run the Tailwind CLI to build your CSS (adjust input/output paths if you change them later):

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

This will:

- Read from `src/input.css`
- Generate compiled styles into `src/output.css`
- Keep watching for changes while the command is running

### 5. Open the Website in Your Browser

After building the CSS:

- You can simply **open `index.html`** (or `src/index.html`, depending on how you want to serve it) in your browser by double‑clicking it, **or**
- Use a simple live server (for example, VS Code extension “Live Server”) and start it in the project directory.

### 6. Making Changes

- Edit HTML in `index.html` / `src/index.html`
- Edit styles in `src/input.css` (Tailwind classes)
- Edit JS behavior in `src/index.js`

If `--watch` is running, Tailwind will recompile your CSS automatically whenever you save changes.

---

Happy coding 👨‍💻 and welcome to Gurukul Classes!

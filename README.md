# 🚀 UST Global Career Roadmap 2027

A personalized, interactive React dashboard designed to track preparation, manage milestones, and build a resume for securing a Developer I / Associate Software Engineer role at UST Global.

## 📌 Features

*   **Interactive Roadmap:** A step-by-step preparation plan divided into 6 phases (Foundations, Backend, Full Stack, Advanced/Cloud, Exam Buffer, and Final Sprint).
*   **Progress Tracking:** Checkboxes to mark completed tasks. Progress is automatically saved to your browser's local storage, so you don't lose your data when you close the tab.
*   **Off-Campus Checklist:** A dedicated tracker for UST portal applications, LinkedIn networking, and alternative company applications (IBS, Experion, Tata Elxsi, etc.).
*   **Curated Resources:** Quick links to highly-rated tutorials, DSA sheets, and documentation (Kunal Kushwaha, Amigoscode, Striver's A2Z, etc.).
*   **Built-in Resume Generator:** A dynamic form that generates an ATS-friendly, single-page resume formatted specifically for UST roles. Exports directly to HTML/PDF.

## 🛠️ Tech Stack

*   **Frontend:** React 18 (via CDN)
*   **Styling:** Inline CSS / standard HTML5
*   **Transpilation:** Babel (Standalone) for in-browser JSX compilation
*   **State Management:** React Hooks (`useState`, `useEffect`, `useCallback`)
*   **Storage:** Browser `localStorage` API

## 🌐 Live Demo

This application is deployed entirely client-side via GitHub Pages. 

**[Click here to view the live dashboard]** *(Replace this text with your actual GitHub Pages link once deployed)*

## 💻 How It Works (Architecture)

To keep the setup simple and avoid Node.js build steps, this project uses an in-browser Babel transpiler. 

1. `index.html` serves as the shell, loading React and Babel via CDN.
2. `app.jsx` contains the core React logic and UI components.
3. Babel translates the JSX into standard JavaScript on the fly when the page is loaded by the browser.

## 🚀 Local Development

Because this app fetches the JSX file locally, modern browsers will block it due to CORS security policies if you simply double-click the `index.html` file. 

To run it locally, you need a basic local web server. If you have VS Code installed:
1. Install the **Live Server** extension.
2. Open the project folder in VS Code.
3. Right-click `index.html` and select **"Open with Live Server"**.

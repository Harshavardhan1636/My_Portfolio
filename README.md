# AI-Powered Personal Portfolio

This is a dynamic, AI-enhanced personal portfolio website for Harsha Vardhan Dyavanapelli, built with Next.js, React, and Tailwind CSS. It leverages Google's Genkit for AI-powered features, including a dynamic bio generator and a smart contact form processor.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (with App Router)
- **UI:** [React](https://reactjs.org/) & [ShadCN UI](https://ui.shadcn.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **AI/ML:** [Google Genkit](https://firebase.google.com/docs/genkit)
- **Deployment:** Firebase App Hosting

## Key Features

- **Interactive UI:** Smooth animations, hover effects, and a responsive design create a polished user experience.
- **AI-Generated Content:** A dynamic "About Me" section that can generate a bio based on skills and experience.
- **Smart Contact Form:** The contact form uses a Genkit flow to analyze and categorize incoming messages.
- **Themed Design:** The entire UI's color palette can be easily customized in `src/app/globals.css`.

---

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:9002`.

### Important Security Note

This repository is configured with a `.gitignore` file to exclude sensitive information, such as `.env` files and Firebase configuration files (`.firebaserc`, `*.rules`, etc.).

**Do not commit these files to your repository.** They contain credentials and configuration details that should remain private. When deploying or sharing your project, ensure these files are handled securely.

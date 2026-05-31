# Laravel + React + Inertia.js CRUD Boilerplate

A modern, highly-optimized boilerplate for building Single Page Applications (SPAs) using **Laravel 12**, **React 19**, and **Inertia.js 3**, styled with **Tailwind CSS v4** and built with **Vite 7**.

---

## 🚀 Tech Stack

*   **Backend:** [Laravel 12](https://laravel.com/) (PHP ^8.2)
*   **Frontend:** [React 19](https://react.dev/) & [Inertia.js 3](https://inertiajs.com/)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with native `@tailwindcss/vite` plugin
*   **Build Tool:** [Vite 7](https://vitejs.dev/)

---

## ✨ Features

*   **Monorepo SPA Architecture:** No need for API routes or complex state managers. Render React components directly from your Laravel controllers.
*   **Tailwind CSS v4 Integration:** Fully configured with the new, ultra-fast CSS-first compiler.
*   **Concurrent Development:** A single command starts the Laravel server, queue worker, log stream, and Vite's dev server.
*   **Automated Setup:** Bootstraps the application including dependency resolution, configuration, and database setup in one command.

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed:
*   **PHP** (>= 8.2)
*   **Composer**
*   **Node.js & npm**
*   **SQLite** (or your preferred database)

### Installation & Setup

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/91-shiraz/laravel-inertia-react-app.git
    cd laravel-inertia-react-app
    ```

2.  **Run the Setup Script:**
    This command automates package installation, environment file setup, database migrations, and builds assets:
    ```bash
    composer run setup
    ```

3.  **Start the Development Environment:**
    Start the backend server, queue listener, logs, and Vite server concurrently:
    ```bash
    composer run dev
    ```

4.  **Open the App:**
    Visit [http://127.0.0.1:8000](http://127.0.0.1:8000) in your browser.

---

## 📂 Project Structure

Key paths for the integration:

*   [`routes/web.php`](file:///e:/Laravel/laravel-react-inertia-crud/routes/web.php) - Web routes returning Inertia pages.
*   [`resources/js/Pages/`](file:///e:/Laravel/laravel-react-inertia-crud/resources/js/Pages) - React page components.
*   [`resources/js/app.jsx`](file:///e:/Laravel/laravel-react-inertia-crud/resources/js/app.jsx) - Main entry point initializing Inertia.
*   [`resources/views/app.blade.php`](file:///e:/Laravel/laravel-react-inertia-crud/resources/views/app.blade.php) - Root Blade layout wrapper.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `composer run setup` | Installs dependencies, sets up `.env`, migrates the database, and builds frontend assets. |
| `composer run dev` | Starts backend, queues, logs, and Vite dev servers concurrently. |
| `composer run test` | Clears configuration cache and runs PHPUnit tests. |
| `npm run dev` | Starts Vite dev server. |
| `npm run build` | Builds frontend assets for production. |

---

## 📄 License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

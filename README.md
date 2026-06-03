# ✦ BlogNova

A modern, highly-optimized blog application built with **Laravel 12**, **React 19**, and **Inertia.js 3**, styled with **Tailwind CSS v4** and bundled using **Vite 7**.

---

## 🚀 Tech Stack

*   **Backend:** [Laravel 12](https://laravel.com/) (PHP ^8.2)
*   **Frontend:** [React 19](https://react.dev/) & [Inertia.js 3](https://inertiajs.com/)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with native `@tailwindcss/vite` plugin
*   **Build Tool:** [Vite 7](https://vitejs.dev/)

---

## ✨ Features

*   **Monorepo SPA Architecture:** Seamless rendering of React components directly from Laravel controllers via Inertia.js.
*   **Persistent Layout Resolution:** Configured in `app.jsx` to automatically wrap pages in the shared layout without manual template boilerplate.
*   **Modern Blog Grid & Details:** Card-based listing with hover elevation, category tag overlays, fallback covers, and article reading-time indicators.
*   **Custom Storage System:** Configured a custom `website` disk (mapping to the public directory) for isolated blog asset handling.
*   **Dynamic Upload Preview:** File upload input displays an interactive live preview of the cover image before publishing.
*   **Automatic UUIDs:** Built-in model lifecycle triggers (`booted()`) to automatically generate UUIDs for the `_id` field.
*   **Styled Pagination:** Theme-aligned pagination controls with route transitions and state indicators.

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed:
*   **PHP** (>= 8.2)
*   **Composer**
*   **Node.js & npm**
*   **MySQL** (or your preferred database)

### Installation & Setup

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/yourusername/laravel-inertia-react-app.git
    cd laravel-inertia-react-app
    ```

2.  **Install Dependencies:**
    ```bash
    composer install && npm install
    ```

3.  **Setup Environment Variables:**
    Duplicate the example configuration file:
    ```bash
    cp .env.example .env
    ```
    *Make sure to configure your DB connection settings in the newly created `.env` file.*

4.  **Run Migrations & Seeders:**
    ```bash
    php artisan migrate --seed
    ```

5.  **Start the Development Environment:**
    Run the Artisan server and Vite server concurrently:
    ```bash
    php artisan serve
    # And in a new terminal window:
    npm run dev
    ```

6.  **Open the App:**
    Visit [http://127.0.0.1:8000](http://127.0.0.1:8000) in your browser.

---

## 📂 Project Structure

Key paths for the integration:

*   [`routes/web.php`](file:///e:/Laravel/laravel-react-inertia-crud/routes/web.php) - Web routes returning Inertia pages.
*   [`app/Models/Post.php`](file:///e:/Laravel/laravel-react-inertia-crud/app/Models/Post.php) - Post database model generating UUIDs automatically.
*   [`app/Http/Controllers/PostController.php`](file:///e:/Laravel/laravel-react-inertia-crud/app/Http/Controllers/PostController.php) - Logic mapping pagination, single articles, and uploads.
*   [`resources/js/Layouts/layout.jsx`](file:///e:/Laravel/laravel-react-inertia-crud/resources/js/Layouts/layout.jsx) - Main glassmorphic template with active navigation states.
*   [`resources/js/Pages/`](file:///e:/Laravel/laravel-react-inertia-crud/resources/js/Pages) - React views for listings, item details, and creation forms.

---

## 📄 License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

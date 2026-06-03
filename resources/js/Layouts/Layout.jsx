import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <>
            <header className="bg-gray-800 p-2 shadow-md">
                <nav className="flex items-center justify-between px-20 py-5 text-white">
                    <Link href="/" className="nav-link hover:bg-gray-700 py-2 px-4 rounded-lg">Home</Link>
                    <Link href="/create" className="nav-link hover:bg-gray-700 py-2 px-4 rounded-lg">Create</Link>
                </nav>
            </header>

            <main>
                {children}
            </main>
        </>
    );
}
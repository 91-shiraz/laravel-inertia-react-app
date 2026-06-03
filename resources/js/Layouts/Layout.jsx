import { Link, usePage } from "@inertiajs/react";

export default function Layout({ children }) {
    const { url } = usePage();

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800/60 shadow-sm">
                <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/25">
                                <svg className="w-5.5 h-5.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <path d="M14 2v6h6" />
                                    <path d="M 9 10 Q 9 13 12 13 Q 9 13 9 16 Q 9 13 6 13 Q 9 13 9 10 Z" fill="currentColor" stroke="none" />
                                </svg>
                            </span>
                            <span className="font-bold text-xl tracking-tight text-white">
                                Blog<span className="text-indigo-400 font-medium">Nova</span>
                            </span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <Link 
                            href="/" 
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                                url === '/' 
                                    ? 'bg-slate-800 text-white shadow-inner' 
                                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                            }`}
                        >
                            Home
                        </Link>
                        <Link 
                            href="/create" 
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                                url === '/create' 
                                    ? 'bg-slate-800 text-white shadow-inner' 
                                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                            }`}
                        >
                            Create
                        </Link>
                    </div>
                </nav>
            </header>

            <main className="flex-grow">
                {children}
            </main>
        </div>
    );
}

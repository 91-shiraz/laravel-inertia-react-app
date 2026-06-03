import { useEffect, useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy";

export default function Layout({ children }) {
    const { url, props } = usePage();
    const route = useRoute();
    
    const flash = props.flash || {};
    const [toast, setToast] = useState(null);

    useEffect(() => {
        if (flash.message) {
            setToast(flash.message);
            const timer = setTimeout(() => {
                setToast(null);
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [flash.message]);

    const isError = flash.message && flash.message.toLowerCase().includes("failed");

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans relative">
            {toast && (
                <div className={`fixed top-6 right-6 z-[9999] flex items-center gap-3 px-5 py-4 rounded-2xl shadow-xl border backdrop-blur-md transition-all duration-300 transform translate-y-0 scale-100 ${
                    isError 
                        ? "bg-red-500/95 border-red-400/30 text-white shadow-red-500/10" 
                        : "bg-slate-900/95 border-slate-800/30 text-white shadow-indigo-500/10"
                }`}>
                    {isError ? (
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-red-600 text-white">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </span>
                    ) : (
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </span>
                    )}
                    <div className="flex-1 text-sm font-semibold tracking-wide pr-2">
                        {toast}
                    </div>
                    <button 
                        onClick={() => setToast(null)}
                        className="text-slate-400 hover:text-white transition-colors"
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            )}
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
                            href={route('home')}
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${url === route('home')
                                ? 'bg-slate-800 text-white shadow-inner'
                                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            href={route('posts.create')}
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${url === route('posts.create')
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

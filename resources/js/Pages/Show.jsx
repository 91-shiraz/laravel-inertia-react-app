import { Head, Link } from "@inertiajs/react";

export default function Show({ post }) {
    const formatDate = (dateString) => {
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            });
        } catch (e) {
            return dateString;
        }
    };

    return (
        <>
            <Head title={post.title} />
            <div className="min-h-screen bg-slate-50/50 py-12 px-4 sm:px-6 lg:px-8">
                <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                    
                    {/* Hero Image Container */}
                    <div className="relative aspect-video w-full bg-slate-100 overflow-hidden">
                        {post.image ? (
                            <img src={post.image.startsWith("http") ? post.image : `/website/${post.image}`} alt={post.title}  className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-50 to-slate-100 text-indigo-300">
                                <svg className="w-16 h-16 stroke-current" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                        )}

                        {post.category && (
                            <div className="absolute top-6 left-6">
                                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-indigo-950 shadow-sm border border-slate-200/20">
                                    {post.category}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Content Section */}
                    <div className="p-8 sm:p-10">
                        {/* Meta details */}
                        <div className="flex items-center gap-4 text-xs text-slate-500 mb-6">
                            <span>Published on {formatDate(post.created_at)}</span>
                            <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                            <span>5 min read</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                            {post.title}
                        </h1>

                        {/* Description/Body */}
                        <div className="prose max-w-none text-slate-600 leading-relaxed text-base sm:text-lg font-light space-y-6">
                            <p className="whitespace-pre-line">{post.description}</p>
                        </div>

                        {/* Footer Action */}
                        <div className="mt-10 pt-8 border-t border-slate-100 flex items-center justify-between">
                            <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:text-indigo-600 hover:border-indigo-100 hover:bg-indigo-50/20 transition-all shadow-sm">
                                <svg className="w-4 h-4 transform transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                </svg>
                                Back to Blogs
                            </Link>
                        </div>
                    </div>
                </article>
            </div>
        </>
    );
}

import { Link, Head } from "@inertiajs/react";

export default function Home({ posts }) {
    const formatDate = (dateString) => {
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
            });
        } catch (e) {
            return dateString;
        }
    };

    return (
        <>
            <Head title="Home" />

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white py-16 px-4 sm:px-6 lg:px-8 text-center shadow-inner">
                <div className="max-w-3xl mx-auto">
                    <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-900/50 px-3 py-1.5 rounded-full border border-indigo-700/30">
                        Ignite Your Voice
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-indigo-200">
                        Welcome to BlogNova
                    </h1>
                    <p className="text-lg text-indigo-200/80 max-w-xl mx-auto font-light leading-relaxed">
                        Explore Stories, Ideas, and Expertise from Our Community. Simple, Beautiful, and Fast.
                    </p>
                </div>
            </div>

            {/* Posts Grid Container */}
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {posts.data.length === 0 ? (
                        <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-100">
                            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                            </svg>
                            <h3 className="mt-4 text-lg font-medium text-gray-950">No Posts Found</h3>
                            <p className="mt-1 text-sm text-gray-500">Get Started by Creating a New Post!!</p>
                            <div className="mt-6">
                                <Link
                                    href="/create"
                                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Create Post
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.data.map(post => (
                                <article
                                    key={post.id}
                                    className="flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-gray-100"
                                >
                                    {/* Image Wrapper */}
                                    <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                                        {post.image ? (
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 ease-out"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-50 to-slate-100 text-indigo-300">
                                                <svg className="w-12 h-12 stroke-current" fill="none" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        )}
                                        {post.category && (
                                            <div className="absolute top-4 left-4">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-indigo-950 shadow-sm">
                                                    {post.category}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content Body */}
                                    <div className="flex-1 p-6 flex flex-col justify-between">
                                        <div className="flex-1">
                                            <h2 className="text-xl font-bold text-gray-900 line-clamp-2 hover:text-indigo-600 transition-colors duration-200 mb-3">
                                                {post.title}
                                            </h2>
                                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                                                {post.description}
                                            </p>
                                        </div>

                                        {/* Footer Info */}
                                        <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between text-xs text-gray-500">
                                            <span>{formatDate(post.created_at)}</span>
                                            <span className="flex items-center gap-1 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
                                                Read More
                                                <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-2 mt-12 mb-8">
                    {posts.links.map((link, idx) => (
                        link.url ? (
                            <Link 
                                href={link.url}
                                key={idx}
                                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 shadow-sm ${
                                    link.active
                                        ? 'bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-500/10'
                                        : 'bg-white text-slate-700 border-slate-200 hover:border-indigo-200 hover:text-indigo-600 hover:-translate-y-0.5'
                                }`}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ) : (
                            <span
                                key={idx}
                                className="px-4 py-2 rounded-xl text-xs font-medium border border-slate-100 bg-slate-50 text-slate-400 cursor-not-allowed opacity-60"
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ) 
                    ))}
                </div>
            </div>
        </>
    );
}
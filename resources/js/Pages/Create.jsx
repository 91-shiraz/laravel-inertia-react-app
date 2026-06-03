import { useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy";

export default function Create() {
    const route = useRoute();
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        category: "",
        description: "",
        image: null,
    });

    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData("image", file);
            setImagePreview(URL.createObjectURL(file));
        } else {
            setData("image", null);
            setImagePreview(null);
        }
    };

    const handleRemoveImage = () => {
        setData("image", null);
        setImagePreview(null);
        document.getElementById("image").value = "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('posts.store'), {
            forceFormData: true,
        });
    };

    return (
        <>
            <Head title="Create" />
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto">
                    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col gap-6">
                        <div className="text-center">
                            <h1 className="text-2xl font-bold text-slate-900">Create New Post</h1>
                            <p className="text-sm text-slate-500 mt-1">Share your Thoughts and Ideas with the Community!!</p>
                        </div>

                        <div className="flex flex-col gap-5">
                            {/* Image Upload Area */}
                            <div className="w-full">
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Cover Image</label>

                                {imagePreview ? (
                                    <div className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-sm aspect-video bg-slate-50 group">
                                        <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                                            <label htmlFor="image" className="cursor-pointer px-4 py-2 bg-white/80 hover:bg-white text-slate-900 rounded-xl text-xs font-semibold shadow-sm transition-all hover:scale-105">
                                                Change Image
                                            </label>
                                            <button type="button" onClick={handleRemoveImage} className="px-4 py-2 bg-red-500/80 hover:bg-red-600 text-white rounded-xl text-xs font-semibold shadow-sm transition-all hover:scale-105">
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-slate-200 border-dashed rounded-2xl hover:border-indigo-400 transition-colors">
                                        <div className="space-y-1 text-center">
                                            <svg className="mx-auto h-12 w-12 text-slate-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div className="flex text-sm text-slate-600 justify-center">
                                                <label htmlFor="image" className="relative cursor-pointer bg-white rounded-md font-semibold text-indigo-600 hover:text-indigo-500 focus-within:outline-none">
                                                    <span>Upload an Image</span>
                                                    <input id="image" name="image" type="file" accept="image/*" className="sr-only" onChange={handleImageChange} />
                                                </label>
                                            </div>
                                            <p className="text-xs text-slate-500">PNG, JPG (up to 5MB)</p>
                                        </div>
                                    </div>
                                )}
                                {errors.image && <p className="text-red-500 text-xs mt-1.5">{errors.image}</p>}
                            </div>

                            {/* Title Field */}
                            <div className="w-full">
                                <label htmlFor="title" className="block text-sm font-semibold text-slate-700 mb-1.5">Title</label>
                                <input type="text" id="title" name="title" value={data.title} onChange={(e) => setData("title", e.target.value)} placeholder="Enter Post Title" className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400 ${errors.title ? "border-red-500" : "border-slate-200"}`} />
                                {errors.title && <p className="text-red-500 text-xs mt-1.5">{errors.title}</p>}
                            </div>

                            {/* Category Field */}
                            <div className="w-full">
                                <label htmlFor="category" className="block text-sm font-semibold text-slate-700 mb-1.5">Category</label>
                                <select id="category" name="category" value={data.category} onChange={(e) => setData("category", e.target.value)} className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-700 ${errors.category ? "border-red-500" : "border-slate-200"}`}>
                                    <option value="" disabled>Select Category</option>
                                    {["Technology", "Travel", "Health & Fitness", "Business", "Programming", "Artificial Intelligence", "Productivity", "Education", "Entertainment", "Sports"].map((category, index) => (
                                        <option key={index} value={category}>{category}</option>
                                    ))}
                                </select>
                                {errors.category && <p className="text-red-500 text-xs mt-1.5">{errors.category}</p>}
                            </div>

                            {/* Description Field */}
                            <div className="w-full">
                                <label htmlFor="description" className="block text-sm font-semibold text-slate-700 mb-1.5">Description</label>
                                <textarea id="description" name="description" value={data.description} onChange={(e) => setData("description", e.target.value)} placeholder="Write Something Inspiring..." rows="5" className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400 ${errors.description ? "border-red-500" : "border-slate-200"}`}></textarea>
                                {errors.description && <p className="text-red-500 text-xs mt-1.5">{errors.description}</p>}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <button type="submit" disabled={processing} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                                {processing ? "Creating..." : "Publish Post"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

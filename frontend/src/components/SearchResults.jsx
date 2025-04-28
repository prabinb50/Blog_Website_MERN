import React from 'react';
import { CalendarDays, Clock, User } from "lucide-react";
import { Link } from "react-router";

export default function SearchResults({ results, loading, error }) {
    if (loading) {
        return (
            <div className="w-full flex justify-center p-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full p-8 text-center">
                <p className="text-red-500">Error: {error}</p>
            </div>
        );
    }

    if (!results || results.length === 0) {
        return (
            <div className="w-full p-8 text-center">
                <p className="text-gray-500">No results found. Try different search terms or select another author.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
            {results.map((blog) => (
                <div
                    key={blog._id}
                    className="flex flex-col gap-4 border border-gray-200 rounded-md hover:shadow-lg hover:-translate-y-2 duration-500"
                >
                    {/* Image section */}
                    <div className="overflow-hidden">
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="rounded-t-md w-full h-48 object-cover"
                        />
                    </div>

                    {/* Content section */}
                    <div className="space-y-4 px-4 pb-4">
                        <div className="flex justify-between">
                            <p className="text-sm font-semibold opacity-90 hover:text-violet-500 cursor-pointer">
                                {blog.category || "Uncategorized"}
                            </p>
                            <div className="flex items-center gap-1 cursor-pointer">
                                <Clock size={16} />
                                <p className="text-sm opacity-80">3 min read</p>
                            </div>
                        </div>

                        <Link to={`/single-post/${blog._id}`}>
                            <h3 className="text-xl font-semibold opacity-90 tracking-wide hover:text-violet-500 cursor-pointer">
                                {blog.title}
                            </h3>
                        </Link>

                        <p className="opacity-70 tracking-wide line-clamp-2">
                            {blog.description}
                        </p>

                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                                <img
                                    src={blog.profile}
                                    className="w-6 h-6 rounded-full object-cover"
                                    alt={blog.username || "Author"}
                                />
                                <span className="text-sm font-medium cursor-pointer hover:text-violet-500">
                                    {blog.username}
                                </span>
                            </div>
                            <span className="opacity-60 text-sm">•</span>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <CalendarDays size={16} strokeWidth={1.5} />
                                <span className="text-sm opacity-70 tracking-wider">
                                    {new Date(blog.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
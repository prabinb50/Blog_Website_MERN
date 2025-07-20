import React from 'react';
import { CalendarDays, Clock, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedCard, AnimatedFade } from '../components/AnimatedComponent';

export default function SearchResults({ results, loading, error }) {
    // show skeleton loader while loading results
    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
                {Array.from({ length: 6 }).map((_, index) => (
                    <AnimatedCard
                        key={`skeleton-${index}`}
                        className="border border-gray-200 rounded-md overflow-hidden"
                        delay={0.1 + (index % 6) * 0.05}
                    >
                        <div className="w-full flex flex-col gap-4">
                            {/* skeleton image */}
                            <div className="h-48 bg-gray-200 animate-pulse"></div>

                            {/* skeleton content */}
                            <div className="space-y-4 px-4 pb-3">
                                {/* category and read time */}
                                <div className="flex justify-between">
                                    <div className="h-5 bg-gray-200 animate-pulse rounded w-24"></div>
                                    <div className="h-5 bg-gray-200 animate-pulse rounded w-16"></div>
                                </div>

                                {/* title */}
                                <div className="h-7 bg-gray-200 animate-pulse rounded w-full"></div>

                                {/* description */}
                                <div className="space-y-2">
                                    <div className="h-4 bg-gray-200 animate-pulse rounded w-full"></div>
                                    <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4"></div>
                                </div>

                                {/* author and date */}
                                <div className="flex items-center gap-2">
                                    <div className="h-8 bg-gray-200 animate-pulse rounded-full w-32"></div>
                                    <div className="h-4 bg-gray-200 animate-pulse rounded w-4"></div>
                                    <div className="h-8 bg-gray-200 animate-pulse rounded w-40"></div>
                                </div>
                            </div>
                        </div>
                    </AnimatedCard>
                ))}
            </div>
        );
    }

    // show error message with retry option
    if (error) {
        return (
            <AnimatedFade className="w-full p-8 text-center" delay={0.2}>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 inline-block max-w-md mx-auto">
                    <p className="text-red-600 font-medium mb-4">Error: {error}</p>
                    <p className="text-gray-600 mb-6">Unable to fetch search results. Please try again.</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="flex items-center justify-center gap-2 mx-auto px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                        <RefreshCw size={16} />
                        <span>Retry</span>
                    </button>
                </div>
            </AnimatedFade>
        );
    }

    // show message if no results are found
    if (!results || results.length === 0) {
        return (
            <AnimatedFade className="w-full p-8 text-center" delay={0.2}>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 inline-block max-w-md mx-auto">
                    <p className="text-gray-600 mb-4">No results found.</p>
                    <p className="text-gray-500 text-sm">Try different search terms or select another author.</p>
                </div>
            </AnimatedFade>
        );
    }

    // render the list of blog results
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
            {results.map((blog, index) => (
                <AnimatedCard
                    key={blog._id}
                    className=""
                    delay={0.2 + (index % 9) * 0.1}
                >
                    <Link to={`/single-post/${blog._id}`}>
                        <div
                            className="w-full h-full flex flex-col gap-4 border border-gray-200 rounded-md hover:shadow-lg hover:-translate-y-2 duration-500"
                        >
                            {/* image section */}
                            <div className="cursor-pointer">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="rounded-t-md w-full h-48 object-cover"
                                    loading="lazy"
                                />
                            </div>

                            {/* content section */}
                            <div className="space-y-4 px-4 pb-3">
                                {/* category and read time */}
                                <div className="flex justify-between">
                                    <p className="text-sm font-semibold opacity-90 hover:text-violet-500 cursor-pointer">
                                        {blog.category || "Social Media"}
                                    </p>

                                    <div className="flex items-center gap-1 ">
                                        <Clock size={16} />
                                        <p className="text-sm opacity-80 cursor-pointer">{blog.readTime}</p>
                                    </div>
                                </div>

                                {/* blog title with link */}
                                <p className="text-xl font-semibold opacity-90 tracking-wide hover:text-violet-500 cursor-pointer">
                                    {blog.title}
                                </p>

                                {/* blog description */}
                                <p className="opacity-70 tracking-wide line-clamp-2 cursor-pointer">
                                    {blog.description}
                                </p>

                                {/* author and date info */}
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                                        <img
                                            src={blog.profile}
                                            className="w-6 h-6 rounded-full object-cover"
                                            alt={blog.username || "Author"}
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "https://ui-avatars.com/api/?name=" + (blog.username || "User");
                                            }}
                                        />
                                        <span className="text-sm cursor-pointer hover:text-violet-500">
                                            {blog.username}
                                        </span>
                                    </div>

                                    <span className="opacity-60 text-sm">•</span>

                                    <div className="flex items-center gap-2 ">
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
                    </Link>
                </AnimatedCard>
            ))}
        </div>
    );
}
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Filter, X, Users, RefreshCw, AlertCircle } from 'lucide-react';
import { AnimatedCard, AnimatedFade, AnimatedText } from '../components/AnimatedComponent';

export default function SearchFilters({ onApplyFilters }) {
    // state to toggle the visibility of filters
    const [showFilters, setShowFilters] = useState(false);

    // state to store the list of authors
    const [authors, setAuthors] = useState([]);

    // state to store the selected author
    const [selectedUsername, setSelectedUsername] = useState('');

    // state to store the selected sorting option
    const [sortBy, setSortBy] = useState('newest');

    // state to indicate loading status
    const [loading, setLoading] = useState(false);

    // state to store any error message
    const [error, setError] = useState(null);

    // fetch authors (usernames) when the component mounts
    const fetchAuthors = async () => {
        setLoading(true);
        setError(null);

        try {
            // fetch blogs to extract unique authors
            const blogsResponse = await axios.get(`${import.meta.env.VITE_SERVER_URL}/blogs`);
            const blogs = blogsResponse.data.data;

            // extract unique usernames from blogs
            const uniqueAuthors = [...new Set(blogs.map(blog => blog.username).filter(Boolean))];
            setAuthors(uniqueAuthors.sort()); // sort authors alphabetically
        } catch (error) {
            console.error('Error fetching authors:', error);
            setError('Failed to load authors. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAuthors();
    }, []);

    // handle applying filters
    const handleApplyFilters = () => {
        onApplyFilters({
            username: selectedUsername, // pass the selected username
            sort: sortBy // pass the selected sorting option
        });
    };

    // handle resetting filters
    const handleResetFilters = () => {
        setSelectedUsername(''); // reset selected username
        setSortBy('newest'); // reset sorting option to default
        onApplyFilters({}); // clear all filters
    };

    return (
        <AnimatedCard className="bg-white rounded-lg shadow-md mb-6" delay={0.2}>
            {/* header section  */}
            <div className="p-4 flex justify-between items-center border-b">
                <AnimatedText className="text-lg font-semibold" delay={0.3}>
                    Search Filters
                </AnimatedText>
                <AnimatedFade delay={0.3}>
                    <button
                        className="flex items-center gap-2 text-purple-600 hover:text-purple-800"
                        onClick={() => setShowFilters(!showFilters)}> {/* toggle filters visibility */}

                        {showFilters ? <X size={18} /> : <Filter size={18} />} {/* icon changes based on visibility */}
                        {showFilters ? 'Hide Filters' : 'Show Filters'} {/* text changes based on visibility */}
                    </button>
                </AnimatedFade>
            </div>

            {/* filters section */}
            {showFilters && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 space-y-4">

                    {/* filter by Author */}
                    <AnimatedFade delay={0.4}>
                        <div>
                            <label className="flex items-center gap-2 text-gray-700 mb-2">
                                <Users size={18} />
                                <span>Filter by Author</span>
                            </label>

                            {error ? (
                                <div className="flex flex-col space-y-2">
                                    <div className="flex items-center gap-2 text-red-600 text-sm">
                                        <AlertCircle size={16} />
                                        <span>{error}</span>
                                    </div>
                                    <button
                                        onClick={fetchAuthors}
                                        className="flex items-center justify-center gap-2 text-sm text-purple-600 hover:text-purple-800"
                                    >
                                        <RefreshCw size={16} />
                                        <span>Try Again</span>
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <select
                                        value={selectedUsername}
                                        onChange={(e) => setSelectedUsername(e.target.value)}
                                        disabled={loading} // disable dropdown while loading
                                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    >
                                        <option value="">All Authors</option>
                                        {loading ? (
                                            <option value="" disabled>Loading authors...</option>
                                        ) : (
                                            authors.map((author) => (
                                                <option key={author} value={author}>
                                                    {author}
                                                </option>
                                            ))
                                        )}
                                    </select>

                                    {loading && (
                                        <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                                            <div className="animate-spin h-4 w-4 border-b-2 border-purple-700 rounded-full"></div>
                                            <span>Loading authors...</span>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </AnimatedFade>

                    {/* sort By */}
                    <AnimatedFade delay={0.5}>
                        <div>
                            <label className="block text-gray-700 mb-2">Sort By</label>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                            >
                                {/* sorting Options */}
                                <option value="newest">Newest First</option>
                                <option value="oldest">Oldest First</option>
                                <option value="title_asc">Title (A-Z)</option>
                                <option value="title_desc">Title (Z-A)</option>
                            </select>
                        </div>
                    </AnimatedFade>

                    {/* action Buttons */}
                    <AnimatedFade delay={0.6}>
                        <div className="flex justify-end space-x-4 pt-2">
                            <button
                                onClick={handleResetFilters} // reset filters on click
                                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
                            >
                                Reset
                            </button>

                            <button
                                onClick={handleApplyFilters} // apply filters on click
                                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                            >
                                Apply Filters
                            </button>
                        </div>
                    </AnimatedFade>
                </motion.div>
            )}
        </AnimatedCard>
    );
}
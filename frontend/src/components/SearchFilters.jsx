import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Filter, X, Users } from 'lucide-react';

export default function SearchFilters({ onApplyFilters }) {
    const [showFilters, setShowFilters] = useState(false); // State to toggle the visibility of filters
    const [authors, setAuthors] = useState([]); // State to store the list of authors
    const [selectedUsername, setSelectedUsername] = useState(''); // State to store the selected author
    const [sortBy, setSortBy] = useState('newest'); // State to store the selected sorting option
    const [loading, setLoading] = useState(false); // State to indicate loading status

    // Fetch authors (usernames) when the component mounts
    useEffect(() => {
        const fetchAuthors = async () => {
            setLoading(true);
            try {
                // Fetch blogs to extract unique authors
                const blogsResponse = await axios.get(`${import.meta.env.VITE_SERVER_URL}/blogs`);
                const blogs = blogsResponse.data.data;

                // Extract unique usernames from blogs
                const uniqueAuthors = [...new Set(blogs.map(blog => blog.username))];
                setAuthors(uniqueAuthors.sort()); // Sort authors alphabetically
            } catch (error) {
                console.error('Error fetching authors:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAuthors();
    }, []);

    // Handle applying filters
    const handleApplyFilters = () => {
        onApplyFilters({
            username: selectedUsername, // Pass the selected username
            sort: sortBy // Pass the selected sorting option
        });
    };

    // Handle resetting filters
    const handleResetFilters = () => {
        setSelectedUsername(''); // Reset selected username
        setSortBy('newest'); // Reset sorting option to default
        onApplyFilters({}); // Clear all filters
    };

    return (
        <div className="bg-white rounded-lg shadow-md mb-6">
            {/* Header section  */}
            <div className="p-4 flex justify-between items-center border-b">
                <h3 className="text-lg font-semibold">Search Filters</h3>
                <button
                    className="flex items-center gap-2 text-purple-600 hover:text-purple-800"
                    onClick={() => setShowFilters(!showFilters)}> {/* Toggle filters visibility */}

                    {showFilters ? <X size={18} /> : <Filter size={18} />} {/* Icon changes based on visibility */}
                    {showFilters ? 'Hide Filters' : 'Show Filters'} {/* Text changes based on visibility */}
                </button>
            </div>

            {/* Filters section */}
            {showFilters && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 space-y-4">

                    {/* Filter by Author */}
                    <div>
                        <label className="flex items-center gap-2 text-gray-700 mb-2">
                            <Users size={18} />
                            <span>Filter by Author</span>
                        </label>

                        <select
                            value={selectedUsername}
                            onChange={(e) => setSelectedUsername(e.target.value)}
                            disabled={loading} // Disable dropdown while loading
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600">

                            <option value="">All Authors</option>
                            {authors.map((author) => (
                                <option key={author} value={author}>
                                    {author}
                                </option>
                            ))}
                        </select>

                        {loading && (
                            <div className="mt-2 text-sm text-gray-500">Loading authors...</div>
                        )}
                    </div>

                    {/* Sort By */}
                    <div>
                        <label className="block text-gray-700 mb-2">Sort By</label>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600">

                            {/* Sorting Options */}
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                            <option value="title_asc">Title (A-Z)</option>
                            <option value="title_desc">Title (Z-A)</option>
                        </select>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end space-x-4 pt-2">
                        <button
                            onClick={handleResetFilters} // Reset filters on click
                            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                            Reset
                        </button>

                        <button
                            onClick={handleApplyFilters} // Apply filters on click
                            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                            Apply Filters
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
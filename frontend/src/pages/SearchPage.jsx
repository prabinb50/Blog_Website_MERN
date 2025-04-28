import React, { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router';
import { ChevronRight, Search } from 'lucide-react';
import axios from 'axios';
import SearchResults from '../components/SearchResults';
import SearchFilters from '../components/SearchFilters';

export default function SearchPage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialQuery = queryParams.get('q') || '';

    const [searchQuery, setSearchQuery] = useState(initialQuery);
    const [filters, setFilters] = useState({});
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        if (e) e.preventDefault();

        if (!searchQuery.trim() && Object.keys(filters).length === 0) return;

        setLoading(true);
        setError(null);

        try {
            // Build query parameters
            const params = new URLSearchParams();
            if (searchQuery.trim()) params.append('query', searchQuery.trim());

            // Only username filtering
            if (filters.username) params.append('username', filters.username);
            if (filters.sort) params.append('sort', filters.sort);

            // Update URL with search query
            window.history.pushState(
                {},
                '',
                `${window.location.pathname}?${params.toString()}`
            );

            const response = await axios.get(
                `${import.meta.env.VITE_SERVER_URL}/blogs/search?${params.toString()}`
            );

            setResults(response.data.data);
        } catch (err) {
            console.error('Search error:', err);
            setError(err.response?.data?.message || 'An error occurred while searching');
        } finally {
            setLoading(false);
        }
    };

    // Handle filters
    const handleApplyFilters = (newFilters) => {
        setFilters(newFilters);
    };

    // Run search when filters change
    useEffect(() => {
        handleSearch();
    }, [filters]);

    // Initial search from URL params
    useEffect(() => {
        if (initialQuery) {
            handleSearch();
        }
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header section */}
            <div className="bg-[#f6f2ff]  pb-16">
                {/* Search input */}
                <div className="max-w-2xl mx-auto px-5 md:px-4 pt-8">
                    <form onSubmit={handleSearch} className="flex items-center">
                        <div className="relative flex-grow">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search for blogs..."
                                className="w-full p-4 pr-12 border border-gray-300 rounded-lg text-base bg-white focus:ring-2 focus:ring-purple-600 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-purple-600"
                            >
                                <Search size={20} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Main content */}
            <div className="w-[90%] sm:w-11/12 mx-auto md:px-4 pt-10 md:pt-15">
                {/* Filters */}
                <SearchFilters onApplyFilters={handleApplyFilters} />

                {/* Results count and active filters */}
                {!loading && (
                    <div className="mb-6">
                        {results.length > 0 ? (
                            <p className="text-gray-600">
                                Found {results.length} result{results.length !== 1 ? 's' : ''}
                                {searchQuery ? ` for "${searchQuery}"` : ''}
                            </p>
                        ) : null}

                        {/* Display active filters */}
                        {(searchQuery || filters.username) && (
                            <div className="mt-2 flex flex-wrap gap-2">
                                {searchQuery && (
                                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                                        Search: {searchQuery}
                                    </span>
                                )}
                                {filters.username && (
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                        Author: {filters.username}
                                    </span>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Results */}
            <div className='sm:w-11/12 mx-auto pb-8 md:pb-10'>
                <SearchResults
                    results={results}
                    loading={loading}
                    error={error}
                />
            </div>
        </div>
    );
}
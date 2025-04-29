import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Search } from 'lucide-react';
import axios from 'axios';
import SearchResults from '../components/SearchResults';
import SearchFilters from '../components/SearchFilters';

export default function SearchPage() {
    const location = useLocation(); // Get the current location object
    const queryParams = new URLSearchParams(location.search); // Parse the query parameters from the URL
    const initialQuery = queryParams.get('q') || ''; // Initial search query from URL

    const [searchQuery, setSearchQuery] = useState(initialQuery); // Search query input
    const [filters, setFilters] = useState({}); // Filters applied to the search
    const [results, setResults] = useState([]); // Search results
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(null); // Error state

    // Handle search functionality
    const handleSearch = async (e) => {
        if (e) e.preventDefault();

        // Prevent search if no query or filters are provided
        if (!searchQuery.trim() && Object.keys(filters).length === 0) return;

        setLoading(true);
        setError(null);

        try {
            // Build query parameters
            const params = new URLSearchParams();
            if (searchQuery.trim()) params.append('query', searchQuery.trim());

            // Add filters to query parameters
            if (filters.username) params.append('username', filters.username);
            if (filters.sort) params.append('sort', filters.sort);

            // Update URL with search query
            window.history.pushState(
                {},
                '',
                `${window.location.pathname}?${params.toString()}`
            );

            // Make API call to fetch search results
            const response = await axios.get(
                `${import.meta.env.VITE_SERVER_URL}/blogs/search?${params.toString()}`
            );

            setResults(response.data.data); // Update results state with fetched data
        } catch (err) {
            console.error('Search error:', err);
            setError(err.response?.data?.message || 'An error occurred while searching');
        } finally {
            setLoading(false);
        }
    };

    // Handle filter application
    const handleApplyFilters = (newFilters) => {
        setFilters(newFilters); // Update filters state
    };

    // Run search when filters change
    useEffect(() => {
        handleSearch();
    }, [filters]);

    // Perform initial search based on URL parameters
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
                    results={results} // Pass search results to the component
                    loading={loading} // Pass loading state to the component
                    error={error} // Pass error state to the component
                />
            </div>
        </div>
    );
}
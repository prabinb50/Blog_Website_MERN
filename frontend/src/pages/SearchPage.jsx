import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search, RefreshCw, AlertCircle, ChevronLeft } from 'lucide-react';
import axios from 'axios';
import SearchResults from '../components/SearchResults';
import SearchFilters from '../components/SearchFilters';
import { AnimatedText, AnimatedCard, AnimatedFade } from '../components/AnimatedComponent';

export default function SearchPage() {
    // get the current location object
    const location = useLocation();

    const navigate = useNavigate();

    // parse the query parameters from the URL
    const queryParams = new URLSearchParams(location.search);

    // initial search query from URL
    const initialQuery = queryParams.get('q') || '';

    // search query input
    const [searchQuery, setSearchQuery] = useState(initialQuery);

    // filters applied to the search
    const [filters, setFilters] = useState({});

    // search results 
    const [results, setResults] = useState([]);

    // loading state
    const [loading, setLoading] = useState(false);

    // error state
    const [error, setError] = useState(null);

    // track loading start time
    const [loadingStartTime, setLoadingStartTime] = useState(null);

    // handle search functionality
    const handleSearch = async (e) => {
        if (e) e.preventDefault();

        // prevent search if no query or filters are provided
        if (!searchQuery.trim() && Object.keys(filters).length === 0) return;

        // start loading and record start time
        setLoading(true);
        setLoadingStartTime(Date.now());
        setError(null);

        try {
            // build query parameters
            const params = new URLSearchParams();
            if (searchQuery.trim()) params.append('query', searchQuery.trim());

            // add filters to query parameters
            if (filters.username) params.append('username', filters.username);
            if (filters.sort) params.append('sort', filters.sort);

            // update URL with search query
            // window.history.pushState(
            //     {},
            //     '',
            //     `${window.location.pathname}?${params.toString()}`
            // );

            if (params.toString()) {
                navigate(`/search?${params.toString()}`, { replace: true });
            }

            // make API call to fetch search results
            const response = await axios.get(
                `${import.meta.env.VITE_SERVER_URL}/blogs/search?${params.toString()}`
            );

            setResults(response.data.data || []); // ensure we always have an array

            // calculate elapsed time and enforce minimum loading duration
            const elapsedTime = Date.now() - loadingStartTime;
            const minLoadingTime = 1000;

            if (elapsedTime < minLoadingTime) {
                setTimeout(() => {
                    setLoading(false);
                }, minLoadingTime - elapsedTime);
            } else {
                setLoading(false);
            }

        } catch (err) {
            console.error('Search error:', err);
            setError(err.response?.data?.message || 'An error occurred while searching');

            // even with errors, maintain minimum loading time
            const elapsedTime = Date.now() - loadingStartTime;
            const minLoadingTime = 1000;

            if (elapsedTime < minLoadingTime) {
                setTimeout(() => {
                    setLoading(false);
                }, minLoadingTime - elapsedTime);
            } else {
                setLoading(false);
            }
        }
    };

    // handle retrying a failed search
    const handleRetrySearch = () => {
        setError(null);
        handleSearch();
    };

    // handle filter application
    const handleApplyFilters = (newFilters) => {
        setFilters(newFilters); // update filters state
    };

    // run search when filters change
    useEffect(() => {
        handleSearch();
    }, [filters]);

    // perform initial search based on URL parameters
    useEffect(() => {
        if (initialQuery) {
            handleSearch();
        }
    }, []);

    // handler for back button
    const handleGoBack = () => {
        navigate(-1); // go back to the previous page
        setSearchQuery(''); // clear search query
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* header section */}
            <AnimatedFade className="bg-[#f6f2ff] pb-16" delay={0.1}>
                {/* search input */}
                <AnimatedCard className="max-w-2xl mx-auto px-5 md:px-4 pt-8" delay={0.2}>
                    <form onSubmit={handleSearch} className="flex items-center">
                        {/* Back button - only shown on screens below lg breakpoint */}
                        <button
                            type="button"
                            onClick={handleGoBack}
                            className="lg:hidden mr-3 p-2 rounded-full bg-white border border-gray-300 text-gray-600 hover:text-purple-600 hover:border-purple-300 transition-colors"
                            aria-label="Go back"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <div className="relative flex-grow">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search for blogs..."
                                className="w-full p-4 pr-12 border border-gray-300 rounded-lg text-base bg-white focus:ring-2 focus:ring-purple-600 focus:outline-none"
                                disabled={loading}
                            />

                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-purple-600"
                                disabled={loading}
                            >
                                {loading ? (
                                    <div className="animate-spin h-5 w-5 border-b-2 border-purple-700 rounded-full"></div>
                                ) : (
                                    <Search size={20} />
                                )}
                            </button>
                        </div>
                    </form>
                </AnimatedCard>
            </AnimatedFade>

            {/* main content */}
            <AnimatedFade className="w-[90%] sm:w-11/12 mx-auto md:px-4 pt-10 md:pt-15" delay={0.3}>
                {/* filters */}
                <SearchFilters onApplyFilters={handleApplyFilters} />

                {/* results count and active filters */}
                {!loading && !error && (
                    <AnimatedText className="mb-6" delay={0.4}>
                        {results.length > 0 ? (
                            <p className="text-gray-600">
                                Found {results.length} result{results.length !== 1 ? 's' : ''}
                                {searchQuery ? ` for "${searchQuery}"` : ''}
                            </p>
                        ) : null}

                        {/* display active filters */}
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

                                {filters.sort && filters.sort !== 'newest' && (
                                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                        Sort: {filters.sort.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                    </span>
                                )}
                            </div>
                        )}
                    </AnimatedText>
                )}

                {/* Centralized error message with retry option */}
                {error && !loading && (
                    <AnimatedFade className="mb-6" delay={0.4}>
                        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                            <div className="flex flex-col items-center gap-3">
                                <AlertCircle size={32} className="text-red-600" />
                                <h3 className="text-red-600 font-medium text-lg">Error: An error occurred while searching</h3>
                                <p className="text-gray-600 mb-4">Unable to fetch search results. Please try again.</p>
                                <button
                                    onClick={handleRetrySearch}
                                    className="flex items-center justify-center gap-2 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                                >
                                    <RefreshCw size={16} />
                                    <span>Retry</span>
                                </button>
                            </div>
                        </div>
                    </AnimatedFade>
                )}
            </AnimatedFade>

            {/* results - pass null for error to prevent showing duplicate error UI */}
            <AnimatedFade className='sm:w-11/12 mx-auto pb-8 md:pb-10' delay={0.5}>
                <SearchResults
                    results={results}
                    loading={loading}
                    error={null} // Pass null instead of error to avoid duplicate error messages
                />
            </AnimatedFade>
        </div>
    );
}
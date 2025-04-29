import React, { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router";

export default function SearchBar() {
  // State to manage the search query input
  const [searchQuery, setSearchQuery] = useState("");

  // useNavigate hook to programmatically navigate to a different route
  const navigate = useNavigate();

  // Function to handle the search form submission
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (searchQuery.trim()) {
      // If the search query is not empty, navigate to the search results page
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="bg-white rounded-md flex flex-col px-8 py-8 gap-8">
      {/* Section title */}
      <p className="text-2xl font-semibold opacity-80">Search</p>

      {/* Search form */}
      <form onSubmit={handleSearch} className="relative">
        {/* Input field for search query */}
        <input
          className="outline-none bg-gray-100 px-4 py-3 rounded-md border border-gray-300 w-full"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />

        {/* Submit button  */}
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-600">

          <Search size={18} />
        </button>
      </form>
    </div>
  );
}
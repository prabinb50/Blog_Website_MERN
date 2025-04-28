// import React from "react";

// export default function SearchBar() {
//   return (
//     <div className="bg-white rounded-md flex flex-col px-8 py-8 gap-8">
//       <p className="text-2xl font-semibold opacity-80">Search</p>
//       <input
//         className="outline-none bg-gray-100 px-4 py-3 rounded-md border border-gray-300 "
//         type="text"
//         placeholder="Search..."
//       />
//     </div>
//   );
// }

import React, { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="bg-white rounded-md flex flex-col px-8 py-8 gap-8">
      <p className="text-2xl font-semibold opacity-80">Search</p>
      <form onSubmit={handleSearch} className="relative">
        <input
          className="outline-none bg-gray-100 px-4 py-3 rounded-md border border-gray-300 w-full"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-600"
        >
          <Search size={18} />
        </button>
      </form>
    </div>
  );
}
import React from "react";

export default function SearchBar() {
  return (
    <div className="bg-white rounded-md flex flex-col px-8 py-8 gap-8">
      <p className="text-2xl font-semibold opacity-80">Search</p>
      <input
        className="outline-none bg-gray-100 px-4 py-3 rounded-md border border-gray-300 "
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}

import * as React from "react";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import { Search } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function SearchSection() {
  // State to control the open/close state of the drawer
  const [open, setOpen] = useState(false);

  // State to store the current search query
  const [searchQuery, setSearchQuery] = useState("");

  // Hook to programmatically navigate to different routes
  const navigate = useNavigate();

  // Function to toggle the drawer open or closed
  const toggleDrawer = (inOpen) => (event) => {
    // Prevent drawer toggle on Tab or Shift key press
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(inOpen);
  };

  // Handle the search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setOpen(false); // Close the drawer after submitting the search
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`); // Navigate to the search results page with the query
    }
  };

  return (
    // Container for the search button and drawer
    <Box sx={{ display: "flex" }}>
      {/* Search button to open the drawer */}
      <button
        className="border border-gray-200 rounded-full bg-gray-100 hover:bg-gray-200 p-1"
        onClick={toggleDrawer(true)}
        aria-label="Search">

        {/* Search icon */}
        <Search
          strokeWidth={1.5}
          className="opacity-80 cursor-pointer hover:text-violet-700 duration-300" />

      </button>
      {/* Drawer that slides from the top */}
      <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
        <Box>
          {/* Drawer content: search prompt and form */}
          <div className="flex flex-col items-center justify-center w-full mt-24 gap-8 pb-12">
            <p className="md:text-4xl text-3xl font-semibold">
              You Can Easily Search Here.
            </p>

            {/* Search form */}
            <form onSubmit={handleSearch} className="w-full max-w-xl">
              <div className="relative">
                {/* Input field for search query */}
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="outline-none border-b border-gray-300 px-4 py-2 font-semibold text-lg w-full tracking-wider"
                  placeholder="Search..."
                />

                {/* Submit button with search icon */}
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-purple-600">
                    
                  <Search size={20} />
                </button>
              </div>
            </form>
          </div>
        </Box>
      </Drawer>
    </Box>
  );
}
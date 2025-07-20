import * as React from "react";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import { Search, Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AnimatedFade, AnimatedText } from './AnimatedComponent';

export default function SearchSection() {
  // state to control the open/close state of the drawer
  const [open, setOpen] = useState(false);

  // state to store the current search query
  const [searchQuery, setSearchQuery] = useState("");

  // state to track if search is in progress
  const [isSearching, setIsSearching] = useState(false);

  // hook to programmatically navigate to different routes
  const navigate = useNavigate();

  // function to toggle the drawer open or closed
  const toggleDrawer = (inOpen) => (event) => {
    // prevent drawer toggle on Tab or Shift key press
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(inOpen);
  };

  // handle the search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);

      // Small delay to show loading state
      setTimeout(() => {
        setOpen(false); // close the drawer after submitting the search
        navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`); // navigate to the search results page with the query
        setIsSearching(false);
      }, 300);
    }
  };

  return (
    // container for the search button and drawer
    <Box sx={{ display: "flex" }}>
      {/* search button to open the drawer */}
      <AnimatedFade delay={0.2}>
        <button
          className="border border-gray-200 rounded-full bg-gray-100 hover:bg-gray-200 p-1"
          onClick={toggleDrawer(true)}
          aria-label="Search"
        >
          {/* search icon */}
          <Search
            strokeWidth={1.5}
            className="opacity-80 cursor-pointer hover:text-violet-700 duration-300"
          />
        </button>
      </AnimatedFade>

      {/* drawer that slides from the top */}
      <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
        <Box>
          {/* drawer content: search prompt and form */}
          <div className="flex flex-col items-center justify-center w-full mt-24 gap-8 pb-12">
            <AnimatedText className="md:text-4xl text-3xl font-semibold" delay={0.3}>
              You Can Easily Search Here.
            </AnimatedText>

            {/* search form */}
            <AnimatedFade className="w-full max-w-xl" delay={0.4}>
              <form onSubmit={handleSearch}>
                <div className="relative">
                  {/* input field for search query */}
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="outline-none border-b border-gray-300 px-4 py-2 font-semibold text-lg w-full tracking-wider"
                    placeholder="Search..."
                    disabled={isSearching}
                    autoFocus
                  />

                  {/* submit button with search icon or loading spinner */}
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-purple-600"
                    disabled={isSearching}
                  >
                    {isSearching ? (
                      <Loader size={20} className="animate-spin" />
                    ) : (
                      <Search size={20} />
                    )}
                  </button>
                </div>
              </form>

              {searchQuery && (
                <div className="text-sm text-gray-500 mt-2 px-4">
                  Press Enter to search for "{searchQuery}"
                </div>
              )}
            </AnimatedFade>
          </div>
        </Box>
      </Drawer>
    </Box>
  );
}
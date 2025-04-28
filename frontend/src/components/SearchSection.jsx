// import * as React from "react";
// import Box from "@mui/joy/Box";
// import Drawer from "@mui/joy/Drawer";
// import { Search } from "lucide-react";

// export default function SearchSection() {
//   const [open, setOpen] = React.useState(false);

//   const toggleDrawer = (inOpen) => (event) => {
//     if (
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }

//     setOpen(inOpen);
//   };

//   return (
//     <Box sx={{ display: "flex" }}>
//       <button
//         className="border border-gray-200 rounded-full bg-gray-100 hover:bg-gray-200 p-1"
//         onClick={toggleDrawer(true)}
//       >
//         <Search
//           strokeWidth={1.5}
//           className="opacity-80 cursor-pointer hover:text-violet-700 duration-300"
//         />
//       </button>
//       <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
//         <Box>
//           <div className="flex flex-col items-center justify-center w-full mt-24 gap-8">
//             <p className="md:text-4xl text-3xl font-semibold">
//               You Can Easily Search Here.
//             </p>
//             <input
//               type="text"
//               className="outline-none border-b border-gray-300 px-4 py-2 font-semibold text-lg w-88 md:w-100 tracking-wider"
//               placeholder="Search..."
//             />
//           </div>
//         </Box>
//       </Drawer>
//     </Box>
//   );
// }


import * as React from "react";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import { Search } from "lucide-react";
import { useNavigate } from "react-router";

export default function SearchSection() {
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const navigate = useNavigate();

  const toggleDrawer = (inOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(inOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Close the drawer
      setOpen(false);
      // Navigate to search page with query
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <button
        className="border border-gray-200 rounded-full bg-gray-100 hover:bg-gray-200 p-1"
        onClick={toggleDrawer(true)}
        aria-label="Search"
      >
        <Search
          strokeWidth={1.5}
          className="opacity-80 cursor-pointer hover:text-violet-700 duration-300"
        />
      </button>
      <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
        <Box>
          <div className="flex flex-col items-center justify-center w-full mt-24 gap-8 pb-12">
            <p className="md:text-4xl text-3xl font-semibold">
              You Can Easily Search Here.
            </p>
            <form onSubmit={handleSearch} className="w-full max-w-xl">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="outline-none border-b border-gray-300 px-4 py-2 font-semibold text-lg w-full tracking-wider"
                  placeholder="Search..."
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
        </Box>
      </Drawer>
    </Box>
  );
}
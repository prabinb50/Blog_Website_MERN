import * as React from "react";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import Button from "@mui/joy/Button";
import List from "@mui/joy/List";
import Divider from "@mui/joy/Divider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import { Search } from "lucide-react";

export default function SearchSection() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (inOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(inOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <button
        className="border border-gray-200 rounded-full bg-gray-100 hover:bg-gray-200 p-1"
        onClick={toggleDrawer(true)}
      >
        <Search
          strokeWidth={1.5}
          className="opacity-80 cursor-pointer hover:text-violet-700 duration-300"
        />
      </button>
      <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
        <Box
       
          
        >
            <div className="flex flex-col items-center justify-center w-full mt-24 gap-8">
                <p className="md:text-4xl text-3xl font-semibold">You Can Easily Search Here.</p>
                <input  type="text" className="outline-none border-b border-gray-300 px-4 py-2 font-semibold text-lg w-88 md:w-100" placeholder="Search..."/>
            </div>

 


        </Box>
      </Drawer>
    </Box>
  );
}

import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';

import ModalClose from '@mui/joy/ModalClose';
import { AlignJustify } from 'lucide-react';
import { NavLink } from 'react-router';


export default function MobileNavigation() {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment >
      <AlignJustify onClick={() => setOpen(true)} className="flex lg:hidden cursor-pointer" />
      <Drawer  open={open} onClose={() => setOpen(false)} sx={{ width: '100vw' }}>
      
        <Box
          className="flex  items-center justify-between px-4 py-2"
        >
            <img src="/header-logo1.png" alt="Vexon Logo" className="h-8 object-cover " />
         
          <ModalClose id="close-icon" sx={{ position: 'initial' }} />
        </Box>
        
        <div
          className='flex flex-col px-8 mt-8 gap-4'
        >
          
          <NavLink to="/" className="font-semibold text-lg  tracking-wider">Home</NavLink >
          <NavLink to="/blog" className="font-semibold text-lg  tracking-wider">Blog</NavLink >
          <NavLink to="/single-post" className="font-semibold text-lg  tracking-wider">Single Post</NavLink >
          <NavLink to="/categories" className="font-semibold text-lg  tracking-wider">Categories</NavLink >
          <NavLink to="/contact" className="font-semibold text-lg  tracking-wider">Contact Us</NavLink >        </div>
      </Drawer>
    </React.Fragment>
  );
}

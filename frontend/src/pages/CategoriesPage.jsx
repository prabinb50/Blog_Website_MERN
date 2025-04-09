import { ChevronRight } from 'lucide-react';
import React from 'react';
import { Link, NavLink } from 'react-router';
import { motion } from 'framer-motion';

export default function CategoriesPage() {

    // Array of category objects and each containing a display name and image path
    const categories = [
        { name: "Social Media", image: "/categories-image1.png" },
        { name: "Digital Marketing", image: "/categories-image2.png" },
        { name: "UI/UX", image: "/categories-image3.png" },
        { name: "Business", image: "/categories-image4.png" },
        { name: "Technology", image: "/categories-image5.png" },
        { name: "Travel", image: "/categories-image6.png" },
        { name: "Trends", image: "/categories-image7.png" },
        { name: "Startup", image: "/categories-image8.png" },
        { name: "News", image: "/categories-image9.png" },
    ];

    return (
        <div className="bg-gray-50">
            {/* Light purple background for title section */}
            <div className="bg-[#f6f2ff]">
                <div className="flex items-center justify-center pt-20">
                    <NavLink to={"/"} className="cursor-pointer">
                        Home
                    </NavLink>
                    <ChevronRight />
                    <p>Blog</p>
                    <ChevronRight />
                    <p className="font-bold">Categories</p>
                </div>

                {/* Main page title */}
                <p className="text-center font-bold text-6xl pb-20">Categories</p>
            </div>

            {/* Display categories in a grid */}
            <div className="grid grid-cols-3 gap-8 w-11/12 mx-auto pt-20 text-center space-y-4 pb-20">
                {categories.map((category, index) => (
                    <motion.div key={index} className="space-y-2 hover:scale-105 transition-all duration-300" whileHover={{
                        scale: 1,
                        rotate: 2,
                    }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {/* Category image */}
                        <img src={category.image} alt="" className="rounded-md object-cover" />
                        {/* Category name links to blog page */}
                        <Link to={"/blog"} className="text-3xl font-semibold">{category.name}</Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
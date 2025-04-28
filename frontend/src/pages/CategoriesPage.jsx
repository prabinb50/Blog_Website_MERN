import { ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function CategoriesPage() {

    // state to store the categories data   
    const [categories, setCategories] = useState(null);

    // Fetch categories from the backend 
    const fetchCategories = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/categories`);
            // console.log(response.data.data);
            setCategories(response.data.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    // call the fetchCategories function
    useEffect(() => {
        fetchCategories();
    }, []);

    // Array of category objects and each containing a display name and image path
    // const categories = [
    //     { name: "Social Media", image: "/categories-image1.png" },
    //     { name: "Digital Marketing", image: "/categories-image2.png" },
    //     { name: "UI/UX", image: "/categories-image3.png" },
    //     { name: "Business", image: "/categories-image4.png" },
    //     { name: "Technology", image: "/categories-image5.png" },
    //     { name: "Travel", image: "/categories-image6.png" },
    //     { name: "Trends", image: "/categories-image7.png" },
    //     { name: "Startup", image: "/categories-image8.png" },
    //     { name: "News", image: "/categories-image9.png" },
    // ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Light purple background for title section */}
            <div className="bg-[#f6f2ff] w-full">
                <div className="flex items-center justify-center pt-20 pb-2 overflow-x-auto px-4">
                    <NavLink to={"/"} className="cursor-pointer ">
                        Home
                    </NavLink>
                    <ChevronRight className="w-5 " />
                    <p className="whitespace-nowrap">Blog</p>
                    <ChevronRight className="w-5" />
                    <p className="font-bold whitespace-nowrap">Categories</p>
                </div>

                {/* Main page title */}
                <p className="text-center font-bold text-5xl md:text-6xl pb-20 px-4">Categories</p>
            </div>

            {/* Display categories in grid */}
            <div className="w-[90%] sm:w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-15 md:pt-20 text-center pb-15 md:pb-20 space-y-0 md:space-y-4 ">
                {categories?.map((category, index) => (
                    <motion.div key={index} className="space-y-2 hover:scale-105 transition-all duration-300" whileHover={{
                        scale: 1,
                        rotate: window.innerWidth > 768 ? 2 : 1,
                    }}
                        transition={{ type: "spring", stiffness: window.innerWidth > 768 ? 300 : 200, damping: 15 }}
                        // Accessibility improvement - better focus states
                        whileFocus={{ scale: 1.02 }}>

                        {/* Category image */}
                        <img src={category.image} alt={`${category.name} category`} className="rounded-md object-cover w-full " loading="lazy" />

                        {/* Category name links to blog page */}
                        <Link to={"/blog"} className="text-3xl font-semibold block hover:text-purple-700 transition-colors">{category.name}</Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
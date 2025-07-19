import { ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { AnimatedText, AnimatedCard, AnimatedFade } from '../components/AnimatedComponent';
import { Link, NavLink } from 'react-router';

export default function CategoriesPage() {
    // state to store the categories data   
    const [categories, setCategories] = useState(null);

    // state to handle loading status
    const [loading, setLoading] = useState(true);

    // state to handle error
    const [error, setError] = useState(null);

    // fetch categories from backend 
    const fetchCategories = async () => {
        try {
            setLoading(true);
            const startTime = Date.now();

            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/categories`);
            setCategories(response.data.data);

            const elapsedTime = Date.now() - startTime;
            const minLoadingTime = 1000;

            if (elapsedTime < minLoadingTime) {
                setTimeout(() => {
                    setLoading(false);
                }, minLoadingTime - elapsedTime);
            } else {
                setLoading(false);
            }
        } catch (error) {
            console.error("Error fetching categories:", error);
            setError("Failed to load categories. Please try again later");
            setLoading(false);
        }
    };

    // call the fetchCategories function
    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="bg-[#f6f2ff] w-full">
                <AnimatedFade className="flex items-center justify-center pt-20 pb-2 overflow-x-auto px-4" delay={0.2}>
                    <NavLink to={"/"} className="cursor-pointer ">
                        Home
                    </NavLink>

                    <ChevronRight className="w-5 " />

                    <p className="whitespace-nowrap">Blog</p>

                    <ChevronRight className="w-5" />

                    <p className="font-bold whitespace-nowrap">Categories</p>
                </AnimatedFade>

                {/* main page title*/}
                <AnimatedText className="text-center font-bold text-5xl md:text-6xl pb-20 px-4" delay={0.3}>
                    Categories
                </AnimatedText>
            </div>

            {/* display categories */}
            <div className="w-[90%] sm:w-11/12 mx-auto pt-13 sm:pt-16 md:pt-20 pb-13 sm:pb-16 md:pb-20">
                {loading ? (
                    // loading placeholders
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-center">
                        {Array(6).fill().map((_, index) => (
                            <div key={`placeholder-${index}`} className="animate-pulse space-y-3">
                                <div className="bg-gray-200 rounded-md h-56 w-full"></div>
                                <div className="h-6 bg-gray-200 rounded w-2/3 mx-auto"></div>
                            </div>
                        ))}
                    </div>
                ) : error ? (
                    // error state with retry button
                    <div className="text-center py-10">
                        <AnimatedText className="text-red-500 text-lg">
                            {error}
                        </AnimatedText>
                        <button
                            onClick={fetchCategories}
                            className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                        >
                            Try Again
                        </button>
                    </div>
                ) : (
                    // category cards 
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-center space-y-0 md:space-y-4">
                        {categories?.map((category, index) => (
                            <AnimatedCard
                                key={category._id || index}
                                className="space-y-2 hover:scale-105 transition-all duration-300"
                                delay={0.1 + (index % 6) * 0.1}
                            >
                                <motion.div
                                    whileHover={{
                                        scale: 1,
                                        rotate: window.innerWidth > 768 ? 2 : 1,
                                    }}
                                    transition={{ type: "spring", stiffness: window.innerWidth > 768 ? 300 : 200, damping: 15 }}
                                    whileFocus={{ scale: 1.02 }}>

                                    {/* category image */}
                                    <img
                                        src={category.image}
                                        alt={`${category.name} category`}
                                        className="rounded-md object-cover w-full"
                                        loading="lazy"
                                    />

                                    {/* category name */}
                                    <Link to={"/blog"} className="text-3xl font-semibold block hover:text-purple-700 transition-colors">{category.name}</Link>
                                </motion.div>
                            </AnimatedCard>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
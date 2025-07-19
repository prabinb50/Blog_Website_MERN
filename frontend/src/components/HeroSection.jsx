import React, { useEffect, useRef, useState } from "react";
import heroImage from "../../public/hero1-image.png";
import SplitTextUsage from "./TextAnimations/SplitTextUsage";
import BlurTextUsage from "./TextAnimations/BlurTextUsage";
import { AnimatedFade, AnimatedCard, AnimatedText } from "./AnimatedComponent";
import { motion } from "framer-motion";
import { gsap } from "gsap";

export default function HeroSection() {
  const emailInputRef = useRef(null);
  const imageRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  // gsap animation for the email input sliding effect
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (emailInputRef.current) {
      tl.fromTo(
        emailInputRef.current,
        { width: 0, opacity: 0 },
        { width: "100%", opacity: 1, duration: prefersReducedMotion ? 0.5 : 2.0, delay: 1.0 }
      );
    }

    // floating animation for the image
    if (imageRef.current && !prefersReducedMotion) {
      gsap.to(imageRef.current, {
        y: 15,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }

    return () => {
      tl.kill();
    };
  }, []);

  // variants for framer motion animations
  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const imageVariants = {
    initial: { scale: 0.8, opacity: 0, rotate: -5 },
    animate: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: [0.6, 0.01, -0.05, 0.95]
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { delay: 1.2, duration: 0.5 } },
    hover: {
      scale: 1.05,
      backgroundColor: "#000000",
      transition: { duration: 0.2, yoyo: Infinity }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.div
      className="h-full w-full mt-6 sm:mt-12 flex"
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      <div className="w-11/12 max-w-7xl mx-auto bg-purple-100 flex flex-col rounded-md p-4 sm:p-6 md:p-12 md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 relative overflow-hidden">
        {/* image section  */}
        <AnimatedCard
          className="w-full md:w-1/2 flex items-center justify-center"
          delay={0.2}
        >
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            ref={imageRef}
            className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl"
          >
            {!imageLoaded && (
              <div className="aspect-square w-full bg-purple-200/50 rounded-md animate-pulse"></div>
            )}
            <img
              src={heroImage}
              alt="Hero illustration showing social media concept"
              className={`w-full aspect-square object-contain relative z-10 cursor-pointer ${!imageLoaded ? 'opacity-0' : 'opacity-100'}`}
              loading="lazy"
              width={500}
              height={500}
              onLoad={() => setImageLoaded(true)}
            />

            {/* shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 z-20"
              animate={{
                opacity: [0, 0.5, 0],
                left: ["-100%", "100%", "100%"]
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 5
              }}
            />
          </motion.div>
        </AnimatedCard>

        {/* content section */}
        <div className="flex flex-col w-full md:w-1/2 gap-4 sm:gap-6 md:gap-7 mt-6 md:mt-0 ">
          <AnimatedFade delay={0.3} className="">
            <SplitTextUsage />
          </AnimatedFade>

          <AnimatedText
            className="text-gray-600 opacity-80 sm:text-base md:text-lg tracking-wide lg:leading-8"
            delay={0.4}
          >
            Social media is more than just a platform—it's a powerful tool for
            building connections, amplifying your brand, and driving growth. At
            Vexon, we provide insights and strategies to help you stand out in
            the ever-evolving social media landscape.
          </AnimatedText>

          {/* email input section */}
          <div className="flex flex-col relative justify-center w-full" ref={emailInputRef}>
            <motion.input
              type="text"
              className="w-full outline-none h-12 sm:h-14 md:h-16 flex items-center px-4 py-2 bg-white rounded-full sm:rounded-4xl"
              placeholder="Enter Your Email"
              aria-label="Email subscription"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              whileFocus={{
                boxShadow: "0 0 0 3px rgba(124, 58, 237, 0.4)",
                transition: { duration: 0.2 }
              }}
            />

            <motion.button
              className="absolute flex items-center right-2 cursor-pointer px-2 py-1 sm:px-3 sm:py-1.5 md:px-6 md:py-3 font-bold bg-violet-800 text-white rounded-full sm:rounded-4xl text-sm sm:text-base"
              aria-label="Get started"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="whitespace-nowrap">Get Started</span>
            </motion.button>
          </div>

          <AnimatedFade delay={0.6}>
            <BlurTextUsage />
          </AnimatedFade>
        </div>
      </div>
    </motion.div>
  );
}
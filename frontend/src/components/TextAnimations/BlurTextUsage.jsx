import React from 'react'
import BlurText from './BlurText';

export default function BlurTextUsage() {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };
    return (
        <div>
            <BlurText
                text="❊ Connect, engage, & inspire—social media success starts here."
                delay={250}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="opacity-90 md:text-base text-sm"
            />
        </div>
    )
}

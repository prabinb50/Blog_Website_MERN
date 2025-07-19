import React from 'react'
import SplitText from './SplitText';

export default function SplitTextUsage() {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    return (
        <div>
            <SplitText
                text="Unlocking The Secrets To Social Media Success"
                className="font-bold text-4xl sm:text-4xl lg:text-5xl  xl:leading-16 opacity-80"
                delay={70}
                duration={0.5}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign=""
                onLetterAnimationComplete={handleAnimationComplete}
            />
        </div>
    )
}

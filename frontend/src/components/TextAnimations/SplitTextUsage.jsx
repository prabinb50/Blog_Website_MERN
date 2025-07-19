import React, { useEffect, useState } from 'react'
import SplitText from './SplitText';

export default function SplitTextUsage() {
    const [deviceSpecificClass, setDeviceSpecificClass] = useState("text-3xl md:text-5xl");
    const [displayText, setDisplayText] = useState("Social Media Mastery");
    const [multiLine, setMultiLine] = useState(false);

    useEffect(() => {
        const checkDeviceSize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            // for 1024 * 1366
            if (width >= 1020 && width <= 1030 && height >= 1360 && height <= 1370) {
                setDeviceSpecificClass("text-4xl");
                setDisplayText("Social Media Mastery");
                setMultiLine(false);
            }

            // for 360 * 740
            else if (width >= 355 && width <= 365 && height >= 735 && height <= 745) {
                setDeviceSpecificClass("text-4xl");
                setMultiLine(true);
            }

            // for 344 * 882 dimensions
            // else if (width >= 344 && height >= 882) {
            //     setDeviceSpecificClass("text-4xl");
            //     setMultiLine(true);
            // }


            // for 912 * 1366 and for 1024 * 600
            else if ((width >= 905 && width <= 920 && height >= 1360 && height <= 1370) ||
                (width >= 1020 && width <= 1030 && height >= 595 && height <= 605)) {
                setDeviceSpecificClass("text-5xl");
                setMultiLine(true);
            }
            // Default responsive behavior
            else {
                setDeviceSpecificClass("text-3xl md:text-5xl");
                setDisplayText("Social Media Mastery");
                setMultiLine(false);
            }
        };

        // Initial check
        checkDeviceSize();

        // Add resize listener
        window.addEventListener('resize', checkDeviceSize);

        // Cleanup
        return () => window.removeEventListener('resize', checkDeviceSize);
    }, []);

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    if (multiLine) {
        return (
            <div className="flex flex-col">
                <div className="w-full">
                    <SplitText
                        text="Social Media"
                        className={`font-bold ${deviceSpecificClass} opacity-80`}
                        delay={100}
                        duration={0.5}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"

                    />
                </div>
                <div className="w-full mt-1 ">
                    <SplitText
                        text="Mastery"
                        className={`font-bold ${deviceSpecificClass} opacity-80`}
                        delay={100}
                        duration={0.5}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                </div>
            </div>
        )
    }

    return (
        <div>
            <SplitText
                text={displayText}
                className={`font-bold ${deviceSpecificClass} opacity-80`}
                delay={100}
                duration={0.5}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                onLetterAnimationComplete={handleAnimationComplete}
            />
        </div>
    )
}
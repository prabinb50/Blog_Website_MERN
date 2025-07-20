import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function RouteScrollReset() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // if there is a hash in the URL (like #section-id) then don't scroll to top
        if (!hash) {
            // use smooth scrolling for a better user experience
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant'
            });
        } else {
            // if there is a hash, scroll to that element instead
            setTimeout(() => {
                const element = document.getElementById(hash.substring(1));
                if (element) {
                    element.scrollIntoView();
                }
            }, 0);
        }
    }, [pathname, hash]); // Re-run when the route or hash changes

    return null; // this component doesn't render anything
}
import React, { useState, useEffect } from "react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            onClick={scrollToTop}
            className={`scroll-to-top-container ${isVisible ? "visible" : ""}`}
            aria-label="Scroll to top"
        >
            <button className="premium-scroll-btn">
                <i className="fa-solid fa-chevron-up"></i>
            </button>
        </div>
    );
}

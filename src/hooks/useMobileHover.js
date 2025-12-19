import { useEffect } from "react";

export default function useMobileHover() {
    useEffect(() => {
        // Only run on mobile/tablet devices
        if (window.innerWidth > 991) return;

        const selectors = [
            ".project-card",
            ".premium-skill-card",
            ".premium-contact-card",
            ".premium-cta-btn"
        ];

        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -20% 0px", // Active when in the middle 60% of the screen
            threshold: 0.1 // Trigger as soon as it enters this zone
        };

        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("mobile-hover-active");
                } else {
                    entry.target.classList.remove("mobile-hover-active");
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        const elements = document.querySelectorAll(selectors.join(","));
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
            observer.disconnect();
        };
    }, []); // Run once on mount
}

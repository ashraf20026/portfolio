import { useEffect, useRef, useState } from 'react';

export default function useNavbarEffects(sectionIds = []) {
    const navRef = useRef(null);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        // 1. Mouse Glow Effect Logic
        const handleMouseMove = (e) => {
            const rect = nav.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            nav.style.setProperty('--mouse-x', `${x}px`);
            nav.style.setProperty('--mouse-y', `${y}px`);
            nav.style.setProperty('--glow-opacity', '1');
        };

        const handleMouseLeave = () => {
            nav.style.setProperty('--glow-opacity', '0');
        };

        // 2. Scroll Spy Logic for Active State
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100; // Offset for header height

            for (const id of sectionIds) {
                const element = document.getElementById(id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        // Listeners
        nav.addEventListener('mousemove', handleMouseMove);
        nav.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('scroll', handleScroll);

        // Initial check
        handleScroll();

        return () => {
            nav.removeEventListener('mousemove', handleMouseMove);
            nav.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sectionIds]);

    return { navRef, activeSection };
}

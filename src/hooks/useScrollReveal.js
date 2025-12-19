import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    const reveal = document.querySelectorAll(".reveal");
    const handleScroll = () => {
      reveal.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) el.classList.add("active");
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { lenisStore } from "./lenisStore";

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const hero = document.getElementById("top");
            const limit = hero ? hero.offsetHeight : window.innerHeight;
            setVisible(window.scrollY > limit);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <button
            type="button"
            data-testid="back-to-top"
            aria-label="Volver arriba"
            onClick={() =>
                lenisStore.current?.scrollTo(0, {
                    duration: 0.6,
                    easing: (t) => 1 - Math.pow(1 - t, 3),
                })
            }
            className={`fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink ring-1 ring-line transition-opacity duration-200 ease-out after:absolute after:-inset-1 hover:text-arcblue ${
                visible ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
        >
            <ArrowUp className="h-4 w-4" strokeWidth={1.5} />
        </button>
    );
};

export default BackToTop;

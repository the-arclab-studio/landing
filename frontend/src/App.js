import { useEffect, useState } from "react";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
import { LangContext } from "@/components/arclab/LangContext";
import { COPY } from "@/components/arclab/copy";
import Intro, { introSeen } from "@/components/arclab/Intro";
import Header from "@/components/arclab/Header";
import Hero from "@/components/arclab/Hero";
import Strip from "@/components/arclab/Strip";
import Problema from "@/components/arclab/Problema";
import Solucion from "@/components/arclab/Solucion";
import Metodo from "@/components/arclab/Metodo";
import Rotador from "@/components/arclab/Rotador";
import Cambios from "@/components/arclab/Cambios";
import Planes from "@/components/arclab/Planes";
import Prueba from "@/components/arclab/Prueba";
import Sobre from "@/components/arclab/Sobre";
import Faq from "@/components/arclab/Faq";
import Contacto from "@/components/arclab/Contacto";
import Footer from "@/components/arclab/Footer";
import FloatingWhatsApp from "@/components/arclab/FloatingWhatsApp";

export default function App() {
    const [showIntro, setShowIntro] = useState(() => !introSeen());

    useEffect(() => {
        const lenis = new Lenis({ lerp: 0.09 });
        let raf;
        const loop = (time) => {
            lenis.raf(time);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);

        // Scroll paginado por secção (só desktop)
        let animating = false;
        let unlockTimer;
        const mql = window.matchMedia("(min-width: 1024px)");

        const getStops = () => {
            const vh = window.innerHeight;
            const stops = [];
            document
                .querySelectorAll("main section, footer")
                .forEach((el) => {
                    const top = el.getBoundingClientRect().top + window.scrollY;
                    stops.push(top);
                    const bottom = top + el.offsetHeight - vh;
                    if (bottom > top + 10) stops.push(bottom);
                });
            return [...new Set(stops)].sort((a, b) => a - b);
        };

        const onWheel = (e) => {
            if (!mql.matches || e.ctrlKey) return;
            e.preventDefault();
            e.stopImmediatePropagation();
            if (animating || Math.abs(e.deltaY) < 8) return;
            if (document.body.style.overflow === "hidden") return;
            const y = window.scrollY;
            const dir = e.deltaY > 0 ? 1 : -1;
            const stops = getStops();
            const target =
                dir > 0
                    ? stops.find((s) => s > y + 4)
                    : [...stops].reverse().find((s) => s < y - 4);
            if (target === undefined) return;
            animating = true;
            lenis.scrollTo(target, {
                duration: 1.1,
                easing: (t) => 1 - Math.pow(1 - t, 4),
                onComplete: () => {
                    clearTimeout(unlockTimer);
                    unlockTimer = setTimeout(() => {
                        animating = false;
                    }, 120);
                },
            });
        };

        window.addEventListener("wheel", onWheel, {
            passive: false,
            capture: true,
        });

        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
            window.removeEventListener("wheel", onWheel, { capture: true });
            clearTimeout(unlockTimer);
        };
    }, []);

    return (
        <LangContext.Provider
            value={{ lang: "es", setLang: () => {}, t: COPY.es }}
        >
            <div className="grain bg-white text-ink">
                <AnimatePresence>
                    {showIntro && <Intro onDone={() => setShowIntro(false)} />}
                </AnimatePresence>
                <Header />
                <main>
                    <Hero />
                    <div className="relative">
                        <Strip />
                        <Problema />
                        <Solucion />
                        <Metodo />
                        <Rotador />
                    </div>
                    <Cambios />
                    <Planes />
                    <Prueba />
                    <Sobre />
                    <Faq />
                    <Contacto />
                </main>
                <Footer />
                <FloatingWhatsApp />
            </div>
        </LangContext.Provider>
    );
}

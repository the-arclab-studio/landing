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

        // Snap suave por proximidade (só desktop): scroll livre e fluido;
        // quando paras mesmo na fronteira entre secções, um pequeno
        // "empurrão" assenta a secção seguinte/anterior.
        let snapTimer;
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

        const onScroll = () => {
            if (!mql.matches) return;
            clearTimeout(snapTimer);
            snapTimer = setTimeout(() => {
                if (document.body.style.overflow === "hidden") return;
                const y = window.scrollY;
                const thr = Math.min(
                    180,
                    Math.max(100, window.innerHeight * 0.15)
                );
                let nearest = null;
                let dist = Infinity;
                for (const s of getStops()) {
                    const d = Math.abs(s - y);
                    if (d < dist) {
                        dist = d;
                        nearest = s;
                    }
                }
                if (nearest !== null && dist > 2 && dist <= thr) {
                    lenis.scrollTo(nearest, {
                        duration: 0.7,
                        easing: (t) => 1 - Math.pow(1 - t, 3),
                    });
                }
            }, 180);
        };

        lenis.on("scroll", onScroll);

        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
            clearTimeout(snapTimer);
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

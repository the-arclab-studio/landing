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
        const lenis = new Lenis({ lerp: 0.14 });
        let raf;
        const loop = (time) => {
            lenis.raf(time);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);

        // Empurrão magnético (só desktop, só a descer): scroll livre e
        // direto; quando a secção seguinte começa a aparecer (~250px antes
        // da fronteira), a página agarra-a e enquadra-a suavemente.
        const mql = window.matchMedia("(min-width: 1024px)");
        let pushing = false;
        let safety;

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

        const onScroll = (e) => {
            if (!mql.matches || pushing) return;
            if (document.body.style.overflow === "hidden") return;
            if (e.direction !== 1) return;
            const y = window.scrollY;
            const thr = Math.min(250, window.innerHeight * 0.28);
            const next = getStops().find((s) => s > y + 2);
            if (next === undefined || next - y > thr) return;
            pushing = true;
            lenis.scrollTo(next, {
                duration: 0.7,
                easing: (t) => 1 - Math.pow(1 - t, 3),
                onComplete: () => {
                    clearTimeout(safety);
                    pushing = false;
                },
            });
            clearTimeout(safety);
            safety = setTimeout(() => {
                pushing = false;
            }, 1000);
        };

        const onWheel = (e) => {
            if (mql.matches && pushing && !e.ctrlKey) {
                e.preventDefault();
                e.stopImmediatePropagation();
            }
        };

        lenis.on("scroll", onScroll);
        window.addEventListener("wheel", onWheel, {
            passive: false,
            capture: true,
        });

        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
            window.removeEventListener("wheel", onWheel, { capture: true });
            clearTimeout(safety);
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

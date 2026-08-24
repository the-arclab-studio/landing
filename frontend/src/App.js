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
import BackToTop from "@/components/arclab/BackToTop";
import { lenisStore } from "@/components/arclab/lenisStore";

export default function App() {
    const [showIntro, setShowIntro] = useState(() => !introSeen());

    useEffect(() => {
        const lenis = new Lenis({ lerp: 0.14 });
        lenisStore.current = lenis;
        let raf;
        const loop = (time) => {
            lenis.raf(time);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);

        // Empurrão magnético (só desktop, só a descer, sem reduced-motion):
        // quando o topo da secção seguinte entra nos últimos 25% do
        // viewport, a página enquadra-a. A roda NUNCA é bloqueada — se o
        // utilizador faz scroll durante o empurrão, este cancela-se.
        const mql = window.matchMedia("(min-width: 1024px)");
        const rmq = window.matchMedia("(prefers-reduced-motion: reduce)");
        let pushing = false;
        let cooldownUntil = 0;
        let safety;

        const getStops = () =>
            [...document.querySelectorAll("main section")]
                .filter((el) => el.dataset.testid !== "cambios-section")
                .map((el) => el.getBoundingClientRect().top + window.scrollY)
                .sort((a, b) => a - b);

        const onScroll = (e) => {
            if (!mql.matches || rmq.matches || pushing) return;
            if (performance.now() < cooldownUntil) return;
            if (document.body.style.overflow === "hidden") return;
            if (e.direction !== 1) return;
            const y = window.scrollY;
            const zone = window.innerHeight * 0.75;
            const next = getStops().find((s) => s > y + 2);
            if (next === undefined || next - y > zone) return;
            pushing = true;
            lenis.scrollTo(next, {
                duration: 0.6,
                easing: (t) => 1 - Math.pow(1 - t, 3),
                onComplete: () => {
                    clearTimeout(safety);
                    pushing = false;
                },
            });
            clearTimeout(safety);
            safety = setTimeout(() => {
                pushing = false;
            }, 900);
        };

        const onWheel = (e) => {
            if (!mql.matches) return;
            if (e.deltaY < 0) cooldownUntil = 0;
            if (pushing) {
                pushing = false;
                clearTimeout(safety);
                lenis.scrollTo(window.scrollY, { immediate: true, force: true });
                cooldownUntil = performance.now() + 900;
            }
        };

        lenis.on("scroll", onScroll);
        window.addEventListener("wheel", onWheel, { passive: true });

        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
            lenisStore.current = null;
            window.removeEventListener("wheel", onWheel);
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
                        <Metodo />
                        <Solucion />
                    </div>
                    <Cambios />
                    <Planes />
                    <Prueba />
                    <Sobre />
                    <Faq />
                    <Contacto />
                </main>
                <Footer />
                <BackToTop />
            </div>
        </LangContext.Provider>
    );
}

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
                    const h = el.offsetHeight;
                    stops.push({ pos: top, h });
                    const bottom = top + h - vh;
                    if (bottom > top + 10) stops.push({ pos: bottom, h: null });
                });
            return stops.sort((a, b) => a.pos - b.pos);
        };

        const onScroll = (e) => {
            if (!mql.matches || pushing) return;
            if (document.body.style.overflow === "hidden") return;
            if (e.direction !== 1) return;
            const y = window.scrollY;
            const vh = window.innerHeight;
            const stops = getStops();
            const i = stops.findIndex((s) => s.pos > y + 2);
            if (i === -1) return;
            const { pos, h } = stops[i];
            const prev = i > 0 ? stops[i - 1].pos : 0;
            // dispara quando ~20% da secção de baixo já está visível
            // (paragem de fundo de secção alta: janela fixa de 250px),
            // mas nunca antes de percorrer ~45% da secção atual — protege
            // secções curtas (ex.: bloco preto) de serem saltadas.
            const zone =
                h === null
                    ? 250
                    : Math.min(
                          vh - 0.2 * Math.min(h, vh),
                          Math.max(250, 0.55 * (pos - prev))
                      );
            if (pos - y > zone) return;
            pushing = true;
            lenis.scrollTo(pos, {
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

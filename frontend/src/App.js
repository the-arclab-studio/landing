import { useEffect, useState } from "react";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
import { LangContext } from "@/components/arclab/LangContext";
import { COPY } from "@/components/arclab/copy";
import Intro, { introSeen } from "@/components/arclab/Intro";
import Header from "@/components/arclab/Header";
import Hero from "@/components/arclab/Hero";
import Marquee from "@/components/arclab/Marquee";
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
        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
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
                    <Marquee />
                    <Problema />
                    <Solucion />
                    <Metodo />
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

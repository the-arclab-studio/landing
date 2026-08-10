import { useEffect, useState } from "react";
import Lenis from "lenis";
import { LangContext } from "@/components/arclab/LangContext";
import { COPY } from "@/components/arclab/copy";
import Header from "@/components/arclab/Header";
import Hero from "@/components/arclab/Hero";
import Marquee from "@/components/arclab/Marquee";
import Enfoque from "@/components/arclab/Enfoque";
import PhotoSection from "@/components/arclab/PhotoSection";
import Planes from "@/components/arclab/Planes";
import Extras from "@/components/arclab/Extras";
import Contacto from "@/components/arclab/Contacto";
import Footer from "@/components/arclab/Footer";
import FloatingWhatsApp from "@/components/arclab/FloatingWhatsApp";

export default function App() {
    const [lang, setLang] = useState("es");

    useEffect(() => {
        const lenis = new Lenis({ lerp: 0.09 });
        let raf;
        const loop = (t) => {
            lenis.raf(t);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
        };
    }, []);

    return (
        <LangContext.Provider value={{ lang, setLang, t: COPY[lang] }}>
            <div className="grain bg-white text-ink">
                <Header />
                <main>
                    <Hero />
                    <Marquee />
                    <Enfoque />
                    <PhotoSection />
                    <Planes />
                    <Extras />
                    <Contacto />
                </main>
                <Footer />
                <FloatingWhatsApp />
            </div>
        </LangContext.Provider>
    );
}

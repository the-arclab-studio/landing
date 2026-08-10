import { useEffect } from "react";
import Lenis from "lenis";
import Header from "@/components/arclab/Header";
import Hero from "@/components/arclab/Hero";
import Marquee from "@/components/arclab/Marquee";
import Enfoque from "@/components/arclab/Enfoque";
import Planes from "@/components/arclab/Planes";
import Extras from "@/components/arclab/Extras";
import Contacto from "@/components/arclab/Contacto";
import Footer from "@/components/arclab/Footer";
import FloatingWhatsApp from "@/components/arclab/FloatingWhatsApp";

export default function App() {
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
        <div className="grain bg-white text-ink">
            <Header />
            <main>
                <Hero />
                <Marquee />
                <Enfoque />
                <Planes />
                <Extras />
                <Contacto />
            </main>
            <Footer />
            <FloatingWhatsApp />
        </div>
    );
}

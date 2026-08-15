import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { Eyebrow, SideNum } from "./Bits";
import { useLang } from "./LangContext";

const Rotator = ({ pre, words }) => {
    const items = [...words, words[0]];
    const [idx, setIdx] = useState(0);
    const [anim, setAnim] = useState(true);

    useEffect(() => {
        const id = setInterval(() => setIdx((v) => v + 1), 2400);
        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        if (idx === items.length - 1) {
            const t = setTimeout(() => {
                setAnim(false);
                setIdx(0);
            }, 700);
            return () => clearTimeout(t);
        }
        if (!anim && idx === 0) {
            const t = setTimeout(() => setAnim(true), 50);
            return () => clearTimeout(t);
        }
    }, [idx, anim, items.length]);

    return (
        <div data-testid="cambios-rotator" className="mt-12">
            <p className="font-grotesk text-2xl font-bold tracking-tight text-ink sm:text-4xl">
                {pre}
            </p>
            <div className="relative mt-1 h-[3.6em] overflow-hidden text-4xl sm:text-6xl">
                <motion.div
                    animate={{ y: `${1.2 - idx * 1.2}em` }}
                    transition={
                        anim
                            ? { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                            : { duration: 0 }
                    }
                >
                    {items.map((w, i) => (
                        <p
                            key={i}
                            data-testid={i === idx ? "rotator-active" : undefined}
                            className={`h-[1.2em] font-playfair italic leading-[1.2em] transition-opacity duration-500 ${
                                i === idx ? "text-arcblue" : "text-ink/20"
                            }`}
                        >
                            {w}
                        </p>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

const Rotador = () => {
    const { t } = useLang();
    const c = t.cambios;
    return (
        <section data-testid="rotador-section" className="relative px-6 py-24 sm:py-28">
            <SideNum n="05" />
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <Eyebrow>{c.label}</Eyebrow>
                </Reveal>
                <Reveal delay={0.1}>
                    <Rotator pre={c.rotatorPre} words={c.rotatorWords} />
                </Reveal>
            </div>
        </section>
    );
};

export default Rotador;

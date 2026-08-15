import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
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

const Cambios = () => {
    const { t } = useLang();
    const c = t.cambios;
    return (
        <section data-testid="cambios-section" className="relative">
            <div className="relative px-6 py-24 sm:py-28">
                <SideNum n="05" />
                <div className="mx-auto max-w-6xl">
                    <Reveal>
                        <Eyebrow>{c.label}</Eyebrow>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <Rotator pre={c.rotatorPre} words={c.rotatorWords} />
                    </Reveal>
                </div>
            </div>

            <div className="relative overflow-hidden bg-ink">
                <img
                    src="/images/hero-cutout.png"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-24 bottom-0 w-[420px] opacity-[0.07] grayscale"
                />
                <img
                    src="/images/metodo-cutout.png"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-20 top-0 w-[380px] -scale-x-100 opacity-[0.07] grayscale"
                />
                <div className="relative mx-auto grid max-w-7xl md:grid-cols-2">
                    {c.outcomes.map((o, i) => (
                        <Reveal key={i} delay={i * 0.08}>
                            <div
                                data-testid={`cambios-item-${i + 1}`}
                                className={`flex items-baseline gap-5 border-white/10 px-6 py-12 sm:px-12 sm:py-16 ${
                                    i % 2 === 0 ? "md:border-r" : ""
                                } ${i < 2 ? "border-b" : ""} ${
                                    i >= 2 ? "max-md:border-t" : ""
                                } ${i === 1 || i === 2 ? "max-md:border-b" : ""} ${
                                    i === 3 ? "max-md:border-b-0" : ""
                                }`}
                            >
                                <h3 className="font-grotesk text-6xl font-bold uppercase leading-none tracking-tighter text-white sm:text-7xl">
                                    {o.pre}
                                </h3>
                                <p className="font-grotesk text-2xl font-bold uppercase tracking-tight text-[#9AA2EE] sm:text-3xl">
                                    {o.word}
                                    <X
                                        aria-hidden="true"
                                        className="ml-2 inline h-4 w-4 align-baseline text-arcblue"
                                        strokeWidth={3}
                                    />
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cambios;

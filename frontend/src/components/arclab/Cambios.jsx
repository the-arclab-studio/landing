import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Zap, MoveUpRight, BatteryMedium, Eye, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Bits";
import { useLang } from "./LangContext";

const ICONS = { zap: Zap, arrow: MoveUpRight, battery: BatteryMedium, eye: Eye };

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
        <section
            data-testid="cambios-section"
            className="bg-bone px-6 py-24 sm:py-32"
        >
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <Eyebrow>{c.label}</Eyebrow>
                </Reveal>

                <Reveal delay={0.1}>
                    <Rotator pre={c.rotatorPre} words={c.rotatorWords} />
                </Reveal>

                <div className="mt-12">
                    {c.items.map((item, i) => {
                        const Icon = ICONS[item.icon];
                        return (
                            <Reveal key={i} delay={i * 0.08}>
                                <div
                                    data-testid={`cambios-item-${i + 1}`}
                                    className="group grid grid-cols-[auto_1fr] items-center gap-x-6 gap-y-2 border-t border-line py-8 transition-colors duration-300 last:border-b hover:bg-white/60 sm:grid-cols-[auto_1fr_auto_auto] sm:py-10 md:gap-x-12"
                                >
                                    <Icon
                                        className="h-8 w-8 text-arcblue transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 sm:h-10 sm:w-10"
                                        strokeWidth={1.25}
                                    />
                                    <h3 className="font-grotesk text-3xl font-bold uppercase leading-none tracking-tighter text-ink transition-colors duration-300 group-hover:text-arcblue sm:text-5xl">
                                        {item.title}
                                    </h3>
                                    <p className="col-span-2 max-w-xs text-sm leading-relaxed text-ink2 sm:col-span-1 sm:text-base">
                                        {item.text}
                                    </p>
                                    <ArrowRight
                                        aria-hidden="true"
                                        className="hidden h-6 w-6 -translate-x-3 text-arcblue opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block"
                                        strokeWidth={1.5}
                                    />
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Cambios;

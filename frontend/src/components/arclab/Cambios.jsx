import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { useLang } from "./LangContext";

const Cambios = () => {
    const { t } = useLang();
    const c = t.cambios;
    const [open, setOpen] = useState(null);
    const toggle = (i) => setOpen((o) => (o === i ? null : i));

    return (
        <section data-testid="cambios-section" className="relative">
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
                                role="button"
                                tabIndex={0}
                                aria-expanded={!!open === i}
                                onClick={() => toggle(i)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        toggle(i);
                                    }
                                }}
                                className={`group cursor-pointer px-6 py-12 transition-colors duration-300 hover:bg-white/[0.04] sm:px-12 sm:py-16 ${
                                    i % 2 === 0 ? "md:border-r md:border-white/10" : ""
                                }`}
                            >
                                <div className="flex items-baseline gap-5">
                                    <h3 className="font-grotesk text-6xl font-bold uppercase leading-none tracking-tighter text-white sm:text-7xl">
                                        {o.pre}
                                    </h3>
                                    <p className="font-grotesk text-2xl font-bold uppercase tracking-tight text-[#9AA2EE] sm:text-3xl">
                                        {o.word}
                                        <Plus
                                            aria-hidden="true"
                                            className={`ml-2 inline h-4 w-4 align-baseline text-arcblue transition-transform duration-300 ${
                                                open === i ? "rotate-45" : ""
                                            }`}
                                            strokeWidth={3}
                                        />
                                    </p>
                                </div>
                                <AnimatePresence initial={false}>
                                    {open === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0, y: 12 }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            exit={{ height: 0, opacity: 0, y: 12 }}
                                            transition={{
                                                duration: 0.5,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <p
                                                data-testid={`cambios-text-${i + 1}`}
                                                className="mt-6 max-w-xs text-base leading-[1.75] text-white/60"
                                            >
                                                {o.text}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <span
                                    className={`mt-6 block h-0.5 bg-arcblue transition-all duration-[400ms] ${
                                        open === i ? "w-16" : "w-6"
                                    }`}
                                />
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cambios;

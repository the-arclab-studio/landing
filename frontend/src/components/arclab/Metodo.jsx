import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Bits";
import { useLang } from "./LangContext";

const Metodo = () => {
    const { t } = useLang();
    const m = t.metodo;
    return (
        <section
            id="metodo"
            data-testid="metodo-section"
            className="scroll-mt-24 border-t border-line px-6 py-24 sm:py-32"
        >
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <Eyebrow>{m.label}</Eyebrow>
                </Reveal>

                <div className="relative mt-16">
                    <motion.div
                        aria-hidden="true"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.6, ease: "easeInOut" }}
                        className="absolute left-0 right-0 top-10 hidden h-px origin-left bg-arcblue md:block"
                    />
                    <div className="grid gap-14 md:grid-cols-3 md:gap-10">
                        {m.steps.map((s, i) => (
                            <Reveal key={s.n} delay={i * 0.15}>
                                <div
                                    data-testid={`metodo-step-${s.n}`}
                                    className="relative"
                                >
                                    <div className="flex items-end justify-between">
                                        <span className="relative bg-white pr-4 font-playfair text-8xl italic leading-none text-arcblue md:pt-0 lg:text-9xl">
                                            {s.n}
                                        </span>
                                        {i < m.steps.length - 1 && (
                                            <MoveRight
                                                aria-hidden="true"
                                                className="mb-3 hidden h-6 w-6 text-arcblue md:block"
                                                strokeWidth={1.5}
                                            />
                                        )}
                                    </div>
                                    <h3 className="mt-8 font-grotesk text-sm font-bold uppercase tracking-[0.3em] text-ink">
                                        {s.title}
                                    </h3>
                                    <p className="mt-3 max-w-sm text-base leading-relaxed text-ink2">
                                        {s.text}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Metodo;

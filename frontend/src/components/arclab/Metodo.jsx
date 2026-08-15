import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { useLang } from "./LangContext";

const Metodo = () => {
    const { t } = useLang();
    const m = t.metodo;
    return (
        <section
            id="metodo"
            data-testid="metodo-section"
            className="relative scroll-mt-24 overflow-hidden border-t border-line px-6 py-24 sm:py-32"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 select-none font-anton uppercase leading-none"
            >
                <motion.span
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute -top-16 left-[30%] hidden text-[36rem] text-arcblue lg:block"
                >
                    A
                </motion.span>
                <motion.span
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute -top-24 right-[-2%] hidden text-[30rem] text-arcblue lg:block"
                >
                    R
                </motion.span>
                <motion.span
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute -bottom-40 right-[16%] hidden text-[26rem] text-transparent [-webkit-text-stroke:2px_#1B33DC] lg:block"
                >
                    C
                </motion.span>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="lg:grid lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-7">
                        <Reveal>
                            <h2 className="font-grotesk text-[14vw] font-bold uppercase leading-[0.9] tracking-tighter text-ink sm:text-8xl lg:text-[7rem]">
                                {m.titleL1}
                                <br />
                                <span className="text-arcblue">{m.titleEm}</span>
                            </h2>
                            <p className="mt-8 max-w-md text-xl font-medium leading-snug text-ink sm:text-2xl">
                                {m.sub}
                            </p>
                            <span
                                aria-hidden="true"
                                className="mt-6 block h-1 w-10 bg-arcblue"
                            />
                        </Reveal>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="relative z-10 mx-auto mt-12 max-w-xs sm:max-w-sm lg:col-span-5 lg:-mr-10 lg:mt-0 lg:max-w-none"
                    >
                        <img
                            src="/images/metodo-cutout.png"
                            alt={m.photoAlt}
                            data-testid="metodo-photo"
                            className="w-full drop-shadow-[0_50px_70px_rgba(21,21,21,0.3)]"
                        />
                    </motion.div>
                </div>

                <div className="mt-16 grid gap-10 sm:mt-24 md:grid-cols-3 md:gap-0">
                    {m.steps.map((s, i) => (
                        <Reveal key={s.n} delay={i * 0.12}>
                            <div
                                data-testid={`metodo-step-${s.n}`}
                                className="border-l border-line pl-6 md:px-8 md:py-2 md:first:pl-0 md:first:border-l-0 md:[&:not(:first-child)]:border-l"
                            >
                                <span className="font-playfair text-3xl text-arcblue">
                                    {s.n}
                                </span>
                                <h3 className="mt-4 font-grotesk text-sm font-bold uppercase tracking-[0.25em] text-ink">
                                    {s.title}
                                </h3>
                                <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink2">
                                    {s.text}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Metodo;

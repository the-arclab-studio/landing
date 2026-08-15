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
            <motion.p
                aria-hidden="true"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.4 }}
                className="pointer-events-none absolute right-[-4%] top-1/2 z-0 hidden -translate-y-1/2 select-none whitespace-nowrap font-anton text-[19rem] uppercase leading-none lg:block xl:text-[23rem]"
            >
                <span className="text-arcblue">A</span>
                <span className="text-arcblue">R</span>
                <span className="text-transparent [-webkit-text-stroke:3px_#1B33DC]">
                    C
                </span>
            </motion.p>

            <div className="relative z-10 mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:gap-10">
                <div>
                    <Reveal>
                        <h2 className="font-grotesk text-[13vw] font-bold uppercase leading-[0.9] tracking-tighter text-ink sm:text-7xl xl:text-8xl">
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

                    <div className="mt-14 max-w-xl">
                        {m.steps.map((s, i) => (
                            <Reveal key={s.n} delay={i * 0.12}>
                                <div
                                    data-testid={`metodo-step-${s.n}`}
                                    className="flex items-start gap-6 border-t border-line py-7 last:border-b"
                                >
                                    <span className="font-playfair text-5xl leading-none text-arcblue sm:text-6xl">
                                        {s.n}
                                    </span>
                                    <div>
                                        <h3 className="font-grotesk text-lg font-bold uppercase tracking-[0.2em] text-ink sm:text-xl">
                                            {s.title}
                                        </h3>
                                        <p className="mt-2 max-w-md text-base leading-relaxed text-ink2">
                                            {s.text}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                <div className="relative mt-12 lg:mt-0">
                    <motion.img
                        src="/images/metodo-cutout.png"
                        alt={m.photoAlt}
                        data-testid="metodo-photo"
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="relative z-10 mx-auto max-h-[420px] w-auto drop-shadow-[0_50px_70px_rgba(21,21,21,0.3)] sm:max-h-[520px] lg:absolute lg:bottom-0 lg:right-0 lg:max-h-[680px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default Metodo;

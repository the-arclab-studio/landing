import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Arc from "./Arc";
import { MaskLine } from "./Reveal";
import { waES } from "./data";

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const arcY = useTransform(scrollYProgress, [0, 1], [0, 140]);
    const markY = useTransform(scrollYProgress, [0, 1], [0, 220]);

    return (
        <section
            ref={ref}
            id="top"
            data-testid="hero-section"
            className="relative overflow-hidden px-6 pb-28 pt-36 sm:pt-44"
        >
            <motion.span
                style={{ y: markY }}
                aria-hidden="true"
                className="hero-watermark pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-anton text-[26vw] uppercase leading-none"
            >
                in-season
            </motion.span>

            <motion.div
                style={{ y: arcY }}
                className="pointer-events-none absolute inset-x-0 top-24 mx-auto max-w-4xl"
            >
                <Arc inView={false} delay={0.9} className="h-40 w-full sm:h-52" />
            </motion.div>

            <div className="relative mx-auto max-w-6xl">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="eyebrow"
                >
                    — Durante la temporada
                </motion.p>

                <h1 className="mt-8 font-grotesk text-[13.5vw] font-bold lowercase leading-[0.98] tracking-tight text-ink sm:text-7xl lg:text-8xl">
                    <MaskLine delay={0.35}>el partido se gana</MaskLine>
                    <MaskLine delay={0.5}>
                        entre{" "}
                        <em className="font-playfair italic text-arcblue">
                            partidos.
                        </em>
                    </MaskLine>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-10 max-w-md text-base text-ink2 sm:text-lg"
                >
                    Mantener el nivel, gestionar la fatiga y llegar entero a cada
                    semana.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-10 flex flex-wrap items-center gap-6"
                >
                    <a
                        href={waES}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="hero-whatsapp-btn"
                        className="btn-blue"
                    >
                        Hablar por WhatsApp
                    </a>
                    <a
                        href="#planes"
                        data-testid="hero-plans-link"
                        className="font-grotesk text-sm font-medium uppercase tracking-[0.2em] text-ink underline decoration-arcblue decoration-2 underline-offset-8 transition-colors duration-300 hover:text-arcblue"
                    >
                        Ver los planes
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

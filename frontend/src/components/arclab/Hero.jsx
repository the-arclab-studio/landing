import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Arc from "./Arc";
import { MaskLine } from "./Reveal";
import { Eyebrow } from "./Bits";
import { useLang } from "./LangContext";
import { waLink } from "./data";

const Hero = () => {
    const { lang, t } = useLang();
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
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Eyebrow>{t.hero.eyebrow}</Eyebrow>
                </motion.div>

                <h1 className="mt-8 font-grotesk text-[13.5vw] font-bold lowercase leading-[0.98] tracking-[-0.02em] text-ink sm:text-7xl lg:text-8xl">
                    <MaskLine delay={0.35}>{t.hero.titlePre}</MaskLine>
                    <MaskLine delay={0.5}>
                        <em className="font-playfair italic text-arcblue">
                            {t.hero.titleEm}
                        </em>
                    </MaskLine>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-10 max-w-md text-base text-ink2 sm:text-lg"
                >
                    {t.hero.sub}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-10 flex flex-wrap items-center gap-4"
                >
                    <a
                        href={waLink(lang, "generic")}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="hero-whatsapp-btn"
                        className="btn-blue"
                    >
                        <span aria-hidden="true">✆</span> {t.hero.cta1}
                    </a>
                    <a
                        href="#planes"
                        data-testid="hero-plans-link"
                        className="btn-outline"
                    >
                        {t.hero.cta2}
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

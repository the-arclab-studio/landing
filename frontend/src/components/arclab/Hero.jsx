import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Arc from "./Arc";
import { MaskLine } from "./Reveal";
import { Eyebrow } from "./Bits";
import { useLang } from "./LangContext";
import { introSeen } from "./Intro";
import { waLink } from "./data";

const B = introSeen() ? 0 : 6.9;

const Corner = ({ className }) => (
    <span
        aria-hidden="true"
        className={`pointer-events-none absolute z-20 h-6 w-6 border-arcblue ${className}`}
    />
);

const Hero = () => {
    const { lang, t } = useLang();
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const arcY = useTransform(scrollYProgress, [0, 1], [0, 120]);
    const imgY = useTransform(scrollYProgress, [0, 1], [0, -60]);

    return (
        <section
            ref={ref}
            id="top"
            data-testid="hero-section"
            className="relative overflow-hidden px-6 pb-20 pt-28 sm:pt-36"
        >
            <motion.div
                style={{ y: arcY }}
                className="pointer-events-none absolute inset-x-0 top-12 z-10 mx-auto max-w-5xl sm:top-20"
            >
                <Arc inView={false} delay={B + 1} className="h-24 w-full sm:h-48" />
            </motion.div>

            <div className="relative mx-auto max-w-6xl lg:grid lg:grid-cols-12 lg:items-end">
                <div className="relative z-20 lg:col-span-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: B + 0.2 }}
                    >
                        <Eyebrow>{t.hero.eyebrow}</Eyebrow>
                    </motion.div>

                    <h1 className="mt-6 font-grotesk text-[15vw] font-bold lowercase leading-[0.9] tracking-tighter text-ink sm:text-8xl lg:text-[7.5rem]">
                        <MaskLine delay={B + 0.35}>{t.hero.titlePre}</MaskLine>
                        <MaskLine delay={B + 0.5}>
                            <em className="font-playfair italic tracking-normal text-arcblue">
                                {t.hero.titleEm}
                            </em>
                        </MaskLine>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: B + 0.85, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-8 max-w-md text-base leading-relaxed text-ink2 sm:text-lg"
                    >
                        {t.hero.sub}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: B + 1.05, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
                    >
                        <a
                            href={waLink(lang, "generic")}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="hero-whatsapp-btn"
                            className="btn-blue justify-center"
                        >
                            <span aria-hidden="true">✆</span> {t.hero.cta1}
                        </a>
                        <a
                            href="#planes"
                            data-testid="hero-plans-link"
                            className="btn-outline justify-center"
                        >
                            {t.hero.cta2}
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40, rotate: 2 }}
                    animate={{ opacity: 1, y: 0, rotate: 1.5 }}
                    transition={{ duration: 1.1, delay: B + 0.7, ease: [0.22, 1, 0.36, 1] }}
                    style={{ y: imgY }}
                    className="relative z-10 mx-auto mt-10 max-w-xs sm:max-w-sm lg:col-span-4 lg:-ml-24 lg:mt-0 lg:max-w-none"
                >
                    <figure
                        data-testid="hero-photo"
                        className="relative shadow-[0_40px_80px_-40px_rgba(21,21,21,0.35)]"
                    >
                        <Corner className="left-3 top-3 border-l-2 border-t-2" />
                        <Corner className="right-3 top-3 border-r-2 border-t-2" />
                        <Corner className="bottom-3 left-3 border-b-2 border-l-2" />
                        <Corner className="bottom-3 right-3 border-b-2 border-r-2" />
                        <img
                            src="/images/athlete-1.jpg"
                            alt={t.hero.photoAlt}
                            className="aspect-[4/5] w-full rounded-xl object-cover object-top grayscale"
                        />
                    </figure>
                </motion.div>
            </div>

            <motion.span
                aria-hidden="true"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: B + 1.2 }}
                className="hero-watermark pointer-events-none absolute -bottom-10 left-0 select-none whitespace-nowrap font-anton text-[24vw] uppercase leading-none"
            >
                in-season
            </motion.span>
        </section>
    );
};

export default Hero;

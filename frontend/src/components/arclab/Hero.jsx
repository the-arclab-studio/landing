import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MaskLine } from "./Reveal";
import { Eyebrow } from "./Bits";
import { useLang } from "./LangContext";
import { introSeen } from "./Intro";
import { waLink } from "./data";

const B = introSeen() ? 0 : 8.2;

const Corner = ({ className }) => (
    <span
        aria-hidden="true"
        className={`pointer-events-none absolute z-20 h-6 w-6 border-arcblue ${className}`}
    />
);

const Trajectory = () => (
    <svg
        viewBox="0 0 1200 620"
        fill="none"
        aria-hidden="true"
        className="h-full w-full"
        preserveAspectRatio="none"
    >
        <motion.path
            d="M 20 590 C 380 560, 620 430, 900 260 C 1000 200, 1080 160, 1160 130"
            stroke="#1B33DC"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, delay: B + 0.9, ease: "easeInOut" }}
        />
        <motion.circle
            cx="1160"
            cy="130"
            r="6"
            fill="#1B33DC"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: B + 2.6, duration: 0.4, ease: "backOut" }}
        />
    </svg>
);

const Hero = () => {
    const { lang, t } = useLang();
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const imgY = useTransform(scrollYProgress, [0, 1], [0, -70]);
    const lineY = useTransform(scrollYProgress, [0, 1], [0, 110]);

    return (
        <section
            ref={ref}
            id="top"
            data-testid="hero-section"
            className="relative overflow-hidden px-6 pb-16 pt-28 sm:pt-36 lg:pb-24"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.5]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #E5E5E0 1px, transparent 1px)",
                    backgroundSize: "25% 100%",
                }}
            />

            <motion.div
                style={{ y: lineY }}
                className="pointer-events-none absolute inset-0 z-10"
            >
                <Trajectory />
            </motion.div>

            <div className="relative z-20 mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:items-center">
                <div className="relative z-20 lg:col-span-7">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: B + 0.2 }}
                    >
                        <Eyebrow>{t.hero.eyebrow}</Eyebrow>
                    </motion.div>

                    <h1 className="mt-6 font-grotesk text-[16vw] font-bold uppercase leading-[0.9] tracking-tighter text-ink sm:text-8xl lg:text-[7.5rem]">
                        <MaskLine delay={B + 0.35}>{t.hero.titleL1}</MaskLine>
                        <MaskLine delay={B + 0.48}>{t.hero.titleL2}</MaskLine>
                        <MaskLine delay={B + 0.61}>
                            <em className="font-playfair lowercase italic tracking-normal text-arcblue">
                                {t.hero.titleEm}
                            </em>
                        </MaskLine>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: B + 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-8 max-w-md text-base leading-relaxed text-ink2 sm:text-lg"
                    >
                        {t.hero.sub}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: B + 1.1, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
                    >
                        <a
                            href={waLink(lang, "generic")}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="hero-whatsapp-btn"
                            className="btn-blue justify-center"
                        >
                            {t.hero.cta1} <span aria-hidden="true">↗</span>
                        </a>
                        <a
                            href="#solucion"
                            data-testid="hero-metodo-link"
                            className="btn-outline justify-center"
                        >
                            {t.hero.cta2} <span aria-hidden="true">↓</span>
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50, rotate: 2.5 }}
                    animate={{ opacity: 1, y: 0, rotate: 1.5 }}
                    transition={{ duration: 1.2, delay: B + 0.7, ease: [0.22, 1, 0.36, 1] }}
                    style={{ y: imgY }}
                    className="relative z-10 mt-12 lg:col-span-5 lg:-ml-16 lg:mt-0 lg:scale-110"
                >
                    <figure
                        data-testid="hero-photo"
                        className="relative shadow-[0_50px_90px_-45px_rgba(21,21,21,0.4)]"
                    >
                        <Corner className="left-3 top-3 border-l-2 border-t-2" />
                        <Corner className="right-3 top-3 border-r-2 border-t-2" />
                        <Corner className="bottom-3 left-3 border-b-2 border-l-2" />
                        <Corner className="bottom-3 right-3 border-b-2 border-r-2" />
                        <img
                            src="/images/hero-dunk.jpg"
                            alt={t.hero.photoAlt}
                            className="aspect-[4/5] w-full rounded-xl object-cover grayscale lg:aspect-[5/6]"
                        />
                    </figure>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MaskLine } from "./Reveal";
import { Eyebrow } from "./Bits";
import { useLang } from "./LangContext";
import { introSeen } from "./Intro";
import { waLink } from "./data";

const B = introSeen() ? 0 : 8.2;

const Trajectory = () => (
    <svg
        viewBox="0 0 1200 800"
        fill="none"
        aria-hidden="true"
        className="h-full w-full"
        preserveAspectRatio="none"
    >
        <motion.path
            d="M -20 760 C 300 740, 620 560, 880 260 C 960 170, 1010 130, 1060 110"
            stroke="#1B33DC"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: B + 1.1, ease: "easeInOut" }}
        />
        <motion.circle
            cx="1060"
            cy="110"
            r="6"
            fill="#1B33DC"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: B + 3, duration: 0.4, ease: "backOut" }}
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
    const imgY = useTransform(scrollYProgress, [0, 1], [0, -80]);
    const lineY = useTransform(scrollYProgress, [0, 1], [0, 120]);

    return (
        <section
            ref={ref}
            id="top"
            data-testid="hero-section"
            className="relative overflow-hidden px-6 pb-10 pt-28 sm:pt-36 lg:pb-0"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-50"
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

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: B + 2.2 }}
                className="pointer-events-none absolute left-[30%] top-[62%] z-10 hidden font-grotesk text-[9px] font-medium uppercase tracking-[0.35em] text-ink2 lg:block"
            >
                {t.hero.trayLabel}
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: B + 1.4 }}
                className="pointer-events-none absolute right-8 top-[46%] z-10 hidden flex-col gap-1.5 xl:flex"
            >
                {t.hero.words.map((w, i) => (
                    <span
                        key={i}
                        className={`font-grotesk text-xs font-bold uppercase tracking-[0.3em] ${
                            i === t.hero.words.length - 1
                                ? "text-arcblue"
                                : "text-ink"
                        }`}
                    >
                        {w}
                    </span>
                ))}
            </motion.div>

            <div className="relative z-20 mx-auto max-w-7xl lg:grid lg:grid-cols-12">
                <div className="relative z-20 lg:col-span-6 lg:pt-14">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: B + 0.2 }}
                    >
                        <Eyebrow>{t.hero.eyebrow}</Eyebrow>
                    </motion.div>

                    <h1 className="mt-6 font-grotesk text-[16vw] font-bold uppercase leading-[0.9] tracking-tighter text-ink sm:text-8xl lg:text-[6.8rem]">
                        <MaskLine delay={B + 0.35}>{t.hero.titleL1}</MaskLine>
                        <MaskLine delay={B + 0.48}>{t.hero.titleL2}</MaskLine>
                        <MaskLine delay={B + 0.61}>
                            <span className="text-arcblue">
                                {t.hero.titleEm}
                            </span>
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
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: B + 0.7, ease: [0.22, 1, 0.36, 1] }}
                    style={{ y: imgY }}
                    className="relative z-10 mx-auto mt-10 max-w-sm sm:max-w-md lg:col-span-6 lg:-mt-24 lg:max-w-none"
                >
                    <img
                        src="/images/hero-cutout.png"
                        alt={t.hero.photoAlt}
                        data-testid="hero-photo"
                        className="w-full drop-shadow-[0_50px_70px_rgba(21,21,21,0.35)]"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

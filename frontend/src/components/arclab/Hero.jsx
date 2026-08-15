import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MaskLine } from "./Reveal";
import { Eyebrow, SideNum, Cross } from "./Bits";
import { useLang } from "./LangContext";
import { introSeen } from "./Intro";
import { waLink } from "./data";

const B = introSeen() ? 0 : 8.2;

const Hoop = ({ className = "" }) => (
    <svg
        viewBox="0 0 120 100"
        fill="none"
        aria-hidden="true"
        className={className}
    >
        <path d="M20 10h60" stroke="#151515" strokeWidth="2" strokeOpacity="0.55" />
        <rect x="14" y="4" width="72" height="46" rx="2" stroke="#151515" strokeWidth="2" strokeOpacity="0.55" />
        <ellipse cx="50" cy="56" rx="20" ry="5" stroke="#151515" strokeWidth="2" strokeOpacity="0.55" />
        <path
            d="M32 58l5 34M42 60l3 34M50 61v34M58 60l-3 34M68 58l-5 34M33 70h34M36 82h28"
            stroke="#151515"
            strokeWidth="1.5"
            strokeOpacity="0.45"
        />
    </svg>
);

const Hero = () => {
    const { t } = useLang();
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const imgY = useTransform(scrollYProgress, [0, 1], [0, -60]);

    return (
        <section
            ref={ref}
            id="top"
            data-testid="hero-section"
            className="relative overflow-hidden px-6 pb-16 pt-28 sm:pt-32 lg:min-h-[92vh] lg:pb-0"
        >
            <Cross className="left-4 top-24" />
            <Cross className="bottom-8 right-4" />
            <SideNum n="01" />

            <motion.div
                aria-hidden="true"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.1, delay: B + 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -right-[6%] top-0 z-0 hidden h-[110%] w-[38%] origin-top bg-arcblue lg:block"
                style={{ clipPath: "polygon(32% 0, 100% 0, 68% 100%, 0 100%)" }}
            />

            <Hoop className="absolute right-16 top-32 z-10 hidden w-24 lg:block xl:w-28" />

            <div className="relative z-20 mx-auto grid max-w-7xl lg:grid-cols-12">
                <div className="lg:col-span-6 lg:pt-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: B + 0.2 }}
                    >
                        <Eyebrow>{t.hero.eyebrow}</Eyebrow>
                    </motion.div>

                    <h1 className="mt-6 font-grotesk text-[15vw] font-bold uppercase leading-[0.9] tracking-tighter text-ink sm:text-8xl lg:text-[6.2rem]">
                        <MaskLine delay={B + 0.35}>{t.hero.titleL1}</MaskLine>
                        <MaskLine delay={B + 0.48}>{t.hero.titleL2}</MaskLine>
                        <MaskLine delay={B + 0.61}>
                            <span className="text-arcblue">{t.hero.titleEm}</span>
                        </MaskLine>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: B + 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-8 max-w-sm text-base leading-relaxed text-ink2"
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
                            href={waLink("es", "generic")}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="hero-whatsapp-btn"
                            className="btn-blue justify-center"
                        >
                            {t.hero.cta1} <span aria-hidden="true">↗</span>
                        </a>
                        <a
                            href="#planes"
                            data-testid="hero-plans-link"
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
                    className="relative z-10 mx-auto mt-10 max-w-sm sm:max-w-md lg:col-span-6 lg:-mt-6 lg:max-w-none"
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

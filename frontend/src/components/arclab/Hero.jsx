import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MaskLine } from "./Reveal";
import { Container } from "./Layout";
import { Eyebrow, SideNum, Cross } from "./Bits";
import { useLang } from "./LangContext";
import { introSeen } from "./Intro";
import { waLink } from "./data";

const B = introSeen() ? 0 : 8.2;

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
            className="relative overflow-hidden px-6 pb-16 pt-24 sm:pt-28 lg:min-h-[92vh] lg:overflow-x-clip lg:overflow-y-visible lg:pt-24 lg:pb-0"
        >
            <Cross className="left-4 top-24" />
            <SideNum n="01" />

            <motion.div
                aria-hidden="true"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.2, delay: B + 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 z-0 hidden origin-top bg-arcblue lg:block"
                style={{
                    clipPath: "polygon(58% 0, 112% 0, 57.8% 100%, 42.2% 100%)",
                }}
            />

            <motion.div
                aria-hidden="true"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.4, delay: B + 1.2 }}
                className="pointer-events-none absolute inset-0 z-[6] hidden select-none lg:block"
            >
                <div
                    className="absolute right-[1%] top-[161px] xl:top-[209px] font-anton text-[15rem] uppercase leading-[0.82] tracking-tight xl:text-[18rem]"
                    style={{
                        color: "transparent",
                        WebkitTextStroke: "2px rgba(27,51,220,0.28)",
                    }}
                >
                    ARC
                    <br />
                    LAB
                </div>
                <div
                    className="absolute inset-0"
                    style={{
                        clipPath: "polygon(58% 0, 112% 0, 57.8% 100%, 42.2% 100%)",
                    }}
                >
                    <div
                        className="absolute right-[1%] top-[161px] xl:top-[209px] font-anton text-[15rem] uppercase leading-[0.82] tracking-tight xl:text-[18rem]"
                        style={{
                            color: "transparent",
                            WebkitTextStroke: "2px rgba(255,255,255,0.55)",
                        }}
                    >
                        ARC
                        <br />
                        LAB
                    </div>
                </div>
            </motion.div>

            <motion.ul
                aria-hidden="true"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: B + 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-[24%] left-[47.5%] z-[7] hidden lg:block"
            >
                {t.hero.bandWords.map((w) => (
                    <li
                        key={w}
                        className="font-grotesk text-[11px] font-medium uppercase tracking-[0.3em] text-white/85"
                    >
                        {w}
                    </li>
                ))}
            </motion.ul>

            <Container className="relative z-20 grid lg:grid-cols-12">
                <div className="lg:col-span-6 lg:pt-4 xl:pt-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: B + 0.2 }}
                    >
                        <Eyebrow>{t.hero.eyebrow}</Eyebrow>
                    </motion.div>

                    <h1 className="mt-6 font-grotesk text-[15vw] font-bold uppercase leading-[0.9] tracking-tighter text-ink sm:text-8xl lg:mt-8 lg:text-[6.2rem]">
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
                        className="mt-8 max-w-sm text-base leading-[1.75] text-ink2 lg:mt-10 lg:text-lg"
                    >
                        {t.hero.sub}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: B + 1.1, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center lg:mt-14"
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
                    className="relative z-30 mx-auto mt-10 max-w-sm sm:max-w-md lg:col-span-6 lg:mt-20 lg:-mb-20 lg:max-w-none xl:mt-24 xl:-mb-24"
                >
                    <img
                        src="/images/hero-cutout.png"
                        alt={t.hero.photoAlt}
                        data-testid="hero-photo"
                        className="w-full drop-shadow-[0_50px_70px_rgba(21,21,21,0.35)]"
                    />
                </motion.div>
            </Container>

            <motion.p
                aria-hidden="true"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: B + 1.6 }}
                className="absolute bottom-10 left-6 z-[7] hidden font-grotesk text-[10px] font-medium uppercase tracking-[0.3em] text-ink2 lg:block"
            >
                — {t.hero.footNote}
            </motion.p>
        </section>
    );
};

export default Hero;

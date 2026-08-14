import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "./Reveal";
import { Eyebrow, Headline } from "./Bits";
import { useLang } from "./LangContext";

const Club = () => {
    const { t } = useLang();
    const c = t.club;
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

    return (
        <section
            ref={ref}
            data-testid="club-section"
            className="relative overflow-hidden bg-ink px-6 py-28 sm:py-40"
        >
            <motion.span
                aria-hidden="true"
                style={{ y }}
                className="pointer-events-none absolute -right-8 top-8 select-none whitespace-nowrap font-anton text-[22vw] uppercase leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.07)]"
            >
                equipo
            </motion.span>
            <div className="relative mx-auto max-w-4xl">
                <Reveal>
                    <Eyebrow dark>{c.eyebrow}</Eyebrow>
                    <Headline
                        dark
                        className="mt-6 text-[11vw] sm:text-6xl lg:text-7xl"
                        pre={c.titlePre}
                        em={c.titleEm}
                    />
                    <p className="mt-10 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
                        {c.paraPre}{" "}
                        <strong className="font-semibold text-white">
                            {c.paraStrong}
                        </strong>
                    </p>
                </Reveal>
            </div>
        </section>
    );
};

export default Club;

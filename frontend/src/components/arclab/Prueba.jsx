import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "./Reveal";
import { Eyebrow, Headline } from "./Bits";
import { useLang } from "./LangContext";

const Corner = ({ className }) => (
    <span
        aria-hidden="true"
        className={`pointer-events-none absolute z-10 h-7 w-7 border-arcblue ${className}`}
    />
);

const Prueba = () => {
    const { t } = useLang();
    const p = t.prueba;
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

    return (
        <section
            id="jugadores"
            data-testid="prueba-section"
            className="scroll-mt-24 bg-bone px-6 py-28"
        >
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <Eyebrow>{p.eyebrow}</Eyebrow>
                    <Headline className="mt-6" pre={p.titlePre} em={p.titleEm} />
                </Reveal>

                <Reveal className="mt-14">
                    <figure ref={ref} className="relative mx-auto max-w-xl">
                        <Corner className="left-3 top-3 border-l-2 border-t-2" />
                        <Corner className="right-3 top-3 border-r-2 border-t-2" />
                        <Corner className="bottom-3 left-3 border-b-2 border-l-2" />
                        <Corner className="bottom-3 right-3 border-b-2 border-r-2" />
                        <div className="card-soft overflow-hidden !rounded-2xl">
                            <motion.img
                                src="/images/training.jpg"
                                alt={t.photoAlt}
                                data-testid="training-photo"
                                style={{ y, scale: 1.12 }}
                                className="w-full grayscale"
                            />
                        </div>
                    </figure>
                </Reveal>

                <div className="mt-14 grid gap-5 md:grid-cols-3">
                    {[0, 1, 2].map((i) => (
                        <Reveal key={i} delay={i * 0.12}>
                            <figure
                                data-testid={`testimonial-card-${i + 1}`}
                                className="card-soft h-full bg-white p-8"
                            >
                                <blockquote className="font-playfair text-xl italic leading-relaxed text-ink2">
                                    “[{p.placeholder}]”
                                </blockquote>
                                <figcaption className="mt-6 font-grotesk text-[10px] font-medium uppercase tracking-[0.25em] text-ink2">
                                    {p.meta}
                                </figcaption>
                            </figure>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Prueba;

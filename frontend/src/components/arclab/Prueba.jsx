import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Eyebrow, Headline } from "./Bits";
import { useLang } from "./LangContext";

const Corner = ({ className }) => (
    <span
        aria-hidden="true"
        className={`pointer-events-none absolute z-10 h-6 w-6 border-arcblue ${className}`}
    />
);

const Arrow = ({ dir, onClick, mobile = false }) => (
    <button
        onClick={onClick}
        data-testid={`carousel-${dir === -1 ? "prev" : "next"}${mobile ? "-mobile" : ""}`}
        aria-label={dir === -1 ? "Anterior" : "Siguiente"}
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors duration-300 hover:border-arcblue hover:text-arcblue"
    >
        {dir === -1 ? <ArrowLeft className="h-5 w-5" /> : <ArrowRight className="h-5 w-5" />}
    </button>
);

const Prueba = () => {
    const { t } = useLang();
    const p = t.prueba;
    const n = p.athletes.length;
    const [idx, setIdx] = useState(0);
    const go = (d) => setIdx((i) => (i + d + n) % n);

    useEffect(() => {
        const id = setInterval(() => setIdx((i) => (i + 1) % n), 5500);
        return () => clearInterval(id);
    }, [idx, n]);

    const a = p.athletes[idx];

    return (
        <section
            id="jugadores"
            data-testid="prueba-section"
            className="scroll-mt-24 overflow-hidden bg-bone px-6 py-24 sm:py-32"
        >
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <Eyebrow>{p.eyebrow}</Eyebrow>
                    <Headline className="mt-6" pre={p.titlePre} em={p.titleEm} />
                </Reveal>

                <div className="mt-14 flex items-center justify-center gap-6 sm:gap-10">
                    <div className="hidden sm:block">
                        <Arrow dir={-1} onClick={() => go(-1)} />
                    </div>

                    <div className="w-full max-w-md">
                        <AnimatePresence mode="wait">
                            <motion.figure
                                key={idx}
                                data-testid="testimonial-card"
                                className="card-soft bg-white p-6"
                                initial={{ opacity: 0, x: 70 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -70 }}
                                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div
                                    data-testid="testimonial-photo-slot"
                                    className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-bone"
                                >
                                    <Corner className="left-3 top-3 border-l-2 border-t-2" />
                                    <Corner className="right-3 top-3 border-r-2 border-t-2" />
                                    <Corner className="bottom-3 left-3 border-b-2 border-l-2" />
                                    <Corner className="bottom-3 right-3 border-b-2 border-r-2" />
                                    {a.img ? (
                                        <img
                                            src={a.img}
                                            alt={a.meta}
                                            className="h-full w-full object-cover object-top grayscale"
                                        />
                                    ) : (
                                        <div className="flex h-full flex-col items-center justify-center gap-3">
                                            <span className="h-1.5 w-1.5 rounded-full bg-arcblue" />
                                            <span className="font-grotesk text-[10px] font-medium uppercase tracking-[0.3em] text-ink2">
                                                {p.photoLabel}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <blockquote className="mt-7 font-playfair text-2xl italic leading-relaxed text-ink">
                                    “{a.quote || p.quote}”
                                </blockquote>
                                <figcaption className="mt-5 font-grotesk text-[11px] font-medium uppercase tracking-[0.25em] text-ink2">
                                    {a.meta}
                                </figcaption>
                            </motion.figure>
                        </AnimatePresence>

                        <div className="mt-8 flex items-center justify-center gap-6">
                            <div className="sm:hidden">
                                <Arrow dir={-1} mobile onClick={() => go(-1)} />
                            </div>
                            <span
                                data-testid="carousel-counter"
                                className="font-grotesk text-[11px] uppercase tracking-[0.35em] text-ink2"
                            >
                                <span className="text-arcblue">
                                    {String(idx + 1).padStart(2, "0")}
                                </span>{" "}
                                — {String(n).padStart(2, "0")}
                            </span>
                            <div className="sm:hidden">
                                <Arrow dir={1} mobile onClick={() => go(1)} />
                            </div>
                        </div>
                    </div>

                    <div className="hidden sm:block">
                        <Arrow dir={1} onClick={() => go(1)} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Prueba;

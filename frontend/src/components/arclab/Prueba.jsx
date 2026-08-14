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

const Photo = ({ a, label, big = false }) => (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-bone">
        {big && (
            <>
                <Corner className="left-3 top-3 border-l-2 border-t-2" />
                <Corner className="right-3 top-3 border-r-2 border-t-2" />
                <Corner className="bottom-3 left-3 border-b-2 border-l-2" />
                <Corner className="bottom-3 right-3 border-b-2 border-r-2" />
            </>
        )}
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
                    {label}
                </span>
            </div>
        )}
    </div>
);

const Peek = ({ a, side, onClick, label }) => (
    <button
        onClick={onClick}
        data-testid={`carousel-peek-${side}`}
        aria-label={side === "prev" ? "Anterior" : "Siguiente"}
        className={`relative z-0 w-12 shrink-0 scale-[0.92] opacity-60 transition-all duration-500 hover:opacity-90 sm:w-56 sm:scale-95 sm:opacity-75 ${
            side === "prev" ? "-mr-3 sm:-mr-8" : "-ml-3 sm:-ml-8"
        }`}
    >
        <Photo a={a} label={label} />
    </button>
);

const Arrow = ({ dir, onClick, className = "" }) => (
    <button
        onClick={onClick}
        data-testid={`carousel-${dir === -1 ? "prev" : "next"}`}
        aria-label={dir === -1 ? "Anterior" : "Siguiente"}
        className={`absolute top-[38%] z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-[0_10px_30px_-10px_rgba(21,21,21,0.35)] transition-all duration-300 hover:scale-105 hover:text-arcblue sm:h-12 sm:w-12 ${className}`}
    >
        {dir === -1 ? (
            <ArrowLeft className="h-5 w-5" />
        ) : (
            <ArrowRight className="h-5 w-5" />
        )}
    </button>
);

const Prueba = () => {
    const { t } = useLang();
    const p = t.prueba;
    const n = p.athletes.length;
    const [idx, setIdx] = useState(0);
    const go = (d) => setIdx((i) => (i + d + n) % n);

    useEffect(() => {
        const id = setInterval(() => setIdx((i) => (i + 1) % n), 6500);
        return () => clearInterval(id);
    }, [idx, n]);

    const a = p.athletes[idx];
    const prev = p.athletes[(idx - 1 + n) % n];
    const next = p.athletes[(idx + 1) % n];

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

                <div className="relative mx-auto mt-14 flex max-w-3xl items-center justify-center">
                    <Arrow dir={-1} onClick={() => go(-1)} className="-left-2 sm:left-6" />
                    <Arrow dir={1} onClick={() => go(1)} className="-right-2 sm:right-6" />

                    <Peek a={prev} side="prev" onClick={() => go(-1)} label={p.photoLabel} />

                    <div className="relative z-10 w-full min-w-0 max-w-md">
                        <AnimatePresence mode="popLayout">
                            <motion.figure
                                key={idx}
                                data-testid="testimonial-card"
                                className="card-soft cursor-grab bg-white p-5 active:cursor-grabbing sm:p-6"
                                initial={{ opacity: 0, x: 90, scale: 0.97 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -90, scale: 0.97 }}
                                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.15}
                                onDragEnd={(e, info) => {
                                    if (info.offset.x < -70) go(1);
                                    else if (info.offset.x > 70) go(-1);
                                }}
                            >
                                <Photo a={a} label={p.photoLabel} big />
                                <blockquote className="mt-6 text-center font-playfair text-lg italic leading-relaxed text-ink sm:text-xl">
                                    “{a.quote || p.quote}”
                                </blockquote>
                                <figcaption className="mt-4 text-center font-grotesk text-[11px] font-medium uppercase tracking-[0.25em] text-ink2">
                                    {a.meta}
                                    <span className="mt-1 block text-arcblue">
                                        {a.team || p.teamPending}
                                    </span>
                                </figcaption>
                            </motion.figure>
                        </AnimatePresence>

                        <div className="mt-6 text-center">
                            <span
                                data-testid="carousel-counter"
                                className="font-grotesk text-[11px] uppercase tracking-[0.35em] text-ink2"
                            >
                                <span className="text-arcblue">
                                    {String(idx + 1).padStart(2, "0")}
                                </span>{" "}
                                — {String(n).padStart(2, "0")}
                            </span>
                        </div>
                    </div>

                    <Peek a={next} side="next" onClick={() => go(1)} label={p.photoLabel} />
                </div>
            </div>
        </section>
    );
};

export default Prueba;

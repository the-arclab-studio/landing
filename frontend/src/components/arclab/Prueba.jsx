import { Reveal } from "./Reveal";
import { Eyebrow, Headline } from "./Bits";
import { useLang } from "./LangContext";

const Corner = ({ className }) => (
    <span
        aria-hidden="true"
        className={`pointer-events-none absolute z-10 h-5 w-5 border-arcblue ${className}`}
    />
);

const PhotoSlot = ({ label, idx, img, alt }) => (
    <div
        data-testid={`testimonial-photo-slot-${idx}`}
        className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-bone"
    >
        <Corner className="left-2.5 top-2.5 border-l-2 border-t-2" />
        <Corner className="right-2.5 top-2.5 border-r-2 border-t-2" />
        <Corner className="bottom-2.5 left-2.5 border-b-2 border-l-2" />
        <Corner className="bottom-2.5 right-2.5 border-b-2 border-r-2" />
        {img ? (
            <img
                src={img}
                alt={alt}
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

const Prueba = () => {
    const { t } = useLang();
    const p = t.prueba;

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

                <div className="mt-14 grid gap-5 md:grid-cols-3">
                    {p.athletes.map((a, i) => (
                        <Reveal key={i} delay={i * 0.12} className="h-full">
                            <figure
                                data-testid={`testimonial-card-${i + 1}`}
                                className="card-soft flex h-full flex-col bg-white p-6"
                            >
                                <PhotoSlot
                                    label={p.photoLabel}
                                    idx={i + 1}
                                    img={a.img}
                                    alt={a.meta}
                                />
                                <blockquote className="mt-6 flex-1 font-playfair text-xl italic leading-relaxed text-ink">
                                    “{a.quote || p.quote}”
                                </blockquote>
                                <figcaption className="mt-6 font-grotesk text-[10px] font-medium uppercase tracking-[0.25em] text-ink2">
                                    {a.meta}
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

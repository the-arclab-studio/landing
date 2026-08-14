import { Reveal } from "./Reveal";
import { Eyebrow, Headline } from "./Bits";
import { useLang } from "./LangContext";

const Enfoque = () => {
    const { t } = useLang();
    const e = t.enfoque;
    return (
        <section
            id="enfoque"
            data-testid="enfoque-section"
            className="scroll-mt-24 px-6 py-24 sm:py-32"
        >
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <Eyebrow>{e.eyebrow}</Eyebrow>
                    <Headline
                        className="mt-6 max-w-4xl text-[11vw] sm:text-6xl lg:text-7xl"
                        pre={e.titlePre}
                        em={e.titleEm}
                    />
                </Reveal>

                <div className="mt-16 grid gap-12 sm:mt-24 md:grid-cols-3 md:gap-8">
                    {e.steps.map((s, i) => (
                        <Reveal
                            key={s.n}
                            delay={i * 0.12}
                            className={i === 1 ? "md:mt-16" : i === 2 ? "md:mt-32" : ""}
                        >
                            <div
                                data-testid={`enfoque-step-${s.n}`}
                                className="relative border-l-2 border-line pl-6 md:border-l-0 md:border-t-2 md:pl-0 md:pt-8"
                            >
                                <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -top-8 right-0 select-none font-playfair text-[7rem] italic leading-none text-arcblue/10 md:-top-12 md:text-[9rem]"
                                >
                                    {s.n}
                                </span>
                                <p className="relative font-playfair text-5xl italic text-arcblue md:text-6xl">
                                    {s.n}
                                </p>
                                <h3 className="mt-4 font-grotesk text-2xl font-bold lowercase tracking-tight text-ink">
                                    {s.title}
                                </h3>
                                <p className="mt-3 max-w-sm text-base leading-relaxed text-ink2">
                                    {s.text}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Enfoque;

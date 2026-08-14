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
            className="scroll-mt-24 px-6 py-28"
        >
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <Eyebrow>{e.eyebrow}</Eyebrow>
                    <Headline
                        className="mt-6 max-w-3xl"
                        pre={e.titlePre}
                        em={e.titleEm}
                    />
                </Reveal>
                <div className="mt-16 grid gap-12 md:grid-cols-3">
                    {e.steps.map((s, i) => (
                        <Reveal key={s.n} delay={i * 0.12}>
                            <div
                                data-testid={`enfoque-step-${s.n}`}
                                className="border-t border-line pt-6"
                            >
                                <p className="font-playfair text-5xl italic text-arcblue">
                                    {s.n}
                                </p>
                                <h3 className="mt-5 font-grotesk text-xl font-bold lowercase tracking-tight text-ink">
                                    {s.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-ink2">
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

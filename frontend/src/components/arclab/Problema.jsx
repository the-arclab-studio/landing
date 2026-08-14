import { Reveal } from "./Reveal";
import { Headline } from "./Bits";
import { useLang } from "./LangContext";

const Problema = () => {
    const { t } = useLang();
    const p = t.problema;
    return (
        <section data-testid="problema-section" className="bg-bone px-6 py-28">
            <div className="mx-auto max-w-4xl">
                <Reveal>
                    <Headline pre={p.titlePre} em={p.titleEm} />
                </Reveal>
                <div className="mt-14 space-y-6">
                    {p.lines.map((l, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <p
                                data-testid={`problema-line-${i}`}
                                className="flex gap-4 text-base leading-relaxed text-ink sm:text-lg"
                            >
                                <span
                                    aria-hidden="true"
                                    className="font-grotesk font-bold text-arcblue"
                                >
                                    —
                                </span>
                                {l}
                            </p>
                        </Reveal>
                    ))}
                </div>
                <Reveal delay={0.2}>
                    <p className="mt-16 font-playfair text-2xl italic leading-snug text-ink sm:text-3xl">
                        {p.closePre}{" "}
                        <span className="text-arcblue">{p.closeEm}</span>
                    </p>
                </Reveal>
            </div>
        </section>
    );
};

export default Problema;

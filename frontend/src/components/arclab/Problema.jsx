import { Reveal } from "./Reveal";
import { Headline } from "./Bits";
import { useLang } from "./LangContext";

const Problema = () => {
    const { t } = useLang();
    const p = t.problema;
    return (
        <section
            data-testid="problema-section"
            className="bg-bone px-6 py-24 sm:py-32"
        >
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <Headline
                        pre={p.titlePre}
                        em={p.titleEm}
                        className="max-w-4xl text-[11vw] sm:text-6xl lg:text-7xl"
                    />
                </Reveal>

                <div className="mt-14 sm:mt-20">
                    {p.lines.map((l, i) => (
                        <Reveal key={i} delay={i * 0.12}>
                            <p
                                data-testid={`problema-line-${i}`}
                                className={`flex items-baseline gap-5 border-t border-line py-7 font-grotesk text-xl font-medium leading-snug text-ink sm:py-9 sm:text-3xl ${
                                    i % 2 === 1 ? "md:pl-24" : ""
                                }`}
                            >
                                <span
                                    aria-hidden="true"
                                    className="shrink-0 font-playfair text-3xl italic text-arcblue sm:text-5xl"
                                >
                                    —
                                </span>
                                {l}
                            </p>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.15}>
                    <p className="mt-14 font-playfair text-3xl italic leading-tight text-ink sm:mt-20 sm:text-5xl">
                        {p.closePre}{" "}
                        <span className="text-arcblue">{p.closeEm}</span>
                    </p>
                </Reveal>
            </div>
        </section>
    );
};

export default Problema;

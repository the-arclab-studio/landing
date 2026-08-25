import { Reveal } from "./Reveal";
import { Container, Section } from "./Layout";
import { SideNum } from "./Bits";
import { useLang } from "./LangContext";

const Solucion = () => {
    const { t } = useLang();
    const s = t.solucion;
    return (
        <Section
            id="solucion"
            data-testid="solucion-section"
            className="relative scroll-mt-24 overflow-hidden"
        >
            <SideNum n="04" />
            <Container className="lg:mx-0 lg:max-w-none lg:px-0">
                <div className="lg:flex lg:items-start lg:justify-between">
                    {/* ZONA ESQUERDA — 6vw a 40vw (folga de 2vw ate a faixa) */}
                    <Reveal className="lg:ml-[6vw] lg:w-[34vw]">
                        <p className="flex items-center gap-3 font-grotesk text-[11px] font-medium uppercase tracking-[0.3em] text-ink2">
                            <span
                                aria-hidden="true"
                                className="h-2 w-2 shrink-0 rounded-full bg-arcblue"
                            />
                            {s.eyebrow}
                        </p>
                        <h2 className="mt-6 font-anton text-4xl uppercase leading-[0.85] text-ink sm:text-5xl lg:text-[clamp(3rem,5vw,6.5rem)]">
                            {s.titleLines.map((l) => (
                                <span key={l} className="block">
                                    {l}
                                </span>
                            ))}
                        </h2>
                        <span
                            aria-hidden="true"
                            className="mt-8 block h-0.5 w-8 bg-arcblue"
                        />
                        <div
                            data-testid="solucion-lines"
                            className="mt-8 space-y-4 font-inter text-base leading-relaxed text-ink2"
                        >
                            {s.lines.map((l) => (
                                <p key={l}>{l}</p>
                            ))}
                        </div>
                    </Reveal>

                    {/* ZONA DIREITA — 60vw a 94vw */}
                    <div className="mt-12 lg:mr-[6vw] lg:mt-0 lg:w-[34vw]">
                        {s.items.map((item, i) => (
                            <Reveal key={i} delay={i * 0.08}>
                                <div
                                    data-testid={`solucion-item-${i + 1}`}
                                    className="py-6 first:pt-0 last:pb-0"
                                >
                                    <h3 className="font-anton text-3xl uppercase leading-[0.9] text-ink lg:text-[clamp(2.5rem,4.5vw,5.5rem)]">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 max-w-prose font-inter text-sm leading-relaxed text-ink2 lg:text-base">
                                        {item.text}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Solucion;

import { Reveal } from "./Reveal";
import { Container, Section } from "./Layout";
import { SideNum } from "./Bits";
import { useLang } from "./LangContext";

const WORD_BASE =
    "font-anton uppercase leading-[0.9] lg:text-[clamp(2.5rem,4.5vw,5.5rem)]";
const CAPTION = "font-inter text-sm leading-relaxed text-ink2 lg:text-base";

const Solucion = () => {
    const { t } = useLang();
    const s = t.solucion;
    const [cuerpo, carga, calendario, juego] = s.items;

    return (
        <Section
            id="solucion"
            data-testid="solucion-section"
            className="relative scroll-mt-24 overflow-hidden lg:pb-56"
        >
            <SideNum n="04" />
            <svg
                aria-hidden="true"
                data-testid="solucion-court-svg"
                viewBox="0 0 600 600"
                fill="none"
                className="pointer-events-none absolute -right-[6vw] top-1/2 z-0 hidden h-[32vw] w-[32vw] -translate-y-1/2 lg:block"
            >
                <g stroke="#1B33DC" strokeWidth="1" opacity="0.2">
                    <path d="M 200 60 A 290 290 0 0 0 200 560" />
                    <circle cx="340" cy="300" r="95" />
                    <rect x="340" y="185" width="130" height="230" />
                    <line
                        x1="60"
                        y1="300"
                        x2="245"
                        y2="300"
                        strokeDasharray="6 6"
                    />
                </g>
            </svg>
            <Container className="lg:mx-0 lg:max-w-none lg:px-0">
                <div className="relative z-10 lg:flex lg:items-start lg:justify-between">
                    {/* ZONA ESQUERDA — 6vw a 40vw (folga de 2vw ate a faixa) */}
                    <div className="lg:relative lg:ml-[6vw] lg:w-[34vw]">
                        <Reveal>
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
                        <span
                            aria-hidden="true"
                            data-testid="solucion-bg-word"
                            className="pointer-events-none hidden select-none whitespace-nowrap font-anton uppercase leading-none lg:absolute lg:-left-[7vw] lg:top-full lg:mt-4 lg:block lg:text-[clamp(6rem,9vw,10rem)] lg:opacity-25"
                            style={{
                                color: "transparent",
                                WebkitTextStroke: "1px #1B33DC",
                            }}
                        >
                            Sistema
                        </span>
                    </div>

                    {/* ZONA DIREITA — 60vw a 94vw */}
                    <div className="mt-12 space-y-8 lg:mr-[6vw] lg:mt-0 lg:flex lg:w-[34vw] lg:flex-col lg:justify-between lg:space-y-0 lg:self-stretch">
                        {/* 1. CUERPO — Anton grande, preto solido, legenda por baixo */}
                        <Reveal>
                            <div data-testid="solucion-item-1">
                                <h3 className={`${WORD_BASE} text-3xl text-ink`}>
                                    {cuerpo.title}
                                </h3>
                                <p className={`mt-2 max-w-prose ${CAPTION}`}>
                                    {cuerpo.text}
                                </p>
                            </div>
                        </Reveal>

                        {/* 2. CARGA — so contorno azul, legenda a direita com traco */}
                        <Reveal delay={0.08}>
                            <div data-testid="solucion-item-2">
                                <div className="lg:flex lg:items-center lg:gap-6">
                                    <h3
                                        className={`${WORD_BASE} text-3xl`}
                                        style={{
                                            color: "transparent",
                                            WebkitTextStroke: "2.5px #1B33DC",
                                        }}
                                    >
                                        {carga.title}
                                    </h3>
                                    <span className="mt-2 flex items-center gap-3 lg:mt-0">
                                        <span
                                            aria-hidden="true"
                                            className="hidden h-0.5 w-8 shrink-0 bg-arcblue lg:block"
                                        />
                                        <p className={CAPTION}>{carga.text}</p>
                                    </span>
                                </div>
                            </div>
                        </Reveal>

                        {/* 3. CALENDARIO — metade do tamanho, tracking largo, linha cinzenta a seguir a legenda */}
                        <Reveal delay={0.16}>
                            <div data-testid="solucion-item-3">
                                <h3 className="font-anton text-xl uppercase leading-[0.9] tracking-[0.15em] text-ink lg:text-[clamp(1.25rem,2.25vw,2.75rem)]">
                                    {calendario.title}
                                </h3>
                                <div className="mt-2 flex items-center gap-6">
                                    <p className={`shrink-0 ${CAPTION}`}>
                                        {calendario.text}
                                    </p>
                                    <span
                                        aria-hidden="true"
                                        className="h-px flex-1 bg-line"
                                    />
                                </div>
                            </div>
                        </Reveal>

                        {/* 4. JUEGO — azul solido, tamanho do CUERPO, legenda a direita com traco */}
                        <Reveal delay={0.24}>
                            <div data-testid="solucion-item-4">
                                <div className="lg:flex lg:items-center lg:gap-6">
                                    <h3
                                        className={`${WORD_BASE} text-3xl text-arcblue`}
                                    >
                                        {juego.title}
                                    </h3>
                                    <span
                                        aria-hidden="true"
                                        className="hidden h-0.5 w-8 shrink-0 bg-arcblue lg:block"
                                    />
                                    <p className={`mt-2 lg:mt-0 ${CAPTION}`}>
                                        {juego.text}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Solucion;

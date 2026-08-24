import { Reveal } from "./Reveal";
import { Container, Section } from "./Layout";
import Arc from "./Arc";
import { useLang } from "./LangContext";
import { waLink } from "./data";

const Contacto = () => {
    const { lang, t } = useLang();
    const e = t.empezar;

    return (
        <Section
            id="contacto"
            data-testid="contacto-section"
            className="scroll-mt-24 bg-bone"
        >
            <Container>
                <Reveal>
                    <div
                        data-testid="contacto-block"
                        className="relative overflow-hidden rounded-[24px] bg-[#151515] p-6 md:p-12 lg:p-16"
                    >
                        <Arc
                            className="absolute -right-16 -top-10 h-64 w-[26rem] -scale-y-100"
                            delay={0.3}
                        />
                        <div className="relative z-10">
                            <h2 className="font-grotesk text-4xl font-bold lowercase leading-tight tracking-tight text-white sm:text-5xl">
                                {e.titlePre}{" "}
                                <span className="text-arcblue">{e.titleEm}</span>
                            </h2>
                            <p className="mt-4 max-w-prose text-base leading-relaxed text-white/60">
                                {e.sub}
                            </p>

                            <div
                                data-testid="contacto-card"
                                className="mt-12 flex flex-col gap-8 rounded-[16px] bg-[#1F1F1F] p-6 md:p-8 lg:flex-row lg:items-center lg:justify-between"
                            >
                                <div>
                                    <p className="font-grotesk text-[10px] font-medium uppercase tracking-[0.3em] text-arcblue">
                                        {e.whatsapp}
                                    </p>
                                    <a
                                        href={waLink(lang, "generic")}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-testid="contact-whatsapp"
                                        className="mt-3 inline-block font-grotesk text-3xl font-bold tracking-tight text-white transition-colors duration-200 hover:text-arcblue"
                                    >
                                        {e.phone}
                                    </a>
                                </div>
                                <div className="lg:text-right">
                                    <div className="flex gap-2 lg:justify-end">
                                        {["ES", "PT", "US"].map((f) => (
                                            <span
                                                key={f}
                                                className="rounded-full px-3 py-1 font-grotesk text-xs font-medium tracking-[0.15em] text-white/80 ring-1 ring-white/20"
                                            >
                                                {f}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="mt-4 text-xs text-white/50">
                                        {e.langsNote}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>

                <Reveal className="mt-12">
                    <p
                        data-testid="legal-text"
                        className="max-w-2xl text-xs leading-relaxed text-ink2"
                    >
                        {e.legal}
                    </p>
                </Reveal>
            </Container>
        </Section>
    );
};

export default Contacto;

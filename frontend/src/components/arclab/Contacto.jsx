import { Instagram, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { Container, Section } from "./Layout";
import { Eyebrow } from "./Bits";
import Arc from "./Arc";
import { useLang } from "./LangContext";
import { waLink } from "./data";

const Contacto = () => {
    const { t } = useLang();
    const e = t.empezar;
    const countries = [
        {
            id: "espana",
            flag: "🇪🇸",
            name: e.countries.es,
            wa: waLink("es", "generic"),
            phone: "+34 698 136 937",
            ig: "@uxisureda",
        },
        {
            id: "portugal",
            flag: "🇵🇹",
            name: e.countries.pt,
            wa: waLink("pt", "generic"),
            phone: "+351 969 291 245",
            ig: "@gmorais.24",
        },
    ];

    return (
        <Section
            id="contacto"
            data-testid="contacto-section"
            className="scroll-mt-24 bg-bone"
        >
            <Container>
                <Reveal>
                    <Arc className="mx-auto mb-16 h-16 w-full max-w-md" />
                    <Eyebrow>{e.eyebrow}</Eyebrow>
                    <h2 className="mt-6 font-grotesk text-4xl font-bold lowercase leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl lg:text-6xl">
                        {e.titlePre}{" "}
                        <em className="font-playfair italic text-arcblue">
                            {e.titleEm}
                        </em>{" "}
                        {e.titlePost}
                    </h2>
                    <p className="mt-6 max-w-lg text-base text-ink2 sm:text-lg">
                        {e.subPre}{" "}
                        <strong className="font-semibold text-ink">
                            {e.subStrong}
                        </strong>
                    </p>
                </Reveal>

                <div className="mt-14 grid gap-5 sm:grid-cols-2">
                    {countries.map((c, i) => (
                        <Reveal key={c.id} delay={i * 0.12}>
                            <article
                                data-testid={`contact-card-${c.id}`}
                                className="card-soft bg-white p-10"
                            >
                                <p className="font-grotesk text-sm font-bold uppercase tracking-[0.3em] text-ink">
                                    {c.flag} {c.name}
                                </p>
                                <div className="mt-7 space-y-4">
                                    <a
                                        href={c.wa}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-testid={`contact-whatsapp-${c.id}`}
                                        className="btn-blue w-full justify-center"
                                    >
                                        <MessageCircle className="h-4 w-4" />
                                        WhatsApp {c.phone}
                                    </a>
                                    <a
                                        href={`https://instagram.com/${c.ig.slice(1)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-testid={`contact-instagram-${c.id}`}
                                        className="flex items-center justify-center gap-2 font-grotesk text-sm font-medium uppercase tracking-[0.15em] text-ink transition-colors duration-300 hover:text-arcblue"
                                    >
                                        <Instagram className="h-4 w-4 text-arcblue" />
                                        {c.ig}
                                    </a>
                                    <p className="pt-2 text-center text-sm text-ink2">
                                        {e.responsePre}{" "}
                                        <strong className="font-semibold text-ink">
                                            {e.responseStrong}
                                        </strong>
                                    </p>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>

                <Reveal className="mt-14">
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

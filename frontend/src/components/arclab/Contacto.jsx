import { Instagram, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import SectionFoot from "./SectionFoot";
import { useLang } from "./LangContext";
import { waES, waPT } from "./data";

const COUNTRIES = [
    {
        id: "espana",
        flag: "🇪🇸",
        name: { es: "España", pt: "Espanha" },
        wa: waES,
        phone: "+34 698 136 937",
        ig: "@uxisureda",
    },
    {
        id: "portugal",
        flag: "🇵🇹",
        name: { es: "Portugal", pt: "Portugal" },
        wa: waPT,
        phone: "+351 969 291 245",
        ig: "@gmorais.24",
    },
];

const Contacto = () => {
    const { lang, t } = useLang();
    return (
    <section
        id="contacto"
        data-testid="contacto-section"
        className="scroll-mt-24 px-6 py-28"
    >
        <div className="mx-auto max-w-6xl">
            <Reveal>
                <h2 className="font-grotesk text-4xl font-bold lowercase leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                    {t.contacto.titlePre}{" "}
                    <em className="font-playfair italic text-arcblue">
                        {t.contacto.titleEm}
                    </em>
                </h2>
                <p className="mt-6 max-w-lg text-base text-ink2 sm:text-lg">
                    {t.contacto.sub}
                </p>
            </Reveal>

            <div className="mt-14 grid gap-5 sm:grid-cols-2">
                {COUNTRIES.map((c, i) => (
                    <Reveal key={c.id} delay={i * 0.12}>
                        <article
                            data-testid={`contact-card-${c.id}`}
                            className="card-soft p-10"
                        >
                            <p className="font-grotesk text-sm font-bold uppercase tracking-[0.3em] text-ink">
                                {c.flag} {c.name[lang]}
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
                    {t.contacto.legal}
                </p>
            </Reveal>

            <SectionFoot num="04" />
        </div>
    </section>
    );
};

export default Contacto;
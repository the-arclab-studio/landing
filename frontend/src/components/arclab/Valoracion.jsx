import { Video, Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Container, Section } from "./Layout";
import { Eyebrow, Headline, SideNum } from "./Bits";
import { useLang } from "./LangContext";
import { waLink } from "./data";

const FORMAT_ICONS = [Video, Phone, MessageCircle];

const Corner = ({ className }) => (
    <span
        aria-hidden="true"
        className={`pointer-events-none absolute z-10 h-6 w-6 border-arcblue ${className}`}
    />
);

const Valoracion = () => {
    const { lang, t } = useLang();
    const v = t.valoracion;

    return (
        <Section
            id="valoracion"
            data-testid="valoracion-section"
            className="relative scroll-mt-24 bg-bone"
        >
            <SideNum n="06" />
            <Container>
                <Reveal>
                    <div className="relative">
                        <Corner className="left-0 top-0 border-l-2 border-t-2" />
                        <Corner className="right-0 top-0 border-r-2 border-t-2" />
                        <Corner className="bottom-0 left-0 border-b-2 border-l-2" />
                        <Corner className="bottom-0 right-0 border-b-2 border-r-2" />

                        <div className="p-6 md:p-12 lg:p-16">
                            <Eyebrow>{v.eyebrow}</Eyebrow>
                            <Headline
                                className="mt-6"
                                pre={v.titlePre}
                                em={v.titleEm}
                            />
                            <p className="mt-4 max-w-prose text-base leading-relaxed text-ink2">
                                {v.text}
                            </p>

                            <ul
                                data-testid="valoracion-formats"
                                className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8"
                            >
                                {v.formats.map((f, i) => {
                                    const Icon = FORMAT_ICONS[i];
                                    return (
                                        <li
                                            key={f}
                                            data-testid={`valoracion-format-${i}`}
                                            className="flex items-center gap-3"
                                        >
                                            <Icon
                                                className="h-4 w-4 shrink-0 text-arcblue"
                                                strokeWidth={2}
                                            />
                                            <span className="font-grotesk text-sm font-medium uppercase tracking-[0.2em] text-ink">
                                                {f}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>

                            <a
                                href={waLink(lang, "valoracion")}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="valoracion-cta"
                                className="btn-blue mt-8 inline-flex"
                            >
                                {v.cta}
                                <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                            </a>
                        </div>
                    </div>
                </Reveal>
            </Container>
        </Section>
    );
};

export default Valoracion;

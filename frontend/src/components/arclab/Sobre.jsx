import { Reveal } from "./Reveal";
import { Container, Section } from "./Layout";
import { useLang } from "./LangContext";

const Person = ({ p, i }) => (
    <article
        data-testid={`sobre-person-${i + 1}`}
        className="flex flex-col overflow-hidden rounded-[18px] bg-bone sm:flex-row"
    >
        <div
            data-testid={`sobre-photo-${i + 1}`}
            className="relative h-52 w-full shrink-0 bg-line sm:h-auto sm:w-[30%] sm:self-stretch"
        >
            <div className="flex h-full w-full items-center justify-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-arcblue" />
                <span className="font-grotesk text-[10px] font-medium uppercase tracking-[0.3em] text-ink2">
                    Foto
                </span>
            </div>
        </div>
        <div className="flex-1 p-6 sm:p-8">
            <h3 className="font-grotesk text-[22px] font-bold tracking-tight text-ink">
                {p.name}
            </h3>
            <p className="mt-2 font-grotesk text-[11px] font-medium uppercase tracking-[0.2em] text-arcblue">
                {p.role}
            </p>
            <ul className="mt-6 space-y-3">
                {p.credentials.map((c) => (
                    <li
                        key={c}
                        className="flex items-start gap-3 text-sm leading-relaxed text-ink2"
                    >
                        <span
                            aria-hidden="true"
                            className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-arcblue"
                        />
                        {c}
                    </li>
                ))}
            </ul>
        </div>
    </article>
);

const Sobre = () => {
    const { t } = useLang();
    const s = t.sobre;
    return (
        <Section
            id="nosotros"
            data-testid="sobre-section"
            className="scroll-mt-24"
        >
            <Container>
                <Reveal>
                    <p
                        data-testid="sobre-overline"
                        className="text-right font-grotesk text-[11px] font-medium uppercase tracking-[0.3em] text-ink2"
                    >
                        {s.eyebrow}
                    </p>
                    <h2 className="mt-6 font-grotesk text-4xl font-bold lowercase leading-tight tracking-tight text-ink sm:text-5xl">
                        {s.titlePre}
                        <br />
                        <span className="text-arcblue">{s.titleEm}</span>
                    </h2>
                </Reveal>

                <div className="mt-12 space-y-6">
                    {s.people.map((p, i) => (
                        <Reveal key={p.name} delay={i * 0.12}>
                            <Person p={p} i={i} />
                        </Reveal>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default Sobre;

import { Reveal } from "./Reveal";
import SectionFoot from "./SectionFoot";

const BLOCKS = [
    {
        id: "nutricion",
        tag: "Extra · Nutrición",
        title: "Súmale la nutrición",
        text: "Acompañamiento nutricional como añadido (+35€/mes) en Basic y Normal. Hábitos y educación — no sustituye a un nutricionista.",
    },
    {
        id: "pack",
        tag: "Pack Temporada",
        title: "Toda la temporada",
        text: "Paga la temporada completa por adelantado y ahorra. Continuidad desde el verano, sin cuota de valoración.",
    },
];

const Extras = () => (
    <section
        id="extras"
        data-testid="extras-section"
        className="scroll-mt-24 px-6 py-28"
    >
        <div className="mx-auto max-w-6xl">
            <Reveal>
                <p className="eyebrow">— Extras & Continuidad</p>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
                {BLOCKS.map((b, i) => (
                    <Reveal key={b.id} delay={i * 0.12}>
                        <article
                            data-testid={`extra-card-${b.id}`}
                            className="card-soft h-full p-10"
                        >
                            <p className="eyebrow !tracking-[0.25em]">{b.tag}</p>
                            <h3 className="mt-5 font-grotesk text-3xl font-bold lowercase tracking-tight text-ink">
                                {b.title}
                            </h3>
                            <p className="mt-4 text-base leading-relaxed text-ink2">
                                {b.text}
                            </p>
                        </article>
                    </Reveal>
                ))}
            </div>
            <SectionFoot num="03" />
        </div>
    </section>
);

export default Extras;

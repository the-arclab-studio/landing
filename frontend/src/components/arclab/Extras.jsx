import { Reveal } from "./Reveal";
import SectionFoot from "./SectionFoot";
import { useLang } from "./LangContext";

const Extras = () => {
    const { t } = useLang();
    return (
    <section
        id="extras"
        data-testid="extras-section"
        className="scroll-mt-24 px-6 py-28"
    >
        <div className="mx-auto max-w-6xl">
            <Reveal>
                <p className="eyebrow">{t.extras.eyebrow}</p>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
                {t.extras.blocks.map((b, i) => (
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
};

export default Extras;

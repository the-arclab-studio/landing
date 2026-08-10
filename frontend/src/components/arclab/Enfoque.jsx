import { Reveal } from "./Reveal";
import SectionFoot from "./SectionFoot";
import Arc from "./Arc";
import { useLang } from "./LangContext";

const Enfoque = () => {
    const { t } = useLang();
    const e = t.enfoque;
    return (
    <section
        id="enfoque"
        data-testid="enfoque-section"
        className="scroll-mt-24 px-6 py-28"
    >
        <div className="mx-auto max-w-6xl">
            <Reveal>
                <p className="eyebrow">{e.eyebrow}</p>
                <h2 className="mt-6 max-w-3xl font-grotesk text-4xl font-bold lowercase leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                    {e.title1}{" "}
                    <em className="font-playfair italic text-arcblue">
                        {e.titleEm}
                    </em>
                </h2>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-ink2 sm:text-lg">
                    {e.paraPre}{" "}
                    <strong className="font-semibold text-ink">
                        {e.paraStrong}
                    </strong>{" "}
                    {e.paraPost}
                </p>
            </Reveal>

            <div className="mt-16 grid gap-5 md:grid-cols-3">
                {e.cards.map((c, i) => (
                    <Reveal key={c.n} delay={i * 0.12}>
                        <article
                            data-testid={`enfoque-card-${c.n}`}
                            className="card-soft h-full p-8"
                        >
                            <span className="font-playfair text-4xl text-arcblue">
                                {c.n}
                            </span>
                            <h3 className="mt-6 font-grotesk text-xl font-bold lowercase tracking-tight text-ink">
                                {c.title}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-ink2">
                                {c.text}
                            </p>
                        </article>
                    </Reveal>
                ))}
            </div>

            <Reveal className="mt-20">
                <Arc className="mx-auto h-16 w-full max-w-md" />
                <h3 className="mt-10 font-grotesk text-3xl font-bold lowercase tracking-tight text-ink sm:text-4xl">
                    {e.closeTitle}{" "}
                    <em className="font-playfair italic text-arcblue">
                        {e.closeEm}
                    </em>
                </h3>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-ink2">
                    {e.closePre}{" "}
                    <strong className="font-semibold text-ink">
                        {e.closeStrong}
                    </strong>{" "}
                    {e.closePost}
                </p>
            </Reveal>

            <SectionFoot num="01" />
        </div>
    </section>
    );
};

export default Enfoque;

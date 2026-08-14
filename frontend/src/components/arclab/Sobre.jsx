import { Instagram } from "lucide-react";
import { Reveal } from "./Reveal";
import { Eyebrow, Headline } from "./Bits";
import { useLang } from "./LangContext";

const Corner = ({ className }) => (
    <span
        aria-hidden="true"
        className={`pointer-events-none absolute z-10 h-6 w-6 border-arcblue ${className}`}
    />
);

const Corners = () => (
    <>
        <Corner className="left-3 top-3 border-l-2 border-t-2" />
        <Corner className="right-3 top-3 border-r-2 border-t-2" />
        <Corner className="bottom-3 left-3 border-b-2 border-l-2" />
        <Corner className="bottom-3 right-3 border-b-2 border-r-2" />
    </>
);

const Sobre = () => {
    const { t } = useLang();
    const s = t.sobre;
    return (
        <section
            id="nosotros"
            data-testid="sobre-section"
            className="scroll-mt-24 px-6 py-24 sm:py-32"
        >
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <Eyebrow>{s.eyebrow}</Eyebrow>
                    <Headline
                        className="mt-6 max-w-4xl text-[11vw] sm:text-6xl lg:text-7xl"
                        pre={s.titlePre}
                        em={s.titleEm}
                    />
                </Reveal>

                <Reveal className="mt-14">
                    <figure
                        data-testid="team-photo-slot"
                        className="relative aspect-[16/9] w-full overflow-hidden rounded-[18px] bg-bone sm:aspect-[21/9]"
                    >
                        <Corners />
                        <div className="flex h-full flex-col items-center justify-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-arcblue" />
                            <span className="font-grotesk text-[10px] font-medium uppercase tracking-[0.3em] text-ink2">
                                {s.photoLabel}
                            </span>
                        </div>
                    </figure>
                </Reveal>

                <div className="mt-10 grid gap-5 sm:grid-cols-2">
                    {s.people.map((p, i) => (
                        <Reveal key={i} delay={i * 0.12}>
                            <article
                                data-testid={`sobre-person-${i + 1}`}
                                className="card-soft flex h-full items-center gap-6 p-7"
                            >
                                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-bone">
                                    <div className="flex h-full items-center justify-center">
                                        <span className="h-1.5 w-1.5 rounded-full bg-arcblue" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-grotesk text-xl font-bold lowercase tracking-tight text-ink">
                                        {p.handle}
                                    </h3>
                                    <p className="mt-1 font-grotesk text-[10px] font-medium uppercase tracking-[0.25em] text-ink2">
                                        {p.zone}
                                    </p>
                                    <p className="mt-2 text-sm leading-relaxed text-ink2">
                                        {p.bio}
                                    </p>
                                    <a
                                        href={`https://instagram.com/${p.handle.slice(1)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-testid={`sobre-instagram-${i + 1}`}
                                        className="mt-3 inline-flex items-center gap-2 font-grotesk text-xs font-medium uppercase tracking-[0.15em] text-ink transition-colors duration-300 hover:text-arcblue"
                                    >
                                        <Instagram className="h-3.5 w-3.5 text-arcblue" />
                                        {p.handle}
                                    </a>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sobre;

import { Reveal } from "./Reveal";
import { Eyebrow } from "./Bits";
import { useLang } from "./LangContext";

const Corner = ({ className }) => (
    <span
        aria-hidden="true"
        className={`pointer-events-none absolute z-10 h-6 w-6 border-arcblue ${className}`}
    />
);

const Problema = () => {
    const { t } = useLang();
    const p = t.problema;
    return (
        <section
            data-testid="problema-section"
            className="bg-bone py-24 sm:py-32"
        >
            <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-16">
                <div>
                    <Reveal>
                        <Eyebrow>{p.label}</Eyebrow>
                        <h2 className="mt-6 font-grotesk text-[11vw] font-bold uppercase leading-[0.95] tracking-tighter text-ink sm:text-6xl lg:text-7xl">
                            {p.titleL1}
                            <br />
                            {p.titleL2}{" "}
                            <em className="font-playfair lowercase italic text-arcblue">
                                {p.titleEm}
                            </em>
                        </h2>
                    </Reveal>
                    <Reveal className="mt-12">
                        <figure
                            data-testid="problema-photo-slot"
                            className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] bg-white md:-ml-24 md:w-[calc(100%+6rem)] xl:-ml-40 xl:w-[calc(100%+10rem)]"
                        >
                            <Corner className="left-3 top-3 border-l-2 border-t-2 md:left-28 xl:left-44" />
                            <Corner className="right-3 top-3 border-r-2 border-t-2" />
                            <Corner className="bottom-3 left-3 border-b-2 border-l-2 md:left-28 xl:left-44" />
                            <Corner className="bottom-3 right-3 border-b-2 border-r-2" />
                            <div className="flex h-full flex-col items-center justify-center gap-3">
                                <span className="h-1.5 w-1.5 rounded-full bg-arcblue" />
                                <span className="font-grotesk text-[10px] font-medium uppercase tracking-[0.3em] text-ink2">
                                    {p.photoLabel}
                                </span>
                            </div>
                        </figure>
                    </Reveal>
                </div>

                <div className="flex flex-col justify-center">
                    <div className="space-y-10">
                        {p.lines.map((l, i) => (
                            <Reveal key={i} delay={i * 0.12}>
                                <p
                                    data-testid={`problema-line-${i}`}
                                    className="border-t border-arcblue pt-5 text-lg leading-relaxed text-ink sm:text-xl"
                                >
                                    {l}
                                </p>
                            </Reveal>
                        ))}
                    </div>
                    <Reveal delay={0.2}>
                        <p className="mt-14 font-playfair text-2xl italic leading-tight text-ink sm:text-3xl">
                            {p.closePre}{" "}
                            <span className="text-arcblue">{p.closeEm}</span>
                        </p>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Problema;

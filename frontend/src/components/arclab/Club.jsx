import { Reveal } from "./Reveal";
import { Eyebrow } from "./Bits";
import { useLang } from "./LangContext";

const Corner = ({ className }) => (
    <span
        aria-hidden="true"
        className={`pointer-events-none absolute z-10 h-6 w-6 border-arcblue ${className}`}
    />
);

const Club = () => {
    const { t } = useLang();
    const c = t.club;
    return (
        <section
            data-testid="club-section"
            className="relative overflow-hidden bg-ink py-28 sm:py-36"
        >
            <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
                <Reveal>
                    <Eyebrow dark>{c.eyebrow}</Eyebrow>
                    <h2 className="mt-6 font-grotesk text-[11vw] font-bold uppercase leading-[0.95] tracking-tighter text-white sm:text-6xl lg:text-6xl">
                        {c.titleL1}
                        <br />
                        {c.titleL2}
                        <br />
                        {c.titleL3}
                        <br />
                        {c.titleL4}{" "}
                        <em className="font-playfair lowercase italic text-[#9AA2EE]">
                            {c.titleEm}
                        </em>
                    </h2>
                    <p className="mt-10 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
                        {c.paraPre}{" "}
                        <strong className="font-semibold text-white">
                            {c.paraStrong}
                        </strong>
                    </p>
                </Reveal>

                <Reveal delay={0.15}>
                    <figure
                        data-testid="club-photo-slot"
                        className="relative aspect-[4/5] w-full overflow-hidden rounded-[18px] bg-white/5 sm:aspect-square lg:-mr-24 lg:w-[calc(100%+6rem)]"
                    >
                        <Corner className="left-3 top-3 border-l-2 border-t-2" />
                        <Corner className="right-3 top-3 border-r-2 border-t-2 lg:right-28" />
                        <Corner className="bottom-3 left-3 border-b-2 border-l-2" />
                        <Corner className="bottom-3 right-3 border-b-2 border-r-2 lg:right-28" />
                        <div className="flex h-full flex-col items-center justify-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#9AA2EE]" />
                            <span className="font-grotesk text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
                                {c.photoLabel}
                            </span>
                        </div>
                    </figure>
                </Reveal>
            </div>
        </section>
    );
};

export default Club;

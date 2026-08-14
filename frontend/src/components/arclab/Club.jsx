import { Reveal } from "./Reveal";
import { Eyebrow, Headline } from "./Bits";
import { useLang } from "./LangContext";

const Club = () => {
    const { t } = useLang();
    const c = t.club;
    return (
        <section data-testid="club-section" className="bg-ink px-6 py-28">
            <div className="mx-auto max-w-4xl">
                <Reveal>
                    <Eyebrow dark>{c.eyebrow}</Eyebrow>
                    <Headline
                        dark
                        className="mt-6"
                        pre={c.titlePre}
                        em={c.titleEm}
                    />
                    <p className="mt-10 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
                        {c.paraPre}{" "}
                        <strong className="font-semibold text-white">
                            {c.paraStrong}
                        </strong>
                    </p>
                </Reveal>
            </div>
        </section>
    );
};

export default Club;

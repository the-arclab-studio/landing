import { Reveal } from "./Reveal";
import { Container, Section } from "./Layout";
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
        <Section
            data-testid="club-section"
            className="relative overflow-hidden bg-ink"
        >
            <Container className="relative grid items-center gap-14 lg:grid-cols-2">
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
                        <span className="text-[#9AA2EE]">
                            {c.titleEm}
                        </span>
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
                        <img
                            src="/images/club.jpg"
                            alt="Jugador trabajando solo, de espaldas"
                            className="h-full w-full object-cover grayscale"
                        />
                    </figure>
                </Reveal>
            </Container>
        </Section>
    );
};

export default Club;

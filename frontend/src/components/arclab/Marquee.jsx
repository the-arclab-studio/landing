import { useLang } from "./LangContext";

const Row = ({ items }) => (
    <div className="flex shrink-0 items-center">
        {items.map((txt, i) => (
            <span key={i} className="flex items-center">
                <span className="mx-8 font-grotesk text-sm font-medium uppercase tracking-[0.4em] text-ink sm:mx-12">
                    {txt}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-arcblue" />
            </span>
        ))}
    </div>
);

const Marquee = () => {
    const { t } = useLang();
    return (
        <div
            data-testid="editorial-marquee"
            className="overflow-hidden border-y border-line py-5"
            aria-hidden="true"
        >
            <div className="marquee-track flex w-max">
                <Row items={t.marquee} />
                <Row items={t.marquee} />
                <Row items={t.marquee} />
                <Row items={t.marquee} />
            </div>
        </div>
    );
};

export default Marquee;

const ITEMS = [
    "in-season",
    "mantener",
    "gestionar",
    "rendir",
    "arc.lab · performance",
];

const Row = () => (
    <div className="flex shrink-0 items-center">
        {ITEMS.map((t, i) => (
            <span key={i} className="flex items-center">
                <span className="mx-8 font-grotesk text-sm font-medium uppercase tracking-[0.4em] text-ink sm:mx-12">
                    {t}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-arcblue" />
            </span>
        ))}
    </div>
);

const Marquee = () => (
    <div
        data-testid="editorial-marquee"
        className="overflow-hidden border-y border-line py-5"
        aria-hidden="true"
    >
        <div className="marquee-track flex w-max">
            <Row />
            <Row />
            <Row />
            <Row />
        </div>
    </div>
);

export default Marquee;

const SectionFoot = ({ num }) => (
    <div
        data-testid={`section-foot-${num}`}
        className="mt-16 flex items-end justify-between border-t border-line pt-5"
    >
        <span className="font-caveat text-xl text-ink2">
            by uxisureda <span className="text-arcblue">✕</span> arc.lab
        </span>
        <span className="font-grotesk text-[11px] uppercase tracking-[0.35em] text-ink2">
            <span className="text-arcblue">{num}</span> — 04
        </span>
    </div>
);

export default SectionFoot;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, X } from "lucide-react";
import { Reveal } from "./Reveal";
import { SideNum } from "./Bits";
import { useLang } from "./LangContext";
import { waLink } from "./data";

const Cell = ({ v, dark }) => {
    if (v === "✓")
        return (
            <Check
                className={`mx-auto h-4 w-4 ${dark ? "text-[#93A5FF]" : "text-arcblue"}`}
                strokeWidth={2.5}
            />
        );
    return (
        <span className={v === "—" ? (dark ? "text-white/25" : "text-ink2/40") : dark ? "text-white/70" : "text-ink2"}>
            {v}
        </span>
    );
};

const PlanCard = ({ plan, wa }) => {
    const dark = plan.style === "dark";
    const featured = plan.style === "featured";
    return (
        <article
            data-testid={`plan-card-${plan.id}`}
            className={`relative flex h-full flex-col rounded-[18px] p-8 shadow-[0_24px_60px_-32px_rgba(21,21,21,0.16),0_2px_8px_rgba(21,21,21,0.04)] transition-transform duration-500 hover:-translate-y-1 ${
                dark ? "bg-ink text-white" : featured ? "bg-[#EEF0FC] ring-1 ring-arcblue" : "bg-bone"
            }`}
        >
            {featured && (
                <span
                    data-testid="plan-featured-badge"
                    className="absolute -top-3 left-8 rounded-full bg-arcblue px-4 py-1 font-grotesk text-[10px] font-medium uppercase tracking-[0.25em] text-white"
                >
                    {plan.badge}
                </span>
            )}
            <p
                className={`font-grotesk text-[11px] font-medium uppercase tracking-[0.25em] ${
                    dark ? "text-white/50" : "text-ink2"
                }`}
            >
                {plan.tag}
            </p>
            {dark ? (
                <img
                    src="/images/elite.png"
                    alt="elite."
                    data-testid="plan-elite-logo"
                    className="mt-4 h-8 w-auto max-w-full object-contain object-left"
                />
            ) : (
                <h3 className="mt-4 font-grotesk text-3xl font-bold uppercase tracking-tight text-ink">
                    {plan.name}
                </h3>
            )}
            <p className="mt-6">
                <span
                    className={`font-playfair text-5xl italic ${
                        dark ? "text-white" : "text-arcblue"
                    }`}
                >
                    {plan.price}
                </span>
                <span
                    className={`ml-2 font-grotesk text-xs uppercase tracking-[0.15em] ${
                        dark ? "text-white/50" : "text-ink2"
                    }`}
                >
                    {plan.unit}
                </span>
            </p>
            {plan.priceSmall && (
                <p className={`mt-1 text-xs ${dark ? "text-white/50" : "text-ink2"}`}>
                    {plan.priceSmall}
                </p>
            )}
            <p
                className={`mt-3 font-playfair text-base italic ${
                    dark ? "text-white/70" : "text-ink2"
                }`}
            >
                {plan.claim}
            </p>
            <ul
                className={`mt-7 flex-1 space-y-3 border-t pt-7 ${
                    dark ? "border-white/10" : "border-line"
                }`}
            >
                {plan.features.map((f, i) => (
                    <li
                        key={i}
                        className={`flex items-start gap-3 text-sm ${
                            dark ? "text-white/80" : "text-ink"
                        }`}
                    >
                        <Check
                            className={`mt-0.5 h-4 w-4 shrink-0 ${
                                dark ? "text-[#93A5FF]" : "text-arcblue"
                            }`}
                            strokeWidth={2.5}
                        />
                        {f}
                    </li>
                ))}
            </ul>
            <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`plan-whatsapp-${plan.id}`}
                className={
                    dark
                        ? "mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-grotesk text-sm font-medium uppercase tracking-[0.15em] text-ink transition-transform duration-300 hover:-translate-y-0.5"
                        : featured
                          ? "btn-blue mt-8 justify-center"
                          : "btn-outline mt-8 justify-center"
                }
            >
                {featured && <span aria-hidden="true">✆</span>} {plan.cta}
            </a>
        </article>
    );
};

const Planes = () => {
    const { lang, t } = useLang();
    const [open, setOpen] = useState(false);
    const p = t.planes;
    const cols = ["", "Basic", "Pro", "Elite"];

    return (
        <section
            id="planes"
            data-testid="planes-section"
            className="relative scroll-mt-24 px-6 py-28"
        >
            <SideNum n="06" />
            <div className="mx-auto max-w-7xl">
                <Reveal>
                    <p className="flex items-center gap-3 font-grotesk text-[11px] font-medium uppercase tracking-[0.3em] text-ink2">
                        {p.eyebrow}
                        <X className="h-3.5 w-3.5 text-arcblue" strokeWidth={2.5} />
                        {p.eyebrow2}
                    </p>
                    <h2 className="mt-6 font-grotesk text-[11vw] font-bold uppercase leading-[0.92] tracking-tighter text-ink sm:text-6xl lg:text-7xl">
                        {p.titleL1}
                        <br />
                        {p.titleL2}{" "}
                        <span className="text-arcblue">{p.titleEm}</span>
                    </h2>
                    <p className="mt-6 max-w-xl text-lg font-medium text-ink">
                        {p.sub}
                    </p>
                    <p className="mt-8 flex max-w-xl items-start gap-3 text-base text-ink2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-arcblue" />
                        {p.note}
                    </p>
                </Reveal>

                <div className="mt-16 grid items-start gap-5 sm:grid-cols-2 xl:grid-cols-4">
                    {p.cards.map((c, i) => (
                        <Reveal key={c.id} delay={i * 0.1} className="h-full">
                            <PlanCard plan={c} wa={waLink(lang, c.msg)} />
                        </Reveal>
                    ))}
                </div>

                <Reveal className="mt-12">
                    <p className="text-center text-sm text-ink2">
                        {p.after1}{" "}
                        <strong className="font-semibold text-ink">{p.afterB1}</strong>{" "}
                        {p.after2}{" "}
                        <strong className="font-semibold text-ink">{p.afterB2}</strong>{" "}
                        {p.after3}
                    </p>
                </Reveal>

                <div className="mt-10 text-center">
                    <button
                        onClick={() => setOpen((v) => !v)}
                        data-testid="compare-toggle"
                        aria-expanded={open}
                        className="inline-flex items-center gap-2 font-grotesk text-xs font-medium uppercase tracking-[0.25em] text-ink transition-colors duration-300 hover:text-arcblue"
                    >
                        {p.compare.label}
                        <ChevronDown
                            className={`h-4 w-4 text-arcblue transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                        />
                    </button>
                    <AnimatePresence initial={false}>
                        {open && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden"
                            >
                                <div
                                    data-testid="compare-table"
                                    className="mt-8 overflow-x-auto rounded-[18px] border border-line"
                                >
                                    <table className="w-full min-w-[560px] border-collapse text-sm">
                                        <thead>
                                            <tr className="border-b border-line">
                                                {cols.map((c, i) => (
                                                    <th
                                                        key={i}
                                                        className={`p-4 font-grotesk text-[11px] font-medium uppercase tracking-[0.2em] ${
                                                            i === 0
                                                                ? "text-left text-ink2"
                                                                : i === 2
                                                                  ? "bg-[#EEF0FC] text-arcblue"
                                                                  : i === 3
                                                                    ? "bg-ink text-white"
                                                                    : "text-ink"
                                                        }`}
                                                    >
                                                        {c}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {p.compare.rows.map((r, ri) => (
                                                <tr
                                                    key={ri}
                                                    className="border-b border-line last:border-0"
                                                >
                                                    <td className="p-4 text-left text-ink">
                                                        {r[0]}
                                                    </td>
                                                    <td className="p-4 text-center">
                                                        <Cell v={r[1]} />
                                                    </td>
                                                    <td className="bg-[#EEF0FC]/60 p-4 text-center">
                                                        <Cell v={r[2]} />
                                                    </td>
                                                    <td className="bg-ink p-4 text-center">
                                                        <Cell v={r[3]} dark />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <Reveal className="mt-16">
                    <div className="card-soft flex flex-col items-center gap-6 p-10 text-center sm:flex-row sm:justify-between sm:text-left">
                        <p className="max-w-md text-base text-ink2">
                            {p.band.pre}{" "}
                            <strong className="font-semibold text-ink">
                                {p.band.strong}
                            </strong>
                        </p>
                        <a
                            href={waLink(lang, "generic")}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="band-whatsapp-btn"
                            className="btn-blue shrink-0"
                        >
                            <span aria-hidden="true">✆</span> {p.band.cta}
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Planes;

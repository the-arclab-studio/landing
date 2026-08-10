import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import SectionFoot from "./SectionFoot";
import { useLang } from "./LangContext";
import { waES, waPT } from "./data";

const PlanCard = ({ plan, delay, featuredLabel, cta, wa }) => (
    <Reveal delay={delay} className="h-full">
        <article
            data-testid={`plan-card-${plan.id}`}
            className={`card-soft relative flex h-full flex-col p-8 ${
                plan.featured ? "ring-1 ring-arcblue" : ""
            }`}
        >
            {plan.featured && (
                <span
                    data-testid="plan-featured-badge"
                    className="absolute -top-3 left-8 rounded-full bg-arcblue px-4 py-1 font-grotesk text-[10px] font-medium uppercase tracking-[0.25em] text-white"
                >
                    {featuredLabel}
                </span>
            )}
            <p className="eyebrow !tracking-[0.25em]">{plan.tag}</p>
            <h3 className="mt-4 font-grotesk text-3xl font-bold uppercase tracking-tight text-ink">
                {plan.name}
            </h3>
            <p className="mt-6">
                <span className="font-playfair text-5xl text-arcblue">
                    {plan.price}
                </span>
                <span className="ml-2 font-grotesk text-xs uppercase tracking-[0.15em] text-ink2">
                    {plan.unit}
                </span>
            </p>
            <p className="mt-3 text-sm text-ink2">{plan.blurb}</p>
            <ul className="mt-7 flex-1 space-y-3 border-t border-line pt-7">
                {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-ink">
                        <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-arcblue"
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
                className="mt-8 font-grotesk text-xs font-medium uppercase tracking-[0.2em] text-ink underline decoration-arcblue decoration-2 underline-offset-8 transition-colors duration-300 hover:text-arcblue"
            >
                {cta}
            </a>
        </article>
    </Reveal>
);

const Planes = () => {
    const { lang, t } = useLang();
    const wa = lang === "pt" ? waPT : waES;
    return (
    <section
        id="planes"
        data-testid="planes-section"
        className="scroll-mt-24 px-6 py-28"
    >
        <div className="mx-auto max-w-7xl">
            <Reveal>
                <p className="eyebrow">{t.planes.eyebrow}</p>
                <h2 className="mt-6 font-grotesk text-4xl font-bold lowercase leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                    {t.planes.titlePre}{" "}
                    <em className="font-playfair italic text-arcblue">
                        {t.planes.titleEm}
                    </em>
                </h2>
            </Reveal>
            <div className="mt-16 grid items-start gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {t.planes.list.map((p, i) => (
                    <PlanCard
                        key={p.id}
                        plan={p}
                        delay={i * 0.1}
                        featuredLabel={t.planes.featured}
                        cta={t.planes.cta}
                        wa={wa}
                    />
                ))}
            </div>
            <SectionFoot num="02" />
        </div>
    </section>
    );
};

export default Planes;

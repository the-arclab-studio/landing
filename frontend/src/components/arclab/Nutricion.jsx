import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Bits";
import { useLang } from "./LangContext";
import { waLink } from "./data";

const Corner = ({ className }) => (
    <span
        aria-hidden="true"
        className={`pointer-events-none absolute z-10 h-6 w-6 border-arcblue ${className}`}
    />
);

const Nutricion = () => {
    const { lang, t } = useLang();
    const n = t.nutricion;

    return (
        <Reveal className="mt-16">
            <div
                data-testid="nutricion-band"
                className="relative bg-ink p-6 md:p-12 lg:p-16"
            >
                <Corner className="left-4 top-4 border-l-2 border-t-2" />
                <Corner className="right-4 top-4 border-r-2 border-t-2" />
                <Corner className="bottom-4 left-4 border-b-2 border-l-2" />
                <Corner className="bottom-4 right-4 border-b-2 border-r-2" />

                <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-prose">
                        <Eyebrow dark>{n.eyebrow}</Eyebrow>
                        <h3 className="mt-6 font-grotesk text-4xl font-bold lowercase leading-tight tracking-tight text-white sm:text-5xl">
                            {n.title}
                        </h3>
                        <p className="mt-4 text-base leading-relaxed text-white/60">
                            {n.text}
                        </p>
                    </div>

                    <div className="shrink-0 lg:text-right">
                        <p>
                            <span className="font-anton text-5xl leading-none text-white sm:text-6xl">
                                {n.price}
                            </span>
                            <span className="ml-3 font-grotesk text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                                {n.unit}
                            </span>
                        </p>
                        <a
                            href={waLink(lang, "nutricion")}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="nutricion-cta"
                            className="btn-blue mt-8 lg:inline-flex"
                        >
                            {n.cta}
                            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                        </a>
                    </div>
                </div>
            </div>
        </Reveal>
    );
};

export default Nutricion;

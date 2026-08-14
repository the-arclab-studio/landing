import { Dumbbell, Zap, Gauge, Crosshair } from "lucide-react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Bits";
import { useLang } from "./LangContext";

const ICONS = { dumbbell: Dumbbell, zap: Zap, gauge: Gauge, crosshair: Crosshair };

const Cambios = () => {
    const { t } = useLang();
    const c = t.cambios;
    return (
        <section
            data-testid="cambios-section"
            className="bg-bone px-6 py-24 sm:py-32"
        >
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <Eyebrow>{c.label}</Eyebrow>
                    <h2 className="mt-6 font-grotesk text-[11vw] font-bold lowercase leading-[0.95] tracking-tighter text-ink sm:text-6xl lg:text-7xl">
                        {c.titleL1}
                        <br />
                        {c.titleL2}{" "}
                        <em className="font-playfair italic text-arcblue">
                            {c.titleEm}
                        </em>
                    </h2>
                </Reveal>

                <div className="mt-16 grid divide-y divide-line border-y border-line md:grid-cols-4 md:divide-x md:divide-y-0">
                    {c.items.map((item, i) => {
                        const Icon = ICONS[item.icon];
                        return (
                            <Reveal key={i} delay={i * 0.1}>
                                <div
                                    data-testid={`cambios-item-${i + 1}`}
                                    className="px-2 py-10 md:px-8 md:py-14 md:first:pl-0 md:last:pr-0"
                                >
                                    <Icon
                                        className="h-6 w-6 text-arcblue"
                                        strokeWidth={1.25}
                                    />
                                    <h3 className="mt-6 font-grotesk text-base font-bold uppercase tracking-[0.2em] text-ink">
                                        {item.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-ink2">
                                        {item.text}
                                    </p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Cambios;

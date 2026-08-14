import { Zap, MoveUpRight, BatteryMedium, Eye } from "lucide-react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Bits";
import { useLang } from "./LangContext";

const ICONS = { zap: Zap, arrow: MoveUpRight, battery: BatteryMedium, eye: Eye };

const Cambios = () => {
    const { t } = useLang();
    const c = t.cambios;
    return (
        <section
            data-testid="cambios-section"
            className="bg-bone px-6 py-24 sm:py-32"
        >
            <div className="mx-auto max-w-7xl">
                <Reveal>
                    <Eyebrow>{c.label}</Eyebrow>
                </Reveal>

                <div className="mt-12 grid divide-y divide-line border-y border-line md:grid-cols-4 md:divide-x md:divide-y-0">
                    {c.items.map((item, i) => {
                        const Icon = ICONS[item.icon];
                        return (
                            <Reveal key={i} delay={i * 0.1}>
                                <div
                                    data-testid={`cambios-item-${i + 1}`}
                                    className="px-2 py-10 md:px-8 md:py-14 md:first:pl-0 md:last:pr-0"
                                >
                                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF0FC]">
                                        <Icon
                                            className="h-5 w-5 text-arcblue"
                                            strokeWidth={1.5}
                                        />
                                    </span>
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

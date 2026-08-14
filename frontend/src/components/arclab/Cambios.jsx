import { Zap, MoveUpRight, BatteryMedium, Eye, ArrowRight } from "lucide-react";
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
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <Eyebrow>{c.label}</Eyebrow>
                </Reveal>

                <div className="mt-12">
                    {c.items.map((item, i) => {
                        const Icon = ICONS[item.icon];
                        return (
                            <Reveal key={i} delay={i * 0.08}>
                                <div
                                    data-testid={`cambios-item-${i + 1}`}
                                    className="group grid grid-cols-[auto_1fr] items-center gap-x-6 gap-y-2 border-t border-line py-8 transition-colors duration-300 last:border-b hover:bg-white/60 sm:grid-cols-[auto_1fr_auto_auto] sm:py-10 md:gap-x-12"
                                >
                                    <Icon
                                        className="h-8 w-8 text-arcblue transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 sm:h-10 sm:w-10"
                                        strokeWidth={1.25}
                                    />
                                    <h3 className="font-grotesk text-3xl font-bold uppercase leading-none tracking-tighter text-ink transition-colors duration-300 group-hover:text-arcblue sm:text-5xl">
                                        {item.title}
                                    </h3>
                                    <p className="col-span-2 max-w-xs text-sm leading-relaxed text-ink2 sm:col-span-1 sm:text-base">
                                        {item.text}
                                    </p>
                                    <ArrowRight
                                        aria-hidden="true"
                                        className="hidden h-6 w-6 -translate-x-3 text-arcblue opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block"
                                        strokeWidth={1.5}
                                    />
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

import { X } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLang } from "./LangContext";

const Cambios = () => {
    const { t } = useLang();
    const c = t.cambios;
    return (
        <section data-testid="cambios-section" className="relative">
            <div className="relative overflow-hidden bg-ink">
                <img
                    src="/images/hero-cutout.png"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-24 bottom-0 w-[420px] opacity-[0.07] grayscale"
                />
                <img
                    src="/images/metodo-cutout.png"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-20 top-0 w-[380px] -scale-x-100 opacity-[0.07] grayscale"
                />
                <div className="relative mx-auto grid max-w-7xl md:grid-cols-2">
                    {c.outcomes.map((o, i) => (
                        <Reveal key={i} delay={i * 0.08}>
                            <div
                                data-testid={`cambios-item-${i + 1}`}
                                className={`flex items-baseline gap-5 border-white/10 px-6 py-12 sm:px-12 sm:py-16 ${
                                    i % 2 === 0 ? "md:border-r" : ""
                                } ${i < 2 ? "border-b" : ""} ${
                                    i >= 2 ? "max-md:border-t" : ""
                                } ${i === 1 || i === 2 ? "max-md:border-b" : ""} ${
                                    i === 3 ? "max-md:border-b-0" : ""
                                }`}
                            >
                                <h3 className="font-grotesk text-6xl font-bold uppercase leading-none tracking-tighter text-white sm:text-7xl">
                                    {o.pre}
                                </h3>
                                <p className="font-grotesk text-2xl font-bold uppercase tracking-tight text-[#9AA2EE] sm:text-3xl">
                                    {o.word}
                                    <X
                                        aria-hidden="true"
                                        className="ml-2 inline h-4 w-4 align-baseline text-arcblue"
                                        strokeWidth={3}
                                    />
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cambios;

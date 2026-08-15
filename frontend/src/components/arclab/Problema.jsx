import { X } from "lucide-react";
import { Reveal } from "./Reveal";
import { SideNum, Cross } from "./Bits";
import { useLang } from "./LangContext";

const Problema = () => {
    const { t } = useLang();
    const p = t.problema;
    return (
        <section
            data-testid="problema-section"
            className="relative border-t border-line py-24 sm:py-32"
        >
            <SideNum n="02" />
            <Cross className="right-4 top-10" />
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12">
                <div className="lg:col-span-5">
                    <Reveal>
                        <h2 className="font-grotesk text-[11vw] font-bold uppercase leading-[0.92] tracking-tighter text-ink sm:text-6xl lg:text-[4.2rem]">
                            {p.titleL1}
                            <br />
                            {p.titleL2}
                            <br />
                            <span className="text-arcblue">{p.titleEm}</span>
                        </h2>
                        <span
                            aria-hidden="true"
                            className="mt-8 block h-0.5 w-8 bg-arcblue"
                        />
                        <p className="mt-8 max-w-xs text-base leading-relaxed text-ink2">
                            {p.sub}
                        </p>
                    </Reveal>
                </div>

                <Reveal className="hidden lg:col-span-3 lg:block">
                    <div className="aspect-[3/4] w-full" aria-hidden="true" />
                </Reveal>

                <div className="lg:col-span-4">
                    <div className="space-y-10">
                        {p.problems.map((pr, i) => (
                            <Reveal key={pr.n} delay={i * 0.12}>
                                <div data-testid={`problema-item-${pr.n}`}>
                                    <div className="flex items-baseline justify-between gap-4">
                                        <p className="flex items-baseline gap-4">
                                            <span className="font-playfair text-2xl text-arcblue">
                                                {pr.n}
                                            </span>
                                            <span className="font-grotesk text-lg font-bold uppercase tracking-tight text-ink">
                                                {pr.title}
                                            </span>
                                        </p>
                                        <X
                                            aria-hidden="true"
                                            className="h-4 w-4 shrink-0 text-arcblue"
                                            strokeWidth={2.5}
                                        />
                                    </div>
                                    <p className="mt-2 pl-11 text-sm leading-relaxed text-ink2">
                                        {pr.text}
                                    </p>
                                    <span className="mt-5 block border-t border-line" />
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problema;

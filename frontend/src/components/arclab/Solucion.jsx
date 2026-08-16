import { Reveal } from "./Reveal";
import { SideNum, Cross } from "./Bits";
import { useLang } from "./LangContext";

const Solucion = () => {
    const { t } = useLang();
    const s = t.solucion;
    return (
        <section
            id="solucion"
            data-testid="solucion-section"
            className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32 lg:py-40"
        >
            <SideNum n="03" />
            <Cross className="left-4 bottom-10" />
            <span
                aria-hidden="true"
                className="hero-watermark pointer-events-none absolute -bottom-10 right-2 hidden select-none font-anton text-[10rem] uppercase leading-none lg:block xl:text-[12rem]"
            >
                Sistema
            </span>
            <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12">
                <div className="lg:col-span-4">
                    <Reveal>
                        <h2 className="font-grotesk text-[11vw] font-bold uppercase leading-[0.92] tracking-tighter text-ink sm:text-6xl lg:text-[4.6rem] xl:text-[5.4rem]">
                            {s.titleL1}
                            <br />
                            {s.titleL2}
                            <br />
                            <span className="text-arcblue">{s.titleEm}</span>
                        </h2>
                        <span
                            aria-hidden="true"
                            className="mt-8 block h-0.5 w-8 bg-arcblue"
                        />
                        <p className="mt-8 max-w-xs text-base leading-relaxed text-ink2 lg:max-w-sm lg:text-lg">
                            {s.sub1}
                        </p>
                        <p className="mt-4 max-w-xs text-base font-semibold text-ink lg:max-w-sm lg:text-lg">
                            {s.sub2}
                        </p>
                    </Reveal>
                </div>

                <Reveal className="hidden lg:col-span-4 lg:block">
                    <div className="aspect-[3/4] w-full" aria-hidden="true" />
                </Reveal>

                <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:col-span-4 lg:gap-y-16">
                    {s.items.map((item, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <div data-testid={`solucion-item-${i + 1}`} className="group">
                                <h3 className="font-grotesk text-base font-bold uppercase tracking-[0.2em] text-ink transition-colors duration-300 group-hover:text-arcblue lg:text-lg">
                                    <span className="mr-3 inline-block h-1.5 w-1.5 rounded-full bg-arcblue align-middle transition-transform duration-300 group-hover:scale-[1.8]" />
                                    {item.title}
                                </h3>
                                <p className="mt-3 max-w-[240px] text-sm leading-relaxed text-ink2 lg:text-[15px]">
                                    {item.text}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solucion;

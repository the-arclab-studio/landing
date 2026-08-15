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
            className="relative scroll-mt-24 border-t border-line py-24 sm:py-32"
        >
            <SideNum n="03" />
            <Cross className="left-4 bottom-10" />
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12">
                <div className="lg:col-span-4">
                    <Reveal>
                        <h2 className="font-grotesk text-[11vw] font-bold uppercase leading-[0.92] tracking-tighter text-ink sm:text-6xl lg:text-[4.2rem]">
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
                        <p className="mt-8 max-w-xs text-base leading-relaxed text-ink2">
                            {s.sub1}
                        </p>
                        <p className="mt-4 max-w-xs text-base font-semibold text-ink">
                            {s.sub2}
                        </p>
                    </Reveal>
                </div>

                <Reveal className="hidden lg:col-span-3 lg:block">
                    <figure
                        data-testid="solucion-photo-slot"
                        className="relative aspect-[3/4] w-full overflow-hidden rounded-[18px] bg-bone"
                    >
                        <div className="flex h-full flex-col items-center justify-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-arcblue" />
                            <span className="font-grotesk text-[10px] font-medium uppercase tracking-[0.3em] text-ink2">
                                {s.photoLabel}
                            </span>
                        </div>
                        <span aria-hidden="true" className="absolute bottom-2 left-2 font-grotesk text-sm text-arcblue">×</span>
                        <span aria-hidden="true" className="absolute right-2 top-2 font-grotesk text-sm text-arcblue">×</span>
                    </figure>
                </Reveal>

                <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:col-span-5">
                    {s.items.map((item, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <div data-testid={`solucion-item-${i + 1}`}>
                                <h3 className="font-grotesk text-base font-bold uppercase tracking-[0.2em] text-ink">
                                    <span className="mr-3 inline-block h-1.5 w-1.5 rounded-full bg-arcblue align-middle" />
                                    {item.title}
                                </h3>
                                <p className="mt-3 max-w-[240px] text-sm leading-relaxed text-ink2">
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

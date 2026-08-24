import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { Container, Section } from "./Layout";
import { SideNum, Cross } from "./Bits";
import { useLang } from "./LangContext";

const Solucion = () => {
    const { t } = useLang();
    const s = t.solucion;
    return (
        <Section
            id="solucion"
            data-testid="solucion-section"
            className="relative scroll-mt-24 overflow-hidden"
        >
            <SideNum n="04" />
            <Cross className="left-4 bottom-10" />
            <span
                aria-hidden="true"
                className="hero-watermark pointer-events-none absolute -bottom-10 right-2 hidden select-none font-anton text-[10rem] uppercase leading-none lg:block xl:text-[12rem]"
            >
                Sistema
            </span>
            <Container className="relative grid items-center gap-8 lg:grid-cols-12">
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

                <div className="lg:col-span-4">
                    {s.items.map((item, i) => (
                        <Reveal key={i} delay={i * 0.08}>
                            <div
                                data-testid={`solucion-item-${i + 1}`}
                                className="group py-8"
                            >
                                <div className="flex items-baseline justify-between gap-4">
                                    <p className="flex items-baseline gap-4">
                                        <span className="font-playfair text-2xl leading-none text-arcblue lg:text-3xl">
                                            0{i + 1}
                                        </span>
                                        <span className="font-grotesk text-lg font-bold uppercase tracking-tight text-ink transition-colors duration-300 group-hover:text-arcblue lg:text-xl">
                                            {item.title}
                                        </span>
                                    </p>
                                    <Plus
                                        aria-hidden="true"
                                        className="h-4 w-4 shrink-0 text-arcblue transition-transform duration-300 group-hover:rotate-90 lg:h-5 lg:w-5"
                                        strokeWidth={2.5}
                                    />
                                </div>
                                <p className="mt-2 pl-12 text-sm leading-[1.75] text-ink2 transition-transform duration-300 group-hover:translate-x-2 lg:max-w-xs lg:text-base">
                                    {item.text}
                                </p>
                                <span className="mt-6 block h-0.5 w-6 bg-arcblue" />
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default Solucion;

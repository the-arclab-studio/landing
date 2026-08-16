import { Reveal } from "./Reveal";
import { SideNum, Cross } from "./Bits";
import { useLang } from "./LangContext";

const Metodo = () => {
    const { t } = useLang();
    const m = t.metodo;
    return (
        <section
            id="metodo"
            data-testid="metodo-section"
            className="relative scroll-mt-24 overflow-hidden px-6 py-24 sm:py-32 lg:py-40"
        >
            <SideNum n="04" />
            <Cross className="right-4 top-10" />
            <div className="relative mx-auto max-w-7xl">
                <div className="lg:grid lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-6">
                        <Reveal className="lg:pr-[9vw]">
                            <h2 className="font-grotesk text-[13vw] font-bold uppercase leading-[0.9] tracking-tighter text-ink sm:text-7xl lg:text-[4.8rem] xl:text-[5.6rem]">
                                {m.titleL1}
                                <br />
                                {m.titleL2}{" "}
                                <span className="text-arcblue">{m.titleEm}</span>
                            </h2>
                            <span
                                aria-hidden="true"
                                className="mt-8 block h-0.5 w-8 bg-arcblue"
                            />
                            <p className="mt-8 max-w-sm text-lg font-medium leading-snug text-ink lg:text-xl">
                                {m.sub}
                            </p>
                        </Reveal>

                        <div className="relative z-20 mt-14 grid gap-10 sm:grid-cols-3 sm:gap-6 lg:mt-20 lg:pr-[9vw]">
                            {m.steps.map((s, i) => (
                                <Reveal key={s.n} delay={i * 0.12}>
                                    <div
                                        data-testid={`metodo-step-${s.n}`}
                                        className="group border-l border-line pl-5 sm:first:border-l-0 sm:first:pl-0"
                                    >
                                        <span className="font-playfair text-4xl leading-none text-arcblue lg:text-6xl">
                                            {s.n}
                                        </span>
                                        <h3 className="mt-4 font-grotesk text-sm font-bold uppercase tracking-[0.2em] text-ink transition-colors duration-300 group-hover:text-arcblue lg:text-base">
                                            {s.title}
                                        </h3>
                                        <p className="mt-2 text-sm leading-relaxed text-ink2">
                                            {s.text}
                                        </p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    <Reveal
                        delay={0.2}
                        className="mt-14 lg:col-span-6 lg:mt-0"
                    >
                        <img
                            src="/images/metodo-cutout.png"
                            alt="Jugadora de baloncesto en acción con el balón"
                            data-testid="metodo-photo"
                            className="mx-auto w-full max-w-md drop-shadow-[0_50px_70px_rgba(21,21,21,0.3)] lg:ml-auto lg:mr-0 lg:max-w-lg"
                        />
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Metodo;

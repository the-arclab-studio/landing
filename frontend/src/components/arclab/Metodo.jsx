import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { Container, Section } from "./Layout";
import { SideNum, Cross } from "./Bits";
import { useLang } from "./LangContext";

const Metodo = () => {
    const { t } = useLang();
    const m = t.metodo;
    return (
        <Section
            id="metodo"
            data-testid="metodo-section"
            className="relative scroll-mt-24 overflow-hidden"
        >
            <SideNum n="03" />
            <Cross className="right-4 top-10" />
            <Container className="relative">
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

                        <div className="relative z-20 mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6 lg:mt-16 lg:pr-[9vw]">
                            {m.steps.map((s, i) => (
                                <Reveal key={s.n} delay={i * 0.12}>
                                    <div
                                        data-testid={`metodo-step-${s.n}`}
                                        className="group border-l border-line pl-6 sm:first:border-l-0 sm:first:pl-0"
                                    >
                                        <span className="font-playfair text-4xl leading-none text-arcblue lg:text-6xl">
                                            {s.n}
                                        </span>
                                        <h3 className="mt-4 font-grotesk text-sm font-bold uppercase tracking-[0.2em] text-ink transition-colors duration-300 group-hover:text-arcblue lg:text-base">
                                            {s.title}
                                        </h3>
                                        <p className="mt-2 text-sm leading-[1.75] text-ink2 lg:text-[15px]">
                                            {s.text}
                                        </p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                </div>
            </Container>

            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-24 z-10 w-28 select-none sm:w-36 lg:top-auto lg:right-[calc(42.2vw-21.5rem)] lg:bottom-0 lg:w-[26rem] xl:right-[calc(42.2vw-25.5rem)] xl:w-[30rem]"
            >
                <div className="flex aspect-[760/1117] items-center justify-center">
                    <span className="block aspect-square w-[135%] rounded-full bg-[#E7E7DF] blur-xl" />
                </div>
            </div>

            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-24 z-30 w-28 select-none sm:w-36 lg:top-auto lg:right-[calc(42.2vw-21.5rem)] lg:bottom-0 lg:w-[26rem] xl:right-[calc(42.2vw-25.5rem)] xl:w-[30rem]"
            >
                <motion.div
                    initial={{ x: 90, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                    <img
                        src="/images/metodo-player.png"
                        alt=""
                        data-testid="metodo-player"
                        className="w-full"
                    />
                </motion.div>
            </div>
        </Section>
    );
};

export default Metodo;

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

                    <Reveal
                        delay={0.2}
                        className="relative mt-12 lg:col-span-6 lg:mt-0"
                    >
                        <img
                            src="/images/metodo-cutout.png"
                            alt="Jugadora de baloncesto en acción con el balón"
                            data-testid="metodo-photo"
                            className="mx-auto w-full max-w-md drop-shadow-[0_50px_70px_rgba(21,21,21,0.3)] lg:ml-auto lg:mr-0 lg:max-w-lg"
                        />
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-4 top-4 w-36 sm:w-44 lg:-right-24 lg:top-auto lg:bottom-[-4%] lg:w-[26rem] xl:-right-32 xl:w-[30rem]"
                        >
                            <motion.div
                                initial={{ x: 90, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                className="relative"
                            >
                                <span className="absolute left-1/2 top-1/2 -z-10 block aspect-square w-[135%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E7E7DF] blur-xl" />
                                <img
                                    src="/images/metodo-player.png"
                                    alt=""
                                    data-testid="metodo-player"
                                    className="w-full drop-shadow-[0_40px_60px_rgba(21,21,21,0.28)]"
                                />
                            </motion.div>
                        </div>
                    </Reveal>
                </div>
            </Container>
        </Section>
    );
};

export default Metodo;

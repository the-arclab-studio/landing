import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { Container, Section } from "./Layout";
import { SideNum, Cross } from "./Bits";
import { useLang } from "./LangContext";

const Problema = () => {
    const { t } = useLang();
    const p = t.problema;
    const [open, setOpen] = useState(null);
    const toggle = (i) => setOpen((o) => (o === i ? null : i));
    return (
        <Section
            data-testid="problema-section"
            className="relative overflow-hidden"
        >
            <SideNum n="02" />
            <Cross className="right-4 top-10" />
            <span
                aria-hidden="true"
                className="hero-watermark pointer-events-none absolute -bottom-10 left-2 hidden select-none font-anton text-[10rem] uppercase leading-none lg:block xl:text-[12rem]"
            >
                Esfuerzo
            </span>
            <Container className="relative grid items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-5">
                    <Reveal>
                        <h2 className="font-grotesk text-[11vw] font-bold uppercase leading-[0.92] tracking-tighter text-ink sm:text-6xl lg:text-[4.6rem] xl:text-[5.4rem]">
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
                        <p className="mt-8 max-w-xs text-base leading-relaxed text-ink2 lg:max-w-sm lg:text-lg">
                            {p.sub}
                        </p>
                    </Reveal>
                </div>

                <Reveal className="hidden lg:col-span-3 lg:block">
                    <div className="aspect-[3/4] w-full" aria-hidden="true" />
                </Reveal>

                <div className="lg:col-span-4">
                    <div className="space-y-16">
                        {p.problems.map((pr, i) => (
                            <Reveal key={pr.n} delay={i * 0.12}>
                                <div
                                    data-testid={`problema-item-${pr.n}`}
                                    role="button"
                                    tabIndex={0}
                                    aria-expanded={open === i}
                                    onClick={() => toggle(i)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") {
                                            e.preventDefault();
                                            toggle(i);
                                        }
                                    }}
                                    className="group cursor-pointer transition-transform duration-300 hover:translate-x-2"
                                >
                                    <div className="flex items-baseline justify-between gap-4">
                                        <p className="flex items-baseline gap-4">
                                            <span className="font-playfair text-2xl text-arcblue lg:text-3xl">
                                                {pr.n}
                                            </span>
                                            <span className="font-grotesk text-lg font-bold uppercase tracking-tight text-ink transition-colors duration-300 group-hover:text-arcblue lg:text-xl">
                                                {pr.title}
                                            </span>
                                        </p>
                                        <Plus
                                            aria-hidden="true"
                                            className={`h-4 w-4 shrink-0 text-arcblue transition-transform duration-300 lg:h-5 lg:w-5 ${
                                                open === i ? "rotate-45" : ""
                                            }`}
                                            strokeWidth={2.5}
                                        />
                                    </div>
                                    <AnimatePresence initial={false} mode="wait">
                                        <motion.div
                                            key={open === i ? "detail" : "short"}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <p
                                                data-testid={open === i ? `problema-detail-${pr.n}` : `problema-text-${pr.n}`}
                                                className="mt-2 pl-12 text-sm leading-[1.75] text-ink2 lg:text-base"
                                            >
                                                {open === i ? pr.detail : pr.text}
                                            </p>
                                        </motion.div>
                                    </AnimatePresence>
                                    <span
                                        className={`mt-6 block h-0.5 bg-arcblue transition-all duration-[400ms] ${
                                            open === i ? "w-16" : "w-6"
                                        }`}
                                    />
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Problema;

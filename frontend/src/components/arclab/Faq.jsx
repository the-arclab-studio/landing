import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { Eyebrow, Headline } from "./Bits";
import { useLang } from "./LangContext";

const Faq = () => {
    const { t } = useLang();
    const f = t.faq;
    const [open, setOpen] = useState(0);

    return (
        <section
            id="dudas"
            data-testid="faq-section"
            className="scroll-mt-24 px-6 py-28"
        >
            <div className="mx-auto max-w-4xl">
                <Reveal>
                    <Eyebrow>{f.eyebrow}</Eyebrow>
                    <Headline className="mt-6" pre={f.titlePre} em={f.titleEm} />
                </Reveal>
                <div className="mt-14">
                    {f.items.map((item, i) => (
                        <div key={i} className="border-b border-line">
                            <button
                                onClick={() => setOpen(open === i ? -1 : i)}
                                data-testid={`faq-question-${i + 1}`}
                                aria-expanded={open === i}
                                className="flex w-full items-center justify-between gap-6 py-6 text-left"
                            >
                                <span className="font-grotesk text-lg font-bold lowercase tracking-tight text-ink">
                                    {item.q}
                                </span>
                                <Plus
                                    className={`h-5 w-5 shrink-0 text-arcblue transition-transform duration-300 ${
                                        open === i ? "rotate-45" : ""
                                    }`}
                                />
                            </button>
                            <AnimatePresence initial={false}>
                                {open === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                            duration: 0.4,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <p
                                            data-testid={`faq-answer-${i + 1}`}
                                            className="max-w-2xl pb-6 text-base leading-relaxed text-ink2"
                                        >
                                            {item.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;

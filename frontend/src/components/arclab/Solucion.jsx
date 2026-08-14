import { motion } from "framer-motion";
import { PersonStanding, Activity, Calendar, Target } from "lucide-react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Bits";
import { useLang } from "./LangContext";

const ICONS = {
    person: PersonStanding,
    activity: Activity,
    calendar: Calendar,
    target: Target,
};

const POS = [
    "left-[2%] top-[2%]",
    "right-[2%] top-[2%] text-right",
    "left-[2%] bottom-[2%]",
    "right-[2%] bottom-[2%] text-right",
];

const LINES = [
    "M 400 260 L 170 115",
    "M 400 260 L 630 115",
    "M 400 260 L 170 405",
    "M 400 260 L 630 405",
];
const DOTS = [
    [170, 115],
    [630, 115],
    [170, 405],
    [630, 405],
];

const Node = ({ node, className = "" }) => {
    const Icon = ICONS[node.icon];
    return (
        <div className={className}>
            <Icon className="h-5 w-5 text-arcblue" strokeWidth={1.5} />
            <h3 className="mt-3 font-grotesk text-sm font-bold uppercase tracking-[0.25em] text-ink">
                {node.title}
            </h3>
            <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-ink2 md:max-w-[240px]">
                {node.text}
            </p>
        </div>
    );
};

const Solucion = () => {
    const { t } = useLang();
    const s = t.solucion;
    return (
        <section
            id="solucion"
            data-testid="solucion-section"
            className="scroll-mt-24 px-6 py-24 sm:py-32"
        >
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <Eyebrow>{s.label}</Eyebrow>
                    <h2 className="mt-6 font-grotesk text-[11vw] font-bold lowercase leading-[0.95] tracking-tighter text-ink sm:text-6xl lg:text-7xl">
                        {s.titleL1}
                        <br />
                        {s.titleL2}{" "}
                        <em className="font-playfair italic text-arcblue">
                            {s.titleEm}
                        </em>
                    </h2>
                </Reveal>

                <Reveal className="mt-16 hidden md:block">
                    <div
                        data-testid="sistema-diagram"
                        className="relative mx-auto h-[520px] max-w-4xl"
                    >
                        <svg
                            viewBox="0 0 800 520"
                            fill="none"
                            aria-hidden="true"
                            preserveAspectRatio="none"
                            className="absolute inset-0 h-full w-full"
                        >
                            {LINES.map((d, i) => (
                                <motion.path
                                    key={i}
                                    d={d}
                                    stroke="#1B33DC"
                                    strokeWidth="1"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{
                                        duration: 1.1,
                                        delay: 0.3 + i * 0.15,
                                        ease: "easeInOut",
                                    }}
                                />
                            ))}
                            {DOTS.map(([cx, cy], i) => (
                                <motion.circle
                                    key={i}
                                    cx={cx}
                                    cy={cy}
                                    r="4"
                                    fill="#1B33DC"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ delay: 1.2 + i * 0.15, duration: 0.35, ease: "backOut" }}
                                />
                            ))}
                        </svg>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-arcblue bg-white shadow-[0_24px_60px_-30px_rgba(27,51,220,0.35)]"
                        >
                            <img
                                src="/images/logo-mark.png"
                                alt="ARC.LAB"
                                className="h-7 w-auto"
                            />
                        </motion.div>

                        {s.nodes.map((node, i) => (
                            <div
                                key={i}
                                className={`absolute w-[220px] ${POS[i]}`}
                            >
                                <Node node={node} className={i % 2 === 1 ? "[&>p]:ml-auto [&>svg]:ml-auto" : ""} />
                            </div>
                        ))}
                    </div>
                </Reveal>

                <div className="mt-14 space-y-10 border-l border-arcblue/40 pl-6 md:hidden">
                    <div className="flex items-center gap-3">
                        <img
                            src="/images/logo-mark.png"
                            alt="ARC.LAB"
                            className="h-6 w-auto"
                        />
                    </div>
                    {s.nodes.map((node, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <Node node={node} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solucion;

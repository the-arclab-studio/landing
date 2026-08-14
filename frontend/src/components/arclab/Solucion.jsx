import { motion } from "framer-motion";
import { User, BarChart3, Calendar, Crosshair } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLang } from "./LangContext";

const ICONS = { user: User, chart: BarChart3, calendar: Calendar, target: Crosshair };

const NODE_POS = [
    "left-0 top-0",
    "right-0 top-0",
    "left-0 bottom-0",
    "right-0 bottom-0",
];

const LINES = [
    "M 31 31 L 400 260",
    "M 769 31 L 400 260",
    "M 31 489 L 400 260",
    "M 769 489 L 400 260",
];
const DOTS = [
    [336, 196],
    [464, 196],
    [336, 324],
    [464, 324],
];

const Node = ({ node, right = false }) => {
    const Icon = ICONS[node.icon];
    return (
        <div
            className={`flex items-center gap-4 ${
                right ? "flex-row-reverse text-right" : ""
            }`}
        >
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-ink/60 bg-white sm:h-20 sm:w-20">
                <Icon className="h-6 w-6 text-ink sm:h-7 sm:w-7" strokeWidth={1.25} />
            </span>
            <div className="max-w-[200px]">
                <h3 className="font-grotesk text-sm font-bold uppercase tracking-[0.15em] text-ink">
                    {node.title}
                </h3>
                <span
                    aria-hidden="true"
                    className={`mt-1.5 block h-0.5 w-6 bg-arcblue ${right ? "ml-auto" : ""}`}
                />
                <p className="mt-2 text-sm leading-relaxed text-ink2">
                    {node.text}
                </p>
            </div>
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
            className="relative scroll-mt-24 overflow-hidden bg-bone px-6 py-24 sm:py-32"
        >
            <svg
                viewBox="0 0 200 300"
                fill="none"
                aria-hidden="true"
                className="pointer-events-none absolute -left-10 bottom-0 h-64 w-40 opacity-90"
            >
                <motion.path
                    d="M 0 300 C 30 220, 60 160, 95 95"
                    stroke="#1B33DC"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 1.4, ease: "easeInOut" }}
                />
                <motion.circle
                    cx="95"
                    cy="95"
                    r="6"
                    fill="#1B33DC"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: 1.3, duration: 0.35, ease: "backOut" }}
                />
            </svg>

            <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:items-center lg:gap-8">
                <Reveal className="lg:col-span-4">
                    <p className="font-grotesk text-sm font-bold uppercase tracking-[0.2em] text-ink">
                        {s.label}
                        <span
                            aria-hidden="true"
                            className="mt-2 block h-0.5 w-8 bg-arcblue"
                        />
                    </p>
                    <h2 className="mt-8 font-grotesk text-[11vw] font-bold uppercase leading-[0.95] tracking-tighter text-ink sm:text-6xl">
                        {s.titleL1}
                        <br />
                        {s.titleL2}
                        <br />
                        <span className="text-arcblue">{s.titleEm}</span>
                    </h2>
                    <p className="mt-8 max-w-xs text-base leading-relaxed text-ink2">
                        {s.sub1}
                    </p>
                    <p className="mt-4 max-w-xs text-base font-semibold text-ink">
                        {s.sub2}
                    </p>
                </Reveal>

                <Reveal className="mt-16 hidden md:block lg:col-span-8 lg:mt-0">
                    <div
                        data-testid="sistema-diagram"
                        className="relative mx-auto aspect-[800/520] w-full"
                    >
                        <svg
                            viewBox="0 0 800 520"
                            fill="none"
                            aria-hidden="true"
                            preserveAspectRatio="none"
                            className="absolute inset-0 h-full w-full"
                        >
                            <circle
                                cx="400"
                                cy="260"
                                r="118"
                                stroke="#151515"
                                strokeOpacity="0.15"
                                strokeWidth="1"
                                strokeDasharray="3 5"
                            />
                            {LINES.map((d, i) => (
                                <motion.path
                                    key={i}
                                    d={d}
                                    stroke="#151515"
                                    strokeWidth="1"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{
                                        duration: 1,
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
                                    r="4.5"
                                    fill="#151515"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{
                                        delay: 1.1 + i * 0.15,
                                        duration: 0.35,
                                        ease: "backOut",
                                    }}
                                />
                            ))}
                        </svg>

                        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.85 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                className="flex h-44 w-44 flex-col items-center justify-center gap-2 rounded-full border border-ink/70 bg-white sm:h-48 sm:w-48"
                            >
                                <img
                                    src="/images/logo-mark.png"
                                    alt="ARC.LAB"
                                    className="h-8 w-auto"
                                />
                                <span className="font-grotesk text-[8px] font-medium uppercase tracking-[0.3em] text-ink2">
                                    Tu mejor versión
                                </span>
                            </motion.div>
                        </div>

                        {s.nodes.map((node, i) => (
                            <div
                                key={i}
                                className={`absolute z-10 ${NODE_POS[i]}`}
                            >
                                <Node node={node} right={i % 2 === 1} />
                            </div>
                        ))}
                    </div>
                </Reveal>

                <div className="mt-14 space-y-10 border-l border-arcblue/40 pl-6 md:hidden">
                    <img
                        src="/images/logo-mark.png"
                        alt="ARC.LAB"
                        className="h-6 w-auto"
                    />
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

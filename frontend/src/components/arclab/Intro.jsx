import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KEY = "arclab_intro_seen";

export const introSeen = () => {
    try {
        return sessionStorage.getItem(KEY) === "1";
    } catch {
        return true;
    }
};

const Intro = ({ onDone }) => {
    const [phase, setPhase] = useState(0);
    const [warm, setWarm] = useState(false);
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        const tw = setTimeout(() => setWarm(true), 1300);
        const t0 = setTimeout(() => setExiting(true), 2900);
        const t1 = setTimeout(() => setPhase(1), 3850);
        const t2 = setTimeout(() => setPhase(2), 7000);
        const t3 = setTimeout(() => {
            try {
                sessionStorage.setItem(KEY, "1");
            } catch {}
            document.body.style.overflow = "";
            onDone();
        }, 7800);
        return () => {
            [tw, t0, t1, t2, t3].forEach(clearTimeout);
            document.body.style.overflow = "";
        };
    }, [onDone]);

    return (
        <motion.div
            data-testid="intro-overlay"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#15259B]"
            initial={{ y: 0 }}
            animate={phase === 2 ? { y: "-100%" } : { y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
            <AnimatePresence mode="wait">
                {phase === 0 && (
                    <motion.div
                        key="logo"
                        className={`glitch-img w-64 sm:w-96 ${exiting ? "exiting" : ""}`}
                        data-testid="intro-logo"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.25 } }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <img
                            src="/images/logo-mark-white-nodot.png"
                            alt="ARC.LAB"
                            className="w-full"
                        />
                        <span
                            aria-hidden="true"
                            data-testid="intro-logo-dot"
                            className={`logo-dot ${warm ? "warm" : ""}`}
                            style={{
                                WebkitMaskImage: "url(/images/dot.png)",
                                maskImage: "url(/images/dot.png)",
                            }}
                        />
                        <img
                            src="/images/logo-mark-white.png"
                            alt=""
                            aria-hidden="true"
                            className="ga w-full"
                        />
                        <img
                            src="/images/logo-mark-white.png"
                            alt=""
                            aria-hidden="true"
                            className="gb w-full"
                        />
                    </motion.div>
                )}
                {phase >= 1 && (
                    <motion.p
                        key="tagline"
                        data-testid="intro-tagline"
                        className="flex items-baseline gap-8 px-6 text-center font-grotesk text-sm font-bold uppercase tracking-[0.45em] text-white sm:gap-12 sm:text-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <span>athlete</span>
                        <span>development</span>
                    </motion.p>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Intro;

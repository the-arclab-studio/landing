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

    useEffect(() => {
        document.body.style.overflow = "hidden";
        const t1 = setTimeout(() => setPhase(1), 2400);
        const t2 = setTimeout(() => setPhase(2), 5200);
        const t3 = setTimeout(() => {
            try {
                sessionStorage.setItem(KEY, "1");
            } catch {}
            document.body.style.overflow = "";
            onDone();
        }, 6000);
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            document.body.style.overflow = "";
        };
    }, [onDone]);

    return (
        <motion.div
            data-testid="intro-overlay"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0F1C6F]"
            initial={{ y: 0 }}
            animate={phase === 2 ? { y: "-100%" } : { y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
            <AnimatePresence mode="wait">
                {phase === 0 && (
                    <motion.img
                        key="logo"
                        src="/images/logo-mark-white.png"
                        alt="ARC.LAB"
                        data-testid="intro-logo"
                        className="w-52 sm:w-72"
                        initial={{ opacity: 0, scale: 0.86, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{
                            opacity: 0,
                            scale: 0.94,
                            y: -16,
                            transition: { duration: 0.45 },
                        }}
                        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                )}
                {phase >= 1 && (
                    <motion.p
                        key="tagline"
                        data-testid="intro-tagline"
                        className="flex items-baseline gap-6 px-6 text-center font-anton text-4xl uppercase leading-none tracking-[-0.01em] text-white sm:gap-10 sm:text-6xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -14 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="glitch" data-text="ATHLETE">
                            ATHLETE
                        </span>
                        <span className="glitch" data-text="DEVELOPMENT">
                            DEVELOPMENT
                        </span>
                    </motion.p>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Intro;

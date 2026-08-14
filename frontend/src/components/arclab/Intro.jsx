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
        const t1 = setTimeout(() => setPhase(1), 1900);
        const t2 = setTimeout(() => setPhase(2), 4300);
        const t3 = setTimeout(() => {
            try {
                sessionStorage.setItem(KEY, "1");
            } catch {}
            document.body.style.overflow = "";
            onDone();
        }, 5100);
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#15259B]"
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
                        initial={{ opacity: 0, scale: 0.82, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{
                            opacity: 0,
                            scale: 0.92,
                            y: -18,
                            transition: { duration: 0.4 },
                        }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    />
                )}
                {phase >= 1 && (
                    <motion.p
                        key="tagline"
                        data-testid="intro-tagline"
                        className="flex items-baseline gap-5 px-6 text-center font-anton text-4xl lowercase leading-none tracking-[-0.01em] text-white sm:gap-8 sm:text-6xl"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -14 }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
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

import { motion } from "framer-motion";

const Arc = ({ className = "", delay = 0, inView = true }) => {
    const anim = inView
        ? {
              whileInView: { pathLength: 1 },
              viewport: { once: true, margin: "-60px" },
          }
        : { animate: { pathLength: 1 } };
    return (
        <svg
            viewBox="0 0 600 200"
            fill="none"
            aria-hidden="true"
            className={className}
            preserveAspectRatio="none"
        >
            <motion.path
                d="M8 190 C 150 8, 450 8, 592 148"
                stroke="#1B33DC"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                {...anim}
                transition={{ duration: 1.6, delay, ease: "easeInOut" }}
            />
            <motion.circle
                cx="592"
                cy="148"
                r="5"
                fill="#1B33DC"
                initial={{ scale: 0, opacity: 0 }}
                {...(inView
                    ? { whileInView: { scale: 1, opacity: 1 }, viewport: { once: true } }
                    : { animate: { scale: 1, opacity: 1 } })}
                transition={{ delay: delay + 1.4, duration: 0.4, ease: "backOut" }}
            />
        </svg>
    );
};

export default Arc;

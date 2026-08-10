import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "./Reveal";
import { useLang } from "./LangContext";

const Corner = ({ className }) => (
    <span
        aria-hidden="true"
        className={`pointer-events-none absolute z-10 h-7 w-7 border-arcblue ${className}`}
    />
);

const PhotoSection = () => {
    const { t } = useLang();
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

    return (
        <section data-testid="photo-section" className="px-6 py-28">
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <figure ref={ref} className="relative mx-auto max-w-xl">
                        <Corner className="left-3 top-3 border-l-2 border-t-2" />
                        <Corner className="right-3 top-3 border-r-2 border-t-2" />
                        <Corner className="bottom-3 left-3 border-b-2 border-l-2" />
                        <Corner className="bottom-3 right-3 border-b-2 border-r-2" />
                        <div className="card-soft overflow-hidden !rounded-2xl">
                            <motion.img
                                src="/images/training.jpg"
                                alt={t.photoAlt}
                                data-testid="training-photo"
                                style={{ y, scale: 1.12 }}
                                className="w-full grayscale"
                            />
                        </div>
                    </figure>
                </Reveal>
            </div>
        </section>
    );
};

export default PhotoSection;

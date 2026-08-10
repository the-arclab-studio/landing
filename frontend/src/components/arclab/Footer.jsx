import { Instagram } from "lucide-react";
import Arc from "./Arc";
import { Reveal } from "./Reveal";

const Footer = () => (
    <footer
        data-testid="site-footer"
        className="border-t border-line px-6 pb-16 pt-20"
    >
        <div className="mx-auto max-w-6xl">
            <Reveal>
                <Arc className="mx-auto h-20 w-full max-w-lg" />
            </Reveal>
            <div className="mt-16 flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
                <div>
                    <p className="font-marker text-4xl text-ink">arc.lab</p>
                    <p className="mt-3 font-caveat text-2xl text-ink2">
                        by uxisureda <span className="text-arcblue">✕</span>{" "}
                        arc.lab
                    </p>
                </div>
                <nav className="flex flex-col gap-3" aria-label="Redes sociales">
                    <a
                        href="https://instagram.com/uxisureda"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="footer-instagram-es"
                        className="flex items-center gap-2 font-grotesk text-xs font-medium uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:text-arcblue"
                    >
                        <Instagram className="h-3.5 w-3.5 text-arcblue" />
                        @uxisureda
                    </a>
                    <a
                        href="https://instagram.com/gmorais.24"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="footer-instagram-pt"
                        className="flex items-center gap-2 font-grotesk text-xs font-medium uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:text-arcblue"
                    >
                        <Instagram className="h-3.5 w-3.5 text-arcblue" />
                        @gmorais.24
                    </a>
                    <span
                        data-testid="footer-tiktok-placeholder"
                        className="font-grotesk text-xs uppercase tracking-[0.2em] text-ink2"
                    >
                        TikTok — próximamente
                    </span>
                </nav>
            </div>
            <div className="mt-14 flex items-center justify-between border-t border-line pt-5">
                <p className="text-xs text-ink2">
                    © 2026 ARC.LAB · Performance
                </p>
                <span className="font-grotesk text-[11px] uppercase tracking-[0.35em] text-ink2">
                    <span className="text-arcblue">04</span> — 04
                </span>
            </div>
        </div>
    </footer>
);

export default Footer;

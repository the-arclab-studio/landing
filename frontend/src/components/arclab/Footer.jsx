import { Instagram } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLang } from "./LangContext";

const Footer = () => {
    const { t } = useLang();
    return (
        <footer data-testid="site-footer" className="px-6 pb-14 pt-20">
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
                        <div>
                            <p className="wordmark font-marker text-4xl text-ink">
                                arc.lab
                            </p>
                            <p className="mt-4 font-grotesk text-sm font-bold uppercase tracking-[0.25em] text-ink">
                                {t.footer.motto1}{" "}
                                <span className="text-arcblue">
                                    {t.footer.motto2}
                                </span>
                            </p>
                        </div>
                        <nav
                            className="flex flex-col gap-3"
                            aria-label="Redes sociales"
                        >
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
                        </nav>
                    </div>
                    <div className="mt-14 border-t border-line pt-5">
                        <p className="text-xs text-ink2">
                            © 2026 ARC.LAB · Performance
                        </p>
                    </div>
                </Reveal>
            </div>
        </footer>
    );
};

export default Footer;

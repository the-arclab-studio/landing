import { useLang } from "./LangContext";
import { waES, waPT } from "./data";

const LangBtn = ({ code, label }) => {
    const { lang, setLang } = useLang();
    const active = lang === code;
    return (
        <button
            onClick={() => setLang(code)}
            data-testid={`lang-toggle-${code}`}
            aria-pressed={active}
            className={`font-grotesk text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
                active ? "text-arcblue" : "text-ink2 hover:text-ink"
            }`}
        >
            {label}
        </button>
    );
};

const Header = () => {
    const { lang, t } = useLang();
    const wa = lang === "pt" ? waPT : waES;
    return (
        <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-white/80 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <a
                    href="#top"
                    data-testid="brand-wordmark"
                    className="font-marker text-2xl leading-none text-ink"
                >
                    arc.lab
                </a>
                <p className="hidden font-grotesk text-[10px] uppercase tracking-[0.3em] text-ink2 lg:block">
                    {t.headerProgram}
                </p>
                <div className="flex items-center gap-5">
                    <div
                        className="flex items-center gap-2"
                        role="group"
                        aria-label="Idioma / Language"
                    >
                        <LangBtn code="es" label="ES" />
                        <span className="text-line">·</span>
                        <LangBtn code="pt" label="PT" />
                    </div>
                    <a
                        href={wa}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="header-whatsapp-btn"
                        className="font-grotesk text-[11px] font-medium uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:text-arcblue"
                    >
                        {t.whatsapp} <span className="text-arcblue">→</span>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;

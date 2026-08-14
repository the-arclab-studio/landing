import { useLang } from "./LangContext";
import { waLink } from "./data";

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
    return (
        <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-white/80 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <a
                    href="#top"
                    data-testid="brand-wordmark"
                    aria-label="ARC.LAB — inicio"
                >
                    <img
                        src="/images/logo-horizontal.png"
                        alt="ARC.LAB · Athlete Development"
                        className="h-8 w-auto"
                    />
                </a>
                <nav
                    className="hidden items-center gap-8 md:flex"
                    aria-label="Secciones"
                >
                    {[
                        ["planes", "#planes"],
                        ["jugadores", "#jugadores"],
                        ["dudas", "#dudas"],
                    ].map(([key, href]) => (
                        <a
                            key={key}
                            href={href}
                            data-testid={`nav-${key}`}
                            className="font-grotesk text-[11px] font-medium uppercase tracking-[0.25em] text-ink2 transition-colors duration-300 hover:text-arcblue"
                        >
                            {t.nav[key]}
                        </a>
                    ))}
                </nav>
                <div className="flex items-center gap-4">
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
                        href={waLink(lang, "generic")}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="header-cta-btn"
                        className="btn-blue !px-5 !py-2.5 !text-[11px]"
                    >
                        {t.nav.cta}
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;

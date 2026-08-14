import { useLang } from "./LangContext";
import { waLink } from "./data";

const Header = () => {
    const { t } = useLang();
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
                        className="hidden h-8 w-auto sm:block"
                    />
                    <img
                        src="/images/icon.png"
                        alt="ARC.LAB"
                        className="h-9 w-9 sm:hidden"
                    />
                </a>
                <nav
                    className="hidden items-center gap-8 md:flex"
                    aria-label="Secciones"
                >
                    {[
                        ["planes", "#planes"],
                        ["jugadores", "#jugadores"],
                        ["nosotros", "#nosotros"],
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
                <a
                    href={waLink("es", "generic")}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="header-cta-btn"
                    className="btn-blue !px-5 !py-2.5 !text-[11px]"
                >
                    {t.nav.cta}
                </a>
            </div>
        </header>
    );
};

export default Header;

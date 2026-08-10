import { waES } from "./data";

const Header = () => (
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
                Programa · Nº 01 · In-Season — ARC.LAB · Performance
            </p>
            <a
                href={waES}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="header-whatsapp-btn"
                className="font-grotesk text-[11px] font-medium uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:text-arcblue"
            >
                WhatsApp <span className="text-arcblue">→</span>
            </a>
        </div>
    </header>
);

export default Header;

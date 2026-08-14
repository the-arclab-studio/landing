export const Eyebrow = ({ children, dark = false }) => (
    <p
        className={`flex items-center gap-3 font-grotesk text-[11px] font-medium uppercase tracking-[0.3em] ${
            dark ? "text-white/50" : "text-ink2"
        }`}
    >
        <span className="h-px w-6 bg-arcblue" aria-hidden="true" />
        {children}
    </p>
);

export const Headline = ({ pre, em, post = "", dark = false, className = "" }) => (
    <h2
        className={`font-grotesk text-4xl font-bold lowercase leading-[1.05] tracking-[-0.02em] sm:text-5xl lg:text-6xl ${
            dark ? "text-white" : "text-ink"
        } ${className}`}
    >
        {pre}{" "}
        <em
            className={`font-playfair italic ${
                dark
                    ? "underline decoration-arcblue decoration-[3px] underline-offset-8"
                    : "text-arcblue"
            }`}
        >
            {em}
        </em>
        {post ? ` ${post}` : ""}
    </h2>
);

export const Container = ({ className = "", children, ...props }) => (
    <div className={`max-w-6xl mx-auto px-6 ${className}`} {...props}>
        {children}
    </div>
);

export const Section = ({ className = "", children, ...props }) => (
    <section
        className={`py-16 md:py-24 lg:py-32 ${className}`}
        {...props}
    >
        {children}
    </section>
);

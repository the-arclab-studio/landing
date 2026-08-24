export const Container = ({ className = "", children, ...props }) => (
    <div className={`max-w-6xl mx-auto px-6 md:px-8 ${className}`} {...props}>
        {children}
    </div>
);

export const Section = ({ className = "", children, ...props }) => (
    <section
        className={`py-20 md:py-28 lg:py-36 ${className}`}
        {...props}
    >
        {children}
    </section>
);

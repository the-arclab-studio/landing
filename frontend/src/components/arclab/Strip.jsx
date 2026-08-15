const Strip = () => (
    <div
        aria-hidden="true"
        data-testid="image-stream"
        className="pointer-events-none absolute inset-y-0 left-1/2 z-20 hidden w-[15.6vw] -translate-x-1/2 lg:block"
    >
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-arcblue/40" />
        <div className="relative flex h-full flex-col items-center justify-around py-10">
            {["Foto 01", "Foto 02", "Foto 03"].map((label, i) => (
                <div
                    key={i}
                    className="relative flex aspect-[3/4] w-full flex-col items-center justify-center gap-3 rounded-[18px] border border-line bg-white shadow-[0_24px_60px_-32px_rgba(21,21,21,0.16)]"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-arcblue" />
                    <span className="font-grotesk text-[10px] font-medium uppercase tracking-[0.3em] text-ink2">
                        {label}
                    </span>
                    <span className="absolute left-2 top-2 font-grotesk text-sm text-arcblue">
                        ×
                    </span>
                    <span className="absolute bottom-2 right-2 font-grotesk text-sm text-arcblue">
                        ×
                    </span>
                </div>
            ))}
        </div>
        <div className="absolute -bottom-1.5 left-1/2 z-30 h-3 w-3 -translate-x-1/2 rounded-full bg-arcblue" />
    </div>
);

export default Strip;

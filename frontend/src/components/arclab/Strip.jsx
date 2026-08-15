const Strip = () => (
    <div
        aria-hidden="true"
        data-testid="image-stream"
        className="pointer-events-none absolute inset-y-0 left-1/2 z-20 hidden w-[300px] -translate-x-1/2 lg:block"
    >
        <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-arcblue" />
        <div className="absolute inset-0 border-x border-line bg-white shadow-[0_30px_80px_-40px_rgba(21,21,21,0.18)]" />
        <div className="relative flex h-full flex-col">
            {["Foto 01", "Foto 02", "Foto 03"].map((label, i) => (
                <div
                    key={i}
                    className="relative flex flex-1 flex-col items-center justify-center gap-3 border-b border-line last:border-b-0"
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
        <div className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-arcblue" />
    </div>
);

export default Strip;

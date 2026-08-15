const Strip = () => (
    <div
        aria-hidden="true"
        data-testid="image-stream"
        className="pointer-events-none absolute inset-y-0 left-1/2 z-20 hidden w-[15.6vw] -translate-x-1/2 lg:block"
    >
        <div className="flex h-full flex-col">
            {["Foto 01", "Foto 02", "Foto 03"].map((label, i) => (
                <div
                    key={i}
                    className="relative flex flex-1 flex-col items-center justify-center gap-3 bg-bone"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-arcblue" />
                    <span className="font-grotesk text-[10px] font-medium uppercase tracking-[0.3em] text-ink2">
                        {label}
                    </span>
                </div>
            ))}
        </div>
    </div>
);

export default Strip;

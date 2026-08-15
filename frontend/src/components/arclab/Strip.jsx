const IMAGES = ["strip-01", "strip-02", "strip-03"];

const Strip = () => (
    <div
        aria-hidden="true"
        data-testid="image-stream"
        className="pointer-events-none absolute inset-y-0 left-1/2 z-20 hidden w-[15.6vw] -translate-x-1/2 lg:block"
    >
        <div className="flex h-full flex-col">
            {IMAGES.map((name, i) => (
                <div key={name} className="relative flex-1 overflow-hidden">
                    <img
                        src={`/images/${name}.jpg`}
                        alt=""
                        data-testid={`strip-image-0${i + 1}`}
                        className="block h-full w-full object-cover"
                    />
                </div>
            ))}
        </div>
    </div>
);

export default Strip;

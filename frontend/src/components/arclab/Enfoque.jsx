import { Reveal } from "./Reveal";
import SectionFoot from "./SectionFoot";
import Arc from "./Arc";

const CARDS = [
    {
        n: "01",
        title: "Rendimiento",
        text: "Mantener tu nivel físico durante toda la temporada, sin altibajos.",
    },
    {
        n: "02",
        title: "Fatiga",
        text: "Gestionar carga, viajes y minutos con registro diario y ajuste continuo.",
    },
    {
        n: "03",
        title: "Día de partido",
        text: "Activación antes y recuperación después, para competir al máximo.",
    },
];

const Enfoque = () => (
    <section
        id="enfoque"
        data-testid="enfoque-section"
        className="scroll-mt-24 px-6 py-28"
    >
        <div className="mx-auto max-w-6xl">
            <Reveal>
                <p className="eyebrow">— El enfoque · In-Season</p>
                <h2 className="mt-6 max-w-3xl font-grotesk text-4xl font-bold lowercase leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                    en temporada no se carga.{" "}
                    <em className="font-playfair italic text-arcblue">
                        se mantiene.
                    </em>
                </h2>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-ink2 sm:text-lg">
                    Ya compites cada semana. El trabajo no es acumular, es{" "}
                    <strong className="font-semibold text-ink">
                        llegar entero y rendir el día del partido
                    </strong>{" "}
                    — ajustando la carga a tu semana real: minutos, viajes,
                    dobles jornadas y molestias.
                </p>
            </Reveal>

            <div className="mt-16 grid gap-5 md:grid-cols-3">
                {CARDS.map((c, i) => (
                    <Reveal key={c.n} delay={i * 0.12}>
                        <article
                            data-testid={`enfoque-card-${c.n}`}
                            className="card-soft h-full p-8"
                        >
                            <span className="font-playfair text-4xl text-arcblue">
                                {c.n}
                            </span>
                            <h3 className="mt-6 font-grotesk text-xl font-bold lowercase tracking-tight text-ink">
                                {c.title}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-ink2">
                                {c.text}
                            </p>
                        </article>
                    </Reveal>
                ))}
            </div>

            <Reveal className="mt-20">
                <Arc className="mx-auto h-16 w-full max-w-md" />
                <h3 className="mt-10 font-grotesk text-3xl font-bold lowercase tracking-tight text-ink sm:text-4xl">
                    tu semana,{" "}
                    <em className="font-playfair italic text-arcblue">
                        tu carga.
                    </em>
                </h3>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-ink2">
                    No hay dos semanas iguales.{" "}
                    <strong className="font-semibold text-ink">
                        Ajustamos tu plan según cómo llegas
                    </strong>{" "}
                    — según tu feedback, no según un calendario fijo.
                </p>
            </Reveal>

            <SectionFoot num="01" />
        </div>
    </section>
);

export default Enfoque;

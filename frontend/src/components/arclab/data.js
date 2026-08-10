export const WA_MSG =
    "Hola, quiero info del acompañamiento in-season de ARCLAB";

export const waES = `https://wa.me/34698136937?text=${encodeURIComponent(WA_MSG)}`;
export const waPT = `https://wa.me/351969291245?text=${encodeURIComponent(WA_MSG)}`;

export const PLANS = [
    {
        id: "basic",
        name: "Basic",
        tag: "Autonomía con guía",
        price: "50€",
        unit: "/mes",
        blurb: "Tú al mando, con estructura.",
        features: [
            "Plan mensual de fuerza y prevención según tu calendario",
            "Actualización según tu semana de partidos",
            "Registro diario y ajustes por feedback",
            "Guía de hábitos nutricionales",
        ],
    },
    {
        id: "normal",
        name: "Normal",
        tag: "Acompañamiento cercano",
        price: "85€",
        unit: "/mes",
        blurb: "Todo lo Basic, con seguimiento individual.",
        featured: true,
        features: [
            "Todo lo de Basic",
            "Revisión individual cada 2 semanas (vídeo o llamada)",
            "Ajustes por minutos jugados y molestias",
            "Activación pre-partido y recuperación",
        ],
    },
    {
        id: "duo",
        name: "Duo",
        tag: "Normal, para dos",
        price: "150€",
        unit: "/mes · 2 jugadores",
        blurb: "75€ por jugador.",
        features: [
            "El plan Normal para 2 que entrenan juntos",
            "Mismo seguimiento, mejor precio por cabeza",
            "Mismo calendario / entrenáis juntos",
        ],
    },
    {
        id: "pro",
        name: "Pro",
        tag: "Máximo seguimiento",
        price: "220€",
        unit: "/mes",
        blurb: "Plazas muy limitadas.",
        features: [
            "Seguimiento cercano semanal y contacto prioritario",
            "Acompañamiento nutricional (hábitos + timing)",
            "Revaluaciones periódicas de tu nivel",
            "Coordinación con tu club o físio",
        ],
    },
];

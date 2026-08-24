const NUMS = { es: "34711233350", pt: "34711233350" };

const MSGS = {
    generic: "Hola, quiero información de ARC.LAB",
    basic: "Hola, me interesa el plan Basic",
    pro: "Hola, me interesa el plan Pro",
    duo: "Hola, nos interesa el plan Duo",
    elite: "Hola, quiero pedir plaza Elite",
};

export const waLink = (country = "es", msg = "generic") =>
    `https://wa.me/${NUMS[country]}?text=${encodeURIComponent(MSGS[msg])}`;

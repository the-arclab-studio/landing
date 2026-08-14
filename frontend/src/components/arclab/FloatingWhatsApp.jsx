import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { waLink } from "./data";

const FloatingWhatsApp = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="card-soft flex flex-col gap-2 !rounded-2xl bg-white p-3 ring-1 ring-line"
                    >
                        <a
                            href={waLink("es", "generic")}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="float-whatsapp-es"
                            className="whitespace-nowrap rounded-xl px-5 py-3 font-grotesk text-xs font-medium uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-bone hover:text-arcblue"
                        >
                            🇪🇸 España
                        </a>
                        <a
                            href={waLink("pt", "generic")}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="float-whatsapp-pt"
                            className="whitespace-nowrap rounded-xl px-5 py-3 font-grotesk text-xs font-medium uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-bone hover:text-arcblue"
                        >
                            🇵🇹 Portugal
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                onClick={() => setOpen((v) => !v)}
                data-testid="float-whatsapp-toggle"
                aria-label="Abrir contacto por WhatsApp"
                aria-expanded={open}
                className="btn-blue !h-14 !w-14 justify-center !rounded-full !p-0"
            >
                {open ? (
                    <X className="h-5 w-5" />
                ) : (
                    <MessageCircle className="h-5 w-5" />
                )}
            </button>
        </div>
    );
};

export default FloatingWhatsApp;

import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Truck, Menu, X, ArrowUpRight, MapPin, ShieldCheck, Clock3,
  CheckCircle2, Phone, MessageCircle, Package, Route, ChevronRight, Boxes
} from "https://esm.sh/lucide-react@0.468.0?external=react";

const h = React.createElement;

// Trabajos de demostración: reemplazar con experiencias reales antes de publicar.
const worksData = [
  {
    id: 1,
    cliente: "Operación agrícola",
    categoria: "Carga pesada",
    descripcion: "Ejemplo de traslado de carga y equipos para operaciones del sector agrícola.",
    ruta: "Ica · Pisco",
    estado: "Caso de demostración",
    imagen: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=85",
    alt: "Camión de carga en carretera"
  },
  {
    id: 2,
    cliente: "Proyecto de maquinaria",
    categoria: "Maquinaria",
    descripcion: "Ejemplo de transporte especializado para maquinaria y equipos de trabajo.",
    ruta: "Pisco · Ica",
    estado: "Caso de demostración",
    imagen: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
    alt: "Operación logística de mercancías"
  },
  {
    id: 3,
    cliente: "Servicio industrial",
    categoria: "Materiales",
    descripcion: "Ejemplo de traslado de materiales para operaciones industriales y comerciales.",
    ruta: "Ica · Lima",
    estado: "Caso de demostración",
    imagen: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=85",
    alt: "Tráiler de transporte en carretera"
  }
];

const WHATSAPP_NUMBER = "51923147646";
const WHATSAPP_MESSAGE = "Hola, Transportes APC. Quisiera solicitar información sobre sus servicios de transporte de carga pesada.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const PHONE_DISPLAY = "+51 923 147 646";
const PHONE_URL = "tel:+51923147646";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" }
];

function Brand() {
  return h("a", { className: "brand", href: "#inicio", "aria-label": "Transportes APC, inicio" },
    h("img", { className: "brand-logo", src: "./assets/logo.webp", alt: "Logo de Transportes APC" }),
    h("span", { className: "brand-copy" },
      h("strong", null, "TRANSPORTES"),
      h("small", null, "APC")
    )
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  return h("header", { className: "site-header" },
    h("div", { className: "container nav-wrap" },
      h(Brand),
      h("nav", { className: "desktop-nav", "aria-label": "Navegación principal" },
        navItems.map(item => h("a", { key: item.href, className: "nav-link", href: item.href }, item.label))
      ),
      h("a", { className: "nav-cta", href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer" },
        "Cotizar ahora", h(ArrowUpRight, { size: 17 })
      ),
      h("button", {
        className: "menu-toggle", type: "button",
        onClick: () => setIsOpen(value => !value),
        "aria-label": isOpen ? "Cerrar menú" : "Abrir menú",
        "aria-expanded": isOpen
      }, isOpen ? h(X, { size: 25 }) : h(Menu, { size: 25 }))
    ),
    isOpen && h("nav", { className: "mobile-menu", "aria-label": "Navegación móvil" },
      navItems.map(item => h("a", {
        key: item.href, className: "mobile-link", href: item.href, onClick: closeMenu
      }, item.label, h(ChevronRight, { size: 17 }))),
      h("a", {
        className: "mobile-cta", href: WHATSAPP_URL, target: "_blank",
        rel: "noopener noreferrer", onClick: closeMenu
      }, "Cotizar por WhatsApp", h(ArrowUpRight, { size: 18 }))
    )
  );
}

function Hero() {
  const highlights = [
    { Icon: ShieldCheck, title: "Seguridad", text: "En cada traslado" },
    { Icon: Clock3, title: "Compromiso", text: "Con cada cliente" },
    { Icon: CheckCircle2, title: "Confianza", text: "En cada servicio" }
  ];
  return h("section", { className: "hero-section", id: "inicio" },
    h("div", { className: "hero-orb hero-orb-one" }),
    h("div", { className: "hero-orb hero-orb-two" }),
    h("div", { className: "container hero-grid" },
      h("div", { className: "hero-copy" },
        h("div", { className: "eyebrow eyebrow-dark" },
          h("span", { className: "eyebrow-dot" }), "TRANSPORTE DE CARGA PESADA"
        ),
        h("h1", null, "Movemos tu carga, ", h("span", null, "impulsamos"), " tu negocio."),
        h("p", { className: "hero-description" },
          "Soluciones de transporte de carga pesada con compromiso, responsabilidad y atención directa. ",
          "Tu operación merece un servicio a la altura de sus necesidades."
        ),
        h("div", { className: "hero-actions" },
          h("a", { className: "button button-primary", href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer" },
            "Solicitar cotización", h(ArrowUpRight, { size: 19 })
          ),
          h("a", { className: "button button-outline", href: "#experiencia" },
            "Ver experiencia", h(ChevronRight, { size: 19 })
          )
        ),
        h("div", { className: "hero-highlights" },
          highlights.map(({ Icon, title, text }) =>
            h("div", { className: "highlight", key: title },
              h("span", { className: "highlight-icon" }, h(Icon, { size: 21 })),
              h("span", { className: "highlight-copy" },
                h("strong", null, title), h("small", null, text)
              )
            )
          )
        )
      ),
      h("div", { className: "hero-visual", "aria-label": "Emblema de camión rojo de Transportes APC" },
        h("div", { className: "hero-visual-ring" }),
        h("div", { className: "hero-visual-grid" }),
        h("img", { className: "hero-truck-logo", src: "./assets/logo.webp", alt: "Tráiler rojo del emblema de Transportes APC" }),
        h("div", { className: "hero-visual-caption" },
          h("span", { className: "caption-line" }), h("span", null, "FUERZA · RUTA · CONFIANZA")
        )
      )
    ),
    h("div", { className: "hero-bottom-line" })
  );
}

function Services() {
  const services = [
    { Icon: Truck, title: "Transporte de carga pesada", text: "Soluciones para movilizar cargas y mercancías de acuerdo con las necesidades de cada operación." },
    { Icon: Package, title: "Traslado de materiales", text: "Apoyo en el transporte de materiales para proyectos, empresas y actividades productivas." },
    { Icon: Boxes, title: "Maquinaria y equipos", text: "Alternativas de traslado para equipos y maquinaria, coordinadas según las características de la carga." }
  ];
  return h("section", { className: "services-section section-pad", id: "servicios" },
    h("div", { className: "container" },
      h("div", { className: "section-heading" },
        h("span", { className: "section-kicker" }, "LO QUE HACEMOS"),
        h("h2", null, "Un servicio pensado para ", h("span", null, "tu operación.")),
        h("p", null, "Una presentación de los principales tipos de servicio que puede mostrar Transportes APC.")
      ),
      h("div", { className: "services-grid" },
        services.map(({ Icon, title, text }, index) =>
          h("article", { className: "service-card", key: title },
            h("div", { className: "service-card-top" },
              h("span", { className: "service-icon" }, h(Icon, { size: 25 })),
              h("span", { className: "service-number" }, `0${index + 1}`)
            ),
            h("h3", null, title), h("p", null, text),
            h("a", { href: "#contacto", className: "service-link" }, "Consultar servicio", h(ArrowUpRight, { size: 17 }))
          )
        )
      )
    )
  );
}

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const filters = ["Todos", "Carga pesada", "Maquinaria", "Materiales"];
  const visibleWorks = activeFilter === "Todos" ? worksData : worksData.filter(work => work.categoria === activeFilter);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.startsWith("#experiencia-")) {
      window.setTimeout(() => {
        const target = document.getElementById(hash.slice(1));
        if (target) target.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 350);
    }
  }, []);

  return h("section", { className: "portfolio-section section-pad", id: "experiencia" },
    h("div", { className: "container" },
      h("div", { className: "portfolio-heading-row" },
        h("div", { className: "section-heading section-heading-left" },
          h("span", { className: "section-kicker" }, "EXPERIENCIA DE TRABAJO"),
          h("h2", null, "Trabajo que nos ", h("span", null, "mueve.")),
          h("p", null, "Estos espacios son ejemplos de cómo se presentarán tus servicios y experiencias reales.")
        ),
        h("div", { className: "portfolio-note" }, h(CheckCircle2, { size: 18 }), "Contenido demostrativo")
      ),
      h("div", { className: "filter-row", role: "group", "aria-label": "Filtrar experiencias" },
        filters.map(filter => h("button", {
          key: filter, type: "button",
          className: `filter-button${activeFilter === filter ? " active" : ""}`,
          onClick: () => setActiveFilter(filter)
        }, filter))
      ),
      h("div", { className: "portfolio-grid" },
        visibleWorks.map(work =>
          h("article", { className: "work-card", id: `experiencia-${work.id}`, key: work.id },
            h("div", { className: "work-image-wrap" },
              h("img", {
                src: work.imagen, alt: work.alt, loading: "lazy",
                onError: event => { event.currentTarget.style.display = "none"; }
              }),
              h("span", { className: "work-status" }, work.estado),
              h("span", { className: "work-category" }, work.categoria)
            ),
            h("div", { className: "work-content" },
              h("span", { className: "work-overline" }, `EXPERIENCIA 0${work.id}`),
              h("h3", null, work.cliente),
              h("p", null, work.descripcion),
              h("div", { className: "work-route" }, h(MapPin, { size: 17 }), h("span", null, work.ruta)),
              h("a", { className: "work-link", href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer" },
                "Consultar un servicio similar", h(ArrowUpRight, { size: 17 })
              )
            )
          )
        )
      ),
      h("p", { className: "portfolio-footnote" },
        "Nota: las imágenes, rutas y descripciones son referenciales. Se reemplazarán por los trabajos reales de la empresa."
      )
    )
  );
}

function Contact() {
  return h("section", { className: "contact-section section-pad", id: "contacto" },
    h("div", { className: "container contact-grid" },
      h("div", { className: "contact-copy" },
        h("span", { className: "section-kicker section-kicker-light" }, "HABLEMOS DE TU CARGA"),
        h("h2", null, "¿Listo para ", h("span", null, "coordinar"), " tu próximo traslado?"),
        h("p", null, "Comunícate directamente con nuestro contacto. Cuéntanos qué necesitas transportar y coordinaremos los detalles de tu solicitud.")
      ),
      h("div", { className: "contact-card" },
        h("div", { className: "contact-card-top" },
          h("div", { className: "contact-avatar" }, "APC"),
          h("div", { className: "contact-person" },
            h("span", null, "CONTACTO"), h("strong", null, "APC INGENIERO"),
            h("a", { href: PHONE_URL }, PHONE_DISPLAY)
          )
        ),
        h("div", { className: "contact-actions" },
          h("a", { className: "contact-action contact-action-whatsapp", href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer" },
            h(MessageCircle, { size: 19 }), "WhatsApp"
          ),
          h("a", { className: "contact-action contact-action-call", href: PHONE_URL },
            h(Phone, { size: 19 }), "Llamar"
          )
        ),
        h("small", { className: "contact-caption" }, "Atención directa · +51 923 147 646")
      )
    )
  );
}

function Footer() {
  return h("footer", { className: "site-footer" },
    h("div", { className: "container footer-inner" },
      h(Brand),
      h("p", null, `© ${new Date().getFullYear()} Transportes APC. Todos los derechos reservados.`),
      h("a", { href: "#inicio", className: "back-top" }, "Volver arriba", h(ArrowUpRight, { size: 16 }))
    )
  );
}

function WhatsAppFloat() {
  return h("a", {
    className: "whatsapp-float", href: WHATSAPP_URL, target: "_blank",
    rel: "noopener noreferrer", "aria-label": "Escribir a Transportes APC por WhatsApp"
  }, h(MessageCircle, { size: 27, strokeWidth: 2.2 }));
}

function App() {
  return h(React.Fragment, null,
    h(Navbar),
    h("main", null, h(Hero), h(Services), h(Portfolio), h(Contact)),
    h(Footer),
    h(WhatsAppFloat)
  );
}

createRoot(document.getElementById("root")).render(h(App));

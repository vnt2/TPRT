import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const h = React.createElement;

const PHONE_DISPLAY = "+51 923 147 646";
const PHONE_URL = "tel:+51923147646";
const WHATSAPP_NUMBER = "51923147646";
const WHATSAPP_MESSAGE =
  "Hola, Transportes APC. Quisiera solicitar una cotización para un servicio de transporte de carga pesada.";
const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Servicios", href: "#servicios" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" }
];

const IS_DETAIL_PAGE = document.body.dataset.page === "experience-detail";
const HOME_LINK = "./index.html";

// Fotografías de referencia. Reemplazarlas por imágenes reales de la empresa
// antes de presentar estos trabajos como experiencia propia.
const worksData = [
  {
    id: 1,
    cliente: "Transporte de carga por carretera",
    categoria: "Carga pesada",
    descripcion:
      "Ejemplo visual de un servicio de transporte de mercancías por carretera, con coordinación de origen y destino.",
    ruta: "Ruta coordinada con el cliente",
    estado: "Imagen referencial",
    imagen:
      "https://images.pexels.com/photos/11087837/pexels-photo-11087837.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Camión tráiler rojo circulando por una carretera"
  },
  {
    id: 2,
    cliente: "Traslado de carga industrial",
    categoria: "Industrial",
    descripcion:
      "Referencia de traslado de carga para operaciones industriales y proyectos que requieren planificación.",
    ruta: "Servicio según requerimiento",
    estado: "Imagen referencial",
    imagen:
      "https://images.pexels.com/photos/29399463/pexels-photo-29399463.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Camión rojo con carga cubierta en una zona industrial"
  },
  {
    id: 3,
    cliente: "Transporte de maquinaria",
    categoria: "Maquinaria",
    descripcion:
      "Ejemplo de presentación para servicios de traslado de equipos y maquinaria de trabajo.",
    ruta: "Destino por coordinación",
    estado: "Imagen referencial",
    imagen:
      "https://images.pexels.com/photos/6563903/pexels-photo-6563903.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Tráiler rojo de carga pesada en carretera"
  }
];

function MaterialIcon({ name, className = "" }) {
  return h(
    "span",
    {
      className: `material-symbols-rounded ${className}`.trim(),
      "aria-hidden": "true"
    },
    name
  );
}

function WhatsAppMark({ size = 25 }) {
  return h(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      focusable: "false"
    },
    h("path", {
      d: "M20.52 3.48A11.8 11.8 0 0 0 12.04 0C5.5 0 .18 5.31.18 11.85c0 2.09.55 4.13 1.6 5.93L.08 24l6.39-1.67a11.83 11.83 0 0 0 5.56 1.41h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.38-8.4ZM12.04 21.72h-.01c-1.74 0-3.45-.47-4.94-1.36l-.35-.21-3.79.99 1.01-3.7-.23-.38a9.84 9.84 0 0 1-1.51-5.21c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.03 6.96 2.89a9.79 9.79 0 0 1 2.89 6.97c0 5.43-4.42 9.86-9.85 9.86Zm5.41-7.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.09 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"
    })
  );
}

function Brand() {
  return h(
    "a",
    {
      className: "brand",
      href: IS_DETAIL_PAGE ? `${HOME_LINK}#inicio` : "#inicio",
      "aria-label": "Transportes APC, volver al inicio"
    },
    h("img", {
      className: "brand-logo",
      src: "./assets/logo.webp",
      alt: "Emblema de Transportes APC"
    }),
    h(
      "span",
      { className: "brand-copy" },
      h("strong", null, "TRANSPORTES"),
      h("small", null, "APC")
    )
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return h(
    "header",
    { className: "site-header" },
    h(
      "div",
      { className: "container nav-inner" },
      h(Brand),
      h(
        "nav",
        { className: "desktop-nav", "aria-label": "Navegación principal" },
        navItems.map((item) =>
          h(
            "a",
            {
              key: item.href,
              className: "nav-link",
              href: IS_DETAIL_PAGE ? `${HOME_LINK}${item.href}` : item.href
            },
            item.label
          )
        )
      ),
      h(
        "a",
        {
          className: "nav-cta",
          href: WHATSAPP_URL,
          target: "_blank",
          rel: "noopener noreferrer"
        },
        "Cotizar ahora",
        h(MaterialIcon, { name: "north_east" })
      ),
      h(
        "button",
        {
          className: "menu-toggle",
          type: "button",
          onClick: () => setIsOpen((value) => !value),
          "aria-label": isOpen ? "Cerrar menú" : "Abrir menú",
          "aria-expanded": isOpen
        },
        h(MaterialIcon, { name: isOpen ? "close" : "menu" })
      )
    ),
    isOpen &&
      h(
        "nav",
        { className: "mobile-menu", "aria-label": "Navegación móvil" },
        navItems.map((item) =>
          h(
            "a",
            {
              key: item.href,
              className: "mobile-link",
              href: IS_DETAIL_PAGE ? `${HOME_LINK}${item.href}` : item.href,
              onClick: closeMenu
            },
            item.label,
            h(MaterialIcon, { name: "arrow_forward" })
          )
        ),
        h(
          "a",
          {
            className: "mobile-menu-cta",
            href: WHATSAPP_URL,
            target: "_blank",
            rel: "noopener noreferrer",
            onClick: closeMenu
          },
          "Solicitar cotización",
          h(MaterialIcon, { name: "north_east" })
        )
      )
  );
}

function TrustItem({ icon, title, text }) {
  return h(
    "div",
    { className: "trust-item" },
    h(
      "span",
      { className: "trust-icon" },
      h(MaterialIcon, { name: icon })
    ),
    h(
      "span",
      { className: "trust-copy" },
      h("strong", null, title),
      h("small", null, text)
    )
  );
}

function Hero() {
  return h(
    "section",
    { className: "hero-section", id: "inicio" },
    h(
      "div",
      { className: "container hero-layout" },
      h(
        "div",
        { className: "hero-copy" },
        h(
          "div",
          { className: "hero-eyebrow" },
          h("span", { className: "hero-eyebrow-line" }),
          h("span", null, "TRANSPORTE DE CARGA PESADA")
        ),
        h(
          "h1",
          null,
          "Movemos tu carga.",
          h("br"),
          h("span", null, "Impulsamos"),
          " tu negocio."
        ),
        h(
          "p",
          { className: "hero-description" },
          "Soluciones de transporte de carga pesada con planificación, responsabilidad y atención directa. ",
          "Tu operación merece un servicio a la altura de sus necesidades."
        ),
        h(
          "div",
          { className: "hero-actions" },
          h(
            "a",
            {
              className: "button button-primary",
              href: WHATSAPP_URL,
              target: "_blank",
              rel: "noopener noreferrer"
            },
            "Solicitar cotización",
            h(MaterialIcon, { name: "north_east" })
          ),
          h(
            "a",
            { className: "button button-secondary", href: "#servicios" },
            "Conocer servicios",
            h(MaterialIcon, { name: "arrow_forward" })
          )
        ),
        h(
          "div",
          { className: "hero-trust" },
          h(TrustItem, {
            icon: "verified_user",
            title: "Seguridad",
            text: "En cada traslado"
          }),
          h(TrustItem, {
            icon: "schedule",
            title: "Compromiso",
            text: "Con cada cliente"
          }),
          h(TrustItem, {
            icon: "task_alt",
            title: "Confianza",
            text: "En cada servicio"
          })
        )
      )
    )
  );
}

const servicesData = [
  {
    number: "01",
    icon: "local_shipping",
    title: "Transporte de carga pesada",
    text: "Traslado de mercancías y cargas de acuerdo con las características de cada operación."
  },
  {
    number: "02",
    icon: "precision_manufacturing",
    title: "Maquinaria y equipos",
    text: "Coordinación para movilizar maquinaria y equipos de trabajo según el destino requerido."
  },
  {
    number: "03",
    icon: "inventory_2",
    title: "Carga industrial",
    text: "Apoyo de transporte para empresas, proyectos y operaciones del sector industrial."
  }
];

function SectionHeading({ kicker, title, accent, description, align = "left" }) {
  return h(
    "div",
    { className: `section-heading section-heading-${align}` },
    h("span", { className: "section-kicker" }, kicker),
    h("h2", null, title, " ", h("span", null, accent)),
    h("p", null, description)
  );
}

function Services() {
  return h(
    "section",
    { className: "services-section section-pad", id: "servicios" },
    h(
      "div",
      { className: "container" },
      h(SectionHeading, {
        kicker: "NUESTROS SERVICIOS",
        title: "Transporte pensado para",
        accent: "cada necesidad.",
        description:
          "Conoce las soluciones que puedes consultar y coordinar con nuestro equipo."
      }),
      h(
        "div",
        { className: "services-grid" },
        servicesData.map((service) =>
          h(
            "article",
            { className: "service-card", key: service.number },
            h(
              "div",
              { className: "service-card-head" },
              h(
                "span",
                { className: "service-icon" },
                h(MaterialIcon, { name: service.icon })
              ),
              h("span", { className: "service-number" }, service.number)
            ),
            h("h3", null, service.title),
            h("p", null, service.text),
            h(
              "a",
              { className: "service-link", href: "#contacto" },
              "Consultar servicio",
              h(MaterialIcon, { name: "arrow_outward" })
            )
          )
        )
      )
    )
  );
}

function WorkCard({ work }) {
  return h(
    "a",
    {
      className: "work-card",
      id: `experiencia-${work.id}`,
      href: `./experiencia.html?id=${work.id}`,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": `Abrir ficha de ejemplo: ${work.cliente} en una nueva pestaña`
    },
    h(
      "div",
      { className: "work-image-wrap" },
      h("img", {
        src: work.imagen,
        alt: work.alt,
        loading: "lazy",
        onError: (event) => event.currentTarget.classList.add("image-unavailable")
      }),
      h("span", { className: "work-status" }, work.estado),
      h("span", { className: "work-category" }, work.categoria)
    ),
    h(
      "div",
      { className: "work-content" },
      h("span", { className: "work-overline" }, `EXPERIENCIA 0${work.id}`),
      h("h3", null, work.cliente),
      h("p", null, work.descripcion),
      h(
        "div",
        { className: "work-route" },
        h(MaterialIcon, { name: "route" }),
        h("span", null, work.ruta)
      ),
      h(
        "div",
        { className: "work-link" },
        "Ver ficha del servicio",
        h(MaterialIcon, { name: "arrow_outward" })
      )
    )
  );
}

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const filters = ["Todos", "Carga pesada", "Maquinaria", "Industrial"];
  const visibleWorks =
    activeFilter === "Todos"
      ? worksData
      : worksData.filter((work) => work.categoria === activeFilter);

  return h(
    "section",
    { className: "portfolio-section section-pad", id: "experiencia" },
    h(
      "div",
      { className: "container" },
      h(
        "div",
        { className: "portfolio-heading-row" },
        h(SectionHeading, {
          kicker: "EXPERIENCIA DE TRABAJO",
          title: "Cada ruta cuenta",
          accent: "una historia.",
          description:
            "Una muestra visual de los tipos de transporte y operaciones que puedes presentar en este espacio."
        }),
        h(
          "div",
          { className: "portfolio-side-note" },
          h(MaterialIcon, { name: "photo_camera" }),
          h("span", null, "Galería de demostración")
        )
      ),
      h(
        "div",
        { className: "filter-row", role: "group", "aria-label": "Filtrar experiencias" },
        filters.map((filter) =>
          h(
            "button",
            {
              key: filter,
              type: "button",
              className: `filter-button${activeFilter === filter ? " active" : ""}`,
              onClick: () => setActiveFilter(filter)
            },
            filter
          )
        )
      ),
      h(
        "div",
        { className: "portfolio-grid" },
        visibleWorks.map((work) => h(WorkCard, { work, key: work.id }))
      ),
      h(
        "p",
        { className: "portfolio-footnote" },
        h(MaterialIcon, { name: "info" }),
        "Las fotografías y descripciones son referenciales. Sustitúyelas por imágenes y datos reales antes de presentar estos ejemplos como trabajos ejecutados."
      )
    )
  );
}

function Location() {
  return h(
    "section",
    { className: "location-section section-pad", id: "ubicacion" },
    h(
      "div",
      { className: "container location-layout" },
      h(
        "div",
        { className: "location-copy" },
        h("span", { className: "section-kicker" }, "DÓNDE NOS ENCONTRAMOS"),
        h(
          "h2",
          null,
          "Estamos aquí para ",
          h("span", null, "atenderte.")
        ),
        h(
          "p",
          null,
          "Consulta nuestra ubicación y abre el mapa para conocer el punto exacto. ",
          "Será un gusto coordinar contigo tu próximo servicio de transporte."
        ),
        h(
          "div",
          { className: "location-detail" },
          h(
            "span",
            { className: "location-detail-icon" },
            h(MaterialIcon, { name: "location_on" })
          ),
          h(
            "span",
            { className: "location-detail-copy" },
            h("strong", null, "Nuestra ubicación"),
            h("small", null, "Punto indicado en Google Maps")
          )
        ),
        h(
          "a",
          {
            className: "button button-location",
            href: "https://maps.app.goo.gl/4DhJMiLW4mREQN1w6",
            target: "_blank",
            rel: "noopener noreferrer"
          },
          "Cómo llegar",
          h(MaterialIcon, { name: "north_east" })
        )
      ),
      h(
        "div",
        { className: "location-map-card" },
        h(
          "div",
          { className: "location-map-heading" },
          h(
            "span",
            { className: "location-map-title" },
            h(MaterialIcon, { name: "map" }),
            "UBICACIÓN EN EL MAPA"
          ),
          h(
            "a",
            {
              href: "https://maps.app.goo.gl/4DhJMiLW4mREQN1w6",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "Abrir ubicación en Google Maps"
            },
            h(MaterialIcon, { name: "open_in_new" })
          )
        ),
        h("iframe", {
          className: "location-map",
          title: "Ubicación compartida de Transportes APC en Google Maps",
          src: "https://maps.google.com/maps?q=-13.9351381%2C-75.862211&z=16&output=embed",
          loading: "lazy",
          referrerPolicy: "no-referrer-when-downgrade",
          allowFullScreen: true
        }),
        h(
          "div",
          { className: "location-map-footer" },
          h(MaterialIcon, { name: "near_me" }),
          h("span", null, "Ver punto exacto y cómo llegar"),
          h(
            "a",
            {
              href: "https://maps.app.goo.gl/4DhJMiLW4mREQN1w6",
              target: "_blank",
              rel: "noopener noreferrer"
            },
            "Google Maps"
          )
        )
      )
    )
  );
}

function Contact() {
  return h(
    "section",
    { className: "contact-section section-pad", id: "contacto" },
    h("div", { className: "contact-glow" }),
    h(
      "div",
      { className: "container contact-grid" },
      h(
        "div",
        { className: "contact-copy" },
        h("span", { className: "section-kicker section-kicker-light" }, "CONTACTO DIRECTO"),
        h(
          "h2",
          null,
          "¿Listo para ",
          h("span", null, "coordinar"),
          " tu próximo traslado?"
        ),
        h(
          "p",
          null,
          "Cuéntanos qué necesitas transportar. Comunícate directamente para consultar disponibilidad y coordinar los detalles de tu servicio."
        ),
        h(
          "div",
          { className: "contact-promise" },
          h(MaterialIcon, { name: "support_agent" }),
          h("span", null, "Atención directa para consultas y cotizaciones")
        )
      ),
      h(
        "div",
        { className: "contact-card" },
        h("span", { className: "contact-label" }, "HABLEMOS"),
        h("p", { className: "contact-card-title" }, "Comunícate con nosotros"),
        h("a", { className: "contact-number", href: PHONE_URL }, PHONE_DISPLAY),
        h(
          "div",
          { className: "contact-actions" },
          h(
            "a",
            {
              className: "contact-action contact-action-whatsapp",
              href: WHATSAPP_URL,
              target: "_blank",
              rel: "noopener noreferrer"
            },
            h(WhatsAppMark, { size: 21 }),
            "WhatsApp"
          ),
          h(
            "a",
            { className: "contact-action contact-action-call", href: PHONE_URL },
            h(MaterialIcon, { name: "call" }),
            "Llamar"
          )
        ),
        h(
          "div",
          { className: "contact-card-foot" },
          h(MaterialIcon, { name: "phone_in_talk" }),
          `Atención directa · ${PHONE_DISPLAY}`
        )
      )
    )
  );
}

function Footer() {
  return h(
    "footer",
    { className: "site-footer" },
    h(
      "div",
      { className: "container footer-inner" },
      h(
        "div",
        { className: "footer-company" },
        h("strong", null, "TRANSPORTES APC"),
        h("span", null, "Transporte de carga pesada")
      ),
      h(
        "nav",
        { className: "footer-nav", "aria-label": "Navegación del pie de página" },
        navItems.map((item) =>
          h(
            "a",
            {
              key: item.href,
              href: IS_DETAIL_PAGE ? `${HOME_LINK}${item.href}` : item.href
            },
            item.label
          )
        )
      ),
      h(
        "p",
        { className: "footer-copyright" },
        `© ${new Date().getFullYear()} Transportes APC. Todos los derechos reservados.`
      )
    )
  );
}

function WhatsAppFloat() {
  return h(
    "a",
    {
      className: "whatsapp-float",
      href: WHATSAPP_URL,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Escribir a Transportes APC por WhatsApp"
    },
    h(WhatsAppMark, { size: 31 })
  );
}

const experienceDetails = {
  1: {
    eyebrow: "CASO DEMOSTRATIVO 01",
    title: "Transporte de carga por carretera",
    category: "Carga pesada",
    intro:
      "Ejemplo de una operación de transporte de mercancía embalada, desde la coordinación inicial hasta la entrega en el destino acordado.",
    route: "Ica – Pisco",
    load: "Mercadería embalada",
    vehicle: "Tractocamión con semirremolque",
    focus: "Coordinación de ruta y entrega",
    objective:
      "Organizar el traslado de una carga general considerando el tipo de mercancía, las condiciones del recorrido y los horarios coordinados con el cliente.",
    stages: [
      {
        number: "01",
        title: "Coordinación del servicio",
        text: "Se recopila la información de la carga, el punto de recojo, el destino y las condiciones de entrega."
      },
      {
        number: "02",
        title: "Preparación del traslado",
        text: "Se revisan los datos operativos y se organiza la salida de acuerdo con lo coordinado."
      },
      {
        number: "03",
        title: "Ruta y entrega",
        text: "Se realiza el traslado y se coordina la recepción de la mercancía en el punto de destino."
      }
    ]
  },
  2: {
    eyebrow: "CASO DEMOSTRATIVO 02",
    title: "Traslado de carga industrial",
    category: "Industrial",
    intro:
      "Ejemplo de una operación para movilizar suministros, componentes y materiales destinados a una instalación industrial.",
    route: "Pisco – Ica",
    load: "Suministros y componentes",
    vehicle: "Unidad de carga pesada",
    focus: "Planificación y acondicionamiento",
    objective:
      "Presentar una operación organizada en la que se consideran las dimensiones, el acondicionamiento y las indicaciones de manipulación de la carga.",
    stages: [
      {
        number: "01",
        title: "Identificación de la carga",
        text: "Se recopilan las características generales, dimensiones y requerimientos de manipulación del material."
      },
      {
        number: "02",
        title: "Organización logística",
        text: "Se coordinan los horarios, accesos y condiciones necesarias para efectuar el servicio."
      },
      {
        number: "03",
        title: "Traslado coordinado",
        text: "La unidad realiza el recorrido previsto y se coordina la recepción con el responsable del destino."
      }
    ]
  },
  3: {
    eyebrow: "CASO DEMOSTRATIVO 03",
    title: "Transporte de maquinaria",
    category: "Maquinaria",
    intro:
      "Ejemplo de presentación de un servicio de traslado de maquinaria y equipos de trabajo para proyectos de construcción u operaciones productivas.",
    route: "Ruta interprovincial referencial",
    load: "Maquinaria y equipos",
    vehicle: "Configuración según dimensiones de carga",
    focus: "Evaluación previa del traslado",
    objective:
      "Mostrar cómo se estructura una solicitud de transporte de equipos, considerando sus dimensiones, peso, puntos de carga y descarga, y condiciones de circulación.",
    stages: [
      {
        number: "01",
        title: "Evaluación del equipo",
        text: "Se solicita información de las dimensiones, peso y características de la maquinaria que se desea movilizar."
      },
      {
        number: "02",
        title: "Definición de condiciones",
        text: "Se revisan los accesos, puntos de carga y descarga, y los requerimientos especiales que correspondan."
      },
      {
        number: "03",
        title: "Coordinación del servicio",
        text: "Se establece la programación del traslado y la comunicación con los responsables de origen y destino."
      }
    ]
  }
};

function DetailFact({ icon, label, value }) {
  return h(
    "div",
    { className: "detail-fact" },
    h(
      "span",
      { className: "detail-fact-icon" },
      h(MaterialIcon, { name: icon })
    ),
    h(
      "span",
      { className: "detail-fact-copy" },
      h("small", null, label),
      h("strong", null, value)
    )
  );
}

function ExperienceDetail() {
  const requestedId = Number(new URLSearchParams(window.location.search).get("id")) || 1;
  const work = worksData.find((item) => item.id === requestedId) || worksData[0];
  const detail = experienceDetails[work.id] || experienceDetails[1];

  return h(
    React.Fragment,
    null,
    h(Navbar),
    h(
      "main",
      { className: "detail-page" },
      h(
        "section",
        { className: "detail-hero" },
        h(
          "div",
          { className: "container detail-hero-inner" },
          h(
            "div",
            { className: "detail-breadcrumb" },
            h("a", { href: "./index.html#inicio" }, "Inicio"),
            h(MaterialIcon, { name: "chevron_right" }),
            h("a", { href: "./index.html#experiencia" }, "Experiencia"),
            h(MaterialIcon, { name: "chevron_right" }),
            h("span", null, `0${work.id}`)
          ),
          h("span", { className: "detail-eyebrow" }, detail.eyebrow),
          h("h1", null, detail.title),
          h("p", null, detail.intro),
          h(
            "div",
            { className: "detail-hero-actions" },
            h(
              "a",
              {
                className: "button button-primary",
                href: WHATSAPP_URL,
                target: "_blank",
                rel: "noopener noreferrer"
              },
              "Consultar un servicio",
              h(MaterialIcon, { name: "north_east" })
            ),
            h(
              "a",
              { className: "detail-back-link", href: "./index.html#experiencia" },
              h(MaterialIcon, { name: "arrow_back" }),
              "Volver a experiencias"
            )
          )
        )
      ),
      h(
        "section",
        { className: "detail-image-section" },
        h(
          "div",
          { className: "container" },
          h(
            "div",
            { className: "detail-image-frame" },
            h("img", {
              src: work.imagen,
              alt: work.alt,
              onError: (event) => event.currentTarget.classList.add("image-unavailable")
            }),
            h(
              "span",
              { className: "detail-image-caption" },
              h(MaterialIcon, { name: "photo_camera" }),
              "Fotografía referencial"
            )
          )
        )
      ),
      h(
        "section",
        { className: "detail-overview section-pad" },
        h(
          "div",
          { className: "container detail-overview-grid" },
          h(
            "div",
            { className: "detail-overview-copy" },
            h("span", { className: "section-kicker" }, "DESCRIPCIÓN DEL SERVICIO"),
            h("h2", null, "Una operación bien coordinada."),
            h("p", null, detail.objective),
            h(
              "div",
              { className: "detail-demo-note" },
              h(MaterialIcon, { name: "info" }),
              h(
                "span",
                null,
                "Contenido de demostración: este caso, sus datos y la fotografía son ilustrativos y no describen un servicio real ejecutado por Transportes APC."
              )
            )
          ),
          h(
            "div",
            { className: "detail-facts-card" },
            h("span", { className: "detail-facts-heading" }, "RESUMEN DEL EJEMPLO"),
            h(DetailFact, {
              icon: "route",
              label: "Ruta referencial",
              value: detail.route
            }),
            h(DetailFact, {
              icon: "inventory_2",
              label: "Tipo de carga",
              value: detail.load
            }),
            h(DetailFact, {
              icon: "local_shipping",
              label: "Unidad de transporte",
              value: detail.vehicle
            }),
            h(DetailFact, {
              icon: "assignment_turned_in",
              label: "Enfoque del servicio",
              value: detail.focus
            })
          )
        )
      ),
      h(
        "section",
        { className: "detail-process section-pad" },
        h(
          "div",
          { className: "container" },
          h(SectionHeading, {
            kicker: "CÓMO SE ORGANIZA",
            title: "Etapas del",
            accent: "servicio.",
            description:
              "Una estructura de ejemplo para explicar al visitante cómo puede desarrollarse una solicitud de transporte."
          }),
          h(
            "div",
            { className: "detail-stages" },
            detail.stages.map((stage) =>
              h(
                "article",
                { className: "detail-stage", key: stage.number },
                h("span", { className: "detail-stage-number" }, stage.number),
                h("h3", null, stage.title),
                h("p", null, stage.text)
              )
            )
          )
        )
      ),
      h(
        "section",
        { className: "detail-cta-section" },
        h(
          "div",
          { className: "container detail-cta-inner" },
          h(
            "div",
            null,
            h("span", { className: "section-kicker section-kicker-light" }, "TRANSPORTES APC"),
            h("h2", null, "¿Necesitas un servicio como este?"),
            h("p", null, "Conversemos sobre tu carga, el recorrido y las condiciones de tu traslado.")
          ),
          h(
            "a",
            {
              className: "button button-primary",
              href: WHATSAPP_URL,
              target: "_blank",
              rel: "noopener noreferrer"
            },
            h(WhatsAppMark, { size: 20 }),
            "Solicitar información"
          )
        )
      )
    ),
    h(Footer),
    h(WhatsAppFloat)
  );
}

function App() {
  return h(
    React.Fragment,
    null,
    h(Navbar),
    h(
      "main",
      null,
      h(Hero),
      h(Portfolio),
      h(Services),
      h(Location),
      h(Contact)
    ),
    h(Footer),
    h(WhatsAppFloat)
  );
}

createRoot(document.getElementById("root")).render(
  h(IS_DETAIL_PAGE ? ExperienceDetail : App)
);

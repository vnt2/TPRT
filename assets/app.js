import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Truck,
  Menu,
  X,
  ArrowUpRight,
  MapPin,
  ShieldCheck,
  Clock3,
  Route,
  CheckCircle2,
  MoveUpRight,
  CircleCheck,
} from 'https://esm.sh/lucide-react@0.468.0?external=react';

const h = React.createElement;

// =====================================================
// CONFIGURACIÓN: reemplaza este valor por el WhatsApp real
// Perú: 51 + número de celular, sin espacios ni símbolos.
// Ejemplo de formato: 51987654321
// Mientras siga con X, el botón abrirá WhatsApp para elegir
// el contacto y enviará el mensaje preparado.
// =====================================================
const WHATSAPP_NUMBER = '519XXXXXXXX';
const WHATSAPP_MESSAGE = 'Hola, Transportes Luque. Quisiera solicitar una cotización.';

function getWhatsAppUrl(message = WHATSAPP_MESSAGE) {
  const digits = WHATSAPP_NUMBER.replace(/\D/g, '');
  const configured = /^\d{10,15}$/.test(digits) && !WHATSAPP_NUMBER.includes('X');
  const base = configured ? `https://wa.me/${digits}` : 'https://wa.me/';
  return `${base}?text=${encodeURIComponent(message)}`;
}

// Datos demostrativos. Sustituye clientes, rutas, estados e imágenes
// por fotografías y trabajos reales de Transportes Luque antes de publicar.
const worksData = [
  {
    id: 1,
    cliente: 'Sector agrícola',
    categoria: 'Transporte especializado',
    descripcion: 'Traslado de maquinaria, equipos e insumos para operaciones agrícolas.',
    ruta: 'Ica · Pisco',
    estado: 'Completado',
    imagen: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1100&q=85',
    alt: 'Camión de carga pesada en carretera',
  },
  {
    id: 2,
    cliente: 'Sector construcción',
    categoria: 'Logística de obra',
    descripcion: 'Servicio de transporte para el movimiento de materiales y equipos de obra.',
    ruta: 'Pisco · Ica',
    estado: 'Recurrente',
    imagen: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1100&q=85',
    alt: 'Operación logística y transporte de mercancías',
  },
  {
    id: 3,
    cliente: 'Sector industrial',
    categoria: 'Carga pesada',
    descripcion: 'Soluciones de traslado para carga y operaciones del sector industrial.',
    ruta: 'Ica · Lima',
    estado: 'Completado',
    imagen: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1100&q=85',
    alt: 'Tráiler de carga pesada en carretera',
  },
];

function WhatsAppIcon({ size = 22 }) {
  return h(
    'svg',
    { width: size, height: size, viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': 'true' },
    h('path', {
      d: 'M20.52 3.48A11.8 11.8 0 0 0 12.04 0C5.5 0 .18 5.31.18 11.85c0 2.09.55 4.13 1.6 5.93L.08 24l6.39-1.67a11.83 11.83 0 0 0 5.56 1.41h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.38-8.4ZM12.04 21.72h-.01c-1.74 0-3.45-.47-4.94-1.36l-.35-.21-3.79.99 1.01-3.7-.23-.38a9.84 9.84 0 0 1-1.51-5.21c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.03 6.96 2.89a9.79 9.79 0 0 1 2.89 6.97c0 5.43-4.42 9.86-9.85 9.86Zm5.41-7.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.09 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z',
    })
  );
}

function Brand({ footer = false }) {
  return h(
    'a',
    { href: '#inicio', className: `brand ${footer ? 'footer-brand' : ''}`, 'aria-label': 'Transportes Luque, ir al inicio' },
    h('span', { className: 'brand-mark' }, h(Truck, { size: 26, strokeWidth: 2.2 })),
    h('span', null,
      h('span', { className: 'brand-name' }, 'TRANSPORTES'),
      h('span', { className: 'brand-sub' }, 'LUQUE')
    )
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Portafolio', href: '#portafolio' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const closeMenu = () => setIsOpen(false);

  return h('header', { className: 'site-header' },
    h('nav', { className: 'container nav-wrap', 'aria-label': 'Navegación principal' },
      h(Brand),
      h('div', { className: 'desktop-nav' },
        ...links.map((link) => h('a', { key: link.href, href: link.href, className: 'nav-link' }, link.label)),
        h('a', { href: getWhatsAppUrl(), target: '_blank', rel: 'noopener noreferrer', className: 'quote-button' },
          'Cotizar ahora', h(ArrowUpRight, { size: 17 })
        )
      ),
      h('button', {
        type: 'button',
        className: 'mobile-toggle',
        onClick: () => setIsOpen((open) => !open),
        'aria-label': isOpen ? 'Cerrar menú' : 'Abrir menú',
        'aria-expanded': isOpen,
        'aria-controls': 'mobile-navigation',
      }, isOpen ? h(X, { size: 25 }) : h(Menu, { size: 25 }))
    ),
    isOpen && h('div', { className: 'mobile-menu', id: 'mobile-navigation' },
      ...links.map((link) => h('a', { key: link.href, href: link.href, onClick: closeMenu }, link.label)),
      h('a', { href: getWhatsAppUrl(), target: '_blank', rel: 'noopener noreferrer', className: 'quote-button', onClick: closeMenu },
        'Cotizar ahora', h(ArrowUpRight, { size: 17 })
      )
    )
  );
}

function Hero() {
  return h('section', {
    id: 'inicio',
    className: 'hero',
    style: { backgroundImage: "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=90')" },
  },
    h('div', { className: 'container hero-content' },
      h('div', { className: 'eyebrow' }, h('span', { className: 'eyebrow-dot' }), 'TRANSPORTE DE CARGA PESADA'),
      h('h1', { className: 'hero-title' },
        'MOVEMOS TU CARGA,', h('br'),
        h('span', { className: 'accent' }, 'IMPULSAMOS'), h('br'),
        'TU NEGOCIO.'
      ),
      h('p', { className: 'hero-copy' },
        'Soluciones de transporte de carga pesada con compromiso, responsabilidad y seguridad en cada recorrido. Tu carga merece un servicio a la altura de tus operaciones.'
      ),
      h('div', { className: 'hero-actions' },
        h('a', { href: getWhatsAppUrl(), target: '_blank', rel: 'noopener noreferrer', className: 'quote-button' },
          'Solicitar cotización', h(ArrowUpRight, { size: 19 })
        ),
        h('a', { href: '#portafolio', className: 'hero-secondary' },
          'Conoce nuestros servicios', h(Route, { size: 18 })
        )
      ),
      h('div', { className: 'hero-values' },
        h('div', { className: 'hero-value' },
          h('span', { className: 'hero-value-icon' }, h(ShieldCheck, { size: 22 })),
          h('span', null, h('strong', null, 'Seguridad'), h('span', null, 'En cada traslado'))
        ),
        h('div', { className: 'hero-value' },
          h('span', { className: 'hero-value-icon' }, h(Clock3, { size: 22 })),
          h('span', null, h('strong', null, 'Compromiso'), h('span', null, 'Con cada cliente'))
        ),
        h('div', { className: 'hero-value' },
          h('span', { className: 'hero-value-icon' }, h(CheckCircle2, { size: 22 })),
          h('span', null, h('strong', null, 'Confianza'), h('span', null, 'En cada servicio'))
        )
      )
    )
  );
}

function WorkCard({ work }) {
  const recurrent = work.estado.toLowerCase() === 'recurrente';
  return h('article', { className: 'work-card' },
    h('div', { className: 'work-image-wrap' },
      h('img', {
        className: 'work-image',
        src: work.imagen,
        alt: work.alt,
        loading: 'lazy',
        onError: (event) => { event.currentTarget.style.opacity = '0'; },
      }),
      h('span', { className: `work-badge ${recurrent ? 'recurrent' : ''}` },
        h(CircleCheck, { size: 13 }), work.estado
      )
    ),
    h('div', { className: 'work-content' },
      h('span', { className: 'work-category' }, work.categoria),
      h('h3', { className: 'work-title' }, work.cliente),
      h('p', { className: 'work-description' }, work.descripcion),
      h('div', { className: 'work-route' },
        h('span', { className: 'route-label' }, h(MapPin, { size: 17 }), work.ruta),
        h(MoveUpRight, { size: 18, className: 'route-arrow' })
      )
    )
  );
}

function Portfolio() {
  return h('section', { id: 'portafolio', className: 'section scroll-mt-20' },
    h('div', { className: 'container' },
      h('div', { className: 'section-heading' },
        h('span', { className: 'section-kicker' }, 'NUESTRO TRABAJO'),
        h('h2', { className: 'section-title' }, 'Experiencia que ', h('span', { className: 'accent' }, 'nos mueve.'),),
        h('p', { className: 'section-copy' },
          'Conoce algunos ejemplos de los sectores y operaciones a los que podemos brindar soluciones de transporte de carga pesada.'
        )
      ),
      h('div', { className: 'portfolio-grid' },
        ...worksData.map((work) => h(WorkCard, { key: work.id, work }))
      ),
      h('p', { className: 'portfolio-note' },
        'Las imágenes y los trabajos mostrados son referenciales. Se recomienda reemplazarlos por fotografías y proyectos reales de Transportes Luque antes de publicar.'
      )
    )
  );
}

function Contact() {
  return h('section', { id: 'contacto', className: 'contact-section scroll-mt-20' },
    h('div', { className: 'container' },
      h('div', { className: 'contact-inner' },
        h('span', { className: 'section-kicker' }, 'ESTAMOS PARA AYUDARTE'),
        h('h2', { className: 'contact-title' },
          '¿NECESITAS ', h('span', { className: 'accent' }, 'TRANSPORTAR'), h('br'), 'TU CARGA?'
        ),
        h('p', { className: 'contact-copy' },
          'Cuéntanos qué necesitas transportar y coordinemos una solución para tu operación. Comunícate con nuestro equipo y solicita tu cotización.'
        ),
        h('a', {
          href: getWhatsAppUrl(), target: '_blank', rel: 'noopener noreferrer',
          className: 'quote-button contact-button',
        }, h(WhatsAppIcon, { size: 22 }), 'Cotizar por WhatsApp', h(ArrowUpRight, { size: 18 }))
      )
    )
  );
}

function Footer() {
  return h('footer', { className: 'site-footer' },
    h('div', { className: 'container footer-main' },
      h(Brand, { footer: true }),
      h('nav', { className: 'footer-links', 'aria-label': 'Navegación del pie de página' },
        h('a', { href: '#inicio' }, 'Inicio'),
        h('a', { href: '#portafolio' }, 'Portafolio'),
        h('a', { href: '#contacto' }, 'Contacto')
      )
    ),
    h('div', { className: 'footer-bottom' },
      h('div', { className: 'container' }, `© ${new Date().getFullYear()} Transportes Luque. Todos los derechos reservados.`)
    )
  );
}

function WhatsAppFloat() {
  return h('a', {
    href: getWhatsAppUrl(),
    target: '_blank',
    rel: 'noopener noreferrer',
    className: 'whatsapp-float',
    'aria-label': 'Contactar a Transportes Luque por WhatsApp',
    title: 'Cotizar por WhatsApp',
  }, h(WhatsAppIcon, { size: 29 }));
}

function App() {
  return h(React.Fragment, null,
    h(Navbar),
    h('main', null, h(Hero), h(Portfolio), h(Contact)),
    h(Footer),
    h(WhatsAppFloat)
  );
}

createRoot(document.getElementById('root')).render(h(App));

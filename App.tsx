import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";

type Service = {
  title: string;
  description: string;
  accent: string;
};

const services: Service[] = [
  {
    title: "Maestranza industrial",
    description:
      "Mecanizado, reparacion y desarrollo de piezas para operacion continua en entornos exigentes.",
    accent: "01",
  },
  {
    title: "Fabricacion metalica",
    description:
      "Estructuras, soportes, protecciones y soluciones a medida con terminaciones limpias y durables.",
    accent: "02",
  },
  {
    title: "Soldadura especializada",
    description:
      "Uniones resistentes, mantenciones correctivas y trabajos en acero carbono e inoxidable.",
    accent: "03",
  },
  {
    title: "Insumos industriales",
    description:
      "Proximamente venta de tornillos, fijaciones y materiales industriales seleccionados.",
    accent: "04",
  },
];

type GalleryItem = {
  title: string;
  category: string;
  image: string;
  featured?: boolean;
};

const galleryItems: GalleryItem[] = [
  {
    title: "Esparragos roscados",
    category: "Tornilleria",
    image: "/gallery/figcore-01.jpeg",
  },
  {
    title: "Ejes con rodamientos",
    category: "Mecanizado",
    image: "/gallery/figcore-02.jpeg",
  },
  {
    title: "Placas y bujes",
    category: "Fabricacion metalica",
    image: "/gallery/figcore-03.jpeg",
  },
  {
    title: "Pernos mecanizados",
    category: "Tornilleria",
    image: "/gallery/figcore-04.jpeg",
  },
  {
    title: "Eje industrial",
    category: "Mecanizado",
    image: "/gallery/figcore-05.jpeg",
    featured: true,
  },
  {
    title: "Pinon y soporte",
    category: "Conjuntos",
    image: "/gallery/figcore-06.jpeg",
  },
  {
    title: "Transmision mecanica",
    category: "Conjuntos",
    image: "/gallery/figcore-07.jpeg",
  },
  {
    title: "Apoyos mecanizados",
    category: "Mecanizado",
    image: "/gallery/figcore-08.jpeg",
  },
  {
    title: "Discos torneados",
    category: "Mecanizado",
    image: "/gallery/figcore-09.jpeg",
  },
  {
    title: "Guias plasticas",
    category: "Polimeros",
    image: "/gallery/figcore-10.jpeg",
  },
  {
    title: "Ejes moleteados",
    category: "Mecanizado",
    image: "/gallery/figcore-11.jpeg",
  },
  {
    title: "Tapones y resortes",
    category: "Tornilleria",
    image: "/gallery/figcore-12.jpeg",
  },
  {
    title: "Eje de precision",
    category: "Mecanizado",
    image: "/gallery/figcore-13.jpeg",
  },
  {
    title: "Rodillos de polimero",
    category: "Polimeros",
    image: "/gallery/figcore-14.jpeg",
    featured: true,
  },
  {
    title: "Ejes con pinones",
    category: "Conjuntos",
    image: "/gallery/figcore-15.jpeg",
  },
  {
    title: "Pieza tecnica plastica",
    category: "Polimeros",
    image: "/gallery/figcore-16.jpeg",
  },
  {
    title: "Gancho tecnico",
    category: "Polimeros",
    image: "/gallery/figcore-17.jpeg",
  },
  {
    title: "Pinon y pernos",
    category: "Tornilleria",
    image: "/gallery/figcore-18.jpeg",
  },
  {
    title: "Rodamiento industrial",
    category: "Repuestos",
    image: "/gallery/figcore-19.jpeg",
  },
  {
    title: "Caja mecanica",
    category: "Mantencion",
    image: "/gallery/figcore-20.jpeg",
    featured: true,
  },
  {
    title: "Pinon mecanizado",
    category: "Mecanizado",
    image: "/gallery/figcore-21.jpeg",
  },
  {
    title: "Detalle dentado",
    category: "Mecanizado",
    image: "/gallery/figcore-22.jpeg",
  },
  {
    title: "Tornillos industriales",
    category: "Tornilleria",
    image: "/gallery/figcore-23.jpeg",
  },
  {
    title: "Anillos de polimero",
    category: "Polimeros",
    image: "/gallery/figcore-24.jpeg",
  },
  {
    title: "Conexion roscada",
    category: "Mecanizado",
    image: "/gallery/figcore-25.jpeg",
  },
  {
    title: "Cuerpo mecanizado",
    category: "Mecanizado",
    image: "/gallery/figcore-26.jpeg",
    featured: true,
  },
];

export default function FigCoreLanding() {
  return (
    <main className="min-h-screen bg-[#0b1f33] text-[#f8fafa]">
      <Navbar />
      <Hero />

      <section id="servicios" className="border-y border-white/10 bg-[#0b1f33]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 lg:py-20">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1fr]">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#f28c28]">
              Servicios
            </p>
            <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight text-[#f8fafa] md:text-5xl">
              Capacidad tecnica con trato directo y respuesta cercana.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-sm border border-white/10 bg-[#eef2f1] p-6 text-[#172126] shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#f8fafa] md:p-7"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-[#f28c28]">
                    {service.accent}
                  </span>
                  <span className="h-px w-12 bg-[#173f46]/20 transition-all duration-300 group-hover:w-20 group-hover:bg-[#f28c28]" />
                </div>
                <h3 className="text-xl font-black text-[#172126] md:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-[#5b686c] md:text-base">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="nosotros" className="bg-[#07121f] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[#f28c28]">
              Sobre nosotros
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Una empresa familiar con mentalidad industrial moderna.
            </h2>
          </div>
          <div className="space-y-8 text-lg leading-8 text-white/72">
            <p>
              FigCore nace desde el oficio, la confianza y la necesidad de
              entregar soluciones metalicas bien ejecutadas. Trabajamos con
              cercania, orden y foco en resolver problemas concretos para cada
              cliente.
            </p>
            <p>
              Combinamos experiencia practica, mirada tecnica y una estetica de
              trabajo limpia: procesos claros, piezas robustas y comunicacion
              directa desde la primera cotizacion hasta la entrega final.
            </p>
            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {["Precision", "Resistencia", "Cumplimiento"].map((item) => (
                <div key={item} className="border-l border-[#f28c28] pl-4">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="galeria" className="bg-[#0b1f33]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[#f28c28]">
                Galeria
              </p>
              <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-[#f8fafa] md:text-6xl">
                Trabajo industrial con terminacion premium.
              </h2>
            </div>
            <p className="max-w-sm leading-7 text-white/70">
              Espacios preparados para incorporar fotografias reales de taller,
              procesos y proyectos terminados.
            </p>
          </div>

          <div className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {galleryItems.map((item, index) => (
              <article
                key={item.image}
                className={`group relative overflow-hidden rounded-sm border border-white/10 bg-[#102c45] shadow-xl shadow-black/15 ${
                  item.featured ? "sm:col-span-2 md:row-span-2" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.category} FigCore`}
                  loading={index < 6 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07121f]/88 via-[#07121f]/18 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 border-t border-white/25 pt-3 text-white">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f28c28]">
                        {item.category}
                      </p>
                      <h3 className="mt-1 text-lg font-black leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    <span className="text-xs font-black text-white/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-[#07121f]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[#f28c28]">
              Contacto
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-tight text-[#f8fafa] md:text-6xl">
              Cotiza fabricacion, reparacion o soldadura.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-white/72">
              Cuentanos que necesitas fabricar, reparar o mejorar. Te
              responderemos con una propuesta clara y aterrizada.
            </p>
          </div>

          <form className="grid gap-4 rounded-sm border border-white/10 bg-[#eef2f1] p-5 text-[#172126] md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-[#173f46]">
                Nombre
                <input
                  className="rounded-sm border border-[#173f46]/10 bg-white px-4 py-4 outline-none transition-colors focus:border-[#f28c28]"
                  placeholder="Tu nombre"
                  type="text"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-[#173f46]">
                Telefono
                <input
                  className="rounded-sm border border-[#173f46]/10 bg-white px-4 py-4 outline-none transition-colors focus:border-[#f28c28]"
                  placeholder="+56 9 0000 0000"
                  type="tel"
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-bold text-[#173f46]">
              Correo
              <input
                className="rounded-sm border border-[#173f46]/10 bg-white px-4 py-4 outline-none transition-colors focus:border-[#f28c28]"
                placeholder="correo@empresa.cl"
                type="email"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-[#173f46]">
              Mensaje
              <textarea
                className="min-h-36 resize-none rounded-sm border border-[#173f46]/10 bg-white px-4 py-4 outline-none transition-colors focus:border-[#f28c28]"
                placeholder="Cuentanos sobre tu proyecto"
              />
            </label>
            <button
              className="mt-2 rounded-sm bg-[#173f46] px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0f2f35]"
              type="submit"
            >
              Enviar solicitud
            </button>
          </form>
        </div>
      </section>

      <Footer />

      <a
        href="https://wa.me/56900000000"
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-8 right-5 z-50 grid h-16 w-16 place-items-center rounded-full bg-[#25d366] text-white shadow-2xl shadow-[#173f46]/25 transition-transform duration-300 hover:-translate-y-1"
      >
        <svg
          aria-hidden="true"
          className="h-9 w-9"
          fill="currentColor"
          viewBox="0 0 32 32"
        >
          <path d="M16.01 3.2c-7.04 0-12.76 5.7-12.76 12.72 0 2.41.68 4.75 1.96 6.78L3.2 30.08l7.57-1.98a12.8 12.8 0 0 0 5.24 1.12c7.04 0 12.76-5.7 12.76-12.73S23.05 3.2 16.01 3.2Zm0 23.86c-1.73 0-3.43-.4-4.96-1.17l-.36-.18-4.49 1.18 1.2-4.36-.24-.38a10.53 10.53 0 0 1-1.74-5.82c0-5.82 4.75-10.55 10.59-10.55S26.6 10.5 26.6 16.33s-4.75 10.73-10.59 10.73Zm5.8-7.9c-.32-.16-1.87-.92-2.16-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.68.08-.32-.16-1.34-.49-2.55-1.56-.94-.84-1.58-1.87-1.76-2.19-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.7-.97-2.33-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64s1.14 3.06 1.3 3.27c.16.21 2.24 3.41 5.42 4.78.76.33 1.35.53 1.81.68.76.24 1.45.21 2 .13.61-.09 1.87-.76 2.13-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </a>
    </main>
  );
}

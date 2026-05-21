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

const galleryItems = [
  "Estructuras metalicas",
  "Piezas a medida",
  "Soldadura industrial",
  "Mantencion mecanica",
  "Corte y armado",
  "Terminaciones tecnicas",
];

export default function FigCoreLanding() {
  return (
    <main className="min-h-screen bg-[#f4f6f6] text-[#172126]">
      <Navbar />
      <Hero />

      <section id="servicios" className="border-y border-[#173f46]/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
          <div className="mb-14 grid gap-6 lg:grid-cols-[0.8fr_1fr]">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#d9863d]">
              Servicios
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-tight text-[#173f46] md:text-6xl">
              Capacidad tecnica con trato directo y respuesta cercana.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-sm border border-[#173f46]/10 bg-[#173f46]/10 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="group bg-white p-7 transition-colors duration-300 hover:bg-[#f4f6f6] md:p-10"
              >
                <div className="mb-12 flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-[#d9863d]">
                    {service.accent}
                  </span>
                  <span className="h-px w-16 bg-[#173f46]/20 transition-all duration-300 group-hover:w-24 group-hover:bg-[#d9863d]" />
                </div>
                <h3 className="text-2xl font-black text-[#172126]">{service.title}</h3>
                <p className="mt-4 max-w-xl leading-7 text-[#5b686c]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="nosotros" className="bg-[#173f46] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[#d9863d]">
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
                <div key={item} className="border-l border-[#d9863d] pl-4">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="galeria" className="bg-[#f4f6f6]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[#d9863d]">
                Galeria
              </p>
              <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-[#173f46] md:text-6xl">
                Trabajo industrial con terminacion premium.
              </h2>
            </div>
            <p className="max-w-sm leading-7 text-[#5b686c]">
              Espacios preparados para incorporar fotografias reales de taller,
              procesos y proyectos terminados.
            </p>
          </div>

          <div className="grid auto-rows-[220px] gap-4 md:grid-cols-3 md:auto-rows-[260px]">
            {galleryItems.map((item, index) => (
              <div
                key={item}
                className={`group relative overflow-hidden rounded-sm bg-[#cfd6d7] ${
                  index === 0 || index === 5 ? "md:row-span-2" : ""
                }`}
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(23,63,70,0.92),rgba(23,63,70,0.4)),repeating-linear-gradient(45deg,rgba(255,255,255,0.12)_0_1px,transparent_1px_18px)] transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between border-t border-white/25 pt-4 text-white">
                  <p className="text-lg font-black">{item}</p>
                  <span className="text-xs font-black text-[#d9863d]">
                    0{index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[#d9863d]">
              Contacto
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-tight text-[#173f46] md:text-6xl">
              Cotiza fabricacion, reparacion o soldadura.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[#5b686c]">
              Cuentanos que necesitas fabricar, reparar o mejorar. Te
              responderemos con una propuesta clara y aterrizada.
            </p>
          </div>

          <form className="grid gap-4 rounded-sm border border-[#173f46]/10 bg-[#f4f6f6] p-5 md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-[#173f46]">
                Nombre
                <input
                  className="rounded-sm border border-[#173f46]/10 bg-white px-4 py-4 outline-none transition-colors focus:border-[#d9863d]"
                  placeholder="Tu nombre"
                  type="text"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-[#173f46]">
                Telefono
                <input
                  className="rounded-sm border border-[#173f46]/10 bg-white px-4 py-4 outline-none transition-colors focus:border-[#d9863d]"
                  placeholder="+56 9 0000 0000"
                  type="tel"
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-bold text-[#173f46]">
              Correo
              <input
                className="rounded-sm border border-[#173f46]/10 bg-white px-4 py-4 outline-none transition-colors focus:border-[#d9863d]"
                placeholder="correo@empresa.cl"
                type="email"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-[#173f46]">
              Mensaje
              <textarea
                className="min-h-36 resize-none rounded-sm border border-[#173f46]/10 bg-white px-4 py-4 outline-none transition-colors focus:border-[#d9863d]"
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
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-lg font-black text-white shadow-2xl shadow-[#173f46]/25 transition-transform duration-300 hover:-translate-y-1"
      >
        W
      </a>
    </main>
  );
}

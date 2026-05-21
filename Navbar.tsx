import React from "react";

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-[#f4f6f6]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#inicio" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-sm bg-[#173f46] text-sm font-black tracking-tight text-white transition-transform duration-300 group-hover:rotate-3">
            FC
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-base font-black uppercase tracking-[0.18em] text-[#173f46]">
              FigCore
            </span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d9863d]">
              Industrial
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-[#46555a] md:flex">
          <a className="transition-colors hover:text-[#173f46]" href="#servicios">
            Servicios
          </a>
          <a className="transition-colors hover:text-[#173f46]" href="#nosotros">
            Nosotros
          </a>
          <a className="transition-colors hover:text-[#173f46]" href="#galeria">
            Galeria
          </a>
          <a className="transition-colors hover:text-[#173f46]" href="#contacto">
            Contacto
          </a>
        </div>

        <a
          href="#contacto"
          className="rounded-sm bg-[#173f46] px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-lg shadow-[#173f46]/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0f2f35]"
        >
          Cotizar
        </a>
      </nav>
    </div>
  );
}

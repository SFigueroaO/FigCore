import React from "react";

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b1f33]/92 shadow-sm shadow-black/10 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-7 md:px-8">
        <a href="#inicio" className="group block">
          <img
            src="/figcore-logo.png"
            alt="FigCore"
            className="h-24 w-auto max-w-[360px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </a>

        <div className="hidden items-center gap-10 text-lg font-semibold text-white/75 md:flex">
          <a className="transition-colors hover:text-[#f28c28]" href="#servicios">
            Servicios
          </a>
          <a className="transition-colors hover:text-[#f28c28]" href="#nosotros">
            Nosotros
          </a>
          <a className="transition-colors hover:text-[#f28c28]" href="#galeria">
            Galeria
          </a>
          <a className="transition-colors hover:text-[#f28c28]" href="#contacto">
            Contacto
          </a>
        </div>

        <a
          href="#contacto"
          className="rounded-sm bg-[#eef2f1] px-8 py-4 text-base font-bold uppercase tracking-[0.18em] text-[#0b1f33] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
        >
          Cotizar
        </a>
      </nav>
    </div>
  );
}

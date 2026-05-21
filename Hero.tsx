import React from "react";

const stats = [
  { value: "100%", label: "Soluciones a medida" },
  { value: "24/7", label: "Compromiso operativo" },
  { value: "+", label: "Nueva linea de insumos" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(23,63,70,0.08),rgba(244,246,246,0.2)_42%,rgba(217,134,61,0.12))]" />
        <div className="absolute left-0 top-24 h-px w-full bg-[#173f46]/10" />
        <div className="absolute bottom-0 left-1/2 h-72 w-[70rem] -translate-x-1/2 border-x border-[#173f46]/10" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-12 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28 lg:pt-20">
        <div className="flex flex-col justify-center">
          <p className="mb-6 w-fit border-l-2 border-[#d9863d] pl-4 text-xs font-black uppercase tracking-[0.28em] text-[#d9863d]">
            Maestranza moderna y familiar
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.96] tracking-tight text-[#132226] md:text-7xl lg:text-8xl">
            Metalurgia precisa para industrias que no se detienen.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#516064] md:text-xl">
            En FigCore fabricamos, reparamos y soldamos soluciones metalicas
            pensadas para trabajo real: resistentes, limpias y listas para
            producir.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="rounded-sm bg-[#d9863d] px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-[#172126] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e59a58]"
            >
              Hablemos de tu proyecto
            </a>
            <a
              href="#servicios"
              className="rounded-sm border border-[#173f46]/20 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-[#173f46] transition-all duration-300 hover:-translate-y-1 hover:border-[#173f46] hover:bg-white"
            >
              Ver servicios
            </a>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-sm bg-[#173f46] p-4 shadow-2xl shadow-[#173f46]/20 md:min-h-[580px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(217,134,61,0.35),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)]" />
          <div className="absolute inset-4 border border-white/15" />
          <div className="absolute left-8 top-8 h-24 w-24 border-l border-t border-[#d9863d]" />
          <div className="absolute bottom-8 right-8 h-24 w-24 border-b border-r border-[#d9863d]" />

          <div className="relative grid h-full min-h-[390px] grid-rows-[1fr_auto] md:min-h-[550px]">
            <div className="flex items-center justify-center">
              <div className="relative h-64 w-64 animate-[pulse_5s_ease-in-out_infinite] rounded-full border border-white/15 md:h-80 md:w-80">
                <div className="absolute inset-8 rounded-full border border-white/10" />
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />
                <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/10" />
                <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-[#d9863d] shadow-2xl shadow-[#d9863d]/30" />
                <div className="absolute left-[18%] top-[28%] h-12 w-28 rounded-sm border border-white/20 bg-white/10 backdrop-blur" />
                <div className="absolute bottom-[22%] right-[13%] h-16 w-36 rounded-sm border border-white/20 bg-white/10 backdrop-blur" />
              </div>
            </div>

            <div className="grid gap-3 border-t border-white/15 pt-5 text-white sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-black text-[#d9863d]">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/65">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

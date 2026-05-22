import React from "react";

const stats = [
  { value: "100%", label: "Soluciones a medida" },
  { value: "24/7", label: "Compromiso operativo" },
  { value: "+", label: "Nueva linea de insumos" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-24 md:pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,18,31,0.98),rgba(11,31,51,0.96)_50%,rgba(217,134,61,0.16))]" />
        <div className="absolute left-0 top-24 h-px w-full bg-white/10" />
        <div className="absolute bottom-0 left-1/2 h-72 w-[70rem] -translate-x-1/2 border-x border-white/10" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-14 pt-8 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-20 lg:pt-12">
        <div className="flex flex-col justify-center">
          <p className="mb-5 w-fit border-l-2 border-[#f28c28] pl-4 text-xs font-black uppercase tracking-[0.28em] text-[#f28c28]">
            Maestranza moderna y familiar
          </p>
          <h1 className="max-w-2xl text-[2.35rem] font-bold leading-[1.22] tracking-[0.03em] text-[#f8fafa] sm:text-[2.9rem] md:text-[3.35rem] lg:text-[4rem]">
            Metalurgia precisa para industrias que no se detienen.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
            En FigCore fabricamos, reparamos y soldamos soluciones metalicas
            pensadas para trabajo real: resistentes, limpias y listas para
            producir.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="rounded-sm bg-[#f28c28] px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-[#172126] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff9f43]"
            >
              Hablemos de tu proyecto
            </a>
            <a
              href="#servicios"
              className="rounded-sm border border-white/20 bg-white/8 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#f28c28] hover:bg-white/12"
            >
              Ver servicios
            </a>
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-sm bg-[#102c45] p-4 shadow-2xl shadow-black/25 md:min-h-[480px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(217,134,61,0.35),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)]" />
          <div className="absolute inset-4 border border-white/15" />
          <div className="absolute left-8 top-8 h-24 w-24 border-l border-t border-[#f28c28]" />
          <div className="absolute bottom-8 right-8 h-24 w-24 border-b border-r border-[#f28c28]" />

          <div className="relative grid h-full min-h-[330px] grid-rows-[1fr_auto] md:min-h-[450px]">
            <div className="flex items-center justify-center">
              <div className="relative h-56 w-56 animate-[pulse_5s_ease-in-out_infinite] rounded-full border border-white/15 md:h-72 md:w-72">
                <div className="absolute inset-8 rounded-full border border-white/10" />
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />
                <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/10" />
                <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-[#f28c28] shadow-2xl shadow-[#f28c28]/30" />
                <div className="absolute left-[18%] top-[28%] h-10 w-24 rounded-sm border border-white/20 bg-white/10 backdrop-blur" />
                <div className="absolute bottom-[22%] right-[13%] h-14 w-32 rounded-sm border border-white/20 bg-white/10 backdrop-blur" />
              </div>
            </div>

            <div className="grid gap-3 border-t border-white/15 pt-5 text-white sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-black text-[#f28c28]">{stat.value}</p>
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

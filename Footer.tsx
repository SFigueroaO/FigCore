import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b1f33] px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-white/65 md:flex-row md:items-center">
        <p className="font-black uppercase tracking-[0.18em] text-white">
          FigCore Industrial
        </p>
        <p>Maestranza, fabricacion metalica y soldadura.</p>
      </div>
    </footer>
  );
}

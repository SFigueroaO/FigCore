import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-[#173f46]/10 bg-[#f4f6f6] px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-[#5b686c] md:flex-row md:items-center">
        <p className="font-black uppercase tracking-[0.18em] text-[#173f46]">
          FigCore Industrial
        </p>
        <p>Maestranza, fabricacion metalica y soldadura.</p>
      </div>
    </footer>
  );
}

import { B2C_EXPERIENCE_STEPS } from "@/lib/constants";
import { Zap, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="cara-sewa" className="py-24 bg-[#02162e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="vip-badge">
            <Zap size={13} />
            Langkah Pemesanan Praktis
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Cara Sewa Mobil <span className="blue-gradient-text">Semudah 4 Langkah.</span>
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            Komunikasi yang praktis, ramah, dan jelas. Tanpa birokrasi berbelit, tanpa deposit uang
            tunai rumit, dan mobil langsung siap jalan.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {B2C_EXPERIENCE_STEPS.map((item) => (
            <div
              key={item.step}
              className="luxury-card p-6 flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              <div>
                {/* Step Number with Blue Action Accent */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold font-mono text-[#0280F9]">
                    {item.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-[#005DBD] group-hover:text-white transition-all">
                    <ArrowRight size={14} />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-[#9cd0ff] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-6">{item.desc}</p>
              </div>

              {/* Step Footer Tip */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-[11px] font-mono text-[#9cd0ff] bg-[#0280F9]/10 px-2.5 py-1 rounded block text-center border border-[#0280F9]/20">
                  {item.tip}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

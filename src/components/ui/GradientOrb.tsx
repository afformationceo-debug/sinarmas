"use client";

export default function GradientOrb() {
  return (
    <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
      <div
        className="absolute inset-0 rounded-full opacity-60 blur-[80px]"
        style={{
          background:
            "conic-gradient(from 0deg, #00D4AA, #6366F1, #C8A84E, #00D4AA)",
          animation: "spin-slow 20s linear infinite",
        }}
      />
      <div
        className="absolute inset-[20%] rounded-full opacity-40 blur-[60px]"
        style={{
          background:
            "conic-gradient(from 180deg, #C8A84E, #00D4AA, #6366F1, #C8A84E)",
          animation: "spin-slow 15s linear infinite reverse",
        }}
      />
      <div
        className="absolute inset-[35%] rounded-full opacity-30 blur-[40px]"
        style={{
          background: "radial-gradient(circle, #F8FAFC 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

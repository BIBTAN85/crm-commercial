const messages = ["DROP DISPONIBLE", "STOCK LIMITÉ", "MAILLOTS MYSTÈRES", "BOX PREMIUM", "EXPÉDITION RAPIDE", "ÉDITIONS RARES"];

export function AnimatedBanner() {
  return (
    <div className="overflow-hidden border-y border-white/10 bg-burgundy/80 py-3 text-white">
      <div className="animate-marquee flex min-w-max gap-8 text-sm font-black uppercase tracking-[0.3em]">
        {[...messages, ...messages, ...messages].map((message, index) => (
          <span key={`${message}-${index}`} className="flex items-center gap-8"><span>{message}</span><span className="text-gold">●</span></span>
        ))}
      </div>
    </div>
  );
}

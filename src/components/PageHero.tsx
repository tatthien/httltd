interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative bg-[#1c1b1a] text-white py-14 md:py-18 px-4 text-center overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">{title}</h1>
        {subtitle && <p className="text-[#d8d5ce] text-base md:text-lg font-light max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}

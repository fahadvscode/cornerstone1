interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="border-b border-neutral-200/80 bg-cream-100 py-16 md:py-20">
      <div className="container-site">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-forest-700">
          Cornerstone Towns · Primont Homes
        </p>
        <h1 className="max-w-4xl font-heading text-4xl font-semibold text-forest-900 md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-forest-900 py-16 text-cream-50 md:py-20">
      <div className="container-site">
        <h1 className="font-heading text-4xl font-bold md:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-3xl text-lg text-cream-200">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

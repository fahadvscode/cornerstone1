interface FAQAccordionProps {
  faqs: { question: string; answer: string }[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  return (
    <div className="divide-y divide-neutral-200 border-y border-neutral-200">
      {faqs.map((faq, index) => (
        <details
          key={index}
          className="group py-5"
          {...(index < 2 ? { open: true } : {})}
        >
          <summary className="cursor-pointer list-none font-medium text-forest-900 marker:content-none">
            <span className="flex items-start justify-between gap-4">
              {faq.question}
              <span className="shrink-0 text-neutral-400 transition group-open:rotate-45">
                +
              </span>
            </span>
          </summary>
          <p className="mt-3 pr-8 text-sm leading-relaxed text-neutral-600">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}

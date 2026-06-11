interface FAQAccordionProps {
  faqs: { question: string; answer: string }[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <details
          key={index}
          className="group card"
          {...(index < 3 ? { open: true } : {})}
        >
          <summary className="cursor-pointer list-none font-semibold text-forest-900 marker:content-none">
            <span className="flex items-start justify-between gap-4">
              {faq.question}
              <span className="shrink-0 text-gold-500 transition group-open:rotate-45">
                +
              </span>
            </span>
          </summary>
          <p className="mt-3 text-forest-800 leading-relaxed">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

/** Accessible accordion; only one item open at a time. */
function Faq({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-ink hover:text-brand-orange"
              >
                {item.question}
                <HiChevronDown className={`flex-shrink-0 text-xl transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
            </h3>
            {isOpen && <p className="px-6 pb-6 leading-relaxed text-gray-600">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}

export default Faq;

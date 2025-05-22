"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { FAQ } from "@/lib/types"

interface FAQAccordionProps {
  faqs: FAQ[]
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([])

  return (
    <Accordion type="multiple" value={openItems} onValueChange={setOpenItems} className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 py-2">
          <AccordionTrigger className="text-lg font-medium text-gray-800 hover:text-orange-700 transition-colors">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-base text-gray-700 pt-2 pb-4">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

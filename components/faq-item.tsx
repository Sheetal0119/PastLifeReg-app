interface FAQItemProps {
  question: string
  answer: string
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold mb-2">{question}</h3>
      <p className="text-base">{answer}</p>
    </div>
  )
}

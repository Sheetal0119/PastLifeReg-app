import type React from "react"
interface SectionHeadingProps {
  children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-bold mb-8 text-center relative">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-purple-800">{children}</span>
      <span className="block h-1 w-24 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto mt-4 rounded-full"></span>
    </h2>
  )
}

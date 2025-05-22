import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface SessionCardProps {
  title: string
  imageSrc: string
  imageAlt: string
  features: string[]
  sessionInfo: string
  price: string
  showBookButton?: boolean
}

export default function SessionCard({
  title,
  imageSrc,
  imageAlt,
  features,
  sessionInfo,
  price,
  showBookButton = false,
}: SessionCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4 text-purple-800">{title}</h3>

        <div className="my-6 text-center">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            width={640}
            height={400}
            className="rounded-lg mx-auto shadow-md"
          />
        </div>

        <ul className="space-y-3 text-base mb-6">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <p className="font-medium mb-2">{sessionInfo}</p>
        <p className="font-medium mb-4">{price}</p>

        {showBookButton && <Button className="w-full bg-orange-600 hover:bg-orange-700">BOOK A SESSION NOW</Button>}
      </CardContent>
    </Card>
  )
}

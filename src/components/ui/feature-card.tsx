import * as React from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  icon?: React.ReactNode
  href?: string
}

export function FeatureCard({ title, description, icon, href, className, ...props }: FeatureCardProps) {
  const content = (
    <Card className={cn("h-full transition-all duration-300 hover:shadow-md hover:border-primary/20", className)} {...props}>
      <CardHeader>
        {icon && <div className="mb-4 text-primary bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">{icon}</div>}
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )

  if (href) {
    return (
      <Link href={href} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-xl">
        {content}
      </Link>
    )
  }

  return content
}

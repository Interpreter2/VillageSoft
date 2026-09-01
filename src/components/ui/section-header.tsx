import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionHeader({ title, subtitle, centered = true, className, ...props }: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col space-y-4 mb-12", centered && "items-center text-center", className)} {...props}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{title}</h2>
      {subtitle && (
        <p className="max-w-[800px] text-lg text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  )
}

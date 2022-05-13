import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  classes?: string
  id: string
}

export function Section({ children, classes, id }: SectionProps) {
  return (
    <section id={id} className={`custom-container mb-40 ${classes}`}>
      {children}
    </section>
  )
}

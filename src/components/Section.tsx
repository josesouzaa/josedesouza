import { ReactNode, useEffect, useState } from 'react'

import { useInView } from 'react-intersection-observer'

interface SectionProps {
  children: ReactNode
  classes?: string
  id: string
}

export function Section({ children, classes, id }: SectionProps) {
  const { ref, inView } = useInView()
  const [showClasses, setShowClasses] = useState('translate-y-72 opacity-0')

  useEffect(() => {
    if (inView) {
      setShowClasses('translate-y-0 opacity-1')
    }
  }, [inView])

  return (
    <section
      id={id}
      className={`custom-container mb-40 ${classes} ${showClasses} transition-all duration-500`}
      ref={ref}
    >
      {children}
    </section>
  )
}

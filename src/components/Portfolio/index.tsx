import { Title } from '../Title'

import { Section } from '../Section'

import { ProjectCard } from './ProjectCard'

import { Project } from '../../pages'

interface PortfolioProps {
  projects: Project[]
}

export function Portfolio({ projects }: PortfolioProps) {
  return (
    <Section id="portfolio">
      <Title title="Portfólio" />

      <div className="flex flex-col gap-8 w-full xs:w-5/6 sm:w-9/12 mx-auto">
        {projects.map(
          (project) =>
            project.preview && (
              <ProjectCard key={project.titulo} project={project} />
            )
        )}
      </div>
    </Section>
  )
}

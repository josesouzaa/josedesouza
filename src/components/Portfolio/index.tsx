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

      <div className="flex flex-col gap-8 w-full xs:w-11/12 sm:w-10/12 mx-auto rounded">
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

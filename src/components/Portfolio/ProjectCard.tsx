import { RiExternalLinkLine, RiGithubLine } from 'react-icons/ri'
import { Project } from '../../pages'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="w-full relative group rounded">
      <img
        src={project.preview}
        className="w-full aspect-video xs:aspect-auto sm:aspect-video object-cover"
      />

      <div className="relative top-0 right-0 xs:absolute w-full h-full bg-brand-blue-800 bg-opacity-90 xs:group-hover:bg-opacity-30 p-4 sm:p-6 transition-all duration-500 group-hover:drop-shadow flex flex-col items-start text-brand-gray-500 justify-evenly gap-4">
        <span className="text-xl font-bold text-brand-teal-500 sm:group-hover:translate-y-[-50%] transition-all duration-500 hover:drop-shadow-md cursor-pointer line-on-hover">
          {project.titulo}
        </span>

        <p className="xs:group-hover:opacity-0 transition-all duration-500">
          {project.resumo}
        </p>

        <ul className="hidden md:flex group-hover:opacity-0 transition-all duration-500 gap-2">
          {project.tecnologias.map((i) => (
            <li key={i}>
              <img src={i} />
            </li>
          ))}
        </ul>

        <ul className="flex gap-4 sm:group-hover:translate-y-[50%] transition-all duration-500">
          <li>
            <RiGithubLine className="hover:text-brand-teal-500 text-2xl cursor-pointer transition-all duration-300 hover:drop-shadow-md hover:scale-x-105 origin-bottom-left" />
          </li>

          <li>
            <RiExternalLinkLine className="hover:text-brand-teal-500 text-2xl cursor-pointer transition-all duration-300 hover:drop-shadow-md hover:scale-x-105 origin-bottom-left" />
          </li>
        </ul>
      </div>
    </div>
  )
}

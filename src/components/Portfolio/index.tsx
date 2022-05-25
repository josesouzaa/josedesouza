import { Title } from '../Title'

import { portfolioList } from '../../pages/_api'

import { RiExternalLinkLine, RiGithubLine } from 'react-icons/ri'
import { Section } from '../Section'

const techs = [
  'https://img.shields.io/badge/-HTML-05122A?style=flat&logo=HTML5',
  'https://img.shields.io/badge/-CSS-05122A?style=flat&logo=CSS3&logoColor=1572B6'
]

export function Portfolio() {
  return (
    <Section id="portfolio">
      <Title title="Portfólio" />

      <div className="flex flex-col gap-8 w-full xs:w-5/6 sm:w-9/12 mx-auto">
        <div className="w-full aspect-video bg-[url('https://source.unsplash.com/random')] bg-center bg-cover group rounded">
          <div className="w-full h-full bg-brand-blue-800 bg-opacity-70 group-hover:bg-opacity-0 p-4 sm:p-6 transition-all duration-500 group-hover:drop-shadow flex flex-col items-start text-brand-gray-500 justify-evenly gap-4">
            <span className="text-xl font-bold text-brand-teal-500 sm:group-hover:translate-y-[-100%] transition-all duration-500 hover:drop-shadow-md cursor-pointer hover:scale-x-105 origin-bottom-left line-on-hover">
              dev.finance$
            </span>

            <p className="group-hover:opacity-0 transition-all duration-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              quas error rerum dolorum quasi hic quo atque quidem, est amet
              ullam soluta obcaecati nesciunt veniam, rem corrupti ducimus?
              Voluptatibus, autem.
            </p>

            <ul className="group-hover:opacity-0 transition-all duration-500 flex gap-2">
              {techs.map((i) => (
                <li key={i}>
                  <img src={i} />
                </li>
              ))}
            </ul>

            <ul className="flex gap-4 sm:group-hover:translate-y-[100%] transition-all duration-500">
              <li>
                <RiGithubLine className="hover:text-brand-teal-500 text-2xl cursor-pointer transition-all duration-300 hover:drop-shadow-md hover:scale-x-105 origin-bottom-left" />
              </li>

              <li>
                <RiExternalLinkLine className="hover:text-brand-teal-500 text-2xl cursor-pointer transition-all duration-300 hover:drop-shadow-md hover:scale-x-105 origin-bottom-left" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}

import { Title } from '../components/Title'

import { works } from '../pages/_api'

import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import { Section } from '../components/Section'

export function Work() {
  return (
    <Section id="works">
      <Title title="Experiência" />

      <Tab.Group as="div" className="mx-auto w-full xs:w-4/5 sm:w-4/6">
        <Tab.List as="div" className="grid grid-cols-1 xs:grid-cols-2 w-full">
          {works.map((i) => (
            <Tab as={Fragment} key={i.empresa}>
              {({ selected }) => (
                <button
                  className={`${
                    selected
                      ? 'border-opacity-100 bg-brand-blue-800 bg-opacity-60'
                      : 'border-opacity-30 text-brand-gray-700'
                  } py-4 border-t border-brand-teal-500 rounded-sm cursor-pointer hover:bg-brand-blue-800 hover:bg-opacity-60 transition-all duration-300`}
                >
                  {i.empresa}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels as="div">
          {works.map((i) => (
            <Tab.Panel as="div" key={i.empresa} className="text-brand-gray-700">
              <div className="font-bold text-brand-gray-400 flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-6">
                <span className="text-xs text-brand-teal-500 hidden sm:block">
                  ▶
                </span>
                <h3>{i.cargo}</h3>
                <a
                  className="text-brand-teal-500 cursor-pointer line-on-hover"
                  href={i.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  @{i.empresa.replace(' ', '')}
                </a>
              </div>

              <span className="font-mono text-sm my-6 tracking-tighter block">
                {i.periodo}
              </span>

              <p>{i.resumo}</p>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </Section>
  )
}

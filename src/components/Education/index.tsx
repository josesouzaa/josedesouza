import { Disclosure } from '@headlessui/react'

import { educations } from '../../pages/_api'

import { Title } from '../Title'
import { Section } from '../Section'

export function Education() {
  return (
    <Section id="education">
      <Title title="Educação" />

      <div className="w-full sm:w-4/5 mx-auto p-4 rounded-xl flex flex-col gap-4">
        {educations.map((i, index) => (
          <Disclosure
            as="div"
            key={`${i.title}${index}`}
            className="flex flex-col justify-center"
          >
            {({ open }) => (
              <>
                <Disclosure.Button
                  as="button"
                  className={`${
                    open
                      ? 'bg-brand-teal-500 bg-opacity-50'
                      : 'bg-brand-blue-800 hover:bg-brand-teal-500 hover:bg-opacity-50'
                  } font-semibold rounded py-2 transition-all duration-500 flex justify-between px-4`}
                >
                  <h3>{i.title}</h3>
                  {open ? <span>▲</span> : <span>▼</span>}
                </Disclosure.Button>
                <Disclosure.Panel
                  as="div"
                  className="p-4 border-l border-b border-r border-brand-blue-800 flex flex-col gap-4 text-brand-gray-500"
                >
                  <div className="flex flex-col items-start sm:flex-row gap-4">
                    <span className="font-bold text-brand-teal-500 line-on-hover cursor-pointer">
                      @{i.inst}
                    </span>

                    <span className="font-mono text-brand-gray-700 tracking-tighter sm:pl-4 sm:border-l sm:border-current">
                      {i.status}
                    </span>
                  </div>

                  <span>{i.resumo}</span>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </Section>
  )
}

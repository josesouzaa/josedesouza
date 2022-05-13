import { Title } from '../components/Title'

import {
  RiUserLocationLine,
  RiMailLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiWhatsappFill
} from 'react-icons/ri'
import { Section } from '../components/Section'

export function Contact() {
  return (
    <Section id="contact">
      <Title title="Contato" />

      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-8 md:gap-0">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold">Informações</h3>

            <ul className="flex flex-col gap-2">
              <li className="flex gap-2 items-center">
                <RiUserLocationLine className="flex-shrink-0" /> Taboão da Serra
                - São Paulo
              </li>
              <li className="flex gap-2 items-center">
                <RiMailLine className="flex-shrink-0" /> josee.souzaaa@gmail.com
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold">Redes</h3>

            <ul className="flex text-3xl gap-2">
              <li>
                <RiGithubFill className="hover:text-brand-teal-500 transition-all duration-300 cursor-pointer" />
              </li>
              <li>
                <RiLinkedinBoxFill className="hover:text-brand-teal-500 transition-all duration-300 cursor-pointer" />
              </li>
              <li>
                <RiWhatsappFill className="hover:text-brand-teal-500 transition-all duration-300 cursor-pointer" />
              </li>
            </ul>
          </div>
        </div>

        <form
          action="https://formsubmit.co/joseesouzaaa@gmail.com"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            name="nome"
            id="nome"
            type="text"
            placeholder="Nome"
            required
            className="p-2 rounded bg-brand-blue-800 text-brand-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-teal-500"
          />

          <input
            name="email"
            id="email"
            type="email"
            placeholder="Email"
            required
            className="p-2 rounded bg-brand-blue-800 text-brand-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-teal-500"
          />

          <textarea
            name="mensagem"
            id="mensagem"
            placeholder="Escreva sua mensagem"
            className="p-2 rounded bg-brand-blue-800 text-brand-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-teal-500"
          />

          <button
            type="submit"
            className="place-self-start px-6 py-2 border border-brand-teal-500 rounded font-mono text-brand-teal-500 hover:bg-brand-teal-500 hover:bg-opacity-30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-500 focus-visible:ring-offset-4 focus-visible:ring-offset-brand-blue-900"
          >
            Enviar
          </button>
        </form>
      </div>
    </Section>
  )
}

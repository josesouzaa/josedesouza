import { Section } from '../Section'
import { Title } from '../Title'

export function About() {
  return (
    <Section id="about" classes="mt-0">
      <Title title="Sobre" />

      <div className="flex flex-col sm:flex-row gap-16 sm:gap-8 items-center sm:items-start ">
        <p className="text-brand-gray-700">
          Olá! Me chamo José, tenho 25 anos e moro em São Paulo. Sou formado em
          Jornalismo, atuo hoje na área de comunicação empresarial e tenho
          interesse em análise de dados e desenvolvimento para web.
          <br />
          <br />
          Sempre fui curioso e meu interesse pela criação para internet surgiu
          logo cedo, quando minha diversão era produzir temas customizados para
          o Tumblr. Com isso desenvolvi habilidade com Photoshop e HTML. Em 2021
          buscando uma evolução profissional, e prospectando novos ares,
          aprofundei meus estudos em front-end.
          <br />
          <br />
          Já no mercado de trabalho, na área de comunicação, minha expertise
          está na análise de dados e atendimento ao cliente. Produzo relatórios
          análiticos sobre exposição na mídia, colaborando com insites, visando
          melhorar a estratégia de comunicação de diversos clientes.
        </p>

        <div className="w-3/4 flex-shrink-0 sm:w-2/6 relative after:absolute after:content-[''] after:w-full after:h-full after:top-0 after:right-0 after:rounded after:bg-brand-teal-500 after:mix-blend-multiply hover:after:opacity-0 after:transition-all duration-300">
          <img
            src="https://github.com/josesouzaa.png"
            alt="José de Souza"
            className="rounded"
          />
        </div>
      </div>
    </Section>
  )
}

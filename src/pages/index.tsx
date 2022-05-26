import { NextPage, GetStaticProps } from 'next'

import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Work } from '../components/Work'
import { Education } from '../components/Education'
import { Portfolio } from '../components/Portfolio'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

import Prismic from '@prismicio/client'
import { getPrismicClient } from '../services/prismic'
import { RichText } from 'prismic-dom'

interface Tec {
  tecnologia: {
    link_type: string
    url: string
  }
}

export interface Project {
  titulo: string
  resumo: string
  github: string
  firstpage: boolean
  preview: string
  tecnologias: string[]
}

interface HomeProps {
  projects: Project[]
}

export default function Home({ projects }: HomeProps) {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Work />
      <Education />
      <Portfolio projects={projects} />
      <Contact />
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const client = getPrismicClient()

  const worksRaw = await client.query([
    Prismic.Predicates.at('document.type', 'work')
  ])

  const projectsRaw = await client.query([
    Prismic.Predicates.at('document.type', 'projects')
  ])

  const works = worksRaw.results.map((work) => ({
    cargo: work.data.cargo,
    empresa: work.data.empresa,
    periodo: work.data.periodo,
    resumo: work.data.resumo,
    img: work.data.imagem.url
  }))

  const projects = projectsRaw.results.map((project) => ({
    titulo: RichText.asText(project.data.title),
    resumo: RichText.asText(project.data.resumo),
    github: project.data.github.url,
    firstpage: project.data.firstpage,
    preview: project.data.preview.url,
    tecnologias: project.data.tecnologias.map((tec: Tec) => tec.tecnologia.url)
  }))

  return {
    props: {
      projects
    }
  }
}

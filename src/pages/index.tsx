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

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Work />
      <Education />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const client = getPrismicClient()

  const worksRaw = await client.query([
    Prismic.Predicates.at('document.type', 'work')
  ])

  const projectsRaw = await client.query([
    Prismic.Predicates.at('document.type', 'projects')
  ])

  const works = worksRaw.results.map((work) => ({
    cargo: RichText.asText(work.data.cargo),
    empresa: RichText.asText(work.data.empresa),
    periodo: RichText.asText(work.data.periodo),
    resumo: RichText.asText(work.data.resumo),
    img: work.data.imagem.url
  }))

  return {
    props: {}
  }
}

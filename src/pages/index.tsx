import { NextPage, GetStaticProps } from 'next'

import { Header } from '../sections/Header'
import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { Work } from '../sections/Work'
import { Education } from '../sections/Education'
import { Portfolio } from '../sections/Portfolio'
import { Contact } from '../sections/Contact'
import { Footer } from '../sections/Footer'

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

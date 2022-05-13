import type { NextPage } from 'next'

import { Header } from '../sections/Header'
import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { Work } from '../sections/Work'
import { Education } from '../sections/Education'
import { Portfolio } from '../sections/Portfolio'
import { Contact } from '../sections/Contact'
import { Footer } from '../sections/Footer'

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

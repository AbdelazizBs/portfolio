import Head from 'next/head'
import Acomplishments from '../components/Acomplishments/Acomplishments'
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Technologies from '../components/Technologies/Technologies'
import TimeLine from '../components/TimeLine/TimeLine'
import { Layout } from '../layout/Layout'
import { Section } from '../styles/GlobalComponents'

const Home = () => (
    <Layout>
      <Head>
        <title>Portfolio</title>
        <meta charSet='UTF-8' />
        <meta property='og:image' content='/images/PortfolioBassem.jpg' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content='Web developer portfolio' />
        <meta name='keywords' content='HTML, CSS, JavaScript' />
        <meta name='author' content='Bassem Dimassi' />
      </Head>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <TimeLine />
      <Acomplishments />
    </Layout>
  )

export default Home

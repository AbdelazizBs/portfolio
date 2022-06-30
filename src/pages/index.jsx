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
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
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

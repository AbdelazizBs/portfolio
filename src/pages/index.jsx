import Head from 'next/head'
import { useEffect } from 'react'
import axios from 'axios'
import Acomplishments from '../components/Acomplishments/Acomplishments'
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Technologies from '../components/Technologies/Technologies'
import TimeLine from '../components/TimeLine/TimeLine'
import { Layout } from '../layout/Layout'
import { Section, SectionDivider } from '../styles/GlobalComponents'
import ContactMe from '../components/ContactMe'

const Home = () => {

  async function getIPFromCloudflare() {
    const res = await axios.get('https://www.cloudflare.com/cdn-cgi/trace/')
    await axios.post('/api/analytics',res.data)
  }
  useEffect(() => {
    getIPFromCloudflare().catch(e => console.log(e))
  }, [])

  return (
    <Layout>
      <Head>
        <title>Portfolio Bassem Dimassi</title>
        <meta charSet='UTF-8' />
        <meta property='og:image' content='/images/PortfolioBassem.jpg' />
        <meta property="og:title" content="Portfolio Bassem Dimassi" />
        <meta property="og:description" content="Web developer portfolio" />
        <meta property="og:type" content="website" />
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
}

export default Home

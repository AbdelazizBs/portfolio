import React from 'react'
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = () =>
  <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
    Hi there 👋,<br/>
      I&apos;m <span className='text-primary'>Bassem Dimassi</span>
    </SectionTitle>
    <SectionText>
     Web developer with a passion for building innovative web applications.
    </SectionText>
    <Button onClick={() => {
      window.scrollTo(0, document.getElementById('contactMe').getBoundingClientRect().top)
    }}>Get in Touch</Button>
  </LeftSection>
</Section>

export default Hero

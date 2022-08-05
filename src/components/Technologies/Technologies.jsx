import React from 'react'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents'


const Technologies = () => <Section id='tech'>
  <SectionDivider divider />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I&apos;ve worked with a range a technologies in the web development world.
    From Back-end To Design
  </SectionText>

    <img className='pb-8'
      src='https://skillicons.dev/icons?i=python,selenium,express,mysql,electron,idea,prisma,docker,github,cs,dotnet,nodejs,postgres'  alt='technologies'/>
    <img className='pb-14'
      src='https://skillicons.dev/icons?i=git,vscode,react,html,css,js,ts,bootstrap,tailwind,next,vercel,flask,redux' alt='technologies' />

  <SectionDivider colorAlt />
</Section>

export default Technologies

import React from 'react'
import { motion } from 'framer-motion'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents'

const Technologies = () =>
  <Section id='tech'>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5}}
      viewport={{once: false}}
    >
  <SectionDivider divider />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I&apos;ve worked with a wide range of technologies in the web development world.
  </SectionText>

    <img className='hidden md:block pb-8'
         src='https://skillicons.dev/icons?i=python,selenium,express,mysql,electron,idea,prisma,docker,cs,dotnet,nodejs,postgres'
         alt='technologies' />
    <img className='hidden md:block pb-14'
         src='https://skillicons.dev/icons?i=vscode,react,html,css,js,ts,bootstrap,tailwind,next,vercel,flask,redux'
         alt='technologies' />

    <img className='pb-8  md:hidden'
         src='https://skillicons.dev/icons?i=python,selenium,express,mysql,electron,idea,prisma,docker'
         alt='technologies' />
    <img className='pb-8  md:hidden'
         src='https://skillicons.dev/icons?i=cs,dotnet,nodejs,postgres,vscode,react,html,css' alt='technologies' />
    <img className='pb-14  md:hidden'
         src='https://skillicons.dev/icons?i=js,ts,bootstrap,tailwind,next,vercel,flask,redux' alt='technologies' />

  <SectionDivider colorAlt />
    </motion.div>
</Section>

export default Technologies

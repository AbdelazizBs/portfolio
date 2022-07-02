import React from 'react'

import Image from 'next/image'
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  TitleContent,
} from './ProjectsStyles'
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents'
import { projects } from '../../constants/constants'

const Projects = () => <Section nopadding id='projects'>
  <SectionDivider />
  <SectionTitle main>Projects</SectionTitle>
  <GridContainer>
    {projects.map((p, index) => <BlogCard key={index}>
      <Image src={p.image} alt={p.alt} width={640} height={360} />
      <TitleContent>
        <HeaderThree title='true'>{p.title}</HeaderThree>
        <Hr />
      </TitleContent>
      <CardInfo className='card-info'>{p.description}</CardInfo>
      <div>
        <ul className="flex flex-wrap justify-around p-6 gap-x-3 gap-y-20 my-8">
          {p.tags.map((t, i) => i!==4?<div key={i+i+1} className="flex-nowrap"><ExternalLinks key={i}>{t}</ExternalLinks></div>:
            <div key={i+i+1} className="flex-wrap"><ExternalLinks key={i}>{t}</ExternalLinks></div>)}
        </ul>
      </div>
    </BlogCard>)}
  </GridContainer>
</Section>

export default Projects

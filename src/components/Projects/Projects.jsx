import React from 'react'

import Image from 'next/image'
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList
} from './ProjectsStyles'
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents'
import { projects } from '../../constants/constants'

const Projects = () => <Section nopadding id='projects'>
  <SectionDivider />
  <SectionTitle main>Projects</SectionTitle>
  <GridContainer>
    {projects.map((p, index) => (
      <BlogCard key={index}>
        <Image src={p.image} alt={p.alt} width={640} height={360}/>
        <TitleContent>
          <HeaderThree title='true'>{p.title}</HeaderThree>
          <Hr />
        </TitleContent>
        <CardInfo className='card-info'>{p.description}</CardInfo>
        <div>
          <TitleContent>Stack</TitleContent>
          <TagList>
            {p.tags.map((t, i) => <Tag key={i}>{t}</Tag>)}
          </TagList>
        </div>
        <UtilityList>
          <ExternalLinks href={p.visit}>Code</ExternalLinks>
          <ExternalLinks href={p.source}>Source</ExternalLinks>
        </UtilityList>
      </BlogCard>
    ))}
  </GridContainer>
</Section>

export default Projects

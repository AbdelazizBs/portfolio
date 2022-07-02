import React from 'react'
import {
  DiCss3
} from 'react-icons/di'
import {
  IoLogoNodejs
} from 'react-icons/io'
import {
  SiMaterialui,
  SiMongodb,
  SiPostgresql,
  SiReact,
  SiTailwindcss
} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles'

const Technologies = () => <Section id='tech'>
  <SectionDivider divider />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I&apos;ve worked with a range a technologies in the web development world.
    From Back-end To Design
  </SectionText>
  <List>
    <ListItem>
      <div className='flex gap-4 mb-6'>
        <TbBrandNextjs size='3rem' />
        <SiReact className='opacity-0' size='3rem' />
        <SiReact size='3rem' />
      </div>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          Next.js and React
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <div className='flex gap-4 mb-6'>
        <IoLogoNodejs size='3rem' />
        <SiMongodb size='3rem' />
        <SiPostgresql size='3rem' />
      </div>
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          Node.js and Databases
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <div className='flex gap-4 mb-6'>
        <SiTailwindcss size='3rem' />
        <SiMaterialui size='3rem' />
        <DiCss3 size='3rem' />
      </div>
      <ListContainer>
        <ListTitle>UI</ListTitle>
        <ListParagraph>
          Experience with TailwindCSS, <br /> MUI and CSS
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
  <SectionDivider colorAlt />
</Section>

export default Technologies

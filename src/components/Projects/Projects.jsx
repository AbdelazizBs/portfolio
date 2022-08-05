import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'


// eslint-disable-next-line import/no-unresolved
import 'swiper/css'

// eslint-disable-next-line import/no-unresolved
import 'swiper/css/effect-cards'

// import required modules
import { EffectCards } from 'swiper'
import Image from 'next/image'
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  TitleContent
} from './ProjectsStyles'
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents'
import { projects } from '../../constants/constants'

const Projects = () =>
  <div id='projects'>

    <SectionTitle main>Projects</SectionTitle>

    <Swiper
      effect='cards'
      grabCursor
      modules={[EffectCards]}
      className='xs:w-[25rem] sm:w-[30rem] md:w-[35rem] lg:w-[50rem] xl:w-[50rem]'
    >
      {projects.map((p, index) =>
        <SwiperSlide className="bg-[#212d45]">
          <div key={index}>
            <img className="w-full h-[20rem] " src={p.image} alt={p.alt} />
            <div>
              <HeaderThree title='true'>{p.title}</HeaderThree>
              <Hr />
            </div>
            <CardInfo className='card-info'>{p.description}</CardInfo>
            <div>
              <ul className='flex flex-wrap justify-around p-6 gap-x-3 gap-y-20 my-8'>
                {p.tags.map((t, i) => i !== 4 ?
                  <div key={i + i + 1} className='flex-nowrap'><ExternalLinks key={i}>{t}</ExternalLinks></div> :
                  <div key={i + i + 1} className='flex-wrap'><ExternalLinks key={i}>{t}</ExternalLinks></div>)}
              </ul>
            </div>
          </div>
        </SwiperSlide>
      )}
    </Swiper>
  </div>

export default Projects

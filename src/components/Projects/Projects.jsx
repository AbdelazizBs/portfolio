import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-cards'

// import required modules
import { EffectCards } from 'swiper'
import {
  CardInfo,
  ExternalLinks,
  HeaderThree,
  Hr, TitleContent,
} from './ProjectsStyles'
import { SectionTitle } from '../../styles/GlobalComponents'
import { projects } from '../../constants/constants'

const Projects = () =>
  <div id='projects'>

    <SectionTitle main>Projects</SectionTitle>

    <Swiper
      effect='cards'
      grabCursor
      modules={[EffectCards]}
      className=' xs:w-[40rem] sm:w-[43rem] md:w-[45rem] lg:w-[50rem] xl:w-[50rem]'
    >

      {projects.map((p, index) =>

        <SwiperSlide key={index} className='rounded-xl shadow-md shadow-amber-50 bg-[#212d45]'>
            <img className='w-full h-[20rem] ' src={p.image} alt={p.alt} />
            <TitleContent>
              <HeaderThree title={p.title}>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{p.description}</CardInfo>
            <div>
              <ul className='flex flex-wrap justify-around p-6 gap-x-3 gap-y-20 my-8'>
                {p.tags.map((t, i) => i !== 4 ?
                  <div key={i + i + 1} className='flex-nowrap'><ExternalLinks key={i}>{t}</ExternalLinks></div> :
                  <div key={i + i + 1} className='flex-wrap'><ExternalLinks key={i}>{t}</ExternalLinks></div>)}
              </ul>
            </div>
        </SwiperSlide>
      )}

    </Swiper>

  </div>

export default Projects

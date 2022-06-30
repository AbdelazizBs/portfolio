import React from 'react'

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents'
import { BoxNum, BoxText } from './AcomplishmentsStyles'

const data = [
  { number: 20, text: 'Open Source Projects' },
  { number: 1000, text: 'Students' },
  { number: 1900, text: 'Github Followers' },
  { number: 5000, text: 'Github Stars' }
]

const Acomplishments = () => <Section>
  <SectionTitle>Personal Achievements</SectionTitle>
  <div
    className='w-full grid grid-cols-4 grid-cols-4 gap-6 mt-6 mb-10 lg:gap-8 md:gap-6 lg:gap-12 md:mt-5 md:grid-cols-spec sm:gap-[1.25rem] sm:mt-[1.5rem] xs:grid-cols-2'>
    {data.map((card, index) => (
      <div
        className=' p-6 rounded-2xl bg-[#212D45] lg:h-[140px] lg:p-10 md:h-[120px] md:p-8 sm:h-[110px] '
        key={index}>
        <h5
          className='font-semibold tracking-spec text-white mb-2 xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl'>{`${card.number}+`}</h5>
        <p className='font-normal tracking-wide text-white opacity-75 lg:text-3xl md:text-2xl sm:text-xl xs:text-lg'>{card.text}</p>
      </div>
    ))}
  </div>
  <SectionDivider />
</Section>

export default Acomplishments

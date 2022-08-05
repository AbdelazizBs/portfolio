import React from 'react'

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents'
import ContactMe from '../ContactMe'


const data = [
  {
    number: 'MICROSOFT DYNAMICS 365 FUNDAMENTALS FINANCE AND OPERATIONS APPS (ERP)',
    text: 'https://portal.certiport.com/Portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=479&cvid=qEKO/7kll24Xk371lrKHVg=='
  },
  {
    number: 'RESPONSIVE WEB DESIGN',
    text: 'https://www.freecodecamp.org/certification/bassemdimassi/responsive-web-design'
  },
  {
    number: 'JAVASCRIPT ALGORITHMS AND DATA STRUCTURES',
    text: 'https://freecodecamp.org/certification/bassemdimassi/javascriptalgorithms-and-data-structures'
  },
  {
    number: 'PROGRAMMING FOUNDATIONS WITH JAVASCRIPT HTML AND CSS',
    text: 'https://www.coursera.org/account/accomplishments/verify/KA7A3733V329'
  },
  { number: 'PYTHON DATA STRUCTURES', text: 'https://www.coursera.org/account/accomplishments/verify/G2D698X42DEA' }
]
const Acomplishments = () => <Section>
  <SectionTitle>Personal Achievements</SectionTitle>
  <div
    className='w-full grid lg:grid-cols-3 gap-8 mt-6 mb-10 lg:gap-8 md:gap-6 md:mt-5 md:grid-cols-3 sm:gap-[1.25rem] sm:mt-[1.5rem] xs:gap-6 xs:grid-cols-2'>
    {data.map((card, index) => (
      <div
        className='grid grid-cols-1 grid-rows-2 gap-14 rounded-3xl bg-[#212D45] lg:h-[170px] lg:p-8 md:h-[150px] md:p-8 sm:h-[140px] xs:p-8 xs:pt-10 xs:h-[130px]'
        key={index}>
        <h5
          className='font-semibold tracking-spec text-white mb-2 xl:text-3xl lg:text-2xl md:text-xl sm:text-lg xs:text-base'>{`${card.number}`}</h5>
        <div className='grid grid-cols-4'><a
          className='w-fit bg-[#6b3030] font-normal text-[#d4c0c0] md:py-6 md:px-6 md:text-xl xs:text-base xs:py-4 xs:px-4 align-middle rounded-3xl duration-500 hover:bg-[#801414]'
          href={card.text} target='_blank' rel="noreferrer">
          Verify</a></div>
        {/* <p */}
        {/*   className='font-normal tracking-wide text-white opacity-75 lg:text-3xl md:text-2xl sm:text-xl xs:text-lg'>{card.text}</p> */}
      </div>
    ))}
  </div>
  <SectionDivider />
  <ContactMe />
</Section>


export default Acomplishments

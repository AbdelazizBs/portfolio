import React from 'react'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { SocialIcons } from '../Header/HeaderStyles'

const Footer = () => (
  <section
    className='max-w-[1040px] sm:w-[calc(100vw_-_96px)] my-4 mx-auto content-box sm:pt-8 sm:px-12 sm:pb-10 content-box xs:w-[calc(100vw_-_32px)] xs:pt-0 xs:px-4 xs:pb-12'>
    <ul className='footerUl'>
      <div className='flex flex-col max-w-[220px] w-full'>
        <h4 className='font-semibold sm:text-xl text-white opacity-40 sm:mb-4 xs:text-base xs:mb-2'>CALL</h4>
        <a
          className='text-white opacity-75 mb-4 duration-300 relative left-0 hover:opacity-100 hover:left-1.5 lg:text-3xl md:text-2xl sm:text-xl xs:text-base xs:mb-2 xs:flex xs:text-center'
          href='tel:+21626003021'>+216 98 421 295</a>
      </div>
      <div className='flex flex-col max-w-[220px] w-full'>
        <h4 className='font-semibold sm:text-xl text-white opacity-40 sm:mb-4 xs:text-base xs:mb-2'>EMAIL</h4>
        <a
          className='text-white opacity-75 mb-4 duration-300 relative left-0 hover:opacity-100 hover:left-1.5 lg:text-3xl md:text-2xl sm:text-xl xs:text-base xs:mb-2 xs:flex xs:text-center'
          href='mailto:bensalemabdelaziz97@gmail.com' target='_blank' rel='noreferrer'>
          bensalemabdelaziz97@gmail.com
        </a>
      </div>
    </ul>

    <div className='flex sm:max-w-[1040px] sm:flex-row sm:justify-between xs:w-full xs:flex-col'>
      <div className='flex sm:flex-wrap sm:mr-auto sm:align-baseline xs:flex-col xs:items-center xs:mb-8'>
        <p
          className='text-white p-4 tracking-wide opacity-50 sm:min-w-[280px] md:text-3xl sm:text-2xl xs:min-w-[100px] xs:text-xl '>Copyright &copy; {new Date().getFullYear()}
          <span className='text-white opacity-75'> Bs-Abdelaziz</span>
      </p>
    </div>
    <div className='flex items-center xs:p-4 xs:justify-center xs:flex-wrap'>
      <SocialIcons href='https://github.com/AbdelazizBs' target='_blank'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/abdelaziz-ben-salem-445466211/' target='_blank'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.facebook.com/profile.php?id=61561860825269' target='_blank'>
        <AiFillFacebook size='3rem' />
      </SocialIcons>
    </div>
  </div>
</section> 
)

export default Footer

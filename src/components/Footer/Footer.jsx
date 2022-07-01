import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

import { SocialIcons } from '../Header/HeaderStyles'
import {
  CompanyContainer,
  LinkColumn,
  LinkList,
  Slogan,
  SocialContainer,
  SocialIconsContainer
} from './FooterStyles'
import styled from 'styled-components'

const Footer = () => (
  <section className="max-w-[1040px] sm:w-[calc(100vw_-_96px)] my-4 mx-auto content-box sm:pt-8 sm:px-12 sm:pb-10 content-box xs:w-[calc(100vw_-_32px)] xs:pt-0 xs:px-4 xs:pb-12">
    <LinkList>
      <div className="flex flex-col max-w-[220px] w-full">
        <h4 className="font-semibold sm:text-xl text-white opacity-40 sm:mb-4 xs:text-base xs:mb-2">CALL</h4>
        <a className="text-white opacity-75 mb-4 duration-300 relative left-0 hover:opacity-100 hover:left-1.5 lg:text-3xl md:text-2xl sm:text-xl xs:text-base xs:mb-2 xs:flex xs:text-center" href='tel:314-343-3432'>314-343-3432</a>
      </div>
      <div className="flex flex-col max-w-[220px] w-full">
        <h4 className="font-semibold sm:text-xl text-white opacity-40 sm:mb-4 xs:text-base xs:mb-2">EMAIL</h4>
        <a className="text-white opacity-75 mb-4 duration-300 relative left-0 hover:opacity-100 hover:left-1.5 lg:text-3xl md:text-2xl sm:text-xl xs:text-base xs:mb-2 xs:flex xs:text-center" href='mailto:contact@jsmastery.com'>
          contact@jsmastery.com
        </a>
      </div>
    </LinkList>

    <div className="flex sm:max-w-[1040px] sm:flex-row sm:justify-between xs:w-full xs:flex-col">
      <div className="flex sm:flex-wrap sm:mr-auto sm:align-baseline xs:flex-col xs:items-center xs:mb-8">
        <p className="text-white p-4 tracking-wide opacity-50 sm:min-w-[280px] md:text-3xl sm:text-2xl xs:min-w-[100px] xs:text-xl ">Innovating one project at a time</p>
      </div>
      <SocialContainer>
        <SocialIcons href='https://google.com'>
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://google.com'>
          <AiFillLinkedin size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://google.com'>
          <AiFillInstagram size='3rem' />
        </SocialIcons>
      </SocialContainer>
    </div>
  </section>
)

export default Footer

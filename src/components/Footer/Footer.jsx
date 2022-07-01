import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

import { SocialIcons } from '../Header/HeaderStyles'
import {
  CompanyContainer,
  LinkColumn,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer
} from './FooterStyles'

const Footer = () => (
  // padding: 2rem 48px 40px;
  <section className="max-w-[1040px] sm:w-[calc(100vw_-_96px)] my-4 mx-auto content-box sm:pt-8 sm:px-12 sm:pb-10 content-box xs:w-[calc(100vw_-_32px)] xs:pt-0 xs:px-4 xs:pb-12">
    <LinkList>
      <LinkColumn>
        <h4 className="font-semibold sm:text-xl text-white opacity-40 sm:mb-4 xs:text-xs xs:mb-2">CALL</h4>
        <a className="text-white opacity-75 mb-4 duration-300 relative left-0 hover:opacity-100 hover:left-1.5 lg:text-3xl md:text-2xl sm:text-xl xs:text-base xs:mb-2 xs:flex xs:text-center" href='tel:314-343-3432'>314-343-3432</a>
      </LinkColumn>
      <LinkColumn>
        <h4 className="font-semibold sm:text-xl text-white opacity-40 sm:mb-4 xs:text-xs xs:mb-2">EMAIL</h4>
        <a className="text-white opacity-75 mb-4 duration-300 relative left-0 hover:opacity-100 hover:left-1.5 lg:text-3xl md:text-2xl sm:text-xl xs:text-base xs:mb-2 xs:flex xs:text-center" href='mailto:contact@jsmastery.com'>
          contact@jsmastery.com
        </a>
      </LinkColumn>
    </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Innovating one project at a time</Slogan>
      </CompanyContainer>
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
    </SocialIconsContainer>
  </section>
)

export default Footer

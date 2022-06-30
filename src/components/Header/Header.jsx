import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { DiCssdeck } from 'react-icons/di'

import { Container, Div1, Div2, Div3, Listed, ListItem, NavLink, SocialIcons } from './HeaderStyles'

const Header = () => <Container>
  <Div1>
    <Link href='/'>
      <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
        <DiCssdeck size='3rem' /> <span>Portfolio</span>
      </a>
    </Link>
  </Div1>
  <Div2>
    <Listed>
      <ListItem>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </ListItem>
      <ListItem>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </ListItem>
      <ListItem>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </ListItem>
    </Listed>
  </Div2>
  <Div3>
    <SocialIcons href='https://google.com'>
      <AiFillGithub size='3rem' />
    </SocialIcons>
    <SocialIcons href='https://google.com'>
      <AiFillLinkedin size='3rem' />
    </SocialIcons>
    <SocialIcons href='https://google.com'>
      <AiFillInstagram size='3rem' />
    </SocialIcons>
  </Div3>
</Container>

export default Header

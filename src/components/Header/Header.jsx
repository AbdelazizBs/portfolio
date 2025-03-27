import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai'

import { Container, Div2, Div3, Listed, ListItem, NavLink, SocialIcons } from './HeaderStyles'

const Header = () => <Container>
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
    <SocialIcons className='hidden md:block' href='https://github.com/AbdelazizBs' target='_blank'>
      <AiFillGithub size='3rem' />
    </SocialIcons>
    <SocialIcons className='hidden md:block' href='https://www.linkedin.com/in/abdelaziz-ben-salem-445466211/' target='_blank'>
      <AiFillLinkedin size='3rem' />
    </SocialIcons>
    <SocialIcons className='hidden md:block' href='https://www.facebook.com/profile.php?id=61561860825269' target='_blank'>
      <AiFillFacebook size='3rem' />
    </SocialIcons>
  </Div3>
</Container>

export default Header

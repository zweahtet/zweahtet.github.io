import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { SocialMedia } from '../../constants/constants';
import { SocialContainer } from '../Footer/FooterStyles';

// style component for header
import { NavLink, SocialIcons,Span } from './HeaderStyles';

export default function Header (props) {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex">
        <Link href="/">
          <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
            <DiCssdeck size="3rem"/><Span>Portfolio</Span>
          </a>
        </Link>
      </div>
      <div className="flex">
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/courses">
            <NavLink>Courses</NavLink>
          </Link>
        </li>
      </div>
      <div className="flex">
        <SocialContainer>
          <SocialIcons href={SocialMedia.Github.visit}>
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href={SocialMedia.LinkedIn.visit}>
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </div>
    </div>
  )
}
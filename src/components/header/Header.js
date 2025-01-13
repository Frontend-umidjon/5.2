import React from 'react'
import './Header.scss'
import { IoLogoApple } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { BsBag } from "react-icons/bs";
import {LINKS} from '../../static'

const Header = () => {
  return (
    <header className='header'>
        <div className="container">
          <nav className="navbar">
          <div className="navbar__logo">
                <IoLogoApple />
            </div>
            <ul className='navbar__list'>
              
              {
                LINKS?.map(link => (
                  <li key={link.id} className='navbar__item'>
                    <a href={link.url} className='navbar__link'>{link.title}</a>
                  </li>
                ))
              }
            </ul>
            <div className="navbar__actions">
                <IoIosSearch />
                <BsBag />
            </div>
          </nav>
        </div>
    </header>
  )
}

export default Header
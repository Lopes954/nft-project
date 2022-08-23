import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    
    <header>
        
        <div className="header__left">
          <Link href="/">
          <img className="header__img" src="logo.png" alt="" /></Link>
          <Link href="/"><h3 className="headar__name">CryptoHype</h3></Link>
          
        </div>
        <nav>
          <ul className="header__items">
            <Link href="/"><li className="header__item">Home</li></Link>
            <Link href="/market"><li className="header__item">Market</li></Link>
            <Link href="/"><li className="header__item">Contact</li></Link>
            <Link href="/"><li className="header__item">Artist</li></Link>
          </ul>
        </nav>

        <div className="header__search-bar">
          <input placeholder="Search related to NFT" type="search" name="q" />
        </div>
        
      </header>
  )
}

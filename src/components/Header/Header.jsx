import React from 'react'
import Logo from "../../../public/images/whiteLogo.png"
import style from "./header.module.scss"
const Header = () => {
  return (
    <div className={style.header}><img src={Logo} alt="" /></div>
  )
}

export default Header
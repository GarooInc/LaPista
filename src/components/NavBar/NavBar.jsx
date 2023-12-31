import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-scroll"
import "./NavBar.css"
import Button from "../Button/Button"

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <Link to='/' className='logo'>
                    <img src="/images/logo.png" alt='logo' />
                </Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: "#018546" }} />)
                        : (<FaBars size={30} style={{ color: "#018546" }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="/" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="events" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Eventos</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="menu" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Menú</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="horario" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Horarios</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="location" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Ubicación</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="nosotros" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Nosotros</Link>
                    </li>
                </ul>
                <Button text="Reservar" link url={"https://eatapp.co/reserve/la-pista-20fb20"} backgroundcolor={"#018546"} colortext={"#fff"}/>
            </nav>
        </div>
    )
}

export default Navbar
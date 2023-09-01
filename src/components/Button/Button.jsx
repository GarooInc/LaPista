import React from "react"
import PropTypes from "prop-types"
import "./Button.css"

const Button = ({ text, whatsapp, backgroundcolor,colortext, link, url, onClick }) => {
    const handleClick = () => {
        if (whatsapp) {
            handleWhatsapp()
        }else if (link) {
            handleLink()
        }else if (onClick) {
            handleOnClick()
        }
    }

    const handleOnClick = () => {
        onClick()
    }

    const handleLink = () => {
        const url_link = url
        window.open(url_link, "_blank")
    }

    const handleWhatsapp = () => {
        const phoneNumber = "1234567890"
        const message = "Hello"
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        window.open(url, "_blank")
    }

    return (
        <button className='btn' onClick={handleClick} style={{ backgroundColor: backgroundcolor,  color: colortext }}>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    whatsapp: PropTypes.bool,
    backgroundcolor: PropTypes.string,
    colortext: PropTypes.string,
    link: PropTypes.bool,
    url: PropTypes.string,
    onClick: PropTypes.func
}

export default Button

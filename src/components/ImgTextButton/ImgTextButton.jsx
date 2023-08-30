import React from "react"
import PropTypes from "prop-types"
import "./ImgTextButton.css"
import Textdescbutton from "../Textdescbutton/Textdescbutton"

const ImgTextButton = ({ img, title1, title2, paragraph, textbutton, buttoncolor, color, textcolor, fontsize }) => {
    return (
        <div className='imgtextbutton'>
            <img src={img} alt='img' className='imgtextbutton__img' />
            <Textdescbutton title1={title1} title2={title2} paragraph={paragraph} textbutton={textbutton} buttoncolor={buttoncolor} color={color} textcolor={textcolor} fontsize={fontsize}/>
        </div>
    )
}

ImgTextButton.propTypes = {
    img: PropTypes.string.isRequired,
    title1: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    paragraph: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
        
    textbutton: PropTypes.string.isRequired,
    buttoncolor: PropTypes.string,
    color: PropTypes.string,
    textcolor: PropTypes.string,
    fontsize: PropTypes.string
}

export default ImgTextButton


import React from "react"
import PropTypes from "prop-types"
import "./Textdescbutton.css"
import Button from "../Button/Button"
import TitleComponent from "../Title/Title"

const Textdescbutton = ({ title1, title2, paragraph, textbutton, buttoncolor, color, textcolor, fontsize, center }) => {
    return (
        <div className='textdescbutton' style={{ alignItems: center ? "center" : "initial" }}>
            {
                center ? (
                    <TitleComponent title1={title1} title2={title2} column color={textcolor} fontsize={fontsize} center />
                ) : (
                    <TitleComponent title1={title1} title2={title2} column color={textcolor} fontsize={fontsize} />
                )
            }
            {typeof paragraph === "string" ? (
                <p className='textdescbutton__paragraph' style={{ color: textcolor }}>{paragraph}</p>
            ) : (
                paragraph && paragraph.map((item, index) => 
                    <p key={index} className='textdescbutton__paragraph' style={{ color: textcolor }}>{item}</p>
                )
            )}
            <div className='textdescbutton__btn'>
                <Button text={textbutton} backgroundcolor={buttoncolor} colortext={color} />
            </div>
        </div>
    )
}

Textdescbutton.propTypes = {
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
    fontsize: PropTypes.string,
    center: PropTypes.bool
}

export default Textdescbutton

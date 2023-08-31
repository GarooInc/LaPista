import React from "react"
import styles from "./Contact.module.css"
import Button from "../Button/Button"


const Contact = () => {
    
    return (
        <div className={styles.container}>
            <div className={styles.contact__content__info__container}>
                <h2> A continuación puede ponerse en contacto con Restaurante La Pista. </h2>
                <p className={styles.contact__content__info__p}> Deja tu mensaje y nos pondremos en contacto contigo lo antes posible. También puede comunicarse con nosotros los días hábiles a través del número a continuación. </p>
                    <div className={styles.contact__content__info__phone}>
                        <img src="/images/phone.svg" alt="contact" className="contact__content__info__img"/>
                        <a href="tel:+502 3174 6160" className="contact__content__info__link">+502 3174 6160</a>
                    </div>
            </div>
            <div className={styles.contactinfo}>
                <div className={styles.contactright}>
                    <form >
                        <input type="text" placeholder="Nombres" name="from_name" />
                        <input type="text" placeholder="Apellidos" name="last_name" />
                        <input type="text" placeholder="Correo" name="reply_to" />
                        <input type="text" placeholder="Teléfono" name="cellphone" />
                        <textarea
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Mensaje"
                            name="message"
                        />
                        <Button text="Enviar" backgroundcolor="#000" colortext="#fff"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact

import React,{useState} from "react"
import styles from "./Contact.module.css"
import Button from "../Button/Button"


const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        message: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);

        const contacto = {contacto: formData }
        console.log(contacto);

        try {
            const response = await fetch(import.meta.env.VITE_API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Datos enviados a Zapier exitosamente');
            } else {
                console.error('Error al enviar los datos');
            }
        } catch (error) {
            console.error('Hubo un error:', error);
        }
    };
    
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
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Nombres" name="from_name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
                        <input type="text" placeholder="Apellidos" name="last_name" value={formData.lastname} onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}/>
                        <input type="text" placeholder="Correo" name="reply_to" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
                        <input type="text" placeholder="Teléfono" name="cellphone" value={formData.cellphone} onChange={(e) => setFormData({ ...formData, cellphone: e.target.value })}/>
                        <textarea
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Mensaje"
                            name="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                        <Button text="Enviar" backgroundcolor="#000" colortext="#fff"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact

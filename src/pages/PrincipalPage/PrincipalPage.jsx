import React, { useState } from "react"
import "./PrincipalPage.css"
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import Textdescbutton from "../../components/Textdescbutton/Textdescbutton"
import Title from "../../components/Title/Title"
import Contact from "../../components/Contact/Contact"
import ImgTextButton from "../../components/ImgTextButton/ImgTextButton"
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from 'swiper/modules'
import Button from "../../components/Button/Button"
import { imagesevents } from "../../imgesevents"
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PrincipalPage = () => {


    const textoArray = [ 
        "La historia del Restaurante La Pista es una verdadera historia de emprendimiento y pasión por los negocios. Todo comenzó en 2007 cuando dos primos, Miguel y Rodrigo, decidieron empezar un proyecto juntos. Su idea inicial era construir un club de carros de control remoto, y tras investigar y buscar la representación de una marca japonesa, se pusieron manos a la obra para construir la primera pista de carritos off-road de Guatemala.",

        "No solo construyeron la pista, también levantaron una cabaña de madera rústica que le dio al lugar un encanto único. La madre de Miguel, Ana, fue la encargada de llevar adelante la construcción y poner su propio estilo en ella. Así fue como en 2007 nació el club GTZ RACING, y rápidamente se convirtió en un éxito. Los fines de semana había competencias, eran más de 40 socios que pagaban su membresía y compraban carritos y repuestos. Con el tiempo, la gente empezó a referirse al lugar como 'La Pista'.",
        
        "En 2008, sin embargo, algo inesperado empezó a cambiar la dirección del negocio. El hermano de Rodrigo, el Chef Rick, diseñó 4 bocatas para vender a los socios del club, pero pronto empezaron a llegar clientes que no tenían nada que ver con los carritos de control remoto. Las bocatas se volvieron famosas, y cada día llegaban más clientes al lugar.", 
        
        "En 2009, Chef Rick se unió oficialmente al equipo y decidieron transformar el lugar en un restaurante al 100%. Con el apoyo de sus padres, pudieron poner el lugar en condiciones, comprar equipo y vajilla, y un tío les regaló todas las mesas y sillas para el restaurante. El lugar quedó rústico y encantador, y en honor a su historia, decidieron mantener el nombre de La Pista.", 
        
        "Sin embargo, la primera decisión importante que tomaron fue cerrar el club de carritos para dedicarse de lleno al restaurante. Se propusieron una regla fundamental: lo único que importa es que los clientes se vayan contentos. En la noche de la apertura, imprimieron el primer menú en papel bond sin saber si los clientes encontrarían el lugar, pero con mucha fe y la experiencia del Chef Rick, empezaron a recibir mesas desde el primer turno.", 
        
        "Desde entonces, nunca han tenido un turno en blanco y siempre han atendido a al menos una persona en cada turno, manteniendo el récord durante casi 14 años. En septiembre de 2009, inauguraron oficialmente el restaurante La Pista, y desde entonces, han continuado haciendo lo único que hace que un restaurante tenga éxito: asegurarse de que los clientes regresen. La historia de La Pista es un verdadero ejemplo de cómo la creatividad, el apoyo de la familia y la pasión por el negocio pueden crear un éxito duradero."
    ]

    // Estado para controlar la visibilidad del lightbox
    const [lightboxOpen, setLightboxOpen] = useState(false);
    // Estado para almacenar la imagen actual que se mostrará en el lightbox
    const [currentImage, setCurrentImage] = useState(null);

    // Función para abrir el lightbox con una imagen específica
    const openLightbox = (imageSrc) => {
        setCurrentImage(imageSrc);
        setLightboxOpen(true);
    };

    // Función para cerrar el lightbox
    const closeLightbox = () => {
        setCurrentImage(null);
        setLightboxOpen(false);
    };

    const [visibleParagraphs, setVisibleParagraphs] = useState(1);




    return (
        <div className='principalPage'>
            <div className='principalPage__header'>
                <NavBar />
            </div>
            <section id='/' className="home">
                <div className='home__content'>
                    <Textdescbutton title1="Dining in the woods" title2="Cabaña de madera ubicada en las montañas de Muxbal." textbutton="Book Now" buttoncolor="#018546" color="#fff" textcolor="#fff" fontsize="32px" center link url={"https://eatapp.co/reserve/la-pista-20fb20"}/>
                </div>
            </section>
            <section id='events' className="events">
                <div className='events__content'>
                    <Textdescbutton title1="Private events" title2="Contamos con salones privados para cumpleaños, bautizos o eventos corporativos." textbutton="Cotizar" buttoncolor="#fff" color="#000" textcolor="#fff" fontsize="32px" link url={"https://wa.me/31746160?text=Hola, me gustaría cotizar un evento."}/>
                    <div className="row">
                    <div className="column">
                        {imagesevents.slice(0, 2).map((image, index) => (
                            <img 
                                key={index} 
                                src={image.src} 
                                alt={image.alt || `Imagen ${index + 1}`} 
                                style={{ cursor: 'pointer' }}
                                onClick={() => openLightbox(image.src)}
                            />
                        ))}
                    </div>
                    <div className="column">
                        {imagesevents.slice(2, 5).map((image, index) => (
                            <img
                                key={index}
                                src={image.src}
                                alt={image.alt || `Imagen ${index + 1}`}
                                style={{  cursor: 'pointer' }}
                                onClick={() => openLightbox(image.src)}
                            />
                        ))}
                    </div>
                    <div className="column">
                        {imagesevents.slice(5, 8).map((image, index) => (
                            <img
                                key={index}
                                src={image.src}
                                alt={image.alt || `Imagen ${index + 1}`}
                                style={{  cursor: 'pointer' }}
                                onClick={() => openLightbox(image.src)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {lightboxOpen && (
                        <Lightbox
                            open={lightboxOpen}
                            close={closeLightbox}
                            slides={imagesevents.map((image) => ({
                                src: image.src
                            }))

                            }
                        />
                    )}
            </section>
            <section id='menu' className="services">
                <div className='services__content'>
                    <Title title1="Menú"  color="#000" fontsize="80px" center/>
                    <div className='services__content__text'>
                        <ImgTextButton img="/images/menu1.png" title1="" title2="Desayunos" paragraph="¿De qué tienes antojo hoy? Reserva ahora." textbutton="Ver menú" buttoncolor="#000" color="#fff" textcolor="#000" fontsize="32px" link url={"https://drive.google.com/file/d/1bvbwKChnsehmhgbiWXLTbLYyVPFJhSyO/view?mcp_token=eyJwaWQiOjE3NjkxNTMzNTY5Njc1MSwic2lkIjoyNjQ1ODcyMDEsImF4IjoiNzdiZWI2ZmM1NmE2NjYyNjhmNDhiZGE0OGUzZGQ4ZmYiLCJ0cyI6MTY5MzU5MzI3OCwiZXhwIjoxNjk2MDEyNDc4fQ.hWUeKmGMaTU2-ai71S6LkU3QjgD5RIalQNj13kyIpt8"}/>
                        <ImgTextButton img="/images/menu.png" title1="" title2="Almuerzos" paragraph="Comida exquisita directamente a donde tú estás." textbutton="Ver menú" buttoncolor="#000" color="#fff" textcolor="#000" fontsize="32px" link url={"https://drive.google.com/file/d/1mk2Vo0pIqcEK0BYtWd_i3bW27-H-KKCc/view?mcp_token=eyJwaWQiOjE3NjkxNTMzNTY5Njc1MSwic2lkIjoyNjQ1ODcyMDEsImF4IjoiN2E0OWU0NjhjMjQxZTQyMzA2MzI1ZDU1ODEzOTZjYTciLCJ0cyI6MTY5MzUwNzM5NSwiZXhwIjoxNjk1OTI2NTk1fQ.uGo6D_sD-fe3w1HncnCk4q8EL84xehJZ4-xIvugQYmM"}/>
                    </div>
                </div>
            </section>

            <section id='horario' className="horario">
                <div className='horario__content'>
                <Title title1="Horarios" color="#fff" fontsize="80px" center />
                <div className='horario__content__text'>
                    <ul className='horario__content__list'>
                        <li className='horario__content__item'>Lunes – 12.00 am a 10.00 pm</li>
                        <li className='horario__content__item'>Martes – 12.00 am a 10.00 pm</li>
                        <li className='horario__content__item'>Miércoles – 12.00 am a 10.00 pm</li>
                        <li className='horario__content__item'>Jueves – 12.00 am a 10.00 pm</li>
                        <li className='horario__content__item'>Viernes – 12.00 am a 10.00 pm</li>
                        <li className='horario__content__item'>Sábado – 9.00 am a 10.00 pm</li>
                        <li className='horario__content__item'>Domingo – 9.00 am a 4.00 pm</li>
                    </ul>
                    <Button text="Reservar" backgroundcolor={"#018546"} colortext={"#fff"} link url={"https://eatapp.co/reserve/la-pista-20fb20"}/>
                </div>
                </div>
            </section>
            <section id='location' className="location">
                <div className='location__content'>
                    <Title title1="Ubicación" color="#fff" fontsize="80px" center />
                </div>
                <img src="/images/location.png" alt="horario" className="location__content__img"onClick={
                    () => window.open("https://www.google.com/maps/place/Restaurante+La+Pista/@14.5583979,-90.4721467,16z/data=!4m6!3m5!1s0x8589a499486e2b17:0xfb5b9bfd68149e16!8m2!3d14.5589035!4d-90.4735276!16s%2Fg%2F11c59wd2hm?hl=es&entry=ttu", "_blank")
                }/>
            </section>

            <section id='nosotros' className="nosotros">
            <div className='nosotros__content'>
                <Title title1="Nosotros" color="#000" center fontsize="32px"  />
                    <div className="contentslider">
                    <img src="/images/nosotros.png" alt="nosotros" className="contentslider__img"/>
                    <div className="nosotros__text">
                        <Title title2="Nuestra historia" color="#000" fontsize="32px" center />
                        {textoArray.slice(0, visibleParagraphs).map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                        {visibleParagraphs < textoArray.length && (
                            <Button onClick={() => setVisibleParagraphs(visibleParagraphs + 1)} backgroundcolor="#000" colortext="#fff" text="Ver más">
                                Leer más
                            </Button>
                        )}
                    </div>
                    </div>
                </div>
            </section>
            <section id='contact' className="contact">
                <div className='contact__content'>
                    <Title title1="Contacto" color="#fff" fontsize="80px" center/>
                        <div className='contact__content'>
                        <Contact />
                        </div>
            </div>               
            </section>

            <section id='footer' className="footer">
                <div className='footer__content'>
                    <Footer />
                    <p className="footer-copyright">© 2023 Garoo Inc. All Rights Reserved.</p>
                </div>
            </section>

        </div>
    )
}

export default PrincipalPage


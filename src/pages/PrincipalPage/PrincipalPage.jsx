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



    return (
        <div className='principalPage'>
            <div className='principalPage__header'>
                <NavBar />
            </div>
            <section id='/' className="home">
                <div className='home__content'>
                    <Textdescbutton title1="Dining in the woods" title2="Cabaña de madera ubicada en las montañas de Muxbal." textbutton="Ordenar" buttoncolor="#018546" color="#fff" textcolor="#fff" fontsize="32px" center/>
                </div>
            </section>
            <section id='menu' className="menu">
                <div className='menu__content'>
                    <img src="/images/menu.png" alt="menu" className="menu__img"/>
                    <Textdescbutton title1="Menú" title2="Nos especializamos en atender personalmente a nuestros clientes, servimos carnes, pastas, risottos, mariscos, excelentes vinos y licores en un ambiente espectacular." textbutton="Ver menú" buttoncolor="#018546" color="#fff" textcolor="#333333" fontsize="32px"/>
                </div>
            </section>
            <section id='servicios' className="services">
                <div className='services__content'>
                    <Title title1="Fine Dining"  color="#fff" fontsize="80px" center/>
                    <div className='services__content__text'>
                        <ImgTextButton img="/images/services1.png" title1="" title2="Reservaciones" paragraph="¿De qué tienes antojo hoy? Reserva ahora." textbutton="Reservar" buttoncolor="#fff" color="#000" textcolor="#fff" fontsize="2.5rem"/>
                        <ImgTextButton img="/images/services2.png" title1="" title2="Delivery" paragraph="Comida exquisita directamente a donde tú estás." textbutton="Ordena ya" buttoncolor="#fff" color="#000" textcolor="#fff" fontsize="2.5rem"/>
                        <ImgTextButton img="/images/services3.png" title1="" title2="Eventos" paragraph="Experiencias inolvidables con nosotros." textbutton="Cotizar" buttoncolor="#fff" color="#000" textcolor="#fff" fontsize="2.5rem"/>
                    </div>
                </div>
            </section>
            <section id='nosotros' className="nosotros">
            <div className='nosotros__content'>
                <Title title1="Nosotros" color="#000" fontsize="32px" center />
                    <div className="contentslider">
                    <Swiper
                        spaceBetween={30}
                        cssMode={true}
                        navigation={true}
                        pagination={false}
                        mousewheel={true}
                        keyboard={true}
                        modules={[ Navigation]}
                        className="mySwiper"
                    >
                        {textoArray.map((parrafo, index) => (
                            <SwiperSlide key={index}>
                                <img src={`/images/nosotros${index + 1}.png`} alt={`nosotros${index + 1}`} className="nosotros__img"/>
                                <p className='nosotros__text'>{parrafo}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    </div>
                </div>
            </section>

            <section id='horario' className="horario">
                <div className='horario__content'>
                <Title title1="Horarios" color="#fff" fontsize="80px" center />
                <div className='horario__content__text'>
                    <Textdescbutton title2="Lunes – 12.00 am a 10.00 pm
                    Martes – 12.00 am a 10.00 pm
                    Miércoles – 12.00 am a 10.00 pm
                    Jueves – 12.00 am a 10.00 pm
                    Viernes – 12.00 am a 10.00 pm
                    Sábado – 9.00 am a 10.00 pm
                    Domingo – 9.00 am a 4.00 pm" textbutton="Reservar" buttoncolor="#000" color="#fff" textcolor="#000" fontsize="32px" center/>
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


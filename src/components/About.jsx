import React from 'react';
import './About.css';

function About(){
    return(
        <div className='cont'>
            <h1 className="text">Hola! 🙋🏽‍♂️</h1>
            <div>
                <h3 className='text'>Sobre mi 💁🏽‍♂️</h3>
                <p className="text">Mi nombre es Mariano Avancini y soy full stack developer recientemente graduado del bootcamp #SoyHenry.  </p>
                <img className='image' src="https://data9.sticker.fan/stickers_storage/2019/08/23/file_1679985.webp" alt=""/>
            </div>
            <div>
                <h3 className='text'>Sobre la App 💻</h3>
                <p className='text'> WeatherApp es una aplicacion desarrollada durante el transcurso del bootcamp #SoyHenry, aplicando las tecnologias JavaScript y React </p>
            </div>
        </div>
    )
}
export default About;
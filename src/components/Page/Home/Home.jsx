import React, {useEffect} from 'react'
import Nav from "../../Layouts/Nav/Nav";
import About from "../../Layouts/Views/Me/About";
import Bot from "../../Layouts/Views/Main/Bot";
import Experiences from "../../Layouts/Views/Me/Experiences";
import Works from "../../Layouts/Views/Me/Works";
import Contacts from "../../Layouts/Views/Contact/Contacts";
import { Sound } from "../../Layouts/Sounds/Sound";
import { SiApplemusic } from "react-icons/si";
import $ from "jquery";



export const Home = () => {

  useEffect(() => {
    $('.ContModal').hide();
    
  }, [])
  

  const onChangeMusic = () => {
    $('.ContModal').show();

  };

  return (
    <>
      <Sound/>
      <Nav />
      <Bot />
      <About />
      <Experiences />
      <Works />
      <Contacts />


      <div className='w-full flex gap-px flex-wrap flex-col items-center justify-evenly relative bg-primary pb-10' >
        <h5 className='text-2xl text-gray-400 capitalize'  >Contador de Visitas</h5>
        <a href="https://github.com/dairongranada" title="Contador De Visitas Gratis">
          <img style={{ border: "0px solid", display: "inline", width: "181px" }} alt="contador de visitas" src="https://websmultimedia.com/contador-de-visitas.php?id=9153" />
        </a>
      </div>

      <hr />
      <div className='bg-primary pb-10  pl-20 pt-5 border-t-sky-50' >
        <span className='text-slate-500' >Copyright © 2023 - Designed by Dairon Granada</span>
      </div>

      <div onClick={onChangeMusic}  class="card">
        <div class="img"><SiApplemusic/></div>
      </div>


    </>
  )
}

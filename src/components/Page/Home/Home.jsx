import React from 'react'
import Nav from "../../Layouts/Nav/Nav";
import About from "../../Layouts/Views/Me/About";
import Bot from "../../Layouts/Views/Main/Bot";
import Experiences from "../../Layouts/Views/Me/Experiences";
import Works from "../../Layouts/Views/Me/Works";
import Contacts from "../../Layouts/Views/Contact/Contacts";
import { BiDonateBlood } from "react-icons/bi"

export const Home = () => {
  return (
    <>
        <Nav />
        <Bot />
        <About />
        <Experiences />
        <Works />
        <Contacts />

        <div className='w-full flex gap-px flex-wrap flex-col items-center justify-evenly relative bg-primary pb-10' >
          <h5 className='text-slate-300'  >Contador de Visitas</h5>
            <a href="https://github.com/dairongranada" title="Contador De Visitas Gratis">
              <img style={{border: "0px solid", display: "inline"}} alt="contador de visitas" src="https://websmultimedia.com/contador-de-visitas.php?id=9149" />
            </a>
        </div>
      
        <hr/>
        <div className='bg-primary pb-10  pl-20 pt-5 border-t-sky-50' >
          <span className='text-slate-500' >Copyright © 2023 - Designed by Dairon Granada</span>
        </div>

        <div className="ContDonations" ><BiDonateBlood className="donations" /></div>

    </>
  )
}

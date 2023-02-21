import React from 'react'
import Nav from "../../Layouts/Nav";
import About from "../../Layouts/About";
import Experiences from "../../Layouts/Experiences";
import Timelines from "../../Layouts/Timelines";
import Works from "../../Layouts/Works";
import Contacts from "../../Layouts/Contacts";

export const Home = () => {
  return (
    <>

        <Nav />
        <Experiences />
        <About />
        <Timelines />
        <Works />
        <Contacts />
        
    </>
  )
}

import React from "react";
import Me from "../../../../image/me.jpeg";

const About = () => {
  return (
    <div id="about" className="flex w-screen  flex-col items-center justify-center relative bg-primary pb-10">
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:max-w-screen-xl">
        <div className="w-full h-420 flex items-center justify-center">
          <div className="w-275 h-340 bg-[#6a6b6b] rounded-md relative">
            
            <img
              className="w-full h-full absolute left-4 top-4 object-cover rounded-lg drop-shadow-2xl"
              src={Me}
              alt="Dairon Granada"
            />

          </div>
        </div>

        <div className="w-full h-320 flex flex-col items-center justify-center">

          <p className="text-lg text-textBase text-left p-4">
            Desarrollador de software con un 1 año de experiencia. 
            Especializado  en el desarrollo Front End (UX, SEO)
          </p>

          <p className="text-lg text-textBase text-left p-4">
            Experimentado con todas las etapas del ciclo de desarrollo de 
            proyectos web dinámicos, tengo conocimiento en diferentes áreas en 
            desarrollo. El framework con el que trabajo actualmente es React.js  
          </p>
          
        </div>
      </section>
    </div>
  );
};

export default About;

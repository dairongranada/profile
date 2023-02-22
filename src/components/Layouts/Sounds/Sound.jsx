import React,{useState} from 'react'
import "@madzadev/audio-player/dist/index.css";
import Player from "@madzadev/audio-player";
import './modal.css'
import { AiFillCloseCircle } from "react-icons/ai";

import { SiApplemusic } from "react-icons/si";
import $ from "jquery";

import Ms1   from "../../../Music/Jóven Fígaro.mp3";
import Ms2   from "../../../Music/AlcolirykoZ El Remate.mp3";
import Ms3   from "../../../Music/El Arkeólogo - RED VELVET.mp3";
import Ms4   from "../../../Music/Doble Porcion - Tren a vapor.mp3";


export const Sound = ({ value }) => {

    const handleC =() =>{
      $('.ContModal').hide();

    }

    const tracks = [
        {
          url: Ms1,
          title: "buhodermia - Joven Figaro",
          tags: ["R.A.P"],
        },
        {
          url: Ms2,
          title: "AlcolirykoZ - El Remate",
          tags: ["R.A.P"],
        },
        {
          url: Ms3,
          title: "El Arkeólogo - RED VELVET",
          tags: ["R.A.P"],
        },
        {
          url: Ms4,
          title: "Doble Porcion - Tren a vapor",
          tags: ["R.A.P"],
        },
      ];


  return (

    <>
      <div className='ContModal'>
        <div className='modal'>
          <div className='modalHeader'>  
            <button onClick={handleC}>
              <AiFillCloseCircle /> 
            </button> 
          </div>

          <div className='modalBody' > 
          <div className='Imge'>
          <span className=' rounded-full bg-stone-100	' ><SiApplemusic style={{fontSize: "12rem"}} /></span>
          </div>

          <div className='Soundtracks' >
              <Player trackList={tracks} 
                includeTags={false}
                includeSearch={false}
                showPlaylist={true}
                autoPlayNextTrack={true}
              />
          </div>
          </div>
        </div>
      </div>
    
    
    </>


  )
}

import React,{useState} from 'react'
import "@madzadev/audio-player/dist/index.css";
import Player from "@madzadev/audio-player";
import './modal.css'
import { AiFillCloseCircle } from "react-icons/ai";
import Ms1   from "../../../Music/Jóven Fígaro.mp3";
import Ms2   from "../../../Music/AlcolirykoZ El Remate.mp3";



export const Sound = ({ value }) => {

    const handleC =() =>{
      
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
      ];


  return (

    <>
      {/* <div className='ContModal'>
        <div className='modal'>
          <div className='modalHeader'>  
            <button onClick={handleC}>
              <AiFillCloseCircle/> 
            </button> 
          </div>

          <div className='modalBody' > 
          <div className='Imge'>
            <img src="https://www.pngkey.com/png/detail/9-91378_spotify-msica-logo-negro.png" alt="" />
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
      </div> */}
    
    
    </>





  )
}

import React, { useRef, useState, useTransition } from 'react'

const App = () => {

  const[audioplay,setaudioplay] = useState(true)
  const[defaultmusic,setdefaultmusic] = useState(0);

  const[music,setmusic] = useState( {
    songaudio : "./Assests/Songs/Bloody Mary.mp3",
    songname:"Bloody Mary",
    singername:"Lady Gaga",
    songimg:"./Assests/Images/mary.jpg"
  })

  const currentmusic = useRef();

 //Function for playing music 
  const musicplay = () => {
    if(audioplay){
      currentmusic.current.play();
      setaudioplay(false)
    }
    else{
      currentmusic.current.pause();
      setaudioplay(true)
    }
  }
  
//List of your favourite music's  
  const musiclist = [
  {
    songaudio : "./Assests/Songs/Bloody Mary.mp3",
    songname:"Bloody Mary",
    singername:"Lady Gaga",
    songimg:"./Assests/Images/mary.jpg"
  },
  {
    songaudio : "./Assests/Songs/JO TUM MERE HO.mp3",
    songname:"Jo Tum Mere Ho",
    singername:"Anuv Jain",
    songimg:"./Assests/Images/Jo tum.jpg"
  },
  {
    songaudio : "./Assests/Songs/HUSN.mp3",
    songname:"Husn",
    singername:"Anuv Jain",
    songimg:"./Assests/Images/Husn.jpg"
  },
  {
    songaudio : "./Assests/Songs/Skyfall.mp3",
    songname:"Skyfall",
    singername:"Eren",
    songimg:"./Assests/Images/Skyfall.jpg"
  },
  {
    songaudio : "./Assests/Songs/Ye Tune Kya Kiya.mp3",
    songname:"Ye Tune Kya Kiya",
    singername:"Ustad",
    songimg:"./Assests/Images/yetune.jpg"
  },
  {
    songaudio : "./Assests/Songs/MILLIONAIRE.mp3",
    songname:"Millionaire",
    singername:"Honey Singh",
    songimg:"./Assests/Images/mill.jpg"
  },
  {
    songaudio : "./Assests/Songs/VICTORY ANTHEM.mp3",
    songname:"Victory Anthem",
    singername:"Khushi",
    songimg:"./Assests/Images/victory.jpg"
  }
]

//Function to play next song
  const nextsong = () => {
    if(defaultmusic >= musiclist.length - 1) //condition to check if the song is the last song of the list
    //music.length = total number of songs
      {
      let num = 0;
      setdefaultmusic(num);
      updatemusic(num);
    }
    else{
      let num = defaultmusic + 1;
      setdefaultmusic(num);
      updatemusic(num);
    }
  }

//Function to updte the music  
  const updatemusic = (n) => {
    let music = musiclist[n];
    currentmusic.current.src=music.songaudio;
    currentmusic.current.play();
    setmusic({
      songaudio : music.songaudio,
      songname:music.songname,
      singername:music.singername,
      songimg:music.songimg
    })
    setaudioplay(true)
  }

//Function to play prev song
  const prevsong = () => {
    if(defaultmusic === 0) //condition to check if the song is the first song of the list
      {
      let num = musiclist.length - 1;
      setdefaultmusic(num);
      updatemusic(num);
    }
    else{
      let num = defaultmusic - 1;
      setdefaultmusic(num);
      updatemusic(num);
    }
  }

  return (
    <div>
      <audio src={music.songaudio} ref={currentmusic}></audio>
      <img src="https://wallpapers.com/images/hd/surreal-vista-of-a-bustling-urban-skyline-in-4k-resolution-eae11l38l12zh2qw.jpg" alt="" />
    <div className="container">
      <div className="main">
        <p className='name'>Music Player</p>
        <p className='musicname'>{music.songname}</p>
        <p className='artistname'>{music.singername}</p>
        <img src={music.songimg} className='musicimg' alt="" />
        <div className="musiccontrols">
          <i className='fa-solid fa-backward' onClick={prevsong}></i>
          <i className={`fa-solid fa-${audioplay ? "play" : "pause"}`} onClick={musicplay}></i>
          <i className='fa-solid fa-forward' onClick={nextsong}></i>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App

import "./port.css"; 
import React, { useState, useEffect } from "react";
import bgImage from './video/background1.mp4';
import ReactPlayer from 'react-player'
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
// import React from "react";
export const Port=()=>{
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [day, setDay] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setDate(now.toLocaleDateString());
      setTime(now.toLocaleTimeString());
      setDay(now.toLocaleDateString('en-US', { weekday: 'long' }));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);


    return(
        <>
      <div id="parent">
      <video autoPlay loop muted>
          <source src={bgImage} type="video/mp4"/>
        </video>
        <div id="id1">
            <h1 style={{color:"#FF33C9"}}>PORTFOLIO</h1>
        </div>
        <div id="parent2">
            <div id="id2">
                <img src="mkpic.jpeg" alt="cantbe displayed" class="c2"></img>
                {/* <h1>{date}</h1> */}
                <div class="c5">
             <p class="c6"> {date}</p>
             <p class="c6">{time}</p>
             <p class="c6">{day}</p>
    </div>
                <h3 class="c1">Content <br></br>Creator</h3>
                <p class="c3">
                "Hi, I'm Momin Khan, and I'm a content creator and YouTuber. My passion is creating informative and technology related videos that help my audience learn and grow. Whether it's sharing my expertise in a particular niche, reviewing the latest products, or just sharing my personal experiences, I love engaging with my viewers and building a community around my content. I'm committed to producing high-quality videos that are visually appealing, informative, and entertaining. With a focus on authenticity and creativity, I strive to bring something new and exciting to the table with each video I produce. I'm excited to continue growing my channel and connecting with viewers who share my passions and interests."
                </p>
            </div>
          <div id="id3">
<h2 class="c7">WATCH MY LATEST VIDEO HERE ..</h2>
<hr class="c8"></hr>
<div class="c9">
<ReactPlayer  url='https://youtu.be/RpZiTELFZUE' controls="true"  width={"300px"} height={"300px"} />
</div>
          </div>
        </div>
      </div>
        </>
    )
}
'use client'
// VerticalCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './feedback.css';

import Image from 'next/image';



function Feedback() {

   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
    };
  return (
    <>



<Slider {...settings}>
      <div>
      <div className="content ">
            <div className="gauche">
            <Image src="/feed.png" alt="err"  width={700} height={700} className="image-feed" />
            <div className="info-user">
               <p className="name">
                  Mohamed Youcefi
               </p>
               <p className="bio">
               farmer from China and ceo 
               </p>
            </div>
            </div>
            <div className="droit">
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" className="bi bi-chat-right-quote" viewBox="0 0 16 16">
               <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
               <path d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
               </svg>
               <div className="date">
                  23/10/2025 , chine
               </div>
               <p className="comment">
               it means i like this website it gave me a really good service and some professional experts that helped me in my kid prostitution case
               </p>
            </div>
         </div>
      </div>
      <div>

         <div className="content">
            <div className="gauche">
            <Image src="/feed.png" alt="err"  width={700} height={700} className="image-feed" />
            <div className="info-user">
               <p className="name">
                  Mohamed Youcefi
               </p>
               <p className="bio">
               farmer from China and ceo 
               </p>
            </div>
            </div>
            <div className="droit">
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" className="bi bi-chat-right-quote" viewBox="0 0 16 16">
               <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
               <path d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
               </svg>
               <div className="date">
                  23/10/2025 , chine
               </div>
               <p className="comment">
               it means i like this website it gave me a really good service and some professional experts that helped me in my kid prostitution case
               </p>
            </div>
         </div>
      </div>
      <div>
        <div className="content ">
            <div className="gauche">
            <Image src="/feed.png" alt="err"  width={700} height={700} className="image-feed" />
            <div className="info-user">
               <p className="name">
                  Mohamed Youcefi
               </p>
               <p className="bio">
               farmer from China and ceo 
               </p>
            </div>
            </div>
            <div className="droit">
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" className="bi bi-chat-right-quote" viewBox="0 0 16 16">
               <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
               <path d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
               </svg>
               <div className="date">
                  23/10/2025 , chine
               </div>
               <p className="comment">
               it means i like this website it gave me a really good service and some professional experts that helped me in my kid prostitution case
               </p>
            </div>
         </div>
      </div>
      <div>
        <div className="content ">
            <div className="gauche">
            <Image src="/feed.png" alt="err"  width={700} height={700} className="image-feed" />
            <div className="info-user">
               <p className="name">
                  Mohamed Youcefi
               </p>
               <p className="bio">
               farmer from China and ceo 
               </p>
            </div>
            </div>
            <div className="droit">
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" className="bi bi-chat-right-quote" viewBox="0 0 16 16">
               <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
               <path d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
               </svg>
               <div className="date">
                  23/10/2025 , chine
               </div>
               <p className="comment">
               it means i like this website it gave me a really good service and some professional experts that helped me in my kid prostitution case
               </p>
            </div>
         </div>
      </div>
      <div>
        <div className="content ">
            <div className="gauche">
            <Image src="/feed.png" alt="err"  width={700} height={700} className="image-feed" />
            <div className="info-user">
               <p className="name">
                  Mohamed Youcefi
               </p>
               <p className="bio">
               farmer from China and ceo 
               </p>
            </div>
            </div>
            <div className="droit">
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" className="bi bi-chat-right-quote" viewBox="0 0 16 16">
               <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
               <path d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
               </svg>
               <div className="date">
                  23/10/2025 , chine
               </div>
               <p className="comment">
               it means i like this website it gave me a really good service and some professional experts that helped me in my kid prostitution case
               </p>
            </div>
         </div>
      </div>
    </Slider>







   
    
    </>
  )
}

export default Feedback
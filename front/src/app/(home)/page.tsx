'use client'
import "./page.css"
import Navbar from "../components/home/navbar";
import Image from 'next/image';
import Feedback from "../components/home/feedback"
export default function Home() {
  return (
      <>

  <div className="landing">
    <div className="landing-content">

      <h1 className="title text-white">
        For Justice and Excellence
      </h1>
      <form action="" className="inputs">
        <input type="text" className="input" name="" id="" placeholder="enter the name of your lawyer"/>
        <input type="text" className="input" name="" id="" placeholder="enter your wilaya"/>
        <button className="input-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
        </button>
      </form>
    </div>

  </div>

  <div className="about">
    <div className="content-1">
      <div className="title">Who Are We?</div>
      <p className="desc">Welcome to DZ_Muhami, your trusted ally in the quest for legal representation. We understand that navigating the legal landscape can be challenging, and finding the right lawyer is a crucial step in ensuring justice and success. At DZ_Muhami,we` ve set out to simplify this process, making it accessible, informative, and empowering for everyone seeking legal assistance.</p>
    </div>
    <div className="content-2">
      <Image src="/aaa.png" alt="err"  width={700} height={700} className="image-about" />
    </div>
  </div>


  <div className="key-value">
    <div className="title">Our Key Values</div>
    <div className="content">
      <div className="card">
        <div className="head">
          <div className="titre">
            transparency
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-calendar-check" viewBox="0 0 16 16">
            <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
          </svg>
        </div>
        <p className="desc">
          We believe in transparency in the legal matchmaking process. Our platform provides clear and detailed information about each lawyer to help you make confident decisions.
        </p>


      </div>
      <div className="card">
        <div className="head">
          <div className="titre">
            accessebility
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-headset" viewBox="0 0 16 16">
            <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5"/>
          </svg>
        </div>
        <p className="desc">
          DZ_Muhami is designed to be accessible to everyone. We aim to break down barriers to legal representation by providing a diverse and inclusive space for both users and lawyers.               </p>


      </div>
      <div className="card">
        <div className="head">
          <div className="titre">
            empowerment
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-chat-left-dots" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
          </svg>
        </div>
        <p className="desc">
          We empower users by offering not just a lawyer-search platform but a knowledge hub. Through detailed lawyer profiles, client reviews, and informative content, we aim to empower you with the information needed to make sound legal decisions.               </p>


      </div>

    </div>
  </div>


  <div className="feed">
    <div className="titre">what our clients say about us ?</div>
    <Feedback/>
  </div>
</>
  );
}

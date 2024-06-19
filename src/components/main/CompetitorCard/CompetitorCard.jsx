import React from 'react'
import style from "./Competitor.module.scss"
import  "./style.css"
import { FaVoteYea } from "react-icons/fa";

// const imagStyle = {
//   minHeight: "100%",
//   background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(")`,
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",
// }


function CompetitorCard({Competitor}) {
  const imageStyle = {
    minHeight: "100%",
    width: "100%", // Ensure the div takes full width
    background: `url(${Competitor.Photo}) no-repeat center center / cover`, // ES6 Template literals for dynamic image URL
    borderRadius: "10px", // If you want rounded corners on the image
  };
  return (
    // <div className={style.hollyCard}>
    //   <div className={style.imgPart}>

    //   <div  style={imagStyle}>
    //   </div>

    //   </div>
    //   <div className={style.buttomPart}>
    //     <div className={style.votes}>£5922 votes</div>
    //     <h3>Muna Mahad Jamac</h3>
    //     <span>Galmudug</span>

    //   </div>
    // </div>
       <div className="holly-card">
      <div className="image-part">

      <div style={imageStyle}>
        <div className="icon">
        <FaVoteYea />

        </div>
      </div>


      </div>
      <div className="buttomPart">
        <div className="votes"># {Competitor.NumberofVotes} Votes</div>
        <h3>{Competitor.FirstName }  {Competitor.MiddleName }  {Competitor.LastName} </h3>
        <span>{Competitor.RepresentingState}</span>

      </div>
    </div>
  )
}

export default CompetitorCard
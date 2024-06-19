import React from 'react'
import CompetitorCard from "./CompetitorCard/CompetitorCard"
import style from "./CompetitorCard/Competitor.module.scss"
import CompetitorsData from "../../assets/competitors.json"
function Competitors() {
  return (
    <div className={style.CardGrid}>
      {
        CompetitorsData.map(Competitor=>(
          <CompetitorCard Competitor={Competitor} />

        ))
      }

      
    </div>
  )
}

export default Competitors
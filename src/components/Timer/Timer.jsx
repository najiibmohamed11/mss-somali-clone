import React from 'react'
import style from "./Timer.module.scss"
function Timer() {
  return (
    <div className={style.container}> 
    
    <h1>Miss Somalia 2023</h1>
    <div className={style.votingEnd}>
      
      <h3>VOTING ENDS IN</h3>
    </div>
    <div className={style.allTime} >
      <div className={style.digitUnit}>
        <span className={style.digit}>08</span>
        <span className={style.text}>Days</span>
      </div>
      <div className={style.digitUnit}>
      <span className={style.digit}>08</span>
      <span className={style.text}>Hour</span>
      </div>
      <div className={style.digitUnit}>
      <span className={style.digit}>08</span>
      <span className={style.text}>minuts</span>
      </div>
      <div className={style.digitUnit } style={{border:"none"}}>
      <span className={style.digit}>08</span>
        <span className={style.text}>seconds</span>
      </div>

    </div>
    </div>
  )
}

export default Timer
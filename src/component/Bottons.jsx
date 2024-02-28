import React from 'react';
import styles from './Bottons.module.css';
export default function Bottons({btnClick}) {
    let btn=['1','2','3','+','4','5','6','-','7','8','9','*','.','0','=','/','X','C'];
  return (
    <div>
      {btn.map((val,index)=>(<button className={val==='C'?styles.clearbtn : styles.calcbtn}
       key={index} onClick={()=>btnClick(val)}>{val}</button>))}
    </div>
  )
}

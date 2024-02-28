
import React, { useState } from 'react'
import ParentContainer from './component/ParentContainer'
import Display from './component/Display'
import Bottons from './component/Bottons'
export default function App() {
  const [data,setData]=useState('');
  function handleClick(val){
    if(val==='='){
      setData(eval(data));
    }else if(val==='C'){
      setData("");
    }else if(val==='X'){
      setData(data.slice(0,-1));
    } else{
      setData(data+val);
    }
  }
  return (
    <ParentContainer>
     <Display data={data}/>
     <Bottons btnClick={handleClick}/>
    </ParentContainer>
  )
}

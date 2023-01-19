import React from 'react'

export default function Login() {

  function getvalue(){
    let data=document.getElementById('nam').value;
    document.getElementById('para').innerHTML='Hey !'+' ' +data;
    document.getElementById('para2').innerHTML='Welcome to LPU college'
    
    
  }
  return (
    <div  style={{float:"left"}}>
      Enter your name<input type='text' id='nam'></input>
      
      <button onClick={getvalue}>Login</button>
     <p id='para'style={{fontWeight: 'bold'}}><h1></h1> </p>
     <p id='para2' style={{fontWeight: 'bold'}}> </p>
     <p >Assignment done by Rahul Kumar 12001341</p>
     
      
      
    </div>
  )
}

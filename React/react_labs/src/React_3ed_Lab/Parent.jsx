import React from 'react'

function Parents() {
  return (
    <div>
      <Child1 Name='Om' Age={18} MobileNo='1234567890'/>
      <Child2 Name='mayank' Age={18} MobileNo='0987654321'/>
    </div>
  )
}
function Child1(Props) {
  return (
    <div>
      <h1>Name : {Props.Name}</h1>
      <h1>Age : {Props.Age}</h1>
      <h1>MobileNo. : {Props.MobileNo}</h1>
    </div>
  )
}
function Child2({Name,Age,MobileNo}){
  return (
    <div>
      <h1>Name : {Name}</h1>
      <h1>Age : {Age}</h1>
      <h1>MobileNo. : {MobileNo}</h1>
    </div>
  )
}

export default Parents;

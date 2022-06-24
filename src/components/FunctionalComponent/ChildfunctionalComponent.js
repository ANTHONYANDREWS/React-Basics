import React from 'react'

function ChildfunctionalComponent({personNo, personImg, personDetail,hobbies}) {
  return (
    <div>
    <h1>Person {personNo} {personDetail.firstName} {personDetail.lastName}</h1>
      <h3>Hobbies: {hobbies.join(', ')}</h3>
      <img src={personImg} height={200} width={200} alt='Person-DP'/>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus quasi hic officia minus fugiat, reprehenderit ducimus cum saepe rem earum velit corrupti reiciendis eaque id debitis, atque in fuga quisquam dolore dolor eum! Saepe excepturi delectus ullam eius nobis impedit facilis vel quis suscipit voluptatem quisquam optio inventore, ea possimus commodi, eum eos quibusdam beatae nesciunt modi, quas numquam vero. </p>
    </div>
  )
}

export default ChildfunctionalComponent

 

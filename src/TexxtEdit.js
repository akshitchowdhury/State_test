import React from 'react'
import { useState } from 'react'



const TexxtEdit = () => {

    const [text, setText] = useState("") ;
    const [display, setDispaly] = useState("");


    const clicker = ()=>{setDispaly(text)}

    return (
    <div>
            <h1>Type here to see the change </h1>
        <input type="text"
          value={text} 
            onChange={(e)=> setText(e.target.value)}
          />

          <button onClick={clicker}>Click me to paste the text</button>
          {display && <p>Entered text : {display}</p>}      
    </div>
  )
}

export default TexxtEdit

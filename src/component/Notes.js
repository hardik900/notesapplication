import React from 'react'
import data from './Data'
import "./Notes.css"

function Notes(props) {
    let Notesdata = props.data1
    console.log(Notesdata,"props inside notes")
  return (
    <div className='noteContainer'>
        {
            Notesdata == null ? <h1 style={{display:'inline-block', marginTop:'90px', }}>loading...</h1> 
            :
            Notesdata?.map((val)=>{
                return(
                    <div className='note' key={val.element}>
                        <h2 id={val.element}>{val.element}</h2>
                        <p >{val.desc}</p>
                    </div>
                )
            })
           
        }
    </div>
  )
}

export default Notes
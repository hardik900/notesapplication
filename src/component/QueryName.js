import React from 'react'
import data from './Data'

function QueryName(props) {
    let Querydata = props.data
    console.log(Querydata,"props inside queryname")
  return (
    <div>
        {
           Querydata== null ? <h1 style={{display:'inline-block', marginTop:'90px'}}>loading...</h1>
           :
           Querydata?.map((val1)=>{
            let hrefValue = `#${val1.element}`;
            return(
                <div key={val1.element}>
                    <a href={hrefValue} ><p className='p'>{val1.element}</p></a>
                    {/* <p>{val.queryDesc}</p> */}
                </div>
            )
        }) 
        }
    </div>
  )
}

export default QueryName  



import React from 'react'
import data from './Data'

function QueryName(props) {
    let Querydata = props?.data
    console.log(Querydata,"props inside queryname")
  return (
    <div>
        {
            Querydata?.map((val1)=>{
                let hrefValue = `#${val1.element}`;
                return(
                    <>
                        <a href={hrefValue}><p className='p'>{val1.element}</p></a>
                        {/* <p>{val.queryDesc}</p> */}
                    </>
                )
            })
        }
    </div>
  )
}

export default QueryName  



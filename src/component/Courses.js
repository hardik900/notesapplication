import React, { useEffect, useState } from "react";
import QueryName from "./QueryName";
import Notes from "./Notes";
import "./Home.css"
import Nav from "./Navbar/Nav";
import { useParams } from "react-router-dom";
function Courses(){
    const [CourseData, setCourseData] = useState([])
    const params = useParams()
    let data = params.course
    let click = data
    console.log(click,"click")
    console.log(data,"params")

    useEffect(() => {
        getData()
    }, [click])
    function getData() {
        let obj = {
            method : "get",
            // headers: {
            //     "Accept" : "application/json",
            //     "Content-Type": "application/json" ,
            // }
        }
        
        fetch(`http://localhost:5000/${data}`,obj)
        .then((resp) => {
            resp.json()
                .then((response) => {
                    console.log(response, "response")
                    setCourseData(response)
                    console.log(response, "response")
                }) 
        })
    }
   return(
    <>  
        <Nav/>
        <div className="notesContainer">
            <div className="queryName">
                <QueryName data={CourseData}/>
            </div>
            <div className="queryDesc">
                <Notes data1={CourseData} />
            </div>
        </div>
    </>
   )
}

export default Courses;
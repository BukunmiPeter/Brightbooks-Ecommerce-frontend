import React, { useEffect, useState } from 'react'
import '../Categories/Categories.css'
import JsonData from "../../MOCK_DATA.json";

function Categories() {
    const [data , setData] = useState([])
    const Value = JsonData
    
const handleLocalHost = () =>{
    window.localStorage.setItem(data)  
}
   useEffect(() => {
    if (Value){
        setData(Value)
    }
   }, [data, Value])

  return (
    <div>
        <div className="categorycontainer">
            <div className="categoriescontent">
                <div className="categoryheader">
                    Categories
                </div>
                <div className="categorycontent">
                   {data.map((item, id)=>{
                    
                return(
                    <>
                    <div className="itemcontener" key={id}>
                        <div className="itemcontentr">
                            <div className="image" onClick={handleLocalHost}>
                                <img src={item.image} alt="" />
                            </div>
                            <div className="titel">
                                {item.title}
                            </div>
                        </div>
                    </div>
                    </>
                )
                   })} 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories
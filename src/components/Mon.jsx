import React from "react";

export const Mon=({title,city,url})=>{
    const handleTitle=()=>{
        alert(`Thanks for visiting to ${title}!`)
    }
    const handleCity=()=>{
        alert(`${city} is awesome place for tourist!!`)
    }
    return(
        <div className="sub">
            <h2 onClick={handleTitle}>{title}</h2>
            <h4 onClick={handleCity}>{city}</h4>
            <img src={`img/${url}.jpg`} alt="" />
        </div>
    )
}
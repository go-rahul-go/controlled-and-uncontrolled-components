


import React,{useEffect, useRef,useState} from 'react'
import "../style.css";
 
const UnControlled = () => {
    const inputRef = useRef("");
    const [value,setValue]=useState("");
    function handleSubmit(e)
    {
        e.preventDefault();
        setValue(inputRef.current.value);
        console.log(inputRef.current.value)
    }
    return (
        <div class="container">
        <div class="ctrl-box">
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" ref={inputRef} placeholder='after typing press enter'/>
                <label><i class="fa-solid fa-arrow-left"></i>UnControlled Component</label>
                </form>
        </div>
        <div class="text-box">
            <p>{value}</p>
        </div>
        </div>
    )
  
}

export default UnControlled
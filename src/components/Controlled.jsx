import React, { useState } from 'react'
import "../style.css"

export const Controlled = () => {

    const [data, updateData] = useState("");

    const handleChange = (e) => {
        updateData(e.target.value)
    }
    return (
        <div class="container">
        <div class="ctrl-box">
         
                <input type="text" value={data} onChange={handleChange} id="ctrlInput" />
                <label htmlFor='ctrlInput'><i class="fa-solid fa-arrow-left"></i> Controlled Component</label>
         
            
        </div>
        <div class="text-box">
            <p>{data}</p>
        </div>
        </div>
    )
}


export default Controlled;

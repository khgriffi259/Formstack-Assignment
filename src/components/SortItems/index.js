import React, { useEffect, useState } from 'react'
import M from 'materialize-css'

const SortItems = ({
    sortItems
}) => {
    const [option, setOption] = useState('')
    
    useEffect(() => {
        M.AutoInit()
    }, [])
     
    useEffect(() => {
        sortItems(option)
    }, [option])

   

    const handleChange = e => {
        setOption(e.target.value)
    }

    return   <div className="section">
               <label htmlFor="capacity">Sort By:</label>
               <select 
                   name="capacity" 
                   id="capacity" 
                   value={option} 
                   className="form-control black-text" 
                   onChange={handleChange}
               >
                    <option value=""> Choose option </option>
                    <option value="Title"> Title Ascending </option>
                    <option value="CreatedAt"> Most Recent </option>
               </select>
           </div>
      
                
}
export default SortItems

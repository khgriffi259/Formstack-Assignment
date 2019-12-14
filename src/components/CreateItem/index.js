import React, { useState } from 'react'

const CreateItem = ({
    addItem
}) => {
    
    const [item, setItem] = useState('')
    
    const handleSubmit = e => {
        e.preventDefault()
        addItem(item)
        setItem('')
    }
    
    return  <div className="create-item" data-test="CreateItemComponent">
                <form onSubmit={handleSubmit}>
                    <input 
                        id="add-item" 
                        type="text" 
                        className="input-field" 
                        data-test="input-field"
                        placeholder="Add item" 
                        value={item}
                        onChange={e => setItem(e.target.value)}
                    />
                </form>
            </div>
}
export default CreateItem

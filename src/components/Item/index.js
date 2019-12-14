import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({
    item: {
        id,
        active,
        title
    }, 
    removeItem,
    selectItem
}) => 
    <Link
        to="/" 
        className={`item collection-item black-text ${active ? 'active' : ''}`}
        data-test="ItemComponent"
        onClick={() => selectItem(id)}
    >
        <div>
            <span 
                className="item-title-text" 
                data-test="item-title"
            >
                {title}
            </span>
            <span className="secondary-content">
                <i 
                    className="fas fa-trash fa-2x black-text item-icon" 
                    onClick={() => removeItem(id)}
                    data-test="item-icon"
                >
                </i>
            </span>
        </div>
    </Link>

export default Item

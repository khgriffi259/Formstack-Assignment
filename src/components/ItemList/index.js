import React from 'react'
import { connect } from 'react-redux'
import Items from '../../data'
import Item from '../Item'
import { removeItem, selectItem } from '../../store/actions'

const ItemList = ({
    items,
    removeItem,
    selectItem
}) => 
    <div className="item-list  " data-test="ItemListComponent">
        <ul className="collection">
            {items.map((item, i) => 
                <Item 
                    key={i} 
                    item={item} 
                    removeItem={removeItem}
                    selectItem={selectItem}
                />
            )}   
        </ul>
    </div>

export default connect(state => ({
    items: state.item.items
}), dispatch => ({
    removeItem: id => dispatch(removeItem(id)),
    selectItem: id => dispatch(selectItem(id)),
}))(ItemList)

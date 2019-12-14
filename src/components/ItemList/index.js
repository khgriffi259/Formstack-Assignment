import React from 'react'
import { connect } from 'react-redux'
import Items from '../../data'
import Item from '../Item'
import { removeItem, selectItem } from '../../store/actions'

const ItemList = ({
    items,
    removeItem,
    selectItem
}) => {
    
    console.log(items.length)
    return  items.length
        ?   <div className="item-list  " data-test="ItemListComponent">
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
        : <h4 className="no-items center grey-text em" data-test="no-items"> Please add items to the list</h4>
}
export default connect(state => ({
    items: state.item.items
}), dispatch => ({
    removeItem: id => dispatch(removeItem(id)),
    selectItem: id => dispatch(selectItem(id)),
}))(ItemList)

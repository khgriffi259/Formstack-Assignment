import React from 'react'
import Navbar from '../components/Navbar'
import Title from '../components/Title'
import ItemList from '../components/ItemList'
import CreateItem from '../components/CreateItem'
import SortItems from '../components/SortItems'
import { addItem, sortItems } from '../store/actions'
import { connect } from 'react-redux'

const Home = ({
    addItem,
    sortItems
}) => 
    <>
        <Navbar />
        <div className="Home container section">
            <Title title="Items List" />
            <CreateItem addItem={addItem}/>
            <SortItems sortItems={sortItems}/>
            <ItemList />
        </div>
    </>

export default connect(
    null, 
    dispatch => ({
        addItem: item => dispatch(addItem(item)),
        sortItems: option => dispatch(sortItems(option))
    }))(Home)

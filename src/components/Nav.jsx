import './Nav.css'

import React from 'react'
import SearchBar from './SearchBar'

export default function Nav(props) {

    return (
        <div className='navBar'>
            <button className='boton' onClick={() => window.location.reload()}>Home</button>
            <button className='boton'>Filter</button>
            <SearchBar onSearch={props.onSearch} />
        </div>
    )
}

import React from 'react'
import './search-box.styles.css'
export default (props) => {
    const handleChange = (e) => {
        props.searching(e.target.value)
    }

    return(
        <input className='search' type='search' placeholder='Search Field' onChange={(e) => handleChange(e)}/>
    )
}

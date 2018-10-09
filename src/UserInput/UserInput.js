import React from 'react'

export default (props) => {

    return (
    <div>
        <input type="text" placeholder="Enter your name" onChange={props.changeHandle}/>
    </div>
)
}

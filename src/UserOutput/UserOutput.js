import React from 'react'

export default (props) => {

    let styles = {
        textAlign : "center",

    };

    return (
        <div className="UserOutput" style={styles}>
            <p><b>{props.username}</b> learning React with redux</p>
            <p>Max is a very good tutor</p>
        </div>
    )
}

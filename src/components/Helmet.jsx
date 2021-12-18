import React, { useEffect } from 'react'

const Helmet = (props) => {
    useEffect(() => {
        document.title = props.title;
    }, [props.title])
    return (
        <>
            {props.children}
        </>
    )
}

export default Helmet

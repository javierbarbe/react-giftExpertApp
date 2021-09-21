import React from 'react'

export const GifGridItem = ({id,title,url,nepe}) => {
    // console.log(nepe);
    return (
        <div className="card animate__animated animate__fadeIn">
            <img alt={title} src={url} width='100%'/>
            <p>{title}</p>
        </div>
    )
}

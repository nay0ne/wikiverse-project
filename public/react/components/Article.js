import React from 'react';

export const PagesList = () => {


    
        return <>
        <div>
        <h3>{props.page.title}</h3>
            <div className = 'card'>
            <div className = 'body'>
            <p className = 'author'>Author:</p>
            <p className = 'content'>{}</p>
            <p className = 'tags'>{}</p>
            <p className = 'date'>{}</p>
            </div>
            </div>
        </div>
    
        </>
    } 
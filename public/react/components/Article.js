import React from 'react';
import { useState } from 'react'
import dateFormat from 'dateformat'

export const Article = ({ page, idx}) => {


    
        return <>
        <div>
        <h3>{page.title}</h3>
            <div className = 'card'>
            <div className = 'body'>
            <p className = 'author'>Author:</p>
            <p className = 'content'>{page.content}</p>
            <p className = 'tags'>{}</p>
            <p className = 'date' time datetime="{page.createdAt}">Published: {dateFormat(page.createdAt, "mmmm dS, yyyy")}</p>
            <button ></button>
            </div>
            </div>
        </div>
    
        </>
    } 
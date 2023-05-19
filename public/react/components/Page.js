import React from 'react';
import { useState } from 'react'
import dateFormat from 'dateformat'


export const Page = (props) => {
  //  usestate to reveal content for the page
const [showContent, setShowContent] = useState(false);



  return <>
    <div>
      {/*  page title*/}
      <h3>{props.page.title}</h3>
     {
      showContent && <div className = 'card'>
      <div className = 'body'>
          <p className = 'author'>Author:{}</p>
          <p className = 'content'>{props.page.content}</p>
          <p className = 'tags'>Tags:{}</p>
          <p className = 'date'>Published: {dateFormat(props.page.createdAt, "mmmm dS, yyyy")}</p>
      </div>
  </div>
     }
     <button onClick={() => setShowContent(!showContent)}></button>

    </div>
  </>
} 
	
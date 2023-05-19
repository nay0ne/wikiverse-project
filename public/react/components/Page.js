import React from 'react';
import { useState } from 'react'
import dateFormat from 'dateformat'


export const Page = (props) => {
  //  usestate to reveal content for the page
const [showContent, setShowContent] = useState(false);


  return <>
    <div>
      
      <h3 onClick={()=> setShowContent(true)}>{props.page.title}</h3>
     {
      showContent && <div className = 'card'>
      <div className = 'body'>
          <p className = 'author'>Author:{props.author}</p>
          <p className = 'content'>{props.page.content}</p>
          <p className = 'tags'>Tags:{}</p>
          <p className = 'date'>Published: {dateFormat(props.page.createdAt, "mmmm dS, yyyy")}</p>
          <button onClick={() => setShowContent(!showContent)}>Back to Wiki List</button>
      </div>
  </div>
     }
     

    </div>
  </>
} 
	
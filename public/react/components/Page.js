import React from 'react';
import { useState } from 'react'
import dateFormat from 'dateformat'
import { Article } from './Article'

export const Page = ({page, idx}) => {
  //  usestate to reveal content for the page
const [showContent, setShowContent] = useState(false);


  return <>
    <div>
      
      <h3 onClick={()=> setShowContent(true)}>{page.title}</h3>
      <button onClick={() => setShowContent(!showContent)}>Back to Wiki List</button>
     {
      showContent && <Article page={page} key={idx} />
      
     }
     

    </div>
  </>
} 
	
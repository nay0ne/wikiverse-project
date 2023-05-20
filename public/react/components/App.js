import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { Form } from './Article-form'



// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {
	// props for button to create new article
	const [isAddingArticle, setIsAddingArticle] = useState(false);

	const [pages, setPages] = useState([]);
	// Todo try setting fetchpages as separate function component and then pulling it in as a prop, as Form component will need to use similar function within onSubmit/handlesubmit
	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}



	useEffect(() => {
		fetchPages();
	}, []);


	return (
		<main>	
      <h1>WikiVerse</h1>
			<h2>An interesting 📚</h2>
			{/*  passing the pages prop to pagelist */}
			<PagesList pages={pages} />
			<button onClick={() => setIsAddingArticle(!isAddingArticle)}>Create a new Article!</button>
				{
      				isAddingArticle && <Form />
     			}
			
			
		</main>
	)
}
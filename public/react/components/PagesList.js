import React from 'react';
import { useState } from 'react'
import { useEffect } from 'react'
import { Page } from './Page';
// import apiURL from '../api';


export const PagesList = ({pages}) => {

// 	const [users, setUsers] = useState([])

// async function fetchUsers(){
// 	try {
// 	  const response = await fetch(`${apiURL}/users`);
// 	  const usersData = await response.json();
// 	  setUsers(usersData);
// 	} catch (err) {
// 	  console.log("Oh no an error in users! ", err)
// 	}
//   }

// useEffect(() => {
// 	fetchUsers();
// }, []);

	return <>
		{
			pages.map((page, idx) => {
				return <Page page={page} key={idx} />
			})
		}
		{/* {
			users.map((author) => {
				return <Page author={author}/>
			})
		} */}

	</>
} 

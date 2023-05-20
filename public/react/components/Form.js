import React from 'react'
import { useState } from 'react'

export const Form = () => {

    const [title, setTitle] = useState()
    const [content, setContent] = useState()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [tags, setTags] = useState()

    return 
        <>
            <form className= "form" onSubmit={handleSubmit} aria-label="form">
                <h3>Add Page</h3>
                <input className= "title" type="text" aria-label= "title" value={title} onChange={e => setTitle(e.target.value)} placeholder="Add Title" ></input>
                <input className= "content" type="text" aria-label="content" value={content} onChange={e => setContent(e.target.value)} placeholder="Add your Content" ></input>
                <input className= "name" type="text" aria-label="name" value={name} onChange={e => setName(e.target.value)} placeholder="Name" ></input>
                <input className= "email"type="text" aria-label="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email Address" ></input>
                <input className= "tags" type="text" aria-label="tags" value={tags} onChange={e => setTags(e.target.value)} placeholder="Tags#" ></input>
                <button type="submit">Create Page</button>

            </form>
        </>

}
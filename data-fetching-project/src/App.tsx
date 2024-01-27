import { type ReactNode } from 'react';
import {useState,useEffect} from 'react';
import { getFetchApi } from './http.ts';
import BlogPosts, {type BlogPost } from './components/BlogPosts';
import fetchImg from "./assets/data-fetching.png";
import ErrorMessage from './components/ErrorMessage.tsx';

type RowDataBlogPost = {
id:number,
userId:number,
title:string,
body:string
}

function App() {
const [fetchData,setFetchData]=useState<BlogPost[]>();
const [isLoading,setIsLoading]=useState(false);
const [error,setError]=useState<string>();

useEffect(() => {

  async function fetchPost(){
    setIsLoading(true)
    try{

    const data = await getFetchApi('https://jsonplaceholder.typicode.com/posts') as RowDataBlogPost[];
    const blogPosts:BlogPost[]  = data.map(rawPost => {
      return {
        id:rawPost.id,
        title:rawPost.title,
        text:rawPost.body
      }
    })
    setFetchData(blogPosts)
    }catch(error){
      if(error instanceof Error){
        setError(error.message)
      }
    }
    setIsLoading(false)

}
fetchPost();

},[])

let content:ReactNode;

if(isLoading){
  content=<p id="loading">Loading...</p>
}
if(error){
  content=<ErrorMessage text={error}/>
}

if(fetchData){
  content= <BlogPosts  posts={fetchData} />
}

  return <main>
    <img src={fetchImg} alt=""/>
    {content}
  </main>;
}

export default App;

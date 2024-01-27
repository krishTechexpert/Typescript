export async function getFetchApi(url:string){
 const response=await fetch(url);
 if(!response.ok){
  throw new Error('Failed to fetch')
 }
 const data = await response.json() as unknown;
 return data;
}

//you can also create generic example
// export async function getFetchApi1<T>(url:string):T{
//   const response=await fetch(url);
//   if(!response.ok){
//    throw new Error('Failed to fetch')
//   }
//   const data = await response.json() as unknown;
//   return data ;
//  }

//  const data = await getFetchApi1<RawDataBlogPost[]>(
//   'https://jsonplaceholder.typicode.com/posts'
// );


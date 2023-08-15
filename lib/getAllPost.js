export default async function getAllPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");

    if(!res.ok){
        throw new Error("Data not fount")
    }


    return res.json();






 
}
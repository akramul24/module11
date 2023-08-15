import getAllPosts from "@/lib/getAllPost"
import Link from "next/link";


export default async function Blog(){

    const posts = await getAllPosts();

    
    return(
        <div classesName="w-100 h-500 justify-center text-center bg-cyan-600">
        <h1 className="font-bold text-lg w-100 h-100 justify-center text-center">This is Data fetching</h1>

        <div className="mt-5">

            {posts.map((post) => {
            return <p key={post.id}><Link href={`/blog/${post.id}`}>{post.id} - {post.title}</Link></p>
            })}

        </div>
        </div>
    )
}
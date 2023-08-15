import getBlogPost from "@/lib/getBlogPost";


export default async function SinglePost({params}){

    const id = params.id;
   const post = await getBlogPost(id);

    return(
        <section>
            <h1 className="font-bold text-lg w-100 h-100 justify-center align-middle">{post.title}</h1>
            <div className="mt-5">{post.body}</div>
        </section>
    )

}
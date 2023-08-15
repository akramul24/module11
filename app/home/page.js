import Link from "next/link";
import classes from "../components/hompage.module.css"


export default function HomePage(){
    return(
        <section className={classes.nav}>

            <div className="flex space-x-10 ml-10 pt-2">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>

        </div>
            
        </section>
     
    )
}
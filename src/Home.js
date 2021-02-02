import { useState, useEffect } from 'react'
import BlogList from './BlogsList'
const Home = () => {

    const [blogs, setBlogs] =  useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const url = 'http://localhost:8000/blogs'
        fetch(url)
        .then(res => {
            if(!res.ok) {
                throw Error('Data is not working')
            }
            return res.json()
        })
        .then(data => {
            setBlogs(data)
            setIsPending(false)
            setError(null)
        })
        .catch((err) => {
            setIsPending(false)
            setError(err.message)
        })
        
    }, []);

    return ( 
        <div className="home">
            { error && <div>{error}</div> }
            { isPending && <div>Loading...</div>}
           {blogs && <BlogList blogs={blogs} title='My personal blog'/>}
           {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'carlos')} title='Other blog' handleDelete={handleDelete} /> */}
        </div>
     );
}
 
export default Home;


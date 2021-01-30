import { useState, useEffect } from 'react'
import BlogLists from './BlogsList'
const Home = () => {

    const [blogs, setBlogs] =  useState(null)

    const handleDelete = id => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(() => {
        const url = 'http://localhost:8000/blogs'
        fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => {
            setBlogs(data)
        })
        
    }, []);

    return ( 
        <div className="home">
           {blogs && <BlogLists blogs={blogs} title='My personal blog' handleDelete={handleDelete}/>}
           {/* <BlogLists blogs={blogs.filter((blog) => blog.author === 'carlos')} title='Other blog' handleDelete={handleDelete} /> */}
        </div>
     );
}
 
export default Home;


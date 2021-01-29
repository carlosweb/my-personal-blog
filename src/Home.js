import { useState } from 'react'
import BlogLists from './BlogsList'
const Home = () => {

    const [blogs, setBlogs] =  useState([
        { title: 'My new website', body: 'lorem ipsum', author: 'carlos', id: 1 },
        { title: 'Welcome to the blog', body: 'lorem ipsum', author: 'joão', id: 2 },
        { title: 'My old website', body: 'lorem ipsum', author: 'Beto', id: 3 },
        { title: 'My great website', body: 'lorem ipsum', author: 'Paloma', id: 4 }
    ])

    return ( 
        <div className="home">
           <BlogLists blogs={blogs} title='My personal blog'/>
        </div>
     );
}
 
export default Home;


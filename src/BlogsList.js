const BlogLists = ( { blogs, title, handleDelete } ) => {

    return (
        <div className="blog-list">
            <h1>{ title }</h1>
            {blogs.map((blog) => (
                <div className="blog-view" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
                </div>
            ))}
        </div>
    );
}

export default BlogLists;
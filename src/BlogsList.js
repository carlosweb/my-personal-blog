const BlogLists = ( { blogs, title } ) => {

    return (
        <div className="blog-list">
            <h1>{ title }</h1>
            {blogs.map((blog) => (
                <div className="blog-view" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogLists;
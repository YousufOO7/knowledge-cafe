import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({bookmarkAdd, markAsReadBtn}) => {
    
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } ,[])


    return (
        <div className='md:w-2/3 border-2'>
            <h3 className="text-4xl">Blogs: {blogs.length}</h3>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    bookmarkAdd={bookmarkAdd}
                    markAsReadBtn={markAsReadBtn}
                    ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    Blogs: PropTypes.object.isRequired,
    bookmarkAdd: PropTypes.func,
    markAsReadBtn: PropTypes.func
};

export default Blogs;
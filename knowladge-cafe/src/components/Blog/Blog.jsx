import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, bookmarkAdd, markAsReadBtn}) => {
    const {title, cover, author_img, author, posted_date, id, reading_time, hashtags} = blog;
    return (
        <div className='mb-20 space-y-2 '>
            <img src={cover} alt="" />
            <div className='flex justify-between items-center mb-4 '>
                <div className='flex'>
                <img className='w-12' src={author_img} alt="" />
                <div className='ml-2'>
                    <h4 className="text2xl font-bold">{author}</h4>
                    <p>{posted_date}</p>
                </div>
                </div>
                <div className='items-center flex'>
                    <p>{reading_time} min read</p>
                    <button 
                    onClick={() => bookmarkAdd(blog)}
                    className='text-2xl ml-2 text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="#"> #{hash}</a></span>)
                }
            </p>

            <button 
            onClick={() => markAsReadBtn(id,reading_time)}
            className='text-purple-700 font-bold underline'
            >Mark as read</button>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object,
    bookmarkAdd: PropTypes.func,
    markAsReadBtn: PropTypes.func
};

export default Blog;
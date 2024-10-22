import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks, readTime}) => {
    return (
        <div className='md:w-1/3 ml-2 bg-gray-300'>
            <div className='bg-slate-200 p-4 m-4 rounded-xl'>
            <h2 className="text-2xl ml-2">Time spend on read: {readTime} min</h2>
            </div>
            
            <h2 className="text-3xl text-center ">Bookmarked Blogs: {bookmarks.length}</h2>
            {
               bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readTime: PropTypes.number
};

export default Bookmarks;
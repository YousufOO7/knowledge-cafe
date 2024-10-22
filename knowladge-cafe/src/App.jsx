import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const bookmarkAdd = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const markAsReadBtn = (id,time) => {
    setReadTime(readTime + time)
    // remove bookmarks
    const remainingBookMark = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookMark);
  }

  return (
    <>
     
      <Header></Header>
     <div className='flex md:max-w-6xl mx-auto'>
        <Blogs bookmarkAdd={bookmarkAdd}
              markAsReadBtn={markAsReadBtn}
        ></Blogs>
        <Bookmarks 
        bookmarks={bookmarks}
        readTime={readTime}
        ></Bookmarks>
     </div>
    </>
  )
}

export default App

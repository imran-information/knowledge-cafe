import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookMarks/Bookmarks'
import Header from './components/header/Header'

function App() {
  const [bookMarks, setBookMarks] = useState([])
  const [markTime, setMarkTime] = useState(0)

  const handleAddBookMark = blog => {
    const newBookMarks = [...bookMarks, blog]
    setBookMarks(newBookMarks)
  }

  const handleMarkAsRead = (id, time) => {
    setMarkTime(markTime + time)
    const remainingBookMark = bookMarks.filter(bookMarks => bookMarks.id !== id);
    setBookMarks(remainingBookMark)
  }

  return (
    <>

      <Header></Header>
      <section className='w-10/12 mx-auto md:flex'>
        <Blogs handleAddBookMark={handleAddBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookMarks={bookMarks} markTime={markTime} ></Bookmarks>
      </section>


    </>
  )
}

export default App

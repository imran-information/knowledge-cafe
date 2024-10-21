import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handleAddBookMark, handleMarkAsRead }) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const blogsDataLoad = async () => {
            const res = await fetch('blogs.json')
            const data = await res.json()
            setBlogs(data);

        }
        blogsDataLoad()
    }, []);

    return (
        <div className="w-2/3">
            <h2 className="md:text-2xl font-bold">Blogs: {blogs.length}</h2>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleAddBookMark={handleAddBookMark} handleMarkAsRead={handleMarkAsRead}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleAddBookMark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
}

export default Blogs;
import { CiBookmarkCheck } from "react-icons/ci";
import PropTypes from 'prop-types';
const Blog = ({ blog, handleAddBookMark, handleMarkAsRead }) => {
    const { id, cover_img, author_img, author_name, post_date, title, reading_time, hash_tag } = blog

    return (
        <div className=' mb-10'>
            <img className='rounded' src={cover_img} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex items-center mt-3'>
                    <img className='w-20' src={author_img} alt="" />
                    <div>
                        <h3 className="text-xl font-bold">{author_name}</h3>
                        <p>{post_date}</p>
                    </div>
                </div>
                <div className="flex">
                    <span>0{reading_time} min read</span>
                    <button onClick={() => handleAddBookMark(blog)} className="ml-3 text-2xl text-pink-600"><CiBookmarkCheck></CiBookmarkCheck></button>
                </div>
            </div>
            <h1 className='text-4xl font-bold mb-4'>{title}</h1>
            {
                hash_tag.map((has, i) => <a key={i} className='ml-4' href="">{has}</a>)

            }
            <hr className='my-6' />
            <button onClick={() => handleMarkAsRead(id, reading_time)} className="text-pink-500 underline">Mark as read</button>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookMark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blog;


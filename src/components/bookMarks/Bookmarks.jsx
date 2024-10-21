import PropTypes from 'prop-types';
import Bookmark from "../bookMark/Bookmark";
const Bookmarks = ({ bookMarks, markTime }) => {
    return (
        <div className="w-1/3 bg-slate-100 p-3 ml-6 rounded mt-8">
            <h2 className='text-pink-500 text-lg text-center font-semibold m-4 py-5 border-2 rounded-lg bg-pink-50 border-pink-500' >Spent time on read: {markTime}  min</h2>
            <h3 className="text-lg text-center font-semibold mt-6">Bookmarked Blogs: {bookMarks.length}</h3>
            {
                bookMarks.map((mark, id) => <Bookmark key={id} bookMark={mark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookMarks: PropTypes.array.isRequired,
    markTime: PropTypes.number.isRequired

}
export default Bookmarks;
import PropTypes from 'prop-types';

const Bookmark = ({ bookMark }) => {
    const { title } = bookMark
    return (
        <div className="bg-slate-200 m-4 rounded">

            <h2 className="py-8 ml-4 text-lg font-semibold">{title}</h2>

        </div>
    );
};

Bookmark.propTypes = {
    bookMark: PropTypes.object.isRequired,

}

export default Bookmark;
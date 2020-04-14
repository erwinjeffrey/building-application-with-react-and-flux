import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const courseList = props => {
  const { deleteCourse, courses } = props;
  const renderRow = course => {
    return (
      <tr key={course.id}>
        <td>
          <button
            className="btn btn-outline-danger"
            onClick={() => onDeleteCourse(course.id)}
          >
            Delete
          </button>
        </td>
        <td>
          <Link to={'/course/' + course.slug}>{course.title}</Link>
        </td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
      </tr>
    );
  };

  const onDeleteCourse = courseId => {
    deleteCourse(courseId);
    toast.success('Course has been deleted');
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>{courses.map(renderRow)}</tbody>
    </table>
  );
};

/*courseList.propTypes = {
  courses: PropTypes.array.isRequired
};*/

courseList.propTypes = {
  deleteCourse: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired
    })
  )
};

export default courseList;

import React from 'react';
import colors from './colors';

const CourseTable = ({ courses, onCourseRemove }) => {

    return (
        <div className="course-container">
            {courses.length > 0 ? (
                <ul>
                    {courses.map((course, index) => (
                        <li key={course.code} style={{ marginBottom: '10px'}}>
                            <div className="course-box-enrolment" style={{ background: `${colors[index % colors.length]}`
                        }}>
                                <div className="course-info" style = {{marginLeft: '10px'}}>
                                    <p className="course-code">{course.code}</p>
                                </div>

                                <button
                                    onClick={() => onCourseRemove(course)}
                                    style={{
                                        marginLeft: 'auto',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <img
                                        src={require('./images/delete.png')}
                                        className="button-image"
                                        alt="Delete"
                                        style={{ width: '20px', height: '20px' }}
                                    />
                                </button>
                            </div>
                        </li>
                    ))}

                </ul>
            ) : (
                <p>No courses selected.</p>
            )}
        </div>
    );
};

export default CourseTable;
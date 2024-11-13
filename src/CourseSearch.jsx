import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Filters from './Filters';
import courses from './courses.js';
import CourseTable from './CourseTable';
import Header from './Header.jsx';
import { Link, useLocation } from 'react-router-dom';

const CourseSearch = () => {
    const location = useLocation();
    const { selectedCourses: passedCourses } = location.state || { selectedCourses: [] }; //get passed courses from Schedule
    const { plannedCourses: passedPlannedCourses } = location.state || { plannedCourses: [] };
    const [selectedFilter, setSelectedFilter] = useState('all'); 
    const [selectedCourse, setSelectedCourse] = useState(null); 
    const [selectedCourses, setSelectedCourses] = useState(passedCourses || []); //initialize selected courses with data from Schedule, or else empty array
    const [plannedCourses, setPlannedCourses] = useState(passedPlannedCourses || []); //initialize planned courses with data from Planner, or else empty array
    

    //filter the courses based on the selected filter
    const filteredCourses = (() => {
        switch (selectedFilter) {
            case 'all':
                return courses;
            case 'planned':
                return plannedCourses; 
            case 'required':
                return courses.filter(course => course.filter === 'required');
            default:
                return courses;
        }
    })();

    const onCourseSelect = (course) => {
        setSelectedCourse(course); //use to display course information
    };



    
    const handleAddCourseToTable = () => {
        if (selectedCourse && !selectedCourses.some(course => course.code === selectedCourse.code)) {
            setSelectedCourses([...selectedCourses, selectedCourse]); //add course to the table
        }
    };

    const handleCourseRemove = (courseToRemove) => {
        setSelectedCourses(selectedCourses.filter(course => course.code !== courseToRemove.code)); //remove course from table
    };

    return (
        <>
        <Header text = "Timetable Home Page"/>
        <div className="container">
            <Link to="/planner"> 
                <div className="to_planner">
                Academic Planner ▼
                </div>
            </Link>
            <div className="vertical-stack-container">
                <div style = {{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
                    <div className="box" style={{ display: 'flex', alignItems: 'flex-start', width: '100%', 
                        }}>
                        <div style={{ flex: '0 1 300px', paddingRight: '20px' }}>
                            <Filters selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} 
                            />
                            <SearchBar 
                            courses={filteredCourses} 
                            onCourseSelect={onCourseSelect} />
                        </div>
                        {selectedCourse && (
                            <div className="course-widget">
                                <h2>Selected Course Details:</h2>
                                <p><strong>{selectedCourse.code}</strong> - {selectedCourse.name}</p>
                                <p>{selectedCourse.description}</p>
                                <p>Prerequisites: {selectedCourse.prerequisites}</p>
                                <p>Antirequisites: {selectedCourse.antirequisites}</p>
                                <p>{selectedCourse.units} Unit(s)</p>
                                <button className="add-to-plan-button" onClick={handleAddCourseToTable}>
                                        + Add to Course Table
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="box" style = {{width: "50%"}}>
                        <div className="vertical-stack-container">
                            <div class="help-container">
                                <button class="select-button">
                                <img src={require('./images/help.png')} alt="Search" 
                                className="button-image" 
                                />
                                </button>
                            </div>
                            <div style = {{marginLeft: "auto"}}>
                                {selectedCourses.length > 0 && <CourseTable courses={selectedCourses} onCourseRemove={handleCourseRemove} />}
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/schedule" state={{ selectedCourses }}> 
                    <div className="to_schedule">
                        Proceed to Schedule ▶
                    </div>
                </Link>
            </div>
        </div>
        </>
    );
};

export default CourseSearch;

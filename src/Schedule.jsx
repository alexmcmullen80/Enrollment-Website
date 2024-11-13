import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import colors from './colors';
import Header from './Header';

function Schedule() {
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedCourses } = location.state || { selectedCourses: [] }; //make it an empty array if no data passed
    const [selectedCourse, setSelectedCourse] = useState(null); //for viewing extra info on a selected course
    const [expandedCourse, setExpandedCourse] = useState(null);
    
    //set selected courses to passed in courses
    const [courses, setCourses] = useState(selectedCourses);

    const handleReturnToTimetable = () => {
        navigate("/", {state: { selectedCourses: courses}}); //pass selected courses back to timetable homepage
    }

    //function to handle removing a course from the schedule
    const handleRemoveCourse = (courseToRemove) => {
        //filter out the course to remove
        const updatedCourses = courses.filter(course => course.code !== courseToRemove.code);
        setCourses(updatedCourses); 
        //reset selected course if the removed course was selected
        if (selectedCourse && selectedCourse.code === courseToRemove.code) {
          setSelectedCourse(null); // Clear selected course if removed
      }
    };

    const handleCourseClick = (course) => {
      if (expandedCourse === course.code) {
          setExpandedCourse(null); 
      } else {
          setExpandedCourse(course.code); 
      }
      setSelectedCourse(course); 
  };

    return (
        <>
            <Header text = "Course Schedule"/>
            <div className="container">
              <div className="vertical-stack-container">
                <div style = {{display: "flex", flexDirection: "row", width: "100%"}}>
                <div className="box">
                    <div className="box1-container">
                      <div className="course-container">
                              {courses.length === 0 ? (
                                  <p>No courses selected yet.</p>
                              ) : (
                                  courses.map((course, index) => (
                                      <div key={index} className={`course-box-schedule ${expandedCourse === course.code ? 'expanded' : ''}`}
                                      onClick = {() => handleCourseClick(course)}>
                                        {/* <div className="course-box-header" style={{ background: `linear-gradient(to bottom, ${colors[index % colors.length]} 50%, #FFFFFF)`, cursor: 'pointer' }}> */}
                                        <div className="course-box-header" style={{ background: `${colors[index % colors.length]}`, cursor: 'pointer' }}>
                                          <div className="course-info">
                                              <p className="course-code">{course.code}</p>
                                          </div>
                                          <button 
                                              onClick={(e) => {e.stopPropagation(); handleRemoveCourse(course);}} //prevent course box click when delete is pressed
                                              style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer' }}
                                          >
                                              <img 
                                                  src={require('./images/delete.png')} 
                                                  className="button-image"
                                                  alt="Delete"
                                                  style={{ width: '20px', height: '20px' }} 
                                              />
                                          </button>
                                        </div>
                                        {expandedCourse === course.code && (
                              <div className="course-widget1">
                                  <h3>{selectedCourse.name}</h3>
                                  <p><strong>Code:</strong> {selectedCourse.code}</p>
                                  <p><strong>Professor:</strong> {selectedCourse.prof}</p>
                                  <p><strong>Seats Open:</strong> {selectedCourse.seats}</p>
                                  <p><strong>Description:</strong> {selectedCourse.description}</p>
                                  <p><strong>Prerequisites:</strong> {selectedCourse.prerequisites}</p>
                                  <p><strong>Antirequisites:</strong> {selectedCourse.antirequisites}</p>
                                  <p><strong>Units:</strong> {selectedCourse.units}</p>

                              </div>
                            )}
                          </div>
                        ))
                      )}
                    </div>
                    
                  </div>
                </div>

                <div className="box">
                  <div className="vertical-stack-container">
                    <div className="timetable">
                        <div className="timetable-header">Weekly Course Schedule</div>
                        <div className="time-column">Time</div>
                        <div className="day-column">Monday</div>
                        <div className="day-column">Tuesday</div>
                        <div className="day-column">Wednesday</div>
                        <div className="day-column">Thursday</div>
                        <div className="day-column">Friday</div>

                        <div className="time-column">9:00 - 10:00</div>
                        {courses.length === 0 ? (
                            <div className="course-slot"></div>
                        ) : (
                            <div className="course-slot" style = {{backgroundColor: colors[0], textAlign: 'center'}}>{courses[0].code} LEC</div>
                        )}
                        <div className="course-slot"></div>
                        <div className="course-slot"></div>
                        {courses.length <= 1 ? (
                            <div className="course-slot"></div>
                        ) : (
                            <div className="course-slot" style = {{backgroundColor: colors[1], textAlign: 'center'}}>{courses[1].code} LEC</div>
                        )}
                        <div className="course-slot"></div>

                        <div className="time-column">10:00 - 11:00</div>
                        <div className="course-slot"></div>
                        {courses.length <= 2 ? (
                            <div className="course-slot"></div>
                        ) : (
                            <div className="course-slot" style = {{backgroundColor: colors[2], textAlign: 'center'}}>{courses[2].code} TUT</div>
                        )}
                        {courses.length <= 3 ? (
                            <div className="course-slot"></div>
                        ) : (
                            <div className="course-slot" style = {{backgroundColor: colors[3], textAlign: 'center'}}>{courses[3].code} LEC</div>
                        )}
                        <div className="course-slot"></div>
                        <div className="course-slot"></div>

                        <div className="time-column">11:00 - 12:00</div>
                        {courses.length <= 1 ? (
                            <div className="course-slot"></div>
                        ) : (
                            <div className="course-slot" style = {{backgroundColor: colors[1], textAlign: 'center'}}>{courses[1].code} TUT</div>
                        )}
                        <div className="course-slot"></div>
                        {courses.length <= 4 ? (
                            <div className="course-slot"></div>
                        ) : (
                            <div className="course-slot" style = {{backgroundColor: colors[4], textAlign: 'center'}}>{courses[4].code} LEC</div>
                        )}
                        {courses.length === 0 ? (
                            <div className="course-slot"></div>
                        ) : (
                            <div className="course-slot" style = {{backgroundColor: colors[0], textAlign: 'center'}}>{courses[0].code} TUT</div>
                        )}
                        <div className="course-slot"></div>

                        <div className="time-column">12:00 - 1:00</div>
                        <div className="course-slot"></div>
                        <div className="course-slot"></div>
                        <div className="course-slot"></div>
                        {courses.length <= 2 ? (
                            <div className="course-slot"></div>
                        ) : (
                            <div className="course-slot" style = {{backgroundColor: colors[2], textAlign: 'center'}}>{courses[2].code} LEC</div>
                        )}
                        {courses.length <= 3 ? (
                            <div className="course-slot"></div>
                        ) : (
                            <div className="course-slot" style = {{backgroundColor: colors[3], textAlign: 'center'}}>{courses[3].code} TUT</div>
                        )}

                        <div className="time-column">1:00 - 2:00</div>
                        {courses.length === 0 ? (
                            <div className="course-slot"></div>
                        ) : (
                            <div className="course-slot" style = {{backgroundColor: colors[0], textAlign: 'center'}}>{courses[0].code} LEC</div>
                        )}
                        <div className="course-slot"></div>
                        {courses.length <= 1 ? (
                            <div className="course-slot"></div>
                        ) : (
                            <div className="course-slot" style = {{backgroundColor: colors[1], textAlign: 'center'}}>{courses[1].code} LEC</div>
                        )}
                        <div className="course-slot"></div>
                        <div className="course-slot"></div>

                        <div className="time-column">2:00 - 3:00</div>
                        <div className="course-slot"></div>
                        {courses.length <= 2 ? (
                            <div className="course-slot"></div>
                        ) : (
                            <div className="course-slot" style = {{backgroundColor: colors[2], textAlign: 'center'}}>{courses[2].code} LEC</div>
                        )}
                        <div className="course-slot"></div>
                        {courses.length <= 4 ? (
                            <div className="course-slot"></div>
                        ) : (
                            <div className="course-slot" style = {{backgroundColor: colors[4], textAlign: 'center'}}>{courses[4].code} TUT</div>
                        )}
                        <div className="course-slot"></div>

                        <div className="time-column">3:00 - 4:00</div>
                        <div className="course-slot"></div>
                        <div className="course-slot"></div>
                        <div className="course-slot"></div>
                        {courses.length <= 3 ? (
                            <div className="course-slot"></div>
                        ) : (
                            <div className="course-slot" style = {{backgroundColor: colors[3], textAlign: 'center'}}>{courses[3].code} LEC</div>
                        )}
                        <div className="course-slot"></div>

                        <div className="time-column">4:00 - 5:00</div>
                        <div className="course-slot"></div>
                        <div className="course-slot"></div>
                        <div className="course-slot"></div>
                        <div className="course-slot"></div>
                        {courses.length <= 4 ? (
                            <div className="course-slot"></div>
                        ) : (
                            <div className="course-slot" style = {{backgroundColor: colors[4], textAlign: 'center'}}>{courses[4].code} LEC</div>
                        )}
                    </div>
                    <div style = {{display: "flex", flexDirection: "row", width: "30%", minWidth: "250px", justifyContent: "space-between"}}>
                      <button className="no_func">
                          <img src={require('./images/backward-arrow.png')} alt="backward-arrow" className="button-image" style = {{width: '15px', height: '15px'}} />
                      </button>
                        <div style = {{display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px"}}>
                            <strong>Result 1 of 10</strong>
                        </div>
                      <button className="no_func">
                          <img src={require('./images/forward-arrow.png')} alt="forward-arrow" className="button-image" style = {{width: '15px', height: '15px'}} />
                      </button>
                      
                    </div>
                    
                  </div>
                </div>
                </div>
                <div style = {{display: "flex", flexDirection: "row", width: "100%"}}>
                  <div className="to_timetable2" onClick = {handleReturnToTimetable}>
                    ◀ Return to Timetable
                  </div>
                </div>
                <div style = {{display: "flex", flexDirection: "row", width: "100%"}}>
                    <div className="to_enroll">
                        Enroll ▶
                    </div>
                </div>
                
              </div>
            </div>
            
            
        </>
    );
}

export default Schedule;

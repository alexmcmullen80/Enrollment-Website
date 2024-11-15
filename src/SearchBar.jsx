import React, { useState } from 'react';
import Filters from './Filters';

const SearchBar = ({ courses, onCourseSelect, plannedCourses}) => {
    const [inputValue, setInputValue] = useState('');
    const [selectedCourse, setSelected] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('all');
    const requiredCourses = courses.filter(course => course.filter === 'required');

    function filteredCourses(){
      switch (selectedFilter) {
        case 'all':
            return(courses);
        case 'planned':
            return(plannedCourses);
        case 'required':
            return(requiredCourses);
        default:
            return(courses);}};

      function changeSugestions(){
        const value = inputValue;
        if (value) {
            const filteredSuggestions = filteredCourses().filter(course =>
                course.name.toLowerCase().includes(value.toLowerCase()) ||
                course.code.toLowerCase().includes(value.toLowerCase())
            );
            return(filteredSuggestions);
        }
        else {
            return(filteredCourses());
        }
      };

    const handleChange = (event) => {
      const value = event.target.value;
      setInputValue(value);};


    const handleSuggestionClick = (course,target) => {
        onCourseSelect(course);
        setSelected(course);
        target.style.backgroundColor = '#E6E3F3';

    };

    const handleSetColour = (course,target) => {
        if (course==selectedCourse){
          target.style.backgroundColor = '#E6E3F3';}
        else {
          target.style.backgroundColor = 'white';}

    };

    const onFilterSelect = (filter) => {
        setSelectedFilter(filter); //use to display course information
    };

    function tabs(){
      return(
      <Filters
      selectedFilter={selectedFilter}
      onFilterSelect={onFilterSelect}
      />)};

    function results(s){
      return (
          <div style={{ position: 'relative'}}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div className="select-container">
                      <input
                          type="text"
                          value={inputValue}
                          onChange={handleChange}
                          onKeyDown={handleChange}
                          placeholder="Search for a course..."
                          className="search-input"
                      />
                      <img src={require('./images/search.png')} alt="Search"
                      className="button-image"
                      />
                  </div>
                  <div className="select-container">
                      <button className="select-button">
                          <img src={require('./images/filter.png')} alt="Filter" className="button-image" />
                      </button>
                  </div>
              </div>

                  <ul className="search-dropdown">
                      {s.map((course, index) => (
                          <li
                              key={index}
                              onClick={(e) => handleSuggestionClick(course,e.target)}
                              style={{
                                  padding: '10px',
                                  cursor: 'pointer',
                                  borderBottom: '1px solid #D4CDF4',
                                  borderRight: '1px solid #D4CDF4',
                                  borderLeft: '1px solid #D4CDF4',
                                  backgroundColor: (course==selectedCourse) ? '#E6E3F3' : 'white',
                              }}
                              onMouseEnter={(e) => e.target.style.backgroundColor = '#D4CDF4'}
                              onMouseLeave={(e) => handleSetColour(course,e.target)}
                          >
                              {course.code} - {course.name}

                          </li>
                      ))}
                  </ul>

          </div>
      );
    };

    return(
    <div className="vertical-stack-container">
        <div style = {{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
            <div className="box" style={{ display: 'flex', alignItems: 'flex-start', width: '100%',}}>

                <div style={{ flex: '0 1 300px', paddingRight: '20px' }}>
                {tabs()}
                {results(changeSugestions())}
            </div></div></div></div>
              )



};

export default SearchBar;

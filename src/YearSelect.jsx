import React from 'react';

const YearSelect = ({ currentYear, setCurrentYear, allYears, setAllYears, years, setYears }) => {

    const handlePlusClick = () => {
        if (years.length < 6) {
            var newYears = years.slice();
            newYears.push(newYears.length + 1);
            setYears(newYears);
            handleYearClick(newYears.length)
        }
    }

    const handleMinusClick = () => {
        if (years.length > 1) {
            var newYears = years.slice();
            newYears.pop();
            setYears(newYears);
            handleYearClick(newYears.length)
        }
    }

    const handleYearClick = (year) => {
        setAllYears(false);
        setCurrentYear(year);
    }

    return (
        <div className="tab">
            <button className={(allYears) ? "link active" : "link"} onClick={() => setAllYears(true)}>All</button>
            {years.map((year) => (
                <button className={(currentYear === year && !allYears) ? "link active" : "link"} onClick={() => handleYearClick(year)}>{year}</button>
            ))}
            <button className="link" onClick={() => handlePlusClick()}>+</button>
            <button className="link" onClick={() => handleMinusClick()}>-</button>
        </div>
    );
};

export default YearSelect;
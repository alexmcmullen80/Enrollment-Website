import React from 'react';

const Filters = ({selectedFilter, onFilterSelect }) => {

  const handleTabClick = (filter) => {
      onFilterSelect(filter)
    };

    return (
        <div className="box3-container">
            <div className="tab">
                <button
                    onClick={() => handleTabClick('all') }
                    className={selectedFilter === 'all' ? 'active' : ''}>
                    All
                </button>
                <button
                    onClick={() => handleTabClick('required')}
                    className={selectedFilter === 'required' ? 'active' : ''}>
                    Required
                </button>
                <button
                    onClick={() => handleTabClick('planned')}
                    className={selectedFilter === 'planned' ? 'active' : ''}>
                    Planned
                </button>
            </div>
        </div>
    );
};

export default Filters;

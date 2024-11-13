import React from 'react';

const Filters = ({ selectedFilter, setSelectedFilter }) => {

    return (
        <div className="box3-container">
            <div className="tab">
                <button 
                    onClick={() => setSelectedFilter('all') }
                    className={selectedFilter === 'all' ? 'active' : ''}>
                    All
                </button>
                <button 
                    onClick={() => setSelectedFilter('required')}
                    className={selectedFilter === 'required' ? 'active' : ''}>
                    Required
                </button>
                <button 
                    onClick={() => setSelectedFilter('planned')}
                    className={selectedFilter === 'planned' ? 'active' : ''}>
                    Planned
                </button>
            </div>
        </div>
    );
};

export default Filters;

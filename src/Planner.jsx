import { Link } from 'react-router-dom';
import Requirements from './Requirements';
import CourseSearchPlanner from './CourseSearchPlanner';
import Header from './Header';

function Planner() {

    return (
        <>
            <Header text = "Academic Planner"/>
            <div className="container">
                
                <div className="vertical-stack-container">
                    <div style = {{display: "flex", flexDirection: "row", width: "100%"}}>
                        <div className="box" style={{flex:'0.3'}}>
                            <Requirements />
                        </div>
                        <CourseSearchPlanner />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Planner;

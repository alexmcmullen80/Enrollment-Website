
import './App.css';
import Header from './Header';
import Schedule from './Schedule';
import CourseSearch from './CourseSearch';
import Planner from './Planner'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<CourseSearch />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/planner" element={<Planner />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;

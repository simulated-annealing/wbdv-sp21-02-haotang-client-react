import { BrowserRouter } from 'react-router-dom';
import './App.css';
import CourseManager from './components/course-manager'
import Home from './components/home'

function App() {
  return (
    <BrowserRouter>
      <div className='container-fluid'>
        <Home/>
        <CourseManager/>
      </div>
    </BrowserRouter>
  );
}

export default App;

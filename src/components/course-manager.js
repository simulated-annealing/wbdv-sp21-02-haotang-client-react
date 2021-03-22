import React from 'react'
import { Link, Route } from 'react-router-dom'
import CourseTable from './course-table/course-table'
import CourseGrid from './course-grid/course-grid'
import CourseEditor from './course-editor/course-editor'
import courseService from '../services/course-service'


export default class CourseManager extends React.Component {

    state = {
        courses: [],
        title:''
    }

    componentDidMount = () => 
        courseService.findAllCourses().then(courses => this.setState({courses}))
    
    createCourse = (courseToCreate) => {
        if (courseToCreate.title.trim() === '') {
            alert("Please provide an non empty course title.")
            return
        }
        courseService.createCourse(courseToCreate).then(course => 
            this.setState(prevState => ({
                    ...prevState,
                    courses: [
                        ...prevState.courses,
                        course
                    ],
                    title:''
                })))
    }

    deleteCourse = (courseToDelete) => 
        courseService.deleteCourse(courseToDelete._id).then(status =>
            this.setState(prevState => ({
                ...prevState,
                courses:prevState.courses.filter(course => course._id !== courseToDelete._id)
            })))
    
    updateCourse = (courseId, course) =>
            courseService.updateCourse(courseId, course).then(status =>
                this.setState((prevState) => ({
                        ...prevState,
                        courses: prevState.courses.map(c => c._id === courseId ? course: c)
                })))
    
    onCreateCourseClicked = () => 
        this.createCourse({title:this.state.title, owner:"me", lastModified:new Date().toLocaleString()})

    render = () => (
        <div>
            <Route path='/courses/(table|grid)' exact={true}>
            <div className="wbdv-sticky-nav-bar">
                <div className="row">
                    <Route path='/courses/table'>
                        <div className="col-1">
                            <Link to="/courses/grid">
                                <i className="fas fa-th fa-2x"></i>
                            </Link>
                        </div>
                    </Route>
                    <Route path='/courses/grid'>
                        <div className="col-1">
                            <Link to="/courses/table">
                                <i className="fas fa-bars fa-2x"></i>
                            </Link>
                        </div>
                    </Route>
                    <div className="col-2">
                        <label className="col-form-label">
                            Course Manager
                        </label>
                    </div>
                    <div className="col-8">
                        <input className="form-control" 
                            placeholder="Add New Course Title Here"
                            onChange={event => this.setState(prevState => ({...prevState, title:event.target.value}))}
                            value={this.state.title} />
                    </div>
                    <div className="col-1">
                        <i className="fas fa-plus-circle fa-2x Green-Icon" 
                            onClick={()=>this.onCreateCourseClicked()}>
                        </i>
                    </div>
                </div>
            </div>
            <div>
                <i className="fas fa-plus-circle fa-4x Fixed-Buttom-Right Green-Icon" 
                    onClick={()=>this.onCreateCourseClicked()}>
                </i>
            </div>
            </Route>

            <div>
                <Route path='/courses/table' exact={true}>
                    <CourseTable courses={this.state.courses} 
                        deleteCourse={this.deleteCourse}
                        updateCourse={this.updateCourse}/>
                </Route>
                <Route path='/courses/grid' exact={true}>
                    <CourseGrid courses={this.state.courses}
                        deleteCourse={this.deleteCourse}
                        updateCourse={this.updateCourse}/>
                </Route>
                <Route path={[
                    '/courses/:layout/edit/:courseId',
                    '/courses/:layout/edit/:courseId/modules/:moduleId',
                    '/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId',
                    '/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId',
                    '/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets/:widgetId']}
                    exact={true}
                    render={props => <CourseEditor props={props}/>}>
                </Route>
            </div>
        </div>)
} 

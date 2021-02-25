import React from 'react'
import CourseRow from './course-row'


export default class CourseTable extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container-fluid Course-Grid">
                <h1>Course Table</h1>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col" className="d-none d-md-table-cell">Owned By</th>
                            <th scope="col" className="d-none d-lg-table-cell">Modified</th>
                            <th scope="col"><i className="fas fa-sort-alpha-up float-right"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.courses.map((course, idx)=> (
                                <CourseRow key={idx}
                                    deleteCourse={this.props.deleteCourse}
                                    updateCourse={this.props.updateCourse}
                                    course={course}
                                    title={course.title}
                                    owner={course.owner}
                                    lastModified={course.lastModified}/>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
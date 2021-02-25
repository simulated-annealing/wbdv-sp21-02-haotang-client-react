import React from 'react'
import CourseCard from './course-card'

const CourseGrid = ({courses, deleteCourse, updateCourse}) =>
    <div className='container-fluid Course-Grid'>
        <h1>
            Course Grid
        </h1>
        <div className='row'>
        {
            courses.map((course, idx) =>
                <CourseCard key={idx}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}
                        course={course}
                        title={course.title}
                        owner={course.owner}
                        lastModified={course.lastModified}/>
            )
        }
        </div>
    </div>

export default CourseGrid
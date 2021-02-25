import React from 'react'
import { Route } from 'react-router-dom'


const CourseEditor = ({props}) =>
<Route path="/courses/editor">
<div className="container">
<div className="row">
    <div className="col-3">
    <h3>
        CS5610 - WebDev
        <i className="fas fa-arrow-left Blue-Icon" 
            onClick={()=>props.history.goBack()}>
        </i>
    </h3>
    </div>
    <div className="col-9">
        <ul className="nav nav-tabs">
            <li className="nav-item wbdv-space-nav-items">
                <a className="nav-link active" href="#">Build</a>
            </li>
            <li className="nav-item wbdv-space-nav-items">
                <a className="nav-link" href="#">Pages</a>
            </li>
            <li className="nav-item wbdv-space-nav-items">
                <a className="nav-link" href="#">Theme</a>
            </li>
            <li className="nav-item wbdv-space-nav-items">
                <a className="nav-link" href="#">Store</a>
            </li>
            <li className="nav-item wbdv-space-nav-items">
                <a className="nav-link" href="#">Apps</a>
            </li>
            <li className="nav-item wbdv-space-nav-items">
                <a className="nav-link" href="#">Settings</a>
            </li>
            <li className="list-group-item">
                <i className="fas fa-plus-circle"></i>
            </li>
        </ul>
    </div>
</div>

<div className="row">
    <div className="col-3">
        <ul className="list-group">
            <li className="list-group-item">
                Module1 - jQuery 
                <i className="far fa-trash-alt float-right"></i>
            </li>
            <li className="list-group-item active">
                Module2 - React
                <i className="far fa-trash-alt float-right"></i>
            </li>
            <li className="list-group-item">
                Module3 - Redux
                <i className="far fa-trash-alt float-right"></i>
            </li>
            <li className="list-group-item">
                Module4 - Native
                <i className="far fa-trash-alt float-right"></i>
            </li>
            <li className="list-group-item">
                Module5 - Angular
                <i className="far fa-trash-alt float-right"></i>
            </li>
            <li className="list-group-item">
                Module6 - Node
                <i className="far fa-trash-alt float-right"></i>
            </li>
            <li className="list-group-item">
                Module7 - Mongo
                <i className="far fa-trash-alt float-right"></i>
            </li>
            <li className="list-group-item">
                <i className="fas fa-plus-circle"></i>
            </li>
        </ul>
    </div>
    <div className="col-9">
        <ul className="nav nav-pills">
            <li className="nav-item wbdv-space-nav-items">
                <a className="nav-link" href="#">Topic 1</a>
            </li>
            <li className="nav-item wbdv-space-nav-items">
                <a className="nav-link" href="#">Topic 2</a>
            </li>
            <li className="nav-item wbdv-space-nav-items">
                <a className="nav-link active" href="#">Topic 3</a>
            </li>
            <li className="nav-item wbdv-space-nav-items">
                <a className="nav-link" href="#">Topic 4</a>
            </li>
            <li className="list-group-item">
                <i className="fas fa-plus-circle"></i>
            </li>
        </ul>
        <div>
            Content blank
        </div>

    </div>
</div>

</div>
</Route>

export default CourseEditor
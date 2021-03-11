import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

const Home = () => 
    <Route path={['/', '/courses']} exact={true}>
        <div id='root'>
            <h3>
                Welcome to the Home page
            </h3>
            <div>
                <Link to='/courses/table'>
                    course table
                </Link>
            </div>
                <Link to='/courses/grid'>
                    course grid
                </Link>
            <div>

            </div>
        </div>
    </Route>

export default Home
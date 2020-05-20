import React, {useContext} from 'react';
import UserContext from './userContext';
import './Home.css';

const Home = () => {
    const {currentUser} = useContext(UserContext);
    return (
        <div className="Home jumbotron">
            <h1 className="display-4">Jobly</h1>
            <p className="lead">All the jobs in one, convenient place.</p>
            {currentUser ? 'Welcome Back!' : null}
        </div>
    )
}

export default Home;
import React, {useContext} from 'react';
import JobsList from './JobsList';
import UserContext from './userContext';

const Applications = () => {
    const {currentUser} = useContext(UserContext);

    return (
        <div className="Applications container mt-4">
            <h2 className="display-5">Current Applications</h2>
            <JobsList jobs={currentUser.jobs} />
        </div>
    )
}

export default Applications;
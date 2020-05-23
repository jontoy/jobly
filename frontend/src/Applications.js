import React, {useContext} from 'react';
import JobsList from './JobsList';
import UserContext from './userContext';
import useApply from './hooks/useApply';

const Applications = () => {
    const {currentUser} = useContext(UserContext);
    const [apply, unapply] = useApply();

    return (
        <div className="Applications container mt-4">
            <h2 className="display-5">Current Applications</h2>
            <JobsList jobs={currentUser.jobs} apply={apply} unapply={unapply}/>
        </div>
    )
}

export default Applications;
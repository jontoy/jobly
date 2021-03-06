import React from 'react';
import JobCard from './JobCard';

const JobsList = ({jobs, apply, unapply}) => {
    return (
        <ul className="JobsList list-unstyled">
            {jobs.map(({id, title, salary, equity, company_handle}) => 
            <li key={id}>
                <JobCard 
                    id={id} 
                    title={title} 
                    salary={salary} 
                    equity={equity} 
                    company_handle={company_handle} 
                    apply={apply} 
                    unapply={unapply}/>
            </li>)}
        </ul>
    )
}

export default JobsList;
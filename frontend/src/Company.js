import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import JoblyApi from './JoblyApi';
import JobsList from './JobsList';
import CompanyCard from './CompanyCard';
import useApply from './hooks/useApply';

const Company = () => {
    const {handle} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [company, setCompany] = useState({});
    const [apply, unapply] = useApply();

    useEffect(() => {
        async function getCompany() {
          let targetCompany = await JoblyApi.getCompany(handle);
          setCompany(targetCompany);
          setIsLoading(false);
        }
        getCompany();
      }, [handle]);

    if (isLoading) {
        return <p>Loading &hellip;</p>;
    }
    const {description, name, logo_url, jobs} = company;
    return (
        <div className="Company">
            <CompanyCard description={description} handle={handle} name={name} logo_url={logo_url} />
            <div className="container">
              <JobsList jobs={jobs} apply={apply} unapply={unapply}/>
            </div>
        </div>
    )
}

export default Company;
import React, {useState, useEffect} from 'react';
import Searchbox from './Searchbox';
import JoblyApi from './JoblyApi';
import JobsList from './JobsList';
import SelectField from './SelectField';
import Pagination from './Pagination';
import usePagination from './hooks/usePagination';
import useApply from './hooks/useApply';
const Jobs = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [jobs, setJobs, page, setPage, resultsPerPage, setResultsPerPage, goBack, goForward] = usePagination(20);
    const [searchTerm, setSearchTerm] = useState('');
    const [apply, unapply] = useApply();


    useEffect(() => {
      async function getJobs() {
        let allCompanies = await JoblyApi.getJobs({search:searchTerm});
        setJobs(allCompanies);
      }
      getJobs();
      setIsLoading(false);
      setPage(1);
    }, [searchTerm, setJobs, setPage]);

    if (isLoading) {
      return <p>Loading &hellip;</p>;
    }
    return (
        <div className="Jobs container">
            <Searchbox filterResults={setSearchTerm}/>
            <JobsList jobs={jobs.slice(resultsPerPage*(page-1), resultsPerPage*page)} apply={apply} unapply={unapply}/>
            <Pagination page={page} goBack={goBack} goForward={goForward}/>
            <SelectField headDesc='Show me ' tailDesc=' results per page' options={[10,20,50,100]} value={resultsPerPage} action={setResultsPerPage} subaction={setPage} />
        </div>
    )
}

export default Jobs;
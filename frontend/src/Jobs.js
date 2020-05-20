import React, {useState, useEffect} from 'react';
import Searchbox from './Searchbox';
import JoblyApi from './JoblyApi';
import JobsList from './JobsList';
import Pagination from './Pagination';
import usePagination from './hooks/usePagination';
const Jobs = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [jobs, setJobs, page, setPage, resultsPerPage, setResultsPerPage, goBack, goForward] = usePagination(20);
    // const [jobs, setJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    // const [page, setPage] = useState(1);
    // const resultsPerPage = 20;

    useEffect(() => {
      async function getJobs() {
        let allCompanies = await JoblyApi.getJobs({search:searchTerm});
        setJobs(allCompanies);
      }
      getJobs();
      setIsLoading(false);
      setPage(1);
    }, [searchTerm]);

    const apply = async (id) => {
      let msg = await JoblyApi.applyToJob(id);
      setJobs(oldJobs => oldJobs.map(job => job.id === id ? {...job, state:msg} : job));
    }
    const unapply = async (id) => {
      await JoblyApi.unApplyToJob(id);
      setJobs(oldJobs => oldJobs.map(job => {
        if(job.id === id){
          const {state, ...rest} = job;
          return rest
        } else{
          return job;
        }
      }));
    }  

    if (isLoading) {
      return <p>Loading &hellip;</p>;
    }

    return (
        <div className="Jobs container">
            <Searchbox filterResults={setSearchTerm}/>
            <JobsList jobs={jobs.slice(resultsPerPage*(page-1), resultsPerPage*page)} apply={apply} unapply={unapply}/>
            <Pagination page={page} goBack={goBack} goForward={goForward}/>
        </div>
    )
}

export default Jobs;
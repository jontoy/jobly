import React, {useState, useEffect} from 'react';
import JoblyApi from './JoblyApi';
import Searchbox from './Searchbox';
import CompanyList from './CompanyList';

const Companies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [companies, setCompanies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
      async function getCompanies() {
        let allCompanies = await JoblyApi.getCompanies({search:searchTerm});
        setCompanies(allCompanies);
      }
      getCompanies();
      setIsLoading(false);
    }, [searchTerm]);
    if (isLoading) {
      return <p>Loading &hellip;</p>;
    }

    return (
        <div className="Companies container">
            <Searchbox filterResults={setSearchTerm}/>
            <CompanyList companies={companies}/>
        </div>
    )
}

export default Companies;
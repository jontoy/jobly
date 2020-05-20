import React from 'react';
import {Link} from 'react-router-dom';
import CompanyCard from './CompanyCard';

const CompanyList = ({companies}) => {
    return (
        <ul className="CompanyList list-unstyled">
            {companies.map(({description, logo_url, handle, name}, idx) => 
            <li key={idx}>
                <Link to={`/companies/${handle}`}>
                    <CompanyCard 
                        description={description} 
                        logo_url={logo_url} 
                        name={name}/>
                </Link>
            </li>)}
        </ul>
    )
}

export default CompanyList;
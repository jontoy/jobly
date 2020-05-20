import React from 'react';
import { Link } from 'react-router-dom';
const CompanyCard = ({id, title, equity, salary, company_handle, state, apply, unapply}) => {

    const applyButton = () => {
        return <button className="btn btn-success ml-auto" onClick={() => apply(id)}>Apply</button>
    }
    const unApplyButton = () => {
        return <button className="btn btn-danger ml-auto" onClick={() => unapply(id)}>Remove Application</button>
    }
    return (
        <div className="CompanyCard card p-2 mb-1">
            <h5 className="card-title">{title}</h5>
            {company_handle ? <h6 className="card-subtitle mb-2 text-muted"><Link to={`/companies/${company_handle}`}>(@{company_handle})</Link></h6> : null}
            <p className="card-text">
                {salary ? <span>Salary: {salary}</span> : null}
                <br/>
                {equity ? <span>Equity: {equity}</span> : null}
            </p>
            {state === 'applied' ? unApplyButton() : applyButton()}
        </div>
    )
}

export default CompanyCard;


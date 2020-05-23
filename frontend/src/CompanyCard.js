import React from 'react';
import officeIcon from './office_icon.png';
import './CompanyCard.css';

const CompanyCard = ({description, name, logo_url}) => {
    const img = <img className="img-thumbnail ml-auto" src={logo_url ? logo_url : officeIcon} alt={name} />;
    return (
        <div className="CompanyCard card p-2 mb-1">
            <h5 className="card-title">{name}</h5>
            {img}
            <p className="card-text">{description}</p>
        </div>
    )
}

export default CompanyCard;
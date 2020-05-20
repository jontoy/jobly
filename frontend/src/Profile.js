import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import UserContext from './userContext';
import JoblyApi from './JoblyApi';
import './Profile.css';

const Profile = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    const {first_name, last_name, email} = currentUser;
    const [formData, setFormData] = useState({first_name, last_name, email, password:''})
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let updatedUser = await JoblyApi.updateUser(currentUser.username, formData);
        setCurrentUser(currUser => ({
            ...currUser,
            user: updatedUser
        }))
    } 
    return (
        <div className="Profile container mt-3">
            <div className="card pt-2">
                <h4 className="card-title">{currentUser.username}'s Profile:</h4>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="first_name">First Name</label>
                            <input 
                                className="form-control"
                                type="text" 
                                value={formData.first_name} 
                                id="first_name"
                                name="first_name" 
                                placeholder="e.g. John" 
                                onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name">Last Name</label>
                            <input 
                                className="form-control"
                                type="text" 
                                value={formData.last_name} 
                                id="last_name"
                                name="last_name" 
                                placeholder="e.g. Smith" 
                                onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input 
                                className="form-control"
                                type="text" 
                                value={formData.email} 
                                id="email"
                                name="email" 
                                placeholder="e.g. johnsmith@gmail.com" 
                                onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Confirm with Password</label>
                            <input 
                                className="form-control"
                                type="password" 
                                value={formData.password} 
                                id="password"
                                name="password" 
                                placeholder="Password" 
                                onChange={handleChange}/>
                        </div>
                        <button className="btn btn-success">Save Updated Information</button>
                    </form>
                </div>
                <div className="card-footer">
                    <Link to="/applications"><button className="btn btn-outline-info">View current applications</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Profile;
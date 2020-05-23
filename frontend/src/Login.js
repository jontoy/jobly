import React, {useState, useContext} from 'react';
import JoblyApi from './JoblyApi';
import {useHistory} from 'react-router-dom';
import UserContext from './userContext';
import './Login.css';
import Alert from './Alert';

const Login = () => {
    const {setToken} = useContext(UserContext);
    const history = useHistory();
    const [isNewUser, setIsNewUser] = useState(false);
    const BASE_STATE = {username:'', password:'', first_name:'', last_name:'', email:'', errors:[]};
    const [formData, setFormData] = useState(BASE_STATE);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            errors: [],
            [name]: value

        }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let token;
        try{
            const {errors, ...data} = formData;
            if(isNewUser){
                token = await JoblyApi.signup(data);
            } else{
                token = await JoblyApi.login(data);
            }
            setToken(token);
            history.push('/');
        } catch (errors){
            setFormData(data => ({
                ...data,
                errors
            }));
        }

    }
    return (
        <div className="Login container">
            <div className="card">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs ml-auto">
                        <li className="nav-item">
                            <button className={isNewUser ? 'nav-link' : 'nav-link active'} onClick={() => setIsNewUser(false)}>Login</button>
                        </li>
                        <li className="nav-item">
                            <button className={isNewUser ? 'nav-link active' : 'nav-link'}onClick={() => setIsNewUser(true)}>Signup</button>
                        </li>

                    </ul>
                </div>
                <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                        className="form-control" 
                        type="text" 
                        value={formData.username}
                        id="username" 
                        name="username" 
                        placeholder="Username" 
                        onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            className="form-control"
                            type="password" 
                            value={formData.password} 
                            id="password"
                            name="password" 
                            placeholder="Password" 
                            onChange={handleChange}/>
                    </div>
                    {isNewUser && 
                        <>
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
                        </>
                    }
                    <button className="btn btn-info">{isNewUser ? 'Create Account' : 'Log in'}</button>
                </form>
                    {formData.errors.length > 0 ? <Alert msgs={formData.errors}/> : null }
                </div>
            </div>

        </div>
    )
}

export default Login;


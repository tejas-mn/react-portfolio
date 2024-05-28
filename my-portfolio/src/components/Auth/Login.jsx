import React from 'react';
import './styles/form.css';

const Login = () => {
    return (
        <div className="container">
            <div className="form-container">
                <h2>Login</h2>
                <form>
                    <label htmlFor="email">Email</label>
                    <input className="frm-input" type="email" id="email" name="email" required />
                    
                    <label htmlFor="password">Password</label>
                    <input className="frm-input" type="password" id="password" name="password" required />
                    
                    <button className="auth-btn" type="submit">Login</button>
                </form>
                <p className='para'>Don't have an account? <a href="/signup">Sign Up</a></p>
            </div>
        </div>
    );
};

export default Login;

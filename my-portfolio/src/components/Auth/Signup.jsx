import React from 'react';
import './styles/form.css';

const SignUp = () => {
    return (
        <div className="container">
            <div className="form-container">
                <h2>Sign Up</h2>
                <form>
                    <label htmlFor="name">Name</label>
                    <input className="frm-input" type="text" id="name" name="name" required />
                    
                    <label htmlFor="email">Email</label>
                    <input className="frm-input" type="email" id="email" name="email" required />
                    
                    <label htmlFor="password">Password</label>
                    <input className="frm-input" type="password" id="password" name="password" required />
                    
                    <button className="auth-btn" type="submit">Sign Up</button>
                </form>
                <p className='para'>Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    );
};

export default SignUp;

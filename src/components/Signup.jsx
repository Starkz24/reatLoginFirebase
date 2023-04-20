import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from '../context/AuthContext';
import {Alert } from "react-bootstrap";

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState('');

    const navigate = useNavigate();

    const { createUser } = UserAuth();

    const handleSubmit = async (e) => {

        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }

        e.preventDefault()
        setError('')
        try{
            await createUser(email, password)
            navigate('/account')
            setLoading(true)
        }
        catch(e){
            setError("Failed to create account")
            // console.log(e.message)
            //alert(e.message)
        }
        setLoading(false)
    }

    return (
        <>
            <div className="max-w-[700px] mx-auto my-16 p-4">
                <div>
                    <h1 className="text-2xl font-bold py-2">Sign up for a free account</h1>
                </div>
                {error && <Alert varient="danger">{error}</Alert> }
                <form onSubmit={handleSubmit}>
                {/* <div className='flex flex-col py-2'>
                        <label className='py-2 font-medium'>First Name</label>
                        <input
                            className='border p-3'
                            type='text'
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div> */}
                    <div className='flex flex-col py-2'>
                        <label className='py-2 font-medium'>Email Address</label>
                        <input
                            className='border p-3'
                            type='email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='py-2 font-medium'>Password</label>
                        <input
                            className='border p-3'
                            type='password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='py-2 font-medium'>Confirm Password</label>
                        <input
                            className='border p-3'
                            type='password'
                            onChange={(e) => setconfirmPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <p className="py-2">Already have an account? <Link to='/' className="underline">Log in</Link> </p>
                    </div>
                    <button disabled={loading} className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
                        Sign Up
                    </button>
                </form>
            </div>

        </>
    );
}

export default Signup;

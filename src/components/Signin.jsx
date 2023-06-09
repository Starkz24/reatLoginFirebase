import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from '../context/AuthContext';
import {Alert } from "react-bootstrap";

const Signin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const { signIn } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try{
            await signIn(email,password)
            navigate('/account')
        }
        catch(e){
            // setError(e.message)
            // console.log(e.message)
            alert(e)
        }
    }

  return (
    <>
        <div className="max-w-[700px] mx-auto my-16 p-4">
                <div>
                    <h1 className="text-2xl font-bold py-2">Log in to your account</h1>
                </div>
                {error && <Alert varient="danger">{error.message}</Alert> }
                <form onSubmit={handleSubmit}>
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
                    <div>
                    <p className="py-2">Dont't have an account yet ? <Link to='/signup' className="underline">Sign Up</Link> </p>
                    </div>
                    <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
                        Log In
                    </button>
                </form>
            </div>
    </>
  );
}

export default Signin;

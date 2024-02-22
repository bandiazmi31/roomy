import'../index.css';
import { useState } from'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from '../assets/lg.svg';
import { FaRegUser } from 'react-icons/fa';
import { MdLockOutline } from'react-icons/md';

function AdminLogin() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/adminlogin', {username, password})
        .then(Result => {console.log(Result)
            if (Result.data === 'Login Success!') {
                navigate('/admindashboard')
            }
        })
        .catch(err => console.log(err))
    }
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-blue-500'>
            <div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
                <div className='bg-white rounded-2xl shadow-2xl flex w-1/3 max-2-4xl'>
                    <div className='w-screen p-5'>
                    <   div className='text-left font-bold'>
                            <div className='flex flex-row'>
                                <img src={Logo} alt='logo' className='w-auto h-5 pr-2' />
                                <span className='text-blue-500'>AZ</span>Room
                            </div>
                        </div>

                        <div className='py-10'>
                            <h2 className='text-3xl text-blue-500 font-bold mb-2'>Welcome back Admin!</h2>
                            <div className='border-2 w-10 border-blue-500 inline-block mb-2'></div>

                            <form onSubmit={handleLogin}>
                                <div className='flex flex-col items-center'>
                                    <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                                        <FaRegUser className='text-gray-400 m-2' />
                                        <input type='text' placeholder='Username' name='username' className='bg-gray-100 outline-none text-sm flex-1' onChange={(e) => setUsername(e.target.value)}  />
                                    </div>
                                </div>

                                <div className='flex flex-col items-center'>
                                    <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                                        <MdLockOutline className='text-gray-400 m-2' />
                                        <input type='password' placeholder='Password' name='password' className='bg-gray-100 outline-none text-sm flex-1' onChange={(e) => setPassword(e.target.value)}  />
                                    </div>
                                    <div className='flex justify-between w-64 mb-5'>
                                        <a href='#' className='text-xs'>Forgot password?</a>
                                    </div>
                                    <button className='border-2 text-blue-500 border-blue-500 rounded-full px-12 py-2 inline-block font-semibold duration-300 hover:bg-blue-500 hover:text-white'>Login</button>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;
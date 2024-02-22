import '../index.css'
import { useState } from 'react'
import Logo from '../assets/lg.svg'
import { FaFacebookF, FaGoogle, FaRegUser } from 'react-icons/fa'
import { MdLockOutline } from'react-icons/md'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {username, password})
        .then(Result => {console.log(Result)
            if (Result.data === 'Login Success!') {
                navigate('/dashboard')
            }
        })
        .catch(err => console.log(err))
    }
    
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>
            <div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
                <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-2-4xl'>
                    <div className='w-3/5 p-5'>
                        <div className='text-left font-bold'>
                            <div className='flex flex-row'>
                                <img src={Logo} alt='logo' className='w-auto h-5 pr-2' />
                                <span className='text-blue-500'>AZ</span>Room
                            </div>
                        </div>

                        <div className='py-10'>
                            <h2 className='text-3xl text-blue-500 font-bold mb-2'>Sign in to Account</h2>
                            <div className='border-2 w-10 border-blue-500 inline-block mb-2'></div>

                            <form onSubmit={handleLogin}>
                                <div className='flex flex-col items-center'>
                                    <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                                        <FaRegUser className='text-gray-400 m-2' />
                                        <input type='text' placeholder='Username' name='username' className='bg-gray-100 outline-none text-sm flex-1' onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                </div>

                                <div className='flex flex-col items-center'>
                                    <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                                        <MdLockOutline className='text-gray-400 m-2' />
                                        <input type='password' placeholder='Password' name='password' className='bg-gray-100 outline-none text-sm flex-1' onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className='flex justify-between w-64 mb-5'>
                                        <label className='flex items-center text-xs'><input type='checkbox' name='remember' className='mr-1' /> Remember me</label>
                                        <a href='#' className='text-xs'>Forgot password?</a>
                                    </div>
                                    <button className='border-2 text-blue-500 border-blue-500 rounded-full px-12 py-2 inline-block font-semibold duration-300 hover:bg-blue-500 hover:text-white'>Sign Up</button>
                                </div>
                            </form>

                            <p className='text-gray-400 my-2'>Or use your social media</p>
                            <div className='flex justify-center my-2'>
                                <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1 duration-300 hover:bg-blue-500 hover:text-white'>
                                    <FaFacebookF className='text-sm' />
                                </a>

                                <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1 duration-300 hover:bg-blue-500 hover:text-white'>
                                    <FaGoogle className='text-sm' />
                                </a>
                            </div>

                        </div>

                    </div> {/*  login form */}

                    <div className='w-2/5 bg-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
                        <h2 className='text-3xl font-bold mb-2'>Hello, Friend!</h2>
                        <div className='border-2 w-10 border-white inline-block mb-2'></div>
                        <p className='mb-10'>Fill up personal information and start journey with us.</p>
                        <a href='/register' className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold duration-300 hover:bg-white hover:text-blue-500'>Sign up</a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;
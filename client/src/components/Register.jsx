import '../index.css'
import { useState } from 'react'
import Logo from '../assets/lg.svg'
import { FaFacebookF, FaGoogle, FaRegEnvelope, FaRegUser } from 'react-icons/fa'
import { MdLockOutline } from'react-icons/md'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {username, email, password})
        .then(Result => {console.log(Result)
            navigate('/login')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>
            <div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
                <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-2-4xl'>
                    <div className='w-2/5 bg-blue-500 text-white rounded-tl-2xl rounded-bl-2xl py-48 px-12'>
                        <h2 className='text-3xl font-bold mb-2'>Hello, Friend!</h2>
                        <div className='border-2 w-10 border-white inline-block mb-2'></div>
                        <p className='mb-10'>Already have account?</p>
                        <a href='/login' className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold duration-300 hover:bg-white hover:text-blue-500'>Sign in</a>
                    </div>

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

                            <form onSubmit={handleSubmit}>
                                <div className='flex flex-col items-center'>
                                    <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                                        <FaRegUser className='text-gray-400 m-2' />
                                        <input type='text' placeholder='Username' name='username' className='bg-gray-100 outline-none text-sm flex-1' onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                </div>

                                <div className='flex flex-col items-center'>
                                    <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                                        <FaRegEnvelope className='text-gray-400 m-2' />
                                        <input type='email' placeholder='Email' name='email' className='bg-gray-100 outline-none text-sm flex-1' onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>

                                <div className='flex flex-col items-center'>
                                    <div className='bg-gray-100 w-64 p-2 flex items-center mb-8'>
                                        <MdLockOutline className='text-gray-400 m-2' />
                                        <input type='password' placeholder='Password' name='password' className='bg-gray-100 outline-none text-sm flex-1' onChange={(e) => setPassword(e.target.value)} />
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

                </div>
            </div>
        </div>
    );
}

export default Register;
import '../index.css'
import Logo from '../assets/lg.svg'

function Dashboard() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>
            <img src={Logo} alt='logo' className='w-auto h-5 pr-2' />
            <h2>Welcome to Dashboard</h2>
        </div>
    );
}

export default Dashboard
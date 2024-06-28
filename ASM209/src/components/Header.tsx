import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <header className='bg-white py-4 fixed top-0 left-0 right-0 z-50 border-b border-black-500'>
        <div className=' ml-20 mr-20 flex items-center justify-between'>
          <div>
            <NavLink to='/' className='hover:text-gray-300'>
              <img
                className='w-[100px]'
                src='https://upload.wikimedia.org/wikipedia/commons/1/1b/Logo-FPT-Shop-Black.png'
                alt=''
              />
            </NavLink>
          </div>

          <nav className='hidden md:flex space-x-4'>
            <NavLink to='/' className='hover:text-gray-300 text-[17px]'>
              Home
            </NavLink>
            <NavLink to='/shop' className=' hover:text-gray-300 text-[17px]'>
              Shop
            </NavLink>
            <NavLink to='/admin' className='hover:text-gray-300 text-[17px]'>
              Admin
            </NavLink>
          </nav>

          <div className='ml-4'>
            <NavLink to='/register' className='hover:text-gray-300'>
              Đăng ký
            </NavLink>
            <span className='mx-2'>|</span>
            <NavLink to='/login' className='hover:text-gray-300'>
              Đăng nhập
            </NavLink>
          </div>
        </div>
      </header>
      <br />
    </>
  )
}

export default Header

const Register = () => {
  return (
    <div className='max-w-md mx-auto p-6 bg-white rounded-md shadow-md'>
      <h1 className='text-2xl text-center font-semibold mb-4'>Đăng ký</h1>
      <form className='space-y-4'>
        <div>
          <label className='block mb-1'>Email</label>
          <input
            type='email'
            id='email'
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
            placeholder='Email...'
          />
        </div>
        <div>
          <label className='block mb-1'>password</label>
          <input
            type='password'
            id='password'
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
            placeholder='password...'
          />
        </div>

        <button className='w-full py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300'>
          Xác nhận
        </button>
      </form>
    </div>
  )
}

export default Register

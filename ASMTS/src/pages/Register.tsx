import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { User } from '~/types/User'
import { joiResolver } from '@hookform/resolvers/joi'
import instance from '~/apis'
import userSchema from '~/validation/user'

const Register = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<User>({
    resolver: joiResolver(userSchema)
  })

  const onSubmit = (user: User) => {
    ;(async () => {
      const { data } = await instance.post(`/register`, user)
      if (data.user) {
        const cf = confirm(' Đăng ký thành công - Đi đến trang đăng nhập')
        if (cf) {
          navigate('/login')
        }
      } 
    })()
  }

  return (
    <div className='max-w-md mx-auto p-6 bg-white rounded-md shadow-md'>
      <h1 className='text-2xl text-center font-semibold mb-4'>Đăng ký</h1>
      <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className='block mb-1'>Email</label>
          <input
            type='email'
            id='email'
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
            placeholder='Email...'
            {...register('email', { required: true })}
          />
          {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
        </div>
        <div>
          <label className='block mb-1'>password</label>
          <input
            type='password'
            id='password'
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
            placeholder='password...'
            {...register('password', { required: true, min: 3 })}
          />
          {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
        </div>

        <button className='w-full py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300'>
          Xác nhận
        </button>
      </form>
    </div>
  )
}

export default Register

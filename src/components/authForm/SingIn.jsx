import axios from "axios"
import { useState } from "react"

const SingIn = () => {
  const [email, setEmailValue] = useState('')
  const [password, setPassowordValue] = useState('')
  const [firstNameValue, setFirstNameValue] = useState('')
  const [lastNameValue, setLastNameValue] = useState('')

  const handleSubmit = () => {
    console.log('work')
    try {
      const fullName = `${firstNameValue} ${lastNameValue}`
      const formData = {
        email,
        password ,
        fullName
      }

      const response = axios.post('/api/users', formData)

      if (response.ok) {
        console.log('POST USER')
      } else {
        console.log('NOT POST USER')
      }
    } catch (error) {
      console.log(error)
    }
  };


  return ( 
    <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
      <label className='flex flex-col'>
        <span className="text-md text-slate-700">Name</span>
          <input 
            type="text"
            name="fullName"
            placeholder='Enter Your First name' 
            className='outline-none py-1 px-3 border-b w-full'
            value={firstNameValue}
            onChange={(e) => setFirstNameValue(e.target.value)}
            />
          <input 
            type="text" 
            placeholder='Enter Your Last name' 
            className='mt-4 outline-none py-1 px-3 border-b w-full'
            value={lastNameValue}
            onChange={(e) => setLastNameValue(e.target.value)}
            />
      </label>
      <label className='flex flex-col'>
        <span className="text-md text-slate-700">Email</span>
        <input 
          type="email" 
          name="email"
          placeholder='Enter Your Email' 
          className='outline-none py-1 px-3 border-b'
          value={email}
          onChange={(e) => setEmailValue(e.target.value)}
          />
          
      </label>
      <label className='flex flex-col'>
        <span className="text-md text-slate-700">Password</span>
        <input 
          type="password" 
          name="password"
          placeholder='Create A Password' 
          className='outline-none py-1 px-3 border-b'
          value={password}
          onChange={(e) => setPassowordValue(e.target.value)}
          />
      </label>
      <button 
        onClick={() => handleSubmit()}
        className='w-full border mt-4 py-2 rounded-lg'
      >
        SignIn
      </button>
    </form>
  );
}
 
export default SingIn;
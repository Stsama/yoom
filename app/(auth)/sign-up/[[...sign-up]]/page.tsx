import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <main className='flex items-center w-full justify-center h-screen'>
        <SignUp routing="hash"/>
    </main>
  )
}

export default SignUpPage
import '../Landing/Landing.css'

const Landing = ({ user }) => {
  return (
    <main className='container'>
      <div className='typed-out'>
      hello, {user ? user.name : 'friend'}! let's prep code_interview 
      </div>
     
    </main>
  )
}

export default Landing

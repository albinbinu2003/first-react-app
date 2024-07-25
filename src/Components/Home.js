import React from 'react'
import Child from './Child'
import './Home.css'

const Home = () => {
  return (
    <div>
        <h2 className='babu'>you are currently visiting home page</h2>
        <p className='para1'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <Child />
    </div>
       )
}

export default Home
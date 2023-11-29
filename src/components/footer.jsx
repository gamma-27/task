import React from 'react'
import Link  from "next/link"
const Footer = () => {
  return (
    <footer className='h-35 bg-blue-600 mt-5'>
        <div className='flex p-5 justify-around'>
            <div className='text-center flex flex-col justify-center'>
                <h1 className='text-3xl'>Welcome to work manager</h1>
                <p>hdejdjdnjdn dsjds hkdj</p>

            </div>
            <div className='text-center' >
                <h1>Important Links</h1>
                <ul>
                    <li><Link href="#!">Facebook</Link></li>
                    <li><Link href="#!">You tube</Link></li>
                    <li><Link href="#!">Instagram</Link></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer
import React from 'react';
import VathanaSingIFL from '../images/vathana1.jpg';
import NavBar from './navbar';
export default function Header() {

  return (
    <>
        <header>
            <NavBar />
            <div className='w-full h-[33rem] bg-gradient-to-r to-emerald-600 from-sky-400'>
                <img src={VathanaSingIFL} className='w-full h-[98%] object-fill brightness-75' alt='VathanaIFL'/>
            </div>
                <div className='font-medium text-white absolute w-full top-0 z-10 h-[33rem] bg-transparent flex justify-center items-center bg-blue-400'>
                    <div className=''>
                        <h1 className='text-4xl text-pretty'>Tith Sereyvathana</h1>
                            <p className='text-center mt-5 font-sans text-lg italic'>Handsome singer 
                                <svg xmlns="http://www.w3.org/2000/svg" className='translate-x-52 -translate-y-7 size-6' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
                                </svg>
                            </p>
                    </div>
                </div>
        </header>
    </>
  )
}

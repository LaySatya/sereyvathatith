import React, { useState } from 'react';
import Christmas from '../images/chrismast.png';
import VathanaProfile from '../images/profile-idol.jpg';

const NavBar = () => {
  const [NavBar, setNavbar] = useState(false);
  const [open, setOpen] = useState(false);

 const changeColor = () => {
  if(window.scrollY >= 550){
    setNavbar(true);
  }
  else{
    setNavbar(false);
  }
 }
 window.addEventListener('scroll' , changeColor);
  const Links = [
    { name: "Home", link: "/" },
    { name: "Songs", link: "/songs" },
    { name: "Photos", link: "/photos" },
    { name: "Contact", link: "https://t.me/Serey_vathana" },
  ];

  return (
    <div className={`header w-full fixed top-0 left-0 z-50 text-white ${NavBar ? "bg-blue-500 transition-all" : ""}`}>
      <div className='md:flex items-center justify-between py-2 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2 pr-3'>
            <img src={VathanaProfile} className='h-12 rounded-full' alt='VathanLogo' />
          </span>
          Vathana
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={`nav md:flex md:items-center md:bg-transparent bg-blue-500 md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 text-lg md:my-0 my-7 font-[Arial]'>
              <a href={link.link} className='hover:opacity-70 hover:scale-105 duration-500'>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

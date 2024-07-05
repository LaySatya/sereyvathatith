import React from 'react';
import { Fade } from 'react-awesome-reveal';
import P1 from '../images/P1.jpg';
import P10 from '../images/P10.jpg';
import P11 from '../images/P11.jpg';
import P12 from '../images/P12.jpg';
import P2 from '../images/P2.jpg';
import P3 from '../images/P3.jpg';
import P4 from '../images/P4.jpg';
import P5 from '../images/P5.jpg';
import P6 from '../images/P6.jpg';
import P7 from '../images/P7.jpg';
import P8 from '../images/P8.jpg';
import P9 from '../images/P9.jpg';
const images = [
  [
    P2,
    P4,
    P1,    
  ],
  [
    P6,
    P5,
    P3,
  ],
  [
    P7,
    P9,
    P12,
  ],
  [
    P10,
    P11,
    P8,
  ],
];

const Photo =() => {
  return (
        <div className='w-11/12 mx-auto mt-20'>
            <h1 class="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Photos</span> </h1>
            <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Take a look on Vathana's photos 💕🎶</p>
            <Fade>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                {images.map((column, columnIndex) => (
                    <div key={columnIndex} className="grid gap-4">
                    {column.map((src, index) => (
                        <div key={index}>
                            <Fade direction=''>
                                <img className="h-auto max-w-full rounded-lg" src={src} alt="" />
                            </Fade>
                        </div>
                    ))}
                    </div>
                ))}
            </div>
            </Fade>
            
        </div>
    );
};

export default Photo;

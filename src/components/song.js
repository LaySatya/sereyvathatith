import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Song3 from '../songs/bomnong_laor_pi_songsao.mp4';
import Song1 from '../songs/kbaes_batbong_tvhz_terb_bongmerl_kernh_domlai.mp4';
import Song4 from '../songs/kom_sl_b_ey.mp4';
import Song2 from '../songs/plex_zono.mp4';
export default function Song() {
    const songs = [
        {
            title: 'សារជាតិ',
            video: Song1,
            description: 'ក្បែរបាត់បង់ទៅហើយ ទើបបងមើលឃើញពីតម្លៃអូន',
            release: '3 July 2024',
            animate: 'right',
        },
        {
            title: 'ភ្លេច-Zono',
            video: Song2,
            description: '',
            release: '3 July 2024',
            animate: 'up',
        },
        {
            title: 'បំណងល្អេពីសង្សាអូន',
            video: Song3,
            description: '',
            release: '3 July 2024',
            animate: 'left',
        },
        {
            title: 'កុំស្រឡាញ់បងអី',
            video: Song4,
            description: '',
            release: '3 July 2024',
            animate: 'right',
        },
    ];
  return (
    <>
        
       <section>
            <div className='w-11/12 mx-auto mt-16'>
                <h1 class="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Songs</span> </h1>
                <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Listen and enjoy with Vathana's songs 💕🎶</p>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 justify-center'>
                    {
                        songs.map((s,i) => (
                            <Fade direction={s.animate}>
                                <div key={i} className="rounded-lg shadow-lg hover:border-emerald-600 border transition-all bg-white max-w-md mt-12">
                                    <a href="#!">
                                        <video width="320" controls className="w-full h-72 rounded-t-lg border">
                                        <source src={s.video} type="video/mp4"/>
                                        <source src="movie.ogg" type="video/ogg" />
                                        Your browser does not support the video tag.
                                        </video>
                                    </a>
                                    <div className="p-6">
                                        <h5 className="text-gray-900 text-xl font-medium mb-2">{s.title}</h5>
                                        <p className="text-gray-700 text-base mb-4">
                                        {s.description} <br/> <span>{s.release}</span>
                                        </p>
                                        <a href='https://www.tiktok.com/@vath_na'>
                                            <button
                                                type="button"
                                                className="inline-block px-6 py-2.5 bg-gradient-to-r to-emerald-600 from-sky-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                                >
                                                Rate <ion-icon name="logo-tiktok"></ion-icon>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </Fade>
                        ))
                    }
                </div>
            </div>
       </section>

    </>
  )
}

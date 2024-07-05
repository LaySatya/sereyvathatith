import React from 'react';
import VathanaLogo from '../images/vatha-profile.jpg';
export default function Footer() {
    let Links =[
        {name:"Home",link:"/"},
        {name:"Songs",link:"/songs"},
        {name:"Photos",link:"/photos"},
        {name:"Contact",link:"/contact"},
      ];
  return (
    <>
        <footer className="bg-gray-100 mt-8">
  <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="flex justify-center text-teal-600">
        <img src={VathanaLogo} className='h-16 rounded-full border border-spacing-5 border-teal-500' alt=''/> 
        <span className='text-xl px-3 font-medium mt-4'>Tith Sereyvathana</span>
    </div>

    <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
      Hello everyone, I'm Vathana and I am a singer. If you're interested please contact me <a className='text-teal-600' href='tel:081480965'>012345678</a>
      <br/> Thank you.
    </p>

    <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
        {
          Links.map((link)=>(
            <li key={link.name} className='text-gray-700 transition hover:text-teal-600/75 hover:scale-105'>
              <a href={link.link} className=''>{link.name}</a>
            </li>
          ))
        }
    </ul>

    <ul className="mt-12 flex justify-center gap-6 md:gap-8">
      <li>
        <a
          href="https://web.facebook.com/profile.php?id=100093576542543"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75"
        >
          <span className="sr-only">Facebook</span>
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>

      <li>
        <a
          href="https://www.instagram.com/vathxna_coffe00/"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75"
        >
          <span className="sr-only">Instagram</span>
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>

      <li>
        <a
          href="https://www.tiktok.com/@vath_na"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75"
        >
          <span className="sr-only">Tiktok</span>
          <ion-icon name="logo-tiktok"></ion-icon>
        </a>
      </li>

      <li>
        <a
          href="https://t.me/Serey_vathana"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75"
        >
          <span className="sr-only">Telegram</span>
          <svg xmlns="http://www.w3.org/2000/svg" className='opacity-70 mt-0.5' fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" version="1.1">
<title>telegram</title>
<path d="M22.122 10.040c0.006-0 0.014-0 0.022-0 0.209 0 0.403 0.065 0.562 0.177l-0.003-0.002c0.116 0.101 0.194 0.243 0.213 0.403l0 0.003c0.020 0.122 0.031 0.262 0.031 0.405 0 0.065-0.002 0.129-0.007 0.193l0-0.009c-0.225 2.369-1.201 8.114-1.697 10.766-0.21 1.123-0.623 1.499-1.023 1.535-0.869 0.081-1.529-0.574-2.371-1.126-1.318-0.865-2.063-1.403-3.342-2.246-1.479-0.973-0.52-1.51 0.322-2.384 0.221-0.23 4.052-3.715 4.127-4.031 0.004-0.019 0.006-0.040 0.006-0.062 0-0.078-0.029-0.149-0.076-0.203l0 0c-0.052-0.034-0.117-0.053-0.185-0.053-0.045 0-0.088 0.009-0.128 0.024l0.002-0.001q-0.198 0.045-6.316 4.174c-0.445 0.351-1.007 0.573-1.619 0.599l-0.006 0c-0.867-0.105-1.654-0.298-2.401-0.573l0.074 0.024c-0.938-0.306-1.683-0.467-1.619-0.985q0.051-0.404 1.114-0.827 6.548-2.853 8.733-3.761c1.607-0.853 3.47-1.555 5.429-2.010l0.157-0.031zM15.93 1.025c-8.302 0.020-15.025 6.755-15.025 15.060 0 8.317 6.742 15.060 15.060 15.060s15.060-6.742 15.060-15.060c0-8.305-6.723-15.040-15.023-15.060h-0.002q-0.035-0-0.070 0z"/>
</svg>
        </a>
      </li>

      <li>
        <a
          href="https://web.facebook.com/profile.php?id=61557944609878"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75"
        >
          <span className="sr-only">Page</span>
          <ion-icon name="musical-notes-outline" className="size-10"></ion-icon>
        </a>
      </li>
    </ul>
  </div>
</footer>
    </>
  )
}

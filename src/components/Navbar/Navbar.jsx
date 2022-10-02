import React, { useState } from 'react';
import { TrophyIcon, Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const navbarData = [
        {
            id: 1,
            name: "Home",
            path: '/home'
        },
        {
            id: 2,
            name: "About",
            path: '/about'
        },
        {
            id: 3,
            name: "Services",
            path: '/services'
        },
        {
            id: 4,
            name: "Blog",
            path: '/blog'
        },
        {
            id: 5,
            name: "Contact",
            path: '/contact'
        },
    ]

    const [open, setOpen] = useState(false)
    return (
        <header className='py-4 px-2 lg:px-5 flex justify-between items-center z-10 bg-blue-500'>
            <div className="logo flex items-center text-white">
                <TrophyIcon className="h-8 w-8 " />
                <span className='ml-2 text-2xl font-semibold '>Navbar-2 </span>
            </div>

            <div
                className="nav_icon cursor-pointer lg:hidden absolute top-5 right-4"
                onClick={() => { setOpen(!open) }}>
                {
                    open ?
                        <XMarkIcon className="h-8 w-8 text-white" />
                        : <Bars4Icon className="h-8 w-8 text-white" />
                }
            </div>

            <nav>
                <ul
                    className={`lg:flex font-semibold absolute top-12 transition-all duration-500 right-0 lg:static bg-blue-500 w-full text-center z-[-1]
                 ${open ? "top-12" : "top-[-500px]"}`}>
                    {
                        navbarData?.map(navItem =>
                            <li
                                key={navItem?.id}
                                className='ml-4 text-white hover:text-red-400 transition-all duration-500 text-lg px-4 py-2 my-3'>
                                <a href={navItem?.path}>{navItem?.name}</a>
                            </li>
                        )
                    }

                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
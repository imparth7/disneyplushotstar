'use client'

import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { MdArrowForwardIos, MdOutlineMovie, MdMovie, MdOutlineAccountCircle, MdAccountCircle, MdOutlineSportsBaseball, MdSportsBaseball } from 'react-icons/md';
import { IoTv, IoTvOutline, IoSearchOutline, IoSearch } from 'react-icons/io5';
import { GoHome, GoHomeFill } from 'react-icons/go';
import { usePathname } from 'next/navigation';


const Sidebar = () => {

    const pathname = usePathname()
    const [sidebarHover, setSidebarHover] = useState(false)

    const sidebarTitle: string = `absolute w-[80%] group-hover/sidebar:mr-2.5 flex items-center transition-all left-12 group-hover/sidebar:left-20 opacity-0 group-hover/sidebar:opacity-100 group-hover/link:font-bold group-hover/link:left-20 group-hover/link:opacity-100`

    return (
        <React.Fragment>
            <div className={`flex flex-col items-center justify-center w-24 h-[100vh] z-50 fixed top-0 left-0 transition-all`}>
                <div className="flex flex-col items-center justify-center w-24 gap-4 py-5 absolute top-0">
                    <Image
                        src="/mainLogo.svg"
                        width={56}
                        height={41}
                        alt="Picture of the author"
                        priority
                    />
                    <button className='text-[#c09a5c] bg-[#27231e] text-xs group rounded-full p-1 pl-2 items-center flex gap-1'>
                        Subscribe
                        <span className={`-translate-x-0.5 group-hover:translate-x-0.5 transition`}>
                            <MdArrowForwardIos className={`fill-[#c09a5c]`} />
                        </span>
                    </button>
                </div>

                <div className="group/sidebar flex flex-col items-center justify-center w-24 py-5 transition-all hover:w-60 absolute" onMouseOverCapture={() => setSidebarHover(true)} onMouseOutCapture={() => setSidebarHover(false)}>
                    <div className={`flex relative w-24 group/link py-5 ${pathname == '/profile' && 'active'}`}>
                        <Link href={'/profile'} className={`w-full flex justify-center transition-all group-hover/link:scale-125 shadow-2xl shadow-white`}>
                            <div>
                                <MdOutlineAccountCircle className={`${pathname !== '/profile' ? 'block' : 'hidden'} w-6 h-6 group-hover/link:hidden`} />
                                <MdAccountCircle className={`${pathname == '/profile' ? 'block' : 'hidden'} w-6 h-6 group-hover/link:block`} />
                            </div>
                            <span className={`${sidebarTitle} drop-shadow-md shadow-white`}>Profile</span>
                        </Link>
                    </div>
                    <div className={`flex relative w-24 group/link py-5 ${pathname == '/search' && 'active'}`}>
                        <Link href={'/search'} className={`w-full flex justify-center transition-all group-hover/link:scale-125 shadow-2xl shadow-white`}>
                            <div>
                                <IoSearchOutline className={`${pathname !== '/search' ? 'block' : 'hidden'} w-6 h-6 group-hover/link:hidden`} />
                                <IoSearch className={`${pathname == '/search' ? 'block' : 'hidden'} w-6 h-6 group-hover/link:block`} />
                            </div>
                            <span className={`${sidebarTitle} drop-shadow-md shadow-white`}>Search</span>
                        </Link>
                    </div>
                    <div className={`flex relative w-24 group/link py-5 ${pathname == '/' && 'active'}`}>
                        <Link href={'/'} className={`w-full flex justify-center transition-all group-hover/link:scale-125 shadow-2xl shadow-white`}>
                            <div>
                                <GoHome className={`${pathname !== '/' ? 'block' : 'hidden'} w-6 h-6 group-hover/link:hidden`} />
                                <GoHomeFill className={`${pathname == '/' ? 'block' : 'hidden'} w-6 h-6 group-hover/link:block`} />
                            </div>
                            <span className={`${sidebarTitle} drop-shadow-md shadow-white`}>Home</span>
                        </Link>
                    </div>
                    <div className={`flex relative w-24 group/link py-5 ${pathname == '/tv' && 'active'}`}>
                        <Link href={'/tv'} className={`w-full flex justify-center transition-all group-hover/link:scale-125 shadow-2xl shadow-white`}>
                            <div>
                                <IoTvOutline className={`${pathname !== '/tv' ? 'block' : 'hidden'} w-6 h-6 group-hover/link:hidden`} />
                                <IoTv className={`${pathname == '/tv' ? 'block' : 'hidden'} w-6 h-6 group-hover/link:block`} />
                            </div>
                            <span className={`${sidebarTitle} drop-shadow-md shadow-white`}>TV</span>
                        </Link>
                    </div>
                    <div className={`flex relative w-24 group/link py-5 ${pathname == '/movie' && 'active'}`}>
                        <Link href={'/movie'} className={`w-full flex justify-center transition-all group-hover/link:scale-125 shadow-2xl shadow-white`}>
                            <div>
                                <MdOutlineMovie className={`${pathname !== '/movie' ? 'block' : 'hidden'} w-6 h-6 group-hover/link:hidden`} />
                                <MdMovie className={`${pathname == '/movie' ? 'block' : 'hidden'} w-6 h-6 group-hover/link:block`} />
                            </div>
                            <span className={`${sidebarTitle} drop-shadow-md shadow-white`}>Movie</span>
                        </Link>
                    </div>
                    <div className={`flex relative w-24 group/link py-5 ${pathname == '/sports' && 'active'}`}>
                        <Link href={'/sports'} className={`w-full flex justify-center transition-all group-hover/link:scale-125 shadow-2xl shadow-white`}>
                            <div>
                                <MdOutlineSportsBaseball className={`${pathname !== '/sports' ? 'block' : 'hidden'} w-6 h-6 group-hover/link:hidden`} />
                                <MdSportsBaseball className={`${pathname == '/sports' ? 'block' : 'hidden'} w-6 h-6 group-hover/link:block`} />
                            </div>
                            <span className={`${sidebarTitle} drop-shadow-md shadow-white`}>Sports</span>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Sidebar
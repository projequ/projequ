import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { menus } from '../data'
import { NotificationsNone } from '@mui/icons-material'
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar: React.FC<any> = ({ active }) => {
  const [activeMenu, setActiveMenu] = useState<string>(active)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [isExpandMenuMobile, setIsExpandMenuMobile] = useState<boolean>(false)

  const toggleIsExpandMenuMobile = () => {
    setIsExpandMenuMobile(!isExpandMenuMobile)
  }

  return (
    <header className='w-full bg-secondary px-3 py-4 md:fixed z-20 top-0'>
        <nav className='bg-secondary text-white flex items-center justify-between md:max-w-8xl md:px-16 mx-auto'>
            <div className='flex gap-7 items-center'>
                <Link 
                    href=''
                    title=''
                    about=''
                >
                    <Image
                        src='/logo/projequ-logo.svg'
                        alt='Logo Aplikasi ProjeQu'
                        title='Logo Aplikasi ProjeQu'
                        width={0}
                        height={0}
                        className='md:w-48 w-28'
                    />
                </Link>
                <Link 
                    href=''
                    title='ProjeQu Pro'
                    about='ProjeQu Pro'
                    className='bg-btn-primary text-white text-[18px] items-center rounded-lg h-[2rem] px-2 md:flex hidden'
                >
                    <Image 
                        src='/decoration/sparkled.svg'
                        alt='Sparkled Decoration Website'
                        title='Sparkled Decoration Website'
                        width={8}
                        height={8}
                        className='w-8'
                    />
                    <p className="font-semibold text-base">Coba ProjeQu Pro!</p>
                </Link>
            </div>

            <div className="flex items-center justify-between space-x-8">
            <div className="nav-links md:static absolute bg-secondary md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
                <ul className="flex md:flex-row flex-col md:items-center md:gap-[3vw] gap-8">
                    {
                        menus.map((menu, index) => (
                            <li key={index} onClick={(e) => setActiveMenu(menu.title)} className={`hover:border-b hover:border-b-gray-200 pb-3 mt-3 transition duration-300 md:text-base ${menu.title == activeMenu ? 'border-b border-b-gray-200' : 'border-b border-b-secondary'}`}><Link href={menu.link} about={menu.title} title={menu.title}>{menu.title}</Link></li>
                        ))
                    }
                </ul>
            </div>
            <div className="flex items-center gap-3 relative">
                <button className="md:block text-xl hidden" onClick={(e) => {}}>
                    <NotificationsNone />
                </button>
                <div className="notifications absolute hidden bg-white rounded-xl w-[25rem] -bottom-40 z-[100] right-20 h-fit py-3">
                    <div className="header-notification flex items-center justify-between px-6 py-2">
                        <h2 className="text-secondary font-semibold text-[18px]">Notifikasi</h2>
                        <h3 className="text-[#808080] font-medium text-[17px]">Tandai baca semua</h3>
                    </div>

                    <div className="tab-notification flex items-center justify-start gap-16 px-6">
                        <div className="tab text-secondary text-[17px] items-center flex gap-2">
                            Pesan Masuk
                            <span className="bg-secondary rounded-full flex items-center justify-center w-5 h-5 text-white">2</span>
                        </div>

                        <div className="tab text-[#808080] text-[17px] items-center flex gap-2">
                            Umum
                            <span className="bg-[#808080] rounded-full flex items-center justify-center w-5 h-5 text-white">5</span>
                        </div>
                    </div>

                    <div className="list-notification">

                    </div>
                </div>
                {
                    isLoggedIn ? (
                        <Link href="{{ route('dashboard') }}" className="bg-white text-secondary px-5 py-2 rounded-full hover:bg-primary md:text-base"><PersonIcon /></Link>
                    ) : (
                        <Link href="{{ route('login') }}" className="bg-white text-secondary px-5 py-2 rounded-full hover:bg-primary text-xs flex items-center gap-1"><span className='text-base'>Masuk</span> <PersonIcon /></Link>
                    )
                }
                <span onClick={(e) => toggleIsExpandMenuMobile()} className="text-2xl cursor-pointer md:hidden">
                    <MenuIcon />
                </span>
            </div>
        </div>
        </nav>
    </header>
  )
}

export default Navbar
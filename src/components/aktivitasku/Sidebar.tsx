import Image from 'next/image'
import React, { useState } from 'react'
import { activityMenus } from '../../data'

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState<string>('Halaman Utama')

  return (
    <div className="flex flex-col gap-7 w-full">
        <div className="flex flex-col gap-3 relative w-full">
            <h3 className="text-sm block md:hidden">Aktivitasku <i className='bx bx-chevrons-right'></i> Halaman Utama</h3>
            <div className="bg-primary rounded-lg md:flex w-full">
                <div className="flex flex-col gap-4 w-full px-6 py-8">
                    <div className="flex flex-col gap-8 pb-6 md:h-full w-full items-center">
                        <div className="flex flex-col gap-2 border-b-2 border-b-[#808080] h-full pb-6 items-center w-full">
                            <Image width={0} height={0} src="https://pbs.twimg.com/profile_images/1537677628039380992/i3uUfk-Z_400x400.jpg" alt="" className="w-24 md:w-20 md:h-20 rounded-lg mx-auto" />
                            <h1 className="font-semibold text-2xl text-center md:text-center">UI Designer, <br />Mental Health App</h1>
                        </div>

                        <div className="flex flex-row gap-5 w-full items-center justify-center md:hidden">
                            {
                                activityMenus.map((menu, index) => (
                                    <div onClick={(e) => setActiveMenu(menu.title)} key={index} className={`px-2 py-1 rounded-lg hover:bg-secondary  border hover:text-white duration-700 transition-all ${activeMenu != menu.title ? 'border-secondary text-secondary' : 'bg-secondary text-white border-primary' }`}>
                                        <i className='text-3xl bx bxs-dashboard'></i>
                                    </div>
                                ))
                            }
                            {/* <Link href="" className="bg-secondary text-white px-2 py-1 rounded-lg hover:bg-secondary hover:text-white duration-700 transition-all">
                                <i className='text-3xl bx bxs-dashboard'></i>
                            </Link>
                            <Link href="" className="border border-secondary text-secondary px-2 py-1 rounded-lg hover:bg-secondary hover:text-white duration-700 transition-all">
                                <i className='text-3xl bx bxs-message-alt-dots'></i>
                            </Link>
                            <Link href="" className="border border-secondary text-secondary px-2 py-1 rounded-lg hover:bg-secondary hover:text-white duration-700 transition-all">
                                <i className='text-3xl bx bx-objects-vertical-top'></i>
                            </Link>
                            <Link href="" className="border border-secondary text-secondary px-2 py-1 rounded-lg hover:bg-secondary hover:text-white duration-700 transition-all">
                                <i className='text-3xl bx bxs-credit-card-alt'></i>
                            </Link> */}
                        </div>
    
                        <div className="hidden flex-col gap-5 w-full justify-center items-center md:flex">
                            {
                                activityMenus.map((menu, index) => (
                                    <div onClick={(e) => setActiveMenu(menu.title)} key={index} className={`border px-2 py-1 rounded-lg hover:bg-secondary hover:text-white duration-700 transition-all items-center flex gap-3 w-[15rem] text-sm ${activeMenu != menu.title ? 'border-secondary text-secondary' : 'bg-secondary text-white'} border-primary`}>
                                        <i className='text-2xl bx bxs-dashboard'></i>
                                        {menu.title}
                                    </div>
                                ))
                            }
                            {/* <Link href="/aktivitasku/chats" className="border border-secondary text-secondary px-2 py-1 rounded-lg hover:bg-secondary hover:text-white duration-700 transition-all items-center flex gap-3 w-[15rem] text-sm">
                                <i className='text-2xl bx bxs-message-alt-dots'></i>
                                Chat
                            </Link>
                            <Link href="" className="border border-secondary text-secondary px-2 py-1 rounded-lg hover:bg-secondary hover:text-white duration-700 transition-all items-center flex gap-3 w-[15rem] text-sm">
                                <i className='text-2xl bx bx-objects-vertical-top'></i>
                                Kanban
                            </Link>
                            <Link href="" className="border border-secondary text-secondary px-2 py-1 rounded-lg hover:bg-secondary hover:text-white duration-700 transition-all items-center flex gap-3 w-[15rem] text-sm">
                                <i className='text-2xl bx bxs-credit-card-alt'></i>
                                Pembayaran
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
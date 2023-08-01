'use client'
import { Footer, Navbar, ProyekDetailBar } from "@/components"
import Image from "next/image"
import SearchIcon from '@mui/icons-material/Search';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import InfoIcon from '@mui/icons-material/Info';
import { interested, proyeks } from "../../data";
import { useState } from "react";
import { ProyekItem } from "../../../interfaces/ProyekRelated";

export default function Home() {
  const [proyekSelected, setProyekSelected] = useState<ProyekItem>(proyeks[0])

  return (
    <main className="h-fit relative bg-[#F6F5F1] pb-20">
      <Navbar active={'Proyek'} />
      
      <section className="w-full bg-[#F6F5F1] relative md:mt-20 py-10 md:flex items-center md:items-start md:justify-between h-fit px-5 md:px-14 flex flex-col md:flex-row gap-7">
      <div className="flex flex-col gap-7 md:max-w-7xl md:w-2/3 md:pr-14">
            <div className="flex flex-col gap-3 relative">
                <h3 className="text-sm text-black">Proyek <i className='bx bx-chevrons-right text-black'></i></h3>
                <div className="bg-[#DBFF60] rounded-lg md:flex">
                    <div className="flex flex-col gap-1 md:w-2/3 py-6 px-4 ">
                        <h2 className="font-semibold text-xl md:text-2xl text-black">Bangun Proyek</h2>
                        <p className="text-sm md:text-base text-black">
                            Rancang proyek kamu bersama jutaan pengguna seluruh dunia melalui ProjeQu
                        </p>
                        <a href="" className="bg-white text-sm font-semibold px-4 py-2 w-fit rounded-full mt-2 block md:block hover:bg-[#183E6B] hover:text-white duration-700 transition-all text-black">Bangun Proyek</a>
                    </div>
                    <div className="md:w-2/3 h-[100%] hidden md:hidden">
                        <a href="" className="bg-white text-sm font-semibold px-4 py-2 w-fit rounded-full z-10 mt-16 hover:bg-[#183E6B] hover:text-white duration-700 transition-all text-black">Bangun Proyek</a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-2xl md:text-3xl text-black">Cari Proyek</h2>

                <form action="" method="POST" className="-mt-1">
                    <div className="rounded-lg px-4 py-2 w-full flex flex-row items-center justify-between bg-white relative shadow-sm">
                        <input className="text-sm md:text-base outline-none w-full" name='search' type='text' value='' placeholder='Apa minatmu?' />
                        <div className="flex flex-row gap-2 h-full rounded-lg self-end text-xl absolute right-0 bottom-0">
                            <button className="block">
                                <i className='bx bx-filter' ></i>
                            </button>
                            <button type="submit" className="bg-[#DBFF60] text-[#183E6B] w-full rounded-lg px-2 py-2 flex items-center justify-center"><SearchIcon /></button>
                        </div>
                    </div>
                </form>

                <div className="flex flex-row flex-wrap gap-2">
                    {
                        interested.map((item, index) => (
                            <span key={index} className="text-xs md:text-sm shadow-sm hover:cursor-pointer rounded-full bg-white px-4 py-2 hover:bg-[#DBFF60] transition-all duration-700 text-black">{item.title}</span>
                        ))
                    }
                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-col justify-between gap-4">
                    <div className="flex flex-row gap-2">
                        <h3 className="text-sm md:text-base font-semibold text-black">Proyek Berjalan</h3>
                        <h3 className="text-sm md:text-base font-semibold text-[#3576EB]">Terbaru</h3>
                    </div>

                    <div className="flex flex-col gap-4">
                    {
                        proyeks.map((proyek, index) => (
                            <div key={index} className={`flex flex-col gap-2 py-4 md:py-6 rounded-lg px-4 md:px-6 relative shadow-sm hover:bg-[#DBFF60] transition-all duration-700 hover:cursor-pointer group ${proyekSelected.projectName == proyek.projectName ? 'bg-[#DBFF60]' : 'bg-white'}`} onClick={(e) => setProyekSelected(proyek)}>
                                <div className="flex flex-row gap-4 md:items-center">
                                    <Image width={0} height={0} src={proyek.image} alt="" className="object-cover w-14 h-14 rounded-full" />

                                    <div className="flex flex-col">
                                        <h3 className="text-base md:text-xl font-semibold text-black">{proyek.projectName}</h3>
                                        <p className={`text-xs md:text-sm group-hover:text-[#183E6B] ${proyekSelected.projectName == proyek.projectName ? 'text-[#183E6B]' : 'text-[#808080]'}`}>{proyek.projectJob}</p>
                                        <span className={`flex flex-col justify-start gap-1 group-hover:text-[#183E6B] text-xs md:text-sm ${proyekSelected.projectName == proyek.projectName ? 'text-[#183E6B]' : 'text-[#808080]'}`}>
                                            <span><FmdGoodIcon fontSize='inherit' /> {proyek.location}</span>
                                            <span><AccessTimeFilledIcon fontSize='inherit' /> {proyek.duration} Hari</span>
                                        </span>
                                    </div>
                                </div>

                                <div className={`flex flex-col md:flex-row gap-2 text-lg group-hover:text-[#183E6B] absolute top-0 right-0 py-4 px-3 ${proyekSelected.projectName == proyek.projectName ? 'text-[#183E6B]' : 'text-[#808080]'}`}>
                                    <BookmarkIcon fontSize='inherit' />
                                    <InfoIcon fontSize='inherit' />
                                </div>

                                <button type="submit" className="bg-[#DBFF60] text-[#183E6B] w-fit rounded-bl-lg rounded-tl-lg px-2 py-2 flex md:hidden items-center justify-center text-xs md:text-sm font-semibold mt-1 absolute bottom-0 right-0">See Details</button>

                                <div className="md:flex flex-col gap-1 hidden absolute bottom-0 right-0 px-6 py-4">
                                    <p className='text-base text-[#3576eb]'>5 Hari tersisa</p>
                                    <p className='text-xs text-[#808080]'>Tim</p>
                                    <p className='text-sm text-black'>Informasi dan Teknologi</p>
                                    <h4 className='text-base text-black font-semibold'>Rp 1.500.000</h4>
                                </div>
                            </div>
                        ))
                    }
                    </div>

                    <div className="flex flex-row w-full items-center gap-3 mt-4">
                        <button type="submit" className="bg-[#193D5B] text-white w-full rounded-lg px-2 py-2 flex items-center justify-center font-semibold text-sm md:text-base">Sebelumnya</button>
                        <button type="submit" className="bg-[#3576EC] text-white w-fit rounded-lg px-4 py-2 flex items-center justify-center font-semibold text-sm md:text-base">1</button>
                        <button type="submit" className="bg-[#193D5B] text-white w-full rounded-lg px-2 py-2 flex items-center justify-center font-semibold text-sm md:text-base">Selanjutnya</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-1/3 hidden md:block"></div>
        <ProyekDetailBar proyek={proyekSelected} />
      </section>
      
      <Footer active={'Proyek'} />
    </main>
  )
}

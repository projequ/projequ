'use client'
import { Footer, Navbar } from "@/components"
import Image from "next/image"
import SearchIcon from '@mui/icons-material/Search';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import InfoIcon from '@mui/icons-material/Info';
import { interested, proyekCategories, proyeks } from "../../data";
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export default function Home() {
  const [aktivitaskuSelected, setAktivitaskuSelected] = useState<any>(proyeks[0])
  const [categorySelected, setCategorySelected] = useState<string>('Freelance')

  return (
    <main className="h-fit relative bg-[#F6F5F1] md:pb-20">
      <Navbar active={'Aktivitasku'} />
      
      <section className="w-full md:mt-20 bg-[#F6F5F1] relative py-10 md:flex items-center md:items-start md:justify-between h-fit px-5 md:px-14 flex flex-col gap-7">
        <div className="flex flex-col gap-5 w-full md:pr-14">
            <div className="flex flex-col gap-3 relative">
                <h3 className="text-sm">Aktivitasku <KeyboardDoubleArrowRightIcon fontSize='inherit' /></h3>
            </div>


            <div className="flex flex-col gap-4 w-full">
                <h2 className="font-semibold text-2xl md:text-3xl">Cari Proyek</h2>

                <form action="" method="POST" className="-mt-1 w-full flex flex-col gap-4 md:flex-row items-center justify-between">
                    <div className="rounded-lg px-4 py-3 w-full flex flex-row items-center justify-between bg-white relative shadow-sm">
                        <input className="text-sm md:text-base outline-none w-full" name='search' type='text' value='' placeholder='Apa minatmu?' />
                        <div className="flex flex-row gap-2 h-full rounded-lg self-end text-xl absolute right-0 bottom-0">
                            <button className="block">
                                <i className='bx bx-filter' ></i>
                            </button>
                            <button type="submit" className="bg-[#DBFF60] text-[#183E6B] w-full rounded-lg px-3 py-2 flex items-center justify-center"><SearchIcon /></button>
                        </div>
                    </div>

                    <div className="flex flex-row gap-2 w-full">
                        {
                            proyekCategories.map((category, index) => (
                                <span key={index} onClick={(e) => setCategorySelected(category.title)} className={`text-sm md:text-base font-semibold shadow-sm hover:cursor-pointer rounded-lg px-4 py-2 hover:bg-white hover:text-black hover:border-white transition-all duration-700 ${categorySelected == category.title ? 'bg-white text-black border-white' : 'bg-transparent border border-[#808080] text-[#808080]'}`}>{category.title}</span>
                            ))
                        }
                    </div>
                </form>
            </div>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-8">
            <div className="flex flex-col justify-between gap-4 md:w-[53%]">
                <div className="flex flex-col gap-4">
                    {
                        proyeks.map((proyek, index) => (
                            <div onClick={(e) => setAktivitaskuSelected(proyek)} key={index} className={`flex flex-col gap-2 py-4 md:py-6 rounded-lg px-4 md:px-6 relative shadow-sm hover:bg-[#DBFF60] transition-all duration-700 hover:cursor-pointer group ${aktivitaskuSelected.projectName == proyek.projectName ? 'bg-[#DBFF60]' : 'bg-white'}`}>
                                <div className="flex flex-row gap-4 items-center">
                                    <Image width={0} height={0} src={proyek.image} alt={proyek.projectName} className="object-cover w-14 md:w-20 md:h-20 h-14 rounded-lg" />

                                    <div className="flex flex-col">
                                        <h3 className="text-base md:text-xl font-semibold">{proyek.projectName}</h3>
                                        <p className={`text-xs md:text-sm group-hover:text-[#183E6B] ${aktivitaskuSelected.projectName == proyek.projectName ? 'text-[#183E6B]' : 'text-[#808080]'}`}>{proyek.projectJob}</p>
                                        <span className={`flex flex-col justify-start gap-1 group-hover:text-[#183E6B] text-xs md:text-sm ${aktivitaskuSelected.projectName == proyek.projectName ? 'text-[#183E6B]' : 'text-[#808080]'}`}>
                                            <span><FmdGoodIcon fontSize='inherit' /> {proyek.location}</span>
                                            <span><AccessTimeFilledIcon fontSize='inherit' /> 21 Hari</span>
                                        </span>
                                    </div>
                                </div>

                                <button type="submit" className="bg-[#DBFF60] text-[#183E6B] w-fit rounded-bl-lg rounded-tl-lg px-2 py-2 flex md:block items-center justify-center text-xs md:text-sm font-semibold mt-1 absolute bottom-0 right-0">{proyek.duration - 3} Hari Lagi</button>
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

            <div className="bg-white h-fit shadow-sm md:flex flex-col hidden md:flex-row md:gap-10 px-7 py-9 rounded-lg w-[47%]">
                <div className="flex flex-col md:gap-2">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row gap-8 pb-6 md:pr-6 md:h-full md:w-fit items-center">
                            <div className="flex flex-col gap-2 border-r-2 border-r-[#808080] h-full pr-6 items-center">
                                <Image width={0} height={0} src="https://pbs.twimg.com/profile_images/1537677628039380992/i3uUfk-Z_400x400.jpg" alt="" className="w-24 md:w-20 md:h-20 rounded-lg mx-auto" />
                                <h2 className="font-semibold text-xl text-center">James Brown</h2>
                            </div>
                            
                            <div className="flex flex-col gap-1 md:mt-4">
                                <h1 className="font-semibold text-2xl text-center md:text-left">{aktivitaskuSelected.projectJob}, <br />{aktivitaskuSelected.projectName}</h1>
                                <span className="flex flex-col justify-start gap-1 text-[#808080] group-hover text-sm">
                                    <span><FmdGoodIcon fontSize='inherit' /> {aktivitaskuSelected.location}</span>
                                    <span><AccessTimeFilledIcon fontSize='inherit' /> {aktivitaskuSelected.duration} Hari</span>
                                    <span><EditIcon fontSize='inherit' /> 3 Tahap</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-[1.5] gap-4 my-6 md:my-0">
                        <div className="flex flex-col gap-1">
                            <h4 className="font-semibold text-base">Deskripsi Proyek:</h4>

                            <p className="text-sm text-[#808080]">
                                Kesehatan Mental menjadi sebuah masalah yang hampir dialami oleh seluruh orang di dunia. Bahkan banyak dari mereka berakhir dengan tidak baik-baik saja.
                            </p>

                            <p className="text-sm flex items-center gap-1 text-[#3576EB] font-semibold">Baca Selengkapnya <i className='bx bxs-down-arrow' ></i></p>
                        </div>

                        <div className="flex flex-col gap-1 w-full pb-4">
                            <h4 className="font-semibold text-base">File Terkirim:</h4>
                            <ul className="text-sm text-[#808080] md:flex md:flex-col md:gap-2">
                                <li>• Sitemap</li>
                                <li>• Flowchart</li>
                            </ul>
                        </div>

                        <a href={`/aktivitasku/${aktivitaskuSelected.id}`} className="bg-[#193D5B] text-white w-fit mx-auto rounded-lg px-16 py-2 flex items-center justify-center font-semibold text-sm md:text-base">Masuk Sekarang</a>
                    </div>
                </div>
            </div>
        </div>
      </section>
      
      <Footer active={'Aktivitasku'} />
    </main>
  )
}

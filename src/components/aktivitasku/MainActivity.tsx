import Image from 'next/image'
import React from 'react'

const MainActivity = () => {
  return (
    <div className="flex flex-col gap-3 md:gap-8">
            <div className="bg-white h-fit shadow-sm md:flex flex-col md:flex-row md:gap-10 px-7 py-3 rounded-lg w-full">
                <div className="flex flex-col md:gap-2">
                    <div className="flex flex-col md:flex-[1.5] gap-4 my-6 md:my-0 md:py-10 h-fit">
                        <div className="flex flex-col md:flex-row gap-1">
                            <div className="flex flex-col gap-2 md:flex-1">
                                <h4 className="font-semibold text-base">Deskripsi dan Tahapan Proyek:</h4>
        
                                <div className="flex flex-col gap-2">
                                    <p className="text-sm text-[#808080]">
                                        Kesehatan Mental menjadi sebuah masalah yang hampir dialami oleh seluruh orang di dunia. Bahkan banyak dari mereka berakhir dengan tidak baik-baik saja.
                                    </p>
            
                                    <p className="text-sm text-[#808080]">
                                        Maka untuk mengatasi permasalahan tersebut dibuat sebuah aplikasi mobile yang berfungsi sebagai tindakan preventif akan terjadinya kesehatan mental 
                                    </p>
                                </div>
                            </div>
        
                            <div className="relative wrap overflow-hidden p-6 h-fit md:flex-2">
                                <div className="border-2-2 absolute border-opacity-50 border-black h-full border left-[50%]"></div>
                                <div className="flex justify-between items-center w-full right-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="z-20 flex items-center order-1 bg-black shadow-sm w-5 h-5 rounded-full">
                                        <h1 className="mx-auto font-semibold text-base text-white"></h1>
                                    </div>
                                    <div className="order-1 w-5/12 pl-3">
                                        <h3 className="mb-1 font-bold text-sm text-black">Tahapan Riset dan Brainstorming</h3>
                                        <p className="text-sm leading-snug text-[#808080] tracking-wide text-opacity-100"><i className='bx bxs-time-five' ></i> 7 Hari</p>
                                    </div>
                                </div>
                            
                                <div className="flex justify-between items-center flex-row-reverse w-full left-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="z-20 flex items-center order-1 ml-3 md:ml-0 bg-black shadow-sm w-5 h-5 rounded-full">
                                        <h1 className="mx-auto text-white font-semibold text-base"></h1>
                                    </div>
                                    <div className="order-1 w-5/12 -ml-3 md:ml-0">
                                        <h3 className="mb-1 font-bold text-sm text-black">Tahap Pembuatan Wireframe</h3>
                                        <p className="text-sm font-medium leading-snug text-[#808080] tracking-wide text-opacity-100"><i className='bx bxs-time-five' ></i> 7 Hari</p>
                                    </div>
                                </div>
                                
                                <div className="flex justify-between items-center w-full right-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="z-20 flex items-center order-1 bg-black shadow-sm w-5 h-5 rounded-full">
                                    <h1 className="mx-auto font-semibold text-base text-white"></h1>
                                    </div>
                                    <div className="order-1 w-5/12 pl-3">
                                        <h3 className="mb-1 font-bold text-sm text-black">Tahap Hi-Fi dan Prototyping</h3>
                                        <p className="text-sm leading-snug text-[#808080] tracking-wide text-opacity-100"><i className='bx bxs-time-five' ></i> 7 Hari</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="flex flex-col md:flex-row gap-3">
                <div className="flex flex-col gap-7 w-full md:w-2/3">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row items-center justify-between">
                            <p className="font-semibold text-base">Preview File : </p>
                            <span className="text-sm md:text-base font-semibold shadow-base hover:cursor-pointer rounded-lg bg-white px-4 py-2 hover:bg-[#DBFF60] transition-all duration-700">Terbaru</span>
                        </div>
                
                        <div className="h-fit md:flex flex-col md:flex-row md:gap-10 rounded-lg w-full">
                            <div className="flex flex-col md:gap-2">
                                <div className="flex flex-col md:flex-[1.5] gap-6 md:my-0">
                                    <div className="flex flex-col gap-1 w-full bg-white rounded-lg px-7 py-3">
                                        <div className="flex flex-row items-center justify-between gap-2">
                                            <h4 className="font-semibold text-base">Sitemap:</h4>
                
                                            <span className="bg-[#808080] w-fit px-2 py-1 rounded-full">
                                                <i className='bx bx-dots-horizontal-rounded text-2xl text-white'></i>
                                            </span>
                                        </div>
                
                                        <Image width={0} height={0} src="/sitemap.png" alt="Sitemap"
                                        className='w-full h-full'
                                        />
                                    </div>
                
                                    <div className="flex flex-col gap-1 w-full bg-white rounded-lg px-7 py-3">
                                        <div className="flex flex-row items-center justify-between gap-2">
                                            <h4 className="font-semibold text-base">Flowchart:</h4>
                
                                            <span className="bg-[#808080] w-fit px-2 py-1 rounded-full">
                                                <i className='bx bx-dots-horizontal-rounded text-2xl text-white'></i>
                                            </span>
                                        </div>
                
                                        <Image width={0} height={0} src="/user-flow.png" alt="Flowchart"
                                        className='w-full h-full'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="bg-white h-fit shadow-sm md:flex flex-col md:flex-row md:gap-10 px-7 py-3 rounded-lg w-full md:w-1/3">
                    <div className="flex flex-col md:gap-2">
                        <div className="flex flex-col md:flex-[1.5] gap-4 my-6 md:my-0">
                            <div className="flex flex-col gap-1">
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-col gap-4 pb-6 border-b-2 border-b-[#808080]">
                                        <h4 className="font-semibold text-base">Progress Proyek:</h4>
                                        <span className="text-base md:text-base font-semibold shadow-sm hover:cursor-pointer rounded-lg bg-[#3576EC] text-white px-4 py-2 hover:bg-[#3576EC] transition-all duration-700 text-center">Kirim File</span>
                                    </div>
                                    
                                    <div className="flex flex-col gap-2 py-5">
                                        <p className="font-medium text-sm">Progress Terkirim : </p>
                                        <div className="flex flex-col gap-2">
                                            <p className="text-sm">• Sitemap</p>
                                            <div className="bg-[#DBFF60] rounded-lg md:flex">
                                                <div className="flex flex-col gap-1 w-full py-4 px-4">
                                                    <h2 className="font-semibold text-base">Balasan manager proyek</h2>
                                                    <p className="text-sm">
                                                        "Terima kasih, silahkan dilanjutkan"
                                                    </p>
                                                    <p className="text-xs w-full self-end">
                                                        Selasa, 14 April 2023
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
            
                                        <div className="flex flex-col gap-1">
                                            <p className="text-sm">• Flowchart</p>
                                            <div className="bg-[#DBFF60] rounded-lg md:flex">
                                                <div className="flex flex-col gap-1 w-full py-4 px-4 ">
                                                    <h2 className="font-semibold text-base">Balasan manager proyek</h2>
                                                    <p className="text-sm">
                                                        "Sudah bagus, terima kasih silahkan diteruskan"
                                                    </p>
                                                    <p className="text-xs w-full self-end">
                                                        Selasa, 14 April 2023
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
  )
}

export default MainActivity
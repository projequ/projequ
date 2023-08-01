'use client'
import { Footer, Navbar } from '@/components'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <main className="h-fit relative bg-[#F6F5F1] pb-20">
      <Navbar active={'Proyek'} />
      <section className="w-full relative md:h-screen h-fit bg-white mb-0 md:mb-[60vh]">
        <div className="relative">
            <Image width={0} height={0} src="/bg-pro-account.png" alt="Background" title="Background" className="w-full h-[65vh]" />

            <div className="flex flex-col items-center justify-center p-10 text-gray-700 md:p-20 w-full -mt-[60vh]">
                <h1 className="md:text-[70px] text-[20px] text-center font-medium text-white">Pilih PAKET PRO Versi Kamu</h1>
                <p className="text-white md:text-[25px] text-[15px] text-center">Dapatkan keuntungan dengan ProjeQu Pro</p>

                <div className="flex flex-wrap items-center justify-center md:w-full w-[22rem] max-w-7xl mt-12">
                    <div className="flex flex-col flex-grow w-[24rem] mt-8 overflow-hidden bg-white rounded-lg shadow-lg hover:border-btn-primary">
                        <div className="flex flex-col items-center p-10">
                            <Image width={0} height={0} src="/basic.svg" className="mt-10" alt="Basic" title="Basic" />
                            <span className="font-semibold mt-8 text-[25px]">Basic</span>
                            <span className="font-normal text-center text-[16px] text-[#808080]">Tingkatkan kreativitas dengan proyek baru</span>
                            <div className="flex items-center mt-5">
                                <span className="text-3xl">Rp</span>
                                <span className="text-5xl font-bold">0</span>
                                <span className="text-2xl text-gray-500">/bulan</span>
                            </div>
                            <div className="flex items-center mt-5">
                                <span className="text-3xl"></span>
                                <span className="text-5xl font-bold"></span>
                                <span className="text-2xl text-gray-500"></span>
                            </div>
                        </div>
                        <hr className="mx-10" />
                        <div className="p-10">
                            <ul className="flex flex-col gap-3 text-[16px]">
                                <li className="flex items-center">
                                    <i className='bx bx-check-circle' ></i>
                                    <span className="ml-2">Memiliki akses kanban</span>
                                </li>
                                <li className="flex items-center">
                                    <i className='bx bx-check-circle' ></i>
                                    <span className="ml-2">Pencarian proyek yang luas</span>
                                </li>
                                <li className="flex items-center">
                                    <i className='bx bx-x-circle' ></i>
                                    <span className="ml-2">Pengutamaan proyek</span>
                                </li>
                                <li className="flex items-center">
                                    <i className='bx bx-x-circle' ></i>
                                    <span className="ml-2">Dapat membuat dan mengerjakan proyek di waktu yang sama</span>
                                </li>
                                <li className="flex items-center">
                                    <i className='bx bx-x-circle' ></i>
                                    <span className="ml-2">Penghapusan biaya layanan</span>
                                </li>
                                <li className="flex items-center">
                                    <i className='bx bx-x-circle' ></i>
                                    <span className="ml-2">Penambahan batas pengajuan proyek</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex px-10 pb-10 justfy-center">
                            <button className="flex items-center justify-center w-fit mx-auto h-12 px-16 text-sm uppercase rounded-full bg-gray-400 text-white font-semibold">Berjalan</button>
                        </div>
                    </div>
            
                    <div className="z-10 flex flex-col flex-grow w-[24rem] mt-8 overflow-hidden transform bg-white rounded-lg shadow-lg md:scale-110 relative border-btn-primary border-2">
                        <Image width={0} height={0} src="/pro.svg" className="w-32 absolute top-1 left-1" title="Pro Badge" alt="Pro Badge"/>
                        <div className="flex flex-col items-center p-10">
                            <Image width={0} height={0} src="/personal.svg" className="mt-10" alt="Basic" title="Basic" />
                            <span className="font-semibold mt-8 text-[25px]">Personal</span>
                            <span className="font-normal text-center text-[16px] text-[#808080]">Rancang proyek melebihi ekspektasi</span>
                            <div className="flex items-center mt-2">
                                <span className="text-3xl">Rp</span>
                                <span className="text-5xl font-bold">34.999</span>
                                <span className="text-2xl text-gray-500">/bulan</span>
                            </div>
                            <span className="font-normal w-[15rem] text-center text-[16px] text-[#808080] mt-2">Atau</span>
                            <div className="flex items-center mt-2">
                                <span className="text-3xl">Rp</span>
                                <span className="text-5xl font-bold">299.999</span>
                                <span className="text-2xl text-gray-500">/tahun</span>
                            </div>
                        </div>
                        <hr className="mx-10" />
                        <div className="p-10">
                            <ul className="flex flex-col gap-3 text-[16px]">
                                <li className="flex items-center">
                                    <i className='bx bx-check-circle' ></i>
                                    <span className="ml-2">Memiliki akses kanban</span>
                                </li>
                                <li className="flex items-center">
                                    <i className='bx bx-check-circle' ></i>
                                    <span className="ml-2">Pencarian proyek yang luas</span>
                                </li>
                                <li className="flex items-center">
                                    <i className='bx bx-check-circle' ></i>
                                    <span className="ml-2">Pengutamaan proyek</span>
                                </li>
                                <li className="flex items-center">
                                    <i className='bx bx-check-circle' ></i>
                                    <span className="ml-2">Dapat membuat dan mengerjakan proyek di waktu yang sama</span>
                                </li>
                                <li className="flex items-center">
                                    <i className='bx bx-check-circle' ></i>
                                    <span className="ml-2">Penghapusan biaya layanan</span>
                                </li>
                                <li className="flex items-center">
                                    <i className='bx bx-x-circle' ></i>
                                    <span className="ml-2">Penambahan batas pengajuan proyek</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex px-10 pb-10 justfy-center">
                            <button className="flex items-center justify-center w-fit mx-auto h-12 px-16 text-sm uppercase rounded-full bg-btn-primary text-white font-semibold">Mulai</button>
                        </div>
                    </div>
            
                    <div className="flex flex-col mt-8 flex-grow w-[24rem] overflow-hidden bg-white rounded-lg shadow-lg mt-19">
                        <div className="flex flex-col items-center p-10">
                            <Image width={0} height={0} src="/business.svg" className="mt-10" alt="Basic" title="Basic" />
                            <span className="font-semibold mt-8 text-[25px]">Business</span>
                            <span className="font-normal text-center text-[16px] text-[#808080]">Kolaborasi dengan seluruh pengguna di dunia</span>
                            <div className="flex items-center mt-5">
                                <span className="text-3xl">Rp</span>
                                <span className="text-5xl font-bold">69.999</span>
                                <span className="text-2xl text-gray-500">/bulan</span>
                            </div>
                            <span className="font-normal w-[15rem] text-center text-[16px] text-[#808080] mt-2">Atau</span>
                            <div className="flex items-center mt-2">
                                <span className="text-3xl">Rp</span>
                                <span className="text-5xl font-bold">699.999</span>
                                <span className="text-2xl text-gray-500">/tahun</span>
                            </div>
                        </div>
                        <hr className="mx-10" />
                        <div className="px-10 py-5">
                            <ul className="flex flex-col gap-3 text-[16px]">
                                <li className="flex items-center">
                                    <i className='bx bx-check-circle' ></i>
                                    <span className="ml-2">Memiliki akses kanban</span>
                                </li>
                                <li className="flex items-center">
                                    <i className='bx bx-check-circle' ></i>
                                    <span className="ml-2">Pencarian proyek yang luas</span>
                                </li>
                                <li className="flex items-center">
                                    <i className='bx bx-check-circle' ></i>
                                    <span className="ml-2">Pengutamaan proyek</span>
                                </li>
                                <li className="flex items-center">
                                    <i className='bx bx-check-circle' ></i>
                                    <span className="ml-2">Dapat membuat dan mengerjakan proyek di waktu yang sama</span>
                                </li>
                                <li className="flex items-center">
                                    <i className='bx bx-check-circle' ></i>
                                    <span className="ml-2">Penghapusan biaya layanan</span>
                                </li>
                                <li className="flex items-center">
                                    <i className='bx bx-check-circle' ></i>
                                    <span className="ml-2">Penambahan batas pengajuan proyek</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex px-10 pb-10 justfy-center">
                            <button className="flex items-center justify-center w-fit mx-auto h-12 px-16 text-sm uppercase rounded-full bg-btn-primary text-white font-semibold">Mulai</button>
                        </div>
                    </div>
                </div>
            
            </div>
            </div>
      </section>
      <Footer active={'ProjeQu Pro'} />
    </main>
  )
}

export default Home
'use-client'
import React, { useState } from 'react'
import '../../../app/globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Footer, Navbar } from '@/components'
import Image from 'next/image'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import EditIcon from '@mui/icons-material/Edit';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function Home() {

    return (
      <main className={`h-fit bg-[#F6F5F1] ${plusJakartaSans.className} font-poppins`}>
        <Navbar active={'Proyek'} />

        <section className="w-full md:mt-20 bg-[#F6F5F1] relative py-10 md:flex items-center md:items-start md:justify-between h-fit px-5 md:px-14 flex flex-col  gap-5">

          <div className="w-full flex flex-col gap-3 md:max-w-6xl md:mx-auto">
            <h3 className="text-sm">Proyek <KeyboardDoubleArrowRightIcon /> Pendaftaran</h3>

            <div className="bg-white shadow-sm flex flex-col md:flex-row md:gap-10 px-7 py-9 rounded-lg">
                <div className="flex flex-col md:flex-row md:gap-6">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2 border-b-2 md:border-r-2 md:border-b-0 border-b-[#808080] md:border-r-[#808080] border-opacity-80 pb-6 md:pr-6 md:h-full md:w-fit">
                            <Image width={0} height={0} src="https://pbs.twimg.com/profile_images/1537677628039380992/i3uUfk-Z_400x400.jpg" alt="" className="w-24 md:w-20 md:h-20 rounded-lg mx-auto" />

                            <h2 className="font-semibold text-xl text-center">James Brown</h2>

                            <div className="flex flex-col gap-1 md:mt-4">
                                <p className="text-sm text-left font-semibold">Detail Proyek</p>
                                <span className="flex flex-col justify-start gap-1 text-[#808080] group-hover text-sm">
                                    <span><FmdGoodIcon /> Palembang, Indonesia</span>
                                    <span><AccessTimeFilledIcon /> 21 Hari</span>
                                    <span><EditIcon /> 3 Tahap</span>
                                </span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <p className="text-sm text-left font-semibold">Contacts</p>
                                <span className="flex flex-col justify-start gap-1 text-[#183E6B] group-hover text-sm">
                                    <span><InstagramIcon /> James_B</span>
                                    <span><FacebookIcon /> James Brown. C</span>
                                    <span><AlternateEmailIcon /> JBC08@gmail.com</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-[1.5] gap-4 my-6 md:my-0">
                        <h1 className="font-semibold text-2xl text-center md:text-left">UI Designer, <br />Mental Health App</h1>

                        <div className="flex flex-col gap-1">
                            <h4 className="font-semibold text-base">Deskripsi Proyek:</h4>

                            <p className="text-sm text-[#808080]">
                                Kesehatan Mental menjadi sebuah masalah yang hampir dialami oleh seluruh orang di dunia. Bahkan banyak dari mereka berakhir dengan tidak baik-baik saja.
                            </p>

                            <p className="text-sm text-[#808080]">
                                Maka untuk mengatasi permasalahan tersebut dibuat sebuah aplikasi mobile yang berfungsi sebagai tindakan preventif akan terjadinya kesehatan mental.
                            </p>
                        </div>

                        <div className="flex flex-col gap-1 w-full pb-4">
                            <h4 className="font-semibold text-base">Batasan Minimal Kebutuhan:</h4>
                            <ul className="text-sm text-[#808080] md:flex md:flex-col md:gap-2">
                                <li>• Minimal pendidikan SMA</li>
                                <li>• Memahami tentang visual</li>
                                <li>• Memiliki selera visual yang baik</li>
                                <li>• Mempunyai manajemen waktu yang teratur</li>
                                <li>• Mampu membuat prototyping aplikasi</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='bg-[#DBFF60] w-full px-4 md:h-fit py-6 rounded-lg'>
                    <div className="flex flex-col gap-1">
                        <h4 className="font-semibold text-base">Tahapan Pelaksanaan <br />Proyek:</h4>

                        <div className="flex flex-col">
                            <div className="relative wrap overflow-hidden p-6 h-fit">
                                <div className="border-2-2 absolute border-opacity-50 border-[#183E6B] h-full border" style={{ left: '50%' }}></div>
                                <div className="flex justify-between items-center w-full right-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="z-20 flex items-center order-1 bg-[#183E6B] shadow-sm w-5 h-5 rounded-full">
                                        <h1 className="mx-auto font-semibold text-base text-white"></h1>
                                    </div>
                                    <div className="order-1 w-5/12 py-4">
                                        <h3 className="mb-1 font-bold text-sm text-[#183E6B]">Tahapan Riset dan Brainstorming</h3>
                                        <p className="text-sm leading-snug text-[#808080] tracking-wide text-opacity-100"><i className='bx bxs-time-five' ></i> 7 Hari</p>
                                    </div>
                                </div>
                            
                                <div className="flex justify-between flex-row-reverse items-center w-full left-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="z-20 flex items-center order-1 ml-3 md:ml-0 bg-[#183E6B] shadow-sm w-5 h-5 rounded-full">
                                        <h1 className="mx-auto text-white font-semibold text-base"></h1>
                                    </div>
                                    <div className="order-1 w-5/12 -ml-3 md:ml-0 py-4">
                                        <h3 className="mb-1 font-bold text-sm text-[#183E6B]">Tahap Pembuatan Wireframe</h3>
                                        <p className="text-sm font-medium leading-snug text-[#808080] tracking-wide text-opacity-100"><i className='bx bxs-time-five' ></i> 7 Hari</p>
                                    </div>
                                </div>
                                
                                <div className="flex justify-between items-center w-full right-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="z-20 flex items-center order-1 bg-[#183E6B] shadow-sm w-5 h-5 rounded-full">
                                    <h1 className="mx-auto font-semibold text-base text-white"></h1>
                                    </div>
                                    <div className="order-1 w-5/12 py-4">
                                        <h3 className="mb-1 font-bold text-sm text-[#183E6B]">Tahap Hi-Fi dan Prototyping</h3>
                                        <p className="text-sm leading-snug text-[#808080] tracking-wide text-opacity-100"><i className='bx bxs-time-five' ></i> 7 Hari</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white shadow-sm flex flex-col px-7 py-9 rounded-lg">
                <div className="flex-col gap-1 md:flex hidden mb-6">
                    <h1 className="font-semibold text-2xl text-left border-b-2 border-b-[#808080] border-opacity-80 pb-3">Proses Pendaftaran</h1>
                    <p className="text-sm mt-3">
                        Lengkap proses pendaftaran dan buktikan keterampilan kamu
                    </p>
                </div>

                <form className="flex flex-col md:flex-row md:items-center gap-6 relative">
                    <div className="flex flex-col gap-6 md:flex-1">
                        <div className="flex flex-col gap-1 md:hidden">
                            <h1 className="font-semibold text-2xl text-center border-b-2 border-b-[#808080] border-opacity-80 pb-3">Proses Pendaftaran</h1>
                            <p className="text-sm mt-3">
                                Lengkap proses pendaftaran dan buktikan keterampilan kamu
                            </p>
                        </div>
                        
                        <div className="flex flex-col gap-2 md:w-2/3">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="full_name" className="font-semibold text-sm">Nama Lengkap</label>
                                <input type="text" name="full_name" id="full_name" className="w-full rounded-full shadow-sm border border-gray-400 text-sm px-4 py-2" placeholder="Masukkan Nama Lengkap" />
                            </div>
        
                            <div className="flex flex-col gap-2">
                                <label htmlFor="job" className="font-semibold text-sm">Pekerjaan</label>
                                <input type="text" name="full_name" id="job" className="w-full rounded-full shadow-sm border border-gray-400 text-sm px-4 py-2" placeholder="Masukkan Pekerjaan" />
                            </div>
        
                            <div className="flex flex-col gap-2">
                                <label htmlFor="age" className="font-semibold text-sm">Usia</label>
                                <input type="number" name="full_name" id="age" className="w-full rounded-full shadow-sm border border-gray-400 text-sm px-4 py-2" placeholder="Masukkan Usia-mu" />
                            </div>
        
                            <div className="flex flex-col gap-2">
                                <label htmlFor="skills" className="font-semibold text-sm">Keahlian</label>
                                <input type="text" name="full_name" id="skills" className="w-full rounded-full shadow-sm border border-gray-400 text-sm px-4 py-2" placeholder="Pilih Keahlianmu" />
                            </div>
        
                            <div className="flex flex-col gap-2">
                                <label htmlFor="phone_number" className="font-semibold text-sm">Nomor Telepon</label>
                                <input type="number" name="full_name" id="full_name" className="w-full rounded-full shadow-sm border border-gray-400 text-sm px-4 py-2" placeholder="Masukkan Nomor Telepon" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="dokumen" className="font-semibold text-sm">Dokumen Lampiran <span className="font-normal">(Portfolio, sertifikat, dll)</span></label>
                                <input type="file" name="dokumen" id="full_name" className="w-full rounded-full shadow-sm border border-gray-400 text-sm px-4 py-2 border-dashed" placeholder="Masukkan Nomor Telepon" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 md:flex-1 md:absolute md:top-6 md:right-0">
                        <button type="submit" className="bg-[#DBFF60] text-sm font-semibold px-4 py-3 w-full md:w-[300px] rounded-full block">Daftar Sekarang</button>
                        <button type="button" className="bg-[#183E6B] text-sm text-white font-semibold px-4 py-3 w-full md:w-[300px] rounded-full block">Batalkan</button>
                    </div>

                    <Image width={0} height={0} src="/img-register-proyek.png" className="w-[350px] absolute -bottom-12 -right-20 md:block hidden" alt="" />
                </form>
            </div>

            <div className="bg-white shadow-sm flex flex-col px-7 py-9 rounded-lg">
                <div className="flex-col gap-1 md:flex hidden mb-6">
                    <h1 className="font-semibold text-2xl text-left border-b-2 border-b-[#808080] border-opacity-80 pb-3">Proses Pendaftaran</h1>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-6 relative">
                    <div className="flex flex-col gap-6 md:flex-1">
                        <div className="flex flex-col gap-1 md:hidden">
                            <h1 className="font-semibold text-2xl text-center border-b-2 border-b-[#808080] border-opacity-80 pb-3">Proses Pendaftaran</h1>
                        </div>

                        <div className="flex flex-col gap-1">
                            <Image width={0} height={0} src="/img-success-register.png" alt="" className="w-full md:w-[300px] mx-auto" />
                            <p className="text-center font-semibold">Kamu <span className="text-[#3576eb]">Berhasil</span> Mendaftar Silahkan Tunggu <br className="hidden md:block" />Pemberitahuan Lebih Lanjut</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>

        </section>

        <Footer />
      </main>
    )
}

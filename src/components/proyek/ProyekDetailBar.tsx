import Image from 'next/image'
import React, { useState } from 'react'
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import Link from 'next/link';

const ProyekDetailBar: React.FC<any> = ({ proyek }) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState<boolean>(false)
 
  const toggleIsDescriptionExpanded = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded)
  }

  return (
    <div className="hidden md:fixed md:mt-20 w-1/3 md:flex flex-col rounded-bl-lg rounded-br-lg absolute top-0 right-10 bg-white shadow-md gap-3 px-10 py-8 items-center">
            <Image width={0} height={0} src={proyek.image} alt="" className="w-20 h-20 rounded-lg" />

            <div className="flex flex-col items-center border-b-2 border-b-[#808080] border-opacity-80 w-full pb-4">
                <p className="font-medium text-base text-center text-black">James Brown</p>
                <h1 className="font-semibold text-2xl text-center text-black">{proyek.projectJob}, <br />{proyek.projectName}</h1>
                <p className="text-xs md:text-sm text-[#808080] text-center">{proyek.location}</p>
            </div>

            <div className="flex flex-col gap-1 border-b-2 border-b-[#808080] border-opacity-80 w-full pb-4">
                <h4 className="font-semibold text-base text-black">Batasan Minimal Kebutuhan:</h4>
                <ul className={`text-sm text-[#808080] ${isDescriptionExpanded ? 'hidden' : 'block'}`}>
                    <li>• Minimal pendidikan SMA</li>
                    <li>• Memahami tentang visual</li>
                    <li>• Memiliki selera visual yang baik</li>
                    <li>• Mempunyai manajemen waktu yang teratur</li>
                    <li>• Mampu membuat prototyping aplikasi</li>
                </ul>
            </div>

            <div className="flex flex-col gap-1">
                <h4 className="font-semibold text-base text-black">Deskripsi Proyek:</h4>
                <p className="text-sm text-[#808080]">
                    {
                        !isDescriptionExpanded ? proyek.description.substring(0, 153) : proyek.description
                    } 
                </p>
                <p onClick={(e) => toggleIsDescriptionExpanded()} className="text-sm flex items-center gap-1 text-[#3576EB] font-semibold cursor-pointer">
                    {
                        !isDescriptionExpanded ? 'Baca Selengkapnya' : 'Lihat Sedikit'
                    }
                </p>
            </div>

            <div className="flex flex-row gap-1 w-full">
                <Link href={`/proyek/james-brown/${proyek.id}`} className="bg-[#193D5B] text-white w-full rounded-lg px-2 py-2 flex items-center justify-center font-semibold text-sm md:text-base">Daftar Sekarang</Link>
                <Link href='' className="bg-[#DBFF60] text-[#193D5B] w-fit rounded-lg px-2 py-2 flex items-center justify-center font-semibold text-sm md:text-2xl"><ChatRoundedIcon fontSize='inherit' /></Link>
            </div>
        </div>
  )
}

export default ProyekDetailBar
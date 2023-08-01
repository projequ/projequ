'use client'
import { Footer, Navbar } from "@/components"
import Image from "next/image"

export default function Home() {
  return (
    <main className="h-fit bg-[#F6F5F1]">
      <Navbar active={'Beranda'} />

      <section className="w-full md:mt-20 bg-primary md:h-fit h-fit md:pb-28 pb-16 relative">
        <article className="max-w-8xl md:px-20 flex items-center justify-between mx-auto flex-col-reverse md:flex-row">
            <div className="md:mt-24 gap-3 flex flex-col md:px-0 px-6">
                <div className="flex bg-secondary text-white items-center gap-3 w-fit pr-4 rounded-lg">
                    <span className="bg-btn-primary text-primary max-w-fit h-full rounded-tl-lg rounded-bl-lg">
                        <Image width={0} height={0} src="/decoration/double-arrow.svg" className="w-8 p-2" alt="Double Arrow Icon" title="Double Arrow Icon" />
                    </span>
                    <p className="md:text-[19px]">Skills Up Granted</p>
                </div>

                <div className="flex flex-col md:gap-7 gap-5">
                    <h1 className="font-semibold md:text-[60px] text-[35px] md:leading-[130%] text-black">Raih Peningkatan <br />Kualitas Diri</h1>
                    <p className="md:text-[18px] text-[18px] md:leading-[130%] md:max-w-2xl text-black">
                        <b>Tingkatkan</b> pengalaman dan keterampilan serta bentuk relasi kamu. <b>Bangun</b> proyek melalui studi kasus kamu dan jadilah pemenang di setiap tantangan
                    </p>

                    <div className="flex gap-3">
                        <Image width={0} height={0} src="/decoration/sparkled.svg" alt="Sparkled Decoration Website" className="w-16" title="Sparkled Decoration Website" />

                        <div className="md:text-[25px] text-[18px] text-black">
                            <p><b>Wujudkan</b> Ekspektasi</p>
                            <p><b>Raih</b> Mimpi</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <a href="" className="bg-secondary text-white rounded-lg md:px-8 px-5 md:py-2 py-3 font-[500] md:text-[18px] md:leading-[39.28px]" title="Cari Proyek" data-aos="zoom-in">Cari Proyek</a>
                        <a href="" className="bg-btn-primary text-white rounded-lg md:px-8 px-5 md:py-2 py-3 font-[500] md:text-[18px] md:leading-[39.28px]" title="Bangun Proyek" data-aos="zoom-in" data-aos-delay="200" data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">Bangun Proyek</a>
                    </div>
                </div>
            </div>

            <Image width={768} height={0} src="/hero-image.webp" alt="Gambar Section Hero" title="Gambar Section Hero" className="md:absolute static md:right-0 md:top-0 md:w-[43vw]" />
        </article>
      </section>

      <section className="w-full bg-white relative py-10 md:flex md:items-center md:h-[70vh]">
        <div className="mx-auto max-w-6xl md:px-6 px-6">
            <div className="flex flex-col gap-1 md:text-left text-center">
                <p className="font-medium text-btn-primary text-[18px] mb-2">Layanan</p>
                <h1 className="font-semibold md:text-[60px] text-[35px] md:leading-[120%] text-black">Selesaikan Proyek <br />Bersama Kami</h1>
            </div>

            <div className="flex flex-col gap-2 text-white bg-secondary rounded-[50px] px-2 py-12 md:py-16 text-[13px] text-center mt-5 w-fit mx-auto md:hidden">
                <p className="w-[20rem] mx-auto mb-8 px-5">
                    ProjeQu menawarkan layanan platform pengerjaan proyek dengan menciptakan sebuah komunitas sebagai wadah pemicu motivasi
                </p>

                <div className="flex flex-col gap-8 w-fit mx-auto">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image width={20} height={0} src="/logo/koneksi.svg" alt="Perluas Koneksi" title="Perluas Koneksi" className="w-20" />
                        <p>Perluas Koneksi</p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image width={20} height={0} src="/logo/proyek.svg" alt="Variatif Proyek" title="Variatif Proyek" className="w-20" />
                        <p>Variatif Proyek</p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image width={20} height={0} src="/logo/progress.svg" alt="Pemantauan Progress" title="Pemantauan Progress" className="w-20" />
                        <p>Pemantauan Progress</p>
                    </div>
                </div>
            </div>
            
            <div className="mt-8 md:w-fit flex md:px-0 px-10">
                <a href="" className="bg-secondary text-white rounded-lg px-8 md:py-2 py-3 font-[500] md:text-[18px] md:leading-[39.28px] md:mx-0 mx-auto md:w-fit w-full md:text-left text-center" title="Cari Proyek">Cari Proyek</a>
            </div>
        </div>

        <div className="hidden md:flex md:flex-col text-white bg-secondary rounded-[50px] px-2 py-16 text-[13px] text-center mt-5 w-fit mx-auto max-w-6xl">
            <p className="md:w-[50rem] w-[20rem] mx-auto mb-8 px-5 text-[18px]">
                ProjeQu menawarkan layanan platform pengerjaan proyek dengan menciptakan sebuah komunitas sebagai wadah pemicu motivasi
            </p>

            <div className="flex gap-14 w-fit mx-auto">
                <div className="flex flex-col justify-center items-center gap-2 text-[18px]" >
                    <Image width={28} height={0} src="/logo/koneksi.svg" alt="Perluas Koneksi" title="Perluas Koneksi" className="md:w-28 w-20" />
                    <p>Perluas Koneksi</p>
                </div>

                <div className="flex flex-col justify-center items-center gap-2 text-[18px]"  >
                    <Image width={28} height={0} src="/logo/proyek.svg" alt="Variatif Proyek" title="Variatif Proyek" className="md:w-28 w-20" />
                    <p>Variatif Proyek</p>
                </div>

                <div className="flex flex-col justify-center items-center gap-2 text-[18px]">
                    <Image width={28} height={0} src="/logo/progress.svg" alt="Pemantauan Progress" title="Pemantauan Progress" className="md:w-28 w-20" />
                    <p>Pemantauan Progress</p>
                </div>
            </div>
        </div>
      </section>

      <section className="w-full bg-primary py-16 relative md:h-[50vh] md:flex md:items-center md:justify-start">
          <div className="md:px-20 px-6 relative z-10">
              <p className="text-secondary font-medium md:text-[40px] md:max-w-4xl text-[23px] z-40">
                  “Sukses hanyalah hasil dari persiapan, kerja keras, ketekunan, dan belajar dari kegagalan."
              </p>
          </div>

          <Image width={36} height={0} src="/decoration/elipse1.png" className="absolute bottom-0 md:w-36 w-24" alt="Decoration Section" title="Decoration Section" />

          <Image width={32} height={0} src="/decoration/elipse5.png" className="absolute top-0 right-0 w-32" alt="Decoration Section" title="Decoration Section" />

          <Image width={24} height={0} src="/decoration/elipse4.png" className="absolute bottom-0 right-0 w-24" alt="Decoration Section" title="Decoration Section" />
      </section>

      <section className="w-full bg-white py-16 relative">
          <div className="mx-auto max-w-8xl md:gap-20 md:px-20 px-6 relative md:flex md:flex-row-reverse">
              <div className="flex flex-col gap-1 text-center md:text-left" data-aos="zoom-in">
                  <p className="font-medium text-btn-primary text-[18px] mb-2">Layanan</p>
                  <h1 className="font-semibold md:text-[60px] text-[35px] md:leading-[120%] md:w-fit w-60 mx-auto text-black">Terhubung Ke Pengguna</h1>

                  <ul className="md:flex hidden flex-col gap-3 mt-12 text-center md:text-left text-black">
                      <li className="flex gap-4 items-center text-[18px]"><span className='text-3xl'>•&nbsp;</span> Real Time Data</li>
                      <li className="flex gap-4 items-center text-[18px]"><span className='text-3xl'>•&nbsp;</span> Branding</li>
                      <li className="flex gap-4 items-center text-[18px]"><span className='text-3xl'>•&nbsp;</span> Strategi Sosial Media</li>
                      <li className="flex gap-4 items-center text-[18px]"><span className='text-3xl'>•&nbsp;</span> Manajemen Proyek</li>
                      <li className="flex gap-4 items-center text-[18px]"><span className='text-3xl'>•&nbsp;</span> Perjanjian Mitra</li>
                  </ul>

                  <div className="mt-8 md:flex hidden">
                  <a href="" className="bg-btn-primary text-white rounded-lg px-8 md:py-2 py-3 font-[500] md:text-[18px] md:leading-[39.28px] w-fit text-left" title="Bangun Proyek">Bangun Proyek</a>
              </div>
              </div>

              <div className="relative h-fit">
                  <Image width={768} height={0} src="/section-image.webp" className="mx-auto md:mt-0 mt-10 md:w-[40rem]" alt="Gambar Terhubung Ke Pengguna" title="Gambar Terhubung Ke Pengguna"/>
                  <Image width={20} height={0} src="/logo/wifi.svg" className="mx-auto md:mt-0 mt-10 absolute w-20 top-0 -left-5" alt="Gambar Terhubung Ke Pengguna" title="Gambar Terhubung Ke Pengguna" />
                  <Image width={20} height={0} src="/logo/connected.svg" className="mx-auto md:mt-0 mt-10 absolute w-20 -right-3 md:-bottom-3 -bottom-8" alt="Gambar Terhubung Ke Pengguna" title="Gambar Terhubung Ke Pengguna" />
              </div>

              <ul className="md:hidden flex flex-col gap-3 mt-8 px-10 text-black">
                  <li className="flex gap-4 items-center text-[18px]"><span className='text-3xl'>•&nbsp;</span> Real Time Data</li>
                  <li className="flex gap-4 items-center text-[18px]"><span className='text-3xl'>•&nbsp;</span> Branding</li>
                  <li className="flex gap-4 items-center text-[18px]"><span className='text-3xl'>•&nbsp;</span> Strategi Sosial Media</li>
                  <li className="flex gap-4 items-center text-[18px]"><span className='text-3xl'>•&nbsp;</span> Manajemen Proyek</li>
                  <li className="flex gap-4 items-center text-[18px]"><span className='text-3xl'>•&nbsp;</span> Perjanjian Mitra</li>
              </ul>
              <div className="mt-12 flex px-10 md:hidden" data-aos="zoom-in" data-aos-easing="ease-out-cubic"
              data-aos-duration="1000">
                  <a href="" className="bg-btn-primary text-white rounded-lg px-8 md:py-2 py-3 font-[500] md:text-[20px] md:leading-[49.28px] mx-auto w-full text-center" title="Bangun Proyek">Bangun Proyek</a>
              </div>
          </div>
      </section>

      <Footer active={'Beranda'} />
    </main>
  )
}

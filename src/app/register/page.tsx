'use client'
import Image from "next/image"

export default function Home() {
  return (
    <section className="w-full bg-auth-bg relative h-screen flex md:flex-row-reverse flex-col items-center">
        <a href="/">
            <Image
                width={0}
                height={0} 
                className="md:w-48 w-28 absolute top-10 md:left-16 left-4 z-40"
                src="/logo/projequ-logo-auth.svg"
                alt="ProjeQu Logo Aplikasi"
            />
        </a>

        <Image
            width={768}
            height={0} 
            className="md:max-w-4xl md:z-30 z-20 right-16 absolute md:block hidden"
            src="/register.png"
            alt="ProjeQu Logo Aplikasi"
        />

        <div className="w-full md:block hidden"></div>

        <div className="md:pr-[15rem] md:pl-[4rem] px-4 py-28 h-screen flex flex-col gap-5 justify-start text-left w-full rounded-tl-[300px] rounded-bl-[300px] z-20 mx-auto mt-12">
            <h1 className="font-medium md:text-[50px] text-[35px] md:leading-[130%]" data-aos="zoom-in">Selamat Datang!</h1>
            <p className="md:text-[18px] text-[16px] md:leading-[176%] md:max-w-2xl text-[#808080]" data-aos="zoom-in" data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">
                    Selamat datang di tempat kalian bisa ekplorasi kompetensi dan keterampilan kalian bersama dengan ribuan pengguna diluar sana.
            </p>

            <form action="{{ route('auth.register') }}" method="post"  className="flex flex-col gap-4">
                <div className="relative">
                    <label htmlFor="UserEmail" className="sr-only"> Email </label>
                
                    <input
                    type="email"
                    name="email"
                    id="UserEmail"
                    placeholder="Email Address"
                    className="w-full rounded-full px-5 py-4 text-[18px] border-[#3576EC] border pe-10 shadow-sm bg-transparent"
                    />
                
                    <span 
                    className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4"
                    >
                        <path
                        fill-rule="evenodd"
                        d="M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                        clip-rule="evenodd"
                        />
                    </svg>
                    </span>
                </div>

                <div className="relative">
                    <label htmlFor="Password" className="sr-only"> Password </label>
                
                    <input
                    type="password"
                    name="password"
                    id="Password"
                    placeholder="Password"
                    className="w-full rounded-full px-5 py-4 text-[18px] border-[#3576EC] border pe-10 shadow-sm bg-transparent"
                    />
                
                    <span 
                    className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500"
                    >
                    <i className='bx bxs-lock-alt' ></i>
                    </span>
                </div>

                <div className="relative">
                    <label htmlFor="Confirm Password" className="sr-only">Confirm Password </label>
                
                    <input
                    type="password"
                    name="password_confirmation"
                    id="Confirm Password"
                    placeholder="Masukkan Ulang Password"
                    className="w-full rounded-full px-5 py-4 text-[18px] border-[#3576EC] border pe-10 shadow-sm bg-transparent"
                    />
                
                    <span 
                    className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500"
                    >
                    <i className='bx bxs-lock-alt' ></i>
                    </span>
                </div>


                <div className="flex gap-4">
                    <button type="submit" className="w-full text-center bg-btn-primary text-white rounded-full md:px-8 px-5 md:py-1 py-3 font-[500] md:text-[20px] md:leading-[49.28px]" title="Bangun Proyek" data-aos="zoom-in" data-aos-delay="200" data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">Daftar</button>
                    <a href="{{ route('login') }}" className="w-full text-center bg-white border border-btn-primary text-btn-primary rounded-full md:px-8 px-5 md:py-1 py-3 font-[500] md:text-[20px] md:leading-[49.28px]" title="Bangun Proyek" data-aos="zoom-in" data-aos-delay="200" data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">Masuk</a>
                </div>
            </form>

            <p className="md:text-[18px] text-center text-[#808080] mt-8">Atau Daftar Dengan</p>
            <div className="flex gap-4 items-center justify-center">
                <a href="" className="flex items-center justify-center bg-white rounded-full px-2 py-2 w-12 h-12 border border-[#d9d9d9]">
                    <Image
                        width={0}
                        height={0} 
                        className="w-6"
                        src="/logo/google.svg"
                        alt="Masuk Dengan Google"
                    />
                </a>

                <a href="" className="flex items-center justify-center bg-white rounded-full px-2 py-2 w-12 h-12 border border-[#d9d9d9]">
                    <Image
                        width={0}
                        height={0} 
                        className="h-6"
                        src="/logo/facebook.svg"
                        alt="Masuk Dengan Facebook"
                        title="Masuk Dengan Facebook"
                    />
                </a>

                <a href="" className="flex items-center justify-center bg-white rounded-full px-2 py-2 w-12 h-12 border border-[#d9d9d9]">
                    <Image
                        width={0}
                        height={0} 
                        className="w-6"
                        src="/logo/linkedin.svg"
                        alt="Masuk Dengan Linkedin"
                        title="Masuk Dengan Linkedin"
                    />
                </a>
            </div>
        </div>

        <Image
            width={0}
            height={0} src="/elipse-left.png" className="md:w-[55vw] w-[80vw] h-screen absolute z-10 left-0 top-0" alt="Elipse" title="Elipse" />
    </section>
  )
}

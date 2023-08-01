import Image from 'next/image'
import React from 'react'

const Chats = () => {
  return (
    <div className="flex flex-col gap-3 md:gap-8">
            <div className="bg-white h-fit shadow-sm md:flex flex-col md:flex-row md:gap-10 pt-3 rounded-lg">
                <div className="flex flex-col md:gap-2">
                    <div className="flex flex-col md:flex-[1.5] gap-4 md:my-0 h-fit">
                        <div className="flex flex-row items-center pt-4 pb-6 border-b-2 border-b-[#808080] mx-5 justify-between">
                            <p className="font-semibold text-black md:text-lg">James Brown - Manager Proyek</p>

                            <div className="flex flex-row gap-2">
                                <button>
                                    <i className='bx bxs-folder-open text-3xl text-[#808080]' ></i>
                                </button>
                                <button>
                                    <i className='bx bx-search text-3xl text-[#808080]' ></i>
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-1">
                            <div className="flex flex-col gap-2 md:flex-1">
                                <div className="flex flex-col gap-2 px-2 overflow-scroll h-[550px]">
                                    <div className="w-full px-5 flex flex-col justify-between">
                                        <div className="flex flex-col mt-5">
                                          <div className="flex justify-end mb-4">
                                            <div
                                              className="mr-2 py-3 px-4 text-sm bg-[#DBFF60] rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-[#193D5B]"
                                            >
                                              Welcome to group everyone !
                                            </div>
                                            <Image
                                              width={0}
                                              height={0}
                                              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                              className="object-cover h-8 w-8 rounded-full"
                                              alt=""
                                            />
                                          </div>
                                          <div className="flex justify-start mb-4">
                                            <Image
                                              width={0}
                                              height={0}
                                              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                              className="object-cover h-8 w-8 rounded-full"
                                              alt=""
                                            />
                                            <div
                                              className="ml-2 py-3 px-4 bg-gray-400 text-sm rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
                                            >
                                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                                              at praesentium, aut ullam delectus odio error sit rem. Architecto
                                              nulla doloribus laborum illo rem enim dolor odio saepe,
                                              consequatur quas?
                                            </div>
                                          </div>
                                          <div className="flex justify-end mb-4">
                                            <div>
                                              <div
                                                className="mr-2 py-3 px-4 text-sm bg-[#DBFF60] rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-[#193D5B]"
                                              >
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                Magnam, repudiandae.
                                              </div>
                                
                                              <div
                                                className="mt-4 mr-2 py-3 px-4 text-sm bg-[#DBFF60] rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-[#193D5B]"
                                              >
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Debitis, reiciendis!
                                              </div>
                                            </div>
                                            <Image
                                              width={0}
                                              height={0}
                                              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                              className="object-cover h-8 w-8 rounded-full"
                                              alt=""
                                            />
                                          </div>
                                          <div className="flex justify-start mb-4">
                                            <Image
                                              width={0}
                                              height={0}
                                              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                              className="object-cover h-8 w-8 rounded-full"
                                              alt=""
                                            />
                                            <div
                                              className="ml-2 py-3 px-4 bg-gray-400 text-sm rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
                                            >
                                              happy holiday guys!
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                </div>

                                <form className="flex flex-row bg-[#193d5b] w-full px-4 py-3 gap-3 rounded-bl-lg rounded-br-lg">
                                    <input type="text" placeholder="Tulis Sebuah Pesan" className="text-sm px-4 py-3 rounded-full w-full" />
                                    <div className="flex flex-row gap-2">
                                        <button type="submit">
                                            <i className='bx bxs-paper-plane text-3xl text-white'></i>
                                        </button>
                                        <button type="submit">
                                            <i className='bx bx-paperclip text-3xl text-white rotate-[125deg]' ></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
  )
}

export default Chats
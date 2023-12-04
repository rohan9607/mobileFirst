"use client"
import { useAppSelector } from '@/redux/hooks'
import { RootState } from '@/redux/store'
import React from 'react'

type Props = {}

const Profile = (props: Props) => {

    const {user} = useAppSelector((state : RootState) => state.auth);
        return (
        <section className="pt-16 bg-blueGray-50">
            <div className="w-full lg:w-4/12 px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full px-4 flex justify-center">
                                <div className="relative">
                                    <img
                                        alt="..."
                                        src="/images/1631336315049.jpg"
                                        className="shadow-xl rounded-full h-auto align-middle border-none"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-12">
                            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                {user?.username}
                            </h3>
                            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
                                City : {user?.city}
                            </div>
                            <div className="mb-2 text-blueGray-600 mt-3">
                                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
                                Education  : {user?.qualification}
                            </div>
                            <div className="mb-2 text-blueGray-600">
                                <i className="fas fa-university mr-2 text-lg text-blueGray-400" />
                                No. {user?.mobile_number}
                            </div>
                        </div>
                        <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4">
                                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis molestias, aliquid nobis nam voluptatum esse nesciunt atque architecto, aut amet iure placeat molestiae repudiandae! Libero ab repellendus explicabo cum. Libero placeat iste, sapiente quis iusto magni nisi vero, hic qui laborum quidem eligendi a voluptatibus expedita nobis assumenda ullam ipsum?
                                    </p>
                                    <a
                                        href="javascript:void(0);"
                                        className="font-normal text-pink-500"
                                    >
                                        Show more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Profile
"use client"
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { getAllImages, uploadImage } from '@/redux/thunks/main';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import s from "../../../backend/uploads/main-qimg-f70fb7463dba05b2e0a57e9c863f5c70-lq.jpg"
import { Span } from '@/components/utilityComponents/span/Span';
type Props = {}

const ImageList = (props: Props) => {
    const dispatch = useAppDispatch();
    const [selectedImage, setSelectedImage] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [images, setImages] = useState([])
    const {uploadIsLoading} = useAppSelector((state : RootState) => state.main)
    const {user} = useAppSelector((state : RootState) => state.auth)

    useEffect(() => {
        dispatch(getAllImages())
        .unwrap()
        .then((res : any) => {
            if (res.success) {
                setImages(res.data)
                setSelectedImage(null)
            }
        })
    }, [uploadIsLoading])

    const handleImageUpload = (e: any) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];
            if (allowedTypes.includes(selectedFile.type)) {
                setSelectedImage(selectedFile);
                setErrorMessage('');
            } else {
                setSelectedImage(null);
                setErrorMessage('Please select a valid image file (png, jpeg, jpg, gif).');
            }
        }
    }

    const submitImage = () => {
        dispatch(uploadImage({file : selectedImage}))
        .unwrap()
        .then((res : any) => {
            if (res.success) {
                Swal.fire({
                    text : "Image uploaded successfully",
                    icon : 'success',
                    title : "Success" 
                })
            }
            else{
                Swal.fire({
                    text : "oops! Something went wrong!",
                    icon : 'error',
                    title : "Error" 
                })
            }
        })
    }

    console.log({images});
    
    return (
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
            <h1 className='text-5xl text-center mb-8'></h1>
            {Object.values(user)?.length > 0 && user?.user_type === '1' &&  <div className="flex w-full mb-10 items-center justify-center bg-grey-lighter flex-col">
                <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-600 hover:text-white">
                    <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span className="mt-2 text-base leading-normal">Select a file</span>
                    <input onChange={handleImageUpload} type="file" className="hidden" />
                </label>
                <span className="text-red-500">{errorMessage}</span>
                <span className="text-black-500 mt-5">{selectedImage?.name}</span>
                {selectedImage && <button onClick={submitImage} className="mt-7 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white-600  rounded-md group-hover:bg-opacity-0">
                        {uploadIsLoading ? "Loading...." : "Upload"}
                    </span>
                </button>}

            </div>}

            <div className="-m-1 flex flex-wrap md:-m-2">
                {images?.length > 0 && images?.map((img) => (
                        <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={'/uploadedImages/' + img?.imagename}
                            />
                        </div>
                    </div>
                ))}
                {images?.length === 0 && <Span className='text-center text-3xl mx-auto'>Images not found</Span>}
            </div>
        </div>

    )
}

export default ImageList
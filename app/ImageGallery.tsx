"use client"
import { useState } from "react"
import { urlFor } from "./lib/sanity"
import Image from "next/image"
interface iAppProps {
  images: any
}
export default function ImageGallery({ images }: iAppProps) {
  const [bigImage, setBigImage] = useState(images[0]);
  const handleSmallImageClick = (image: any) =>{
    setBigImage(image)
  }
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last gap-4 flex lg:order-none lg:flex-col">
        {images.map((image: any, idx: any)=>(
          <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
            <Image 
              src={urlFor(image).url()}
              width={100}
              height={100}
              alt="photo"
              className="h-full w-full object-cover object-center cursor-pointer" 
              onClick={()=> handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
          <Image 
            src={urlFor(bigImage).url()}
            width={500}
            height={500}
            alt="Photo"
            className="h-full w-full object-cover object-center"
          />
          <span className="absolute top-0 left-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">Sale</span>
      </div>
    </div>
  )
}

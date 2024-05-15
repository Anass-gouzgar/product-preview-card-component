import React from 'react'
import Image from 'next/image'
import desktopImg from '../../../../public/image-product-desktop.jpg'
import mobileImg from '../../../../public/image-product-mobile.jpg'

const index = () => {
  return (
    <div className="md:w-[340px] md:h-[550px] w-80">
      <Image
        src={desktopImg}
        alt="Picture of the author"
        width={0}
        height={0}
        className="hidden md:block rounded-l-2xl rounded-bl-2xl h-full object-cover"
      />
      <Image
        src={mobileImg}
        alt="Picture of the author"
        width={0}
        height={0}
        className="md:hidden rounded-t-xl h-full rounded-tr-xl object-cover"
      />
    </div>
  );
}

export default index
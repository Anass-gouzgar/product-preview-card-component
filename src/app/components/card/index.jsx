import React from 'react'
import Image from 'next/image';
import shopIcon from '../../../../public/icon-cart.svg'

const index = () => {
  return (
    <div className="md:w-[340px] md:h-[550px] w-80 bg-white md:rounded-tr-2xl md:rounded-br-2xl flex flex-col space-y-2 md:space-y-0 justify-around p-6 rounded-b-lg">
      <h3 className="font-montserrat tracking-[8px] font-semibold uppercase text-myGray ">
        Perfume
      </h3>
      <h1 className="capitalize md:text-5xl text-3xl font-fraunces font-bold">Gabrielle Essence Eau De Parfum</h1>
      <p className='text-myGray font-montserrat text-sm md:text-base whitespace-break-spaces font-semibold md:font-bold'>
        A floral, 
        solar and voluptuous 

        interpretation composed by 

        Olivier Polge, Perfumer-Creator 

        for the House of CHANEL.
      </p>
      <div className="flex gap-5">
        <h1 className=" text-4xl font-fraunces font-bold text-myGreen">
          {" "}
          $149.99
        </h1>
        <h2 className="text-lg font-fraunces line-through font-bold text-myGray">
          {" "}
          $169.99
        </h2>
      </div>
      <button className="bg-myGreen flex px-8 py-3 items-center text-xl font-bold w-full justify-center rounded-lg mx-auto text-white gap-3">
        <Image src={shopIcon} alt="shop icon" className="" />
        Add to Card
      </button>
    </div>
  );
}

export default index
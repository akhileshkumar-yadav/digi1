import React from 'react'
import phoneData from './dummyproduct';
import phones from './phone';
import camara from './product';
const PhoneProductListing = () => {
    const onlyPh = () => {
        return camara.map((items) => (
            <div className='w-full md:w-1/5 mb-6  px-2'>
                <div className={`rounded-lg shadow-lg w-full  flex justify-center  p-4 `}>
                    <img className=' h-[170px]    object-cover rounded-lg trnasition delay-100 duration-500  ease-linear  hover:scale-125' src={items.img} alt="" />
                </div>
                <div className='my-1'>
                <h3 className='text-lg font-semibold hover:text-yellow-700 text-gray-800'>{items.details}</h3>
                    <button className='bg-red-500 text-white px-1 block rounded-sm'>{items.festiwal}</button>
                    <h1 className='text-md inline-block'>$</h1>
                    <h1 className='text-xl font-semibold inline-block pr-1'> {items.price}</h1>
                    <h2 className='text-gray-500  inline-block '> MRP:</h2>
                    <h3 className='text-gray-500 line-through inline-block pr-1 pl-1 text-sm'> ${items.discount}</h3>
                    <h2 className='text-gray-500 inline-block pr-1 '>{items.percentOff}</h2>
                    <br />
                    <h1 className='text-blue-600 font-bold inline-block font-sans'>prime:</h1>
                    <h5 className='inline-block'>  {items.lastDate}</h5>
                    <h5 className='text-md font-normal text-gray-600'> {items.delivery}</h5>
                    <button className='rounded-xl bg-yellow-300  px-3 my-2 hover:bg-yellow-500  text-md'>{items.button}</button>
                </div>
            </div>
        )
    )}
    const displayCard = () => {
        // const weatherCondition = (temp) => {
        //     if(temp<=28) {
        //         return 'bg-sky-500 text-white'
        //     }
        //     else{
        //         return 'bg-red-500 text-white'
        //     }
        // };
        return phoneData.map((item) => (
            <div className='w-full md:w-1/5 mb-6 px-2'>
                <div className={`rounded-lg shadow-lg w-full  flex justify-center  p-4`}>
                    <img className=' h-[160px]  object-cover rounded-lg' src={item.img} alt="" />
                </div>
                <div className='p-2'>
                    <h3 className='text-lg font-semibold hover:text-yellow-700 text-gray-800'>{item.details}</h3>
                    <button className='bg-red-500 text-white px-1 block rounded-sm'>{item.festiwal}</button>
                    <h1 className='text-md inline-block'>$</h1>
                    <h1 className='text-xl font-semibold inline-block pr-1'> {item.price}</h1>
                    <h2 className='text-gray-500  inline-block '> MRP:</h2>
                    <h3 className='text-gray-500 line-through inline-block pr-1 pl-1 text-sm'> ${item.discount}</h3>
                    <h2 className='text-gray-500 inline-block pr-1 '>{item.percentOff}</h2>
                    <br />
                    <h1 className='text-blue-600 font-bold inline-block font-sans'>prime:</h1>
                    <h5 className='inline-block'>  {item.lastDate}</h5>
                    <h5 className='text-md font-normal text-gray-600'> {item.delivery}</h5>
                    <button className='rounded-xl bg-yellow-300  px-3 my-2 hover:bg-yellow-500  text-md'>{item.button}</button>
                </div>
            </div>
        ))
    }
    const displayCards = () => {
        const priceCon = (price) => {
            if(price>=900) {
                return 'bg-green-500 text-white'
            }
            else{
                return ''
            }
        };
        return phones.map((item) => (
            <div className='w-full md:w-1/5 mb-6 px-2'>
                <div className={`rounded-lg shadow-lg w-full  flex justify-center  p-4`}>
                    <img className=' h-[220px]   object-cover rounded-lg ' src={item.img} alt="" />
                </div>
                <div className='p-2'>
                    <h3 className={`text-lg font-semibold hover:text-yellow-700 text-gray-800 `}>{item.details}</h3>
                    <button className='bg-red-500 text-white px-1 block rounded-sm'>{item.festiwal}</button>
                    <h1 className='text-md inline-block'>$</h1>
                    <h1 className='text-xl font-semibold inline-block pr-1'> {item.price}</h1>
                    <h2 className='text-gray-500  inline-block '> MRP:</h2>
                    <h3 className='text-gray-500 line-through inline-block pr-1 pl-1 text-sm'> ${item.discount}</h3>
                    <h2 className='text-gray-500 inline-block pr-1 '>{item.percentOff}</h2>
                    <br />
                    <h1 className={`${priceCon(item.price)} inline-block rounded-sm mr-1 px-1` }>{item.save}</h1>
                    <h1 className='inline-block pr-1'>with coupan</h1>
                    <br />
                    <h1 className='text-blue-600 font-bold inline-block font-sans'>prime:</h1>
                    <h5 className='inline-block'>  {item.lastDate}</h5>
                    <h5 className='text-md font-normal text-gray-600'> {item.delivery}</h5>
                    <button className='rounded-xl bg-yellow-300  px-3 my-2 hover:bg-yellow-500  text-md'>{item.button}</button>
                </div>
            </div>
        ))
    }
    return (
        <>
            <h1 className='text-2xl font-bold my-4 text-center '> Today Phone Sell</h1>
            <div className="flex flex-wrap m-8">
                {displayCard()}
                {displayCards()}
                {onlyPh()}
            </div>

        </>
    )
}

export default PhoneProductListing
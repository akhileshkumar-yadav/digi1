import React from 'react'
import Data from './dummy'
const ProductListing = () => {

    const displayCard = () => {
        const weatherCondition = (temp) => {
            if(temp<=28) {
                return 'bg-sky-500 text-white'
            }
            else{
                return 'bg-red-500 text-white'
            }
        };
        return Data.map((item) => (
            <div className='w-full md:w-1/3 mb-6'>
                <div className={`rounded-lg shadow-lg p-4 mx-4 ${weatherCondition(item.temperature)}`}>
                    <img className='w-full h-48 object-cover rounded-lg' src={item.img} alt="" />
                    <h3 className='text-lg font-semibold text-gray-800'>{item.location}</h3>
                    <hr />
                    <h5>Temperature : {item.temperature}</h5>
                    <h5>Humidity :{item.huminity}</h5>
                </div>
            </div>
        ))
    }
    return (
        <>
            <h1 className='text-center  text-3xl font-bold mb-8'>Today's Sky story</h1>
            <div className="flex flex-wrap mx-auto">
                {displayCard()}
            </div>
        </>
    )
}

export default ProductListing
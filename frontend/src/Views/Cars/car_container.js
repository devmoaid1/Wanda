import React from 'react'
import {Link} from 'react-router-dom' 
function CarContainer(props){ 

    const car=props.car
    return (
        <div className=" flex flex-col   rounded-md bg-white ml-3 mr-3 overflow-hidden shadow-lg hover:shadow-xlg h-full " key={car.id}>
        <div className="w-full h-1/2">
        <img src={car.picture} className="w-full h-full" alt="pic"></img>
        </div>
        <div className="flex flex-col px-3 space-y-6">
        <h1 className="text-2xl font-semibold ">{car.name}</h1>
      
        <span className="block font-medium text-gray-600">{(car.price).toLocaleString('en')} Egp</span> 

        <div className="inline-block ">
        <Link to={{ pathname: '/select/', state: car }}> <button class="bg-red-600 hover:bg-red-700 text-white font-large py-2 px-8  rounded">
  Book Now
</button></Link>
<Link to={`/catalog/${car.id}`}> <button class="bg-gray-800 hover:bg-gray-700 text-white font-large py-2 px-4  rounded">
  View Catalog
</button> </Link>
        </div>     
        </div>
      </div>
    )
}

export default CarContainer
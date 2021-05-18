import React from 'react'
import {Spinner} from 'react-bootstrap'
function Loader() {
    return (
        <div className="flex flex-col justify-center items-center space-y-40">
                     <div classsName="h-90 w-90 bg-red-300"> </div> 
                     <div classsName="h-48 w-90 bg-red-300"> </div>
                    <div> 
                    
                       
                    <Spinner
                    as="div"
                    animation="border"
                    size="xl"
                    role="status"
                    aria-hidden="true"
                    className="mx-auto"
      
                    />
                    </div>
                    
                     </div>
    )
}

export default Loader

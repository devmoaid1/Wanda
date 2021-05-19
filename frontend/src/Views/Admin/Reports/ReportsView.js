import React from 'react'
import Sidebar from '../../Components/Sidebar'
import { useSelector,useDispatch} from 'react-redux'

function ReportsView() {

    const dispatch=useDispatch()
    const auth=useSelector((state)=>state.auth)

    return (
        <div className="grid grid-cols-5">
             <Sidebar user={auth.user}/>
            <div className=' flex flex-col space-y-20 py-10 px-10 col-span-4 h-screen'>
            <div>
               <h1 className="text-3xl font-semibold font-body "> Reports List</h1> 
            </div>


            
            <table class="table-auto  ">
              <thead>
                  <tr>
                      <th class="p-3 font-bold uppercase bg-gray-300 text-gray-600 border border-gray-300 hidden lg:table-cell">ID</th>
                      <th class="p-3 font-bold uppercase bg-gray-300 text-gray-600 border border-gray-300 hidden lg:table-cell">Title</th>
                      <th class="p-3 font-bold uppercase bg-gray-300 text-gray-600 border border-gray-300 hidden lg:table-cell">Date</th>
                      <th class="p-3 font-bold uppercase bg-gray-300 text-gray-600 border border-gray-300 hidden lg:table-cell">Actions</th>
                  </tr>
              </thead>
                  
           
                  
          </table>
                 
            </div>
            
        </div>
    )
}

export default ReportsView

import axios from "axios";
import { toastOnError } from "../utilities";
import  { GET_DEALERSHIPS,GET_DEALERSHIP } from "./types"; 



export const getDealers=()=>dispatch=>{

    axios.get('http://127.0.0.1:8000/api/dealerships/').then(res=>{
        dispatch(
            {
                type:GET_DEALERSHIPS,
                payload:res.data
            }
            );
          const dealers=res.data
          dispatch(getMostSales(dealers))        
            
    }).catch(err=>{
        toastOnError(err);
    });
}  

export const getMostSales=(dealers)=>dispatch=>{
    let biggest={};      
    let bigger=0;
    
    
    for(let i=0;i<dealers.length;i++){
        if(dealers[i].sales>bigger){
            bigger=dealers[i].sales
        } 
    }
    for(let i=0;i<dealers.length;i++){
        if(dealers[i].sales===bigger){
            biggest=dealers[i]
        }
        
    }
    
    dispatch({
        type:GET_DEALERSHIP,
        payload:biggest
    })        

}
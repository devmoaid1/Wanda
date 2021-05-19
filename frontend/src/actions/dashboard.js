import axios from "axios";
import { toastOnError } from "../utilities";
import  { GET_DEALERSHIPS,GET_DEALERSHIP,GET_TOTAL_SALES ,GET_DEALERS_SALES} from "./types"; 
import {setLoading,unsetLoading} from './login'


export const getDealers=()=>dispatch=>{
    dispatch(setLoading())
    axios.get('http://127.0.0.1:8000/api/dealerships/').then(res=>{
        dispatch(
            {
                type:GET_DEALERSHIPS,
                payload:res.data
            }
            );
          const dealers=res.data
          dispatch(getMostSales(dealers))
          dispatch(getTotalSales(dealers))
          dispatch(getSalesList(dealers))        
        dispatch(unsetLoading())
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

export const getTotalSales=(dealers)=>dispatch=>{
          
    let total=0;
    
    
    for(let i=0;i<dealers.length;i++){
       total+=dealers[i].sales
    }
    
    
    dispatch({
        type:GET_TOTAL_SALES,
        payload:total
    })        

}

export const getSalesList=(dealers)=>dispatch=>{
          
    let dealer={name:'',
value:0};
     let salesList=[]
    
    for(let i=0;i<dealers.length;i++){
       dealer={name:dealers[i].name,value:dealers[i].sales} 
       salesList.push(dealer)
    }
    
    
    dispatch({
        type:GET_DEALERS_SALES,
        payload:salesList
    })        

}
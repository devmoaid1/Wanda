import axios from 'axios'
import * as actionTypes from './types';



export const authStart=()=>{
    return{
        type:actionTypes.AUTH_START
    }
} 

export const authSuccess=token=>{
    return{
        type:actionTypes.AUTH_SUCCSESS,
        token:token
    }

} 

export const authFail=error=>{

    return{
        type:actionTypes.AUTH_FAIL,
        error:error
    }
} 



export const logout=()=>{
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
    return {
        type:actionTypes.AUTH_LOGOUT
    }
}

 export const checkAuthTimeout=expirationTime=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(logout())
        },expirationTime*1000)

    }
}

export const authLogin=(username,password)=>{
    return dispatch=>{
        dispatch(authStart()) 
        axios.post('/rest-auth/login',{
            username:username,
            password:password
        }).then(res=>{
            const token=res.data.key;
            const expirationDate=new Date(new Date().getTime()+3600 *1000);
            localStorage.setItem('token',token);
            localStorage.setItem('expirationDate',expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        }).catch(err=>{
            dispatch(authFail(err))
        })
        
    }
}

export const authSignUp=(username,email,password,fullname,phone,address)=>{
    return dispatch=>{
        dispatch(authStart()) 
        axios.post('/rest-auth/registration',{
            username:username,
            email:email,
            password:password,
            fullname:fullname,
            phone:phone,
            address:address
        }).then(res=>{
            const token=res.data.key;
            const expirationDate=new Date(new Date().getTime()+3600 *1000);
            localStorage.setItem('token',token);
            localStorage.setItem('expirationDate',expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        }).catch(err=>{
            dispatch(authFail(err));
        })
        
    } 

}

export const authCheckState=()=>{
    return dispatch=>{ 
        const token=localStorage.getItem('token');

        if(token===undefined){
             dispatch(logout());
        }else{
            const expirationDate=new Date(localStorage.getItem('expirationDate'));
            if(expirationDate<=new Date()){
                dispatch(logout())
            }else{
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout( (expirationDate-new Date().getTime()) /1000) )
            }
        }
       
    }
}
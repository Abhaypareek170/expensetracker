import  { createContext } from 'react'

const AuthContext = createContext({
    token:'',
    isLoggedin:false,
    login:(token)=>{},
    logout:()=>{}
})



export default AuthContext;
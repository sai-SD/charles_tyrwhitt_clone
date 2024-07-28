import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({children}){
    const [isLogin,setIsLogin] = useState(false)
    const [name,setName] = useState('')

    function toggleLogin(){
        setIsLogin(!isLogin)
    }
    return(
        <AuthContext.Provider value={{isLogin, toggleLogin,name,setName}}>{children}</AuthContext.Provider>
    )
}
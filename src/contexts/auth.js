import React, { createContext, useState } from "react";

export const AuthContext = createContext()

function AuthProvider({ children }){
    const [ user, setUser ] = useState({
        name: "João Dantas",
        balance: 300.00,
    })

    return(
        <AuthContext.Provider value={{ signed: !!user, user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
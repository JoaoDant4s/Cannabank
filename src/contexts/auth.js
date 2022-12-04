import React, { createContext, useState } from "react";

export const AuthContext = createContext()

function AuthProvider({ children }) {
    const [user, setUser] = useState({
        account: {
            accountNumber: "BE35 2421 1089 9197",
            balance: 0,
            id: 4,
        },
        email: "joaozinho@gmail.com",
        id: 4,
        password: "$2a$10$v67BETlev/wxIUyxMU6M.uMIV/3ZTJ0qoHp4Cnzc34TD78PZ.uf6K",
        transactions: [],
        username: "Joao Dantas1"
    });

    return (
        <AuthContext.Provider value={{ signed: !!user, user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
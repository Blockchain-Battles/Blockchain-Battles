import React, { createContext, useEffect, useState } from 'react'
// SERVICES
import { authWithGoogle, getUser } from '@/services/parse/userService'
// TYPES
import { UserType } from '@/services/parse/userService'

interface UserContextType {
    user: UserType | undefined
    login: (token: string) => Promise<any>
}

const AuthContext = createContext<UserContextType | undefined>(undefined)

interface AuthProviderProps {
    children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<UserType>()

    useEffect(() => {
        const user = getUser()
        setUser(user)
    }, [])

    const login = async (token: string): Promise<any> => {
        const user = await authWithGoogle(token)
        setUser(user)
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                login
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext

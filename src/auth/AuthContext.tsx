/*
/!*
import {createContext, type ReactNode, useContext, useState} from "react";

interface AuthContextType {
    user: null | { name: string };
    login: (name: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<null | { name: string }>(null);

    const login = (name: string) => setUser({ name });
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
*!/
export function useAuth() {
    /!*const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");*!/
    return {};
}

*/
